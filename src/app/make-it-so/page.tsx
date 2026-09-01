import type { Metadata } from "next";
import MakeItSoFaq from "./MakeItSoFaq";

export const metadata: Metadata = {
  title: "Make It So — An 8-Week Seminar for Leaders | Nola Simon",
  description:
    "Make It So is an 8-week seminar that builds a futurism practice underneath the instincts you already have. September 2026 cohort, capped at 20. Built on the Assumption-Ground Audit.",
  keywords: [
    "make it so",
    "futurism seminar",
    "leadership program",
    "assumption-ground audit",
    "everyday futurism",
    "strategic foresight",
    "leadership cohort",
    "Nola Simon",
  ],
  alternates: {
    canonical: "https://nolasimon.com/make-it-so",
  },
  openGraph: {
    type: "website",
    url: "https://nolasimon.com/make-it-so",
    title: "Make It So — An 8-Week Seminar for Leaders",
    description:
      "Futurism doesn't require a crystal ball — it requires a practice. September 2026 cohort, capped at 20.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Make It So — An 8-Week Seminar for Leaders",
    description:
      "Futurism doesn't require a crystal ball — it requires a practice. September 2026 cohort, capped at 20.",
    images: ["/opengraph-image"],
  },
};

const WAITLIST_MAILTO =
  "mailto:nola@everydayfuturism.ca?subject=Make%20It%20So%20%E2%80%94%20Waitlist";
const PROGRAM_STRIPE = "https://buy.stripe.com/3cI14oaHq9UYcyr5rQenS06";
const OFFICE_HOURS_STRIPE = "https://buy.stripe.com/00w7sMeXG5EI9mf2fEenS07";
const APPLY_MAILTO =
  "mailto:nola@everydayfuturism.ca?subject=Make%20It%20So%20%E2%80%94%201%3A1%20Tier%20Application";

const forYou = [
  "You lead — by title or by practice — and you take that seriously regardless of what your org chart says",
  "You've been ahead of something before it was obvious, but you don't have a reliable system for doing that consistently",
  "You're navigating constant change and you want better infrastructure for your instincts, not just more information",
  "You want to connect with other people who think this way — and you're far enough from a major centre that those people are hard to find in person",
  "You want a practice you can actually implement — not a course you'll complete and shelve",
  "You're a solopreneur or small business owner making high-stakes directional decisions without a strategy team — and you feel the weight of getting those calls right",
];

const syllabus = [
  {
    act: "Act I — Operating Differently",
    sessions: [
      {
        num: "01",
        title: "Identity",
        desc: "Who are you as a leader, and what assumptions are load-bearing in that identity? We start here because the lens shapes everything you'll see in the weeks that follow.",
      },
      {
        num: "02",
        title: "Trust",
        desc: "Who and what do you trust to tell you what's real? Your trust architecture determines which signals you allow yourself to receive — and which ones you filter out before they reach you.",
      },
    ],
  },
  {
    act: "Act II — Noticing",
    sessions: [
      {
        num: "03",
        title: "Signals",
        desc: "What counts as a signal and what's just noise? How to develop a reliable scanning practice that works with how you actually think and move through the world.",
      },
      {
        num: "04",
        title: "Sensemaking",
        desc: "The gap between what you observe and what it means. How to sit with ambiguity long enough to build a real model rather than defaulting to the nearest familiar explanation.",
      },
      {
        num: "05",
        title: "Reflective Practice",
        desc: "The program doesn't move to meaning-making before you've had time to actually notice. This week belongs to you and your context — bring what you've been observing since week one into a structured reflection. What signals have you been receiving? What assumptions have you been working around? This is where the thinking becomes personal.",
      },
    ],
  },
  {
    act: "Act III — Making Meaning",
    sessions: [
      {
        num: "06",
        title: "Storytelling & Scenarios",
        desc: "How you narrate the future — to yourself and to others — determines what becomes possible. Scenario thinking as a leadership tool, not just a planning exercise.",
      },
      {
        num: "07",
        title: "Language, Hierarchy & Relationships",
        desc: "The assumptions that are hardest to examine are the ones built into the language your organization uses and the hierarchy that decides whose observations get named. Power shapes what gets seen.",
      },
    ],
  },
  {
    act: "Act IV — Embedding",
    sessions: [
      {
        num: "08",
        title: "The Practice",
        desc: "The practice isn't a system you set up — it's a way of being. How you notice. How you think. How you move through ambiguity before anyone else has named what's happening. This session is about embedding that orientation into your daily life. Technology can support it, but it's never the goal. You leave not with a configured tool stack but with something that has already shifted in how you see.",
      },
    ],
  },
];

