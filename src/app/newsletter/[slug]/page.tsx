import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllIssues, getIssue, getIssueSlugs } from "@/lib/newsletter";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NewsletterCTA } from "@/components/ui/NewsletterCTA";
import { PinterestPin } from "@/components/ui/PinterestPin";

export async function generateStaticParams() {
  return getIssueSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getIssueSlugs();
  if (!slugs.includes(slug)) return {};

  const issue = getIssue(slug);
  return {
    title: `${issue.title} | Newsletter | Nola Simon`,
    description: issue.description,
  };
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function NewsletterIssuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getIssueSlugs();
  if (!slugs.includes(slug)) notFound();

  const issue = getIssue(slug);

  const issues = getAllIssues();
  const currentIndex = issues.findIndex((i) => i.slug === slug);
  const prevIssue = issues[currentIndex + 1] ?? null;
  const nextIssue = issues[currentIndex - 1] ?? null;

  return (
    <main>
      <SectionWrapper className="bg-cream py-12 lg:py-20 animate-hero-in">
        <div style={{ maxWidth: "var(--max-width-reading)" }}>
          {/* Back link */}
          <Link
            href="/newsletter"
            className="flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted hover:text-pink transition-colors mb-8"
          >
            <span aria-hidden="true">←</span> Back to newsletter
          </Link>

          {/* Eyebrow */}
          <Eyebrow>
            Issue {issue.issue} &middot;{" "}
            <time dateTime={issue.date}>{formatDate(issue.date)}</time>
          </Eyebrow>

          {/* Title */}
          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(24px, 4.5vw, 36px)" }}
          >
            {issue.title}
          </h1>

          {/* Divider */}
          <hr className="mt-8 mb-10 border-border-medium" />

          {/* MDX content */}
          <div className="prose-content">
            <MDXRemote source={issue.content} components={{ PinterestPin }} />
          </div>

          {/* Issue navigation */}
          {(prevIssue || nextIssue) && (
            <div className="mt-12 pt-8 border-t border-border-medium flex justify-between gap-8">
              {prevIssue ? (
                <Link
                  href={`/newsletter/${prevIssue.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted hover:text-pink transition-colors"
                >
                  <span aria-hidden="true">←</span> Issue {prevIssue.issue}:{" "}
                  {prevIssue.title}
                </Link>
              ) : (
                <span />
              )}
              {nextIssue && (
                <Link
                  href={`/newsletter/${nextIssue.slug}`}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted hover:text-pink transition-colors"
                >
                  Issue {nextIssue.issue}: {nextIssue.title}{" "}
                  <span aria-hidden="true">→</span>
                </Link>
              )}
            </div>
          )}

          {/* Footer back link */}
          <div className="mt-8">
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted hover:text-pink transition-colors"
            >
              <span aria-hidden="true">←</span> Back to newsletter
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Subscribe ── */}
      <SectionWrapper className="bg-cream pb-16 lg:pb-24">
        <div style={{ maxWidth: "var(--max-width-reading)" }}>
          <NewsletterCTA
            headline="Get the next issue."
            body="Written when there's something worth saying — not on a schedule."
          />
        </div>
      </SectionWrapper>
    </main>
  );
}
