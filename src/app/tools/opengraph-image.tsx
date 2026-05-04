import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Tools — Free instruments for the pre-adoption stage of change";
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
        {/* Subtle grid — bottom right quadrant */}
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={`h${i}`}
            style={{
              position: "absolute",
              bottom: 80 + i * 80,
              right: 0,
              width: 520,
              height: 1,
              background: "rgba(255,255,255,0.04)",
              display: "flex",
            }}
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={`v${i}`}
            style={{
              position: "absolute",
              bottom: 0,
              right: 60 + i * 75,
              width: 1,
              height: 420,
              background: "rgba(255,255,255,0.04)",
              display: "flex",
            }}
          />
        ))}

        {/* Teal accent bar — left edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: 630,
            background: "#00c2b2",
            display: "flex",
          }}
        />

        {/* Three tool dots — stacked right side */}
        <div
          style={{
            position: "absolute",
            right: 120,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {[
            { label: "Stability", color: "#00c2b2" },
            { label: "Trust", color: "#ec4197" },
            { label: "Signal", color: "#f5c518" },
          ].map(({ label, color }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  background: color,
                  display: "flex",
                }}
              />
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 13,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  display: "flex",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 80,
            paddingBottom: 40,
            maxWidth: 820,
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
            Everyday Futurism · Free Tools
          </div>

          {/* Title */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 68,
              fontWeight: 700,
              color: "#f5f0e8",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              marginBottom: 32,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Tools for the moment</span>
            <span style={{ display: "flex" }}>before the decision.</span>
          </div>

          {/* Subtext */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 21,
              color: "#666",
              lineHeight: 1.55,
              maxWidth: 660,
              display: "flex",
            }}
          >
            Before the direction sets. Before the assumption becomes load-bearing.
          </div>
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            left: 86,
            fontFamily: "monospace",
            fontSize: 13,
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.2)",
            display: "flex",
          }}
        >
          NOLASIMON.COM · EVERYDAY FUTURISM
        </div>

        {/* Pink bottom rule */}
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: 80,
            width: 560,
            height: 2,
            background: "#ec4197",
            display: "flex",
          }}
        />
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
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
