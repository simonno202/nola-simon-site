"use client";

import { useState } from "react";
import Link from "next/link";
import { GoodpodsBadge } from "@/components/ui/GoodpodsBadge";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/data/navigation";
import { RabbitHole } from "@/components/ui/RabbitHole";

const KIT_FORM_UID = "430927c5eb";
const KIT_FORM_ID = "5830903";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [rabbitHoleOpen, setRabbitHoleOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("email_address", email);

      const res = await fetch(
        `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`,
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      void res;
      setStatus("success");
      setEmail("");
    } catch {
      window.open(
        `https://prodigious-painter-153.kit.com/${KIT_FORM_UID}`,
        "_blank"
      );
      setStatus("success");
      setEmail("");
    }
  }

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-[--max-width-content] px-[28px] py-16">
        {/* 4-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-sans text-[16px] font-semibold text-cream">
              Stay in the conversation
            </h4>
            <p className="mt-2 font-sans text-[14px] leading-relaxed text-text-lighter">
              Essays on trust, leadership, and the future of work. Delivered
              when they&apos;re ready.
            </p>

            <div aria-live="polite" aria-atomic="true">
              {status === "success" && (
                <p className="mt-3 font-sans text-[13px] font-medium text-pink" role="status">
                  You&apos;re in. Check your inbox.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 font-sans text-[13px] text-pink" role="alert">
                  Something went wrong. Try again.
                </p>
              )}
            </div>

            {status !== "success" && (
              <form
                onSubmit={handleSubmit}
                className="mt-4 flex gap-2"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 rounded-[--radius-input] border border-border-medium bg-surface px-3 py-2 font-sans text-[13px] text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-pink"
                  required
                  disabled={status === "loading"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="rounded-[--radius-button] bg-pink px-4 py-2 font-sans text-[13px] font-medium text-white transition-colors hover:bg-pink-hover disabled:opacity-60"
                >
                  {status === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            )}

            <p className="mt-2 font-sans text-[10px] leading-relaxed text-text-lighter/60">
              By subscribing, you consent to newsletters from Nola Simon
              Advisory. Unsubscribe via any email or contact{" "}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com" className="underline hover:text-cream transition-colors">
                nola@nolasimon.com
              </a>.{" "}
              <Link href="/privacy" className="underline hover:text-cream transition-colors">
                Privacy
              </Link>
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-lighter">
              Quick Links
            </h4>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-sans text-[14px] text-cream transition-colors hover:text-pink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-lighter">
              Connect
            </h4>
            <ul className="mt-3 flex flex-col gap-2">
              {[
                { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
                { label: "Substack", href: SOCIAL_LINKS.substack },
                { label: "Apple Podcasts", href: SOCIAL_LINKS.apple },
                { label: "Spotify", href: SOCIAL_LINKS.spotify },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[14px] text-cream transition-colors hover:text-pink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <GoodpodsBadge variant="inline" className="mt-4" />
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-lighter">
              Contact
            </h4>
            <p className="mt-3 font-sans text-[14px] leading-relaxed text-text-lighter">
              For speaking engagements, advisory work, or media inquiries.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com"
              className="mt-2 inline-block font-sans text-[14px] text-cream transition-colors hover:text-pink"
            >
              nola@nolasimon.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-cream/10 pt-6">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-3">
              <p className="font-sans text-[13px] italic text-text-lighter">
                The future isn&apos;t predicted. It&apos;s practiced.
              </p>
              <button
                onClick={() => setRabbitHoleOpen(true)}
                className="text-[18px] opacity-20 hover:opacity-80 transition-opacity cursor-pointer"
                type="button"
                aria-label="Find the rabbit hole"
                title="🐇"
              >
                🐇🕳️
              </button>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-sans text-[12px] text-text-lighter">
                &copy; 2026 Nola Simon
              </span>
              <Link
                href="/privacy"
                className="font-sans text-[12px] text-cream transition-colors hover:text-pink"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="font-sans text-[12px] text-cream transition-colors hover:text-pink"
              >
                Terms
              </Link>
              <Link
                href="/accessibility"
                className="font-sans text-[12px] text-cream transition-colors hover:text-pink"
              >
                Accessibility
              </Link>
              <Link
                href="/links"
                className="font-sans text-[12px] text-cream transition-colors hover:text-pink"
              >
                Links
              </Link>
            </div>
          </div>
        </div>
      </div>
      <RabbitHole isOpen={rabbitHoleOpen} onClose={() => setRabbitHoleOpen(false)} />
    </footer>
  );
}
