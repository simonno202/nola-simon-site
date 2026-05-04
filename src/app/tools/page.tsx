import type { Metadata } from "next";
import Link from "next/link";
import CollapsibleVisualizer from "./CollapsibleVisualizer";

export const metadata: Metadata = {
  title: "Tools — Nola Simon",
  description:
    "Free instruments for the pre-adoption stage of change. Built for the moment before the direction is set — before the assumption becomes load-bearing.",
  alternates: {
    canonical: "https://nolasimon.com/tools",
  },
  openGraph: {
    type: "website",
    url: "https://nolasimon.com/tools",
    title: "Tools — Nola Simon | Everyday Futurism",
    description:
      "Free instruments for the pre-adoption stage of change. Built for the moment before the direction is set — before the assumption becomes load-bearing.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools — Nola Simon | Everyday Futurism",
    description:
      "Free instruments for the pre-adoption stage of change. Built for the moment before the direction is set — before the assumption becomes load-bearing.",
    images: ["/og-image.jpg"],
  },
};

const tools = [
  {
    eyebrow: "Stability",
    title: "The Anchor Inventory",
    body: [
      "Before you decide what moves, know what’s holding. Ten questions that give you a clearer picture of what’s load-bearing — before you commit to a direction.",
    ],
    cta: "Take the inventory",
    href: "/anchor-inventory",
    external: false,
  },
  {
    eyebrow: "Trust",
    title: "The Witnessed Trust Quiz",
    body: [
      "Trust has more definitions than love, and the context matters. Trust isn’t declared — it’s witnessed, and it shifts based on what people see: in the room, online, and through AI systems forming assessments about you whether you know it or not.",
      "This quiz works with what you can actually observe.",
    ],
    cta: "Take the quiz",
    href: "/trust-signal-quiz",
    external: false,
  },
  {
    eyebrow: "Signal",
    title: "The Signal Tracker",
    body: [
      "A working instrument for logging trust signals over time, finding the pattern, and knowing what to do with what you see.",
    ],
    cta: "Open the tracker",
    href: "/signal-tracker",
    external: false,
  },
];

