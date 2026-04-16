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

const CORNERSTONE = {
  slug: "pediculosis-and-change",
  title: "The $30 Million Assumption Nobody Checked",
  meta: "Assumption-Ground Audit · Witnessed Trust · April 13, 2026",
  description:
    "One school board policy. One unexamined assumption nobody thought to question. Eighteen months of upstream work. $30 million in recovered value — and counting.",
  description2:
    "This is the essay that shows the Assumption-Ground Audit and Witnessed Trust in the same story: what it costs when ground is assumed rather than examined, and what changes when someone finally checks it.",
};

const WITNESSED_TRUST = [
  {
    slug: "the-most-dangerous-assumption-in-the-room",
    title: "The Most Dangerous Assumption in the Room",
    line: "The audit that's hardest to run is the one you do on yourself.",
    date: "April 16, 2026",
  },
  {
    slug: "foregone-conclusions-gone-wrong",
    title: "Foregone Conclusions Gone Wrong",
    line: "When the process is designed to look like discovery but the ground is already poured.",
    date: "April 16, 2026",
  },
  {
    slug: "youre-gonna-miss-me-when-im-gone",
    title: "You're Gonna Miss Me When I'm Gone",
    line: "Six years. The work nobody saw. Why the moment wasn't the victory.",
    date: "April 15, 2026",
  },
  {
    slug: "assumption-ground-audit",
    title: "Under the Rocks Are the Words",
    line: "Why change management keeps failing — and what the AGA does instead.",
    date: "April 8, 2026",
  },
  {
    slug: "the-rabbit-hole",
    title: "The Rabbit Hole",
    line: "I hid six depths of ideas on my site. Who went all the way down is the signal.",
    date: "April 3, 2026",
  },
  {
    slug: "witnessed-trust-case-study",
    title: "Witnessed Trust — A Case Study",
    line: "Four seconds of body language. Eighty thousand simultaneous readings.",
    date: "April 1, 2026",
  },
  {
    slug: "who-gets-to-be-trusted-now",
    title: "Who Gets to Be Trusted Now?",
    line: "Trust moved from local to institutional to distributed — and distributed trust turned out to be partly manufactured.",
    date: "March 28, 2026",
  },
];

const METHODOLOGY = [
  {
    slug: "not-just-another-futurist",
    title: "Not Just Another Futurist",
    line: "The methodology — from a historiography classroom to the Assumption-Ground Audit.",
    date: "March 27, 2026",
  },
  {
    slug: "everyday-futurism-a-practice-not-a-prediction",
    title: "Everyday Futurism: A Practice, Not a Prediction",
    line: "Why prediction is a crutch and what practice builds instead.",
    date: "March 19, 2026",
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

      {/* ── Cornerstone Essay ── */}
      <SectionWrapper className="bg-cream py-6 pb-10 lg:pb-14">
        <Eyebrow>START HERE</Eyebrow>
        <div className="mt-6 max-w-3xl">
          <Card>
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
              {CORNERSTONE.meta}
            </p>
            <h2 className="mt-2 text-[20px] font-semibold text-navy leading-snug">
              {CORNERSTONE.title}
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
              {CORNERSTONE.description}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
              {CORNERSTONE.description2}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href={`/blog/${CORNERSTONE.slug}`}
                className="font-mono text-[12px] tracking-[0.05em] text-pink hover:text-pink-hover transition-colors"
              >
                Read the essay &rarr;
              </Link>
              <Link
                href="/aga"
                className="font-mono text-[11px] tracking-[0.05em] text-text-muted hover:text-navy transition-colors"
              >
                Explore the AGA &rarr;
              </Link>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      {/* ── Witnessed Trust Series ── */}
      <SectionWrapper className="bg-cream py-6 pb-10 lg:pb-14">
        <Eyebrow>WITNESSED TRUST — SERIES</Eyebrow>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-text-secondary">
          Seven essays on trust, discernment, and what it means to notice something real — in organizations, in rooms, and in yourself.
        </p>
        <div className="mt-6 max-w-3xl divide-y divide-border-light">
          {WITNESSED_TRUST.map((essay) => (
            <div key={essay.slug} className="py-4 first:pt-0 last:pb-0">
              <Link
                href={`/blog/${essay.slug}`}
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <p className="text-[15px] font-semibold text-navy group-hover:text-pink transition-colors leading-snug">
                    {essay.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-text-muted">
                    {essay.line}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-text-muted shrink-0 pt-1">
                  {essay.date}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Methodology ── */}
      <SectionWrapper className="bg-cream py-6 pb-16 lg:pb-24">
        <Eyebrow>EVERYDAY FUTURISM — METHODOLOGY</Eyebrow>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-text-secondary">
          The intellectual formation underneath the work.
        </p>
        <div className="mt-6 max-w-3xl divide-y divide-border-light">
          {METHODOLOGY.map((essay) => (
            <div key={essay.slug} className="py-4 first:pt-0 last:pb-0">
              <Link
                href={`/blog/${essay.slug}`}
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <p className="text-[15px] font-semibold text-navy group-hover:text-pink transition-colors leading-snug">
                    {essay.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-text-muted">
                    {essay.line}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-text-muted shrink-0 pt-1">
                  {essay.date}
                </span>
              </Link>
            </div>
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
