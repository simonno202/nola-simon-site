import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Assumption-Ground Audit — Nola Simon | Everyday Futurism",
  description:
    "The Assumption-Ground Audit is a structured investigation of what your organization is taking for granted — before the convergences make it expensive. Senior-level advisory by Nola Simon.",
  keywords: [
    "assumption-ground audit",
    "strategic foresight",
    "organizational assumptions",
    "future of work",
    "Nola Simon",
    "everyday futurism",
    "leadership advisory",
    "AI strategy assumptions",
    "pre-adoption planning",
    "workforce strategy",
    "change management",
  ],
  alternates: {
    canonical: "https://nolasimon.com/aga",
  },
  openGraph: {
    type: "website",
    url: "https://nolasimon.com/aga",
    title: "The Assumption-Ground Audit — Nola Simon",
    description:
      "A structured investigation of what your organization is taking for granted — before the convergences make it expensive.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Assumption-Ground Audit — Nola Simon",
    description:
      "A structured investigation of what your organization is taking for granted — before the convergences make it expensive.",
    images: ["/og-image.jpg"],
  },
};

const agaEssays = [
  {
    title: "The $30 Million Assumption Nobody Checked",
    description:
      "One school board policy. One unexamined assumption. Eighteen months of upstream work. $30 million in recovered value — and counting. The clearest worked example of an AGA in practice.",
    href: "/blog/pediculosis-and-change",
  },
  {
    title: "Foregone Conclusions Gone Wrong",
    description:
      "The assessor didn't look at me once. The insurance company had already sent their determination before I sat down in that chair. What the AGA asks when the process itself is the problem.",
    href: "/blog/foregone-conclusions-gone-wrong",
  },
  {
    title: "The Most Dangerous Assumption in the Room",
    description:
      "I drove into a cement hauler, showed up to court without a lawyer, and was certain I understood the situation. The audit that's hardest to run is the one you do on yourself.",
    href: "/blog/the-most-dangerous-assumption-in-the-room",
  },
];

const furtherReading = [
  { title: "Not Just Another Futurist", href: "/blog/not-just-another-futurist" },
  { title: "Everyday Futurism: A Practice, Not a Prediction", href: "/blog/everyday-futurism-a-practice-not-a-prediction" },
  { title: "Who Gets to Be Trusted Now?", href: "/blog/who-gets-to-be-trusted-now" },
  { title: "Witnessed Trust — A Case Study", href: "/blog/witnessed-trust-case-study" },
  { title: "What, Like It's Hard? Ben Affleck, Reese Witherspoon, and Who Gets to Be Trusted in the Age of AI", href: "/blog/ben-affleck-reese-witherspoon-trust-receipts" },
  { title: "The Rabbit Hole", href: "/blog/the-rabbit-hole" },
  { title: "Pre-adoption tools", href: "/tools" },
];

