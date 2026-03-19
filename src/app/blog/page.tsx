import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Work — Nola Simon | Everyday Futurism",
  description:
    "Writing, audio, video, and books from Nola Simon. Essays, podcast episodes, media appearances, and published work on trust, leadership, and the future of work.",
};

export default function WorkPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="max-w-3xl">
          <Eyebrow>WORK</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            The thinking. In every format.
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            Essays, podcast episodes, media appearances, videos, and books.
            Everything I&rsquo;ve published on trust, leadership, the future of
            work, and Everyday Futurism&nbsp;&mdash; all in one place.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Filterable Work Grid ── */}
      <SectionWrapper className="bg-cream py-6 pb-12 lg:pb-24">
        <WorkGrid />
      </SectionWrapper>
    </main>
  );
}
