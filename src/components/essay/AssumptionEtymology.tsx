"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const ETYMOLOGY = [
  {
    word: "ASSUMPTION",
    era: "present day",
    definition:
      "a thing accepted as true or certain to happen, without proof — present in every strategy, every forecast, every decision",
  },
  {
    word: "ASSUMPTION",
    era: "Early Modern English, ~1620s",
    definition:
      "something taken for granted, without question — the moment the word slipped from evidence into belief",
  },
  {
    word: "ASSUMPCION",
    era: "Old French, 13th century",
    definition:
      "a taking up; a receiving — something lifted and carried forward, without questioning what was picked up or why",
  },
  {
    word: "ASSUMERE",
    era: "Classical Latin",
    definition: "to take to oneself; to appropriate — an act of claiming, not of proving",
  },
  {
    word: "SUMERE",
    era: "root",
    definition: null,
  },
];

const TOTAL_POINTS = 300;
const STOP_FRACTIONS = [0, 0.2, 0.42, 0.66, 1.0];
const HOLD_DURATION = 2800;
const ANIM_DURATION = 900;

function getSpiralPoints(
  n: number,
  turns = 2.2,
  outerR = 140,
  innerR = 12
): { x: number; y: number }[] {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const angle = t * turns * 2 * Math.PI - Math.PI / 2;
    const r = outerR - (outerR - innerR) * t;
    pts.push({ x: r * Math.cos(angle), y: r * Math.sin(angle) });
  }
  return pts;
}

const SPIRAL_PTS = getSpiralPoints(TOTAL_POINTS);

function getStopIdx(stop: number): number {
  return Math.round(STOP_FRACTIONS[stop] * (TOTAL_POINTS - 1));
}

