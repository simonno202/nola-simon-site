"use client";

import { useState } from "react";

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Lazy-loaded YouTube embed — shows a branded thumbnail with play button,
 * loads the iframe only on click. No bandwidth cost until the visitor wants it.
 */
export function VideoEmbed({
  youtubeId,
  title,
  subtitle,
  className = "",
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div
      className={`relative w-full aspect-[9/16] max-w-[320px] rounded-[var(--radius-card)] overflow-hidden ${className}`}
      style={{ background: "#ec4197" }}
    >
      {isLoaded ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          style={{ border: "none" }}
        />
      ) : (
        <button
          onClick={() => setIsLoaded(true)}
          className="group w-full h-full cursor-pointer relative"
          aria-label={`Play ${title}`}
        >
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-navy/30 transition-colors group-hover:bg-navy/20">
            {/* Play button — centred */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-pink text-white shadow-lg transition-transform group-hover:scale-110">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Title — bottom, below baked-in captions */}
            <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-0.5 px-4">
              <span className="text-white text-sm font-medium drop-shadow-md text-center">
                {title}
              </span>
              {subtitle && (
                <span className="text-white/70 text-xs drop-shadow-md text-center">
                  {subtitle}
                </span>
              )}
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

export default VideoEmbed;
