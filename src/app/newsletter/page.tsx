import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { NewsletterCTA } from "@/components/ui/NewsletterCTA";
import { getAllIssues } from "@/lib/newsletter";

export const metadata: Metadata = {
  title: "Newsletter | Nola Simon",
  description:
    "The Nola Simon newsletter — on leadership, trust, and the future of work. Occasional, honest, and written when there's something worth saying.",
};

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsletterArchivePage() {
  const issues = getAllIssues();

  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="max-w-3xl">
          <Eyebrow>NEWSLETTER</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Written when there&rsquo;s something worth saying.
          </h1>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            <p>
              Not a content calendar. Not a weekly cadence. When something
              clarifies &mdash; about leadership, trust, the future of work, or
              the particular strangeness of being a thinking person right now
              &mdash; it lands here first.
            </p>
            <p>
              You can read every issue in the archive below, or subscribe so the
              next one finds you.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Issues ── */}
      <SectionWrapper className="bg-cream py-6 pb-16 lg:pb-24">
        <Eyebrow>ALL ISSUES</Eyebrow>

        {issues.length === 0 ? (
          <p className="mt-6 text-[14px] text-text-secondary">
            No issues yet &mdash; the first one is coming.
          </p>
        ) : (
          <div className="mt-6 max-w-3xl space-y-5">
            {issues.map((issue) => (
              <Card key={issue.slug}>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                  Issue {issue.issue} &middot; {formatDate(issue.date)}
                </p>

                <h2 className="mt-2 text-[20px] font-semibold text-navy leading-snug">
                  {issue.title}
                </h2>

                <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                  {issue.description}
                </p>

                <div className="mt-5">
                  <Link
                    href={`/newsletter/${issue.slug}`}
                    className="font-mono text-[12px] tracking-[0.05em] text-pink hover:text-pink-hover transition-colors"
                  >
                    Read: {issue.title} &rarr;
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </SectionWrapper>

      {/* ── Subscribe ── */}
      <SectionWrapper className="bg-cream pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <Eyebrow>SUBSCRIBE</Eyebrow>
          <p className="mt-4 mb-8 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            Get the next issue when it&rsquo;s ready. No cadence. No noise.
          </p>
          <NewsletterCTA
            headline="Stay in the conversation."
            body="Essays and dispatches on leadership, trust, and the future of work — when there's something worth saying."
          />
        </div>
      </SectionWrapper>
    </main>
  );
}
