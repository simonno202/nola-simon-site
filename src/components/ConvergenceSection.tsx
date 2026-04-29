"use client";

import { useState } from "react";
import type { Convergence } from "@/lib/signals";

const statusColors = { active: "#ec4197", emerging: "#f0a500", resolved: "#6b7280", breaking: "#ff3333" };
const statusLabels = { active: "Active", emerging: "Emerging", resolved: "Resolved", breaking: "Breaking" };
const mono = { fontFamily: "var(--font-mono)" } as const;
const sans = { fontFamily: "var(--font-sans)" } as const;

const phases = ["convergence", "theFlip", "theCrack", "theEmptyRoom", "theSurveillance", "theWitness", "theReframe", "witnessedTrust", "question"] as const;
const phaseLabels = ["The convergence", "The flip", "The crack", "The empty room", "The surveillance", "The witness", "The reframe", "Witnessed Trust", "Reflect"];

type PhaseKey = typeof phases[number];

export function ConvergenceSection({ convergence }: { convergence: Convergence }) {
  const [phase, setPhase] = useState(0);

  return (
    <section style={{ marginTop: "5rem", borderTop: "1px solid rgba(236,65,151,0.3)", paddingTop: "3rem" }}>
      <p style={{ ...mono, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#ec4197", margin: "0 0 1rem 0" }}>
        Convergence — {convergence.date}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: statusColors[convergence.status], display: "inline-block", animation: "pulse 2s infinite", willChange: "opacity" as const }} />
        <span style={{ ...mono, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: statusColors[convergence.status] }}>
          {statusLabels[convergence.status]}
        </span>
      </div>
      <h2 style={{ ...sans, fontSize: "clamp(1.3rem, 3.5vw, 1.9rem)", fontWeight: 700, color: "#f5f5f0", lineHeight: 1.2, margin: "0 0 2.5rem 0", letterSpacing: "-0.02em", maxWidth: "26ch" }}>
        {convergence.title}
      </h2>

      <div style={{ maxWidth: "70ch" }}>
        {phases.slice(0, phase + 1).map((key, i) => (
          <div key={key} style={{ marginBottom: "2rem", animation: "fadeIn 0.4s ease" }}>
            <p style={{ ...mono, fontSize: "0.63rem", letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#ec4197", margin: "0 0 0.6rem 0" }}>
              {phaseLabels[i]}
            </p>

            {key === "witnessedTrust" && (
              <div style={{ border: "1px solid rgba(236,65,151,0.25)", borderRadius: "2px", padding: "1.5rem", background: "rgba(236,65,151,0.03)" }}>
                {convergence.witnessedTrust.split("\n\n").map((line, li) => (
                  <p key={li} style={{ ...sans, fontSize: "0.93rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, margin: "0 0 0.85rem 0", fontStyle: "italic" }}>
                    {line}
                  </p>
                ))}
              </div>
            )}

            {key === "question" && (
              <div>
                <div style={{ background: "rgba(236,65,151,0.05)", border: "1px solid rgba(236,65,151,0.15)", borderRadius: "2px", padding: "1.25rem", marginBottom: "1.5rem" }}>
                  <p style={{ ...sans, fontSize: "0.95rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.85, margin: 0, fontStyle: "italic", fontWeight: 500 }}>
                    {convergence.question}
                  </p>
                </div>
                <div style={{ borderLeft: "2px solid rgba(236,65,151,0.6)", paddingLeft: "1.25rem" }}>
                  {convergence.question2.split("\n\n").map((line, qi) => {
                    const isLast = qi === convergence.question2.split("\n\n").length - 1;
                    return (
                      <p key={qi} style={{ ...sans, fontSize: isLast ? "1rem" : "0.9rem", color: isLast ? "#f5f5f0" : "rgba(255,255,255,0.6)", lineHeight: 1.75, margin: "0 0 0.85rem 0", fontStyle: "italic", fontWeight: isLast ? 600 : 400, letterSpacing: isLast ? "-0.01em" : "normal" }}>
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}

            {key !== "witnessedTrust" && key !== "question" && (
              <p style={{
                ...sans,
                fontSize: "0.93rem",
                color: (key === "theFlip" || key === "theReframe") ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.65)",
                lineHeight: 1.8,
                margin: 0,
                ...((key === "theFlip" || key === "theReframe") ? { borderLeft: "2px solid #ec4197", paddingLeft: "1.25rem" } : {}),
              }}>
                {convergence[key as PhaseKey]}
              </p>
            )}
          </div>
        ))}

        {phase < phases.length - 1 && (
          <button
            onClick={() => setPhase((p) => p + 1)}
            style={{ background: "none", border: "1px solid rgba(236,65,151,0.3)", borderRadius: "2px", padding: "0.55rem 1.1rem", ...mono, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#ec4197", cursor: "pointer", transition: "all 0.2s ease", marginTop: "0.5rem" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(236,65,151,0.08)"; e.currentTarget.style.borderColor = "#ec4197"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.borderColor = "rgba(236,65,151,0.3)"; }}
          >
            + {phaseLabels[phase + 1]}
          </button>
        )}
      </div>
    </section>
  );
}
