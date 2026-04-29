import type { Metadata } from "next";
import { signals, convergences } from "@/lib/signals";
import { SignalListClient } from "@/components/SignalListClient";
import { ConvergenceSection } from "@/components/ConvergenceSection";

export const metadata: Metadata = {
  title: "Signal Tracker",
  description: "A running record of what I'm watching before it becomes obvious. Signals are patterns at the edge. A rabbit hole in plain sight.",
  alternates: {
    canonical: "https://nolasimon.com/signal-tracker",
  },
  openGraph: {
    type: "website",
    url: "https://nolasimon.com/signal-tracker",
    title: "Signal Tracker — Nola Simon | Everyday Futurism",
    description: "A running record of what I'm watching before it becomes obvious. Signals are patterns at the edge. A rabbit hole in plain sight.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal Tracker — Nola Simon | Everyday Futurism",
    description: "A running record of what I'm watching before it becomes obvious. Signals are patterns at the edge. A rabbit hole in plain sight.",
    images: ["/og-image.jpg"],
  },
};

const mono = { fontFamily: "var(--font-mono)" } as const;
const sans = { fontFamily: "var(--font-sans)" } as const;

function shouldShowConvergence() {
  const c = convergences[0];
  if (!c) return false;
  return c.signals.filter((id) => signals.find((s) => s.id === id)).length >= 3;
}

export default function SignalTrackerPage() {
  const showConvergence = shouldShowConvergence();

  return (
    <>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        button:focus-visible { outline: 2px solid #ec4197; outline-offset: 2px; }
      `}</style>

      <main style={{ minHeight: "100vh", background: "#0d0d0d", padding: "clamp(2.5rem,7vw,5.5rem) clamp(1.25rem,5vw,3.5rem)", maxWidth: "860px", margin: "0 auto" }}>

        <header style={{ marginBottom: "4rem" }}>
          <p style={{ ...mono, fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#ec4197", margin: "0 0 1.25rem 0" }}>
            Nola Simon — Everyday Futurism
          </p>
          <h1 style={{ ...sans, fontSize: "clamp(1.9rem,5vw,2.9rem)", fontWeight: 700, color: "#f5f5f0", margin: "0 0 0.65rem 0", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Signal Tracker
          </h1>
          <p style={{ ...sans, fontSize: "1.1rem", color: "#ec4197", fontStyle: "italic", margin: "0 0 2rem 0" }}>
            A rabbit hole in plain sight.
          </p>
          <div style={{ maxWidth: "58ch", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem" }}>
            <p style={{ ...sans, fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: "0 0 1.1rem 0" }}>
              Periodic snapshots of what I'm watching before it becomes obvious.
            </p>
            <p style={{ ...sans, fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: "0 0 1.1rem 0" }}>
              Signals are patterns at the edge. By the time something is a trend, the window for a different choice has usually closed.
            </p>
            <p style={{ ...sans, fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, margin: "0 0 1.1rem 0" }}>
              This list is public because findability is its own argument. I'm not promoting it.
            </p>
            <p style={{ ...sans, fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>
              Some of what's here is uncomfortable to say. I've noted where. If reading it makes something tighten in you — sit with that. That's where the work starts.
            </p>
          </div>
        </header>

        <SignalListClient signals={signals} />

        {showConvergence && <ConvergenceSection convergence={convergences[0]} />}

        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", marginTop: "4rem" }}>
          <p style={{ ...mono, fontSize: "0.66rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.08em", margin: 0 }}>
            Updated by Nola Simon. The future isn't predicted. It's practiced.
          </p>
        </footer>
      </main>
    </>
  );
}
