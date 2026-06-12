import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Everyday Futurism — The Practice of Naming What You're Already Observing | Nola Simon",
  description:
    "Everyday Futurism is the practice of naming what you're already observing before the ground you're standing on has a name. The methodology, the primitive, and the three-part architecture — developed by Nola Simon.",
  keywords: [
    "everyday futurism",
    "strategic foresight",
    "assumption-ground audit",
    "witnessed trust",
    "futurist",
    "future of work",
    "Nola Simon",
    "leadership advisory",
    "pre-adoption planning",
    "organizational assumptions",
    "practice not prediction",
  ],
  alternates: {
    canonical: "https://nolasimon.com/everyday-futurism",
  },
  openGraph: {
    type: "article",
    url: "https://nolasimon.com/everyday-futurism",
    title: "Everyday Futurism — Nola Simon",
    description:
      "The practice of naming what you're already observing — before the ground you're standing on has a name.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Everyday Futurism — Nola Simon",
    description:
      "The practice of naming what you're already observing — before the ground you're standing on has a name.",
    images: ["/opengraph-image"],
  },
};

const architecture = [
  {
    label: "Practice",
    name: "Everyday Futurism",
    body: "The orientation. Naming what you're already observing, before the story you've been told about it becomes the ground you're standing on.",
  },
  {
    label: "Discipline",
    name: "The Assumption-Ground Audit",
    body: "The practice done structurally. A forensic examination of what's being taken for granted — run on yourself, on a process, or on an organization. Scale-invariant. Three positions. One discipline.",
    href: "/aga",
    hrefLabel: "Learn more about the AGA",
  },
  {
    label: "Signal",
    name: "Witnessed Trust",
    body: "What accumulates when the practice is done in public, with your name attached. Content can be generated now. Credentials have lost their grip. Social proof can be gamed. What remains is the specific, lived, impossible-to-manufacture detail.",
    href: "/blog/who-gets-to-be-trusted-now",
    hrefLabel: "Read the Witnessed Trust series",
  },
];

const behaviors = [
  {
    title: "You pause before defaulting to comfort.",
    body: "A decision is arriving. You ask: does this move me toward where I actually want to be — or am I reacting to pressure in the room?",
  },
  {
    title: "You notice when a story about you has expired.",
    body: "Someone describes you — accurately, kindly — in terms that were true in a previous chapter. Your body knows before your language does.",
  },
  {
    title: "You read across domains.",
    body: "A pattern in the music industry shows you something about your workplace. A parenting decision turns into a career insight. You stop waiting for someone to hand you a trend report.",
  },
  {
    title: "You run small experiments before committing.",
    body: "Not a dramatic leap. You try something and feel how it lands — in your body, your work, your life. You inhabit the decision before you make it permanent.",
  },
  {
    title: "You have scenarios pre-prepared.",
    body: "Lawyers' names readied before the restructure arrives. A flexibility pilot in 2012, not 2020. The mandate read for what it actually is, before anyone in the room says the real drivers out loud.",
  },
  {
    title: "You name the mismatch out loud.",
    body: "Between what's being said and what you're observing. To yourself first, if that's all the audience you have. Then to one person. Then, sometimes, in public.",
  },
];

