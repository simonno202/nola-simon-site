import type { Metadata } from "next";
import AnchorInventory from "@/components/AnchorInventory";
import NewsletterSection from "./NewsletterSection";

export const metadata: Metadata = {
  title: "The Anchor Inventory — Nola Simon",
  description:
    "Drift happens before you name it. A ten-question inventory to find what's load-bearing — what to hold onto — before you decide what moves.",
  alternates: {
    canonical: "https://nolasimon.com/anchor-inventory",
  },
  openGraph: {
    type: "website",
    url: "https://nolasimon.com/anchor-inventory",
    title: "The Anchor Inventory — Nola Simon | Everyday Futurism",
    description:
      "Drift happens before you name it. A ten-question inventory to find what's load-bearing — what to hold onto — before you decide what moves.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Anchor Inventory — Nola Simon | Everyday Futurism",
    description:
      "Drift happens before you name it. A ten-question inventory to find what's load-bearing — what to hold onto — before you decide what moves.",
    images: ["/opengraph-image"],
  },
};

export default function AnchorInventoryPage() {
  return (
    <main className="anchor-page">
      <style>{`
        .anchor-page {
          --pink: #ec4197;
          --dark: #0a0a0a;
          --cream: #f7f4f1;
          --text: #1a1a1a;
          --muted: #666;
          --border: #ebebeb;
          --mono: 'JetBrains Mono', monospace;
          --sans: 'Plus Jakarta Sans', sans-serif;
          font-family: var(--sans);
          color: var(--text);
          background: #fff;
        }

        /* ── HERO ── */
        .anchor-hero {
          background: var(--cream);
          padding: 80px 0 64px;
        }
        .anchor-hero-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .anchor-eyebrow {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--pink);
          margin-bottom: 20px;
          display: block;
        }
        .anchor-hero h1 {
          font-family: var(--sans);
          font-size: clamp(28px, 4.5vw, 52px);
          font-weight: 700;
          line-height: 1.1;
          color: #0a0a0a;
          letter-spacing: -0.03em;
          margin: 0 0 16px;
        }
        .anchor-hero-sub {
          font-family: var(--sans);
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 400;
          color: #555;
          line-height: 1.5;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* ── FRAMING ── */
        .anchor-framing {
          max-width: 800px;
          margin: 0 auto;
          padding: 64px 32px 56px;
          border-bottom: 1px solid var(--border);
        }
        .anchor-prose p {
          font-size: 17px;
          line-height: 1.85;
          color: #333;
          margin: 0 0 22px;
        }
        .anchor-prose p:last-child { margin-bottom: 0; }

        /* ── TOOL SECTION ── */
        .anchor-tool-section {
          border-bottom: 1px solid var(--border);
        }

        /* ── BRIDGE ── */
        .anchor-bridge {
          max-width: 800px;
          margin: 0 auto;
          padding: 64px 32px 56px;
          border-bottom: 1px solid var(--border);
        }
        .anchor-bridge-eyebrow {
          font-family: var(--mono);
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--pink);
          margin-bottom: 16px;
          display: block;
        }
        .anchor-bridge h2 {
          font-family: var(--sans);
          font-size: clamp(20px, 2.8vw, 28px);
          font-weight: 700;
          line-height: 1.2;
          color: #0a0a0a;
          letter-spacing: -0.02em;
          margin: 0 0 24px;
        }
        .anchor-bridge p {
          font-size: 16px;
          line-height: 1.85;
          color: #444;
          margin: 0 0 18px;
        }
        .anchor-bridge p:last-of-type { margin-bottom: 0; }
        .anchor-bridge-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--pink);
          text-decoration: none;
          border-bottom: 1px solid rgba(236,65,151,0.3);
          padding-bottom: 2px;
          transition: border-color 0.15s;
        }
        .anchor-bridge-cta:hover { border-color: var(--pink); }

        /* ── NEWSLETTER ── */
        .anchor-newsletter {
          background: var(--cream);
          padding: 64px 0;
        }
        .anchor-newsletter-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .anchor-newsletter h2 {
          font-family: var(--sans);
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 700;
          color: #0a0a0a;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
        }
        .anchor-newsletter p {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: #888;
          margin: 0 0 24px;
          line-height: 1.6;
        }
        .anchor-newsletter-form {
          display: flex;
          gap: 0;
          max-width: 420px;
        }
        .anchor-newsletter-input {
          flex: 1;
          padding: 12px 16px;
          border: 1px solid #d0d0d0;
          border-right: none;
          font-family: var(--sans);
          font-size: 14px;
          color: #1a1a1a;
          background: #fff;
          outline: none;
          border-radius: 2px 0 0 2px;
          transition: border-color 0.15s;
        }
        .anchor-newsletter-input:focus { border-color: var(--pink); }
        .anchor-newsletter-input::placeholder { color: #aaa; }
        .anchor-newsletter-btn {
          padding: 12px 20px;
          background: var(--pink);
          border: none;
          color: #fff;
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.03em;
          cursor: pointer;
          white-space: nowrap;
          border-radius: 0 2px 2px 0;
          transition: opacity 0.15s;
        }
        .anchor-newsletter-btn:hover { opacity: 0.88; }
        .anchor-newsletter-success {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--pink);
          margin-top: 12px;
        }

        /* ── TOOLS CALLOUT ── */
        .anchor-tools-callout {
          max-width: 800px;
          margin: 0 auto;
          padding: 48px 32px;
        }
        .anchor-tools-callout-eyebrow {
          font-family: var(--mono);
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #bbb;
          margin-bottom: 10px;
          display: block;
        }
        .anchor-tools-callout p {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: #aaa;
          line-height: 1.8;
          margin: 0 0 10px;
        }
        .anchor-tools-link {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--pink);
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .anchor-tools-link:hover { opacity: 0.75; }
      `}</style>

      {/* ── HERO ── */}
      <section className="anchor-hero">
        <div className="anchor-hero-inner">
          <span className="anchor-eyebrow">A tool from Everyday Futurism</span>
          <h1>The Anchor Inventory</h1>
          <p className="anchor-hero-sub">Before you decide what moves, know what&rsquo;s holding.</p>
        </div>
      </section>

      {/* ── FRAMING ── */}
      <div className="anchor-framing">
        <div className="anchor-prose">
          <p>
            An anchor isn&rsquo;t what&rsquo;s keeping you stuck. It&rsquo;s something concrete to
            hold onto when everything around you is moving &mdash; until you can move again from a
            place you actually chose.
          </p>
          <p>
            Drift happens in organizations the same way. Leaders aren&rsquo;t drifting because
            they&rsquo;re lost. They&rsquo;re drifting because nobody created the pause before the
            decision. Nobody asked: what do you need to hold onto right now?
          </p>
          <p>
            That&rsquo;s what this inventory is for. Ten questions. Five minutes. Not a score &mdash;
            a clearer picture of what&rsquo;s load-bearing before you decide what moves.
          </p>
        </div>
      </div>

      {/* ── TOOL EMBED ── */}
      <div className="anchor-tool-section">
        <AnchorInventory />
      </div>

      {/* ── FUTURISM BRIDGE ── */}
      <div className="anchor-bridge">
        <span className="anchor-bridge-eyebrow">What this is part of</span>
        <h2>Everyday Futurism is a practice, not a prediction.</h2>
        <p>
          The Anchor Inventory is the stabilizing step in that practice. It helps you name
          what&rsquo;s holding before you decide what changes.
        </p>
        <p>
          But knowing what you&rsquo;re standing on is only the first question. The second is
          harder: what are you taking for granted about what comes next?
        </p>
        <p>
          That&rsquo;s the work of the Assumption-Ground Audit &mdash; a process for surfacing the
          unexamined assumptions underneath a direction before it becomes a commitment. Not after
          the strategy is set. Not during implementation. Before.
        </p>
        <p>
          If you completed this inventory and found yourself sitting with something &mdash; ground
          softer than you expected, an assumption you haven&rsquo;t examined in years &mdash;
          that&rsquo;s the right moment for that conversation.
        </p>
        <a href="/aga" className="anchor-bridge-cta">
          Learn about the Assumption-Ground Audit &rarr;
        </a>
      </div>

      {/* ── NEWSLETTER ── */}
      <NewsletterSection />

      {/* ── TOOLS CALLOUT ── */}
      <div className="anchor-tools-callout">
        <span className="anchor-tools-callout-eyebrow">More tools</span>
        <p>
          The Anchor Inventory is part of a growing set of instruments for the pre-adoption stage
          of change.
        </p>
        <a href="/tools" className="anchor-tools-link">
          See all tools &rarr;
        </a>
      </div>
    </main>
  );
}
