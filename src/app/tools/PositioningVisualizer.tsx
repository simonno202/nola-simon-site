'use client'

import { useState } from 'react'

type View = 'aga' | 'map' | 'modes' | 'cycle'

const C = {
  teal: '#0d9488',
  tealBg: '#f0fdfa',
  tealBorder: '#5eead4',
  pink: '#ec4197',
  pinkBg: '#fff0f7',
  pinkBorder: '#f9a8d4',
  yellow: '#d97706',
  yellowBg: '#fffbeb',
  yellowBorder: '#fde68a',
  gray: '#9ca3af',
  grayBg: '#f9fafb',
  grayBorder: '#e5e7eb',
  dark: '#0a0a0a',
  muted: '#6b7280',
}

const mono = "'JetBrains Mono', monospace"
const sans = "'Plus Jakarta Sans', sans-serif"

// ─── AGA MOVEMENTS ─────────────────────────────────────────────

const movements = [
  {
    num: 1,
    name: 'Orient',
    sub: 'Name the decision',
    does: 'Map the decision at stake. Who framed it? When?',
    produces: 'Shared definition of what\'s actually being decided',
  },
  {
    num: 2,
    name: 'Excavate',
    sub: 'Surface the assumptions',
    does: 'Ask what the org is treating as fact without checking.',
    produces: 'Inventory of live assumptions — named and visible',
  },
  {
    num: 3,
    name: 'Test',
    sub: 'What still holds?',
    does: 'Stress each one. What\'s evidence? What\'s inherited?',
    produces: 'Sorted list: ground vs assumption vs unknown',
  },
  {
    num: 4,
    name: 'Hand off',
    sub: 'Clear ground to act on',
    does: 'Name what holds, what doesn\'t, what needs a decision.',
    produces: 'Briefing the org can act on — eyes open',
  },
]