const tiers = [
  {
    name: "Program",
    price: "1,600",
    desc: "The 8-week seminar itself. This is the practice — audit and discussion, at the cohort's rhythm.",
    includes: [
      "The Telegram cohort — Nola responds to your thinking specifically, in real time",
      "All program content across the four acts",
      "Two live Google Meet sessions — recorded, rotating time zones",
    ],
    cta: { label: "Enroll now", href: PROGRAM_STRIPE, primary: false },
  },
  {
    name: "Program + Office Hours",
    price: "2,400",
    badge: "Think out loud",
    desc: "Everything in Program, plus standing access to weekly live office hours across the 8 weeks. What this tier buys is real-time back-and-forth — the chance to be pushed on your thinking while you're still working something out, not after you've already written it up async. If you know you think better out loud, in front of other people, this is the tier.",
    includes: [
      "Everything in Program",
      "Weekly live office hours, all 8 weeks",
      "Real-time pushback while the thinking is still forming",
    ],
    cta: { label: "Enroll now", href: OFFICE_HOURS_STRIPE, primary: true },
  },
  {
    name: "Program + 1:1",
    price: "3,200",
    badge: "By application",
    desc: "Everything above, plus two private 30-minute sessions with Nola over Telegram — the Assumption-Ground Audit run directly on your specific context, not a composite. By application. Not gatekeeping for its own sake: this tier only works if the situation it's applied to is actually the right kind of situation, and that's worth a short conversation before committing.",
    includes: [
      "Everything in Program + Office Hours",
      "Two private 30-minute 1:1 sessions with Nola",
      "The AGA run on your real situation — before it hardens into a commitment",
    ],
    cta: { label: "Apply for the 1:1 tier", href: APPLY_MAILTO, primary: false },
  },
];

const faqs = [
  {
    q: "Who is Make It So for?",
    a: "Leaders — by title or by practice. If you're accountable for outcomes, you influence direction, and you're the person others come to when things are ambiguous, you qualify. C-suite and senior leaders are the natural home for this work, but so are solopreneurs and small business owners — people making consequential directional decisions without a strategy team or institutional buffer to catch a bad assumption before it becomes a bad bet. The deciding factor is how you think, not what your business card says. One honest note: participants who get the most from this work tend to be open, self-aware, and genuinely willing to examine what they've been treating as settled. That's not a prerequisite — it's a predictor. If that describes you, you'll go further faster.",
  },
  {
    q: "Do I need a background in futurism or foresight?",
    a: "No. The program is designed for leaders who are curious about how futurism applies to their actual work — not people who already have a foresight practice. If you're starting from scratch, you're exactly who this is for.",
  },
  {
    q: "How much time does this take per week?",
    a: "Roughly 2-3 hours per week. Most of that happens in Telegram — Nola leads thinking, shares models in progress, and opens threads the cohort takes somewhere. You engage on your own schedule. The two live Google Meet sessions are 90 minutes each, recorded for any time zone that can't make it live.",
  },
  {
    q: "What's the difference between the three tiers?",
    a: "Program ($1,600 CAD) is the full seminar: the Telegram cohort, all four acts, and two live recorded sessions. Program + Office Hours ($2,400 CAD) adds standing weekly live office hours — real-time back-and-forth while you're still working something out. Program + 1:1 ($3,200 CAD) adds two private 30-minute sessions where the Assumption-Ground Audit gets run directly on your specific situation. The 1:1 tier is by application — a short conversation first, because it only works if the situation is the right kind of situation. All twenty seats sit across the three tiers combined, all at the founding cohort rate.",
  },
  {
    q: "What does my practice actually look like at the end?",
    a: "The practice is a way of being — how you notice, how you make meaning, how you move through ambiguity before anyone else has named what's happening. Nothing gets installed. You build it by doing it for eight weeks, and technology can support it — some people journal, some use voice notes, some track in a spreadsheet — but the tools are beside the point. By week 8, something has shifted in how you orient to the world. The practice is running because you've been doing it.",
  },
  {
    q: "How much direct access do I get to Nola?",
    a: "Every tier includes the Telegram cohort, where Nola responds to your thinking specifically, plus two live group sessions with time for questions. The Program + Office Hours tier adds weekly live office hours across the 8 weeks. The Program + 1:1 tier adds two private 30-minute sessions over Telegram — the Assumption-Ground Audit run on your real context, your real constraints, your actual organization.",
  },
  {
    q: "What's the refund policy?",
    a: "You're enrolling in a first cohort — without the track record of people who've been through this before you. That's a real bet, and it deserves a straight answer. All sales are final. The practical reason: spots in a capped cohort of 20 are committed the moment you take one. The more honest reason: the value of this program isn't in materials you receive — it's in the work you do. The assumptions you surface, the signals you start to notice, the practice you build — those belong to you from the moment you start. That's not something that can be returned. If your circumstances shift, your registration is transferable — message Nola directly to arrange it.",
  },
  {
    q: "Where is this program based? Can I join from outside North America?",
    a: "Yes — and the program is built for it. Participants can join from anywhere. Nola's existing audience spans Singapore, the UK, Germany, Australia, and across North America — so if you've found this work through the podcast or LinkedIn, you're already in good company. Async-first format means time zones don't gate your access. All prices are in CAD. US pricing is available upon request — and if currency is a barrier, message Nola directly. Please note: all program content, discussion, and sessions are conducted in English only.",
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

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Make It So",
  description:
    "An 8-week seminar for leaders that builds a futurism practice underneath the instincts you already have, built on the Assumption-Ground Audit. September 2026 cohort, capped at 20.",
  provider: {
    "@type": "Person",
    name: "Nola Simon",
    url: "https://nolasimon.com",
  },
  url: "https://nolasimon.com/make-it-so",
  offers: [1600, 2400, 3200].map((price) => ({
    "@type": "Offer",
    price,
    priceCurrency: "CAD",
    availability: "https://schema.org/PreOrder",
  })),
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    startDate: "2026-09",
    courseWorkload: "PT3H",
  },
};

