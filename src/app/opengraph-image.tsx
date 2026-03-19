import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Nola Simon — Futurist & Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/jpeg";

export default async function Image() {
  const photoData = await readFile(
    join(process.cwd(), "public/images/nola-pink.jpg"),
  );
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          background: "#1a1a2e",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Pink geometric accent — top-left corner */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "#c9357f",
            opacity: 0.15,
            display: "flex",
          }}
        />

        {/* Teal geometric accent — bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: 200,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "#00b4d8",
            opacity: 0.12,
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 80,
            paddingRight: 60,
            width: 620,
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 13,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c9357f",
              marginBottom: 20,
              display: "flex",
            }}
          >
            FUTURIST &amp; RESEARCHER
          </div>

          {/* Name */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 68,
              fontWeight: 700,
              color: "#f5f0e8",
              lineHeight: 1.05,
              marginBottom: 28,
              display: "flex",
              flexDirection: "column",
            }}
          >
            Nola Simon
          </div>

          {/* Divider */}
          <div
            style={{
              width: 48,
              height: 3,
              background: "#c9357f",
              borderRadius: 2,
              marginBottom: 28,
              display: "flex",
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 22,
              color: "#c8c8b8",
              lineHeight: 1.45,
              maxWidth: 460,
              display: "flex",
            }}
          >
            The future isn&apos;t predicted. It&apos;s practiced.
          </div>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 36,
              gap: 12,
            }}
          >
            <div
              style={{
                fontFamily: "sans-serif",
                fontSize: 14,
                fontWeight: 600,
                color: "#f5f0e8",
                background: "#c9357f",
                borderRadius: 24,
                padding: "8px 20px",
                display: "flex",
              }}
            >
              Book a Consultation
            </div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 13,
                color: "#7a7a6a",
                letterSpacing: "0.05em",
                display: "flex",
              }}
            >
              nolasimon.com
            </div>
          </div>
        </div>

        {/* Photo — right side */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 560,
            height: 630,
            display: "flex",
          }}
        >
          {/* Gradient fade on left edge of photo */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 120,
              height: 630,
              background: "linear-gradient(to right, #1a1a2e, transparent)",
              zIndex: 2,
              display: "flex",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
