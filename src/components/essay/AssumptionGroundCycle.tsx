const stages = [
  {
    number: "01",
    label: "DECISION UPSTREAM",
    desc: "Decision made before frontline concerns enter the room.",
  },
  {
    number: "02",
    label: "CONCERNS RAISED",
    desc: "Frontline staff identify what the plan does not account for.",
  },
  {
    number: "03",
    label: "RESISTANCE LABEL",
    desc: "Concerns are categorized as adoption problems, not intelligence.",
  },
  {
    number: "04",
    label: "CHANGE MANAGEMENT DEPLOYED",
    desc: "A process designed to help the decision land, not reopen it.",
  },
  {
    number: "05",
    label: "PROJECT FAILS",
    desc: "Investigation finds execution failure, market conditions, timing.",
  },
  {
    number: "06",
    label: "CULTURE HARDENS",
    desc: "Staff file it under how things work here. The next initiative begins.",
  },
];

export function AssumptionGroundCycle() {
  const cx = 260;
  const cy = 230;
  const r = 148;
  const total = stages.length;

  // Positions: start at top (-90deg), go clockwise
  const positions = stages.map((_, i) => {
    const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    };
  });

  // Arc path between two nodes (slightly curved)
  function arcPath(from: { x: number; y: number }, to: { x: number; y: number }) {
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    // Pull midpoint slightly toward center for a gentle curve
    const cpx = mx + (cx - mx) * 0.18;
    const cpy = my + (cy - my) * 0.18;
    return `M ${from.x} ${from.y} Q ${cpx} ${cpy} ${to.x} ${to.y}`;
  }

  return (
    <div
      style={{
        borderTop: "1px solid #e0dcd2",
        borderBottom: "1px solid #e0dcd2",
        padding: "40px 0",
        margin: "40px 0",
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
          marginBottom: "8px",
        }}
      >
        The Suppression Cycle — Everyday Futurism
      </p>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.12em",
          color: "#b52e71",
          textAlign: "center",
          marginBottom: "28px",
          fontStyle: "italic",
        }}
      >
        what change management is deployed into
      </p>

      {/* SVG */}
      <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <svg
          viewBox="0 0 520 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", minWidth: "420px", height: "auto", display: "block" }}
        >
          {/* Connecting arcs */}
          {stages.map((_, i) => {
            const from = positions[i];
            const to = positions[(i + 1) % total];
            const isLast = i === total - 1;
            return (
              <path
                key={i}
                d={arcPath(from, to)}
                stroke={isLast ? "#b52e71" : "#c8c4ba"}
                strokeWidth={isLast ? "1.2" : "0.8"}
                strokeDasharray={isLast ? "4 3" : undefined}
                opacity={isLast ? 0.7 : 0.6}
                markerEnd={`url(#arrow-${isLast ? "pink" : "grey"})`}
              />
            );
          })}

          {/* Arrow markers */}
          <defs>
            <marker id="arrow-grey" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#c8c4ba" opacity="0.7" />
            </marker>
            <marker id="arrow-pink" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" fill="#b52e71" opacity="0.8" />
            </marker>
          </defs>

          {/* Center label */}
          <text
            x={cx}
            y={cy - 14}
            fontFamily="'JetBrains Mono', monospace"
            fontSize="9"
            fill="#6a6a5e"
            textAnchor="middle"
            letterSpacing="0.2em"
          >
            THE CYCLE
          </text>
          <text
            x={cx}
            y={cy + 2}
            fontFamily="'JetBrains Mono', monospace"
            fontSize="9"
            fill="#b52e71"
            textAnchor="middle"
            fontStyle="italic"
          >
            repeats until
          </text>
          <text
            x={cx}
            y={cy + 16}
            fontFamily="'JetBrains Mono', monospace"
            fontSize="9"
            fill="#b52e71"
            textAnchor="middle"
            fontStyle="italic"
          >
            interrogated
          </text>

          {/* Stage nodes */}
          {stages.map((stage, i) => {
            const { x, y } = positions[i];
            const isBreakPoint = i === 5;
            return (
              <g key={stage.number}>
                <circle
                  cx={x}
                  cy={y}
                  r={14}
                  fill="#f5f0e8"
                  stroke={isBreakPoint ? "#b52e71" : "#c8c4ba"}
                  strokeWidth={isBreakPoint ? "1.4" : "0.8"}
                />
                <text
                  x={x}
                  y={y + 4}
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize="9"
                  fill={isBreakPoint ? "#b52e71" : "#6a6a5e"}
                  textAnchor="middle"
                  fontWeight={isBreakPoint ? "600" : "400"}
                >
                  {stage.number}
                </text>
              </g>
            );
          })}

          {/* Stage labels — positioned outside nodes */}
          {stages.map((stage, i) => {
            const { x, y } = positions[i];
            const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
            const labelR = r + 36;
            const lx = cx + labelR * Math.cos(angle);
            const ly = cy + labelR * Math.sin(angle);
            const anchor =
              Math.abs(Math.cos(angle)) < 0.15
                ? "middle"
                : Math.cos(angle) > 0
                ? "start"
                : "end";
            const isBreakPoint = i === 5;

            return (
              <text
                key={stage.number}
                x={lx}
                y={ly}
                fontFamily="'JetBrains Mono', monospace"
                fontSize="8"
                fill={isBreakPoint ? "#b52e71" : "#6a6a5e"}
                textAnchor={anchor}
                letterSpacing="0.12em"
              >
                {stage.label}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Stages grid */}
      <div
        className="grid sm:grid-cols-2"
        style={{ borderTop: "1px solid #e0dcd2", marginTop: "4px" }}
      >
        {stages.map((stage) => (
          <div
            key={stage.number}
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
              STAGE {stage.number}
            </div>
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1a1a2e",
                marginBottom: "4px",
              }}
            >
              {stage.label}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: "#6a6a5e",
                lineHeight: 1.6,
              }}
            >
              {stage.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Break note */}
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
          Where the Assumption-Ground Audit enters
        </span>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "#6a6a5e",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Before Stage 01. Not after the project fails. Before the decision closes — finding
          whose concern was structurally prevented from registering, and what that cost.
        </p>
      </div>
    </div>
  );
}
