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
    slug: "youre-gonna-miss-me-when-im-gone",
    title: "You're Gonna Miss Me When I'm Gone",
    meta: "Witnessed Trust · Independent Consulting · April 15, 2026",
    description:
      "Six years. A basement office with a flooding floor and fluorescent lights that triggered migraines. An advisor who knew the normal rules didn't apply to him. A client who had the technical authority to replace him — but not yet the relational power to make it stick.",
    description2:
      "This essay is about what it actually looks like to witness someone's vision until they're ready to claim it as their own. The work nobody sees. The impact that never shows up on a KPI. And why the moment wasn't the victory. The six years were.",
    related: { label: "Part 4: Under the Rocks Are the Words", href: "/blog/assumption-ground-audit" },
  },
  {
    slug: "pediculosis-and-change",
    title: "The $30 Million Assumption Nobody Checked",
    meta: "Assumption Audit · Policy Change · April 13, 2026",
    description:
      "Every spring, schools send kids home based on a policy nobody thought to question. This is the story of what an unexamined assumption costs — in time, in stress, in a child's mental health, in a parent's employment — and what happens when someone finally checks the ground it's standing on.",
    description2:
      "One policy change. One corrected assumption. Roughly $30 million in prevented economic harm — and counting. A case study in upstream thinking, change management, and what it actually means to audit what you're taking for granted.",
    related: { label: "Under the Rocks Are the Words", href: "/blog/assumption-ground-audit" },
  },
  {
    slug: "assumption-ground-audit",
    title: "Under the Rocks Are the Words",
    meta: "Witnessed Trust · Change · Everyday Futurism · April 8, 2026",
    description:
      "For ten years, I cancelled duplicate forms. The frontline concern was right the whole time. The response was a metric that converted \"why does this work exist\" into \"why haven't you cleared your queue.\" That is what the gap between due diligence and interrogation looks like from inside it.",
    description2:
      "This essay traces why change management keeps failing — not because it's executed badly, but because helping a decision land and asking whether it should be reconsidered are structurally incompatible goals. And what the Assumption-Ground Audit does instead.",
    related: { label: "Advisory and speaking", href: "/advisory-speaking" },
  },
  {
    slug: "the-rabbit-hole",
    title: "The Rabbit Hole",
    meta: "Trust Architecture · Witnessed Trust · April 3, 2026",
    description:
      "I hid an egg on my website. Six depths of ideas about trust, signals, and what it means to notice something real when everything around you has been optimized to look real but isn't. The Strategic Linguist found it and named what it was doing without being briefed. Dr. Sam Illingworth discovered his own work inside it and thanked me publicly. Most people, even with the map, didn't go.",
    description2:
      "The essay traces what happened, the assumption it surfaced — that explaining your thinking is how people come to understand it — and why the people who go all the way down are exactly the ones you want in the room. Download the process guide to build your own.",
    related: { label: "Download: The Rabbit Hole Method — Process Guide", href: "/downloads/the-rabbit-hole.pdf" },
  },
  {
    slug: "witnessed-trust-case-study",
    title: "Witnessed Trust — A Case Study: A PR Crisis, a Pop Star and a Camera Walk into a Stadium",
    meta: "Trust · Discernment · Everyday Futurism · April 1, 2026",
    description:
      "In January 2025, a Coldplay kiss cam caught two Astronomer executives in four seconds of body language that eighty thousand people read simultaneously — without context, without commentary, without a single word of explanation. The celebrity crisis response that followed generated memes, shifted the conversation, and repaired nothing.",
    description2:
      "This essay traces what the kiss cam actually caught, why the Astronomer response failed as trust repair (distraction ≠ PR success, attention ≠ trust), and what the unequal distribution of accountability reveals about how witnessed trust forms — and fails — at scale.",
    related: { label: "Read: Who Gets to Be Trusted Now?", href: "/blog/who-gets-to-be-trusted-now" },
  },
  {
    slug: "who-gets-to-be-trusted-now",
    title: "Who Gets to Be Trusted Now?",
    meta: "Trust · Thought Leadership · Credibility · March 28, 2026",
    description:
      "Trust is not fixed. It has moved from local and embodied, to institutional, to distributed — and distributed trust turned out to be partly manufactured. Peer ratings, affiliate loops, purchased followers, mutual endorsements: the system that was supposed to democratize credibility developed its own closed loops.",
    description2:
      "This essay traces the shift, names what's failing across the infrastructure at once, and offers a hypothesis about what comes next: witnessed trust — built not on ratings or credentials, but on the irreducibly particular. Specific. Accountable. Impossible to manufacture.",
    related: { label: "Subscribe on Substack", href: "https://nolasimonhrcoe.substack.com/" },
  },
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
    meta: "Futurism · Leadership · Organizational Trust · March 19, 2026",
    description:
      "In 2008, I had just returned from maternity leave. One-year-old, two-and-a-half-year-old, three-hour commute, still breastfeeding, seeing my kids an hour a day. In those first months back, a woman told me she\u2019d quit her job to take a year off with her eighteen-year-old son. Not for a baby \u2014 for the decisions that actually change a life.",
    description2:
      "This essay traces the principle from a maternity leave conversation to a work-from-home pilot in 2012 to the moment a map expires in your body before you have the language to say so \u2014 and what all of it has to do with why organizational trust breaks the way it does now.",
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
