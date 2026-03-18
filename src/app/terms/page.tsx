import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Use — Nola Simon | Everyday Futurism",
  description: "Terms of use for nolasimon.com.",
};

export default function TermsPage() {
  return (
    <main>
      <SectionWrapper className="bg-cream py-24 animate-hero-in">
        <div className="max-w-[var(--max-width-reading)]">
          <Eyebrow>LEGAL</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Terms of Use
          </h1>

          <p className="mt-2 font-mono text-[12px] text-text-muted">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Welcome
              </h2>
              <p>
                By using this website (nolasimon.com), you agree to these terms.
                If you don&rsquo;t agree, that&rsquo;s fine&nbsp;&mdash; but
                please don&rsquo;t use the site. By using this site, you
                represent that you are at least 18 years of age or have the
                consent of a parent or guardian.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Intellectual Property
              </h2>
              <p>
                All content on this site&nbsp;&mdash; including text, graphics,
                podcast episodes, essays, frameworks, and design&nbsp;&mdash; is
                the intellectual property of Nola Simon Advisory unless otherwise
                noted. You&rsquo;re welcome to share links. Please don&rsquo;t
                reproduce content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Not Professional Advice
              </h2>
              <p>
                The content on this site is for informational and educational
                purposes. It&rsquo;s not a substitute for professional legal,
                financial, or business advice. Use your judgement. Trust
                yourself.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Nola Simon Advisory
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of this
                website or any content on it. This includes, but is not limited
                to, damages for loss of profits, data, or other intangibles.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                External Links
              </h2>
              <p>
                This site links to external websites and platforms. I&rsquo;m
                not responsible for the content or practices of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Governing Law
              </h2>
              <p>
                These terms are governed by and construed in accordance with the
                laws of the Province of Ontario and the federal laws of Canada
                applicable therein. Any disputes arising from these terms shall
                be subject to the exclusive jurisdiction of the courts of
                Ontario.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Changes to These Terms
              </h2>
              <p>
                I may update these terms from time to time. Continued use of the
                site means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Severability
              </h2>
              <p>
                If any provision of these terms is found to be invalid or
                unenforceable, the remaining provisions shall continue in full
                force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">Contact</h2>
              <p>
                Questions? Email{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com"
                  className="font-medium text-pink hover:underline"
                >
                  nola@nolasimon.com
                </a>{" "}
                or reach out via{" "}
                <a
                  href="https://www.linkedin.com/in/nolasimon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-pink hover:underline"
                >
                  LinkedIn
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
