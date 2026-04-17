"use client";

import { useState } from "react";

type BadgeVariant = "full" | "compact" | "inline";

interface GoodpodsBadgeProps {
  variant?: BadgeVariant;
  className?: string;
}

const PODCAST_URL =
  "https://goodpods.com/podcasts/hope-possibilties-a-love-letter-to-the-future-of-work-198061";

const BADGES = [
  {
    leaderboardUrl:
      "https://goodpods.com/leaderboard/top-100-shows-by-category/business/leadership?indie=true&period=alltime#90606482",
    imgSrc:
      "https://storage.googleapis.com/goodpods-images-bucket/leaderboard_badges/business_leadership_top10.png",
    alt: "Goodpods Top 10 Leadership Indie Podcasts",
    label: "Top 10 Leadership (Indie)",
  },
  {
    leaderboardUrl:
      "https://goodpods.com/leaderboard/top-100-shows-by-category/business/leadership?indie=false&period=alltime#90606391",
    imgSrc:
      "https://storage.googleapis.com/goodpods-images-bucket/leaderboard_badges/business_leadership_top50.png",
    alt: "Goodpods Top 100 Leadership Podcasts",
    label: "Top 100 Leadership",
  },
  {
    leaderboardUrl:
      "https://goodpods.com/leaderboard/top-100-shows-by-category/business/careers?indie=false&period=alltime#90578432",
    imgSrc:
      "https://storage.googleapis.com/goodpods-images-bucket/leaderboard_badges/business_careers_top50.png",
    alt: "Goodpods Top 100 Careers Podcasts",
    label: "Top 100 Careers",
  },
  {
    leaderboardUrl:
      "https://goodpods.com/leaderboard/top-100-shows-by-category/business/careers?indie=true&period=alltime#90578507",
    imgSrc:
      "https://storage.googleapis.com/goodpods-images-bucket/leaderboard_badges/business_careers_top50.png",
    alt: "Goodpods Top 100 Careers Indie Podcasts",
    label: "Top 100 Careers (Indie)",
  },
  {
    leaderboardUrl:
      "https://goodpods.com/leaderboard/top-100-shows-by-category/business/all-business?indie=true&period=alltime#90579982",
    imgSrc:
      "https://storage.googleapis.com/goodpods-images-bucket/leaderboard_badges/business_all-business_top100.png",
    alt: "Goodpods Top 100 Business Indie Podcasts",
    label: "Top 100 Business (Indie)",
  },
];

// Primary badge used for compact inline contexts
const PRIMARY = BADGES[0];

export function GoodpodsBadge({
  variant = "compact",
  className = "",
}: GoodpodsBadgeProps) {
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());

  const handleError = (src: string) =>
    setFailedSrcs((prev) => new Set(prev).add(src));

  // Inline: single primary badge, small — used in footer / ProofBar
  if (variant === "inline") {
    return (
      <a
        href={PRIMARY.leaderboardUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${className}`}
        aria-label={PRIMARY.alt}
      >
        {failedSrcs.has(PRIMARY.imgSrc) ? (
          <span className="text-[10px] font-mono uppercase tracking-[0.08em] text-text-muted">
            Top 10 Leadership Podcast — Goodpods
          </span>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={PRIMARY.imgSrc}
            alt={PRIMARY.alt}
            width={150}
            height={46}
            onError={() => handleError(PRIMARY.imgSrc)}
          />
        )}
      </a>
    );
  }

  // Compact: all badges in a wrap row + listen link — used on About page
  if (variant === "compact") {
    const visible = BADGES.filter((b) => !failedSrcs.has(b.imgSrc));
    if (visible.length === 0)
      return (
        <div className={className}>
          <a
            href={PODCAST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-text-muted hover:text-pink transition-colors"
          >
            Top 10 Leadership Indie Podcast — Goodpods →
          </a>
        </div>
      );
    return (
      <div className={`flex flex-col items-start gap-3 ${className}`}>
        <div className="flex flex-wrap gap-3">
          {visible.map((badge) => (
            <a
              key={badge.leaderboardUrl}
              href={badge.leaderboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={badge.alt}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={badge.imgSrc}
                alt={badge.alt}
                width={150}
                height={46}
                onError={() => handleError(badge.imgSrc)}
              />
            </a>
          ))}
        </div>
        <a
          href={PODCAST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-text-muted hover:text-pink transition-colors"
        >
          Listen on Goodpods →
        </a>
      </div>
    );
  }

  // Full: all badges in a card grid — used on podcast/landing pages
  const visible = BADGES.filter((b) => !failedSrcs.has(b.imgSrc));
  if (visible.length === 0)
    return (
      <div className={`rounded-xl border border-border bg-surface px-5 py-4 ${className}`}>
        <a
          href={PODCAST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-text-muted hover:text-pink transition-colors"
        >
          Top 10 Leadership Indie Podcast — Goodpods →
        </a>
      </div>
    );
  return (
    <div
      className={`flex flex-col items-start gap-4 rounded-xl border border-border bg-surface px-5 py-4 ${className}`}
    >
      <div className="flex flex-wrap gap-3">
        {visible.map((badge) => (
          <a
            key={badge.leaderboardUrl}
            href={badge.leaderboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={badge.alt}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={badge.imgSrc}
              alt={badge.alt}
              width={200}
              height={62}
              onError={() => handleError(badge.imgSrc)}
            />
          </a>
        ))}
      </div>
      <a
        href={PODCAST_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-mono text-text-muted hover:text-pink transition-colors"
      >
        Listen on Goodpods →
      </a>
    </div>
  );
}
