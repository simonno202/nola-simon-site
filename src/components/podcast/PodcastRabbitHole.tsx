"use client";

import { useState } from "react";
import { RabbitHole } from "@/components/ui/RabbitHole";

export function PodcastRabbitHole() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="mt-8 text-[22px] opacity-20 hover:opacity-80 transition-opacity cursor-pointer"
        aria-label="Find the rabbit hole"
        title="🐇"
      >
        🐇🕳️
      </button>
      <RabbitHole isOpen={open} onClose={() => setOpen(false)} livingLab />
    </>
  );
}
