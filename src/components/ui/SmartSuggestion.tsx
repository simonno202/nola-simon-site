"use client";

import { usePathname } from "next/navigation";

const ROUTES = [
  {
    path: "/about",
    title: "About Nola Simon",
    keywords: ["about", "bio", "nola", "simon", "background", "story", "who", "futurist", "researcher"],
  },
  {
    path: "/advisory-speaking",
    title: "Advisory & Speaking",
    keywords: ["advisory", "advise", "speaking", "keynote", "consulting", "consult", "hire", "book", "speaker", "speak", "coaching", "workshop", "talk", "presentation", "strategic"],
  },
  {
    path: "/podcast",
    title: "Hope + Possibilities Podcast",
    keywords: ["podcast", "hope", "possibilities", "episode", "episodes", "audio", "listen", "show", "futurism", "everyday", "practical", "season", "interview"],
  },
  {
    path: "/blog",
    title: "Work & Writing",
    keywords: ["blog", "work", "writing", "essays", "essay", "articles", "article", "posts", "post", "ideas", "content", "writing", "words", "newsletter", "substack"],
  },
  {
    path: "/media",
    title: "Media & Speaking",
    keywords: ["media", "press", "news", "interview", "journalist", "press-kit", "kit", "headshots", "bio", "speaking", "featured", "appearances"],
  },
  {
    path: "/contact",
    title: "Contact",
    keywords: ["contact", "email", "reach", "hello", "connect", "message", "touch", "get-in-touch"],
  },
  {
    path: "/links",
    title: "Links",
    keywords: ["links", "linktree", "link", "social", "follow"],
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    keywords: ["privacy", "policy", "data", "gdpr", "personal"],
  },
  {
    path: "/terms",
    title: "Terms",
    keywords: ["terms", "conditions", "legal", "service"],
  },
];

function tokenize(path: string): string[] {
  return path
    .toLowerCase()
    .replace(/^\//, "")
    .split(/[\/\-_\s.]+/)
    .filter((t) => t.length > 2); // skip short tokens like "a", "to"
}

function scoreRoute(tokens: string[], keywords: string[]): number {
  let total = 0;
  for (const token of tokens) {
    for (const kw of keywords) {
      if (kw === token) {
        total += 2; // exact match
      } else if (kw.includes(token) || token.includes(kw)) {
        total += 1; // partial match
      }
    }
  }
  return total;
}

export function SmartSuggestion() {
  const pathname = usePathname();

  const tokens = tokenize(pathname);
  if (tokens.length === 0) return null;

  const scored = ROUTES.map((route) => ({
    ...route,
    score: scoreRoute(tokens, route.keywords),
  }))
    .filter((r) => r.score >= 2) // only show if reasonably confident
    .sort((a, b) => b.score - a.score);

  const best = scored[0];
  if (!best) return null;

  return (
    <div
      style={{
        marginBottom: "1.5rem",
        padding: "0.85rem 1rem",
        background: "rgba(212, 86, 122, 0.06)",
        border: "1px solid rgba(212, 86, 122, 0.18)",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.75rem",
          color: "#6B6558",
          marginBottom: "0.5rem",
          lineHeight: 1.5,
        }}
      >
        🔮 I can&rsquo;t predict the future. Apparently I can&rsquo;t predict URLs either. Best guess:
      </p>
      <a
        href={best.path}
        style={{
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "#D4567A",
          textDecoration: "none",
        }}
        className="hover:underline"
      >
        → {best.title}
      </a>
    </div>
  );
}

export default SmartSuggestion;
