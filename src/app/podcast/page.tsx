import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoodpodsBadge } from "@/components/ui/GoodpodsBadge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PodcastSchema } from "@/components/SchemaOrg";
import PodcastSearch from "@/components/podcast/PodcastSearch";

export const metadata: Metadata = {
  title: "Podcast — Nola Simon | Everyday Futurism",
  description:
    "Hope + Possibilities: A Love Letter to the Future of Work. Conversations with leaders, thinkers, and practitioners who are building what's next.",
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
            <p>
              Hope + Possibilities is a podcast about the future of
              work&nbsp;&mdash; but not the kind built on trend reports and
              hot takes. Each episode is a conversation with leaders, thinkers,
              and practitioners who are building what&rsquo;s next with honesty,
              self-trust, and a willingness to challenge the status quo.
            </p>

            <p>
              Hosted by Nola Simon, the show explores how we lead, how we work,
              and how we build cultures where people actually belong. It&rsquo;s
              honest. It&rsquo;s practical. And it always comes back to the same
              question: What does the future of work look like when we start
              from trust?
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
          </div>

          <GoodpodsBadge variant="compact" className="mt-6" />
          <a
            href="https://mybook.to/nolasimonrecs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-sans text-[14px] text-text-secondary underline underline-offset-4 hover:text-navy transition-colors"
          >
            📚 Hope + Possibilities: The Books That Inspired The Interviews
          </a>
        </div>
      </SectionWrapper>

      {/* ── Episode Archive ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24">
        <PodcastSearch />
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
            31 books. 27 guests.<br />One reading list.
          </h2>
          <p className="mt-4 text-white/85 text-[15px] leading-relaxed max-w-xl">
            Every guest brings a point of view shaped by their work. These are
            the books they wrote — real ideas, real frameworks, real tools.
            Universal purchase links work for Amazon, Bookshop.org, and
            independent bookstores worldwide.
          </p>
          <p className="mt-3 text-white/55 text-[13px] font-mono leading-relaxed">
            Nikolas Badminton · Lisa Bragg · Amanda Cupido · Karen Eber ·
            John Espirian · Karen Ferris · Jeppe Hansgaard · Ludmila Praslova ·
            Hilke Schellmann · Tamsen Webster · and 17 more
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
