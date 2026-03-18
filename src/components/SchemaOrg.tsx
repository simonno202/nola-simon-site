export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nola Simon",
    url: "https://nolasimon.com",
    image: "https://nolasimon.com/images/nola-hero.jpg",
    jobTitle: "Futurist & Researcher",
    description:
      "Futurist, researcher, and podcast host helping leaders and organizations trust themselves to navigate what's next.",
    sameAs: [
      "https://www.linkedin.com/in/nolasimon/",
      "https://nolasimonhrcoe.substack.com",
      "https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7",
      "https://podcasts.apple.com/us/podcast/id1602822494",
    ],
    knowsAbout: [
      "Strategic Foresight",
      "Future of Work",
      "Leadership",
      "Trust",
      "Everyday Futurism",
      "Employee Engagement",
    ],
    alumniOf: [],
    award: [
      "LinkedIn Top Voice 2024",
      "LinkedIn Top Voice 2025",
      "Goodpods Top 100 Leadership Indie Podcast",
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
