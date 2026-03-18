"use client";

import { useState } from "react";
import { CTA_LINK } from "@/data/navigation";

type NodeId = "start" | "how-you-learn";

interface Choice {
  label: string;
  sub?: string;
  next?: NodeId;
  href?: string;
  external?: boolean;
}

interface Node {
  question: string;
  choices: Choice[];
}

const TREE: Record<NodeId, Node> = {
  start: {
    question: "What's true right now?",
    choices: [
      {
        label: "I have a real challenge that needs a futurist's lens.",
        sub: "Strategic advisory or speaking",
        href: CTA_LINK,
        external: true,
      },
      {
        label: "I want to hear how Nola actually thinks.",
        sub: "Essays, episodes, and ideas",
        next: "how-you-learn",
      },
      {
        label: "I'm a journalist, event organizer, or booker.",
        sub: "Media kit, bio, and press",
        href: "/media",
      },
      {
        label: "Gotta love a side quest.",
        sub: "Just exploring — totally valid",
        href: "/",
      },
    ],
  },
  "how-you-learn": {
    question: "How do you like to take in new ideas?",
    choices: [
      {
        label: "I listen — give me a podcast.",
        sub: "Hope + Possibilities",
        href: "/podcast",
      },
      {
        label: "I read. Show me the work.",
        sub: "Writing, audio, video",
        href: "/work",
      },
      {
        label: "I want to understand what she does.",
        sub: "Start with the about page",
        href: "/about",
      },
    ],
  },
};

export function AdventureNav() {
  const [current, setCurrent] = useState<NodeId>("start");
  const node = TREE[current];

  return (
    <div className="mt-12 max-w-lg mx-auto text-left">
      {/* Step label */}
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-lighter mb-3">
        {current === "start" ? "Turn to which page?" : "One more question"}
      </p>

      {/* Question */}
      <p className="text-[17px] font-semibold text-navy mb-5">
        {node.question}
      </p>

      {/* Choices */}
      <div className="flex flex-col gap-3">
        {node.choices.map((choice) => {
          const isExternal = choice.external;
          const Tag = choice.href ? "a" : "button";

          const commonProps = {
            className:
              "group flex items-start gap-4 rounded-xl border-[1.5px] border-border-medium bg-cream hover:border-pink hover:bg-surface-hover transition-all px-5 py-4 text-left w-full cursor-pointer",
            ...(choice.href
              ? {
                  href: choice.href,
                  ...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {}),
                }
              : {
                  onClick: () => choice.next && setCurrent(choice.next),
                  type: "button" as const,
                }),
          };

          return (
            // @ts-expect-error — dynamic tag
            <Tag key={choice.label} {...commonProps}>
              {/* Arrow */}
              <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[1.5px] border-border-strong text-text-muted transition-all group-hover:border-pink group-hover:bg-pink group-hover:text-white">
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span>
                <span className="block text-[14px] font-medium text-navy">
                  {choice.label}
                </span>
                {choice.sub && (
                  <span className="block text-[11.5px] font-mono text-text-muted mt-0.5">
                    {choice.sub}
                  </span>
                )}
              </span>
            </Tag>
          );
        })}
      </div>

      {/* Back button */}
      {current !== "start" && (
        <button
          onClick={() => setCurrent("start")}
          className="mt-5 flex items-center gap-1.5 font-mono text-[11px] text-text-muted hover:text-pink transition-colors cursor-pointer"
          type="button"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M8 2L2 8M2 8h5M2 8V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Start over
        </button>
      )}
    </div>
  );
}
