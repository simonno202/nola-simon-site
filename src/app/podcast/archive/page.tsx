import type { Metadata } from "next";
import Link from "next/link";
import { getAllEpisodes, has, type Episode } from "@/lib/episodes";
import { EPISODES } from "@/data/episodes";
import "../podcast.css";

const SITE = "https://nolasimon.com";

export const metadata: Metadata = {
  title: "Transcript Archive — Hope + Possibilities | Nola Simon",
  description:
    "Full transcripts, summaries, and key questions answered across episodes of Hope + Possibilities with Nola Simon — futurism, the future of work, and the Assumption-Ground Audit.",
  alternates: { canonical: `${SITE}/podcast/archive` },
};

/* JSON-LD for the series itself — anchors the whole cluster.
   Name/url match the PodcastSeries emitted on /podcast so both pages
   describe the same entity. */
function seriesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Hope + Possibilities: A Love Letter to the Future of Work",
    url: `${SITE}/podcast`,
    author: { "@type": "Person", name: "Nola Simon" },
  };
}

/* ItemList JSON-LD — ties the episode pages together as one ordered list. */
function itemListJsonLd(episodes: Episode[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Hope + Possibilities transcript archive",
    itemListElement: episodes.map((ep, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: ep.title,
      url: `${SITE}/podcast/${ep.slug}`,
    })),
  };
}

/* The catalogue in @/data/episodes carries topics + a one-line description
   per episode; transcript pages are keyed by transcriptSlug when the
   catalogue slug differs. */
const catalogueBySlug = new Map(
  EPISODES.map((c) => [c.transcriptSlug ?? c.slug, c])
);

export default function PodcastArchiveIndex() {
  const episodes = getAllEpisodes();

  return (
    <div className="hp-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seriesJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd(episodes)),
        }}
      />
      <div className="hp-wrap">
        <header className="hp-index-head">
          <p className="hp-backlink">
            <Link href="/podcast">&larr; About the show</Link>
          </p>
          <h1>Transcript Archive</h1>
          <p>
            Episodes of Hope + Possibilities, transcribed in full &mdash; each
            with a summary, the key questions answered, and the guest&rsquo;s
            work linked. The complete catalogue of 100+ episodes is being
            published here, dates intact. Conversations on the future of work,
            futurism, and the assumptions organizations run on.
          </p>
        </header>

        <ul className="hp-index-list">
          {episodes.map((ep) => {
            const cat = catalogueBySlug.get(ep.slug);
            const blurb = cat && has(cat.desc) ? cat.desc : ep.abstract;
            return (
              <li className="hp-ep" key={ep.slug}>
                <Link href={`/podcast/${ep.slug}`}>
                  <div className="row">
                    <h2>{ep.title}</h2>
                    <time className="date" dateTime={ep.publishDate}>
                      {ep.publishDateHuman}
                    </time>
                  </div>
                  <div className="sub">
                    {ep.guest ? (
                      <>
                        with <span className="guest">{ep.guest.name}</span>
                        {has(ep.guest.title) ? ` · ${ep.guest.title}` : ""}
                      </>
                    ) : (
                      <>Solo episode</>
                    )}
                  </div>
                  {has(blurb) && <p className="desc">{blurb}</p>}
                  {cat && cat.topics.length > 0 && (
                    <div className="tags">
                      {cat.topics.slice(0, 5).map((t) => (
                        <span className="tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
