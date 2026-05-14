import type { Metadata } from "next";
import Image from "next/image";
import CollapsibleVisualizer from "../tools/CollapsibleVisualizer";

export const metadata: Metadata = {
  title: "Links",
  description:
    "All the ways to find and follow Nola Simon — social media, podcast, newsletter, and booking.",
  alternates: {
    canonical: "https://nolasimon.com/links",
  },
};

const ctaLinks = [
  {
    label: "Book an Intro Consultation",
    href: "https://tidycal.com/nola/intro-consultation-nola-simon",
  },
  {
    label: "Subscribe to the Newsletter",
    href: "https://prodigious-painter-153.kit.com/430927c5eb",
  },
];

const podcastLinks = [
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/id1602822494?mt=2&ls=1",
    icon: "apple",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/60q8ajURZVn2nS9f4meeq7",
    icon: "spotify",
  },
  {
    label: "Goodpods",
    href: "https://goodpods.com/podcasts/hope-possibilties-a-love-letter-to-the-future-of-work-198061",
    icon: "goodpods",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nolasimon/",
    icon: "linkedin",
  },
  {
    label: "Substack",
    href: "https://nolasimonhrcoe.substack.com/",
    icon: "substack",
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@nolasimonsayings",
    icon: "threads",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nolasimonsayings/",
    icon: "instagram",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nolasimonsayings",
    icon: "tiktok",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/nolasimontjo",
    icon: "x",
  },
  {
    label: "Pinterest",
    href: "https://ca.pinterest.com/EverydayFuturism/",
    icon: "pinterest",
  },
];

const siteLinks = [
  { label: "Website", href: "https://nolasimon.com" },
  { label: "Signal Tracker — A Rabbit Hole in Plain Sight", href: "https://nolasimon.com/signal-tracker" },
  { label: "Advisory & Speaking", href: "https://nolasimon.com/advisory-speaking" },
  { label: "The Assumption-Ground Audit", href: "https://nolasimon.com/aga" },
  { label: "The Living Lab — Podcast Episodes Revisited", href: "https://nolasimon.com/living-lab" },
  { label: "Podcast Episodes", href: "https://nolasimon.com/podcast" },
  { label: "Newsletter Archive", href: "https://nolasimon.com/newsletter" },
  { label: "Work — Writing, Audio, Video", href: "https://nolasimon.com/work" },
  { label: "Can You Read a Trust Signal? — Quiz", href: "https://nolasimon.com/trust-signal-quiz.html" },
  { label: "Speaker Kit — One-Pager", href: "https://nolasimon.com/speaker-kit.html" },
  { label: "Full Speaker Kit (PDF)", href: "https://nolasimon.com/nola-simon-speaker-kit.pdf" },
  { label: "SpeakerHub Profile", href: "https://speakerhub.com/speaker/nola-simon" },
];