function AGAView() {
  const [showPsych, setShowPsych] = useState(false)

  return (
    <div>
      <style>{`
        .aga-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        @media (max-width: 640px) {
          .aga-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
        }
        @media (max-width: 380px) {
          .aga-grid { grid-template-columns: 1fr; }
        }
        /* Desktop: show row layout; mobile: hide it */
        .aga-rows { display: block; }
        .aga-cards { display: none; }
        @media (max-width: 640px) {
          .aga-rows { display: none; }
          .aga-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        }
        @media (max-width: 380px) {
          .aga-cards { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Plain language intro */}
      <div style={{ marginBottom: 24, padding: '16px 18px', background: C.grayBg, borderRadius: 4, border: '1px solid #e5e7eb' }}>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: '#444', fontFamily: sans }}>
          Before you commit to a direction, let&rsquo;s get clear on what you actually know versus what you&rsquo;re assuming. Most organizations can&rsquo;t tell the difference until someone asks directly. The AGA is that conversation — structured, forensic, and honest.{' '}
          <strong style={{ color: C.dark }}>It doesn&rsquo;t tell you what to do. It tells you what you&rsquo;re actually deciding.</strong>
        </p>
      </div>

      {/* Desktop: three separate rows */}
      <div className="aga-rows">
        <div className="aga-grid" style={{ marginBottom: 6 }}>
          {movements.map(m => (
            <div key={m.num} style={{ border: `1px solid ${C.pinkBorder}`, borderRadius: 4, padding: '14px 14px', background: C.pinkBg }}>
              <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.18em', color: '#bbb', marginBottom: 6 }}>{m.num}</div>
              <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 700, color: C.pink, lineHeight: 1.2, marginBottom: 5 }}>{m.name}</div>
              <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.06em', color: '#aaa', lineHeight: 1.5 }}>{m.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb', margin: '14px 0 6px' }}>What you do</div>
        <div className="aga-grid" style={{ marginBottom: 6 }}>
          {movements.map(m => (
            <div key={m.num} style={{ border: '1px solid #e5e7eb', borderRadius: 4, padding: '12px 14px', background: '#fff' }}>
              <p style={{ margin: 0, fontFamily: sans, fontSize: 12, lineHeight: 1.7, color: '#555' }}>{m.does}</p>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb', margin: '14px 0 6px' }}>What it produces</div>
        <div className="aga-grid">
          {movements.map(m => (
            <div key={m.num} style={{ border: `1px solid ${C.tealBorder}`, borderRadius: 4, padding: '12px 14px', background: C.tealBg }}>
              <p style={{ margin: 0, fontFamily: sans, fontSize: 12, fontWeight: 600, lineHeight: 1.7, color: C.teal }}>{m.produces}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: one card per movement */}
      <div className="aga-cards">
        {movements.map(m => (
          <div key={m.num} style={{ border: `1px solid ${C.pinkBorder}`, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ padding: '12px 14px', background: C.pinkBg }}>
              <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.18em', color: '#bbb', marginBottom: 4 }}>{m.num}</div>
              <div style={{ fontFamily: sans, fontSize: 14, fontWeight: 700, color: C.pink, lineHeight: 1.2, marginBottom: 3 }}>{m.name}</div>
              <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.06em', color: '#aaa' }}>{m.sub}</div>
            </div>
            <div style={{ padding: '10px 14px', background: '#fff', borderTop: '1px solid #e5e7eb' }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ccc', marginBottom: 4 }}>You do</div>
              <p style={{ margin: 0, fontFamily: sans, fontSize: 12, lineHeight: 1.65, color: '#555' }}>{m.does}</p>
            </div>
            <div style={{ padding: '10px 14px', background: C.tealBg, borderTop: `1px solid ${C.tealBorder}` }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.teal, opacity: 0.6, marginBottom: 4 }}>Produces</div>
              <p style={{ margin: 0, fontFamily: sans, fontSize: 12, fontWeight: 600, lineHeight: 1.65, color: C.teal }}>{m.produces}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer notes */}
      <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid #ebebeb' }}>
        <p style={{ margin: '0 0 8px', fontFamily: mono, fontSize: 9, letterSpacing: '0.06em', color: '#aaa', lineHeight: 1.8 }}>
          The AGA doesn&rsquo;t decide the direction. It clears the ground so the organization can decide well.
        </p>
        <p style={{ margin: 0, fontFamily: mono, fontSize: 9, letterSpacing: '0.05em', color: '#bbb', lineHeight: 1.8 }}>
          Witnessed Trust runs underneath all four movements — what people have witnessed in the room shapes what surfaces.
        </p>
      </div>

      {/* Psychological safety distinction toggle */}
      <div style={{ marginTop: 18 }}>
        <button
          onClick={() => setShowPsych(p => !p)}
          aria-expanded={showPsych}
          style={{
            background: 'none',
            border: '1px solid #e5e7eb',
            borderRadius: 3,
            padding: '8px 14px',
            cursor: 'pointer',
            fontFamily: mono,
            fontSize: 9,
            letterSpacing: '0.1em',
            color: '#888',
            transition: 'all 0.15s',
          }}
        >
          {showPsych ? '↑ ' : '↓ '}How is this different from psychological safety?
        </button>
        {showPsych && (
          <div style={{ marginTop: 12, padding: '16px 18px', background: C.yellowBg, border: `1px solid ${C.yellowBorder}`, borderRadius: 4 }}>
            <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.85, color: '#444', fontFamily: sans }}>
              <strong style={{ color: C.dark }}>Psychological safety is a climate condition.</strong>{' '}
              It asks: do people generally feel safe to speak up, disagree, or admit they don&rsquo;t know? It&rsquo;s ambient and ongoing — you can&rsquo;t install it in a single session.
            </p>
            <p style={{ margin: '0 0 12px', fontSize: 14, lineHeight: 1.85, color: '#444', fontFamily: sans }}>
              <strong style={{ color: C.dark }}>The AGA is a structured forensic process.</strong>{' '}
              It doesn&rsquo;t wait for a culture of psychological safety to exist. It uses{' '}
              <em>witnessed trust</em> — specific, earned credibility from observed behavior — to do the work it can do right now, in this room, about this decision.
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: '#444', fontFamily: sans }}>
              The distinction matters because psychological safety has become organizational wallpaper. People know the word. They&rsquo;ve done the workshops. The AGA is different: it&rsquo;s bounded (one decision, one moment), forensic (structured questioning), and it produces a deliverable — a sorted inventory of what the organization knows versus what it&rsquo;s inherited or assumed.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── MAP VIEW ─────────────────────────────────────────────────

const adjacentFields = [
  { id: 'coaching',    label: 'Coaching',            left: 13, top: 80, desc: 'Works with the individual after direction is chosen — ongoing personal development.' },
  { id: 'mentoring',  label: 'Mentoring',            left: 12, top: 58, desc: 'Relationship-based guidance across time. Present-rooted, future-aware.' },
  { id: 'ld',         label: 'Leadership Dev.',      left: 14, top: 22, desc: 'Prepares individuals for future demands — leadership programs, training & development, innovation teams. Structured, post-framing work that assumes the direction is already set.' },
  { id: 'succession', label: 'Succession Planning',  left: 80, top: 22, desc: 'Plans who leads the organization into the future. Assumes the direction is already known.' },
  { id: 'strategy',   label: 'Strategists',          left: 76, top: 44, desc: 'Defines organizational direction. Often engaged after the pre-adoption window has closed.' },
  { id: 'change',     label: 'Change Management',    left: 72, top: 67, desc: 'Manages transitions after direction has been set. Assumes the decision is made — focuses on adoption and execution.' },
  { id: 'comms',      label: 'Communications',       left: 60, top: 86, desc: 'Shapes how decisions are messaged to stakeholders. Operates after assumptions have been formalized into strategy.' },
  { id: 'od',         label: 'Org. Development',     left: 84, top: 74, desc: 'Improves how an organization functions now — systems, culture, process, and team effectiveness. Works with what\'s already in motion, post-decision.' },
]

// SVG label definitions: lines[], cx, cy, w, h in viewBox units (400×300)
const svgFields: Array<{
  id: string
  lines: string[]
  cx: number
  cy: number
  w: number
  h: number
  desc: string
}> = [
  { id: 'coaching',   lines: ['Coaching'],             cx: 52,  cy: 240, w: 68, h: 22, desc: 'Works with the individual after direction is chosen — ongoing personal development.' },
  { id: 'mentoring',  lines: ['Mentoring'],             cx: 48,  cy: 174, w: 68, h: 22, desc: 'Relationship-based guidance across time. Present-rooted, future-aware.' },
  { id: 'ld',         lines: ['Leadership', 'Dev.'],    cx: 60,  cy: 68,  w: 74, h: 34, desc: 'Prepares individuals for future demands — leadership programs, training & development, innovation teams. Structured, post-framing work that assumes the direction is already set.' },
  { id: 'succession', lines: ['Succession', 'Planning'],cx: 320, cy: 68,  w: 78, h: 34, desc: 'Plans who leads the organization into the future. Assumes the direction is already known.' },
  { id: 'strategy',   lines: ['Strategists'],           cx: 308, cy: 132, w: 74, h: 22, desc: 'Defines organizational direction. Often engaged after the pre-adoption window has closed.' },
  { id: 'change',     lines: ['Change', 'Mgmt.'],       cx: 292, cy: 201, w: 66, h: 34, desc: 'Manages transitions after direction has been set. Assumes the decision is made — focuses on adoption and execution.' },
  { id: 'comms',      lines: ['Comms.'],                cx: 238, cy: 260, w: 56, h: 22, desc: 'Shapes how decisions are messaged to stakeholders. Operates after assumptions have been formalized into strategy.' },
  { id: 'od',         lines: ['Org. Dev.'],             cx: 348, cy: 224, w: 66, h: 22, desc: 'Improves how an organization functions now — systems, culture, process, and team effectiveness. Works with what\'s already in motion, post-decision.' },
]

function FieldLabel({ field, isActive, onClick }: {
  field: typeof svgFields[0]
  isActive: boolean
  onClick: () => void
}) {
  const x = field.cx - field.w / 2
  const y = field.cy - field.h / 2
  const midY = field.lines.length === 1 ? field.cy + 4 : field.cy - 4
  return (
    <g onClick={onClick} style={{ cursor: 'pointer' }} role="button" aria-pressed={isActive}>
      <rect
        x={x} y={y} width={field.w} height={field.h}
        fill={isActive ? C.grayBg : 'white'}
        stroke={isActive ? C.gray : C.grayBorder}
        strokeWidth={0.75} rx={2}
      />
      {field.lines.map((line, i) => (
        <text
          key={i}
          x={field.cx}
          y={midY + i * 13}
          textAnchor="middle"
          fontSize={10}
          fontFamily={sans}
          fontWeight={isActive ? 600 : 400}
          fill={isActive ? C.dark : C.muted}
        >
          {line}
        </text>
      ))}
    </g>
  )
}

function MapView() {
  const [active, setActive] = useState<string | null>(null)
  const activeField = svgFields.find(f => f.id === active)

  const toggle = (id: string) => setActive(prev => prev === id ? null : id)

  const descLabel = active === 'witnessed-trust' ? 'Witnessed Trust'
    : activeField ? activeField.lines.join(' ') : null
  const descText = active === 'witnessed-trust'
    ? `The diagnostic framework that runs underneath the AGA. Trust isn't declared — you extend it first, and what people witness determines whether it comes back. What surfaces in an AGA depends entirely on whether people feel safe saying "I don't know why we believe that." That's not separable from the relationship, which is why this work can't be fully automated or templated.`
    : activeField
      ? `${activeField.desc} The AGA works in the seam before any of this fully engages.`
      : null

  const wtActive = active === 'witnessed-trust'

  return (
    <div>
      {/* SVG map — scales to any container width, no min-width */}
      <svg
        viewBox="0 0 400 300"
        width="100%"
        style={{ display: 'block', background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: 4 }}
        aria-label="Positioning map of the AGA relative to adjacent disciplines"
      >
        {/* Axes */}
        <line x1="32" y1="150" x2="368" y2="150" stroke="#e5e7eb" strokeWidth={1} />
        <line x1="200" y1="24" x2="200" y2="276" stroke="#e5e7eb" strokeWidth={1} />

        {/* Axis labels */}
        <text x="200" y="14" textAnchor="middle" fontSize={7} fontFamily={mono} letterSpacing={2} fill="#d1d5db" textDecoration="none">FUTURE</text>
        <text x="200" y="293" textAnchor="middle" fontSize={7} fontFamily={mono} letterSpacing={2} fill="#d1d5db">PRESENT</text>
        <text x="12" y="154" textAnchor="middle" fontSize={7} fontFamily={mono} letterSpacing={2} fill="#d1d5db" transform="rotate(-90,12,150)">INDIVIDUAL</text>
        <text x="388" y="154" textAnchor="middle" fontSize={7} fontFamily={mono} letterSpacing={2} fill="#d1d5db" transform="rotate(90,388,150)">ORGANIZATIONAL</text>

        {/* Everyday Futurism watermark */}
        <text x="16" y="20" fontSize={7} fontFamily={mono} letterSpacing={1.5} fill={C.teal} opacity={0.55}>EVERYDAY FUTURISM</text>

        {/* Witnessed Trust */}
        <g onClick={() => toggle('witnessed-trust')} style={{ cursor: 'pointer' }} role="button" aria-pressed={wtActive}>
          <rect x={298} y={8} width={92} height={30}
            fill={wtActive ? '#fef3c7' : C.yellowBg}
            stroke={wtActive ? '#f59e0b' : C.yellowBorder}
            strokeWidth={0.75} rx={2}
          />
          <text x={344} y={21} textAnchor="middle" fontSize={9} fontFamily={mono} letterSpacing={0.5} fill="#92400e">Witnessed Trust</text>
          <text x={344} y={32} textAnchor="middle" fontSize={7} fontFamily={mono} fill="#b45309" opacity={0.7}>diagnostic layer</text>
        </g>

        {/* Adjacent fields */}
        {svgFields.map(field => (
          <FieldLabel
            key={field.id}
            field={field}
            isActive={active === field.id}
            onClick={() => toggle(field.id)}
          />
        ))}

        {/* AGA — center */}
        <rect x={154} y={122} width={92} height={56}
          fill={C.tealBg} stroke={C.teal} strokeWidth={1.5} rx={3}
        />
        <text x={200} y={137} textAnchor="middle" fontSize={6.5} fontFamily={mono} letterSpacing={1.5} fill={C.teal}>METHODOLOGY</text>
        <text x={200} y={151} textAnchor="middle" fontSize={9.5} fontFamily={sans} fontWeight={700} fill={C.teal}>Assumption-Ground</text>
        <text x={200} y={163} textAnchor="middle" fontSize={9.5} fontFamily={sans} fontWeight={700} fill={C.teal}>Audit</text>
        <text x={200} y={174} textAnchor="middle" fontSize={6.5} fontFamily={mono} letterSpacing={0.5} fill="#6b7280">spans all quadrants</text>
      </svg>

      {/* Description panel */}
      <div style={{
        marginTop: 10, minHeight: 52, padding: '12px 14px',
        background: descText ? C.grayBg : 'transparent',
        border: descText ? '1px solid #e5e7eb' : '1px solid transparent',
        borderRadius: 3, transition: 'all 0.2s',
      }}>
        {descText ? (
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: '#444', fontFamily: sans }}>
            {descLabel && <strong style={{ color: C.dark }}>{descLabel} — </strong>}
            {descText}
          </p>
        ) : (
          <p style={{ margin: 0, fontFamily: mono, fontSize: 9, letterSpacing: '0.08em', color: '#6b7280' }}>
            Tap a discipline to see where it hands off
          </p>
        )}
      </div>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 20, marginTop: 14, flexWrap: 'wrap' }}>
        {[
          { bg: C.tealBg, border: C.teal, label: 'Core methodology' },
          { bg: C.grayBg, border: C.grayBorder, label: 'Adjacent disciplines' },
          { bg: C.yellowBg, border: C.yellowBorder, label: 'Diagnostic framework' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 10, height: 10, background: item.bg, border: `1px solid ${item.border}`, borderRadius: 2, flexShrink: 0 }} />
            <span style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.1em', color: '#4b5563' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── MODES VIEW ────────────────────────────────────────────────

const modesList = [
  { label: 'Keynote',             sub: 'Entry point' },
  { label: 'Coaching',            sub: 'Ongoing individual work' },
  { label: 'Mentoring',           sub: 'Relationship over time' },
  { label: 'Strategic Advisory',  sub: 'Embedded, recurring' },
  { label: 'OD Facilitation',       sub: 'Organizational scope' },
  { label: 'Mindset Coaching',      sub: 'Unblocking practitioners' },
]

function ModesView() {
  return (
    <div>
      <style>{`
        .viz-modes-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        @media (max-width: 560px) { .viz-modes-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>

      <div className="viz-modes-grid">
        {modesList.slice(0, 3).map(m => (
          <div key={m.label} style={{ border: `1px solid ${C.tealBorder}`, borderRadius: 4, padding: '14px 14px', background: C.tealBg }}>
            <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: C.teal, lineHeight: 1.35, marginBottom: 6 }}>{m.label}</div>
            <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.08em', color: '#888', lineHeight: 1.5 }}>{m.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ margin: '10px 0', border: `2px solid ${C.pink}`, borderRadius: 4, padding: '18px 20px', background: C.pinkBg }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 20 }}>
          <div style={{ flex: '0 0 auto' }}>
            <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.pink, marginBottom: 6 }}>Core methodology</div>
            <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 16, color: C.dark, lineHeight: 1.2 }}>Assumption-Ground Audit</div>
          </div>
          <div style={{ flex: '1 1 180px', borderLeft: '1px solid #f9a8d4', paddingLeft: 20 }}>
            <p style={{ margin: 0, fontFamily: sans, fontSize: 13, lineHeight: 1.75, color: '#666' }}>
              The methodology stays constant. The modality shifts with the relationship. Depending on how close you are and what the moment calls for, the same forensic work shows up as a keynote, a coaching engagement, or a seat in the room as strategic advisor.
            </p>
          </div>
        </div>
      </div>

      <div className="viz-modes-grid">
        {modesList.slice(3).map(m => (
          <div key={m.label} style={{ border: `1px solid ${C.tealBorder}`, borderRadius: 4, padding: '14px 14px', background: C.tealBg }}>
            <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 700, color: C.teal, lineHeight: 1.35, marginBottom: 6 }}>{m.label}</div>
            <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.08em', color: '#888', lineHeight: 1.5 }}>{m.sub}</div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: 20, fontFamily: mono, fontSize: 10, letterSpacing: '0.04em', color: '#aaa', lineHeight: 1.85 }}>
        Coaching, mentoring, strategic advisory — these aren&rsquo;t competitor categories. They&rsquo;re relational modes. The depth of the relationship determines what the moment calls for.
      </p>
    </div>
  )
}

// ─── CYCLE VIEW ────────────────────────────────────────────────

const cycleColumns = [
  { modality: 'Keynote',            rel: '1st engagement' },
  { modality: 'Coaching',           rel: 'Relationship deepens' },
  { modality: 'Strategic Advisory', rel: 'Modality expands' },
]

function CycleView() {
  return (
    <div>
      <style>{`
        .viz-cycle-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        @media (max-width: 520px) { .viz-cycle-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="viz-cycle-grid">
        {cycleColumns.map((col, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ border: `1px solid ${C.tealBorder}`, borderRadius: '4px 4px 0 0', padding: '12px 14px', background: C.tealBg }}>
              <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 700, color: C.teal, marginBottom: 4 }}>Modality varies</div>
              <div style={{ fontFamily: mono, fontSize: 8, color: '#aaa', marginBottom: 5, letterSpacing: '0.08em' }}>by relationship depth</div>
              <div style={{ fontFamily: mono, fontSize: 9, color: C.teal, fontWeight: 600, letterSpacing: '0.05em' }}>{col.modality}</div>
            </div>
            <div style={{ textAlign: 'center', lineHeight: '20px', color: '#9ca3af', fontSize: 14 }} aria-hidden="true">↓</div>
            <div style={{ border: `1px solid ${C.pinkBorder}`, borderRadius: '0 0 4px 4px', padding: '12px 14px', background: C.pinkBg }}>
              <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.pink, marginBottom: 5 }}>methodology</div>
              <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 700, color: C.dark, lineHeight: 1.4 }}>Assumption-Ground Audit</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ margin: '14px 0', border: '1px dashed #9ca3af', borderRadius: 4, padding: '14px 20px', textAlign: 'center', background: '#f3f4f6' }}>
        <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4b5563', marginBottom: 6 }}>Continuous change</div>
        <div style={{ fontFamily: mono, fontSize: 9, color: '#6b7280', letterSpacing: '0.04em' }}>new tools · new pressures · new directions · new assumptions forming</div>
      </div>

      <div className="viz-cycle-grid">
        {cycleColumns.map((col, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ border: `1px dashed ${C.pinkBorder}`, borderRadius: '4px 4px 0 0', padding: '12px 14px', background: '#fff' }}>
              <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: C.pink, marginBottom: 4 }}>Pre-adoption moment</div>
              <div style={{ fontFamily: mono, fontSize: 8, color: '#6b7280', letterSpacing: '0.08em' }}>entry point</div>
            </div>
            <div style={{ textAlign: 'center', lineHeight: '20px', color: '#9ca3af', fontSize: 14 }} aria-hidden="true">↓</div>
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '0 0 4px 4px', padding: '12px 14px', background: C.grayBg }}>
              <div style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: C.muted, marginBottom: 4 }}>Direction set</div>
              <div style={{ fontFamily: mono, fontSize: 8, color: '#6b7280', letterSpacing: '0.06em', marginBottom: 4 }}>with examined assumptions</div>
              <div style={{ fontFamily: mono, fontSize: 8, color: '#6b7280', letterSpacing: '0.05em' }}>{col.rel}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid #ebebeb' }}>
        <p style={{ margin: 0, fontFamily: mono, fontSize: 9, letterSpacing: '0.05em', color: '#4b5563', lineHeight: 1.9 }}>
          Each wave of change regenerates the pre-adoption moment. The methodology is constant. The entry point keeps recurring. The relationship deepens — and with it, the modality available expands.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 18, marginTop: 14, flexWrap: 'wrap' }} aria-label="Legend">
        {[
          { bg: C.tealBg, border: C.tealBorder, label: 'Relational modality' },
          { bg: C.pinkBg, border: C.pinkBorder, label: 'Core methodology' },
          { bg: C.grayBg, border: '#e5e7eb', label: 'Examined outcome' },
        ].map(item => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 10, height: 10, background: item.bg, border: `1px solid ${item.border}`, borderRadius: 2, flexShrink: 0 }} aria-hidden="true" />
            <span style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.1em', color: '#4b5563' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── MAIN ─────────────────────────────────────────────────────

