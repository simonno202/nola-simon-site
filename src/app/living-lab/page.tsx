import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  metadataBase: new URL("https://nolasimon.com"),
  title: "The Living Lab | Nola Simon",
  description:
    "A retroactive read of the Hope + Possibilities podcast through the lens of the Assumption-Ground Audit. These conversations happened before the methodology had a name.",
  alternates: {
    canonical: "https://nolasimon.com/living-lab",
  },
  openGraph: {
    type: "website",
    url: "https://nolasimon.com/living-lab",
    title: "The Living Lab | Nola Simon",
    description:
      "A retroactive read of the Hope + Possibilities podcast through the lens of the Assumption-Ground Audit. These conversations happened before the methodology had a name.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Living Lab | Nola Simon",
    description:
      "A retroactive read of the Hope + Possibilities podcast through the lens of the Assumption-Ground Audit. These conversations happened before the methodology had a name.",
    images: ["/og-image.jpg"],
  },
};

const ENTRIES = [
  {
    slug: "when-feedback-feels-like-threat",
    title: "When Feedback Feels Like a Threat",
    description:
      "What Sarah Noll Wilson and I mapped before anyone filed a lawsuit: the assumption underneath workplace retaliation, and how AI encoded it at scale.",
  },
  {
    slug: "when-the-experts-turn-the-lens-on-you",
    title: "When the Experts Turn the Lens on You",
    description:
      "Erica and Leslie Ehm came on the podcast to talk about M². What happened instead was a live demonstration of their methodology — on me.",
  },
  {
    slug: "ai-already-decided-who-you-are",
    title: "AI Already Decided Who You Are",
    description:
      "Cher Jones and I talked about personal branding and AI discoverability. I looked myself up on ChatGPT before we started. I didn’t exist.",
  },
];

export default function LivingLabIndex() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-20 animate-hero-in">
        <div className="max-w-3xl">
          <Eyebrow>Living Lab</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            The Living Lab
          </h1>

          <p
            className="mt-2 font-mono text-text-muted"
            style={{ fontSize: "13px", letterSpacing: "0.05em" }}
          >
            Hope + Possibilities Podcast
          </p>

          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            <p>
              These conversations happened before the Assumption-Ground Audit
              had a name. I wasn&rsquo;t running a methodology. I was just
              noticing &mdash; what the guest was assuming, what the question
              underneath the question was, where the assumption was doing work
              nobody had asked it to do.
            </p>
            <p>
              Going back and reading them through the AGA now, the methodology
              is right there. It was always there. That&rsquo;s what the Living
              Lab is: retroactive evidence that the discipline predated the
              framework.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Entries ── */}
      <SectionWrapper className="bg-surface py-12 lg:py-20">
        <div className="max-w-3xl">
          <div className="space-y-px">
            {ENTRIES.map((entry) => (
              <Link
                key={entry.slug}
                href={`/living-lab/${entry.slug}`}
                className="group block border border-border-medium rounded-[--radius-card] bg-white p-6 hover:border-pink transition-colors"
              >
                <p
                  className="font-sans font-medium text-navy group-hover:text-pink transition-colors"
                  style={{ fontSize: "clamp(16px, 2.5vw, 19px)" }}
                >
                  {entry.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                  {entry.description}
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-pink">
                  Read &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── AGA link band ── */}
      <SectionWrapper className="bg-cream py-10 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            These conversations happened before the methodology had a name.{" "}
            <Link
              href="/aga"
              className="text-pink underline underline-offset-2 hover:text-pink/80 transition-colors"
            >
              The Assumption-Ground Audit
            </Link>{" "}
            is where the work continues.
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
