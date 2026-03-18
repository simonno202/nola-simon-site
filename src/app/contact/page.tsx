import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact — Nola Simon | Everyday Futurism",
  description:
    "Get in touch with Nola Simon for speaking engagements, advisory work, media inquiries, or podcast guest suggestions.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <SectionWrapper className="bg-cream py-24 animate-hero-in">
        <div className="max-w-3xl">
          <Eyebrow>CONTACT</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Let&rsquo;s start a conversation.
          </h1>

          <p className="mt-6 text-[15px] leading-relaxed text-text-secondary max-w-2xl">
            Whether it&rsquo;s a speaking engagement, advisory partnership,
            or media inquiry&nbsp;&mdash; it all starts with a conversation.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Contact Options ── */}
      <SectionWrapper className="bg-cream py-20">
        <div className="max-w-3xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Speaking & Advisory */}
            <div className="rounded-[--radius-card] border-[1.5px] border-border-medium bg-surface px-7 py-8">
              <Eyebrow>SPEAKING &amp; ADVISORY</Eyebrow>
              <h3 className="mt-3 text-lg font-semibold text-navy">
                Book Nola for your event or team
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                Keynotes, fireside chats, and strategic advisory
                engagements. Start with an intro consultation.
              </p>
              <div className="mt-5">
                <Button href="/advisory-speaking" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Media */}
            <div className="rounded-[--radius-card] border-[1.5px] border-border-medium bg-surface px-7 py-8">
              <Eyebrow>MEDIA INQUIRIES</Eyebrow>
              <h3 className="mt-3 text-lg font-semibold text-navy">
                Interview or feature request
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                For media interviews, expert commentary, or feature
                opportunities on leadership, the future of work, and
                Everyday Futurism.
              </p>
              <div className="mt-5">
                <Button href="/media" variant="secondary">
                  View Media
                </Button>
              </div>
            </div>

            {/* Podcast */}
            <div className="rounded-[--radius-card] border-[1.5px] border-border-medium bg-surface px-7 py-8">
              <Eyebrow>PODCAST</Eyebrow>
              <h3 className="mt-3 text-lg font-semibold text-navy">
                Listen to Hope + Possibilities
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                If the show has made you think differently, a review or share
                helps it find more people.
              </p>
              <div className="mt-5">
                <Button href="/podcast" variant="secondary">
                  Explore the Show
                </Button>
              </div>
            </div>

            {/* General */}
            <div className="rounded-[--radius-card] border-[1.5px] border-border-medium bg-surface px-7 py-8">
              <Eyebrow>GENERAL</Eyebrow>
              <h3 className="mt-3 text-lg font-semibold text-navy">
                Say hello
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                Questions, collaboration ideas, or just want to connect. The
                best way to reach me is through LinkedIn.
              </p>
              <div className="mt-5">
                <Button
                  href="https://www.linkedin.com/in/nolasimon/"
                  variant="secondary"
                  external
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Direct Contact ── */}
      <SectionWrapper className="bg-surface py-20">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            For direct inquiries, reach out via{" "}
            <a
              href="https://www.linkedin.com/in/nolasimon/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pink hover:underline"
            >
              LinkedIn
            </a>{" "}
            or through{" "}
            <a
              href="https://nolasimonhrcoe.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pink hover:underline"
            >
              Substack
            </a>
            .
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