/* ── Icons ── */
function SocialIcon({ icon }: { icon: string }) {
  const cls = "w-5 h-5";
  switch (icon) {
    case "linkedin":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
    case "substack":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l9.56-5.26L20.539 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>;
    case "threads":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.343-.783-.96-1.416-1.81-1.888a9.827 9.827 0 0 1-.508 2.06c-.376 1.002-.948 1.842-1.702 2.497-1.178 1.024-2.727 1.554-4.6 1.576h-.03c-1.527-.019-2.78-.532-3.728-1.524-.907-.95-1.392-2.24-1.441-3.834-.003-.09-.003-.178 0-.268.082-2.718 1.658-4.647 4.264-5.236a11.088 11.088 0 0 1 2.55-.272c.882.003 1.73.095 2.532.274-.06-1.284-.49-2.24-1.278-2.838-.875-.663-2.12-.998-3.698-1-.027 0-.055 0-.082.002-1.943.035-3.322.612-4.217 1.632l-1.466-1.39C6.612 2.898 8.428 2.158 10.73 2.11h.106c2.09.012 3.756.502 4.95 1.457 1.258.988 1.96 2.445 2.09 4.331.62.19 1.19.424 1.707.706 1.326.724 2.334 1.77 2.91 3.024.758 1.647.84 4.243-1.186 6.227-1.77 1.736-3.94 2.55-7.04 2.57zM10.596 12.09c-.02.064-.02.128-.017.192.032 1.056.33 1.882.886 2.464.594.622 1.417.94 2.442.955 1.29-.015 2.33-.369 3.09-1.055.498-.451.876-1.035 1.138-1.726.293-.778.406-1.643.343-2.568a8.457 8.457 0 0 0-2.436-.375c-.735-.004-1.454.07-2.125.228-1.728.39-2.95 1.244-3.321 2.885z"/></svg>;
    case "instagram":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>;
    case "tiktok":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>;
    case "x":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    case "pinterest":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>;
    case "apple":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.6.168 2.04.084 2.628-.36 2.604-1.656 4.74-3.792 6.264-.6.432-1.848 1.08-2.46 1.284l-.312.108v-2.22l.24-.096c1.476-.612 2.736-1.74 3.492-3.108.468-.852.72-1.608.852-2.58.072-.528.048-1.632-.048-2.124-.456-2.424-2.268-4.428-4.668-5.172-.576-.18-1.02-.252-1.728-.276-1.272-.048-2.34.264-3.408.984-1.488 1.008-2.424 2.496-2.7 4.308-.072.504-.072 1.476 0 1.98.192 1.38.72 2.544 1.596 3.504.516.564 1.044.984 1.74 1.38l.252.144v2.22l-.312-.108c-1.224-.42-2.472-1.2-3.324-2.076-1.404-1.44-2.244-3.264-2.46-5.316-.048-.48-.048-1.392 0-1.884.384-3.864 3.36-6.984 7.164-7.5.456-.06 1.488-.072 1.92-.024zm.024 3.6c2.508.168 4.572 2.052 4.884 4.536.048.372.048 1.128.012 1.452-.192 1.632-1.14 3.12-2.508 3.936l-.252.144v-2.472l.084-.072c.348-.312.648-.744.852-1.224.132-.312.228-.66.276-1.02.036-.3.024-.852-.024-1.14-.36-2.04-2.244-3.468-4.296-3.252-1.824.192-3.252 1.584-3.54 3.444-.036.228-.048.396-.048.708 0 .504.06.924.204 1.332.192.552.468.984.852 1.344.06.06.084.084.084.096v2.376l-.252-.144c-.6-.36-1.116-.792-1.536-1.3-.828-.996-1.332-2.304-1.38-3.564-.072-1.776.672-3.48 2.028-4.644 1.044-.9 2.412-1.416 3.78-1.44.168 0 .384.012.48.024zM11.4 11.4c-.444.228-.708.552-.84.996-.072.24-.072.672 0 .912.144.48.516.852.996.996.12.036.216.048.456.048s.336-.012.456-.048c.48-.144.852-.516.996-.996.072-.24.072-.672 0-.912-.192-.648-.72-1.044-1.404-1.044-.108 0-.3.024-.66.048zm-.444 3.6c-.024.024-.048 2.724-.036 4.14l.012 1.392h2.16v-5.544H11.04c-.036 0-.072.004-.084.012z"/></svg>;
    case "spotify":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>;
    case "goodpods":
      return <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    default:
      return null;
  }
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 opacity-30 group-hover:opacity-70 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function LinksPage() {
  return (
    <main className="bg-navy min-h-screen">
      <div className="mx-auto max-w-md px-6 py-16">
        {/* ── Profile ── */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-28 h-28 rounded-full overflow-hidden ring-[3px] ring-pink ring-offset-4 ring-offset-navy">
            <Image
              src="/images/nola-hero.jpg"
              alt="Nola Simon"
              fill
              className="object-cover object-top"
              sizes="112px"
              priority
            />
          </div>

          <h1 className="mt-6 text-2xl font-semibold text-cream">
            Nola Simon
          </h1>

          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-pink">
            Futurist &amp; Researcher
          </p>

          <p className="mt-3 text-[14px] leading-relaxed text-text-lighter max-w-xs">
            The future isn&rsquo;t predicted. It&rsquo;s practiced.
          </p>
        </div>

        {/* ── CTAs ── */}
        <div className="mt-10 flex flex-col gap-3">
          {ctaLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 rounded-xl bg-pink px-5 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-pink-hover min-h-[52px] text-center"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Podcast ── */}
        <div className="mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-lighter/50 mb-3 px-1">
            Podcast — Hope + Possibilities
          </p>
          <div className="flex flex-col gap-2">
            {podcastLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-cream/10 px-5 py-3.5 text-[14px] font-medium text-cream transition-all hover:bg-cream/20 min-h-[48px]"
              >
                <span className="text-pink">
                  <SocialIcon icon={link.icon} />
                </span>
                <span className="flex-1">{link.label}</span>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Social ── */}
        <div className="mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-lighter/50 mb-3 px-1">
            @nolasimonsayings
          </p>
          <div className="flex flex-col gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-cream/10 px-5 py-3.5 text-[14px] font-medium text-cream transition-all hover:bg-cream/20 min-h-[48px]"
              >
                <span className="text-pink">
                  <SocialIcon icon={link.icon} />
                </span>
                <span className="flex-1">{link.label}</span>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Website ── */}
        <div className="mt-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-lighter/50 mb-3 px-1">
            Explore
          </p>
          <div className="flex flex-col gap-2">
            {siteLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-cream/10 px-5 py-3.5 text-[14px] font-medium text-cream transition-all hover:bg-cream/20 min-h-[48px]"
              >
                <span className="flex-1">{link.label}</span>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>

        {/* ── Visualizer ── */}
        <div className="mt-10">
          <CollapsibleVisualizer dark />
        </div>

        {/* ── Footer ── */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com"
            className="text-[13px] font-mono text-text-lighter/60 hover:text-pink transition-colors"
          >
            nola@nolasimon.com
          </a>
          <p className="text-[11px] font-mono text-text-lighter/30">
            &copy; 2026 Nola Simon
          </p>
        </div>
      </div>
    </main>
  );
}
