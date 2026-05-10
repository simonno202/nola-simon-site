import { ImageResponse } from "next/og";
import { getPost, getPostSlugs } from "@/lib/blog";
import path from "path";
import fs from "fs";

export const alt = "Nola Simon — Everyday Futurism";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post.displayTitle ?? post.title;

  // If the post has a custom ogImage, serve it directly
  if (post.ogImage) {
    const imgPath = path.join(process.cwd(), "public", post.ogImage.replace(/^\//, ""));
    const imgBuffer = await fs.promises.readFile(imgPath);
    const ext = path.extname(post.ogImage).toLowerCase();
    const mime = ext === ".png" ? "image/png" : "image/jpeg";

    return new Response(imgBuffer, {
      headers: { "Content-Type": mime },
    });
  }

  // Load fonts from local files
  const fontsDir = path.join(process.cwd(), "public", "fonts");
  const [jakartaBold, jetbrainsMono] = await Promise.all([
    fs.promises.readFile(path.join(fontsDir, "jakarta-bold.ttf")),
    fs.promises.readFile(path.join(fontsDir, "jetbrains-mono.ttf")),
  ]);

  const tags = post.tags.length > 0 ? post.tags : post.keywords;
  const displayTags = tags.slice(0, 3);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a1a2e",
          padding: "60px 64px",
          fontFamily: "Jakarta",
        }}
      >
        {/* Top: eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "3px",
              backgroundColor: "#ec4197",
            }}
          />
          <span
            style={{
              fontFamily: "JetBrains",
              fontSize: "14px",
              letterSpacing: "0.14em",
              color: "#ec4197",
              textTransform: "uppercase",
            }}
          >
            Everyday Futurism
          </span>
        </div>

        {/* Middle: title — pushed toward top third */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "920px",
            marginTop: "-80px",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 50 ? "42px" : "52px",
              fontWeight: 700,
              color: "#f5f0e8",
              lineHeight: 1.15,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          {displayTags.length > 0 && (
            <div style={{ display: "flex", gap: "10px" }}>
              {displayTags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "JetBrains",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    color: "#f5f0e8",
                    opacity: 0.7,
                    textTransform: "uppercase",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom: author + site */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <span
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#f5f0e8",
              }}
            >
              Nola Simon
            </span>
            <span
              style={{
                fontFamily: "JetBrains",
                fontSize: "13px",
                color: "#f5f0e8",
                opacity: 0.65,
              }}
            >
              nolasimon.com
            </span>
          </div>

          {/* Accent bar */}
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#ec4197",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Jakarta",
          data: jakartaBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "JetBrains",
          data: jetbrainsMono,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
