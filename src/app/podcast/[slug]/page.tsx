import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllEpisodeSlugs,
  getEpisodeBySlug,
  has,
  anyListen,
  type Episode,
} from "@/lib/episodes";
import "../podcast.css";

const SITE = "https://nolasimon.com";

/* Pre-render every episode at build time. */
export function generateStaticParams() {
  return getAllEpisodeSlugs().map((slug) => ({ slug }));
}

/* Per-episode SEO metadata. Canonical stays on nolasimon.com. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ep = getEpisodeBySlug(slug);
  if (!ep) return {};
  const url = `${SITE}/podcast/${ep.slug}`;
  return {
    title: `${ep.title} — ${ep.show}`,
    description: ep.abstract,
    alternates: { canonical: url },
    openGraph: {
      title: ep.title,
      description: ep.abstract,
      url,
      type: "article",
      publishedTime: ep.publishDate,
      modifiedTime: ep.updatedDate,
    },
    twitter: { card: "summary_large_image", title: ep.title, description: ep.abstract },
  };
}

/* Build the JSON-LD graph: PodcastEpisode + FAQPage (+ guest Person, + Book). */
function buildJsonLd(ep: Episode) {
  const url = `${SITE}/podcast/${ep.slug}`;
  const books = (ep.resources ?? []).filter((r) => r.type === "Book");

  const podcastEpisode: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    url,
    name: ep.title,
    ...(has(ep.number) ? { episodeNumber: ep.number } : {}),
    datePublished: ep.publishDate,
    dateModified: ep.updatedDate,
    ...(has(ep.durationISO) ? { timeRequired: ep.durationISO } : {}),
    description: ep.abstract,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Hope + Possibilities: A Love Letter to the Future of Work",
      url: `${SITE}/podcast`,
    },
    author: { "@type": "Person", name: ep.host.name, jobTitle: ep.host.title },
    ...(ep.guest
      ? {
          about: {
            "@type": "Person",
            name: ep.guest.name,
            ...(has(ep.guest.title) ? { jobTitle: ep.guest.title } : {}),
            ...(ep.guest.links
              ? { sameAs: Object.values(ep.guest.links).filter(has) }
              : {}),
          },
        }
      : {}),
    ...(books.length
      ? {
          mentions: books.map((b) => ({
            "@type": "Book",
            name: b.label.replace(/\s*\(book\)/i, ""),
            url: b.url,
            ...(ep.guest ? { author: { "@type": "Person", name: ep.guest.name } } : {}),
          })),
        }
      : {}),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ep.keyQA.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: { "@type": "Answer", text: qa.answer },
    })),
  };

  return [podcastEpisode, faqPage];
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ep = getEpisodeBySlug(slug);
  if (!ep) notFound();

  const byline = ep.guest ? ep.guest.name : ep.host.name;
  const bylineRole = ep.guest ? ep.guest.title : ep.host.title;
  const jsonLd = buildJsonLd(ep);
  const hasRelated =
    (ep.relatedEpisodes && ep.relatedEpisodes.length > 0) ||
    (ep.relatedLinks && ep.relatedLinks.length > 0);

  return (
    <div className="hp-root">
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      <article className="hp-wrap">
        {/* HEADER */}
        <header>
          <p className="hp-backlink">
            <Link href="/podcast/archive">&larr; Transcript archive</Link>
          </p>
          <div className="hp-eyebrow">
            <span>{ep.show}</span>
            {has(ep.number) && (
              <>
                <span className="dot" />
                <span>Episode {ep.number}</span>
              </>
            )}
            {has(ep.format) && (
              <>
                <span className="dot" />
                <span>{ep.format}</span>
              </>
            )}
          </div>
          <h1 className="hp-title">{ep.title}</h1>
          <div className="hp-byline">
            <b>{byline}</b>
          </div>
          {has(bylineRole) && (
            <div className="hp-cred">
              {bylineRole}
              {ep.guest && has(ep.guest.credentials) ? ` — ${ep.guest.credentials}` : ""}
            </div>
          )}
          {ep.guest?.links && (
            <div className="hp-glinks">
              {has(ep.guest.links.linkedin) && (
                <a href={ep.guest.links.linkedin!} rel="noopener">
                  LinkedIn ↗
                </a>
              )}
              {has(ep.guest.links.website) && (
                <a href={ep.guest.links.website!} rel="noopener">
                  Website ↗
                </a>
              )}
            </div>
          )}
          <div className="hp-meta">
            <time dateTime={ep.publishDate}>
              Published <b>{ep.publishDateHuman}</b>
            </time>
            <time dateTime={ep.updatedDate}>
              Updated <b>{ep.updatedDateHuman}</b>
            </time>
            {has(ep.duration) && (
              <span>
                Runtime <b>{ep.duration}</b>
              </span>
            )}
          </div>
          {anyListen(ep.listen) && (
            <div className="hp-listen">
              {has(ep.listen?.apple) && <a href={ep.listen!.apple!}>Apple Podcasts ↗</a>}
              {has(ep.listen?.spotify) && <a href={ep.listen!.spotify!}>Spotify ↗</a>}
              {has(ep.listen?.youtube) && <a href={ep.listen!.youtube!}>YouTube ↗</a>}
            </div>
          )}
        </header>

        {/* AI SUMMARY */}
        <section className="hp-summary" aria-label="Episode summary">
          <span className="badge">Episode brief</span>
          <p className="hp-abstract">{ep.abstract}</p>
          <div className="hp-label">Key takeaways</div>
          <ul className="hp-take">
            {ep.takeaways.map((t, i) => {
              const [lead, ...rest] = t.split(" ");
              return (
                <li key={i}>
                  <span className="arw">→</span>
                  <span>
                    <b>{lead}</b> {rest.join(" ")}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>

        {/* KEY Q&A */}
        <section className="hp-qa" aria-label="Key questions and answers">
          <div className="hp-label">Questions answered in this episode</div>
          {ep.keyQA.map((qa, i) => (
            <div className="hp-qa-item" key={i}>
              <h3 className="hp-q">
                <span className="qtext">{qa.question}</span>
                {has(qa.timestamp) && <span className="ts">{qa.timestamp}</span>}
              </h3>
              <p className="hp-a">{qa.answer}</p>
            </div>
          ))}
        </section>

        {/* CTA PULL-QUOTE */}
        {has(ep.ctaQuote) && (
          <section className="hp-cta" aria-label="From the book">
            <p className="q">&ldquo;{ep.ctaQuote!.text}&rdquo;</p>
            <span className="src">{ep.ctaQuote!.source}</span>
          </section>
        )}

        {/* RESOURCES */}
        {ep.resources && ep.resources.length > 0 && (
          <section aria-label="Resources mentioned">
            <div className="hp-label">Resources mentioned</div>
            <ul className="hp-res">
              {ep.resources.map((r, i) => (
                <li key={i}>
                  <a href={r.url} rel="noopener">
                    {r.label} ↗
                  </a>
                  {has(r.note) && <span className="note">{r.note}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* HOST NOTE (original commentary — attributed to Nola) */}
        {has(ep.hostNote) && (
          <section className="hp-host" aria-label="From the host">
            <span className="lab">From the host</span>
            {ep.hostNote}
          </section>
        )}

        {/* CHAPTERS */}
        {ep.chapters && ep.chapters.length > 0 && (
          <section aria-label="In this episode" style={{ margin: "52px 0" }}>
            <div className="hp-label">In this episode</div>
            {ep.chapters.map((c, i) => (
              <div className={"hp-chap" + (has(c.time) ? "" : " notime")} key={i}>
                {has(c.time) && <span className="t">{c.time}</span>}
                <span>{c.label}</span>
              </div>
            ))}
          </section>
        )}

        {/* RELATED / CROSS-LINKS */}
        {hasRelated && (
          <section aria-label="Related" style={{ margin: "52px 0" }}>
            <div className="hp-label">Related</div>
            <div className="hp-related">
              {(ep.relatedEpisodes ?? []).map((r, i) => (
                <a href={r.url} key={`ep-${i}`}>
                  <span className="k">More with this guest</span>
                  {r.title} ↗
                </a>
              ))}
              {(ep.relatedLinks ?? []).map((r, i) => (
                <a href={r.url} key={`link-${i}`}>
                  <span className="k">Go deeper</span>
                  {r.title} ↗
                </a>
              ))}
            </div>
          </section>
        )}

        {/* FULL TRANSCRIPT — collapsible via native <details>, content stays in DOM */}
        <details className="hp-transcript" open>
          <summary className="hp-label" style={{ cursor: "pointer" }}>
            Full transcript <span className="hint">(click to collapse)</span>
          </summary>
          <div style={{ marginTop: "24px" }}>
            {ep.transcript.map((turn, i) => (
              <div className="hp-turn" key={i}>
                <div className="hp-turn-head">
                  <span className="sp">{turn.speaker}</span>
                  {has(turn.time) && <span className="t">{turn.time}</span>}
                </div>
                <p>{turn.text}</p>
              </div>
            ))}
          </div>
        </details>
      </article>
    </div>
  );
}
