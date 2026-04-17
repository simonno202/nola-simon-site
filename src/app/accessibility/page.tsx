import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Accessibility — Nola Simon | Everyday Futurism",
  description:
    "Accessibility commitment and statement for nolasimon.com.",
};

export default function AccessibilityPage() {
  return (
    <main>
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="max-w-[var(--max-width-reading)]">
          <Eyebrow>ACCESSIBILITY</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Accessibility Statement
          </h1>

          <p className="mt-2 font-mono text-[12px] text-text-muted">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                My Commitment
              </h2>
              <p>
                I&rsquo;m committed to making nolasimon.com accessible to
                everyone, including people with disabilities. This site is
                designed to conform to the Web Content Accessibility Guidelines
                (WCAG) 2.1 Level AA and to meet the requirements of the
                Accessibility for Ontarians with Disabilities Act (AODA).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                What I&rsquo;ve Done
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Colour contrast ratios meet or exceed WCAG AA requirements
                  for all text
                </li>
                <li>
                  All images include descriptive alternative text
                </li>
                <li>
                  The site is fully navigable by keyboard, including a
                  skip-to-content link
                </li>
                <li>
                  Form inputs have proper labels for screen readers
                </li>
                <li>
                  Status messages (form success/error) are announced to
                  assistive technologies
                </li>
                <li>
                  Animations respect the prefers-reduced-motion setting
                </li>
                <li>
                  Semantic HTML is used throughout (headings, landmarks,
                  lists, navigation)
                </li>
                <li>
                  Focus indicators are visible on all interactive elements
                </li>
                <li>
                  Touch targets meet minimum size requirements for mobile
                  use
                </li>
                <li>
                  The hero video includes baked-in captions
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Known Limitations
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Some third-party embedded content (YouTube, Spotify) may
                  have its own accessibility limitations outside my control.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Feedback &amp; Accommodations
              </h2>
              <p>
                If you encounter any barriers on this site, or if you need
                content in an alternative format, please let me know. I take
                this seriously and will do my best to address your needs
                promptly.
              </p>
              <p className="mt-3">
                Email{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com&su=Accessibility"
                  className="font-medium text-pink hover:underline"
                >
                  nola@nolasimon.com
                </a>{" "}
                with the subject line &ldquo;Accessibility&rdquo; and I&rsquo;ll
                respond within 5 business days.
              </p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
