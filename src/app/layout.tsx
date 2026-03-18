import type { Metadata } from "next";
import { jakarta, jetbrains } from "@/lib/fonts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  PersonSchema,
  OrganizationSchema,
  WebSiteSchema,
} from "@/components/SchemaOrg";
import { GoogleAnalytics } from "@/components/ui/GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nola Simon — The Future Isn't Predicted. It's Practiced.",
    template: "%s — Nola Simon | Everyday Futurism",
  },
  description:
    "Strategic futurist Nola Simon helps leaders and organizations trust themselves to read the signals, question the status quo, and build what's next.",
  metadataBase: new URL("https://nolasimon.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Nola Simon",
    title: "Nola Simon — The Future Isn't Predicted. It's Practiced.",
    description:
      "Strategic futurist, researcher & podcast host helping leaders read the signals, trust themselves, and build what's next. Based in Ontario, Canada.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nola Simon — Everyday Futurism. The future isn't predicted. It's practiced.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="bg-cream text-navy font-sans antialiased">
        <GoogleAnalytics />
        <PersonSchema />
        <OrganizationSchema />
        <WebSiteSchema />
        <a
          href="#main-content"
          className="fixed left-0 top-0 z-[100] -translate-y-full bg-navy px-4 py-2 text-sm font-medium text-cream rounded-br-lg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
