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
      `}</style>

      {/* Plain language intro */}
      <div style={{ marginBottom: 24, padding: '16px 18px', background: C.grayBg, borderRadius: 4, border: '1px solid #e5e7eb' }}>
        <p style={{ margin: 0, fontSize: 14, lineHeight: 1.85, color: '#444', fontFamily: sans }}>
          Before you commit to a direction, let&rsquo;s get clear on what you actually know versus what you&rsquo;re assuming. Most organizations can&rsquo;t tell the difference until someone asks directly. The AGA is that conversation — structured, forensic, and honest.{' '}
          <strong style={{ color: C.dark }}>It doesn&rsquo;t tell you what to do. It tells you what you&rsquo;re actually deciding.</strong>
        </p>
      </div>

      {/* Movement names row */}
      <div className="aga-grid" style={{ marginBottom: 6 }}>
        {movements.map(m => (
          <div key={m.num} style={{
            border: `1px solid ${C.pinkBorder}`,
            borderRadius: 4,
            padding: '14px 14px',
            background: C.pinkBg,
          }}>
            <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.18em', color: '#bbb', marginBottom: 6 }}>{m.num}</div>
            <div style={{ fontFamily: sans, fontSize: 15, fontWeight: 700, color: C.pink, lineHeight: 1.2, marginBottom: 5 }}>{m.name}</div>
            <div style={{ fontFamily: mono, fontSize: 9, letterSpacing: '0.06em', color: '#aaa', lineHeight: 1.5 }}>{m.sub}</div>
          </div>
        ))}
      </div>

      {/* What you do row */}
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb', margin: '14px 0 6px' }}>What you do</div>
      <div className="aga-grid" style={{ marginBottom: 6 }}>
        {movements.map(m => (
          <div key={m.num} style={{
            border: '1px solid #e5e7eb',
            borderRadius: 4,
            padding: '12px 14px',
            background: '#fff',
          }}>
            <p style={{ margin: 0, fontFamily: sans, fontSize: 12, lineHeight: 1.7, color: '#555' }}>{m.does}</p>
          </div>
        ))}
      </div>

      {/* What it produces row */}
      <div style={{ fontFamily: mono, fontSize: 8, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#bbb', margin: '14px 0 6px' }}>What it produces</div>
      <div className="aga-grid">
        {movements.map(m => (
          <div key={m.num} style={{
            border: `1px solid ${C.tealBorder}`,
            borderRadius: 4,
            padding: '12px 14px',
            background: C.tealBg,
          }}>
            <p style={{ margin: 0, fontFamily: sans, fontSize: 12, fontWeight: 600, lineHeight: 1.7, color: C.teal }}>{m.produces}</p>
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

function MapView() {
  const [active, setActive] = useState<string | null>(null)
  const activeField = adjacentFields.find(f => f.id === active)

  return (
    <div>
      <style>{`
        .viz-field-btn {
          position: absolute;
          transform: translate(-50%, -50%);
          background: transparent;
          border: 1px solid ${C.grayBorder};
          border-radius: 3px;
          padding: 5px 10px;
          cursor: pointer;
          font-family: ${sans};
          font-size: 11px;
          font-weight: 500;
          color: ${C.muted};
          white-space: nowrap;
          transition: all 0.15s;
          line-height: 1.4;
        }
        .viz-field-btn:hover,
        .viz-field-btn.active {
          background: ${C.grayBg};
          border-color: ${C.gray};
          color: ${C.dark};
        }
      `}</style>

      {/* Quadrant — scrollable on small screens */}
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <div style={{ position: 'relative', width: '100%', minWidth: 480, aspectRatio: '4 / 3', background: '#fafafa', border: '1px solid #e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '8%', right: '8%', height: 1, background: '#e5e7eb' }} />
        <div style={{ position: 'absolute', left: '50%', top: '8%', bottom: '8%', width: 1, background: '#e5e7eb' }} />

        {/* Axis labels */}
        <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', fontFamily: mono, fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c8c8c8' }}>Future</div>
        <div style={{ position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)', fontFamily: mono, fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c8c8c8' }}>Present</div>
        <div style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%) rotate(-90deg)', fontFamily: mono, fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c8c8c8', whiteSpace: 'nowrap' }}>Individual</div>
        <div style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%) rotate(90deg)', fontFamily: mono, fontSize: 8, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c8c8c8', whiteSpace: 'nowrap' }}>Organizational</div>

        {/* Everyday Futurism label */}
        <div style={{ position: 'absolute', top: 9, left: 14, fontFamily: mono, fontSize: 8, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.teal, opacity: 0.65 }}>Everyday Futurism</div>

        {/* Witnessed Trust — clickable */}
        <button
          onClick={() => setActive(active === 'witnessed-trust' ? null : 'witnessed-trust')}
          style={{
            position: 'absolute', right: '3%', top: '6%',
            background: active === 'witnessed-trust' ? '#fef3c7' : C.yellowBg,
            border: `1px solid ${active === 'witnessed-trust' ? '#f59e0b' : C.yellowBorder}`,
            borderRadius: 3, padding: '5px 10px',
            fontFamily: mono, fontSize: 8, letterSpacing: '0.07em', color: '#92400e', lineHeight: 1.6,
            cursor: 'pointer', textAlign: 'left',
          }}
        >
          Witnessed Trust<br />
          <span style={{ color: '#b45309', opacity: 0.7, fontSize: 7 }}>diagnostic layer</span>
        </button>

        {/* Adjacent fields */}
        {adjacentFields.map(field => (
          <button
            key={field.id}
            className={`viz-field-btn${active === field.id ? ' active' : ''}`}
            style={{ left: `${field.left}%`, top: `${field.top}%` }}
            onClick={() => setActive(active === field.id ? null : field.id)}
          >
            {field.label}
          </button>
        ))}

        {/* AGA — center */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          background: C.tealBg, border: `2px solid ${C.teal}`,
          borderRadius: 4, padding: '12px 18px',
          textAlign: 'center', zIndex: 10, minWidth: 130,
        }}>
          <div style={{ fontFamily: mono, fontSize: 7, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.teal, marginBottom: 5 }}>Methodology</div>
          <div style={{ fontFamily: sans, fontWeight: 700, fontSize: 12, color: C.teal, lineHeight: 1.3 }}>Assumption-Ground<br />Audit</div>
          <div style={{ fontFamily: mono, fontSize: 7, color: '#6b7280', marginTop: 6, letterSpacing: '0.06em' }}>spans all quadrants</div>
        </div>
      </div>
      </div>{/* end scroll wrapper */}

      {/* Active field description */}
      <div style={{
        marginTop: 10, minHeight: 52, padding: '12px 14px',
        background: (activeField || active === 'witnessed-trust') ? C.grayBg : 'transparent',
        border: (activeField || active === 'witnessed-trust') ? '1px solid #e5e7eb' : '1px solid transparent',
        borderRadius: 3, transition: 'all 0.2s',
      }}>
        {active === 'witnessed-trust' ? (
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: '#444', fontFamily: sans }}>
            <strong style={{ color: C.dark }}>Witnessed Trust —</strong>{' '}The diagnostic framework that runs underneath the AGA. Trust isn&rsquo;t declared — you extend it first, and what people witness determines whether it comes back. What surfaces in an AGA depends entirely on whether people feel safe saying &ldquo;I don&rsquo;t know why we believe that.&rdquo; That&rsquo;s not separable from the relationship, which is why this work can&rsquo;t be fully automated or templated.
          </p>
        ) : activeField ? (
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: '#444', fontFamily: sans }}>
            <strong style={{ color: C.dark }}>{activeField.label} —</strong>{' '}{activeField.desc}{' '}
            <span style={{ color: C.teal }}>The AGA works in the seam before any of this fully engages.</span>
          </p>
        ) : (
          <p style={{ margin: 0, fontFamily: mono, fontSize: 9, letterSpacing: '0.08em', color: '#6b7280' }}>
            ← select a discipline to see where it hands off
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
