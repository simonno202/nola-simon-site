"use client";

import { useState } from "react";

type BadgeVariant = "full" | "compact" | "inline";

interface GoodpodsBadgeProps {
  variant?: BadgeVariant;
  className?: string;
}

const LEADERBOARD_URL =
  "https://goodpods.com/leaderboard/top-100-shows-by-category/business/leadership?indie=true&period=alltime#89311393";
const PODCAST_URL =
  "https://goodpods.com/podcasts/hope-possibilties-a-love-letter-to-the-future-of-work-198061";
const BADGE_SRC =
  "https://storage.googleapis.com/goodpods-images-bucket/leaderboard_badges/business_leadership_top10.png";
const BADGE_ALT = "Goodpods Top 100 Leadership Indie Podcasts";

export function GoodpodsBadge({
  variant = "compact",
  className = "",
}: GoodpodsBadgeProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) return null;

  if (variant === "inline") {
    return (
      <a
        href={LEADERBOARD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block ${className}`}
        aria-label={BADGE_ALT}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BADGE_SRC}
          alt={BADGE_ALT}
          width={150}
          height={46}
          onError={() => setImgError(true)}
        />
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`flex flex-col items-start gap-2 ${className}`}>
        <a
          href={LEADERBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={BADGE_ALT}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BADGE_SRC}
            alt={BADGE_ALT}
            width={200}
            height={62}
            onError={() => setImgError(true)}
          />
        </a>
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

  // variant === "full"
  return (
    <div
      className={`flex flex-col items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4 ${className}`}
    >
      <a
        href={LEADERBOARD_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={BADGE_ALT}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={BADGE_SRC}
          alt={BADGE_ALT}
          width={250}
          height={77}
          onError={() => setImgError(true)}
        />
      </a>
      <div className="flex flex-col gap-1">
        <a
          href={LEADERBOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-navy hover:text-pink transition-colors"
        >
          Goodpods Top 100 Leadership Indie Podcasts
        </a>
        <a
          href={PODCAST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-text-muted hover:text-pink transition-colors"
        >
          Listen on Goodpods →
        </a>
      </div>
    </div>
  );
}
