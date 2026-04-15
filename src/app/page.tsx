import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { FractalHero } from "@/components/ui/FractalHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProofBar } from "@/components/ui/ProofBar";
import { NewsletterCTA } from "@/components/ui/NewsletterCTA";

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

            <p className="mt-4 text-[16px] leading-relaxed text-text-secondary max-w-xl">
              Historians study what already happened. Futurists project
              what&rsquo;s next. I&rsquo;m in the middle&nbsp;&mdash; watching
              what&rsquo;s shifting right now, before it has a name.
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary max-w-xl">
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

          <div>
            <div className="aspect-video w-full max-w-xl mx-auto lg:mx-0 rounded-[var(--radius-card)] overflow-hidden">
              <FractalHero />
            </div>
            <p className="mt-2 text-center text-[11px] text-text-muted">
              Hosted by{" "}
              <a
                href="https://www.linkedin.com/in/melieb/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-pink hover:underline"
              >
                Melanie Elsbeth
              </a>{" "}
              on the{" "}
              <a
                href="https://mamawhatsnext.com/podcast/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-pink hover:underline"
              >
                Mama, What&rsquo;s Next
              </a>{" "}
              podcast.
            </p>
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

          <div className="mt-10 pt-8 border-t border-navy/10 flex flex-wrap items-center justify-between gap-6">
            <p className="text-[14px] text-text-secondary max-w-sm">
              Most trust signals are cooperatively produced. Almost nobody
              notices. 18 questions to find out where your filters actually sit.
            </p>
            <Button href="/trust-signal-quiz.html" external variant="secondary">
              Can you read a trust signal? →
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Mel Pull Quote ── */}
      <SectionWrapper className="bg-cream py-10 lg:py-16">
        <div className="max-w-2xl">
          <blockquote className="border-l-[3px] border-pink pl-6">
            <p className="font-sans text-[20px] font-semibold leading-[1.5] text-navy tracking-[-0.01em]">
              &ldquo;I recently recorded an episode with Nola Simon, a remote
              work futurist who&rsquo;s been watching this pattern for over a
              decade. It&rsquo;s one of our most listened to episodes by far
              now.&rdquo;
            </p>
            <footer className="mt-4">
              <a
                href="https://mamawhatsnext.com/podcast/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted hover:text-navy transition-colors"
              >
                Melanie Elsbeth &mdash; Mama, What&rsquo;s Next
              </a>
            </footer>
          </blockquote>
        </div>
      </SectionWrapper>

      {/* ── AGA Block ── */}
      <SectionWrapper className="bg-[#0a0a0a] py-12 lg:py-20">
        <div className="max-w-3xl">
          <p
            className="font-mono text-[9px] uppercase tracking-[0.22em] mb-4"
            style={{ color: "#ec4197" }}
          >
            Methodology
          </p>
          <h2
            className="font-sans font-bold text-[#f0f0f0] mb-5"
            style={{ fontSize: "clamp(22px, 3vw, 30px)", letterSpacing: "-0.02em" }}
          >
            What is your organization taking for granted?
          </h2>
          <p className="text-[16px] leading-relaxed mb-3" style={{ color: "#aaa" }}>
            The Assumption-Ground Audit is forensic work done before the
            direction hardens — before the scenarios are built, before the
            vendor contract is signed, before the convergences arrive at the
            crossing point and make the assumptions expensive.
          </p>
          <p className="text-[16px] leading-relaxed mb-8" style={{ color: "#aaa" }}>
            Most organizations are optimizing for a world that is already
            disappearing. The AGA asks: is the ground we&rsquo;re standing on
            real?
          </p>
          <a
            href="/aga"
            className="inline-flex items-center gap-2 font-sans font-bold text-[13px] tracking-[0.04em] px-6 py-3 rounded-sm transition-opacity hover:opacity-90"
            style={{ background: "#ec4197", color: "#fff" }}
          >
            Read the methodology →
          </a>
        </div>
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