export default function ToolsPage() {
  return (
    <main className="tools-page">
      <style>{`
        .tools-page {
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
        .tools-hero {
          background: var(--cream);
          padding: 80px 0 64px;
        }
        .tools-hero-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .tools-eyebrow {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--pink);
          margin-bottom: 20px;
          display: block;
        }
        .tools-hero h1 {
          font-family: var(--sans);
          font-size: clamp(28px, 4.5vw, 46px);
          font-weight: 700;
          line-height: 1.15;
          color: var(--dark);
          letter-spacing: -0.025em;
          margin: 0 0 16px;
        }
        .tools-hero-sub {
          font-family: var(--mono);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: var(--muted);
          line-height: 1.8;
          margin: 0;
        }
        .tools-hero-sub span {
          display: block;
        }

        /* ── FRAMING ── */
        .tools-framing {
          max-width: 800px;
          margin: 0 auto;
          padding: 64px 32px 56px;
          border-bottom: 1px solid var(--border);
        }
        .tools-prose p {
          font-size: 17px;
          line-height: 1.85;
          color: #333;
          margin: 0 0 22px;
        }
        .tools-prose p:last-child { margin-bottom: 0; }

        /* ── TOOL LISTINGS ── */
        .tools-list {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .tool-item {
          padding: 56px 0;
          border-bottom: 1px solid var(--border);
        }
        .tool-item:last-child { border-bottom: none; }
        .tool-item-eyebrow {
          font-family: var(--mono);
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--pink);
          margin-bottom: 12px;
          display: block;
        }
        .tool-item h2 {
          font-family: var(--sans);
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700;
          line-height: 1.25;
          color: var(--dark);
          letter-spacing: -0.02em;
          margin: 0 0 24px;
        }
        .tool-item-body p {
          font-size: 16px;
          line-height: 1.85;
          color: #444;
          margin: 0 0 18px;
        }
        .tool-item-body p:last-child { margin-bottom: 0; }
        .tool-item-cta {
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
        .tool-item-cta:hover { border-color: var(--pink); }

        /* ── COMING SOON ── */
        .tools-coming-soon {
          max-width: 800px;
          margin: 0 auto;
          padding: 48px 32px;
          border-top: 1px solid var(--border);
        }
        .tools-coming-soon p {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: #aaa;
          line-height: 1.8;
          margin: 0;
        }

        /* ── FOOTER CTA ── */
        .tools-footer-cta {
          background: var(--dark);
          padding: 72px 0;
        }
        .tools-footer-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 32px;
        }
        .tools-footer-inner h2 {
          font-family: var(--sans);
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 700;
          color: #f0f0f0;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
          line-height: 1.3;
        }
        .tools-footer-inner p {
          font-size: 16px;
          line-height: 1.8;
          color: #aaa;
          margin: 0 0 16px;
          max-width: 560px;
        }
        .tools-footer-inner p:last-of-type { margin-bottom: 0; }
        .tools-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 32px;
          background: var(--pink);
          color: #fff;
          font-family: var(--sans);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 14px 28px;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .tools-footer-btn:hover { opacity: 0.88; }
        .tools-aga-link {
          display: block;
          margin-top: 16px;
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.15s;
        }
        .tools-aga-link:hover { color: var(--pink); }
      `}</style>

      {/* ── HERO ── */}
      <section className="tools-hero">
        <div className="tools-hero-inner">
          <span className="tools-eyebrow">Everyday Futurism</span>
          <h1>Tools for the moment before the decision.</h1>
          <p className="tools-hero-sub">
            <span>Before the direction is set.</span>
            <span>Before the assumption hardens into policy.</span>
            <span>Before the move is harder to walk back.</span>
          </p>
        </div>
      </section>

      {/* ── FRAMING ── */}
      <div className="tools-framing">
        <div className="tools-prose">
          <p>
            I worked on a team that commissioned a custom CRM. Months of work,
            real investment. No one used it.
          </p>
          <p>
            Not because it was badly built. Because nobody asked the right
            questions before it was built. No red team. No one whose job was to
            say plainly: here&rsquo;s what this will actually cost the people
            using it, here&rsquo;s where it creates more work than it removes,
            here&rsquo;s what you&rsquo;re assuming that isn&rsquo;t true.
          </p>
          <p>
            By the time it launched, the assumptions had hardened into
            architecture. Nagging didn&rsquo;t help. Threats didn&rsquo;t help.
            The window for honest examination had closed.
          </p>
          <p>
            These tools are built for that window &mdash; before the direction
            sets, before the assumption becomes load-bearing, before
            you&rsquo;re managing a decision instead of making one.
          </p>
          <p>
            They&rsquo;re free. They&rsquo;re ungated. They work best when the
            answer surprises you.
          </p>
        </div>
      </div>

      {/* ── VISUALIZER ── */}
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', borderBottom: '1px solid #ebebeb' }}>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: '#666', margin: '32px 0 0', lineHeight: 1.7 }}>
          If you already have coaches, OD, or change management in place, these tools are built for the gap they don&rsquo;t cover.
        </p>
        <CollapsibleVisualizer />
      </div>

      {/* ── TOOL LISTINGS ── */}
      <div className="tools-list">
        {tools.map((tool) => (
          <div key={tool.title} className="tool-item">
            <span className="tool-item-eyebrow">{tool.eyebrow}</span>
            <h2>{tool.title}</h2>
            <div className="tool-item-body">
              {tool.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {tool.external ? (
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-item-cta"
              >
                {tool.cta} &rarr;
              </a>
            ) : (
              <Link href={tool.href} className="tool-item-cta">
                {tool.cta} &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* ── COMING SOON ── */}
      <div className="tools-coming-soon">
        <p>
          More instruments are in development. The pre-adoption stage is
          under-mapped. That&rsquo;s the work.
        </p>
      </div>

      {/* ── FOOTER CTA ── */}
      <section className="tools-footer-cta">
        <div className="tools-footer-inner">
          <h2>These tools are the entry point.</h2>
          <p>
            The tools are free because the conversation that follows costs
            something. If one of these showed you something you hadn&rsquo;t
            named &mdash; ground softer than you expected, a trust signal
            degrading where you hadn&rsquo;t looked &mdash; the
            Assumption-Ground Audit is the next step. It doesn&rsquo;t happen
            in a form. It happens in conversation.
          </p>
          <a
            href="https://tidycal.com/nola/intro-consultation-nola-simon"
            target="_blank"
            rel="noopener noreferrer"
            className="tools-footer-btn"
          >
            Book an Intro Consultation &rarr;
          </a>
          <a href="/aga" className="tools-aga-link">
            Learn about the Assumption-Ground Audit &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
