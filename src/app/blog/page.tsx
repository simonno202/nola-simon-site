import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Writing — Nola Simon | Everyday Futurism",
  description:
    "Essays on futurism, self-trust, leadership, and the future of work. The future isn't predicted, it's practiced.",
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

export default function BlogPage() {
  const posts = getAllPosts();

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
            Essays &amp; Ideas.
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            The future isn&rsquo;t predicted, it&rsquo;s practiced. These are
            the essays where that thinking gets worked out — on futurism,
            self-trust, leadership, and what it actually takes to move before
            the path is obvious.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Posts ── */}
      <SectionWrapper className="bg-cream py-6 pb-16 lg:pb-24">
        {posts.length === 0 ? (
          <div className="max-w-2xl py-12 text-center mx-auto">
            <p className="text-[15px] text-text-secondary">
              No essays yet — but the practice is already underway. Check back
              soon.
            </p>
          </div>
        ) : (
          <div className="max-w-3xl space-y-5">
            {posts.map((post) => (
              <Card key={post.slug}>
                <time
                  dateTime={post.date}
                  className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted"
                >
                  {formatDate(post.date)}
                </time>

                <h2 className="mt-2 text-[18px] font-semibold text-navy leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-pink transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {post.description}
                </p>

                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-tag-bg text-text-muted font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}
      </SectionWrapper>
    </main>
  );
}
