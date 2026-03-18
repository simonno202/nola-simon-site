/**
 * Fetches the podcast RSS feed and merges new episodes into episodes.ts.
 * Run: node scripts/sync-episodes.mjs
 *
 * - Fetches from the Libsyn RSS feed (via Podpage redirect)
 * - Parses episode data (title, date, season, description, slug)
 * - Merges with existing episodes (keeps manually curated data like topics, guests)
 * - New episodes are added with auto-generated slugs and placeholder topics
 * - Existing episodes are NOT overwritten (your manual edits are preserved)
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const EPISODES_FILE = resolve(__dirname, "../src/data/episodes.ts");

const RSS_URL =
  "https://rss.libsyn.com/shows/390218/destinations/3209099.xml";

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function parseDate(pubDate) {
  const d = new Date(pubDate);
  return d.toISOString().split("T")[0]; // YYYY-MM-DD
}

function extractText(xml, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const match = xml.match(re);
  if (!match) return "";
  return match[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function extractAttr(xml, tag, attr) {
  const re = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, "i");
  const match = xml.match(re);
  return match ? match[1] : "";
}

async function fetchFeed() {
  console.log("Fetching RSS feed...");
  const res = await fetch(RSS_URL, {
    headers: { "User-Agent": "NolaSite-EpisodeSync/1.0" },
    redirect: "follow",
  });

  if (!res.ok) {
    throw new Error(`RSS fetch failed: ${res.status} ${res.statusText}`);
  }

  return await res.text();
}

function parseEpisodes(xml) {
  const items = xml.match(/<item[\s\S]*?<\/item>/g) || [];
  console.log(`Found ${items.length} episodes in feed`);

  return items.map((item) => {
    const title = decodeEntities(extractText(item, "title"));
    const pubDate = extractText(item, "pubDate");
    const desc = decodeEntities(extractText(item, "description")).slice(0, 300);
    const season = parseInt(extractText(item, "itunes:season") || "0", 10);
    const link = extractText(item, "link");

    // Extract slug from the link URL
    let slug = slugify(title);
    if (link) {
      const urlSlug = link.split("/").filter(Boolean).pop();
      if (urlSlug && urlSlug.length > 3) {
        slug = urlSlug;
      }
    }

    return {
      title,
      date: parseDate(pubDate),
      season,
      desc,
      slug,
    };
  });
}

function loadExistingEpisodes() {
  const content = readFileSync(EPISODES_FILE, "utf-8");

  // Extract the array content between EPISODES: Episode[] = [ ... ];
  const match = content.match(
    /export const EPISODES:\s*Episode\[\]\s*=\s*\[([\s\S]*?)\];/
  );
  if (!match) {
    throw new Error("Could not parse existing episodes from episodes.ts");
  }

  // Parse the JSON-like array (each line is a JSON object)
  const arrayStr = `[${match[1]}]`;
  try {
    return JSON.parse(arrayStr);
  } catch {
    // Fallback: eval-style parse for single-quoted strings etc
    console.warn("JSON parse failed, trying eval fallback...");
    return eval(arrayStr);
  }
}

function mergeEpisodes(existing, fromFeed) {
  const existingSlugs = new Set(existing.map((e) => e.slug));
  const existingTitles = existing.map((e) => e.title.toLowerCase().trim());
  const existingDates = new Set(existing.map((e) => e.date));
  const maxId = Math.max(...existing.map((e) => e.id), 0);

  let newCount = 0;
  const newEpisodes = [];

  for (const ep of fromFeed) {
    const titleLower = ep.title.toLowerCase().trim();

    // Skip if we already have this episode by slug
    if (existingSlugs.has(ep.slug)) continue;

    // Skip if exact title match
    if (existingTitles.includes(titleLower)) continue;

    // Fuzzy title match: skip if an existing title starts with or contains
    // the first 40 chars of this title (handles truncated vs full titles)
    const titlePrefix = titleLower.slice(0, 40);
    const fuzzyMatch = existingTitles.some(
      (t) => t.startsWith(titlePrefix) || titleLower.startsWith(t.slice(0, 40))
    );
    if (fuzzyMatch) continue;

    // Skip if same date AND similar slug prefix (likely same episode)
    if (existingDates.has(ep.date)) {
      const slugPrefix = ep.slug.slice(0, 30);
      const dateSlugMatch = existing.some(
        (e) => e.date === ep.date && e.slug.startsWith(slugPrefix)
      );
      if (dateSlugMatch) continue;
    }

    newCount++;
    newEpisodes.push({
      id: maxId + newCount,
      title: ep.title,
      date: ep.date,
      guest: null,
      type: "solo",
      season: ep.season,
      topics: ["Future of Work"], // placeholder — edit manually
      slug: ep.slug,
      desc: ep.desc,
    });
  }

  if (newCount === 0) {
    console.log("No new episodes found. Everything is up to date.");
    return existing;
  }

  console.log(`Found ${newCount} new episode(s):`);
  newEpisodes.forEach((e) => console.log(`  + ${e.title} (${e.date})`));

  // Merge: new episodes first (most recent), then existing
  const merged = [...newEpisodes, ...existing];
  // Sort by date descending
  merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return merged;
}

function writeEpisodes(episodes) {
  const episodesJson = episodes
    .map((e) => `  ${JSON.stringify(e)}`)
    .join(",\n");

  const content = `export interface Episode {
  id: number;
  title: string;
  date: string;
  guest: string | null;
  type: "solo" | "guest";
  season: number;
  topics: string[];
  slug: string;
  desc: string;
}

export const PODCAST_BASE_URL =
  "https://www.podpage.com/hope-possibilties-a-love-letter-to-the-future-of-work";

export const APPLE_PODCASTS_URL =
  "https://podcasts.apple.com/us/podcast/id1602822494?mt=2&ls=1";
export const SPOTIFY_URL =
  "https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7";

export const EPISODES: Episode[] = [
${episodesJson},
];
`;

  writeFileSync(EPISODES_FILE, content, "utf-8");
  console.log(`Wrote ${episodes.length} episodes to episodes.ts`);
}

// ── Main ──
async function main() {
  try {
    const xml = await fetchFeed();
    const feedEpisodes = parseEpisodes(xml);
    const existing = loadExistingEpisodes();
    const merged = mergeEpisodes(existing, feedEpisodes);
    writeEpisodes(merged);
    console.log("Done!");
  } catch (err) {
    console.error("Episode sync failed:", err.message);
    process.exit(1);
  }
}

main();