export default function PositioningVisualizer() {
  const [view, setView] = useState<View>('map')

  const tabs: { id: View; label: string }[] = [
    { id: 'aga',   label: 'The AGA' },
    { id: 'map',   label: 'The Map' },
    { id: 'modes', label: 'The Modes' },
    { id: 'cycle', label: 'The Cycle' },
  ]

  return (
    <div style={{ fontFamily: sans, color: C.dark }}>
      <style>{`
        .viz-tab {
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 10px 18px;
          cursor: pointer;
          font-family: ${sans};
          font-size: 13px;
          color: #4b5563;
          margin-bottom: -1px;
          transition: all 0.15s;
          font-weight: 400;
        }
        .viz-tab.active { color: #ec4197; border-bottom-color: #ec4197; font-weight: 700; }
        .viz-tab:hover:not(.active) { color: #111; }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <span style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.pink, display: 'block', marginBottom: 10 }}>
          The Work
        </span>
        <h2 style={{ fontFamily: sans, fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, letterSpacing: '-0.02em', color: C.dark, margin: '0 0 10px' }}>
          How the Assumption-Ground Audit works
        </h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: '#555', maxWidth: 560 }}>
          Four movements. A forensic process. A decision made with eyes open.
        </p>
      </div>

      {/* Tabs */}
      <div role="tablist" style={{ borderBottom: '1px solid #ebebeb', marginBottom: 28, display: 'flex', overflowX: 'auto' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={view === tab.id}
            className={`viz-tab${view === tab.id ? ' active' : ''}`}
            onClick={() => setView(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {view === 'aga'   && <AGAView />}
      {view === 'map'   && <MapView />}
      {view === 'modes' && <ModesView />}
      {view === 'cycle' && <CycleView />}
    </div>
  )
}
