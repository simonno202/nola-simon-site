import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost, getPostSlugs } from "@/lib/blog";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ConvergencesFramework } from "@/components/essay/ConvergencesFramework";
import { AssumptionGroundCycle } from "@/components/essay/AssumptionGroundCycle";
import { WitnessedTrustSeriesNav } from "@/components/essay/WitnessedTrustSeriesNav";
import { PinterestPin } from "@/components/ui/PinterestPin";
import { ArticleSchema, FAQSchema, DefinedTermSchema, PediculosisFAQ } from "@/components/SchemaOrg";

const mdxComponents = {
  ConvergencesFramework,
  AssumptionGroundCycle,
  WitnessedTrustSeriesNav,
  PinterestPin,
  FAQSchema,
  DefinedTermSchema,
  PediculosisFAQ,
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) return {};

  const post = getPost(slug);
  const canonicalUrl = `https://nolasimon.com/blog/${slug}`;
  const displayTitle = post.displayTitle ?? post.title;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords.length > 0 ? post.keywords : post.tags,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: displayTitle,
      description: post.description,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: post.description,
    },
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const slugs = getPostSlugs();
  if (!slugs.includes(slug)) notFound();

  const post = getPost(slug);

  return (
    <main>
      <ArticleSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        slug={slug}
        image={post.ogImage}
      />
      <SectionWrapper className="bg-cream py-12 lg:py-20 animate-hero-in">
        <div style={{ maxWidth: "var(--max-width-reading)" }}>
          {/* Back link */}
          <Link
            href="/blog"
            className="flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted hover:text-pink transition-colors mb-8"
          >
            <span aria-hidden="true">←</span> Back to writing
          </Link>

          {/* Eyebrow date */}
          <Eyebrow>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </Eyebrow>

          {/* Title */}
          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(24px, 4.5vw, 36px)" }}
          >
            {post.displayTitle ?? post.title}
          </h1>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
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

          {/* Divider */}
          <hr className="mt-8 mb-10 border-border-medium" />

          {/* MDX content */}
          <div className="prose-content">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Footer back link */}
          <div className="mt-12 pt-8 border-t border-border-medium">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted hover:text-pink transition-colors"
            >
              <span aria-hidden="true">←</span> Back to writing
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
