"use client";

import { useState, useEffect } from "react";
import { CTA_LINK } from "@/data/navigation";

const LEVELS = [
  {
    depth: 1,
    text: "The average job title you're proud of didn't exist 10 years ago.",
    aside: "Keep going.",
  },
  {
    depth: 2,
    text: "Most of what you're afraid of losing hasn't finished being built yet.",
    aside: "Deeper.",
  },
  {
    depth: 3,
    text: "The thing that will disrupt your industry is already in someone's Notes app.",
    aside: "Still falling.",
  },
  {
    depth: 4,
    text: "The status quo isn't stable. It's just slow.",
    aside: "Almost there.",
  },
  {
    depth: 5,
    text: "You don't need a prediction. You need to trust what you already notice.",
    aside: "One more.",
  },
  {
    depth: 6,
    text: "You already knew that. You just needed permission to act on it.",
    aside: null,
  },
];

const BOTTOM = {
  text: "You've reached the bottom.",
  sub: "Most people stop here. A few don't.",
};

interface RabbitHoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RabbitHole({ isOpen, onClose }: RabbitHoleProps) {
  const [depth, setDepth] = useState(0);
  const atBottom = depth >= LEVELS.length;
  const current = LEVELS[depth - 1];

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setDepth(0), 400);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Trap escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/97 backdrop-blur-sm"
      style={{ animation: "fade-in-up 0.3s ease both" }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 font-mono text-[11px] uppercase tracking-[0.14em] text-text-lighter hover:text-cream transition-colors cursor-pointer"
        type="button"
        aria-label="Close"
      >
        Climb out ↑
      </button>

      <div className="max-w-md mx-auto px-8 text-center">
        {depth === 0 && (
          /* Entry screen */
          <div style={{ animation: "fade-in-up 0.4s ease both" }}>
            <div className="text-5xl mb-6" aria-hidden="true">🐇🕳️</div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-pink mb-4">
              The Rabbit Hole
            </p>
            <h2 className="font-sans text-[28px] font-normal text-cream leading-snug mb-4">
              How deep do you want to go?
            </h2>
            <p className="text-[14px] text-text-lighter leading-relaxed mb-10">
              Each click takes you further from the familiar.
            </p>
            <button
              onClick={() => setDepth(1)}
              className="inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3 font-sans text-[14px] font-semibold text-white hover:bg-pink-hover transition-colors cursor-pointer"
              type="button"
            >
              Fall in
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        )}

        {depth > 0 && !atBottom && current && (
          /* Level screen */
          <div key={depth} style={{ animation: "fade-in-up 0.35s ease both" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-lighter/50 mb-8">
              {"·".repeat(depth)} depth {depth} of {LEVELS.length} {"·".repeat(depth)}
            </p>
            <p className="font-sans text-[22px] font-normal text-cream leading-[1.4] mb-10">
              &ldquo;{current.text}&rdquo;
            </p>
            <button
              onClick={() => setDepth((d) => d + 1)}
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-cream/20 px-7 py-3 font-mono text-[12px] text-cream/70 hover:border-pink hover:text-pink transition-all cursor-pointer"
              type="button"
            >
              {current.aside ?? "Keep going"}
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        )}

        {atBottom && (
          /* Bottom screen */
          <div style={{ animation: "fade-in-up 0.35s ease both" }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-lighter/50 mb-8">
              {"·".repeat(LEVELS.length)} bottom {"·".repeat(LEVELS.length)}
            </p>
            <p className="font-sans text-[28px] font-normal text-cream leading-snug mb-3">
              {BOTTOM.text}
            </p>
            <p className="text-[15px] text-text-lighter mb-10">
              {BOTTOM.sub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3 font-sans text-[14px] font-semibold text-white hover:bg-pink-hover transition-colors"
              >
                Book an Intro Consultation
              </a>
              <button
                onClick={onClose}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-lighter hover:text-cream transition-colors cursor-pointer"
                type="button"
              >
                Climb back out ↑
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
