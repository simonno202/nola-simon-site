"use client";

import { useRef } from "react";
import { SignalCard } from "@/components/SignalCard";
import type { Signal } from "@/lib/signals";

export function SignalListClient({ signals }: { signals: Signal[] }) {
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSignal = (id: string) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section aria-label="Signal entries">
      {signals.length === 0 ? (
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
          No signals logged yet.
        </p>
      ) : (
        signals.map((signal) => (
          <div key={signal.id} ref={(el) => { refs.current[signal.id] = el; }}>
            <SignalCard
              signal={signal}
              allSignals={signals}
              onConnectionClick={scrollToSignal}
            />
          </div>
        ))
      )}
    </section>
  );
}
