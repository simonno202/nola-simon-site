import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MEDIA_FEATURES, SPEAKING_HIGHLIGHTS } from "@/data/media-links";

export const metadata: Metadata = {
  title: "Media & Speaking — Nola Simon | Everyday Futurism",
  description:
    "Nola Simon brings sharp, practical insight to the biggest questions shaping work today. Media features, speaking highlights, and booking information.",
};

export default function MediaPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
          {/* Text */}
          <div>
            <Eyebrow>MEDIA &amp; SPEAKING</Eyebrow>

            <h1
              className="font-sans font-normal text-navy mt-4"
              style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
            >
              Sharp, practical insight on leadership, trust, and the future of
              work.
            </h1>

            <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
              From keynote stages to national media, I bring the same thing
              everywhere: cross-domain pattern recognition, plain language, and
              the willingness to name what most people are thinking but
              won&rsquo;t say.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#media" variant="secondary">
                View Media
              </Button>
              <Button href="#speaking" variant="secondary">
                Explore Speaking
              </Button>
              <Button
                href="https://elevate.ca/speakers/nola-simon/"
                variant="secondary"
                external
              >
                Elevate Festival
              </Button>
              <Button href="https://tidycal.com/nola/intro-consultation-nola-simon" external variant="primary">
                Book an Intro Consultation
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="relative aspect-[3/4] w-72 sm:w-80 mx-auto lg:mx-0 rounded-[var(--radius-card)] overflow-hidden">
            <Image
              src="/images/nola-media.jpg"
              alt="Nola Simon looking over her shoulder with a warm smile, wearing a teal floral kimono against autumn foliage"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Featured In ── */}
      <SectionWrapper id="media" className="bg-cream py-12 lg:py-24">
        <div className="max-w-4xl">
          <Eyebrow>FEATURED IN</Eyebrow>

          <p className="mt-4 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            Select media features covering leadership, the future of work,
            culture, and organizational trust.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {MEDIA_FEATURES.map((feature) => (
              <Card key={feature.title}>
                <p className="text-[13px] font-mono text-text-muted uppercase tracking-wide">
                  {feature.outlet}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
                {feature.url && (
                  <a
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-pink hover:underline"
                  >
                    Read / Watch &rarr;
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Speaking Highlights ── */}
      <SectionWrapper id="speaking" className="bg-cream py-12 lg:py-24">
        <div className="max-w-4xl">
          <Eyebrow>SPEAKING HIGHLIGHTS</Eyebrow>

          <p className="mt-4 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            Conference keynotes and fireside chats on Everyday Futurism,
            self-trust, and the future of work.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {SPEAKING_HIGHLIGHTS.map((event) => (
              <Card key={event.title}>
                <p className="text-[13px] font-mono text-text-muted uppercase tracking-wide">
                  {event.outlet}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-navy">
                  {event.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  {event.description}
                </p>
                {event.url && (
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-pink hover:underline"
                  >
                    View &rarr;
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Guest Podcast Appearances ── */}
      <SectionWrapper className="bg-surface py-12 lg:py-24">
        <div className="max-w-4xl">
          <Eyebrow>GUEST APPEARANCES</Eyebrow>

          <h2 className="text-2xl font-semibold text-navy mt-4">
            Nola as a guest on other shows
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            Conversations on leadership, the future of work, AI, trust, and
            Everyday Futurism&nbsp;&mdash; as a guest on podcasts across the
            space.
          </p>

          <div className="mt-8 rounded-[var(--radius-card)] overflow-hidden">
            <iframe
              src="https://open.spotify.com/embed/playlist/0S7RnKycClt7NNNKngxhSY?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Nola Simon Guest Podcast Appearances"
              style={{ borderRadius: "var(--radius-card)" }}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Media Callout ── */}
      <SectionWrapper className="bg-pink py-10 lg:py-20">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-2xl font-semibold text-white">
            Need a sharp, credible voice on the future of work?
          </h2>

          <p className="mt-4 text-[15px] leading-relaxed text-white/85">
            I&rsquo;m available for interviews, expert commentary, panels, and
            media features on leadership, trust, AI in the workplace, and
            Everyday Futurism. I speak in plain language, I show up prepared,
            and I don&rsquo;t waste your audience&rsquo;s time.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com&su=Media%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white bg-white px-6 py-3 text-sm font-semibold text-pink transition-all hover:bg-white/90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contact for Media
            </a>
            <p className="text-sm text-white/70">or email directly: <span className="text-white font-medium">nola@nolasimon.com</span></p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Press Kit ── */}
      <SectionWrapper className="bg-surface py-10 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <Eyebrow>PRESS KIT</Eyebrow>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
              Everything you need for media features, event listings, and introductions.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {/* Headshots */}
            <div className="rounded-xl border border-border-light bg-cream p-6">
              <h3 className="text-sm font-semibold text-navy">Headshots</h3>
              <p className="mt-2 text-[13px] text-text-muted">
                High-resolution photos for media and event use.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src="/images/nola-hero.jpg" alt="Nola Simon headshot — colour" fill className="object-cover object-top" sizes="120px" />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src="/images/nola-about.jpg" alt="Nola Simon among wildflowers" fill className="object-cover object-top" sizes="120px" />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src="/images/nola-media.jpg" alt="Nola Simon in teal kimono" fill className="object-cover object-center" sizes="120px" />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-text-muted">
                Right-click to save, or{" "}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com&su=High-Res%20Headshots" className="text-pink hover:underline">
                  email for high-res files
                </a>
              </p>
              <p className="mt-2 text-[11px] text-text-muted">
                Photos by{" "}
                <a
                  href="https://portraitsbykendra.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink hover:underline"
                >
                  Portraits by Kendra
                </a>
                {" "}— Kitchener-Waterloo Family &amp; Branding Photographer
              </p>
            </div>

            {/* Bio Variations */}
            <div className="rounded-xl border border-border-light bg-cream p-6">
              <h3 className="text-sm font-semibold text-navy">Speaker Bio</h3>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wide text-text-muted mb-1">
                    Short
                  </p>
                  <p className="text-[13px] leading-relaxed text-text-secondary">
                    Nola Simon is a futurist, researcher, and host of the Hope + Possibilities podcast. A LinkedIn Top Voice and Goodpods Top 100 host, she helps leaders practice Everyday Futurism — reading signals, building self-trust, and making intentional moves before the map is complete.
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wide text-text-muted mb-1">
                    Full
                  </p>
                  <p className="text-[13px] leading-relaxed text-text-secondary">
                    Nola Simon is a futurist, researcher, and host of the Hope + Possibilities podcast. After 20+ years in account management, sales, and training across five large organizations, she left to build Everyday Futurism — a practice grounded in self-trust, signal reading, and small intentional moves. A LinkedIn Top Voice (2024 &amp; 2025) and Goodpods Top 100 Leadership host, Nola has been featured in CBC, Maclean&rsquo;s, CTV News, and The Canadian Press. She works with leaders and organizations who sense the shift and are ready to move.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Speaking Topics + Download */}
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-border-light bg-cream p-6">
              <h3 className="text-sm font-semibold text-navy">Sample Talks</h3>
              <ul className="mt-3 space-y-3 text-[13px] text-text-secondary">
                <li>
                  <span className="font-semibold text-navy">What You&rsquo;re Not Asking Before You Commit</span>
                  <span className="text-text-muted"> &mdash; Decision-making</span>
                </li>
                <li>
                  <span className="font-semibold text-navy">Witnessed Trust</span>
                  <span className="text-text-muted"> &mdash; Trust &amp; reputation</span>
                </li>
                <li>
                  <span className="font-semibold text-navy">Before You Commit</span>
                  <span className="text-text-muted"> &mdash; AI adoption</span>
                </li>
              </ul>
              <p className="mt-3 text-[11px] text-text-muted">45&ndash;60 min &middot; Typically no slides &middot; Fully customized</p>
            </div>

            <div className="rounded-xl border border-border-light bg-cream p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-sm font-semibold text-navy">Speaker Kit</h3>
              <p className="mt-2 text-[13px] text-text-muted">
                Bio, talks, credentials, and contact — ready to share.
              </p>
              <a
                href="/speaker-kit.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border-[1.5px] border-pink bg-pink px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-pink/90"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                View One-Pager
              </a>
              <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
                <a
                  href="/nola-simon-speaker-one-pager.pdf"
                  download
                  className="inline-flex items-center gap-1 text-sm font-medium text-pink hover:underline"
                >
                  Download One-Pager
                </a>
                <a
                  href="/nola-simon-press-kit.pdf"
                  download
                  className="inline-flex items-center gap-1 text-sm font-medium text-pink hover:underline"
                >
                  Download PDF
                </a>
              </div>
              <a
                href="/nola-simon-speaker-kit.pdf"
                download
                className="mt-1 inline-flex items-center gap-1 text-[12px] text-text-muted hover:text-pink hover:underline transition-colors"
              >
                Full Speaker Kit (PDF)
              </a>
              <a
                href="/speaker-logistics.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-[12px] text-text-muted hover:text-pink hover:underline transition-colors"
              >
                Speaker Logistics (Fees &amp; Travel)
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Bio & CTA ── */}
      <SectionWrapper className="bg-navy py-12 lg:py-24 text-cream">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-[15px] leading-relaxed text-cream/80">
            Futurist, researcher, and host of the Hope + Possibilities
            podcast. I help leaders and organizations practice Everyday
            Futurism&nbsp;&mdash; reading signals, building self-trust, and
            making intentional moves.
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-cream/80">
            Interested in booking Nola for your next event, podcast, or media
            feature? Let&rsquo;s start a conversation.
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
