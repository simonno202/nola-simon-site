import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Run the Assumption-Ground Audit — Nola Simon | Everyday Futurism",
  description:
    "A guided conversation that surfaces the hidden assumption doing the most load-bearing work underneath your next commitment — and names it as Fixed, Protected, or Unexamined.",
  alternates: {
    canonical: "https://nolasimon.com/aga-audit",
  },
  openGraph: {
    type: "website",
    url: "https://nolasimon.com/aga-audit",
    title: "Run the Assumption-Ground Audit — Nola Simon",
    description:
      "A guided conversation that surfaces the assumption underneath your next commitment, before the direction hardens.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Run the Assumption-Ground Audit — Nola Simon",
    description:
      "A guided conversation that surfaces the assumption underneath your next commitment, before the direction hardens.",
    images: ["/opengraph-image"],
  },
};

export default function AGAAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