const faqs = [
  {
    q: "What's the difference between an Assumption-Ground Audit and a strategy audit?",
    a: "A strategy audit examines whether your strategy is working. The AGA examines what you're assuming before you've built the strategy — the layer underneath that shapes which trends get noticed, which scenarios get built, and which futures get treated as possible before anyone has made a conscious choice.",
  },
  {
    q: "How long does an AGA engagement take?",
    a: "It varies by organization size and complexity. Most engagements run 4–8 weeks. The work is intensive and high-touch; I work with a small number of organizations at a time.",
  },
  {
    q: "What triggers the need for an AGA?",
    a: "Common triggers: an AI or technology decision on the horizon, a workforce restructuring, a return-to-office or flexibility policy under review, a major vendor relationship, or a leadership team that senses the current direction isn't quite right but can't name why.",
  },
  {
    q: "Is this the same as scenario planning?",
    a: "Scenario planning builds pictures of possible futures. The AGA examines what your organization is already assuming about the future before it builds those pictures — the layer that shapes which scenarios get considered and which get ruled out before the work begins.",
  },
  {
    q: "Is this the same as a pre-mortem?",
    a: "A pre-mortem imagines a future failure and works backward. The AGA works from the present — from what's already forming in the organization's thinking — and asks what ground those formations are standing on. It's forensic rather than speculative.",
  },
  {
    q: "What does the retained relationship look like in practice?",
    a: "Ongoing, collaborative, and high-touch — mentorship, role modelling, collaboration. I work alongside your leadership team as a thinking partner, modelling the futurist's question in real time so the capacity to ask it builds inside the organization over time. It is not a monitoring or reporting function.",
  },
  {
    q: "Do you work with organizations outside Canada?",
    a: "Yes. The work is not geography-dependent and I am open to international engagements. Hope + Possibilities has listeners in 52 countries, with strong audiences across Asia, Europe, the Middle East, Africa, and Latin America. The episode that became the most listened-to — by far — on Mama, What's Next, a German-based podcast, demonstrates that the questions I'm asking resonate well beyond North America. Cross-border Canada-US operations are a particular area of pattern recognition given my background, but the methodology travels.",
  },
  {
    q: "What size of organization is this designed for?",
    a: "The AGA is designed for complex organizations — typically those large enough that decisions travel through multiple layers before landing, and where assumptions have time to harden without being named. Enterprise and mid-market.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const steps = [
  {
    number: "01",
    label: "Signal mapping",
    text: "Identifying where the organization's current thinking is already hardening into assumption.",
  },
  {
    number: "02",
    label: "Assumption surfacing",
    text: "Naming what's being taken for granted before anyone has examined whether the ground is actually there.",
  },
  {
    number: "03",
    label: "Convergence reading",
    text: "Examining where multiple trends and assumptions are meeting, and what happens at the crossing point.",
  },
  {
    number: "04",
    label: "Decision audit",
    text: "Tracing which consequential decisions have already been made without being recognized as decisions.",
  },
];

const notList = [
  "A consulting engagement that arrives with pre-built frameworks",
  "A change management process",
  "AI adoption work or implementation support",
  "A roadmap for what comes next",
  "A trend report or scenario planning exercise",
];

export default function AGAPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="aga-page">
        <style>{`
          .aga-page {
            --pink: #ec4197;
            --dark: #0a0a0a;
            --light-bg: #f7f4f1;
            --text: #1a1a1a;
            --muted: #666;
            --mono: 'JetBrains Mono', monospace;
            --sans: 'Plus Jakarta Sans', sans-serif;
            font-family: var(--sans);
            color: var(--text);
            background: #fff;
          }

          /* ── HERO ── */
          .aga-hero {
            background: var(--dark);
            padding: 96px 0 80px;
            position: relative;
            overflow: hidden;
          }
          .aga-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(236,65,151,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236,65,151,0.05) 1px, transparent 1px);
            background-size: 48px 48px;
          }
          .aga-hero-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
            position: relative;
            z-index: 1;
          }
          .aga-eyebrow {
            font-family: var(--mono);
            font-size: 10px;
            font-weight: 400;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--pink);
            margin-bottom: 24px;
            display: block;
          }
          .aga-hero h1 {
            font-family: var(--sans);
            font-size: clamp(32px, 5vw, 54px);
            font-weight: 800;
            line-height: 1.12;
            color: #f0f0f0;
            letter-spacing: -0.025em;
            margin: 0 0 24px;
          }
          .aga-hero h1 em {
            font-style: normal;
            color: var(--pink);
          }
          .aga-hero-kicker {
            font-size: 15px;
            font-weight: 500;
            color: rgba(240,240,240,0.55);
            margin: 0 0 20px;
            line-height: 1.5;
            letter-spacing: 0.01em;
          }
          .aga-hero-sub {
            font-size: 18px;
            font-weight: 400;
            line-height: 1.7;
            color: #999;
            max-width: 580px;
            margin: 0 0 40px;
          }
          .aga-hero-cta {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--pink);
            color: #fff;
            font-family: var(--sans);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.04em;
            padding: 14px 28px;
            border-radius: 2px;
            text-decoration: none;
            transition: opacity 0.15s;
          }
          .aga-hero-cta:hover { opacity: 0.88; }

          /* ── SHARED SECTION ── */
          .aga-section {
            max-width: 800px;
            margin: 0 auto;
            padding: 72px 32px;
            border-bottom: 1px solid #f0f0f0;
          }
          .aga-section:last-of-type { border-bottom: none; }
          .aga-section-label {
            font-family: var(--mono);
            font-size: 9px;
            font-weight: 400;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--pink);
            margin-bottom: 16px;
            display: block;
          }
          .aga-section h2 {
            font-family: var(--sans);
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 700;
            line-height: 1.25;
            color: var(--dark);
            letter-spacing: -0.02em;
            margin: 0 0 28px;
          }
          .aga-prose p {
            font-size: 17px;
            line-height: 1.8;
            color: #333;
            margin: 0 0 20px;
          }
          .aga-prose p:last-child { margin-bottom: 0; }
          .aga-prose em { font-style: italic; color: var(--dark); }
          .aga-prose a {
            color: var(--pink);
            text-decoration: none;
            border-bottom: 1px solid rgba(236,65,151,0.3);
            transition: border-color 0.15s;
          }
          .aga-prose a:hover { border-color: var(--pink); }
          .aga-inline-link {
            color: var(--muted);
            text-decoration: none;
            border-bottom: 1px solid rgba(102,102,102,0.3);
            transition: color 0.15s, border-color 0.15s;
          }
          .aga-inline-link:hover { color: var(--pink); border-color: var(--pink); }

          /* Pull quote */
          .aga-pullquote {
            border-left: 3px solid var(--pink);
            padding: 4px 0 4px 24px;
            margin: 36px 0;
          }
          .aga-pullquote p {
            font-family: var(--sans);
            font-size: 20px;
            font-weight: 600;
            line-height: 1.5;
            color: var(--dark);
            margin: 0;
            letter-spacing: -0.01em;
          }

          /* ── WHY NOW BAND ── */
          .aga-why-band {
            background: var(--light-bg);
            padding: 72px 0;
          }
          .aga-why-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
          }
          .aga-why-inner .aga-section-label { margin-bottom: 16px; }
          .aga-why-inner h2 {
            font-family: var(--sans);
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 700;
            color: var(--dark);
            letter-spacing: -0.02em;
            margin: 0 0 28px;
            line-height: 1.25;
          }
          .aga-why-inner .aga-prose p { color: #444; }

          /* ── WHO IT'S FOR ── */
          .aga-who-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin: 28px 0;
          }
          @media (max-width: 560px) {
            .aga-who-grid { grid-template-columns: 1fr; }
          }
          .aga-who-tag {
            font-family: var(--mono);
            font-size: 11px;
            font-weight: 400;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--pink);
            background: rgba(236,65,151,0.06);
            border: 1px solid rgba(236,65,151,0.15);
            border-radius: 2px;
            padding: 10px 14px;
          }

          /* Mid-page CTA */
          .aga-mid-cta {
            background: var(--dark);
            border-radius: 4px;
            padding: 32px;
            margin-top: 36px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            flex-wrap: wrap;
          }
          .aga-mid-cta-text {
            font-size: 15px;
            line-height: 1.6;
            color: #aaa;
            margin: 0;
            max-width: 420px;
          }
          .aga-mid-cta-text strong { color: #f0f0f0; }
          .aga-mid-cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: var(--pink);
            color: #fff;
            font-family: var(--sans);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.04em;
            padding: 12px 22px;
            border-radius: 2px;
            text-decoration: none;
            white-space: nowrap;
            flex-shrink: 0;
            transition: opacity 0.15s;
          }
          .aga-mid-cta-btn:hover { opacity: 0.88; }

          /* ── NOT LIST ── */
          .aga-not-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .aga-not-list li {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            font-size: 16px;
            line-height: 1.6;
            color: #444;
          }
          .aga-not-list li::before {
            content: '—';
            color: var(--pink);
            font-family: var(--mono);
            font-size: 12px;
            flex-shrink: 0;
            margin-top: 3px;
          }

          /* ── HOW IT WORKS ── */
          .aga-steps {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin-top: 8px;
            border-top: 1px solid #ebebeb;
          }
          .aga-step {
            display: grid;
            grid-template-columns: 56px 140px 1fr;
            gap: 24px;
            align-items: start;
            padding: 28px 0;
            border-bottom: 1px solid #ebebeb;
          }
          @media (max-width: 600px) {
            .aga-step {
              grid-template-columns: 40px 1fr;
              gap: 16px;
            }
            .aga-step-label { grid-column: 2; margin-top: -20px; }
            .aga-step-text { grid-column: 2; }
          }
          .aga-step-number {
            font-family: var(--mono);
            font-size: 11px;
            font-weight: 500;
            color: rgba(236,65,151,0.4);
            letter-spacing: 0.1em;
            padding-top: 3px;
          }
          .aga-step-label {
            font-family: var(--mono);
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--pink);
            padding-top: 3px;
          }
          .aga-step-text {
            font-size: 16px;
            line-height: 1.7;
            color: #444;
          }

          /* ── DARK BAND — AFTER ── */
          .aga-dark-band {
            background: var(--dark);
            padding: 72px 0;
            position: relative;
            overflow: hidden;
          }
          .aga-dark-band::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(236,65,151,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236,65,151,0.04) 1px, transparent 1px);
            background-size: 48px 48px;
          }
          .aga-dark-band-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
            position: relative;
            z-index: 1;
          }
          .aga-dark-band h2 {
            font-family: var(--sans);
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 700;
            color: #f0f0f0;
            letter-spacing: -0.02em;
            margin: 0 0 28px;
            line-height: 1.25;
          }
          .aga-dark-band .aga-prose p { color: #aaa; }
          .aga-dark-band .aga-pullquote p { color: #f0f0f0; }

          /* ── RETAINED ── */
          .aga-retained-band {
            background: #fdf9f7;
            padding: 72px 0;
            border-top: 3px solid var(--pink);
          }
          .aga-retained-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
          }
          .aga-retained-inner h2 {
            font-family: var(--sans);
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 700;
            color: var(--dark);
            letter-spacing: -0.02em;
            margin: 0 0 28px;
            line-height: 1.25;
          }
          .aga-retained-inner .aga-prose p { color: #444; }

          /* ── ETHICS ── */
          .aga-ethics {
            background: var(--dark);
            padding: 72px 0;
          }
          .aga-ethics-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
          }
          .aga-ethics-inner .aga-pullquote {
            border-left-color: var(--pink);
          }
          .aga-ethics-inner .aga-pullquote p {
            font-size: 24px;
            color: #f0f0f0;
          }
          .aga-ethics-inner .aga-prose p { color: #aaa; }

          /* ── GLOBAL STATS ── */
          .aga-global-band {
            background: var(--light-bg);
            padding: 72px 0;
          }
          .aga-global-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
          }
          .aga-global-inner h2 {
            font-family: var(--sans);
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 700;
            color: var(--dark);
            letter-spacing: -0.02em;
            margin: 0 0 36px;
            line-height: 1.25;
          }
          .aga-stats-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-bottom: 40px;
          }
          @media (max-width: 480px) {
            .aga-stats-row { grid-template-columns: 1fr; }
          }
          .aga-stat-card {
            background: #fff;
            border: 1px solid #e8e3de;
            border-radius: 4px;
            padding: 28px 24px;
          }
          .aga-stat-number {
            font-family: var(--sans);
            font-size: 48px;
            font-weight: 800;
            color: var(--pink);
            letter-spacing: -0.03em;
            line-height: 1;
            margin-bottom: 8px;
          }
          .aga-stat-label {
            font-family: var(--mono);
            font-size: 9px;
            font-weight: 400;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #888;
          }
          .aga-global-body p {
            font-size: 16px;
            line-height: 1.8;
            color: #444;
            margin: 0 0 16px;
          }
          .aga-global-body p:last-child { margin: 0; }

          /* ── ESSAYS ── */
          .aga-essays {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .aga-essay-item {
            border-bottom: 1px solid #ebebeb;
            padding: 28px 0;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 24px;
            align-items: start;
            text-decoration: none;
            transition: background 0.15s;
          }
          .aga-essay-item:first-child { padding-top: 0; }
          .aga-essay-item:hover .aga-essay-title { color: var(--pink); }
          .aga-essay-title {
            font-family: var(--sans);
            font-size: 16px;
            font-weight: 700;
            color: var(--dark);
            margin: 0 0 8px;
            line-height: 1.35;
            transition: color 0.15s;
          }
          .aga-essay-desc {
            font-size: 14px;
            line-height: 1.65;
            color: #777;
            margin: 0;
          }
          .aga-essay-arrow {
            font-family: var(--mono);
            font-size: 14px;
            color: var(--pink);
            flex-shrink: 0;
            margin-top: 2px;
          }

          /* ── FAQ ── */
          .aga-faq {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .aga-faq-item {
            border-bottom: 1px solid #ebebeb;
            padding: 28px 0;
          }
          .aga-faq-item:first-child { padding-top: 0; }
          .aga-faq-q {
            font-family: var(--sans);
            font-size: 16px;
            font-weight: 700;
            color: var(--dark);
            margin: 0 0 12px;
            line-height: 1.4;
          }
          .aga-faq-a {
            font-size: 15px;
            line-height: 1.75;
            color: #555;
            margin: 0;
          }

          /* ── CTA BAND ── */
          .aga-cta-band {
            background: var(--pink);
            padding: 80px 0;
          }
          .aga-cta-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
          }
          .aga-cta-eyebrow {
            font-family: var(--mono);
            font-size: 9px;
            font-weight: 400;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.6);
            margin-bottom: 20px;
            display: block;
          }
          .aga-cta-band h2 {
            font-family: var(--sans);
            font-size: clamp(24px, 4vw, 38px);
            font-weight: 800;
            color: #fff;
            letter-spacing: -0.025em;
            line-height: 1.2;
            margin: 0 0 24px;
          }
          .aga-cta-note {
            font-size: 16px;
            line-height: 1.75;
            color: rgba(255,255,255,0.8);
            margin: 0 0 10px;
            max-width: 560px;
          }
          .aga-cta-note strong { color: #fff; font-weight: 600; }
          .aga-cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #fff;
            color: var(--pink);
            font-family: var(--sans);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.04em;
            padding: 16px 32px;
            border-radius: 2px;
            text-decoration: none;
            transition: opacity 0.15s;
          }
          .aga-cta-btn:hover { opacity: 0.9; }
          .aga-cta-sub {
            font-family: var(--mono);
            font-size: 10px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.5);
            margin-top: 20px;
          }
        `}</style>

        {/* ── HERO ── */}
        <section className="aga-hero">
          <div className="aga-hero-inner">
            <span className="aga-eyebrow">Methodology · Everyday Futurism</span>
            <p className="aga-hero-kicker">The audit that happens before the direction hardens.</p>
            <h1>
              The Assumption-<em>Ground</em> Audit
            </h1>
            <p className="aga-hero-sub">
              The practice of asking what your organization is taking for
              granted — before the convergences make it expensive.
            </p>
            <a
              href="https://tidycal.com/nola/intro-consultation-nola-simon"
              className="aga-hero-cta"
            >
              Book an Intro Consultation →
            </a>
            <p style={{ marginTop: "16px" }}>
              <a href="/why" className="aga-inline-link">
                Why you. Why now. Why at all. →
              </a>
            </p>
            <p style={{ marginTop: "12px" }}>
              <a href="/tools" className="aga-inline-link">
                Not sure where to start? Try the pre-adoption tools first. →
              </a>
            </p>
          </div>
        </section>

        {/* ── WHAT IT IS ── */}
        <section className="aga-section">
          <span className="aga-section-label">What it is</span>
          <div className="aga-prose">
            <p>
              Most organizations treat futures work as a project. Scan the
              trends. Build the scenarios. Choose a direction. Execute.
            </p>
            <p>
              That model assumes change moves in one direction at a time and
              waits while you plan. It doesn&rsquo;t.
            </p>
            <p>
              Trends converge in ways nobody modeled. Scenarios built six
              months ago are already standing on different ground. The direction
              chosen last year is meeting forces that didn&rsquo;t exist when the
              decision was made. And the assumptions underneath all of it — the
              ones that shaped which trends got noticed, which scenarios got
              built, which futures felt possible — those have never been
              examined.
            </p>
            <div className="aga-pullquote">
              <p>
                A habit became a norm. A workaround became a process. A
                preference became a direction. An untested assumption put on a
                blazer and started introducing itself as strategy.
              </p>
            </div>
            <p>
              The Assumption-Ground Audit is forensic work done before that
              happens. A structured examination of what an organization is
              assuming at the moment when there&rsquo;s still room to question it —
              before the scenarios are built, before the direction hardens,
              before the convergences arrive at the crossing point and the
              assumptions become expensive.
            </p>
            <p>
              The name is deliberate. <em>Ground</em> — as in the foundation
              beneath the argument. The part nobody examines because everyone
              is busy examining what&rsquo;s built on top of it.
            </p>
            <p>
              Most organizations are building toward the past. Optimizing for a
              world that is already disappearing. The AGA asks a different
              question: what are we actually building toward — and is the
              ground we&rsquo;re standing on real?
            </p>
          </div>
        </section>

        {/* ── INDEPENDENT RESEARCH ── */}
        <section className="aga-section">
          <span className="aga-section-label">Independent research</span>
          <div className="aga-prose">
            <p>
              Most research disciplines are constrained by their approved sources and approved languages. Academic researchers work within institutional archives. Analysts work within their sector. Journalists work within their beat. Each one is fluent in their domain &mdash; and that fluency is also a boundary. Not a personal failing. That&rsquo;s how disciplines work. The roles forming now &mdash; AI ethicists, workforce futurists, climate strategists &mdash; aren&rsquo;t new job titles. They&rsquo;re the beginning of an answer to a question most organizations haven&rsquo;t asked yet.
            </p>
            <p>
              The signal that connects a shift in workforce behavior to a trend in consumer culture to a finding in organizational psychology rarely lives inside a single discipline, and it rarely speaks a single language. It also rarely respects a border. Patterns forming in one regulatory environment are often the leading edge of what&rsquo;s arriving in another. What&rsquo;s already normalized in one market is still being debated in the next. That cross-border read isn&rsquo;t incidental to the work. It&rsquo;s structural. Based in Canada, with a cross-border Canada-US practice and an audience across 52 countries, the research draws from what&rsquo;s forming across jurisdictions, not just what&rsquo;s visible from inside one.
            </p>
            <p>
              Independent research means following the question across peer-reviewed literature, public filings, journalism, and the places where culture is moving before anyone has written the paper yet. It also means knowing how to weigh what you&rsquo;re reading: what each source can tell you, what it can&rsquo;t, which one is moving faster than the others, and which one is performing certainty it doesn&rsquo;t have.
            </p>
            <p>
              That last one is the trust question. It&rsquo;s the same discipline the Assumption-Ground Audit applies to organizational thinking: not just what you&rsquo;re assuming, but what that assumption has at stake in remaining unexamined. That cross-domain, cross-border fluency is what makes the AGA forensic rather than advisory. It finds the ground beneath the argument wherever that ground is &mdash; not just where the methodology says to look.
            </p>
          </div>
        </section>

        {/* ── WHY NOW ── */}
        <section className="aga-why-band">
          <div className="aga-why-inner">
            <span className="aga-section-label">Why now</span>
            <h2>The window is specific.</h2>
            <div className="aga-prose">
              <p>
                The organizations most at risk right now are not the ones moving
                too slowly. They&rsquo;re the ones moving quickly on assumptions they
                haven&rsquo;t examined — about AI, about workforce flexibility, about
                what their people will tolerate and what they won&rsquo;t.
              </p>
              <p>
                Convergences are accelerating. The crossing points are arriving
                faster. The window to examine assumptions before they become
                expensive is narrower than it has ever been.
              </p>
              <p>
                The window exists before the direction is chosen. After that,
                you&rsquo;re not auditing assumptions. You&rsquo;re managing consequences.
              </p>
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP CAPABILITY ── */}
        <section className="aga-section">
          <span className="aga-section-label">A leadership capability</span>
          <h2>Not a one-time project.</h2>
          <div className="aga-prose">
            <p>
              Most organizations treat assumption-examination as something you
              do before a big decision, then set aside. But convergences don&rsquo;t
              pause between decisions. The ground keeps shifting. New trends
              arrive before the last ones have been fully absorbed.
            </p>
            <p>
              The leaders who navigate this well aren&rsquo;t the ones with better
              forecasts. They&rsquo;re the ones who have developed the capacity to
              ask — continuously, before the direction hardens — what are we
              taking for granted that we haven&rsquo;t named yet?
            </p>
            <p>
              That&rsquo;s not a project. It&rsquo;s a leadership capability. And like any
              capability, it has to be built before you need it — not after the
              convergences have already made your assumptions expensive.
            </p>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="aga-section">
          <span className="aga-section-label">Who it&rsquo;s for</span>
          <h2>Senior leaders who sense something hasn&rsquo;t been named yet.</h2>
          <div className="aga-prose">
            <p>
              Not a vague discomfort — a specific moment: a decision coming, a
              direction hardening, a conversation that keeps not happening.
            </p>
          </div>
          <div className="aga-who-grid">
            {["CHROs", "VPs of Strategy", "C-suite leaders"].map((tag) => (
              <div className="aga-who-tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
          <div className="aga-prose" style={{ marginTop: "24px" }}>
            <p>
              Common triggers: an AI or technology decision on the horizon, a
              workforce restructuring under review, a return-to-office or
              flexibility policy that keeps getting deferred, or a leadership
              team that senses the current direction isn&rsquo;t quite right but
              can&rsquo;t name why.
            </p>
            <p>
              You don&rsquo;t need to know what the assumption is yet. That&rsquo;s what
              the audit finds.
            </p>
          </div>
          <div className="aga-mid-cta">
            <p className="aga-mid-cta-text">
              <strong>If a decision is coming, a direction is hardening,
              or a conversation keeps not happening</strong> — this is the
              moment the audit is designed for.
            </p>
            <a
              href="https://tidycal.com/nola/intro-consultation-nola-simon"
              className="aga-mid-cta-btn"
            >
              Book an Intro Consultation →
            </a>
          </div>
        </section>

        {/* ── WHAT IT IS NOT ── */}
        <section className="aga-section">
          <span className="aga-section-label">What it is not</span>
          <h2>The AGA works upstream of all of these.</h2>
          <ul className="aga-not-list">
            {notList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="aga-prose" style={{ marginTop: "28px" }}>
            <p>
              Once the assumptions have become direction, the work changes
              entirely. This is the stage before.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="aga-section">
          <span className="aga-section-label">How it works</span>
          <h2>A high-touch, structured investigation.</h2>
          <div className="aga-prose" style={{ marginBottom: "8px" }}>
            <p>
              Conducted directly with your leadership team. Typically 4–8
              weeks. I work with a small number of organizations at a time.
            </p>
          </div>
          <div className="aga-steps">
            {steps.map((step) => (
              <div className="aga-step" key={step.number}>
                <span className="aga-step-number">{step.number}</span>
                <span className="aga-step-label">{step.label}</span>
                <span className="aga-step-text">{step.text}</span>
              </div>
            ))}
          </div>
          <div className="aga-prose" style={{ marginTop: "36px" }}>
            <p>
              The output is not a report. It&rsquo;s clarity — about what questions
              to ask before you commit, what you&rsquo;re risking by not asking them,
              and where the ground is still moving.
            </p>
            <p>
              The clearest worked example of an AGA in practice is here:{" "}
              <Link href="/blog/pediculosis-and-change">
                The $30 Million Assumption Nobody Checked →
              </Link>
            </p>
          </div>
        </section>

        {/* ── WHAT COMES AFTER ── */}
        <section className="aga-dark-band">
          <div className="aga-dark-band-inner">
            <span className="aga-section-label" style={{ color: "var(--pink)" }}>
              What comes after the audit
            </span>
            <h2>For some, the audit is the engagement.</h2>
            <div className="aga-prose">
              <p>
                For some organizations, the audit is the engagement. You have
                what you need.
              </p>
              <p>
                For others, the harder work is what follows. Not
                implementation — unlearning. The assumptions the audit surfaces
                don&rsquo;t disappear because they&rsquo;ve been named. They reassert
                themselves under pressure, in meetings, in the stories the
                organization tells itself about what&rsquo;s realistic and what
                isn&rsquo;t.
              </p>
              <div className="aga-pullquote">
                <p>
                  What are we building toward? Not what has always been done.
                  Not what the industry expects. What future are we actively
                  constructing — with every decision, every assumption we leave
                  unexamined?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── RETAINED ── */}
        <section className="aga-retained-band">
          <div className="aga-retained-inner">
            <span className="aga-section-label">The retained relationship</span>
            <h2>Ongoing, collaborative, high-touch.</h2>
            <div className="aga-prose">
              <p>
                For organizations doing the harder work of unlearning, I work
                on a retained basis as a thinking partner and mentor —
                mentorship, role modelling, collaboration. Not to monitor the
                thinking from the outside, but to model a different way of
                doing it from the inside. Asking the futurist&rsquo;s question in
                every room. Over time, that capacity builds in the leadership
                team itself. That&rsquo;s the goal.
              </p>
              <p>
                It is not a monitoring or reporting function. The retained
                relationship begins with an AGA — because I need to understand
                how your leadership team thinks and decides before I can work
                alongside them effectively.
              </p>
            </div>
          </div>
        </section>

        {/* ── ETHICS ── */}
        <section className="aga-ethics">
          <div className="aga-ethics-inner">
            <span className="aga-section-label" style={{ color: "var(--pink)" }}>
              The ethics of the work
            </span>
            <div className="aga-pullquote">
              <p>
                I am the only person in the room whose value increases if the
                answer is &ldquo;not yet&rdquo; — or &ldquo;not this.&rdquo;
              </p>
            </div>
            <div className="aga-prose">
              <p>
                I don&rsquo;t make the decisions. I don&rsquo;t build the roadmap. I have
                no stake in the direction your organization chooses.
              </p>
              <p>
                What I do is work on what&rsquo;s in the way — the organizational
                design issues, the leadership dynamics, the mindset patterns
                that assumptions leave behind even after they&rsquo;ve been named.
                They implement. I role-model, surface the red flags, and ensure
                the path is clear.
              </p>
              <p>
                That&rsquo;s not a limitation of the engagement. That&rsquo;s the point
                of it.
              </p>
            </div>
          </div>
        </section>

        {/* ── GLOBAL ── */}
        <section className="aga-global-band">
          <div className="aga-global-inner">
            <span className="aga-section-label">The methodology travels</span>
            <h2>The questions don&rsquo;t stop at borders.</h2>
            <div className="aga-stats-row">
              <div className="aga-stat-card">
                <div className="aga-stat-number">52</div>
                <div className="aga-stat-label">Countries listening</div>
              </div>
              <div className="aga-stat-card">
                <div className="aga-stat-number">#2</div>
                <div className="aga-stat-label">Singapore market</div>
              </div>
            </div>
            <div className="aga-global-body">
              <p>
                Hope + Possibilities has listeners in 52 countries. Singapore
                consistently ranks as one of the top markets — nearly matching
                US downloads. Europe, the Middle East, Asia, Africa, and Latin
                America are all in the data.
              </p>
              <p>
                The episode that became the most listened-to — by far — on
                Mama, What&rsquo;s Next, a German-based podcast, was reaching an
                audience with its own distinct organizational culture and its
                own convergences forming. That wasn&rsquo;t a North American
                conversation landing in North America.
              </p>
              <p>
                The questions I&rsquo;m asking are not Canadian problems or North
                American ones. They are conditions of operating in a world
                where change doesn&rsquo;t wait for your geography to catch up. I am
                open to international engagements. The methodology travels.
              </p>
            </div>
          </div>
        </section>

        {/* ── ESSAYS ── */}
        <section className="aga-section">
          <span className="aga-section-label">The AGA in practice</span>
          <h2>Three positions. One discipline.</h2>
          <div className="aga-prose" style={{ marginBottom: "36px" }}>
            <p>
              An organizational assumption that cost $30 million before anyone
              checked it. A process designed to look like discovery while the
              answer was already decided. And the audit that&rsquo;s hardest to
              run — the one you do on yourself.
            </p>
          </div>
          <div className="aga-essays">
            {agaEssays.map((essay) => (
              <Link
                key={essay.href}
                href={essay.href}
                className="aga-essay-item"
              >
                <div>
                  <p className="aga-essay-title">{essay.title}</p>
                  <p className="aga-essay-desc">{essay.description}</p>
                </div>
                <span className="aga-essay-arrow">→</span>
              </Link>
            ))}
          </div>
          <div className="aga-prose" style={{ marginTop: "40px" }}>
            <p style={{ fontSize: "13px", color: "var(--muted)" }}>
              Further reading:{" "}
              {furtherReading.map((item, i) => (
                <span key={item.href}>
                  <Link href={item.href} className="aga-inline-link">
                    {item.title}
                  </Link>
                  {i < furtherReading.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="aga-section">
          <span className="aga-section-label">Frequently asked</span>
          <h2>Questions before the conversation.</h2>
          <div className="aga-faq">
            {faqs.map((faq) => (
              <div className="aga-faq-item" key={faq.q}>
                <p className="aga-faq-q">{faq.q}</p>
                <p className="aga-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="aga-cta-band">
          <div className="aga-cta-inner">
            <span className="aga-cta-eyebrow">Begin here</span>
            <h2>
              If you recognized your organization in this page, that
              recognition is data.
            </h2>
            <a
              href="https://tidycal.com/nola/intro-consultation-nola-simon"
              className="aga-cta-btn"
            >
              Book an Intro Consultation →
            </a>
            <p className="aga-cta-note" style={{ marginTop: "32px" }}>
              The intro consultation is a paid conversation ($500&nbsp;CAD).{" "}
              <strong>You will leave with clarity whether or not we work
              together.</strong> If you proceed to an AGA, the fee is
              credited in full.
            </p>
            <p className="aga-cta-note" style={{ marginTop: "12px" }}>
              <a href="/why" className="aga-inline-link">
                Why you. Why now. Why at all. →
              </a>
            </p>
            <p className="aga-cta-note">
              <strong>The AGA is a senior-level engagement priced
              accordingly.</strong> It is not a workshop or a half-day
              facilitation. Pricing is shared during the intro consultation.
              Engagements are priced by scope, not by hour.
            </p>
            <p className="aga-cta-sub">
              Enterprise &amp; mid-market · Scope-based pricing · International engagements welcome
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
