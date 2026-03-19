import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SmartSuggestion } from "@/components/ui/SmartSuggestion";

const CARDS = [
  {
    emoji: "🧠",
    title: "I have a real challenge that needs a futurist's lens.",
    sub: "Strategic advisory or speaking",
    href: "/advisory-speaking",
  },
  {
    emoji: "🍿",
    title: "The rabbit holes, the receipts, and the work-in-progress.",
    sub: "Essays, episodes, and ideas",
    href: "/blog",
  },
  {
    emoji: "🎤",
    title: "I'm a journalist, event organizer, or booker.",
    sub: "Media kit, bio, and press",
    href: "/media",
  },
  {
    emoji: "🔍",
    title: "Gotta love a side quest.",
    sub: "Just exploring — totally valid",
    href: "/",
  },
];

export default function NotFound() {
  return (
    <main>
      <SectionWrapper className="bg-cream py-12 lg:py-20">
        <div className="max-w-2xl mx-auto">

          {/* ── 404 ── */}
          <p
            className="font-mono font-black text-pink"
            style={{ fontSize: "5rem", lineHeight: 1, marginBottom: "1.25rem", letterSpacing: "-0.04em" }}
          >
            404
          </p>

          {/* ── Headline ── */}
          <h1
            className="font-sans font-extrabold text-navy"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: "1.5rem" }}
          >
            Welcome to the most popular page on my site.
          </h1>

          {/* ── Subtext ── */}
          <p className="text-text-secondary" style={{ fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "2.5rem" }}>
            You&rsquo;ve reached a page that doesn&rsquo;t exist &mdash; but like any good{" "}
            <em>Choose Your Own Adventure</em>, the next move is yours.
          </p>

          {/* ── High-confidence link ── */}
          <a
            href="https://www.podpage.com/hope-possibilties-a-love-letter-to-the-future-of-work/practical-futurism-for-daily-life/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.8rem",
              color: "#6B6558",
              marginBottom: "2.5rem",
              padding: "0.8rem 1rem",
              background: "rgba(0,0,0,0.03)",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            className="hover:bg-black/[0.06]"
          >
            <span style={{ fontSize: "1rem", opacity: 0.5 }}>→</span>
            <span>
              Most people end up here:{" "}
              <span style={{ color: "#1a2b4a", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                Start with Everyday Futurism
              </span>
            </span>
          </a>

          {/* ── Smart suggestion ── */}
          <SmartSuggestion />

          {/* ── Section label ── */}
          <p
            className="text-text-muted uppercase"
            style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", letterSpacing: "0.15em", marginBottom: "0.5rem" }}
          >
            Turn to which page?
          </p>
          <p
            className="font-sans font-bold text-navy"
            style={{ fontSize: "1.3rem", letterSpacing: "-0.01em", marginBottom: "1.25rem" }}
          >
            What&rsquo;s true right now?
          </p>

          {/* ── Cards ── */}
          <div className="flex flex-col gap-3 mb-12">
            {CARDS.map((card) => (
              <a
                key={card.href}
                href={card.href}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.2rem 1.25rem",
                  background: "#EDEADF",
                  borderRadius: "12px",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "background 0.2s, transform 0.15s",
                }}
                className="hover:-translate-y-px hover:bg-[#E5E0D3]"
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "2.2rem",
                    height: "2.2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.04)",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                  }}
                >
                  {card.emoji}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "1rem", lineHeight: 1.3, marginBottom: "0.2rem", color: "#1a2b4a" }}>
                    {card.title}
                  </p>
                  <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.75rem", color: "#6B6558" }}>
                    {card.sub}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* ── Lost intent ── */}
          <div style={{ borderTop: "1px solid #D4CFC3", paddingTop: "1.5rem", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.95rem", color: "#6B6558", marginBottom: "0.75rem" }}>
              Looking for something specific that should exist?
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nola@nolasimon.com&su=Broken%20Link%20Report"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.8rem", color: "#1a2b4a", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              Let me know what you were looking for →
            </a>
          </div>

          {/* ── Lake Simcoe map ── */}
          <div style={{ width: "100%", height: 380, borderRadius: 12, overflow: "hidden", background: "#EAE6DA" }}>
            <svg viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
              <defs>
                <filter id="nf-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Base land */}
              <rect width="800" height="480" fill="#E5E0D1"/>

              {/* Terrain texture */}
              <ellipse cx="120" cy="402" rx="118" ry="40" fill="#DDD8C8" opacity="0.35"/>
              <ellipse cx="665" cy="385" rx="132" ry="44" fill="#DDD8C8" opacity="0.28"/>
              <ellipse cx="718" cy="170" rx="68" ry="50" fill="#DDD8C8" opacity="0.20"/>

              {/*
                LAKE SIMCOE — main body + Cook's Bay only.
                Single closed path tracing the full perimeter clockwise from NW.
                Main basin: wide landscape shape, spans x=220–690, y=68–308.
                Cook's Bay: narrow arm going south, x=480–515, y=308–425.
                No Kempenfelt Bay.
              */}
              <path
                d="
                  M 220,68
                  Q 370,48 510,48
                  Q 590,50 655,72
                  Q 692,98 690,148
                  Q 688,195 665,232
                  Q 640,265 602,282
                  Q 562,298 515,308
                  Q 516,335 514,368
                  Q 510,400 494,420
                  Q 480,430 462,423
                  Q 445,412 446,382
                  Q 448,350 458,322
                  Q 468,306 480,304
                  Q 448,296 412,284
                  Q 368,268 330,250
                  Q 295,230 265,212
                  Q 238,192 225,158
                  Q 218,122 220,82
                  Q 220,70 220,68 Z
                "
                fill="#9CBFD2"
                opacity="0.85"
              />

              {/* Inner highlight */}
              <path
                d="
                  M 248,90
                  Q 380,68 510,70
                  Q 590,72 645,92
                  Q 678,114 675,158
                  Q 672,200 648,234
                  Q 620,262 582,278
                  Q 545,294 505,300
                  Q 468,304 445,298
                  Q 405,286 370,268
                  Q 330,248 300,228
                  Q 268,205 252,170
                  Q 240,138 248,104
                  Q 248,94 248,90 Z
                "
                fill="#B8D8E8"
                opacity="0.20"
              />

              {/* Georgina Island — south end of main basin */}
              <ellipse cx="508" cy="280" rx="20" ry="7" fill="#DDD8C8" opacity="0.72" transform="rotate(-8,508,280)"/>

              {/* ── Greenery ── */}
              <circle cx="155" cy="55" r="13" fill="#6FA878" opacity="0.30"/>
              <circle cx="140" cy="72" r="10" fill="#5D9468" opacity="0.26"/>
              <circle cx="178" cy="65" r="9" fill="#7DB888" opacity="0.24"/>
              <circle cx="88" cy="115" r="15" fill="#6FA878" opacity="0.34"/>
              <circle cx="72" cy="132" r="11" fill="#5D9468" opacity="0.28"/>
              <circle cx="105" cy="128" r="12" fill="#7DB888" opacity="0.26"/>
              <circle cx="55" cy="210" r="13" fill="#6FA878" opacity="0.28"/>
              <circle cx="40" cy="228" r="10" fill="#5D9468" opacity="0.24"/>
              <circle cx="72" cy="225" r="9" fill="#88C292" opacity="0.22"/>
              <circle cx="100" cy="300" r="12" fill="#6FA878" opacity="0.26"/>
              <circle cx="82" cy="318" r="9" fill="#5D9468" opacity="0.22"/>
              <circle cx="290" cy="22" r="10" fill="#6FA878" opacity="0.24"/>
              <circle cx="465" cy="15" r="9" fill="#5D9468" opacity="0.20"/>
              <circle cx="595" cy="28" r="11" fill="#7DB888" opacity="0.22"/>
              <circle cx="715" cy="115" r="19" fill="#6FA878" opacity="0.34"/>
              <circle cx="738" cy="135" r="13" fill="#5D9468" opacity="0.28"/>
              <circle cx="695" cy="132" r="12" fill="#7DB888" opacity="0.26"/>
              <circle cx="728" cy="295" r="12" fill="#6FA878" opacity="0.24"/>
              <circle cx="745" cy="312" r="9" fill="#5D9468" opacity="0.20"/>
              <circle cx="330" cy="368" r="13" fill="#6FA878" opacity="0.36"/>
              <circle cx="315" cy="386" r="10" fill="#5D9468" opacity="0.30"/>
              <circle cx="348" cy="385" r="8" fill="#7DB888" opacity="0.26"/>
              <circle cx="395" cy="395" r="11" fill="#6FA878" opacity="0.28"/>
              <circle cx="548" cy="398" r="12" fill="#6FA878" opacity="0.26"/>
              <circle cx="565" cy="415" r="9" fill="#5D9468" opacity="0.22"/>
              <circle cx="188" cy="395" r="10" fill="#7DB888" opacity="0.22"/>
              <circle cx="58" cy="342" r="9" fill="#6FA878" opacity="0.20"/>
              <circle cx="760" cy="418" r="10" fill="#88C292" opacity="0.18"/>

              {/* ── Highway 404 — angles in from the SE to Keswick pin ── */}
              <path
                d="M 625,480 Q 595,462 572,445 Q 555,432 535,378"
                stroke="#E8849E" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.2"
                filter="url(#nf-glow)"
              />
              <path
                d="M 625,480 Q 595,462 572,445 Q 555,432 535,378"
                stroke="#D4567A" strokeWidth="5.5" fill="none" strokeLinecap="round"
              />
              <path
                d="M 625,480 Q 595,462 572,445 Q 555,432 535,378"
                stroke="#E8849E" strokeWidth="1.5" fill="none" strokeDasharray="3,9" strokeLinecap="round" opacity="0.65"
              />

              {/* Highway shield */}
              <rect x="600" y="444" width="42" height="28" rx="5" fill="#D4567A"/>
              <rect x="602" y="446" width="38" height="24" rx="4" fill="none" stroke="white" strokeWidth="0.8" opacity="0.35"/>
              <text x="621" y="463" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="white" textAnchor="middle">404</text>
              <text x="622" y="476" fontFamily="monospace" fontSize="9.5" fill="#6B6558" textAnchor="start" opacity="0.4">↓ Toronto</text>

              {/* Road sparkles */}
              <circle cx="618" cy="468" r="2" fill="#E8849E" opacity="0.45">
                <animate attributeName="opacity" values="0.45;0.15;0.45" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="588" cy="452" r="1.8" fill="#E8849E" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.12;0.4" dur="2.6s" repeatCount="indefinite"/>
              </circle>
              <circle cx="562" cy="438" r="2" fill="#E8849E" opacity="0.38">
                <animate attributeName="opacity" values="0.38;0.1;0.38" dur="3.2s" repeatCount="indefinite"/>
              </circle>

              {/*
                KESWICK PIN — on land, east of Cook's Bay.
                Cook's Bay east bank at y=336 ≈ x=514.
                Pin at cx=535 is ~21px east of the bank, clearly on land.
              */}
              <ellipse cx="535" cy="378" rx="11" ry="3.5" fill="#B8405F" opacity="0.12"/>
              <path d="M535,372 C535,353 515,343 515,328 C515,317 524,308 535,308 C546,308 555,317 555,328 C555,343 535,353 535,372 Z" fill="#D4567A"/>
              <path d="M525,321 C525,316 529,312 534,312 C537,312 540,314 541,317" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
              <circle cx="535" cy="328" r="8" fill="white" opacity="0.92"/>
              <circle cx="535" cy="328" r="3.5" fill="#D4567A"/>

              {/* Nola Simon label */}
              <rect x="562" y="316" width="108" height="26" rx="7" fill="#D4567A"/>
              <rect x="564" y="318" width="104" height="22" rx="6" fill="none" stroke="white" strokeWidth="0.6" opacity="0.25"/>
              <text x="616" y="333" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="0.02em">Nola Simon</text>
              <line x1="555" y1="332" x2="562" y2="332" stroke="#D4567A" strokeWidth="2" strokeLinecap="round"/>

              {/* ── Keswick Ontario Canada — bottom left, large ── */}
              <text
                x="38" y="462"
                fontFamily="monospace"
                fontSize="20"
                fontWeight="600"
                fill="#6B6558"
                opacity="0.72"
                letterSpacing="0.04em"
              >
                Keswick Ontario Canada
              </text>

              {/* ── Map labels ── */}
              <text x="440" y="178" fontFamily="serif" fontSize="16" fill="#7A9DAE" textAnchor="middle" fontStyle="italic" opacity="0.55" letterSpacing="0.08em">Lake Simcoe</text>
              <text x="388" y="355" fontFamily="serif" fontSize="9" fill="#7A9DAE" textAnchor="middle" fontStyle="italic" opacity="0.45">Cook&apos;s Bay</text>
              <text x="510" y="38" fontFamily="monospace" fontSize="8" fill="#6B6558" textAnchor="middle" opacity="0.35" letterSpacing="0.08em">ORILLIA</text>
            </svg>
          </div>

          {/* ── Easter egg ── */}
          <p className="text-center font-mono text-xs text-text-muted mt-4 pb-4" style={{ lineHeight: 1.6 }}>
            <span
              style={{
                display: "inline-block",
                background: "#D4567A",
                color: "white",
                padding: "0.15rem 0.5rem",
                borderRadius: "3px",
                fontWeight: 600,
                fontSize: "0.68rem",
                marginRight: "0.3rem",
                verticalAlign: "middle",
                position: "relative",
                top: "-1px",
              }}
            >
              404
            </span>
            Highway 404 ends in Keswick, Ontario. This one&rsquo;s where you start.
            <br />Every ending can be reinvented as a beginning.
          </p>

        </div>
      </SectionWrapper>
    </main>
  );
}
