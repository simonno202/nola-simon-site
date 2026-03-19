import { SectionWrapper } from "@/components/ui/SectionWrapper";

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
            href="/podcast/practical-futurism-for-daily-life"
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
              href="mailto:nola@nolasimon.com"
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
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Base land */}
              <rect width="800" height="480" fill="#E5E0D1"/>

              {/* Terrain texture */}
              <ellipse cx="130" cy="400" rx="130" ry="45" fill="#DDD8C8" opacity="0.4"/>
              <ellipse cx="660" cy="385" rx="140" ry="48" fill="#DDD8C8" opacity="0.32"/>
              <ellipse cx="710" cy="175" rx="75" ry="55" fill="#DDD8C8" opacity="0.22"/>

              {/* ── LAKE SIMCOE ── */}

              {/* Main basin — flatter north shore, angular NE, straighter west side */}
              <path
                d="M282,58 L365,44 L450,40 L540,42 L590,50 Q632,60 652,90 Q668,122 660,162 Q650,200 632,232 Q610,262 580,282 Q548,298 515,308 Q485,315 458,315 Q430,315 406,306 Q375,292 345,274 Q314,254 298,235 Q284,200 282,155 Q280,108 282,58 Z"
                fill="#9CBFD2"
                opacity="0.82"
              />
              {/* Main basin highlight */}
              <path
                d="M298,72 L368,60 L450,57 L532,58 L580,66 Q615,78 630,108 Q642,140 635,174 Q622,212 602,240 Q576,268 545,284 Q512,298 480,304 Q452,308 430,302 Q400,290 372,274 Q345,256 332,236 Q320,210 320,175 Q318,132 326,96 Q338,74 298,72 Z"
                fill="#B4D4E2"
                opacity="0.22"
              />

              {/* Kempenfelt Bay — long arm going west */}
              <path
                d="M298,228 Q268,232 232,236 Q195,240 162,238 Q132,234 108,228 Q90,222 94,214 Q100,206 128,206 Q162,207 200,214 Q235,220 268,222 Q290,222 300,220 Z"
                fill="#9CBFD2"
                opacity="0.82"
              />
              {/* Kempenfelt highlight */}
              <path
                d="M292,224 Q260,228 220,232 Q185,234 158,230 Q136,226 128,220 Q134,214 160,215 Q196,216 232,220 Q262,222 288,220 Z"
                fill="#B4D4E2"
                opacity="0.2"
              />

              {/* Cook&apos;s Bay — narrower, going south */}
              <path
                d="M445,312 Q465,315 472,338 Q478,365 472,392 Q465,415 450,424 Q436,430 422,422 Q410,412 408,388 Q406,362 414,338 Q422,315 442,310 Z"
                fill="#9CBFD2"
                opacity="0.82"
              />

              {/* Georgina Island */}
              <ellipse cx="462" cy="292" rx="20" ry="7" fill="#DDD8C8" opacity="0.72" transform="rotate(-8,462,292)"/>

              {/* ── Greenery ── */}
              <circle cx="88" cy="205" r="17" fill="#6FA878" opacity="0.42"/>
              <circle cx="72" cy="220" r="13" fill="#5D9468" opacity="0.36"/>
              <circle cx="105" cy="225" r="14" fill="#7DB888" opacity="0.32"/>
              <circle cx="65" cy="196" r="10" fill="#88C292" opacity="0.28"/>
              <circle cx="98" cy="245" r="11" fill="#6FA878" opacity="0.28"/>
              <circle cx="195" cy="58" r="14" fill="#6FA878" opacity="0.32"/>
              <circle cx="180" cy="74" r="11" fill="#5D9468" opacity="0.28"/>
              <circle cx="330" cy="22" r="10" fill="#6FA878" opacity="0.26"/>
              <circle cx="475" cy="18" r="9" fill="#5D9468" opacity="0.22"/>
              <circle cx="595" cy="30" r="11" fill="#7DB888" opacity="0.24"/>
              <circle cx="704" cy="118" r="20" fill="#6FA878" opacity="0.36"/>
              <circle cx="725" cy="138" r="15" fill="#5D9468" opacity="0.30"/>
              <circle cx="682" cy="136" r="13" fill="#7DB888" opacity="0.28"/>
              <circle cx="718" cy="295" r="13" fill="#6FA878" opacity="0.26"/>
              <circle cx="335" cy="368" r="14" fill="#6FA878" opacity="0.38"/>
              <circle cx="320" cy="385" r="11" fill="#5D9468" opacity="0.32"/>
              <circle cx="348" cy="388" r="9" fill="#7DB888" opacity="0.28"/>
              <circle cx="545" cy="398" r="13" fill="#6FA878" opacity="0.26"/>
              <circle cx="175" cy="398" r="11" fill="#7DB888" opacity="0.24"/>
              <circle cx="58" cy="338" r="9" fill="#6FA878" opacity="0.20"/>
              <circle cx="755" cy="418" r="11" fill="#88C292" opacity="0.18"/>

              {/* ── Highway 404 — pink brick road ── */}
              <path
                d="M468,480 Q466,460 463,440 Q460,420 456,405 Q452,395 446,385"
                stroke="#E8849E" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.2"
                filter="url(#nf-glow)"
              />
              <path
                d="M468,480 Q466,460 463,440 Q460,420 456,405 Q452,395 446,385"
                stroke="#D4567A" strokeWidth="5.5" fill="none" strokeLinecap="round"
              />
              <path
                d="M468,480 Q466,460 463,440 Q460,420 456,405 Q452,395 446,385"
                stroke="#E8849E" strokeWidth="1.5" fill="none" strokeDasharray="3,9" strokeLinecap="round" opacity="0.65"
              />

              {/* Highway shield */}
              <rect x="480" y="428" width="42" height="28" rx="5" fill="#D4567A"/>
              <rect x="482" y="430" width="38" height="24" rx="4" fill="none" stroke="white" strokeWidth="0.8" opacity="0.35"/>
              <text x="501" y="447" fontFamily="sans-serif" fontSize="13" fontWeight="800" fill="white" textAnchor="middle">404</text>
              <text x="524" y="472" fontFamily="monospace" fontSize="9.5" fill="#6B6558" textAnchor="start" opacity="0.4">↓ Toronto</text>

              {/* ── Keswick pin — moved right, off the water ── */}
              <ellipse cx="462" cy="388" rx="11" ry="3.5" fill="#B8405F" opacity="0.12"/>
              <path d="M462,382 C462,363 442,353 442,338 C442,327 451,318 462,318 C473,318 482,327 482,338 C482,353 462,363 462,382 Z" fill="#D4567A"/>
              <path d="M452,331 C452,326 456,322 461,322 C464,322 467,324 468,327" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round"/>
              <circle cx="462" cy="338" r="8" fill="white" opacity="0.92"/>
              <circle cx="462" cy="338" r="3.5" fill="#D4567A"/>
              <rect x="488" y="326" width="108" height="26" rx="7" fill="#D4567A"/>
              <rect x="490" y="328" width="104" height="22" rx="6" fill="none" stroke="white" strokeWidth="0.6" opacity="0.25"/>
              <text x="542" y="343" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="white" textAnchor="middle" letterSpacing="0.02em">Nola Simon</text>
              <line x1="482" y1="342" x2="488" y2="342" stroke="#D4567A" strokeWidth="2" strokeLinecap="round"/>

              {/* ── Keswick label — bottom left, large ── */}
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
              <text x="455" y="182" fontFamily="serif" fontSize="16" fill="#7A9DAE" textAnchor="middle" fontStyle="italic" opacity="0.55" letterSpacing="0.08em">Lake Simcoe</text>
              <text x="192" y="208" fontFamily="serif" fontSize="9" fill="#7A9DAE" textAnchor="middle" fontStyle="italic" opacity="0.45">Kempenfelt Bay</text>
              <text x="388" y="352" fontFamily="serif" fontSize="9" fill="#7A9DAE" textAnchor="middle" fontStyle="italic" opacity="0.45">Cook&apos;s Bay</text>
              <text x="88" y="260" fontFamily="monospace" fontSize="8" fill="#6B6558" textAnchor="middle" opacity="0.35" letterSpacing="0.08em">BARRIE</text>
              <text x="406" y="18" fontFamily="monospace" fontSize="8" fill="#6B6558" textAnchor="middle" opacity="0.35" letterSpacing="0.08em">ORILLIA</text>

              {/* Sparkles on road */}
              <circle cx="465" cy="463" r="2" fill="#E8849E" opacity="0.45">
                <animate attributeName="opacity" values="0.45;0.15;0.45" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="461" cy="435" r="1.8" fill="#E8849E" opacity="0.4">
                <animate attributeName="opacity" values="0.4;0.12;0.4" dur="2.6s" repeatCount="indefinite"/>
              </circle>
              <circle cx="457" cy="410" r="2.2" fill="#E8849E" opacity="0.42">
                <animate attributeName="opacity" values="0.42;0.15;0.42" dur="3.3s" repeatCount="indefinite"/>
              </circle>
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
