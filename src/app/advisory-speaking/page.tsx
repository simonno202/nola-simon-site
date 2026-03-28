import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Testimonials } from "@/components/ui/Testimonials";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

export const metadata: Metadata = {
  title: "Advisory & Speaking — Nola Simon | Everyday Futurism",
  description:
    "Keynotes, advisory, and consulting for leaders and organizations practicing Everyday Futurism. Every engagement starts with a conversation.",
};

export default function AdvisorySpeakingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          {/* Text */}
          <div>
            <Eyebrow>ADVISORY &amp; SPEAKING</Eyebrow>

            <h1
              className="font-sans font-normal text-navy mt-4"
              style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
            >
              I work with leaders who sense the shift&nbsp;&mdash; and are ready to
              move.
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
              Whether it&rsquo;s a keynote that reframes how your audience thinks
              about the future, or a strategic engagement that helps your
              leadership team navigate what&rsquo;s next&nbsp;&mdash; every
              engagement starts the same way. A conversation about what
              you&rsquo;re seeing and where you want to go.
            </p>

            <div className="mt-8">
              <Button href="https://tidycal.com/nola/intro-consultation-nola-simon" external variant="primary">
                Book an Intro Consultation
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="relative aspect-[4/3] w-full max-w-md mx-auto lg:mx-0 rounded-[var(--radius-card)] overflow-hidden">
            <Image
              src="/images/nola-speaking.jpg"
              alt="Nola Simon with arms open wide, laughing joyfully — black and white"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Advisory ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>ADVISORY</Eyebrow>

          <h2 className="text-2xl font-semibold text-navy mt-4">
            Strategic advisory for leadership teams navigating transformation
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Advisory engagements are high-touch, strategic partnerships
              designed for leadership teams who know the old playbook
              isn&rsquo;t working&nbsp;&mdash; but need a credible thinking
              partner to help them figure out what comes next.
            </p>

            <p>
              I don&rsquo;t come in with a pre-built framework. I come in with
              questions, signal scans, and the ability to hold space for the kind
              of honest conversation most consultants skip. The goal
              isn&rsquo;t a deck. It&rsquo;s clarity, alignment, and the
              confidence to move.
            </p>

            <div>
              <h3 className="font-semibold text-navy mt-6 mb-3">
                What&rsquo;s Included
              </h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Signal scanning and landscape analysis tailored to your industry</li>
                <li>Leadership advisory on Everyday Futurism and strategic self-trust</li>
                <li>Facilitated strategy conversations with senior teams</li>
                <li>Ongoing advisory partnership (monthly or quarterly cadence)</li>
                <li>Custom deliverables based on your team&rsquo;s needs</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-navy mt-6 mb-3">
                Who It&rsquo;s For
              </h3>
              <p>
                C-suite leaders, transformation teams, and organizations in
                transition&nbsp;&mdash; especially those navigating shifts in
                culture, technology, workforce strategy, or business model.
              </p>
            </div>

            <p className="mt-6">
              <Button href="https://tidycal.com/nola/intro-consultation-nola-simon" external variant="secondary">
                Start a Conversation
              </Button>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Keynotes ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>KEYNOTES</Eyebrow>

          <h2 className="text-2xl font-semibold text-navy mt-4">
            Talks that shift how your audience thinks about the future
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-text-secondary">
            <p>
              My keynotes are direct, research-backed, and grounded in real
              stories. I don&rsquo;t do hype. I don&rsquo;t do doom. I help
              audiences see what&rsquo;s already changing, name what&rsquo;s
              keeping them stuck, and leave with a practical shift they can
              apply immediately.
            </p>

            <p>
              Everyday Futurism delivered live&nbsp;&mdash; cross-domain
              connections, signal reading, and narrative stripping in real time
              on stage.
            </p>

            <div>
              <h3 className="font-semibold text-navy mt-6 mb-3">Formats</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Conference keynote (30&ndash;60 minutes)</li>
                <li>Fireside chat or moderated panel</li>
                <li>Virtual keynote</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-navy mt-6 mb-3">
                Signature Topics
              </h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Everyday Futurism: How to practice the future before it arrives</li>
                <li>The Self-Trust Deficit: Why smart leaders stay stuck</li>
                <li>Signal Reading for Leaders: What you&rsquo;re already noticing (and ignoring)</li>
                <li>The Future of Work Is Already Here: Culture, trust, and what comes next</li>
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E0DDD8]">
              <p className="text-[13px] text-text-muted mb-3">
                Planning an event? Download the full press kit for bios, headshots, media history, and booking details.
              </p>
              <Button href="/speaker-kit.html" external variant="secondary">
                View Speaker Kit
              </Button>
            </div>

          </div>
        </div>
      </SectionWrapper>

      {/* ── Featured Clip ── */}
      <SectionWrapper className="bg-surface py-10 lg:py-20">
        <div className="max-w-4xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <Eyebrow>GUEST APPEARANCE</Eyebrow>
              <h2 className="text-2xl font-semibold text-navy mt-4">
                AI &amp; Work: The Human Touch
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                What happens to the human element as AI transforms how we work?
                This isn&rsquo;t a tech conversation&nbsp;&mdash; it&rsquo;s a
                leadership one. From the{" "}
                <a
                  href="https://open.spotify.com/episode/2FJaympnKTWzX78g5YVvQN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-pink hover:underline"
                >
                  Mama What&rsquo;s Next
                </a>{" "}
                podcast on what organizations miss when they optimize for
                efficiency without accounting for trust.
              </p>
              <p className="mt-3 text-[13px] text-text-muted">
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
            <VideoEmbed
              youtubeId="MQnWaZ3R9OY"
              title="AI & Work: The Human Touch"
              subtitle="Mama, What's Next"
              className="mx-auto"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ── 1:1 Consulting ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24">
        <div className="max-w-3xl">
          <Eyebrow>CONSULTING</Eyebrow>

          <h2 className="text-2xl font-semibold text-navy mt-4">
            1:1 consulting for senior leaders
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-text-secondary">
            <p>
              For individual senior leaders navigating a personal inflection
              point&nbsp;&mdash; a career transition, a leadership challenge, or
              a moment where the old thinking isn&rsquo;t working anymore. These
              are focused, strategic conversations designed to help you see
              clearly and move with confidence.
            </p>

            <p>
              Very limited availability. By invitation, not by volume. If
              you&rsquo;ve been reading my work and finding yourself thinking
              differently&nbsp;&mdash; noticing signals, questioning narratives,
              sitting with discomfort instead of reacting&nbsp;&mdash;
              you&rsquo;re already practicing Everyday Futurism.
            </p>

            <p className="mt-2">
              <Button href="https://tidycal.com/nola/intro-consultation-nola-simon" external variant="secondary">
                Start a Conversation
              </Button>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Social Proof ── */}
      <SectionWrapper className="bg-surface py-10 lg:py-20">
        <Testimonials className="max-w-3xl" />
      </SectionWrapper>

      {/* ── Final CTA ── */}
      <SectionWrapper className="bg-navy py-12 lg:py-24 text-cream">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-2xl font-semibold">
            Every engagement starts the same way. A conversation.
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
            No pitch deck. No pressure. An honest conversation about what
            you&rsquo;re seeing and where you want to go. If it&rsquo;s a fit,
            we&rsquo;ll talk about what working together looks like.
          </p>

          <div className="mt-8">
            <Button href="https://tidycal.com/nola/intro-consultation-nola-simon" external variant="primary">
              Book an Intro Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
