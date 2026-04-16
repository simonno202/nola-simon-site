import Link from "next/link";

const SERIES = [
  {
    slug: "/blog/who-gets-to-be-trusted-now",
    label: "Who Gets to Be Trusted Now?",
    num: 1,
  },
  {
    slug: "/blog/witnessed-trust-case-study",
    label: "The Coldplay Kiss Cam Crisis",
    num: 2,
  },
  {
    slug: "/blog/the-rabbit-hole",
    label: "The Rabbit Hole",
    num: 3,
  },
  {
    slug: "/blog/assumption-ground-audit",
    label: "Under the Rocks Are the Words",
    num: 4,
  },
  {
    slug: "/blog/youre-gonna-miss-me-when-im-gone",
    label: "You're Gonna Miss Me When I'm Gone",
    num: 5,
  },
  {
    slug: "/blog/foregone-conclusions-gone-wrong",
    label: "Foregone Conclusions Gone Wrong",
    num: 6,
  },
  {
    slug: "/blog/the-most-dangerous-assumption-in-the-room",
    label: "The Most Dangerous Assumption in the Room",
    num: 7,
  },
];

interface WitnessedTrustSeriesNavProps {
  current: string;
}

export function WitnessedTrustSeriesNav({ current }: WitnessedTrustSeriesNavProps) {
  return (
    <nav
      aria-label="Witnessed Trust series"
      className="my-8 rounded-[var(--radius-card)] border border-border-light bg-surface p-5"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-pink mb-4">
        Witnessed Trust — Series
      </p>
      <ol className="space-y-2">
        {SERIES.map((item) => {
          const isCurrent = item.slug === current;
          return (
            <li key={item.slug} className="flex items-baseline gap-2.5">
              <span className="font-mono text-[10px] text-text-muted w-4 shrink-0">
                {item.num}.
              </span>
              {isCurrent ? (
                <span className="text-[13px] font-semibold text-navy">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.slug}
                  className="text-[13px] text-text-secondary hover:text-pink transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
