import { MEDIA_FEATURES } from "@/data/media-links";

export const PERSON_ID = "https://nolasimon.com/#nola-simon";
export const ORG_ID = "https://nolasimon.com/#organization";

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Nola Simon",
    url: "https://nolasimon.com",
    image: "https://nolasimon.com/images/nola-hero.jpg",
    jobTitle: "Keynote Speaker & Strategic Futurist",
    description:
      "Nola Simon is a Canadian strategic futurist and researcher based in Ontario. She helps leaders and organizations surface assumptions before decisions calcify — on the future of work and organizational trust.",
    nationality: {
      "@type": "Country",
      name: "Canada",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Glendon College, York University",
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
      "International upon request",
    ],
    sameAs: [
      "https://www.linkedin.com/in/nolasimon/",
      "https://nolasimonhrcoe.substack.com",
      "https://www.threads.net/@nolasimonsayings",
      "https://www.instagram.com/nolasimonsayings/",
      "https://www.tiktok.com/@nolasimonsayings",
      "https://x.com/nolasimontjo",
      "https://ca.pinterest.com/EverydayFuturism/",
      "https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7",
      "https://podcasts.apple.com/us/podcast/id1602822494",
      "https://goodpods.com/podcasts/hope-possibilties-a-love-letter-to-the-future-of-work-198061",
      "https://www.podpage.com/hope-possibilities-a-love-letter-to-the-future-of-work",
    ],
    subjectOf: MEDIA_FEATURES.filter(
      (item) => item.type === "article"
    ).map((item) => ({
      "@type": "Article",
      headline: item.title,
      url: item.url,
      publisher: { "@type": "Organization", name: item.outlet },
    })),
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Future of Work",
      "Keynote Speaking",
      "Strategic Foresight",
      "Everyday Futurism",
      "Organizational Trust",
      "Decision-Making",
      "Leadership",
      "Change Management",
      "Assumption-Ground Audit",
    ],
    award: [
      "LinkedIn Top Voice 2024",
      "LinkedIn Top Voice 2025",
      "Goodpods Top 10 Leadership Indie Podcast",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Nola Simon Advisory",
    url: "https://nolasimon.com",
    logo: "https://nolasimon.com/images/nola-hero.jpg",
    founder: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Nola Simon",
    },
    description:
      "Strategic futurism advisory helping leaders and organizations read signals, question the status quo, and build what's next.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "nola@nolasimon.com",
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/in/nolasimon/",
      "https://nolasimonhrcoe.substack.com",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PodcastSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Hope + Possibilities: A Love Letter to the Future of Work",
    description:
      "Conversations about the future of work with leaders, thinkers, and practitioners building what's next with honesty, self-trust, and a willingness to challenge the status quo.",
    url: "https://nolasimon.com/podcast",
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Nola Simon",
    },
    webFeed:
      "https://rss.libsyn.com/shows/390218/destinations/3209099.xml",
    sameAs: [
      "https://podcasts.apple.com/us/podcast/id1602822494",
      "https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7",
      "https://goodpods.com/podcasts/hope-possibilties-a-love-letter-to-the-future-of-work-198061",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  slug,
  image,
  about,
  citation,
}: {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  image?: string;
  about?: string[];
  citation?: string[];
}) {
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `https://nolasimon.com${image}`
    : "https://nolasimon.com/opengraph-image";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    image: imageUrl,
    url: `https://nolasimon.com/blog/${slug}`,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Nola Simon",
      url: "https://nolasimon.com",
    },
    publisher: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Nola Simon",
      url: "https://nolasimon.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nolasimon.com/blog/${slug}`,
    },
    ...(about && about.length > 0
      ? { about: about.map((name) => ({ "@type": "Thing", name })) }
      : {}),
    ...(citation && citation.length > 0 ? { citation } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PediculosisFAQ() {
  const faqs = [
    {
      question: "What is an Assumption-Ground Audit?",
      answer: "An Assumption-Ground Audit is a structured process for tracing a belief, policy, or strategy back to its source before it hardens into irreversible action. It identifies what an organization is taking for granted, who decided it was true, and whether it has ever been verified. Developed by Nola Simon through Everyday Futurism.",
    },
    {
      question: "What does an Assumption-Ground Audit cost to ignore?",
      answer: "Unexamined assumptions can compound into policy, then into culture. In the case study on this page, a single unverified assumption in a school board lice policy generated roughly $30 million in preventable economic harm before it was audited and corrected.",
    },
    {
      question: "When should an organization do an Assumption-Ground Audit?",
      answer: "Before a major policy is written, before a strategy is committed, before a vendor contract is signed — any time a decision is about to calcify into something hard to reverse. The audit is upstream work, most valuable before the seventh time someone gets sent home.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function StabilityFAQ() {
  const faqs = [
    {
      question: "What is Everyday Futurism?",
      answer: "Everyday Futurism is the practice of naming what you're already observing before the ground you're standing on has a name. It is not forecasting, trend-spotting, or scenario planning. It is the discipline of noticing what's already shifting — in your body, your organization, or the conditions around you — and examining the assumptions underneath before they harden into policy or strategy. Developed by Nola Simon through thirty years of lived disruption.",
    },
    {
      question: "What is metaruption?",
      answer: "Metaruption is the term futurists use for disruptions that stack, feed each other, and accelerate simultaneously. The experience is not new — many people have lived inside multiple overlapping systemic failures at once. What is new is the name, and the recognition that the stability others experienced was not skill or preparation. It was luck.",
    },
    {
      question: "Why does stability feel real if it has always been an illusion?",
      answer: "Stability feels real because institutions, policies, and social contracts are designed to absorb disruption invisibly. When they work, you don't see the maintenance underneath. When they fail simultaneously — as they do in recessions, pandemics, infrastructure collapses, and climate events — the assumption of ground becomes visible. The ground was always this unstable. Most people just haven't had to perceive it yet.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function TransparencyFAQ() {
  const faqs = [
    {
      question: "Does transparency build trust?",
      answer: "Not by itself. Transparency is an input; trust is an interpretation. In the YAP Challenge case, creator Jessi Jean disclosed her prior business, her twelve years working online, and her professional coaching support, and a visible wave of buyers still felt deceived. Disclosure is what you put in the drawing; understanding is what people see in it.",
    },
    {
      question: "Why did YAP Challenge buyers feel deceived?",
      answer: "Not because facts were hidden. Nobody disputed the receipts or accused Jessi Jean of lying. Buyers had accepted a kinship positioning (I am just like you, a bit further ahead) and then registered the infrastructure behind it: twelve years online, roughly 400,000 followers, a coach, and funnel experts. The grievance was about who buyers believed she was, not about the facts, which were public all along. The full case is examined in An Assumption-Ground Audit of a Live Launch at https://nolasimon.com/blog/assumption-ground-audit-live-launch-yap-challenge.",
    },
    {
      question: "What is the duck-rabbit illusion?",
      answer: "A drawing first published in a German humor magazine in 1892 and later made famous by the psychologist Joseph Jastrow. The same lines read as either a duck or a rabbit; both animals are fully present, but a viewer can only see one at a time. Nola Simon uses it as a model for positioning (she calls it the duck-bunny): any positioning strong enough to attract people holds more than one reading, and each audience resolves it privately.",
    },
    {
      question: "What is a two-way scrutiny discount?",
      answer: "The effect a low price has on examination in both directions. Before purchase, the risk feels too small to interrogate, so buyers skip due diligence. After purchase, the same figure suppresses grievance, because complaints feel disproportionate to the amount spent. In the YAP Challenge case, the $297 price worked this way on both sides of the transaction.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs?: { question: string; answer: string }[] }) {
  if (!faqs?.length) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function DefinedTermSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name,
    description,
    url,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Everyday Futurism Glossary",
      url: "https://nolasimon.com/everyday-futurism",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SpeakerSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Nola Simon",
    url: "https://nolasimon.com/advisory-speaking",
    image: "https://nolasimon.com/images/nola-speaking.jpg",
    jobTitle: "Keynote Speaker & Strategic Advisor",
    description:
      "Keynote speaker on the future of work and organizational trust. Based in Ontario, Canada. Nola Simon works with executive teams in the window before decisions calcify — surfacing assumptions before they become policy.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
      "International upon request",
    ],
    knowsAbout: [
      "Future of Work",
      "Keynote Speaking",
      "Organizational Trust",
      "Decision-Making Under Uncertainty",
      "Strategic Foresight",
      "Everyday Futurism",
      "Assumption-Ground Audit",
      "Leadership",
      "Change Management",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Keynote Speaking Topics",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "What You're Not Asking Before You Commit",
            description:
              "The most important decision your organization makes is already half-made. A keynote on decision-making, pre-decision windows, and the Assumption-Ground Audit.",
            serviceType: "Keynote Speaking",
            provider: { "@type": "Person", name: "Nola Simon" },
            areaServed: [
              { "@type": "State", name: "Ontario" },
              { "@type": "Country", name: "Canada" },
            ],
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Witnessed Trust",
            description:
              "Trust isn't built. It's caught. A keynote on organizational trust, what people actually trust versus what organizations think they trust, and why transparency theater makes it worse.",
            serviceType: "Keynote Speaking",
            provider: { "@type": "Person", name: "Nola Simon" },
            areaServed: [
              { "@type": "State", name: "Ontario" },
              { "@type": "Country", name: "Canada" },
            ],
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/in/nolasimon/",
      "https://elevate.ca/speakers/nola-simon/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nola Simon | Everyday Futurism",
    url: "https://nolasimon.com",
    description:
      "Strategic futurist Nola Simon helps leaders and organizations trust themselves to read the signals, question the status quo, and build what's next.",
    publisher: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Nola Simon",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
