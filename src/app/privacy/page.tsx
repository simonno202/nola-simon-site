import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy — Nola Simon | Everyday Futurism",
  description: "Privacy policy for nolasimon.com.",
  alternates: {
    canonical: "https://nolasimon.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <SectionWrapper className="bg-cream py-12 lg:py-24 animate-hero-in">
        <div className="max-w-[var(--max-width-reading)]">
          <Eyebrow>LEGAL</Eyebrow>

          <h1
            className="font-sans font-normal text-navy mt-4"
            style={{ fontSize: "clamp(26px, 5vw, 40px)" }}
          >
            Privacy Policy
          </h1>

          <p className="mt-2 font-mono text-[12px] text-text-muted">
            Last updated: March 2026
          </p>

          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-text-secondary">
            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Who I Am
              </h2>
              <p>
                This website is operated by Nola Simon Advisory, based in
                Ontario, Canada. I collect and use your personal information
                with your consent, in accordance with Canada&rsquo;s Personal
                Information Protection and Electronic Documents Act (PIPEDA).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                What I Collect
              </h2>
              <p>
                If you subscribe to the newsletter, I collect your name and
                email address. I don&rsquo;t collect phone numbers, payment
                information, or anything else through this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                How I Use It
              </h2>
              <p>
                Your email address is used to send you the newsletter and
                occasional updates about my work. By subscribing, you provide
                express consent to receive these electronic messages in
                compliance with Canada&rsquo;s Anti-Spam Legislation (CASL). I
                will never sell, share, or rent your email address to anyone.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Third-Party Services
              </h2>
              <p>
                The newsletter signup on this website is managed through{" "}
                <a
                  href="https://kit.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-pink hover:underline"
                >
                  Kit (formerly ConvertKit)
                </a>
                , a US-based email service provider. Essays and longer-form
                writing are published on{" "}
                <a
                  href="https://substack.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-pink hover:underline"
                >
                  Substack
                </a>
                . Both services have their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Cross-Border Data Transfers
              </h2>
              <p>
                By subscribing to the newsletter, your email address may be
                transferred to and stored in the United States by Kit
                (ConvertKit). This site is hosted by Vercel, Inc. (also
                US-based). Standard server logs (IP addresses, page requests)
                may be collected by Vercel for security and performance
                purposes. By using this site, you consent to these transfers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Data Retention
              </h2>
              <p>
                Your name and email address are retained on my mailing list
                until you unsubscribe. Upon unsubscription or a deletion
                request, your data is removed within 30 days. Server logs are retained by
                Vercel according to their standard retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">Cookies</h2>
              <p>
                This site does not set first-party cookies for tracking or
                advertising purposes. Infrastructure providers (Vercel) may set
                minimal cookies for security and performance. No third-party
                tracking cookies or advertising cookies are used.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">
                Your Rights Under PIPEDA
              </h2>
              <p>You have the right to:</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>
                  Unsubscribe from the newsletter at any time using the link in
                  any email
                </li>
                <li>
                  Request access to the personal information I hold about you
                </li>
                <li>
                  Request corrections if your information is inaccurate or
                  incomplete
                </li>
                <li>Request deletion of your personal information entirely</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email me at{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com"
                  className="font-medium text-pink hover:underline"
                >
                  nola@nolasimon.com
                </a>
                . I&rsquo;ll respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-navy mb-3">Contact</h2>
              <p>
                Questions about this policy? Email{" "}
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