function getDotPos(progress: number): { x: number; y: number } {
  const idx = Math.min(Math.round(progress * (TOTAL_POINTS - 1)), TOTAL_POINTS - 1);
  return SPIRAL_PTS[idx];
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export function AssumptionEtymology() {
  const [activeStop, setActiveStop] = useState(0);
  const [dotProgress, setDotProgress] = useState(0);
  const [labelVisible, setLabelVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  const animRef = useRef<number | null>(null);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dotProgressRef = useRef(0);

  const goTo = useCallback((nextStop: number) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (autoRef.current) clearTimeout(autoRef.current);

    setLabelVisible(false);
    setTimeout(() => setLabelVisible(true), 150);

    const startProgress = dotProgressRef.current;
    const endProgress = getStopIdx(nextStop) / (TOTAL_POINTS - 1);
    const startTime = performance.now();

    setActiveStop(nextStop);

    function frame(now: number) {
      const t = Math.min((now - startTime) / ANIM_DURATION, 1);
      const eased = easeInOut(t);
      const current = startProgress + (endProgress - startProgress) * eased;
      dotProgressRef.current = current;
      setDotProgress(current);
      if (t < 1) {
        animRef.current = requestAnimationFrame(frame);
      } else {
        dotProgressRef.current = endProgress;
        setDotProgress(endProgress);
      }
    }

    animRef.current = requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (paused) return;
    autoRef.current = setTimeout(() => {
      const next = activeStop < ETYMOLOGY.length - 1 ? activeStop + 1 : 0;
      goTo(next);
    }, HOLD_DURATION);
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current);
    };
  }, [activeStop, paused, goTo]);

  const isRoot = activeStop === ETYMOLOGY.length - 1;
  const current = ETYMOLOGY[activeStop];
  const progressIdx = Math.round(dotProgress * (TOTAL_POINTS - 1));
  const traveled = SPIRAL_PTS.slice(0, progressIdx + 1);
  const remaining = SPIRAL_PTS.slice(progressIdx);
  const dotPos = getDotPos(dotProgress);

  const toPoints = (pts: { x: number; y: number }[]) =>
    pts.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div
      style={{
        background: "#0e0e10",
        borderRadius: 16,
        padding: "28px 20px 20px",
        maxWidth: 520,
        margin: "48px auto",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        userSelect: "none",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            letterSpacing: "0.18em",
            color: "#888",
            textTransform: "uppercase",
          }}
        >
          Under the rocks are the words
        </span>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 11,
            color: "#888",
            letterSpacing: "0.1em",
          }}
        >
          {activeStop + 1}/{ETYMOLOGY.length}
        </span>
      </div>
      <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 20 }} />

      {/* Spiral */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
        <svg viewBox="-160 -160 320 320" width="100%" style={{ maxWidth: 300 }}>
          <defs>
            <filter id="glow-ef">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {remaining.length > 1 && (
            <polyline
              points={toPoints(remaining)}
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          )}
          {traveled.length > 1 && (
            <polyline
              points={toPoints(traveled)}
              fill="none"
              stroke={isRoot ? "#ec4197" : "rgba(255,255,255,0.55)"}
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{ transition: "stroke 0.4s ease" }}
            />
          )}

          {ETYMOLOGY.map((_, i) => {
            if (i === activeStop) return null;
            const pt = SPIRAL_PTS[getStopIdx(i)];
            return (
              <circle
                key={i}
                cx={pt.x}
                cy={pt.y}
                r={2.5}
                fill={i < activeStop ? "#ec4197" : "rgba(255,255,255,0.2)"}
                style={{ transition: "fill 0.3s ease" }}
              />
            );
          })}

          {isRoot && (
            <circle
              cx={dotPos.x}
              cy={dotPos.y}
              r={18}
              fill="none"
              stroke="#ec4197"
              strokeWidth="1"
              opacity="0.25"
            >
              <animate attributeName="r" values="14;26" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0" dur="1.8s" repeatCount="indefinite" />
            </circle>
          )}

          <circle
            cx={dotPos.x}
            cy={dotPos.y}
            r={isRoot ? 10 : 8}
            fill={isRoot ? "#ec4197" : "#ffffff"}
            filter={isRoot ? "url(#glow-ef)" : undefined}
            style={{ transition: "r 0.4s ease, fill 0.4s ease" }}
          />
        </svg>
      </div>

      {/* Word + definition */}
      <div
        style={{
          textAlign: "center",
          minHeight: 150,
          transition: "opacity 0.15s ease",
          opacity: labelVisible ? 1 : 0,
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: isRoot ? 42 : 32,
            letterSpacing: "0.06em",
            color: isRoot ? "#ec4197" : "#ffffff",
            marginBottom: 4,
            transition: "font-size 0.3s ease, color 0.3s ease",
          }}
        >
          {current.word}
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 12,
            color: "#888",
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}
        >
          ({current.era})
        </div>
        <div
          style={{
            fontWeight: 400,
            fontSize: 17,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.75,
            maxWidth: 340,
            margin: "0 auto",
          }}
        >
          {isRoot ? (
            <>
              <span style={{ color: "#ec4197", fontWeight: 600, fontSize: 20 }}>to take</span>
              <br />
              <span
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.65)",
                  display: "block",
                  marginTop: 14,
                  lineHeight: 1.85,
                }}
              >
                Sometimes acting on an assumption is exactly right. Survival depends on it.
                <br />
                <br />
                But most of us aren&rsquo;t outrunning predators. Before the budget is committed,
                before the direction is set, before the strategy is locked &mdash; you have time.
                <br />
                <br />
                <span style={{ color: "#ec4197", fontWeight: 600 }}>Use it.</span>
              </span>
            </>
          ) : (
            current.definition
          )}
        </div>
      </div>

      {/* Nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 24,
          paddingTop: 16,
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <button
          onClick={() => {
            if (activeStop > 0) goTo(activeStop - 1);
          }}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            color: activeStop === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.6)",
            fontFamily: "monospace",
            fontSize: 12,
            letterSpacing: "0.12em",
            padding: "10px 20px",
            cursor: activeStop === 0 ? "default" : "pointer",
          }}
        >
          &larr; BACK
        </button>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 6 }}>
            {ETYMOLOGY.map((_, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === activeStop ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  background:
                    i === activeStop
                      ? "#ec4197"
                      : i < activeStop
                      ? "rgba(236,65,151,0.35)"
                      : "rgba(255,255,255,0.15)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setPaused((p) => !p)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.3)",
              fontFamily: "monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              cursor: "pointer",
              padding: "2px 0",
            }}
          >
            {paused ? "▶ AUTO" : "⏸ PAUSE"}
          </button>
        </div>

        <button
          onClick={() => {
            if (activeStop < ETYMOLOGY.length - 1) goTo(activeStop + 1);
          }}
          style={{
            background: activeStop === ETYMOLOGY.length - 1 ? "none" : "#ec4197",
            border: "1px solid",
            borderColor:
              activeStop === ETYMOLOGY.length - 1 ? "rgba(255,255,255,0.15)" : "#ec4197",
            color: activeStop === ETYMOLOGY.length - 1 ? "rgba(255,255,255,0.15)" : "#fff",
            fontFamily: "monospace",
            fontSize: 12,
            letterSpacing: "0.12em",
            padding: "10px 20px",
            cursor: activeStop === ETYMOLOGY.length - 1 ? "default" : "pointer",
          }}
        >
          NEXT &rarr;
        </button>
      </div>

      {/* Brand */}
      <div
        style={{
          marginTop: 20,
          textAlign: "center",
          fontWeight: 400,
          fontSize: 11,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.2em",
        }}
      >
        EVERYDAY FUTURISM
      </div>
    </div>
  );
}
