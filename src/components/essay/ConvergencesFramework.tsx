const streams = [
  {
    number: "01",
    name: "Geopolitical Unrest",
    desc: "War reshapes energy costs, border permeability, and the conditions of movement.",
  },
  {
    number: "02",
    name: "Energy Volatility",
    desc: "Price instability ripples through supply chains and operational assumptions built for stability.",
  },
  {
    number: "03",
    name: "AI + Automation",
    desc: "The question of what work requires human presence is being rewritten in real time.",
  },
  {
    number: "04",
    name: "Labour + Flexibility",
    desc: "A workforce that reorganized around flexibility is meeting institutions that want the old geography back.",
  },
  {
    number: "05",
    name: "Mobility + Geography",
    desc: "Work from anywhere assumed open borders, cheap flights, and frictionless passage. None of those hold.",
  },
];

export function ConvergencesFramework() {
  return (
    <div
      className="convergences-framework my-10"
      style={{
        borderTop: "1px solid #e0dcd2",
        borderBottom: "1px solid #e0dcd2",
        padding: "40px 0",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#6a6a5e",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        A Convergences Framework — Everyday Futurism
      </p>

      {/* SVG — min-width prevents label compression on narrow screens */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <svg
          viewBox="0 0 780 310"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", minWidth: "540px", height: "auto", display: "block" }}
        >
          {/* Convergence rings */}
          <ellipse cx="390" cy="100" rx="70" ry="45" stroke="#e0dcd2" strokeWidth="0.5" opacity="0.7" />
          <ellipse cx="390" cy="100" rx="110" ry="65" stroke="#e0dcd2" strokeWidth="0.5" opacity="0.5" />
          <ellipse cx="390" cy="100" rx="150" ry="85" stroke="#e0dcd2" strokeWidth="0.5" opacity="0.3" />

          {/* Stream paths */}
          <path
            className="stream-path"
            style={{ animationDelay: "0.2s" }}
            d="M 20 30 C 120 35, 220 55, 370 95"
            stroke="#6a6a5e"
            strokeWidth="1.2"
            opacity="0.5"
          />
          <path
            className="stream-path"
            style={{ animationDelay: "0.5s" }}
            d="M 20 80 C 130 80, 240 85, 370 100"
            stroke="#6a6a5e"
            strokeWidth="1.2"
            opacity="0.5"
          />
          <path
            className="stream-path"
            style={{ animationDelay: "0.8s" }}
            d="M 20 130 C 120 125, 230 115, 370 105"
            stroke="#6a6a5e"
            strokeWidth="1.2"
            opacity="0.5"
          />
          <path
            className="stream-path"
            style={{ animationDelay: "1.1s" }}
            d="M 760 40 C 640 50, 530 70, 415 95"
            stroke="#6a6a5e"
            strokeWidth="1.2"
            opacity="0.5"
          />
          <path
            className="stream-path"
            style={{ animationDelay: "1.4s" }}
            d="M 760 155 C 640 145, 530 125, 415 105"
            stroke="#6a6a5e"
            strokeWidth="1.2"
            opacity="0.5"
          />

          {/* Center convergence point */}
          <circle cx="390" cy="100" r="14" fill="#f5f0e8" stroke="#b52e71" strokeWidth="1.2" />
          <circle className="pulse-circle" cx="390" cy="100" r="8" fill="#b52e71" opacity="0.7" />

          {/* Endpoint dots */}
          <circle cx="20" cy="30" r="3" fill="#6a6a5e" opacity="0.5" />
          <circle cx="20" cy="80" r="3" fill="#6a6a5e" opacity="0.5" />
          <circle cx="20" cy="130" r="3" fill="#6a6a5e" opacity="0.5" />
          <circle cx="760" cy="40" r="3" fill="#6a6a5e" opacity="0.5" />
          <circle cx="760" cy="155" r="3" fill="#6a6a5e" opacity="0.5" />

          {/* Stream labels */}
          <text x="28" y="27" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#6a6a5e" letterSpacing="0.05em">GEOPOLITICAL UNREST</text>
          <text x="28" y="77" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#6a6a5e" letterSpacing="0.05em">ENERGY VOLATILITY</text>
          <text x="28" y="127" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#6a6a5e" letterSpacing="0.05em">AI + AUTOMATION</text>
          <text x="620" y="37" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#6a6a5e" letterSpacing="0.05em">LABOUR + FLEXIBILITY</text>
          <text x="608" y="152" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#6a6a5e" letterSpacing="0.05em">MOBILITY + GEOGRAPHY</text>

          {/* Convergence label */}
          <text x="390" y="128" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#6a6a5e" textAnchor="middle" fontStyle="italic">where assumptions</text>
          <text x="390" y="141" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#6a6a5e" textAnchor="middle" fontStyle="italic">collide</text>

          {/* Arrow to consequences */}
          <line x1="390" y1="114" x2="390" y2="175" stroke="#b52e71" strokeWidth="1" strokeDasharray="4 3" opacity="0.7" />
          <polygon points="390,180 385,170 395,170" fill="#b52e71" opacity="0.7" />
          <text x="390" y="196" fontFamily="'JetBrains Mono', monospace" fontSize="8" fill="#b52e71" textAnchor="middle" letterSpacing="0.25em">UNMODELED CONSEQUENCES</text>

          {/* Lines to consequence nodes */}
          <line x1="390" y1="202" x2="210" y2="240" stroke="#b52e71" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
          <line x1="390" y1="202" x2="390" y2="240" stroke="#b52e71" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
          <line x1="390" y1="202" x2="570" y2="240" stroke="#b52e71" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />

          {/* Consequence dots */}
          <circle cx="210" cy="245" r="5" fill="#f5f0e8" stroke="#b52e71" strokeWidth="1" opacity="0.8" />
          <circle cx="390" cy="245" r="5" fill="#f5f0e8" stroke="#b52e71" strokeWidth="1" opacity="0.8" />
          <circle cx="570" cy="245" r="5" fill="#f5f0e8" stroke="#b52e71" strokeWidth="1" opacity="0.8" />

          {/* Consequence labels */}
          <text x="210" y="262" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" fill="#6a6a5e" textAnchor="middle" letterSpacing="0.05em">COMMERCIAL</text>
          <text x="210" y="273" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" fill="#6a6a5e" textAnchor="middle" letterSpacing="0.05em">REAL ESTATE</text>
          <text x="390" y="262" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" fill="#6a6a5e" textAnchor="middle" letterSpacing="0.05em">CITY TAX BASE</text>
          <text x="390" y="273" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" fill="#6a6a5e" textAnchor="middle" letterSpacing="0.05em">+ PUBLIC FINANCE</text>
          <text x="570" y="262" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" fill="#6a6a5e" textAnchor="middle" letterSpacing="0.05em">ROADS, TRANSIT</text>
          <text x="570" y="273" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" fill="#6a6a5e" textAnchor="middle" letterSpacing="0.05em">+ INFRASTRUCTURE</text>

          {/* Bottom annotation */}
          <text x="390" y="298" fontFamily="'JetBrains Mono', monospace" fontSize="9" fill="#b52e71" textAnchor="middle" fontStyle="italic">nobody modeled this when the mandate landed</text>
        </svg>
      </div>

      {/* Streams grid */}
      <div
        className="grid sm:grid-cols-2"
        style={{ borderTop: "1px solid #e0dcd2", marginTop: "0" }}
      >
        {streams.map((stream, i) => (
          <div
            key={stream.number}
            className="stream-grid-entry"
            style={{
              padding: "14px 16px",
              borderBottom: "1px solid #e8e4da",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "8px",
                letterSpacing: "0.2em",
                color: "#b52e71",
                marginBottom: "4px",
              }}
            >
              STREAM {stream.number}
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                fontWeight: "600",
                color: "#1a1a2e",
                marginBottom: "4px",
              }}
            >
              {stream.name}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#6a6a5e",
                lineHeight: "1.6",
              }}
            >
              {stream.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Consequence note */}
      <div
        style={{
          marginTop: "20px",
          padding: "20px 20px 16px",
          border: "1px solid #b52e71",
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "-7px",
            left: "16px",
            background: "#f5f0e8",
            padding: "0 8px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "8px",
            letterSpacing: "0.25em",
            color: "#b52e71",
            textTransform: "uppercase",
          }}
        >
          Unmodeled Consequences
        </span>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "#6a6a5e",
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          Commercial real estate vacancy, collapsed city tax bases, and underfunded transit and
          infrastructure — these are downstream of the convergence. They arrived because the mandate
          was made without examining what the crossing of all five streams would produce.
        </p>
      </div>
    </div>
  );
}
