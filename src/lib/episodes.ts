import fs from "node:fs";
import path from "node:path";

/* ---- Episode types (match the extraction contract + show-notes merge) ---- */

export interface GuestLinks {
  linkedin?: string | null;
  website?: string | null;
}
export interface Guest {
  name: string;
  title?: string | null;
  org?: string | null;
  credentials?: string | null;
  links?: GuestLinks | null;
}
export interface Host {
  name: string;
  title: string;
  credentials: string;
}
export interface QA {
  timestamp?: string | null;
  question: string;
  answer: string;
}
export interface Chapter {
  time?: string | null;
  label: string;
}
export interface Turn {
  time?: string | null;
  speaker: string;
  text: string;
}
export interface Resource {
  label: string;
  type: string;
  url: string;
  note?: string | null;
}
export interface RelatedEpisode {
  title: string;
  url: string;
}
export interface RelatedLink {
  title: string;
  url: string;
}
export interface CtaQuote {
  text: string;
  source: string;
}
export interface Listen {
  apple?: string | null;
  spotify?: string | null;
  youtube?: string | null;
}
export interface Episode {
  number: number | null;
  slug: string;
  title: string;
  show: string;
  format?: string | null;
  host: Host;
  guest?: Guest | null;
  publishDate: string; // YYYY-MM-DD
  publishDateHuman: string;
  updatedDate: string;
  updatedDateHuman: string;
  duration?: string | null;
  durationISO?: string | null;
  listen?: Listen | null;
  abstract: string;
  takeaways: string[];
  keyQA: QA[];
  chapters: Chapter[];
  transcript: Turn[];
  hostNote?: string | null;
  ctaQuote?: CtaQuote | null;
  resources?: Resource[] | null;
  relatedEpisodes?: RelatedEpisode[] | null;
  relatedLinks?: RelatedLink[] | null;
}

/* ---- Loader: reads /src/content/episodes/<slug>.json at build time ---- */

const DIR = path.join(process.cwd(), "src", "content", "episodes");

export function getAllEpisodeSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}

export function getEpisodeBySlug(slug: string): Episode | null {
  const fp = path.join(DIR, `${slug}.json`);
  if (!fs.existsSync(fp)) return null;
  return JSON.parse(fs.readFileSync(fp, "utf8")) as Episode;
}

/** All episodes, newest first (by publishDate). */
export function getAllEpisodes(): Episode[] {
  return getAllEpisodeSlugs()
    .map(getEpisodeBySlug)
    .filter((e): e is Episode => e !== null)
    .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

/* ---- Small render helpers shared by the pages ---- */

export const has = (v: unknown): boolean =>
  v !== null && v !== undefined && v !== "";

export const anyListen = (l?: Listen | null): boolean =>
  !!l && Object.values(l).some(has);
