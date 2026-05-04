import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "The Trust Signal Quiz — Can You Actually Read a Trust Signal?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          background: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid lines — top-right quadrant */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={`h${i}`}
            style={{
              position: "absolute",
              top: 60 + i * 60,
              right: 0,
              width: 480,
              height: 1,
              background: "rgba(255,255,255,0.04)",
              display: "flex",
            }}
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={`v${i}`}
            style={{
              position: "absolute",
              top: 0,
              right: 60 + i * 60,
              width: 1,
              height: 360,
              background: "rgba(255,255,255,0.04)",
              display: "flex",
            }}
          />
        ))}

        {/* Teal accent block — top right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 6,
            height: 630,
            background: "#00c2b2",
            display: "flex",
          }}
        />

        {/* Pink horizontal rule */}
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: 80,
            width: 640,
            height: 2,
            background: "#ec4197",
            display: "flex",
          }}
        />

        {/* Small teal square accent */}
        <div
          style={{
            position: "absolute",
            bottom: 88,
            left: 80,
            width: 14,
            height: 14,
            background: "#00c2b2",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 80,
            paddingBottom: 40,
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 13,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#ec4197",
              marginBottom: 28,
              display: "flex",
            }}
          >
            Trust · 18 Questions · ~6 Minutes
          </div>

          {/* Title line 1 */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#f5f0e8",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              display: "flex",
            }}
          >
            Can You Actually
          </div>

          {/* Title line 2 */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 72,
              fontWeight: 700,
              color: "#f5f0e8",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginBottom: 36,
              display: "flex",
            }}
          >
            Read a Trust Signal?
          </div>

          {/* Subtext */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 22,
              color: "#888",
              lineHeight: 1.5,
              maxWidth: 700,
              display: "flex",
            }}
          >
            Most trust signals are cooperatively produced. Almost nobody notices.
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            left: 96,
            fontFamily: "monospace",
            fontSize: 13,
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.2)",
            display: "flex",
          }}
        >
          NOLASIMON.COM · EVERYDAY FUTURISM
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