const examples = [
  {
    title: "Stability Has Always Been An Illusion",
    description:
      "Thirty years of disruption — the recession, 9/11, SARS, the blackout, the pandemic heard first as a word on a ship — and what they taught about the ground you're actually standing on. The origin story of the practice.",
    href: "/blog/stability-has-always-been-an-illusion",
  },
  {
    title: "Everyday Futurism: A Practice, Not a Prediction",
    description:
      "The foundational essay. Three decades of examined assumptions — the 2008 conversation that rearranged something, the 2012 flexibility pilot, the husband holding the expired map.",
    href: "/blog/everyday-futurism-a-practice-not-a-prediction",
  },
  {
    title: "The $30 Million Assumption Nobody Checked",
    description:
      "The AGA applied at organizational scale. One school board policy. One unexamined assumption. Eighteen months of upstream work. $30 million in recovered value — and counting.",
    href: "/blog/pediculosis-and-change",
  },
  {
    title: "The Most Dangerous Assumption in the Room",
    description:
      "The AGA run on yourself. The cement hauler, the courtroom without a lawyer, the certainty that turned out to be the assumption.",
    href: "/blog/the-most-dangerous-assumption-in-the-room",
  },
  {
    title: "Foregone Conclusions Gone Wrong",
    description:
      "The AGA applied to a process. The assessor who didn't look at me once. What happens when the procedure itself is the unexamined assumption.",
    href: "/blog/foregone-conclusions-gone-wrong",
  },
  {
    title: "What, Like It's Hard? Ben Affleck, Reese Witherspoon, and Who Gets to Be Trusted in the Age of AI",
    description:
      "Part 8 of the Witnessed Trust series. Same industry. Same crisis. Completely different receipts — and what the gap between them reveals about how trust actually works right now.",
    href: "/blog/ben-affleck-reese-witherspoon-trust-receipts",
  },
  {
    title: "Who Gets to Be Trusted Now?",
    description:
      "Part 1 of the Witnessed Trust series. How trust moved from local to institutional to distributed — and why distributed trust turned out to be partly manufactured.",
    href: "/blog/who-gets-to-be-trusted-now",
  },
  {
    title: "Witnessed Trust — A Case Study",
    description:
      "Part 2. What it looks like in practice when the specific, lived, impossible-to-manufacture detail does the work credentials used to do.",
    href: "/blog/witnessed-trust-case-study",
  },
  {
    title: "Not Just Another Futurist",
    description:
      "The positioning: historians explain, futurists predict, Everyday Futurism sits in the middle — watching what's already shifting before it has a name.",
    href: "/blog/not-just-another-futurist",
  },
];

const faqs = [
  {
    q: "What is Everyday Futurism?",
    a: "Everyday Futurism is the practice of naming what you're already observing before the ground you're standing on has a name. Developed by Nola Simon, a strategic futurist and advisor working at the pre-adoption stage. It is not a prediction system, a trend-forecasting method, or a course. It is a methodology — the discipline of noticing what's already shifting in your body, your organization, or the conditions around you, and naming the assumptions underneath before they harden into policy.",
  },
  {
    q: "What is the smallest unit of the practice?",
    a: "One question: \"What am I observing that nobody has said out loud yet?\" It is scale-invariant. It works on yourself, on a process, on an organization. It works in private, and it works in public. What changes is the audience and the stakes — not the move.",
  },
  {
    q: "How is Everyday Futurism different from traditional futurism?",
    a: "Traditional futurism predicts. It builds 10-year forecasts, data models, scenario plans, institutional authority. It says: trust me, I'll tell you what's coming. Everyday Futurism owns the opposite territory. It says: trust yourself, I'll show you how to see what's already here. Prediction is brittle — it only works if you're right. Practice builds something sturdier: not the ability to get the future correct, but the capacity to keep moving as it shifts.",
  },
  {
    q: "What's the relationship between Everyday Futurism and the Assumption-Ground Audit?",
    a: "Everyday Futurism is the practice. The Assumption-Ground Audit (AGA) is that practice done structurally — on yourself, on a process, or on an organization. The AGA is scale-invariant: it has been applied to a $30 million school-board policy assumption, to a personal insurance process where the outcome had already been decided, and to the most dangerous audit of all — the one you run on yourself. Three positions. One discipline.",
  },
  {
    q: "What is Witnessed Trust?",
    a: "Witnessed Trust is the trust that accumulates through irreducibly human particulars — the specific, lived, impossible-to-manufacture details that survive scrutiny because they couldn't have been generated by anyone who wasn't there. It's offered as a hypothesis about what comes next after local trust, institutional trust, and distributed trust. Content can be generated now. Credentials have lost their grip. Social proof can be gamed. What remains is Witnessed Trust. It is also the signal that accumulates when Everyday Futurism is practiced in public, with your name attached.",
  },
  {
    q: "Who is Everyday Futurism for — individuals or organizations?",
    a: "Both. The practice is the same at either scale. Individuals use it to navigate their own lives, careers, and relationships. Organizations use it — structured as the Assumption-Ground Audit — to examine assumptions before they harden into direction. The practice is personal first because all practice is personal first. It scales because leadership teams are doing the same thing individuals do: holding a map that used to be accurate, describing the institution in terms that have expired, with people inside it feeling the mismatch before anyone names it.",
  },
  {
    q: "Is this a course, a framework, or a methodology?",
    a: "A methodology. Not a course, not a curriculum, not a certification. The practice is delivered through exposure and role modeling — you learn it by watching it happen. For senior leaders inside organizations, the formal entry point is the Assumption-Ground Audit. For individuals, the entry point is the writing — the essays, the podcast, the newsletter.",
  },
  {
    q: "How do I start practicing?",
    a: "Start with the question. In the next meeting, the next conversation, the next decision arriving at you: ask what you're observing that nobody has said out loud yet. Name it — to yourself, if that's all the audience you have. The rest follows.",
  },
  {
    q: "Who developed Everyday Futurism?",
    a: "Everyday Futurism was developed by Nola Simon — strategic futurist, advisor, and host of Hope + Possibilities: A Love Letter to the Future of Work. She spent 20+ years across five complex organizations before building the methodology from the record of her own examined assumptions — including a 2012 workplace flexibility pilot that wouldn't become mainstream for another decade.",
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

const definedTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://nolasimon.com/everyday-futurism#term",
  name: "Everyday Futurism",
  description:
    "The practice of naming what you're already observing before the ground you're standing on has a name. A methodology developed by Nola Simon comprising three elements: the practice (Everyday Futurism), the discipline (the Assumption-Ground Audit), and the signal (Witnessed Trust).",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Everyday Futurism Glossary",
    url: "https://nolasimon.com/everyday-futurism",
  },
  url: "https://nolasimon.com/everyday-futurism",
  subjectOf: {
    "@type": "Article",
    author: {
      "@type": "Person",
      name: "Nola Simon",
      url: "https://nolasimon.com/about",
    },
  },
};

const witnessedTrustTermSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://nolasimon.com/everyday-futurism#witnessed-trust",
  name: "Witnessed Trust",
  description:
    "The trust that accumulates through irreducibly human particulars — the specific, lived, impossible-to-manufacture details that survive scrutiny because they couldn't have been generated by anyone who wasn't there. Offered as a hypothesis about what comes next after local trust, institutional trust, and distributed trust. The signal that accumulates when Everyday Futurism is practiced in public, with your name attached. Part of the Everyday Futurism methodology developed by Nola Simon.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "Everyday Futurism Glossary",
    url: "https://nolasimon.com/everyday-futurism",
  },
  url: "https://nolasimon.com/everyday-futurism",
};

export default function EverydayFuturismPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(witnessedTrustTermSchema),
        }}
      />

      <main className="ef-page">
        <style>{`
          .ef-page {
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

          .ef-hero {
            background: var(--dark);
            padding: 96px 0 80px;
            position: relative;
            overflow: hidden;
          }
          .ef-hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(236,65,151,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236,65,151,0.05) 1px, transparent 1px);
            background-size: 48px 48px;
          }
          .ef-hero-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
            position: relative;
            z-index: 1;
          }
          .ef-eyebrow {
            font-family: var(--mono);
            font-size: 10px;
            font-weight: 400;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--pink);
            margin-bottom: 24px;
            display: block;
          }
          .ef-hero h1 {
            font-family: var(--sans);
            font-size: clamp(36px, 6vw, 64px);
            font-weight: 800;
            line-height: 1.08;
            color: #f0f0f0;
            letter-spacing: -0.03em;
            margin: 0 0 24px;
          }
          .ef-hero-kicker {
            font-size: 15px;
            font-weight: 500;
            color: rgba(240,240,240,0.55);
            margin: 0 0 20px;
            line-height: 1.5;
            letter-spacing: 0.01em;
          }
          .ef-hero-sub {
            font-size: 19px;
            font-weight: 400;
            line-height: 1.65;
            color: #bbb;
            max-width: 620px;
            margin: 0 0 36px;
          }
          .ef-hero-primitive {
            border-left: 3px solid var(--pink);
            padding: 4px 0 4px 20px;
            margin: 0 0 40px;
          }
          .ef-hero-primitive p {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.5;
            color: #f0f0f0;
            margin: 0 0 6px;
          }
          .ef-hero-primitive span {
            font-family: var(--mono);
            font-size: 10px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: rgba(240,240,240,0.4);
          }
          .ef-hero-cta {
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
          .ef-hero-cta:hover { opacity: 0.88; }

          .ef-section {
            max-width: 800px;
            margin: 0 auto;
            padding: 72px 32px;
            border-bottom: 1px solid #f0f0f0;
          }
          .ef-section:last-of-type { border-bottom: none; }
          .ef-section-label {
            font-family: var(--mono);
            font-size: 9px;
            font-weight: 400;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--pink);
            margin-bottom: 16px;
            display: block;
          }
          .ef-section h2 {
            font-family: var(--sans);
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 700;
            line-height: 1.25;
            color: var(--dark);
            letter-spacing: -0.02em;
            margin: 0 0 28px;
          }
          .ef-prose p {
            font-size: 17px;
            line-height: 1.8;
            color: #333;
            margin: 0 0 20px;
          }
          .ef-prose p:last-child { margin-bottom: 0; }
          .ef-prose em { font-style: italic; color: var(--dark); }
          .ef-prose a {
            color: var(--pink);
            text-decoration: none;
            border-bottom: 1px solid rgba(236,65,151,0.3);
            transition: border-color 0.15s;
          }
          .ef-prose a:hover { border-color: var(--pink); }
          .ef-pullquote {
            border-left: 3px solid var(--pink);
            padding: 4px 0 4px 24px;
            margin: 36px 0;
          }
          .ef-pullquote p {
            font-family: var(--sans);
            font-size: 22px;
            font-weight: 600;
            line-height: 1.45;
            color: var(--dark);
            margin: 0;
            letter-spacing: -0.01em;
          }

          /* Architecture cards */
          .ef-arch-band {
            background: var(--light-bg);
            padding: 72px 0;
          }
          .ef-arch-inner {
            max-width: 880px;
            margin: 0 auto;
            padding: 0 32px;
          }
          .ef-arch-inner h2 {
            font-family: var(--sans);
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 700;
            color: var(--dark);
            letter-spacing: -0.02em;
            margin: 0 0 12px;
            line-height: 1.25;
          }
          .ef-arch-intro {
            font-size: 17px;
            line-height: 1.75;
            color: #444;
            margin: 0 0 40px;
            max-width: 680px;
          }
          .ef-arch-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          @media (max-width: 820px) {
            .ef-arch-grid { grid-template-columns: 1fr; }
          }
          .ef-arch-card {
            background: #fff;
            border: 1px solid #e8e3de;
            border-top: 3px solid var(--pink);
            border-radius: 4px;
            padding: 28px 24px;
            display: flex;
            flex-direction: column;
          }
          .ef-arch-label {
            font-family: var(--mono);
            font-size: 9px;
            font-weight: 400;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: var(--pink);
            margin-bottom: 12px;
          }
          .ef-arch-name {
            font-family: var(--sans);
            font-size: 20px;
            font-weight: 700;
            color: var(--dark);
            margin: 0 0 14px;
            line-height: 1.25;
            letter-spacing: -0.01em;
          }
          .ef-arch-body {
            font-size: 15px;
            line-height: 1.7;
            color: #444;
            margin: 0 0 18px;
            flex-grow: 1;
          }
          .ef-arch-link {
            font-family: var(--sans);
            font-size: 13px;
            font-weight: 600;
            color: var(--pink);
            text-decoration: none;
            letter-spacing: 0.01em;
            align-self: flex-start;
            border-bottom: 1px solid rgba(236,65,151,0.3);
            transition: border-color 0.15s;
          }
          .ef-arch-link:hover { border-color: var(--pink); }

          /* Behaviors */
          .ef-behaviors {
            display: flex;
            flex-direction: column;
            gap: 0;
            margin-top: 8px;
            border-top: 1px solid #ebebeb;
          }
          .ef-behavior {
            padding: 24px 0;
            border-bottom: 1px solid #ebebeb;
          }
          .ef-behavior-title {
            font-family: var(--sans);
            font-size: 17px;
            font-weight: 700;
            color: var(--dark);
            margin: 0 0 8px;
            line-height: 1.4;
          }
          .ef-behavior-body {
            font-size: 15px;
            line-height: 1.7;
            color: #555;
            margin: 0;
          }

          /* Dark band */
          .ef-dark-band {
            background: var(--dark);
            padding: 72px 0;
            position: relative;
            overflow: hidden;
          }
          .ef-dark-band::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(236,65,151,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236,65,151,0.04) 1px, transparent 1px);
            background-size: 48px 48px;
          }
          .ef-dark-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
            position: relative;
            z-index: 1;
          }
          .ef-dark-inner h2 {
            font-family: var(--sans);
            font-size: clamp(22px, 3vw, 30px);
            font-weight: 700;
            color: #f0f0f0;
            letter-spacing: -0.02em;
            margin: 0 0 28px;
            line-height: 1.25;
          }
          .ef-dark-inner .ef-prose p { color: #bbb; }
          .ef-dark-inner .ef-pullquote { border-left-color: var(--pink); }
          .ef-dark-inner .ef-pullquote p { color: #f0f0f0; }

          /* Examples */
          .ef-examples {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .ef-example {
            border-bottom: 1px solid #ebebeb;
            padding: 28px 0;
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 24px;
            align-items: start;
            text-decoration: none;
            transition: background 0.15s;
          }
          .ef-example:first-child { padding-top: 0; }
          .ef-example:hover .ef-example-title { color: var(--pink); }
          .ef-example-title {
            font-family: var(--sans);
            font-size: 16px;
            font-weight: 700;
            color: var(--dark);
            margin: 0 0 8px;
            line-height: 1.35;
            transition: color 0.15s;
          }
          .ef-example-desc {
            font-size: 14px;
            line-height: 1.65;
            color: #777;
            margin: 0;
          }
          .ef-example-arrow {
            font-family: var(--mono);
            font-size: 14px;
            color: var(--pink);
            flex-shrink: 0;
            margin-top: 2px;
          }

          /* FAQ */
          .ef-faq {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .ef-faq-item {
            border-bottom: 1px solid #ebebeb;
            padding: 28px 0;
          }
          .ef-faq-item:first-child { padding-top: 0; }
          .ef-faq-q {
            font-family: var(--sans);
            font-size: 16px;
            font-weight: 700;
            color: var(--dark);
            margin: 0 0 12px;
            line-height: 1.4;
          }
          .ef-faq-a {
            font-size: 15px;
            line-height: 1.75;
            color: #555;
            margin: 0;
          }

          /* CTA */
          .ef-cta-band {
            background: var(--pink);
            padding: 80px 0;
          }
          .ef-cta-inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 32px;
          }
          .ef-cta-eyebrow {
            font-family: var(--mono);
            font-size: 9px;
            font-weight: 400;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.6);
            margin-bottom: 20px;
            display: block;
          }
          .ef-cta-band h2 {
            font-family: var(--sans);
            font-size: clamp(24px, 4vw, 36px);
            font-weight: 800;
            color: #fff;
            letter-spacing: -0.025em;
            line-height: 1.25;
            margin: 0 0 24px;
          }
          .ef-cta-note {
            font-size: 16px;
            line-height: 1.75;
            color: rgba(255,255,255,0.85);
            margin: 0 0 14px;
            max-width: 620px;
          }
          .ef-cta-note strong { color: #fff; font-weight: 600; }
          .ef-cta-btn-row {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 28px;
          }
          .ef-cta-btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #fff;
            color: var(--pink);
            font-family: var(--sans);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.04em;
            padding: 14px 28px;
            border-radius: 2px;
            text-decoration: none;
            transition: opacity 0.15s;
          }
          .ef-cta-btn-primary:hover { opacity: 0.9; }
          .ef-cta-btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: transparent;
            color: #fff;
            font-family: var(--sans);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.04em;
            padding: 14px 28px;
            border-radius: 2px;
            border: 1.5px solid rgba(255,255,255,0.5);
            text-decoration: none;
            transition: border-color 0.15s, background 0.15s;
          }
          .ef-cta-btn-secondary:hover {
            border-color: #fff;
            background: rgba(255,255,255,0.08);
          }
        `}</style>

        {/* HERO */}
        <section className="ef-hero">
          <div className="ef-hero-inner">
            <span className="ef-eyebrow">Methodology · The Framework</span>
            <p className="ef-hero-kicker">The future isn&rsquo;t predicted. It&rsquo;s practiced.</p>
            <h1>Everyday Futurism</h1>
            <p className="ef-hero-sub">
              The practice of naming what you&rsquo;re already observing — before
              the ground you&rsquo;re standing on has a name.
            </p>
            <div className="ef-hero-primitive">
              <span>The primitive</span>
              <p>&ldquo;What am I observing that nobody has said out loud yet?&rdquo;</p>
            </div>
            <a
              href="https://tidycal.com/nola/intro-consultation-nola-simon"
              className="ef-hero-cta"
            >
              Book an Intro Consultation →
            </a>
          </div>
        </section>

        {/* WHAT IT IS */}
        <section className="ef-section">
          <span className="ef-section-label">What it is</span>
          <div className="ef-prose">
            <p>
              Everyday Futurism is a practice, not a prediction system. It is
              the discipline of noticing what&rsquo;s already shifting — in your
              body, in your organization, in the conditions around you — and
              naming it before the assumption underneath becomes the ground
              you&rsquo;re standing on.
            </p>
            <p>
              Historians explain what already happened. Traditional futurists
              project what&rsquo;s next. Everyday Futurism sits in the middle —
              watching what&rsquo;s shifting right now, before it has a name, and
              building the capacity to keep moving as it shifts.
            </p>
            <div className="ef-pullquote">
              <p>
                Prediction is brittle. It only works if you&rsquo;re right. Practice
                builds something sturdier — not the ability to get the future
                correct, but the capacity to keep moving as it shifts, because
                you&rsquo;ve been doing it long enough to trust your own instrument.
              </p>
            </div>
            <p>
              It was developed by{" "}
              <Link href="/about">Nola Simon</Link> — strategic futurist and
              advisor — from the record of her own examined assumptions. The
              2012 workplace flexibility pilot that wouldn&rsquo;t become mainstream
              for another decade. The employment lawyers&rsquo; names readied
              before the restructure arrived. The husband who held a map of
              her life that had already expired. The practice is not
              theoretical. It is the method she used on herself before she
              offered it to organizations.
            </p>
          </div>
        </section>

        {/* THE SMALLEST UNIT */}
        <section className="ef-section">
          <span className="ef-section-label">The smallest unit of the practice</span>
          <h2>One question. Scale-invariant.</h2>
          <div className="ef-prose">
            <p>
              Every practice has a primitive — the smallest reproducible move
              from which everything else unfolds. For David Allen, it is
              <em> capture, clarify, organize.</em> For Marie Kondo, <em>does it
              spark joy?</em> For Rachel Botsman, <em>trust is a confident
              relationship with the unknown.</em>
            </p>
            <div className="ef-pullquote">
              <p>&ldquo;What am I observing that nobody has said out loud yet?&rdquo;</p>
            </div>
            <p>
              Ask it of a meeting. A headline. A story someone is telling
              about you. An organization you&rsquo;re inside. Your own body when
              it goes tight in a conversation you can&rsquo;t yet name. A decision
              arriving in language that doesn&rsquo;t quite fit what you actually
              see.
            </p>
            <p>
              The move is scale-invariant. It works on yourself, on a process,
              on an organization. It works in private, and it works in
              public. What changes is the audience and the stakes — not the
              move.
            </p>
            <p>
              Naming it is the practice. The rest follows.
            </p>
          </div>
        </section>

        {/* THREE-PART ARCHITECTURE */}
        <section className="ef-arch-band">
          <div className="ef-arch-inner">
            <span className="ef-section-label">The three-part architecture</span>
            <h2>Practice. Discipline. Signal.</h2>
            <p className="ef-arch-intro">
              Everyday Futurism is one methodology with three elements. The
              practice is the move. The discipline is the move done
              structurally. The signal is what accumulates when the move is
              done in public, with a name attached.
            </p>
            <div className="ef-arch-grid">
              {architecture.map((el) => (
                <div className="ef-arch-card" key={el.name}>
                  <span className="ef-arch-label">{el.label}</span>
                  <h3 className="ef-arch-name">{el.name}</h3>
                  <p className="ef-arch-body">{el.body}</p>
                  {el.href ? (
                    <Link href={el.href} className="ef-arch-link">
                      {el.hrefLabel} →
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT THE PRACTICE LOOKS LIKE */}
        <section className="ef-section">
          <span className="ef-section-label">What the practice looks like</span>
          <h2>Not what you think about. What you do differently.</h2>
          <div className="ef-prose" style={{ marginBottom: "8px" }}>
            <p>
              The practice is observable. These are the moves you make the
              next time a decision arrives at you.
            </p>
          </div>
          <div className="ef-behaviors">
            {behaviors.map((b) => (
              <div className="ef-behavior" key={b.title}>
                <p className="ef-behavior-title">{b.title}</p>
                <p className="ef-behavior-body">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="ef-dark-band">
          <div className="ef-dark-inner">
            <span className="ef-section-label" style={{ color: "var(--pink)" }}>
              Who it&rsquo;s for
            </span>
            <h2>Two scales. One practice.</h2>
            <div className="ef-prose">
              <p>
                <strong style={{ color: "#f0f0f0" }}>Individuals</strong> who
                sense the ground is moving but feel paralyzed by noise,
                distrust, and the false safety of staying put. They&rsquo;re smart
                enough to know things are changing. They just haven&rsquo;t trusted
                themselves to act on what they already see.
              </p>
              <p>
                <strong style={{ color: "#f0f0f0" }}>Senior leaders</strong>{" "}
                inside complex organizations where assumptions have hardened
                into invisible policy. CHROs, VPs of Strategy, C-suite leaders —
                sensing a decision coming, a direction hardening, or a
                conversation that keeps not happening.
              </p>
              <div className="ef-pullquote">
                <p>
                  Leadership teams do what individuals do: hold a map that
                  used to be accurate, describe the institution in terms that
                  have expired, and lose trust with the people inside it who
                  can feel the mismatch before anyone names it.
                </p>
              </div>
              <p>
                The practice is the same. The structure is the same. What
                changes is the scale and the stakes. For organizations, the
                formal entry point is{" "}
                <Link href="/aga">the Assumption-Ground Audit</Link>. For
                individuals, the entry point is the writing.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IT PRODUCES */}
        <section className="ef-section">
          <span className="ef-section-label">What it produces</span>
          <h2>Not certainty. Something sturdier.</h2>
          <div className="ef-prose">
            <p>
              Self-trust — the ability to navigate the future without waiting
              for someone to hand you a map. The capacity to begin again,
              without treating the beginning as evidence that the whole
              approach was wrong.
            </p>
            <p>
              At organizational scale: upstream catch of expensive
              assumptions. A $30 million school-board decision made on an
              unexamined lice policy. An RTO mandate held past its expiry
              while the real drivers — commercial real estate, AI adoption,
              proximity bias — went unnamed in the room.
            </p>
            <p>
              At individual scale: witnessed trust. Credibility built on
              specifics that can&rsquo;t be manufactured. The detail rooted in
              lived experience. The willingness to name what you see, with
              your name attached.
            </p>
            <div className="ef-pullquote">
              <p>You don&rsquo;t get certainty. You get better at not needing it.</p>
            </div>
          </div>
        </section>

        {/* WORKED EXAMPLES */}
        <section className="ef-section">
          <span className="ef-section-label">The practice in the record</span>
          <h2>Where to see it in action.</h2>
          <div className="ef-prose" style={{ marginBottom: "36px" }}>
            <p>
              The practice is documented across seven essays — personal,
              organizational, and public. Start wherever the scale matches
              what you&rsquo;re working on now.
            </p>
          </div>
          <div className="ef-examples">
            {examples.map((ex) => (
              <Link key={ex.href} href={ex.href} className="ef-example">
                <div>
                  <p className="ef-example-title">{ex.title}</p>
                  <p className="ef-example-desc">{ex.description}</p>
                </div>
                <span className="ef-example-arrow">→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="ef-section">
          <span className="ef-section-label">Frequently asked</span>
          <h2>The framework, answered directly.</h2>
          <div className="ef-faq">
            {faqs.map((faq) => (
              <div className="ef-faq-item" key={faq.q}>
                <p className="ef-faq-q">{faq.q}</p>
                <p className="ef-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="ef-cta-band">
          <div className="ef-cta-inner">
            <span className="ef-cta-eyebrow">Where to begin</span>
            <h2>
              If you recognized yourself — or your organization — on this
              page, that recognition is the first move.
            </h2>
            <p className="ef-cta-note">
              <strong>For senior leaders</strong> where a decision is coming,
              a direction is hardening, or a conversation keeps not
              happening — the Assumption-Ground Audit is where the work
              begins.
            </p>
            <p className="ef-cta-note">
              <strong>For individuals</strong> practicing at a different
              scale — start with the writing. The foundational essay. The
              Witnessed Trust series. The newsletter.
            </p>
            <div className="ef-cta-btn-row">
              <a
                href="https://tidycal.com/nola/intro-consultation-nola-simon"
                className="ef-cta-btn-primary"
              >
                Book an Intro Consultation →
              </a>
              <Link
                href="/blog/everyday-futurism-a-practice-not-a-prediction"
                className="ef-cta-btn-secondary"
              >
                Read the foundational essay →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
