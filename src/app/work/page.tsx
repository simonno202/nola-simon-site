import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "The Work — Nola Simon | Everyday Futurism",
  description:
    "Explore Nola Simon's work across formats: the Hope + Possibilities podcast, media appearances and speaking, essays on Everyday Futurism, and advisory services.",
};

const WORK_SECTIONS = [
  {
    eyebrow: "PODCAST",
    title: "Hope + Possibilities",
    description:
      "100+ episodes on trust, leadership, and the future of work. Goodpods Top 10 Leadership Indie Podcast. A solo format that goes where the thinking takes it.",
    href: "/podcast",
    cta: "Listen to the podcast",
  },
  {
    eyebrow: "MEDIA & SPEAKING",
    title: "Media & Speaking",
    description:
      "CBC, CTV, Maclean's, The Canadian Press, and keynotes at conferences across North America. Where Everyday Futurism reaches wider rooms.",
    href: "/media",
    cta: "See media appearances",
  },
  {
    eyebrow: "WRITING",
    title: "Essays & Ideas",
    description:
      "The thinking in long form. Essays on futurism, self-trust, and what actually changes when you stop waiting for permission and start practicing the future.",
    href: "/blog",
    cta: "Read the essays",
  },
  {
    eyebrow: "ADVISORY & SPEAKING",
    title: "Advisory",
    description:
      "Strategic partnerships for leadership teams navigating transformation. Keynotes that shift how audiences think. 1:1 consulting for senior leaders at an inflection point.",
    href: "/advisory-speaking",
    cta: "Work together",
  },
] as const;

export default function WorkPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="max-w-3xl">
          <Eyebrow>THE WORK</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            The thinking. In every format.
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            Everyday Futurism shows up in a lot of forms&nbsp;&mdash; audio,
            essays, live events, and strategic work with organizations. Here
            is where to find all of it.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Work sections ── */}
      <SectionWrapper className="bg-cream py-6 pb-16 lg:pb-24">
        <div className="max-w-3xl grid gap-5 sm:grid-cols-2">
          {WORK_SECTIONS.map((section) => (
            <Card key={section.href} href={section.href}>
              <Eyebrow>{section.eyebrow}</Eyebrow>
              <h2 className="mt-2 text-[18px] font-semibold text-navy leading-snug">
                {section.title}
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                {section.description}
              </p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-pink">
                {section.cta} →
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
