import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WorkGrid } from "@/components/work/WorkGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Nola Simon",
  description:
    "Writing, audio, video, and books — a collection of Nola Simon's published work on the future of work, careers, and organizational design.",
};

export default function WorkPage() {
  return (
    <main className="pt-24 pb-20">
      <SectionWrapper>
        <div className="mb-12">
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            The Work
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
            Writing, audio, video, and books — a record of how Nola thinks about
            the future of work, careers, and what organizations are still getting
            wrong.
          </p>
        </div>

        <WorkGrid />
      </SectionWrapper>
    </main>
  );
}
