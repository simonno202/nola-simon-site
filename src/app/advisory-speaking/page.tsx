import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { SpeakerSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Advisory & Speaking — Nola Simon | Future of Work and Trust",
  description:
    "Keynote speaking and strategic advisory from Nola Simon — Ontario, Canada. Talks and engagements on the future of work and organizational trust (Witnessed Trust). Two advisory tracks: team engagements and executive 1:1.",
  alternates: {
    canonical: "https://nolasimon.com/advisory-speaking",
  },
};

export default function AdvisorySpeakingPage() {
  return (
    <main>
      <SpeakerSchema />
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
              engagement starts with a conversation about what you&rsquo;re
              seeing and where you want to go.
            </p>

            <div className="mt-8">
              <Button href="https://tidycal.com/nola/intro-consultation-nola-simon" external variant="primary">
                Not sure which? Start a conversation
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 max-w-2xl">
              <div className="border border-border-light rounded-lg px-4 py-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-pink">Decision-making</p>
                <p className="mt-1 text-[13px] font-semibold text-navy leading-snug">What You&rsquo;re Not Asking Before You Commit</p>
                <p className="mt-1 text-[12px] text-text-muted leading-relaxed">The most important decision your organization makes is already half-made.</p>
              </div>
              <div className="border border-border-light rounded-lg px-4 py-3">
                <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-pink">Trust &amp; reputation</p>
                <p className="mt-1 text-[13px] font-semibold text-navy leading-snug">Witnessed Trust</p>
                <p className="mt-1 text-[12px] text-text-muted leading-relaxed">Trust isn&rsquo;t built. It&rsquo;s caught. Most organizations don&rsquo;t know what their people actually trust.</p>
              </div>
            </div>
            <p className="mt-3 text-[11px] text-text-muted">45&ndash;60 min &middot; Typically no slides &middot; Fully customized</p>
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

      {/* ── Anchor nav ── */}
      <SectionWrapper className="bg-cream border-t border-b border-border-light py-4">
        <nav aria-label="Jump to section" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
          <span className="font-mono uppercase tracking-[0.12em] text-text-muted text-[11px]">Jump to</span>
          <a href="#advisory" className="font-semibold text-navy hover:text-pink transition-colors">Advisory</a>
          <a href="#keynotes" className="font-semibold text-navy hover:text-pink transition-colors">Keynotes</a>
        </nav>
      </SectionWrapper>

      {/* ── Advisory ── */}
      <SectionWrapper id="advisory" className="bg-cream py-12 lg:py-24 scroll-mt-20">
        <div className="max-w-3xl">
          <Eyebrow>ADVISORY</Eyebrow>

          <h2 className="text-2xl font-semibold text-navy mt-4">
            Strategic advisory for leaders navigating transformation
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-text-secondary">
            <p>
              Advisory is where the ideas get applied. I don&rsquo;t come in
              with a pre-built framework. I come in with questions, signal
              scans, and the ability to hold space for the kind of honest
              conversation most consultants skip. The goal isn&rsquo;t a deck.
              It&rsquo;s clarity, alignment, and the confidence to move.
            </p>

            <p>Two tracks, depending on who&rsquo;s in the room:</p>

            <div className="grid gap-5 sm:grid-cols-2 mt-2">
              <div className="border border-border-light rounded-lg p-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-pink">For leadership teams</p>
                <h3 className="mt-2 font-semibold text-navy">Team Advisory</h3>
                <p className="mt-2 text-[14px] leading-relaxed">
                  High-touch partnership for C-suite leaders, transformation
                  teams, and organizations in transition&nbsp;&mdash; especially
                  those navigating shifts in culture, technology, workforce
                  strategy, or business model.
                </p>
                <ul className="mt-3 space-y-1 text-[13px] list-disc pl-5">
                  <li>Signal scanning tailored to your industry</li>
                  <li>Facilitated strategy conversations</li>
                  <li>Monthly or quarterly cadence</li>
                  <li>Custom deliverables</li>
                </ul>
              </div>

              <div className="border border-border-light rounded-lg p-5">
                <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-pink">For individual executives</p>
                <h3 className="mt-2 font-semibold text-navy">Executive 1:1</h3>
                <p className="mt-2 text-[14px] leading-relaxed">
                  For individual senior leaders navigating a personal inflection
                  point&nbsp;&mdash; a career transition, a leadership
                  challenge, or a moment where the old thinking isn&rsquo;t
                  working anymore.
                </p>
                <p className="mt-3 text-[13px] text-text-muted">
                  Very limited availability. By invitation, not by volume.
                </p>
              </div>
            </div>

            <p className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Button href="https://tidycal.com/nola/intro-consultation-nola-simon" external variant="secondary">
                Start a Conversation
              </Button>
              <a href="#keynotes" className="text-[13px] font-semibold text-pink hover:underline">
                Or see speaking topics &rarr;
              </a>
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Keynotes ── */}
      <SectionWrapper id="keynotes" className="bg-cream py-12 lg:py-24 scroll-mt-20">
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
                Sample Talks
              </h3>
              <ul className="space-y-3 list-none pl-0">
                <li>
                  <span className="font-semibold text-navy">What You&rsquo;re Not Asking Before You Commit</span>
                  <span className="text-text-muted"> &mdash; Decision-making</span>
                  <p className="text-[13px] text-text-muted mt-0.5">The most important decision your organization makes is already half-made.</p>
                </li>
                <li>
                  <span className="font-semibold text-navy">Witnessed Trust</span>
                  <span className="text-text-muted"> &mdash; Trust &amp; reputation</span>
                  <p className="text-[13px] text-text-muted mt-0.5">Trust isn&rsquo;t built. It&rsquo;s caught. Most organizations have no idea what their people actually trust.</p>
                </li>
              </ul>
              <p className="mt-4 text-[13px] text-text-muted">45&ndash;60 min &middot; Typically no slides &middot; Fully customized &middot; Pre-event planning call included</p>
            </div>

            <div className="mt-8">
              <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-text-muted mb-3">Elevate Festival — Make Work Love You Back</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://share.descript.com/embed/bmxPyvXskTE"
                  title="Nola Simon at Elevate Festival — Make Work Love You Back"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full rounded-[var(--radius-card)]"
                />
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E0DDD8] flex flex-wrap gap-3 items-center">
              <p className="text-[13px] text-text-muted w-full mb-1">
                Planning an event? Check availability or download the speaker kit for bios, headshots, talks, and logistics.
              </p>
              <Button href="https://tidycal.com/nola/book-a-speaker" external variant="primary">
                Check Speaking Availability
              </Button>
              <Button href="/speaker-kit.html" external variant="secondary">
                View One-Pager
              </Button>
              <a
                href="/speaker-logistics.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-pink hover:underline"
              >
                Speaker Logistics (Fees &amp; Travel)
              </a>
              <a
                href="/nola-simon-speaker-kit.pdf"
                download
                className="inline-flex items-center gap-1 text-sm font-medium text-pink hover:underline"
              >
                Download Full Kit (PDF)
              </a>
            </div>

            <p className="mt-6">
              <a href="#advisory" className="text-[13px] font-semibold text-pink hover:underline">
                &larr; Or see advisory tracks
              </a>
            </p>

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

      {/* ── Final CTA ── */}
      <SectionWrapper className="bg-navy py-12 lg:py-24 text-cream">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-2xl font-semibold">
            Every engagement starts with a conversation.
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
            No pitch deck. No pressure. An honest conversation about what
            you&rsquo;re seeing and where you want to go. If it&rsquo;s a fit,
            we&rsquo;ll talk about what working together looks like.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href="https://tidycal.com/nola/intro-consultation-nola-simon" external variant="primary">
              Not sure which? Start a conversation
            </Button>
            <a
              href="/why"
              className="font-mono text-[12px] tracking-[0.05em] text-cream/60 hover:text-cream transition-colors"
            >
              Why you. Why now. Why at all. &rarr;
            </a>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
