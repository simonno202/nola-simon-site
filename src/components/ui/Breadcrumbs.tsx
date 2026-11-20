import Link from "next/link";

const BASE_URL = "https://nolasimon.com";

export interface Crumb {
  label: string;
  href: string;
}

export const LEADERSHIP_PODCAST_TRAIL: Crumb[] = [
  { label: "Nola Simon Leadership", href: "/leadership" },
  { label: "Everyday Futurism Practices", href: "/leadership#everyday-futurism-practices" },
  {
    label: "Using Podcasts To Build the Skills of the Future",
    href: "/leadership#using-podcasts",
  },
];

interface BreadcrumbsProps {
  items?: Crumb[];
  trail?: "leadership-podcasts";
}

export function Breadcrumbs({ items, trail }: BreadcrumbsProps) {
  const crumbs = items ?? (trail === "leadership-podcasts" ? LEADERSHIP_PODCAST_TRAIL : []);
  if (crumbs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${BASE_URL}${c.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="not-prose mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.08em] text-text-muted">
        {crumbs.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">&rsaquo;</span>}
            <Link href={c.href} className="hover:text-pink transition-colors">
              {c.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
