import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";

const URL = "https://nolasimon.com/leadership";
const DESCRIPTION =
  "Nola Simon Leadership: everyday futurism practices and tools for leaders who want to make sense of change. The Made in Canada listening guide, the Witnessed Trust Quiz, the Signal Tracker and the Anchor Inventory.";

export const metadata: Metadata = {
  title: "Nola Simon Leadership: Everyday Futurism Practices",
  description: DESCRIPTION,
  keywords: [
    "Nola Simon Leadership",
    "Nola Simon",
    "everyday futurism practices",
    "everyday futurism",
    "leadership",
    "strategic foresight",
    "skills of the future",
    "using podcasts to learn",
    "made in canada",
    "canadian thought leadership",
    "trust signals",
    "self-trust",
    "trust quiz",
    "listening guide",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Nola Simon Leadership",
    description: DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nola Simon Leadership",
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

const PODCAST_PRACTICE = [
  {
    kicker: "Essay · Made in Canada, Part 1",
    title: "Building a Business in Canada | Lessons From Entrepreneurs",
    body: "Two dozen Canadian guests, recorded between 2021 and 2025, telling the story of building work independently in this country. Listening back is a way to practise the skills the future of work demands.",
    href: "/blog/made-in-canada-building-a-business-in-canada",
    cta: "Read the essay",
    external: false,
  },
  {
    kicker: "Practice tool",
    title: "Everyday Futurism Listening Guide",
    body: "A fillable PDF for any Made in Canada episode: what feels like history, what still feels current, what's worth carrying forward, and the best question the episode asks or makes you ask.",
    href: "/made-in-canada-listening-guide.pdf",
    cta: "Download the guide (PDF)",
    external: true,
  },
  {
    kicker: "Listen",
    title: "Made in Canada: the future of work, built independently",
    body: "Every original conversation in one place, on the Made in Canada Spotify playlist, with the series on the podcast page.",
    href: "https://open.spotify.com/playlist/1gVGCKspREft4Dk4Hl2AAc",
    cta: "Open the playlist",
    external: true,
  },
  {
    kicker: "Read",
    title: "Episode transcripts",
    body: "Full transcripts of Made in Canada conversations and other episodes, so you can read at your own pace and come back to the passages that matter.",
    href: "/podcast/archive",
    cta: "Browse the transcripts",
    external: false,
  },
];

const TOOLS = [
  {
    kicker: "Trust",
    title: "The Witnessed Trust Quiz",
    body: "Trust is witnessed, and it shifts based on what people see: in the room, online, and through AI systems forming assessments about you. This quiz works with what you can actually observe.",
    href: "/trust-signal-quiz",
    cta: "Take the quiz",
  },
  {
    kicker: "Signal",
    title: "The Signal Tracker",
    body: "A working instrument for logging trust signals over time, finding the pattern, and knowing what to do with what you see.",
    href: "/signal-tracker",
    cta: "Open the tracker",
  },
  {
    kicker: "Stability",
    title: "The Anchor Inventory",
    body: "Before you decide what moves, know what's holding. Ten questions that give you a clearer picture of what's load-bearing before you commit to a direction.",
    href: "/anchor-inventory",
    cta: "Take the inventory",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Nola Simon Leadership",
  url: URL,
  description: DESCRIPTION,
  author: { "@type": "Person", name: "Nola Simon", url: "https://nolasimon.com" },
  hasPart: [
    {
      "@type": "CreativeWorkSeries",
      name: "Everyday Futurism Practices",
      hasPart: {
        "@type": "CreativeWorkSeries",
        name: "Using Podcasts To Build the Skills of the Future",
      },
    },
  ],
};

export default function LeadershipPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SectionWrapper className="bg-cream py-12 lg:py-20 animate-hero-in">
        <Eyebrow>LEADERSHIP</Eyebrow>
        <h1 className="mt-3 text-[36px] lg:text-[48px] font-semibold text-navy leading-tight">
          Nola Simon Leadership
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
          Leadership is making sense of change while it&rsquo;s still
          happening. These are the everyday futurism practices I use to do
          that: noticing which assumptions still hold, reading the trust
          signals around us, and trusting ourselves enough to act.
        </p>
      </SectionWrapper>

      <SectionWrapper id="everyday-futurism-practices" className="bg-cream py-6">
        <Eyebrow>EVERYDAY FUTURISM PRACTICES</Eyebrow>
        <h2 className="mt-3 text-[26px] font-semibold text-navy leading-snug">
          Everyday Futurism Practices
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          <Link href="/everyday-futurism" className="text-pink hover:text-pink-hover">
            Everyday futurism
          </Link>{" "}
          is the practice of paying attention to what&rsquo;s already in front
          of you, before anyone has officially named it. Each practice here
          builds one of the skills the future of work demands.
        </p>
      </SectionWrapper>

      <SectionWrapper id="using-podcasts" className="bg-cream py-6">
        <div className="max-w-3xl border-l-4 border-[#EC4197] pl-5">
          <p className="font-mono text-[12px] tracking-[0.08em] uppercase text-[#EC4197]">
            Practice 1
          </p>
          <h3 className="mt-2 text-[22px] font-semibold text-navy leading-snug">
            Using Podcasts To Build the Skills of the Future
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
            Podcasts capture people mid-thought, and they&rsquo;re accessible
            in a way many other mediums aren&rsquo;t: any player, transcripts,
            YouTube, downloads, email notifications, anywhere you can connect.
            Listening back to a conversation years later is a way to practise
            discernment: sorting what feels like history from what still feels
            current, and deciding what&rsquo;s worth carrying forward.
          </p>
        </div>

        <div className="mt-8 grid max-w-3xl gap-5">
          {PODCAST_PRACTICE.map((item) => (
            <Card key={item.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                {item.kicker}
              </p>
              <h4 className="mt-2 text-[19px] font-semibold text-navy leading-snug">
                {item.title}
              </h4>
              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                {item.body}
              </p>
              <div className="mt-5">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] tracking-[0.05em] text-pink hover:text-pink-hover transition-colors"
                  >
                    {item.cta} &rarr;
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="font-mono text-[12px] tracking-[0.05em] text-pink hover:text-pink-hover transition-colors"
                  >
                    {item.cta} &rarr;
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-text-secondary">
          Find the Made in Canada series on the{" "}
          <Link href="/podcast" className="text-pink hover:text-pink-hover">
            podcast page
          </Link>
          .
        </p>
      </SectionWrapper>

      <SectionWrapper id="tools" className="bg-cream py-6 pb-16 lg:pb-24">
        <Eyebrow>TOOLS</Eyebrow>
        <h2 className="mt-3 text-[26px] font-semibold text-navy leading-snug">
          Tools for Making Sense of Change
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          Tools I&rsquo;ve built to put these practices to work: reading the
          trust signals around you and knowing what&rsquo;s holding before you
          decide what moves.
        </p>

        <div className="mt-8 grid max-w-3xl gap-5">
          {TOOLS.map((tool) => (
            <Card key={tool.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                {tool.kicker}
              </p>
              <h3 className="mt-2 text-[19px] font-semibold text-navy leading-snug">
                {tool.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                {tool.body}
              </p>
              <div className="mt-5">
                <Link
                  href={tool.href}
                  className="font-mono text-[12px] tracking-[0.05em] text-pink hover:text-pink-hover transition-colors"
                >
                  {tool.cta} &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-text-secondary">
          See all of them on the{" "}
          <Link href="/tools" className="text-pink hover:text-pink-hover">
            tools page
          </Link>
          .
        </p>
      </SectionWrapper>
    </main>
  );
}
