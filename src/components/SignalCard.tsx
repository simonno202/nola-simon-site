"use client";

import { useState } from "react";
import type { Signal } from "@/lib/signals";

const statusColors = {
  active: "#ec4197",
  emerging: "#f0a500",
  resolved: "#6b7280",
  breaking: "#ff3333",
};

const statusLabels = {
  active: "Active",
  emerging: "Emerging",
  resolved: "Resolved",
  breaking: "Breaking",
};

const mono = { fontFamily: "var(--font-mono)" } as const;
const sans = { fontFamily: "var(--font-sans)" } as const;

interface SignalCardProps {
  signal: Signal;
  allSignals: Signal[];
  onConnectionClick: (id: string) => void;
}

export function SignalCard({ signal, allSignals, onConnectionClick }: SignalCardProps) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const tensionId = `tension-${signal.id}`;
  const related = allSignals.filter((s) => signal.relatedTo?.includes(s.id));

  return (
    <article style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "2.5rem 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
        <span style={{ ...mono, fontSize: "0.7rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" as const }}>
          {signal.date}
        </span>
        <span
          aria-label={`Status: ${statusLabels[signal.status]}`}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", ...mono, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: statusColors[signal.status] }}
        >
          <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: statusColors[signal.status], display: "inline-block", willChange: "opacity" as const, animation: signal.status === "active" ? "pulse 2s infinite" : "none" }} />
          <span aria-hidden="true">{statusLabels[signal.status]}</span>
        </span>
      </div>

      <h2 style={{ ...sans, fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)", fontWeight: 600, color: "#f5f5f0", lineHeight: 1.3, margin: "0 0 0.75rem 0", letterSpacing: "-0.01em" }}>
        {signal.signal}
      </h2>

      <p style={{ ...mono, fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", margin: "0 0 1.25rem 0", letterSpacing: "0.05em" }}>
        First noticed — {signal.origin}
      </p>

      <p style={{ ...sans, fontSize: "0.93rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: "0 0 1.25rem 0", maxWidth: "70ch" }}>
        {signal.evidence}
      </p>

      <p style={{ ...sans, fontSize: "0.93rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.75, margin: "0 0 1.5rem 0", maxWidth: "70ch", borderLeft: "2px solid #ec4197", paddingLeft: "1.25rem" }}>
        {signal.read}
      </p>

      {related.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem", marginBottom: "1.25rem", alignItems: "center" }}>
          <span style={{ ...mono, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.3)" }}>
            In conversation with →
          </span>
          {related.map((r) => (
            <button
              key={r.id}
              onClick={() => onConnectionClick(r.id)}
              style={{ background: "rgba(236,65,151,0.06)", border: "1px solid rgba(236,65,151,0.2)", borderRadius: "2px", padding: "0.2rem 0.6rem", ...mono, fontSize: "0.6rem", letterSpacing: "0.06em", color: "#ec4197", cursor: "pointer", transition: "all 0.15s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(236,65,151,0.14)"; e.currentTarget.style.borderColor = "#ec4197"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(236,65,151,0.06)"; e.currentTarget.style.borderColor = "rgba(236,65,151,0.2)"; }}
            >
              {r.signal.length > 44 ? r.signal.slice(0, 44) + "…" : r.signal}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={tensionId}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ background: hovered ? "rgba(236,65,151,0.08)" : "none", border: `1px solid ${hovered ? "#ec4197" : "rgba(236,65,151,0.3)"}`, borderRadius: "2px", padding: "0.45rem 0.9rem", ...mono, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#ec4197", cursor: "pointer", transition: "all 0.2s ease", marginBottom: open ? "1.5rem" : 0 }}
      >
        {open ? "— Close" : "+ The tension"}
      </button>

      <div id={tensionId} role="region" aria-label="Tension and reflection" hidden={!open}
        style={{ borderTop: open ? "1px solid rgba(255,255,255,0.06)" : "none", paddingTop: open ? "1.5rem" : 0, animation: open ? "fadeIn 0.3s ease" : "none" }}>
        <p style={{ ...sans, fontSize: "0.93rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: "0 0 1.75rem 0", maxWidth: "70ch" }}>
          {signal.tension}
        </p>
        <div style={{ background: "rgba(236,65,151,0.05)", border: "1px solid rgba(236,65,151,0.15)", borderRadius: "2px", padding: "1.25rem", maxWidth: "66ch" }}>
          <p style={{ ...mono, fontSize: "0.63rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#ec4197", margin: "0 0 0.6rem 0" }}>Reflect</p>
          <p style={{ ...sans, fontSize: "0.93rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
            {signal.question}
          </p>
        </div>
      </div>
    </article>
  );
}
