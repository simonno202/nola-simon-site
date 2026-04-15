import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoodpodsBadge } from "@/components/ui/GoodpodsBadge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PodcastSchema } from "@/components/SchemaOrg";
import PodcastSearch from "@/components/podcast/PodcastSearch";
import { PodcastRabbitHole } from "@/components/podcast/PodcastRabbitHole";

export const metadata: Metadata = {
  title: "Podcast — Nola Simon | Everyday Futurism",
  description:
    "Hope + Possibilities is a podcast about everyday noticing — trust, leadership, and the future of work. Hosted by strategic futurist Nola Simon. Top 10 Leadership Indie on Goodpods.",
};

export default function PodcastPage() {
  return (
    <main>
      <PodcastSchema />
      {/* ── Show Header ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="max-w-3xl">
          <Eyebrow>PODCAST</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Hope + Possibilities
          </h1>

          <p className="mt-2 text-lg font-mono text-text-muted">
            A Love Letter to the Future of Work
          </p>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            <p>Made in Canada.</p>
            <p>
              Pass your phone&nbsp;&mdash; unlocked&nbsp;&mdash; to the person
              sitting next to you. Not to a close friend. To a colleague. A
              neighbour. Someone you&rsquo;d describe as trustworthy but have
              never actually tested.
            </p>
            <p>Watch what happens in your body before you hand it over.</p>
            <p>
              That hesitation? That&rsquo;s not paranoia. That&rsquo;s you
              running a real-time audit of every assumption you hold about trust,
              privacy, identity, and risk&nbsp;&mdash; in under a second,
              without a framework, without a consultant, without a strategic
              plan.
            </p>
            <p>
              You already know how to read signals. You do it constantly. You
              just haven&rsquo;t been taught to trust what you notice.
            </p>
            <p>That&rsquo;s what this podcast is about.</p>
            <p>
              I&rsquo;m Nola Simon&nbsp;&mdash; strategic futurist, keynote
              speaker, and LinkedIn Top Voice (2024 &amp; 2025). I&rsquo;m not
              here to make sweeping predictions about the future. I&rsquo;m here
              to help you see what&rsquo;s already forming&nbsp;&mdash; in the
              moments that feel ordinary, the assumptions that feel obvious, the
              decisions that feel routine right up until they don&rsquo;t.
            </p>
            <p>
              Blockbuster had the data. Kodak invented the digital camera and
              couldn&rsquo;t walk away from the legacy of print. They
              didn&rsquo;t lack information. They lacked the discipline to
              question what they already believed&nbsp;&mdash; before it became
              load-bearing.
            </p>
            <p>
              That discipline isn&rsquo;t reserved for crisis. It lives in
              everyday noticing.
            </p>
            <p>
              The unlocked phone. The meeting nobody challenged. The strategy
              that felt obvious. The trust that formed&nbsp;&mdash; or
              fractured&nbsp;&mdash; in a moment nobody marked as significant.
            </p>
            <p>This show is that noticing, practiced out loud.</p>
            <p className="text-[13px] text-text-muted">
              Featured in Maclean&rsquo;s, CBC, and CTV News. Top 10 Leadership
              Indie on Goodpods.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="https://podcasts.apple.com/us/podcast/id1602822494?mt=2&ls=1"
              variant="primary"
              external
            >
              Apple Podcasts
            </Button>
            <Button
              href="https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7"
              variant="secondary"
              external
            >
              Spotify
            </Button>
            <Button
              href="https://goodpods.com/podcasts/hope-possibilties-a-love-letter-to-the-future-of-work-198061"
              variant="secondary"
              external
            >
              Goodpods
            </Button>
          </div>

          <p className="mt-6 text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-text-muted">
            Made in Canada&nbsp;&middot;&nbsp;113 Episodes&nbsp;&middot;&nbsp;57
            Guest&nbsp;&middot;&nbsp;56 Solo
          </p>

          <GoodpodsBadge variant="compact" className="mt-5" />
          <PodcastRabbitHole />

          <a
            href="https://www.listennotes.com/podcasts/hope-possibilties-a-love-letter-to-the-nHWeA2OGmD-/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block"
            title="Hope + Possibilities: A Love Letter to the Future of Work | Listen Notes"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src="https://cdn-images-2.listennotes.com/images/podcasts/nHWeA2OGmD-/badge/"
              alt="Hope + Possibilities: A Love Letter to the Future of Work | Listen Notes"
              style={{ height: "120px", maxWidth: "100%" }}
            />
          </a>
        </div>
      </SectionWrapper>

      {/* ── Episode Archive ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24">
        <PodcastSearch />
      </SectionWrapper>

      {/* ── Bridge Section ── */}
      <SectionWrapper className="bg-surface py-10 lg:py-16">
        <div className="max-w-3xl">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            The thinking from this show lives beyond the episodes&nbsp;&mdash;
            in essays that go deeper, a trust signal quiz that challenges what
            you think you already know, and the Everyday Futurism newsletter.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href="/blog" variant="secondary">
              Read the Essays →
            </Button>
            <Button href="/trust-signal-quiz.html" variant="secondary">
              Take the Trust Signal Quiz →
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Reading List Lead Magnet ── */}
      <SectionWrapper className="bg-[#b52e71] py-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-white/60 mb-3">
            Free Resource
          </p>
          <h2
            className="font-sans font-semibold text-white"
            style={{ fontSize: "clamp(22px, 4vw, 34px)", lineHeight: 1.15 }}
          >
            32 books.<br />28 conversations.
          </h2>
          <p className="mt-4 text-white/85 text-[15px] leading-relaxed max-w-xl">
            Every book on this list has a full episode behind it&nbsp;&mdash;
            the conversation that shaped the recommendation, the ideas that
            didn&rsquo;t fit in a summary, the frameworks you can actually use.
            Real ideas, real tools, real talk.
          </p>
          <p className="mt-3 text-white/55 text-[13px] font-mono leading-relaxed">
            Nikolas Badminton&nbsp;&middot; Lisa Bragg&nbsp;&middot; Amanda
            Cupido&nbsp;&middot; Karen Eber&nbsp;&middot; John
            Espirian&nbsp;&middot; Karen Ferris&nbsp;&middot; Jeppe
            Hansgaard&nbsp;&middot; Ludmila Praslova&nbsp;&middot; Hilke
            Schellmann&nbsp;&middot; Tamsen Webster&nbsp;&middot; and more
          </p>
          <div className="mt-8">
            <a
              href="/book-list.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#b52e71] font-sans font-semibold text-[14px] px-6 py-3 rounded-[--radius-button] hover:bg-cream transition-colors"
            >
              Get the Reading List →
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Reviews & Shares CTA ── */}
      <SectionWrapper className="bg-surface py-10 lg:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-navy">
            If this show has made you think differently, help it find more
            people.
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
            A review on Apple Podcasts or a share with someone who needs to hear
            this&nbsp;&mdash; that&rsquo;s how the conversation grows. It takes
            30&nbsp;seconds and it matters more than you think.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="https://podcasts.apple.com/us/podcast/id1602822494?mt=2&ls=1"
              variant="primary"
              external
            >
              Leave a Review on Apple Podcasts
            </Button>
            <Button
              href="https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7"
              variant="secondary"
              external
            >
              Share on Spotify
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
