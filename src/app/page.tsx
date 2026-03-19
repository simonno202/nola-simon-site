import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FractalHero } from "@/components/ui/FractalHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProofBar } from "@/components/ui/ProofBar";
import { NewsletterCTA } from "@/components/ui/NewsletterCTA";
import { Testimonials } from "@/components/ui/Testimonials";

export const metadata: Metadata = {
  title: "Nola Simon | Everyday Futurism",
  description:
    "Futurist and researcher. The future isn't predicted — it's practiced. Self-trust, signal reading, and intentional moves.",
};

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-20 xl:py-28 animate-hero-in">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center lg:gap-10">
          <div>
            <Eyebrow>FUTURIST &amp; RESEARCHER</Eyebrow>

            <h1
              className="font-sans font-normal text-navy mt-4"
              style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
            >
              The future isn&rsquo;t predicted.
              <br />
              It&rsquo;s practiced.
            </h1>

            <p className="mt-5 text-[15px] leading-relaxed text-text-secondary max-w-xl">
              I help leaders and organizations trust themselves to read the
              signals already around them&nbsp;&mdash; and make intentional moves
              before the status quo collapses underneath them.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/advisory-speaking" variant="primary">
                Work With Me
              </Button>
              <Button
                href="https://tidycal.com/nola/intro-consultation-nola-simon"
                external
                variant="secondary"
              >
                Book an Intro Consultation
              </Button>
            </div>
          </div>

          <div className="aspect-video w-full max-w-xl mx-auto lg:mx-0 rounded-[var(--radius-card)] overflow-hidden">
            <FractalHero />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Social Proof ── */}
      <SectionWrapper className="bg-cream py-6 md:py-8">
        <ProofBar />
      </SectionWrapper>

      {/* ── Everyday Futurism ── */}
      <SectionWrapper className="bg-cream py-10 lg:py-20">
        <div className="max-w-3xl">
          <Eyebrow>EVERYDAY FUTURISM</Eyebrow>

          <h2 className="text-2xl font-semibold text-navy mt-4">
            You don&rsquo;t need a crystal ball. You need self-trust.
          </h2>

          <p className="mt-5 text-[15px] leading-relaxed text-text-secondary">
            Everyday Futurism starts with watching your own thinking. You name
            the stories keeping you stuck. You read signals across industries,
            cultures, and conversations. And you make small moves grounded in
            what you already notice&nbsp;&mdash; before an expert validates it
            for you.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-navy">
                Metacognition
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                You start watching your own thinking. The assumptions shaping
                your decisions are the first signals worth reading.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-navy">
                Signal Scanning
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                You read across domains the way a futurist does. Not predicting.
                Connecting. A pattern in one industry illuminates something in
                yours.
              </p>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-navy">
                Small Experiments
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                You don&rsquo;t make dramatic leaps. You try something small and
                feel how it lands. Momentum builds from action, not certainty.
              </p>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Social Proof ── */}
      <SectionWrapper className="bg-surface py-10 lg:py-20">
        <Testimonials className="max-w-3xl" />
      </SectionWrapper>

      {/* ── Newsletter CTA ── */}
      <SectionWrapper id="newsletter" className="bg-cream py-10 lg:py-16">
        <NewsletterCTA />
      </SectionWrapper>

      {/* ── How I Work ── */}
      <SectionWrapper className="bg-cream py-10 lg:py-20">
        <div className="max-w-4xl">
          <Eyebrow>HOW I WORK</Eyebrow>

          <h2 className="text-2xl font-semibold text-navy mt-4">
            Three ways in.
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <Card>
              <h3 className="text-lg font-semibold text-navy">Keynotes</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                Not motivational speaking. Thought leadership that changes how
                the audience processes information after they leave the room.
              </p>
              <Button
                href="/advisory-speaking"
                variant="tertiary"
                className="mt-4 inline-block"
              >
                Learn more
              </Button>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-navy">Advisory</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                High-touch strategic partnerships for leadership teams
                navigating transformation. Signal scans, strategy sessions, and the
                honest conversations most consultants skip.
              </p>
              <Button
                href="/advisory-speaking"
                variant="tertiary"
                className="mt-4 inline-block"
              >
                Learn more
              </Button>
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-navy">Podcast</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                Hope + Possibilities — solo episodes on trust, leadership, and
                the future of work. Real thinking, not soundbites.
              </p>
              <Button
                href="/podcast"
                variant="tertiary"
                className="mt-4 inline-block"
              >
                Listen now
              </Button>
            </Card>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
