import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { NewsletterCTA } from "@/components/ui/NewsletterCTA";

export const metadata: Metadata = {
  title: "Writing by Nola Simon | Future of Work, Leadership & Change",
  description:
    "Essays and articles by Nola Simon on leadership, trust, workplace change, organizational transformation, and Everyday Futurism.",
};

const FEATURED_ESSAYS = [
  {
    slug: "not-just-another-futurist",
    title: "Not Just Another Futurist",
    meta: "Methodology · Convergences · March 27, 2026",
    description:
      "The futures industry organized itself around the performance of certainty. What got lost is the harder work: not what's coming, but what your organization is already assuming about it — before the direction gets chosen, before the assumptions become policy, before the convergences arrive at the crossing point.",
    description2:
      "This essay traces the methodology — from a historiography classroom at Glendon College, York University, through Robin Winks and forensic reasoning, to the Assumption-Ground Audit and why convergences are the discipline that compounds.",
    related: { label: "Explore advisory work", href: "/advisory-speaking" },
  },
  {
    slug: "everyday-futurism-a-practice-not-a-prediction",
    title: "Everyday Futurism: A Practice, Not a Prediction",
    meta: "Futurism · Self-trust · Leadership · March 19, 2026",
    description:
      "People hear \u201cfuturist\u201d and assume forecast. This essay is about why prediction is a crutch \u2014 brittle, contingent on being right \u2014 and what practice builds instead: the capacity to move when things shift, before the path is obvious, before permission is granted.",
    description2:
      "The tagline \u201cthe future isn\u2019t predicted, it\u2019s practiced\u201d isn\u2019t a slogan. It\u2019s a structural description of how real change happens.",
    related: { label: "Book Nola for a keynote", href: "/advisory-speaking" },
  },
];

const ELSEWHERE = [
  {
    outlet: "Maclean\u2019s",
    date: "September 2024",
    title: "Why I Made a Midlife Career Switch",
    description:
      "A first-person account of 17 years in wealth management \u2014 the commute, the clock-watching, the tug-of-war between a career that made sense on paper and a life that didn\u2019t \u2014 and what the pandemic made undeniable. The origin story of Everyday Futurism, in print.",
    url: "https://macleans.ca/society/why-i-made-a-midlife-career-switch/",
  },
];

const WORK_LINKS = [
  { label: "Advisory work", href: "/advisory-speaking" },
  { label: "Keynotes", href: "/media" },
  { label: "Hope + Possibilities podcast", href: "/podcast" },
];

export default function WritingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="max-w-3xl">
          <Eyebrow>WRITING</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Writing on leadership, change, and the future of work.
          </h1>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            <p>
              Most futures writing tells you what&rsquo;s coming. This writing
              asks what you&rsquo;re already assuming before you&rsquo;ve started
              looking.
            </p>
            <p>
              The essays here are about leadership, trust, organizational change,
              and the practice of Everyday Futurism &mdash; not as a forecast,
              but as a discipline. How assumptions harden into policy before
              anyone names them as assumptions. How convergences form before
              anyone models them. How the most consequential decisions are often
              the ones no one recognized as decisions yet.
            </p>
            <p>
              These are long-form pieces. Written when there&rsquo;s something
              worth saying. Not on a schedule.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Featured Essays ── */}
      <SectionWrapper className="bg-cream py-6 pb-16 lg:pb-24">
        <Eyebrow>FEATURED ESSAYS</Eyebrow>

        <div className="mt-6 max-w-3xl space-y-5">
          {FEATURED_ESSAYS.map((essay) => (
            <Card key={essay.slug}>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                {essay.meta}
              </p>

              <h2 className="mt-2 text-[20px] font-semibold text-navy leading-snug">
                {essay.title}
              </h2>

              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                {essay.description}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                {essay.description2}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <Link
                  href={`/blog/${essay.slug}`}
                  className="font-mono text-[12px] tracking-[0.05em] text-pink hover:text-pink-hover transition-colors"
                >
                  Read: {essay.title} &rarr;
                </Link>
                <Link
                  href={essay.related.href}
                  className="font-mono text-[11px] tracking-[0.05em] text-text-muted hover:text-navy transition-colors"
                >
                  Related: {essay.related.label}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Published Elsewhere ── */}
      <SectionWrapper className="bg-cream pb-16 lg:pb-24">
        <Eyebrow>
          WRITING ON LEADERSHIP AND THE FUTURE OF WORK, PUBLISHED ELSEWHERE
        </Eyebrow>

        <div className="mt-6 max-w-3xl space-y-5">
          {ELSEWHERE.map((item) => (
            <Card key={item.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                {item.outlet} &middot; {item.date}
              </p>

              <h3 className="mt-2 text-[18px] font-semibold text-navy leading-snug">
                {item.title}
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                {item.description}
              </p>

              <div className="mt-5">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] tracking-[0.05em] text-pink hover:text-pink-hover transition-colors"
                >
                  Read at {item.outlet} &rarr;
                </a>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Newsletter CTA ── */}
      <SectionWrapper className="bg-cream pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <Eyebrow>ESSAYS DELIVERED WHEN THEY&rsquo;RE READY</Eyebrow>
          <p className="mt-4 mb-8 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            No cadence. No content calendar. When there&rsquo;s something worth
            saying, it goes here first.
          </p>
          <NewsletterCTA
            headline="Stay in the conversation."
            body="Essays on leadership, trust, and the future of work — when there's something worth saying."
          />
        </div>
      </SectionWrapper>

      {/* ── The work behind the writing ── */}
      <SectionWrapper className="bg-cream pb-24">
        <Eyebrow>THE WORK BEHIND THE WRITING</Eyebrow>
        <ul className="mt-5 space-y-3">
          {WORK_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-mono text-[12px] uppercase tracking-[0.12em] text-text-secondary hover:text-navy transition-colors"
              >
                {label} &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </main>
  );
}
