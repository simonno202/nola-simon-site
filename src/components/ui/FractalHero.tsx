"use client";

import { useRef, useState, useCallback } from "react";

/**
 * Hero video player — podcast clip with click-to-play.
 * Pink brand accent as background until video loads.
 * Keyboard accessible with ARIA support.
 */
export function FractalHero({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePlay();
    }
  }

  return (
    <div
      className={`w-full h-full rounded-[var(--radius-card)] relative overflow-hidden cursor-pointer group ${className}`}
      style={{ background: "#c9357f" }}
      onClick={togglePlay}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={isPlaying ? "Pause video: Futurism in Daily Life" : "Play video: Futurism in Daily Life"}
    >
      <video
        ref={videoRef}
        src="/futurism-daily-life.mp4"
        className="w-full h-full object-contain"
        playsInline
        preload="metadata"
        aria-label="Podcast clip: Futurism in Daily Life from Mama, What's Next"
        onEnded={() => setIsPlaying(false)}
      />

      {/* Play button overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-navy/30 transition-opacity group-hover:bg-navy/20">
          {/* Play button — centred */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-full bg-pink text-white shadow-lg transition-transform group-hover:scale-110"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Title — bottom, below baked-in captions */}
          <div className="absolute bottom-3 left-0 right-0 flex flex-col items-center gap-0.5">
            <span className="text-white text-sm font-medium drop-shadow-md">
              Futurism in Daily Life
            </span>
            <span className="text-white/80 text-xs drop-shadow-md">
              Mama, What&rsquo;s Next
            </span>
          </div>
        </div>
      )}

      {/* Pause indicator (brief) */}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy/50">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden="true"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default FractalHero;