export default function MakeItSoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      <main className="mis-page">
        <style>{`
          .mis-page {
            --pink: #ec4197;
            --bg: #0a0a0f;
            --bg-2: #111118;
            --bg-3: #1a1a24;
            --text: #f0eef8;
            --muted: #9b98b0;
            --border: rgba(236, 65, 151, 0.15);
            --border-subtle: rgba(240, 238, 248, 0.08);
            --mono: 'JetBrains Mono', monospace;
            --sans: 'Plus Jakarta Sans', sans-serif;
            font-family: var(--sans);
            font-size: 17px;
            line-height: 1.7;
            background: var(--bg);
            color: var(--text);
            position: relative;
          }
          .mis-page::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image:
              linear-gradient(rgba(236,65,151,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236,65,151,0.03) 1px, transparent 1px);
            background-size: 60px 60px;
            pointer-events: none;
          }
          .mis-container {
            max-width: 760px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
            z-index: 1;
          }
          .mis-hero { padding: 100px 0 80px; }
          .mis-eyebrow {
            font-family: var(--mono);
            font-size: 12px;
            font-weight: 500;
            color: var(--pink);
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-bottom: 28px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .mis-eyebrow::before {
            content: '';
            display: block;
            width: 32px;
            height: 1px;
            background: var(--pink);
          }
          .mis-page h1 {
            font-size: clamp(52px, 10vw, 88px);
            font-weight: 800;
            line-height: 0.95;
            letter-spacing: -0.03em;
            margin: 0 0 32px;
            color: var(--text);
          }
          .mis-pink { color: var(--pink); }
          .mis-hero-sub {
            font-size: 20px;
            color: var(--muted);
            max-width: 560px;
            line-height: 1.6;
            margin-bottom: 40px;
          }
          .mis-hero-sub strong { color: var(--text); font-weight: 600; }
          .mis-deadline {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: rgba(236, 65, 151, 0.08);
            border: 1px solid var(--border);
            padding: 14px 20px;
            margin-bottom: 40px;
          }
          .mis-deadline-dot {
            width: 8px;
            height: 8px;
            background: var(--pink);
            border-radius: 50%;
            animation: misPulse 1.5s ease-in-out infinite;
          }
          @keyframes misPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
          }
          .mis-deadline-text {
            font-family: var(--mono);
            font-size: 13px;
            font-weight: 500;
            color: var(--text);
            letter-spacing: 0.04em;
          }
          .mis-deadline-text span { color: var(--pink); }
          .mis-section {
            padding: 80px 0;
            border-top: 1px solid var(--border-subtle);
          }
          .mis-label {
            font-family: var(--mono);
            font-size: 11px;
            font-weight: 700;
            color: var(--pink);
            letter-spacing: 0.14em;
            text-transform: uppercase;
            margin-bottom: 32px;
          }
          .mis-page h2 {
            font-size: clamp(28px, 5vw, 40px);
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -0.02em;
            margin: 0 0 24px;
          }
          .mis-page h3 {
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.01em;
            margin: 0 0 10px;
          }
          .mis-page p { color: var(--muted); margin: 0 0 20px; }
          .mis-page p strong { color: var(--text); }
          .mis-rule {
            display: block;
            width: 48px;
            height: 2px;
            background: var(--pink);
            margin: 32px 0;
          }
          .mis-quote {
            border-left: 2px solid var(--pink);
            padding: 4px 0 4px 24px;
            margin: 32px 0;
          }
          .mis-quote p {
            font-size: 19px;
            font-weight: 500;
            color: var(--text);
            line-height: 1.5;
            font-style: italic;
            margin: 0;
          }
          .mis-grid { display: grid; gap: 2px; margin-top: 40px; }
          .mis-card {
            background: var(--bg-2);
            border: 1px solid var(--border-subtle);
            padding: 32px;
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 20px;
            align-items: start;
          }
          .mis-card-num {
            font-family: var(--mono);
            font-size: 13px;
            font-weight: 700;
            color: var(--pink);
            padding-top: 3px;
          }
          .mis-card p { margin: 0; font-size: 15px; line-height: 1.75; }
          .mis-foryou-item {
            background: var(--bg-2);
            border: 1px solid var(--border-subtle);
            padding: 24px 28px;
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }
          .mis-foryou-marker {
            font-family: var(--mono);
            font-size: 12px;
            color: var(--pink);
            font-weight: 700;
            padding-top: 2px;
            flex-shrink: 0;
            width: 24px;
          }
          .mis-foryou-text {
            font-size: 16px;
            color: var(--text);
            line-height: 1.6;
            margin: 0 !important;
          }
          .mis-note {
            margin-top: 32px;
            font-size: 15px;
            color: var(--muted);
            border-left: 2px solid var(--border);
            padding-left: 20px;
            line-height: 1.75;
          }
          .mis-note strong { color: var(--text); }
          .mis-arc {
            font-family: var(--mono);
            font-size: 11px;
            font-weight: 700;
            color: var(--muted);
            letter-spacing: 0.14em;
            text-transform: uppercase;
            margin: 40px 0 16px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .mis-arc::after {
            content: '';
            flex: 1;
            height: 1px;
            background: var(--border-subtle);
          }
          .mis-session {
            display: grid;
            grid-template-columns: 48px 1fr;
            gap: 0 20px;
            padding: 20px 0;
            border-bottom: 1px solid var(--border-subtle);
          }
          .mis-session-num {
            font-family: var(--mono);
            font-size: 12px;
            font-weight: 700;
            color: var(--pink);
            padding-top: 3px;
          }
          .mis-session-title {
            font-size: 17px;
            font-weight: 700;
            color: var(--text);
            margin-bottom: 6px;
          }
          .mis-session-desc {
            font-size: 15px;
            color: var(--muted);
            line-height: 1.6;
            margin: 0 !important;
          }
          .mis-format-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2px;
            margin-top: 40px;
          }
          @media (max-width: 560px) {
            .mis-format-grid { grid-template-columns: 1fr; }
          }
          .mis-format-card {
            background: var(--bg-2);
            border: 1px solid var(--border-subtle);
            padding: 28px;
          }
          .mis-format-card h3 { font-size: 16px; margin-bottom: 8px; color: var(--text); }
          .mis-format-card p { font-size: 15px; margin: 0; }
          .mis-format-icon {
            font-family: var(--mono);
            font-size: 20px;
            color: var(--pink);
            margin-bottom: 16px;
            display: block;
          }
          .mis-callout {
            background: var(--bg-2);
            border: 1px solid var(--border);
            padding: 24px 28px;
            margin-top: 24px;
          }
          .mis-callout-label {
            font-family: var(--mono);
            font-size: 11px;
            font-weight: 700;
            color: var(--pink);
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
          .mis-callout p { font-size: 15px; margin: 0; line-height: 1.7; }
          .mis-tier-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2px;
            margin-top: 40px;
          }
          @media (max-width: 860px) {
            .mis-tier-grid { grid-template-columns: 1fr; }
          }
          .mis-tier {
            background: var(--bg-2);
            border: 1px solid var(--border-subtle);
            padding: 36px 32px;
            position: relative;
            display: flex;
            flex-direction: column;
          }
          .mis-tier.featured {
            border-color: var(--pink);
            background: var(--bg-3);
          }
          .mis-tier-badge {
            position: absolute;
            top: -1px;
            right: 24px;
            background: var(--pink);
            color: var(--bg);
            font-family: var(--mono);
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 4px 10px;
          }
          .mis-tier-name {
            font-family: var(--mono);
            font-size: 11px;
            font-weight: 700;
            color: var(--muted);
            letter-spacing: 0.12em;
            text-transform: uppercase;
            margin-bottom: 16px;
          }
          .mis-tier-price {
            font-size: 44px;
            font-weight: 800;
            letter-spacing: -0.03em;
            color: var(--text);
            line-height: 1;
            margin-bottom: 4px;
          }
          .mis-tier-price sup {
            font-size: 22px;
            font-weight: 600;
            color: var(--pink);
          }
          .mis-tier-currency {
            font-family: var(--mono);
            font-size: 12px;
            color: var(--muted);
            margin-bottom: 24px;
          }
          .mis-tier-desc {
            font-size: 14px;
            color: var(--muted);
            line-height: 1.65;
            margin-bottom: 24px;
          }
          .mis-tier-includes {
            list-style: none;
            margin: 0 0 32px;
            padding: 0;
            flex: 1;
          }
          .mis-tier-includes li {
            font-size: 14px;
            color: var(--muted);
            padding: 8px 0;
            border-bottom: 1px solid var(--border-subtle);
            display: flex;
            gap: 10px;
            align-items: flex-start;
          }
          .mis-tier-includes li::before {
            content: '\\2192';
            color: var(--pink);
            font-family: var(--mono);
            font-size: 12px;
            flex-shrink: 0;
            padding-top: 1px;
          }
          .mis-btn {
            display: inline-block;
            padding: 16px 24px;
            font-family: var(--mono);
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            text-align: center;
            text-decoration: none;
            transition: all 0.2s;
          }
          .mis-btn-primary {
            background: var(--pink);
            color: var(--bg);
          }
          .mis-btn-primary:hover { background: #ff5aac; }
          .mis-btn-outline {
            background: transparent;
            color: var(--text);
            border: 1px solid var(--border-subtle);
          }
          .mis-btn-outline:hover {
            border-color: var(--pink);
            color: var(--pink);
          }
          .mis-btn-block { display: block; width: 100%; }
          .mis-about-block {
            background: var(--bg-2);
            border: 1px solid var(--border-subtle);
            padding: 40px;
            margin-top: 40px;
          }
          .mis-about-links {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid var(--border-subtle);
          }
          .mis-chip {
            font-family: var(--mono);
            font-size: 12px;
            font-weight: 700;
            color: var(--pink);
            text-decoration: none;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            border: 1px solid var(--border);
            padding: 10px 16px;
            transition: all 0.2s;
          }
          .mis-chip:hover { background: rgba(236,65,151,0.1); }
          .mis-testimonial {
            background: var(--bg-2);
            border: 1px solid var(--border-subtle);
            padding: 36px 32px;
          }
          .mis-testimonial-quote {
            font-size: 19px;
            font-weight: 500;
            color: var(--text);
            font-style: italic;
            line-height: 1.6;
            margin: 0 0 24px !important;
          }
          .mis-testimonial-who { display: flex; align-items: center; gap: 14px; }
          .mis-testimonial-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(236,65,151,0.15);
            border: 1px solid var(--border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--mono);
            font-size: 11px;
            font-weight: 700;
            color: var(--pink);
            flex-shrink: 0;
          }
          .mis-testimonial-name { font-size: 15px; font-weight: 700; color: var(--text); }
          .mis-testimonial-role { font-size: 13px; color: var(--muted); }
          .mis-fine {
            margin-top: 16px;
            font-size: 13px;
            color: var(--muted);
          }
          .mis-fine a { color: var(--pink); }
          .mis-episode-card {
            margin-top: 32px;
            background: var(--bg-3);
            border: 1px solid var(--border-subtle);
            padding: 24px 28px;
          }
        `}</style>

        {/* HERO */}
        <div className="mis-hero">
          <div className="mis-container">
            <div className="mis-eyebrow">An 8-week seminar for leaders</div>
            <h1>
              Make It <span className="mis-pink">So.</span>
            </h1>
            <p className="mis-hero-sub">
              You've been right about something before the room caught up.
              You've felt it — that early read on a situation that turned out to
              be accurate. What you may not have is a reliable system for doing
              that consistently, or the language to make it legible to the
              people around you when it counts.
              <br />
              <br />
              Futurism doesn't require a crystal ball — it requires a practice,{" "}
              <strong>
                woven into your daily life, not bolted on top of it.
              </strong>{" "}
              Make It So is an 8-week seminar that builds that practice
              underneath the instincts you already have.
            </p>
            <div className="mis-deadline">
              <div className="mis-deadline-dot" />
              <div className="mis-deadline-text">
                September <span>2026</span> &nbsp;&middot;&nbsp; Capped at 20
              </div>
            </div>
            <div id="waitlist" style={{ maxWidth: 480 }}>
              <div className="mis-label" style={{ marginBottom: 16 }}>
                Join the waitlist
              </div>
              <p style={{ fontSize: 15, marginBottom: 24 }}>
                The September cohort opens to the waitlist before it's announced
                publicly. Waitlist gets first access — at the founding cohort
                rate.
              </p>
              <a href={WAITLIST_MAILTO} className="mis-btn mis-btn-primary">
                Reserve your spot &rarr;
              </a>
              <p className="mis-fine">
                Email Nola directly. You'll hear back within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* PREMISE */}
        <section className="mis-section">
          <div className="mis-container">
            <div className="mis-label">The premise</div>
            <h2>
              Most leadership programs hand you a framework. This one builds
              you a practice.
            </h2>
            <span className="mis-rule" />
            <p>
              Most of the analysis reaching your desk has already passed
              through someone else's assumptions — filtered before it got to
              you. Trend reports, strategy recommendations, market research:
              all of it shaped by what the author treated as settled before
              they started writing. The questions those documents don't ask are
              usually the ones that matter most.
            </p>
            <blockquote className="mis-quote">
              <p>
                Futurism isn't prediction. It's preparation. And preparation
                starts with examining what you're already assuming is true.
              </p>
            </blockquote>
            <p>
              That examination has a name: the{" "}
              <strong>Assumption-Ground Audit (AGA)</strong>.
            </p>
            <p>
              Here's what it looks like in practice. A senior leader is
              building a case for a new direction — a pivot, a restructure, a
              new product line. The strategy is sound. The data supports it.
              The team is aligned.
            </p>
            <p>
              The AGA doesn't start with the strategy. It starts one layer
              back: what are we treating as settled that we haven't examined?
              Maybe the market conditions that made this direction look right
              six months ago have shifted. Maybe alignment actually means
              compliance. Maybe the people who built the current model are the
              last people who should be redesigning it.
            </p>
            <p>
              None of those are visible until you look for them. The AGA makes
              them visible before they harden into a commitment that's
              expensive to reverse. That's the intervention point — before the
              commitment.
            </p>
            <p>
              Here's the same audit at a different scale. A solopreneur has
              been building — more content, more case studies, more proof —
              operating on the assumption that credibility needs to be
              accumulated before authority can be claimed. The offer keeps
              growing. The price stays where it is. They're waiting until
              they've earned the right to charge what they actually want.
            </p>
            <p>
              The AGA surfaces the assumption underneath: that authority is
              something the market grants you rather than something you
              practice. That the people who aren't buying would buy if they
              just saw more evidence. That the offer needs to be bigger before
              it earns a higher price.
            </p>
            <p>
              When you name that assumption, a different question becomes
              visible: what would it look like to lead with the authority you
              already have, rather than keep building toward an authority
              you've decided you don't have yet?
            </p>
            <p>
              Make It So brings that same rigour to your individual leadership
              practice — eight weeks, starting with identity and trust, moving
              through noticing and meaning-making, closing with a practice
              already running. No learning management system. No modules
              you'll complete and forget. Just the work, a small group of
              serious people, and the practice already built by the time the
              cohort ends.
            </p>
          </div>
        </section>

        {/* UNIQUENESS */}
        <section className="mis-section">
          <div className="mis-container">
            <div className="mis-label">Why this is different</div>
            <h2>There is no other program that does this.</h2>
            <span className="mis-rule" />
            <div className="mis-grid">
              <div className="mis-card">
                <div className="mis-card-num">01</div>
                <div>
                  <h3>It operates before the commitment</h3>
                  <p>
                    Most leadership and foresight programs work inside
                    assumptions you've already made — they help you execute
                    better within a direction already chosen. The
                    Assumption-Ground Audit operates before that. Before the
                    commitment. Before the assumption hardens into strategy or
                    policy. That's a different intervention point entirely. No
                    other program is built around it.
                  </p>
                </div>
              </div>
              <div className="mis-card">
                <div className="mis-card-num">02</div>
                <div>
                  <h3>It's built for people who are already ahead</h3>
                  <p>
                    Most leadership programs are remedial — designed for people
                    who missed something. This one is for the leader who
                    already senses things before the room catches up, operates
                    with a forensic instinct, and wants infrastructure for
                    what's already working. That includes solopreneurs and
                    small business owners navigating consequential decisions
                    alone — without a strategy team to pressure-test
                    assumptions, the cost of an unexamined one is higher, not
                    lower. Different person. Different program.
                  </p>
                </div>
              </div>
              <div className="mis-card">
                <div className="mis-card-num">03</div>
                <div>
                  <h3>It builds a practice, not a framework</h3>
                  <p>
                    Every other program in this space hands you a model and
                    tells you to apply it. This one starts from the other end —
                    your identity as a thinker, your trust architecture, how
                    you actually process information in the real conditions you
                    work in. What you build here is configured to you
                    specifically, inside the context where you actually work.
                    By week eight, the orientation has already shifted.
                  </p>
                </div>
              </div>
              <div className="mis-card">
                <div className="mis-card-num">04</div>
                <div>
                  <h3>The intellectual formation is rare</h3>
                  <p>
                    Mathematics plus forensic historiography — the discipline
                    of examining what sources assume, not just what they say —
                    applied forward rather than backward. That's the formation
                    behind the AGA, and it's not a background any other
                    futurism practitioner brings. It produces a methodology
                    that is structurally different from trend-watching,
                    scenario planning, or strategic foresight as it's usually
                    practised.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOR YOU */}
        <section className="mis-section">
          <div className="mis-container">
            <div className="mis-label">Is this for you?</div>
            <h2>Make It So was built for you if —</h2>
            <div className="mis-grid" style={{ marginTop: 36 }}>
              {forYou.map((item) => (
                <div className="mis-foryou-item" key={item}>
                  <span className="mis-foryou-marker">&rarr;</span>
                  <p className="mis-foryou-text">{item}</p>
                </div>
              ))}
            </div>
            <p className="mis-note">
              <strong>A note on what gets better results:</strong> participants
              who are open, self-aware, and genuinely willing to examine what
              they've been treating as settled go further faster. You don't
              need to arrive there — but being willing to get there matters.
            </p>
          </div>
        </section>

        {/* QUIZ */}
        <section className="mis-section" id="quiz">
          <div className="mis-container">
            <div className="mis-label">Start here</div>
            <h2>Not sure if this is for you?</h2>
            <p>
              Five questions. Four minutes. The Futurist Readiness Assessment
              tells you where you're starting from before you decide anything.
            </p>
            <div style={{ marginTop: 32 }}>
              <a
                href="https://form.typeform.com/to/VumUdwYZ"
                target="_blank"
                rel="noopener noreferrer"
                className="mis-btn mis-btn-primary"
              >
                Take the assessment &rarr;
              </a>
              <p className="mis-fine">
                Opens in a new tab. Takes about 4 minutes.
              </p>
            </div>
          </div>
        </section>

        {/* SYLLABUS */}
        <section className="mis-section">
          <div className="mis-container">
            <div className="mis-label">The syllabus</div>
            <h2>Eight weeks. Three moves.</h2>
            <p style={{ marginBottom: 0 }}>
              The program opens by examining who you are as a leader and what
              you actually trust — before anything else earns its place. Then
              it builds outward: how you notice, how you make meaning, and
              finally how you make it stick.
            </p>
            <div style={{ marginTop: 48 }}>
              {syllabus.map((arc) => (
                <div key={arc.act}>
                  <div className="mis-arc">{arc.act}</div>
                  {arc.sessions.map((s) => (
                    <div className="mis-session" key={s.num}>
                      <div className="mis-session-num">{s.num}</div>
                      <div>
                        <div className="mis-session-title">{s.title}</div>
                        <p className="mis-session-desc">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMAT */}
        <section className="mis-section">
          <div className="mis-container">
            <div className="mis-label">The format</div>
            <h2>Designed for leaders with real schedules.</h2>
            <p>
              Most of this program runs through Telegram — not as a compromise,
              but because you shouldn't have to clear your calendar to build a
              futurism practice. Nola leads the thinking and the discussion.
              The cohort does the rest. The conversation happens on your time,
              in a space that works anywhere in the world.
            </p>
            <p>
              Everything else in this space — the books, the trend reports, the
              free channels — reaches you the same way it reaches everyone
              else. The Telegram channel doesn't work like that. Nola responds
              to your thinking specifically, in real time. There is no other
              access point at this price.
            </p>
            <div className="mis-format-grid">
              <div className="mis-format-card">
                <span className="mis-format-icon">&#9672;</span>
                <h3>Telegram-based async</h3>
                <p>
                  The cohort lives in Telegram. Nola shares signals she's
                  tracking, questions she's sitting with, and patterns worth
                  naming. The cohort responds, pushes back, and takes threads
                  somewhere. It's a thinking space, not a content feed.
                </p>
              </div>
              <div className="mis-format-card">
                <span className="mis-format-icon">&#9672;</span>
                <h3>Two live sessions</h3>
                <p>
                  Two live Google Meet sessions across the 8 weeks — always
                  recorded, with times rotating so North America, Europe, and
                  Asia-Pacific each get a live window. Weekly office hours are
                  available on the Program + Office Hours tier.
                </p>
              </div>
              <div className="mis-format-card">
                <span className="mis-format-icon">&#9672;</span>
                <h3>Capped at 20</h3>
                <p>
                  Sensemaking at scale doesn't work. Twenty people means
                  everyone's thinking lands, gets challenged, and shapes the
                  room.
                </p>
              </div>
              <div className="mis-format-card">
                <span className="mis-format-icon">&#9672;</span>
                <h3>Global by design</h3>
                <p>
                  Open to participants anywhere in the world. Nola's audience
                  already spans Singapore, the UK, Germany, Australia, and
                  North America. Async-first means time zones aren't a barrier.
                  All sessions in English.
                </p>
              </div>
            </div>
            <p className="mis-note" style={{ marginTop: 28 }}>
              On live sessions: come as you are. Camera on or off, mic on or
              off — your call, every time. Participation in the chat is equal
              to verbal participation. There is no right way to show up, only
              that you do.
            </p>

            <div className="mis-label" style={{ marginTop: 40, marginBottom: 20 }}>
              Why September
            </div>
            <p style={{ fontSize: 16, color: "var(--text)", fontWeight: 600, marginBottom: 12, lineHeight: 1.5 }}>
              Implementation without groundwork fails. Most leaders know this —
              they've lived it.
            </p>
            <p style={{ fontSize: 15, marginBottom: 16 }}>
              September is when leaders implement. New plans, new budgets, the
              calendar filling back up — it's the season when directions get
              committed to, which makes it exactly the season when unexamined
              assumptions get expensive.
            </p>
            <p style={{ fontSize: 15, marginBottom: 32 }}>
              Make It So runs through that season on purpose. You're not
              building the practice in a quiet month and hoping it transfers —
              you're building it while the real decisions are arriving, on the
              commitments actually in front of you. By the time the cohort
              ends, the practice isn't a plan. It's already running.
            </p>
            <p style={{ fontSize: 15 }}>
              <strong>This is not a course.</strong> No certificate, no content
              library, nothing to revisit on a rainy Tuesday. Make It So is a
              working seminar — you show up, you think with a small group of
              serious people, and eight weeks later the practice is there
              because you built it.
            </p>
            <div className="mis-callout">
              <div className="mis-callout-label">After you enroll</div>
              <p>
                You'll receive a Telegram invite within 24 hours. The cohort
                channel opens the week the program begins in September 2026.
                First week starts the same day the channel opens. No onboarding
                maze, no pre-work package. Just show up.
              </p>
            </div>
          </div>
        </section>

        {/* TIERS */}
        <section className="mis-section" id="tiers">
          <div className="mis-container">
            <div className="mis-label">The three tiers</div>
            <h2>One cohort. Three levels of access.</h2>
            <p>
              Twenty seats total, across all three tiers combined. Every seat
              is at the founding cohort rate — and that rate doesn't change
              based on when you register. The seats are what's finite. All
              prices in CAD; US pricing available upon request.
            </p>
            <div className="mis-tier-grid">
              {tiers.map((tier) => (
                <div
                  className={`mis-tier${tier.cta.primary ? " featured" : ""}`}
                  key={tier.name}
                >
                  {tier.badge && (
                    <div className="mis-tier-badge">{tier.badge}</div>
                  )}
                  <div className="mis-tier-name">{tier.name}</div>
                  <div className="mis-tier-price">
                    <sup>$</sup>
                    {tier.price}
                  </div>
                  <div className="mis-tier-currency">CAD</div>
                  <div className="mis-tier-desc">{tier.desc}</div>
                  <ul className="mis-tier-includes">
                    {tier.includes.map((inc) => (
                      <li key={inc}>{inc}</li>
                    ))}
                  </ul>
                  <a
                    href={tier.cta.href}
                    className={`mis-btn mis-btn-block ${
                      tier.cta.primary ? "mis-btn-primary" : "mis-btn-outline"
                    }`}
                  >
                    {tier.cta.label} &rarr;
                  </a>
                </div>
              ))}
            </div>
            <p className="mis-fine" style={{ marginTop: 24 }}>
              The 1:1 tier is by application — Nola reads every application
              personally and follows up within 2 business days, including when
              a different tier is honestly the better fit.
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mis-section">
          <div className="mis-container">
            <div className="mis-label">Who runs this</div>
            <h2>Nola Simon</h2>
            <div className="mis-about-block">
              <p>
                Nola Simon is the founder of Everyday Futurism, an independent
                keynote speaking and strategic advisory practice. She works
                with C-suite and senior leaders at the pre-adoption stage —
                before organizations commit to directions and before
                assumptions harden into policy.
              </p>
              <p>
                Her named methodology, the Assumption-Ground Audit, emerged
                from 20+ years across five complex organizations — including
                seventeen years inside one of them, spanning cross-border
                Canada-US operations and billion-dollar vendor relationships.
                Her academic formation — an Honours B.A. in Mathematics with a
                History minor from Glendon College, studied in French — gave
                her the combination of structural thinking and forensic
                historical method that grounds the AGA.
              </p>
              <p>
                She is a LinkedIn Top Voice (2024, 2025), host of the{" "}
                <a href="/podcast" style={{ color: "var(--pink)" }}>
                  Hope + Possibilities podcast
                </a>{" "}
                (100+ episodes, Goodpods top 10 leadership), and has been
                featured in Maclean's, CBC, CTV, and Canadian Press. She lives
                north of Toronto, near Lake Simcoe — which means she has built
                her entire practice in the same condition she's working in:
                doing serious cross-border work from the middle of nowhere.
              </p>
              <div className="mis-episode-card">
                <div className="mis-callout-label">
                  Hope + Possibilities — Episode
                </div>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--text)",
                    margin: "0 0 8px",
                    lineHeight: 1.4,
                  }}
                >
                  The Assumption-Ground Audit: Everyday Futurism as a
                  Leadership Practice
                </p>
                <p style={{ fontSize: 14, margin: "0 0 16px", lineHeight: 1.6 }}>
                  The methodology behind this seminar — what it is, why it
                  works, and what it looks like in practice. If you want to
                  hear how Nola thinks before you commit, start here.
                </p>
                <a
                  href="https://www.podpage.com/hope-possibilities-a-love-letter-to-the-future-of-work/the-assumption-ground-audit-everyday-futurism-as-a-leadership-practice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mis-chip"
                >
                  Listen to the episode &#8599;
                </a>
              </div>
              <div className="mis-about-links">
                <a
                  href="https://www.linkedin.com/in/nolasimon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mis-chip"
                >
                  LinkedIn &#8599;
                </a>
                <a href="/podcast" className="mis-chip">
                  Hope + Possibilities &#8599;
                </a>
                <a href="/" className="mis-chip">
                  nolasimon.com &#8599;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mis-section">
          <div className="mis-container">
            <div className="mis-label">What people say</div>
            <h2>On Nola's thinking.</h2>
            <div className="mis-grid">
              <div className="mis-testimonial">
                <p className="mis-testimonial-quote">
                  &ldquo;What I appreciate about you, Nola, is you sense things
                  before they happen. A true Futurist Thinker.&rdquo;
                </p>
                <div className="mis-testimonial-who">
                  <div className="mis-testimonial-avatar">KT</div>
                  <div>
                    <div className="mis-testimonial-name">Kerri Twigg</div>
                    <div className="mis-testimonial-role">
                      Leadership Development Specialist &amp; LinkedIn Top
                      Voice, Manitoba Hydro
                    </div>
                  </div>
                </div>
              </div>
              <div className="mis-testimonial">
                <p className="mis-testimonial-quote">
                  &ldquo;Nola, you are really one of the smartest I know. Like
                  well-rounded intellect with deep emotional intelligence. You
                  are not the average user. You think beyond the
                  surface.&rdquo;
                </p>
                <div className="mis-testimonial-who">
                  <div className="mis-testimonial-avatar">DKL</div>
                  <div>
                    <div className="mis-testimonial-name">
                      Dr. Kem-Laurin Lubin
                    </div>
                    <div className="mis-testimonial-role">
                      Sr. UX Strategist &amp; AI Researcher, Ph.D.-C,
                      University of Waterloo
                    </div>
                  </div>
                </div>
              </div>
              <div className="mis-testimonial">
                <p className="mis-testimonial-quote">
                  &ldquo;Nola was absolutely pivotal in the communications
                  space. She has an engaged network and understands how to
                  leverage various mediums to rally an audience. Her innate
                  talent for change management was enormously helpful.&rdquo;
                </p>
                <div className="mis-testimonial-who">
                  <div className="mis-testimonial-avatar">RM</div>
                  <div>
                    <div className="mis-testimonial-name">Ryan Marek</div>
                    <div className="mis-testimonial-role">
                      Manager, Strategy, Manulife Bank
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mis-section" id="enroll">
          <div className="mis-container">
            <div className="mis-label">September 2026</div>
            <h2>The next cohort opens before it's announced.</h2>
            <p>
              Waitlist gets first access at the founding cohort rate. Twenty
              seats, across all three tiers.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={WAITLIST_MAILTO} className="mis-btn mis-btn-primary">
                Reserve your spot &rarr;
              </a>
              <a href={APPLY_MAILTO} className="mis-btn mis-btn-outline">
                Apply for the 1:1 tier &rarr;
              </a>
            </div>
            <p className="mis-fine">
              Questions?{" "}
              <a href="mailto:nola@everydayfuturism.ca">
                nola@everydayfuturism.ca
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mis-section">
          <div className="mis-container">
            <div className="mis-label">Questions</div>
            <h2>Before you sign up</h2>
            <MakeItSoFaq faqs={faqs} />
            <div
              style={{
                marginTop: 56,
                paddingTop: 40,
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <div className="mis-label" style={{ marginBottom: 16 }}>
                Join the waitlist
              </div>
              <a href={WAITLIST_MAILTO} className="mis-btn mis-btn-primary">
                Reserve your spot &rarr;
              </a>
              <p className="mis-fine">
                Questions?{" "}
                <a href="mailto:nola@everydayfuturism.ca">
                  nola@everydayfuturism.ca
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
