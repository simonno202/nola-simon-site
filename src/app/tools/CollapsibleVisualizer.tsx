'use client'

import { useState } from 'react'
import PositioningVisualizer from './PositioningVisualizer'

export default function CollapsibleVisualizer({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false)

  const borderColor = dark ? 'rgba(255,255,255,0.1)' : '#ebebeb'
  const labelColor = '#ec4197'
  const titleColor = dark ? '#f0f0f0' : '#1a1a1a'
  const arrowColor = dark ? 'rgba(255,255,255,0.35)' : '#aaa'

  return (
    <div style={{ padding: '4px 0' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-label="Already have coaches, OD, and change management? See how this fits."
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          background: 'none',
          border: 'none',
          borderTop: `1px solid ${borderColor}`,
          borderBottom: open ? 'none' : `1px solid ${borderColor}`,
          padding: '16px 0',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: labelColor,
            display: 'block',
            marginBottom: 4,
          }}>
            Positioning
          </span>
          <span style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: titleColor,
          }}>
            Already have coaches, OD, and change management?
          </span>
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          color: arrowColor,
          flexShrink: 0,
          marginLeft: 16,
          display: 'inline-block',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s',
        }}>
          ↓
        </span>
      </button>

      {open && (
        <div style={{
          paddingTop: 28,
          paddingBottom: 28,
          borderBottom: `1px solid ${borderColor}`,
          ...(dark ? { background: '#fff', borderRadius: 4, padding: 24, marginBottom: 4 } : {}),
        }}>
          <PositioningVisualizer />
        </div>
      )}
    </div>
  )
}
