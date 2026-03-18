"use client";

import { useState } from "react";
import Eyebrow from "./Eyebrow";

interface NewsletterCTAProps {
  headline?: string;
  body?: string;
}

const KIT_FORM_UID = "430927c5eb";
const KIT_FORM_ID = "5830903";

const defaultHeadline = "Signal over noise.";
const defaultBody =
  "Essays on trust, leadership, and the future of work. No algorithm. No noise. Just the thinking that matters.";

export function NewsletterCTA({
  headline = defaultHeadline,
  body = defaultBody,
}: NewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

      // no-cors returns opaque response, so we optimistically succeed
      void res;
      setStatus("success");
      setEmail("");
    } catch {
      // Fallback: open Kit form directly
      window.open(
        `https://prodigious-painter-153.kit.com/${KIT_FORM_UID}`,
        "_blank"
      );
      setStatus("success");
      setEmail("");
    }
  }

  return (
    <div className="bg-navy rounded-[--radius-card] px-[28px] py-12 text-center">
      <Eyebrow className="text-text-lighter">Signal Over Noise</Eyebrow>
      <h3 className="mt-4 font-sans text-[24px] font-semibold leading-snug text-cream">
        {headline}
      </h3>
      <p className="mx-auto mt-3 max-w-[480px] font-sans text-[15px] leading-relaxed text-text-lighter">
        {body}
      </p>

      <div aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="mt-6 font-sans text-[15px] font-medium text-pink" role="status">
            You&rsquo;re in. Check your inbox to confirm.
          </p>
        )}
        {status === "error" && (
          <p className="mt-3 font-sans text-[13px] text-pink" role="alert">
            Something went wrong. Please try again.
          </p>
        )}
      </div>

      {status !== "success" && (
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-[420px] gap-3"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 rounded-[--radius-input] border border-border-medium bg-surface px-4 py-3 font-sans text-[14px] text-navy placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-pink"
            required
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-[--radius-button] bg-pink px-6 py-3 font-sans text-[14px] font-medium text-white transition-colors hover:bg-pink-hover disabled:opacity-60"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
      )}

      <p className="mx-auto mt-3 max-w-[420px] font-sans text-[11px] leading-relaxed text-text-lighter/80">
        By subscribing, you consent to receiving newsletters from Nola Simon
        Advisory. Unsubscribe anytime via the link in any email or email{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com" className="underline hover:text-cream transition-colors">
          nola@nolasimon.com
        </a>
        .{" "}
        <a href="/privacy" className="underline hover:text-cream transition-colors">
          Privacy Policy
        </a>
      </p>

      <p className="mt-2 font-sans text-[11px] text-text-lighter/60">
        Powered by{" "}
        <a
          href="https://kit.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-text-lighter transition-colors"
        >
          Kit
        </a>
      </p>
    </div>
  );
}

export default NewsletterCTA;
