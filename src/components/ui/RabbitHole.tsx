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

// Eggs scattered at each depth — more appear as you go deeper
const EASTER_DECORATIONS: Record<number, string> = {
  0: "🥚",                          // entry
  1: "🐰",
  2: "🥚 🥚",
  3: "🐰 🥚",
  4: "🥚 🐰 🥚",
  5: "🐰 🥚 🥚 🐰",
  6: "🥚 🐰 🥚 🐰 🥚",             // bottom
};

const EASTER_LEVELS = [
  {
    depth: 1,
    text: "Trust has never been fixed. It shifts as the conditions that make cooperation possible change.",
    aside: "Deeper.",
  },
  {
    depth: 2,
    text: "The purchased byline. The approved case study. The coordinated blurb. All cooperatively produced. All wearing the clothes of independent verification.",
    aside: "Still falling.",
  },
  {
    depth: 3,
    text: "Distributed trust was supposed to democratize credibility. What it mostly built was a more sophisticated system for manufacturing it.",
    aside: "Keep going.",
  },
  {
    depth: 4,
    text: "The rating stopped meaning excellent. It started meaning I didn't have a problem worth escalating. The signal didn't just weaken. It inverted.",
    aside: "Almost there.",
  },
  {
    depth: 5,
    text: "What can't be manufactured is the signal that didn't require anyone's cooperation to exist. An independent observer noticing something. Those are rare. That's the point.",
    aside: "One more.",
  },
  {
    depth: 6,
    text: "You've been running this analysis on every conversation you've ever had. You just haven't had language for it. Until now.",
    aside: null,
  },
];

const EASTER_BOTTOM = {
  text: "You followed the rabbit all the way down.",
  sub: "The essay builds the argument. The quiz makes you do it.",
};

interface RabbitHoleProps {
  isOpen: boolean;
  onClose: () => void;
  easter?: boolean;
}

export function RabbitHole({ isOpen, onClose, easter = false }: RabbitHoleProps) {
  const levels = easter ? EASTER_LEVELS : LEVELS;
  const bottom = easter ? EASTER_BOTTOM : BOTTOM;
  const [depth, setDepth] = useState(0);
  const atBottom = depth >= levels.length;
  const current = levels[depth - 1];

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
            <div className="text-5xl mb-6" aria-hidden="true">
              {easter ? EASTER_DECORATIONS[0] : "🐇🕳️"}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-pink mb-4">
              {easter ? "Easter Egg" : "The Rabbit Hole"}
            </p>
            <h2 className="font-sans text-[28px] font-normal text-cream leading-snug mb-4">
              {easter ? "You found one." : "How deep do you want to go?"}
            </h2>
            <p className="text-[14px] text-text-lighter leading-relaxed mb-10">
              {easter
                ? "Most people walk right past this. You didn't. That's already a signal."
                : "Each click takes you further from the familiar."}
            </p>
            <button
              onClick={() => setDepth(1)}
              className="inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3 font-sans text-[14px] font-semibold text-white hover:bg-pink-hover transition-colors cursor-pointer"
              type="button"
            >
              {easter ? "Follow the rabbit" : "Fall in"}
              <span aria-hidden="true">↓</span>
            </button>
          </div>
        )}

        {depth > 0 && !atBottom && current && (
          /* Level screen */
          <div key={depth} style={{ animation: "fade-in-up 0.35s ease both" }}>
            {easter && (
              <div className="text-2xl mb-6 tracking-widest" aria-hidden="true">
                {EASTER_DECORATIONS[depth]}
              </div>
            )}
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-lighter/50 mb-8">
              {"·".repeat(depth)} depth {depth} of {levels.length} {"·".repeat(depth)}
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
            {easter && (
              <div className="text-2xl mb-6 tracking-widest" aria-hidden="true">
                {EASTER_DECORATIONS[6]}
              </div>
            )}
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-lighter/50 mb-8">
              {"·".repeat(levels.length)} bottom {"·".repeat(levels.length)}
            </p>
            <p className="font-sans text-[28px] font-normal text-cream leading-snug mb-3">
              {bottom.text}
            </p>
            <p className="text-[15px] text-text-lighter mb-10">
              {bottom.sub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {easter ? (
                <>
                  <a
                    href="/blog/who-gets-to-be-trusted-now"
                    className="inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3 font-sans text-[14px] font-semibold text-white hover:bg-pink-hover transition-colors"
                  >
                    Read the essay
                  </a>
                  <a
                    href="/trust-signal-quiz.html"
                    className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-cream/30 px-7 py-3 font-sans text-[14px] font-semibold text-cream hover:border-pink hover:text-pink transition-all"
                  >
                    Take the quiz
                  </a>
                </>
              ) : (
                <a
                  href={CTA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3 font-sans text-[14px] font-semibold text-white hover:bg-pink-hover transition-colors"
                >
                  Book an Intro Consultation
                </a>
              )}
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
