export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nola Simon",
    url: "https://nolasimon.com",
    image: "https://nolasimon.com/images/nola-hero.jpg",
    jobTitle: "Keynote Speaker & Strategic Advisor",
    description:
      "Keynote speaker and strategic futurist based in Ontario, Canada. Nola Simon helps executive teams surface assumptions before decisions calcify — on the future of work and organizational trust.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "State", name: "Ontario" },
      { "@type": "Country", name: "Canada" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/nolasimon/",
      "https://nolasimonhrcoe.substack.com",
      "https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7",
      "https://podcasts.apple.com/us/podcast/id1602822494",
    ],
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
    name: "Nola Simon Advisory",
    url: "https://nolasimon.com",
    logo: "https://nolasimon.com/images/nola-hero.jpg",
    founder: {
      "@type": "Person",
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
}: {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  image?: string;
}) {
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `https://nolasimon.com${image}`
    : "https://nolasimon.com/og-image.jpg";

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
      name: "Nola Simon",
      url: "https://nolasimon.com",
    },
    publisher: {
      "@type": "Person",
      name: "Nola Simon",
      url: "https://nolasimon.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://nolasimon.com/blog/${slug}`,
    },
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
      url: "https://nolasimon.com",
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
      { "@type": "State", name: "Ontario" },
      { "@type": "Country", name: "Canada" },
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
