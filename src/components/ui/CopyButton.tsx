"use client";

import { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className={`ml-2 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide border transition-colors ${
        copied
          ? "border-navy bg-navy text-cream"
          : "border-pink text-pink hover:bg-pink hover:text-white"
      }`}
      aria-label="Copy bio to clipboard"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
