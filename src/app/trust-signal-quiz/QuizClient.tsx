'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { questions, results, acts, TOTAL } from './quizData'

type Screen = 'title' | 'quiz' | 'results' | 'path'
type Answer = number | null

interface SavedProgress {
  currentQ: number
  answers: Answer[]
  sessionId: string
  sessionStartTime: number
}

interface Session {
  sessionId: string
  band: string
  score: number
  timeMs: number | null
  pathway: string | null
  answers: string[]
}

const STORAGE_KEY = 'trust_quiz_v1'
const QUIZ_ENDPOINT = '/api/quiz-submit'

const badgeConfigs: Record<string, { gradStops: string[]; accent: string; line1: string; line2: string; tagline: string }> = {
  'Witnessed Observer': { gradStops: ['#1a0820', '#6b1150', '#ec4197'], accent: '#ec4197', line1: 'WITNESSED', line2: 'OBSERVER', tagline: "You don't confuse visibility with verification." },
  'Selective Skeptic': { gradStops: ['#040f18', '#0a3650', '#0099cc'], accent: '#00c2e8', line1: 'SELECTIVE', line2: 'SKEPTIC', tagline: "You're asking the right questions — some of the time." },
  'Signal Inheritor': { gradStops: ['#0a1808', '#1e4010', '#5aab00'], accent: '#88cc1a', line1: 'SIGNAL', line2: 'INHERITOR', tagline: "Volume, prestige, and platform are doing most of your evaluating for you." },
}

function genId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7)
}

function postEvent(type: string, data: unknown, session: Partial<Session> | null) {
  fetch(QUIZ_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, data: data ?? null, session: session ?? null }),
  }).catch(() => {})
}

function wrapTextCanvas(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(' ')
  let line = ''
  const lines: string[] = []
  for (const word of words) {
    const test = line ? line + ' ' + word : word
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line)
      line = word
    } else {
      line = test
    }
  }
  lines.push(line)
  const totalH = lines.length * lineHeight
  let ly = y - (totalH - lineHeight) / 2
  for (const l of lines) {
    ctx.fillText(l, x, ly)
    ly += lineHeight
  }
}

function renderBadgeToCanvas(canvas: HTMLCanvasElement, bandKey: string, scale: number) {
  const S = Math.round(1080 * scale)
  canvas.width = S
  canvas.height = S
  const ctx = canvas.getContext('2d')!
  const cfg = badgeConfigs[bandKey] ?? badgeConfigs['Witnessed Observer']
  const m = Math.round(80 * scale)

  const grad = ctx.createLinearGradient(0, 0, S * 0.7, S)
  grad.addColorStop(0, cfg.gradStops[0])
  grad.addColorStop(0.5, cfg.gradStops[1])
  grad.addColorStop(1, cfg.gradStops[2])
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, S, S)

  ctx.strokeStyle = cfg.accent
  ctx.lineWidth = Math.max(1, Math.round(5 * scale))
  ctx.beginPath()
  ctx.moveTo(m, Math.round(108 * scale))
  ctx.lineTo(S - m, Math.round(108 * scale))
  ctx.stroke()

  ctx.fillStyle = cfg.accent
  ctx.font = `bold ${Math.round(32 * scale)}px "DM Sans", sans-serif`
  ctx.textAlign = 'center'
  ctx.fillText('TRUST SIGNAL QUIZ', S / 2, Math.round(162 * scale))

  ctx.fillStyle = '#ffffff'
  ctx.font = `bold ${Math.round(148 * scale)}px "Playfair Display", serif`
  ctx.fillText(cfg.line1, S / 2, Math.round(435 * scale))
  ctx.fillText(cfg.line2, S / 2, Math.round(615 * scale))

  ctx.strokeStyle = cfg.accent
  ctx.lineWidth = Math.max(1, Math.round(2 * scale))
  ctx.beginPath()
  ctx.moveTo(m, Math.round(685 * scale))
  ctx.lineTo(S - m, Math.round(685 * scale))
  ctx.stroke()

  ctx.fillStyle = 'rgba(255,255,255,0.72)'
  ctx.font = `300 ${Math.round(38 * scale)}px "DM Sans", sans-serif`
  wrapTextCanvas(ctx, cfg.tagline, S / 2, Math.round(765 * scale), S - m * 2.5, Math.round(54 * scale))

  ctx.strokeStyle = cfg.accent
  ctx.lineWidth = Math.max(1, Math.round(5 * scale))
  ctx.beginPath()
  ctx.moveTo(m, Math.round(940 * scale))
  ctx.lineTo(S - m, Math.round(940 * scale))
  ctx.stroke()

  ctx.fillStyle = 'rgba(255,255,255,0.55)'
  ctx.font = `${Math.round(28 * scale)}px "DM Sans", sans-serif`
  ctx.fillText('everydayfuturism.com', S / 2, Math.round(988 * scale))
  ctx.fillStyle = 'rgba(255,255,255,0.75)'
  ctx.font = `bold ${Math.round(30 * scale)}px "DM Sans", sans-serif`
  ctx.fillText('Nola Simon', S / 2, Math.round(1026 * scale))
}

export default function QuizClient() {
  const [screen, setScreen] = useState<Screen>('title')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>(new Array(TOTAL).fill(null))
  const [interstitial, setInterstitial] = useState<{ text: string; sub: string } | null>(null)
  const [pendingNext, setPendingNext] = useState<(() => void) | null>(null)
  const [showReview, setShowReview] = useState(false)
  const [path, setPath] = useState<'A' | 'B' | 'neither' | null>(null)
  const [resumeQ, setResumeQ] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [timeDisplay, setTimeDisplay] = useState('')
  const [session, setSession] = useState<Session | null>(null)
  const [emailA, setEmailA] = useState('')
  const [emailB, setEmailB] = useState('')
  const [subStatusA, setSubStatusA] = useState<'idle' | 'loading' | 'done'>('idle')
  const [subStatusB, setSubStatusB] = useState<'idle' | 'loading' | 'done'>('idle')

  const sessionStartRef = useRef<number | null>(null)
  const sessionIdRef = useRef<string | null>(null)
  const badgeRef = useRef<HTMLCanvasElement>(null)

  // Check for saved progress on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const s: SavedProgress = JSON.parse(raw)
      if (s && s.currentQ > 0 && s.currentQ < TOTAL - 1) {
        setResumeQ(s.currentQ)
      }
    } catch {}
  }, [])

  // Draw badge when results screen shows
  useEffect(() => {
    if (screen !== 'results' || !session || !badgeRef.current) return
    document.fonts.ready.then(() => {
      if (badgeRef.current) renderBadgeToCanvas(badgeRef.current, session.band, 0.25)
    })
  }, [screen, session])

  // Keyboard navigation
  useEffect(() => {
    if (screen !== 'quiz') return
    const handler = (e: KeyboardEvent) => {
      if (interstitial) {
        if (e.key === 'Enter') dismissInterstitial()
        return
      }
      if (showReview) {
        if (e.key === 'Escape') setShowReview(false)
        return
      }
      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key) - 1
        selectOption(idx)
      }
      if (e.key === 'Enter') {
        const ans = answers[currentQ]
        if (ans !== null) advanceQuestion()
      }
      if (e.key === 'Backspace' && (e.target as HTMLElement).tagName !== 'INPUT') {
        e.preventDefault()
        if (currentQ > 0) setShowReview(true)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [screen, currentQ, answers, interstitial, showReview])

  function saveProgress(q: number, ans: Answer[], sid: string, start: number) {
    if (q === 0) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentQ: q, answers: ans, sessionId: sid, sessionStartTime: start, savedAt: Date.now() }))
    } catch {}
  }

  function clearProgress() {
    try { localStorage.removeItem(STORAGE_KEY) } catch {}
  }

  function startFresh() {
    const sid = genId()
    const start = Date.now()
    sessionIdRef.current = sid
    sessionStartRef.current = start
    setCurrentQ(0)
    setAnswers(new Array(TOTAL).fill(null))
    setScreen('quiz')
    clearProgress()
    window.scrollTo(0, 0)
  }

  function resumeQuiz() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) { startFresh(); return }
      const s: SavedProgress = JSON.parse(raw)
      sessionIdRef.current = s.sessionId
      sessionStartRef.current = s.sessionStartTime
      setCurrentQ(s.currentQ)
      setAnswers(s.answers)
      setResumeQ(null)
      setScreen('quiz')
      window.scrollTo(0, 0)
    } catch { startFresh() }
  }

  function selectOption(idx: number) {
    setAnswers(prev => {
      const next = [...prev]
      next[currentQ] = idx
      if (sessionIdRef.current && sessionStartRef.current) {
        saveProgress(currentQ, next, sessionIdRef.current, sessionStartRef.current)
      }
      return next
    })
  }

  function passQuestion() {
    if (answers[currentQ] !== null) return
    setAnswers(prev => {
      const next = [...prev]
      next[currentQ] = -1
      if (sessionIdRef.current && sessionStartRef.current) {
        saveProgress(currentQ, next, sessionIdRef.current, sessionStartRef.current)
      }
      return next
    })
  }

  function dismissInterstitial() {
    const cb = pendingNext
    setInterstitial(null)
    setPendingNext(null)
    if (cb) cb()
  }

  function advanceQuestion() {
    const ans = answers[currentQ]
    if (ans === null) return

    const doNext = () => {
      if (currentQ < TOTAL - 1) {
        setCurrentQ(q => q + 1)
        window.scrollTo(0, 0)
      } else {
        finishQuiz()
      }
    }

    if (currentQ === 8) {
      setPendingNext(() => doNext)
      setInterstitial({ text: "You're halfway. The pattern hasn't shown up yet.", sub: "That's deliberate. Nine questions in, and the signal stack is still being assembled. Keep going." })
      return
    }

    if (currentQ === 11) {
      const partialScore = answers.slice(0, 12).filter((a, i) => a === questions[i].correct).length
      const trendBand = partialScore >= 10 ? 'Witnessed Observer' : partialScore >= 7 ? 'Selective Skeptic' : 'Signal Inheritor'
      setPendingNext(() => doNext)
      setInterstitial({ text: `You're currently trending toward: ${trendBand}.`, sub: "Six questions left. The last act is where most people's answers shift — or confirm." })
      return
    }

    doNext()
  }

  function finishQuiz() {
    const finalScore = answers.reduce((acc, ans, i) => (acc as number) + (ans !== null && ans === questions[i].correct ? 1 : 0), 0) as number
    setScore(finalScore)

    const band = finalScore >= 15 ? results[0] : finalScore >= 9 ? results[1] : results[2]
    const timeMs = sessionStartRef.current ? Date.now() - sessionStartRef.current : null

    if (timeMs) {
      const mins = Math.floor(timeMs / 60000)
      const secs = Math.floor((timeMs % 60000) / 1000)
      setTimeDisplay(mins > 0 ? `You spent ${mins} min ${secs} sec. Most people quit at 3 minutes.` : `You spent ${secs} seconds. Most people quit at 3 minutes.`)
    }

    const sess: Session = {
      sessionId: sessionIdRef.current ?? genId(),
      band: band.key,
      score: finalScore,
      timeMs,
      pathway: null,
      answers: answers.map(String),
    }
    setSession(sess)
    postEvent('quiz_completed', null, sess)
    clearProgress()
    setScreen('results')
    window.scrollTo(0, 0)
  }

  function choosePathFn(p: 'A' | 'B' | 'neither') {
    setPath(p)
    if (session) {
      const updated = { ...session, pathway: p === 'A' ? 'A' : p === 'B' ? 'B' : 'neither' }
      postEvent('chose_path_' + p, null, updated)
    }
    window.scrollTo(0, 0)
  }

  function showPathScreen() {
    setPath(null)
    setScreen('path')
    window.scrollTo(0, 0)
  }

  function downloadBadge() {
    if (!session) return
    const canvas = document.createElement('canvas')
    document.fonts.ready.then(() => {
      renderBadgeToCanvas(canvas, session.band, 1)
      canvas.toBlob(blob => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `trust-signal-quiz-${session.band.toLowerCase().replace(/\s+/g, '-')}.png`
        document.body.appendChild(a)
        a.click()
        setTimeout(() => { URL.revokeObjectURL(url); a.remove() }, 100)
      })
    })
  }

  async function subscribeA(e: React.FormEvent) {
    e.preventDefault()
    if (!emailA) return
    setSubStatusA('loading')
    try {
      const res = await fetch(QUIZ_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'subscribe', data: { email: emailA }, session: session ? { ...session, pathway: 'subscribe' } : null }),
      })
      setSubStatusA(res.ok ? 'done' : 'idle')
    } catch { setSubStatusA('idle') }
  }

  async function subscribeB(e: React.FormEvent) {
    e.preventDefault()
    if (!emailB) return
    setSubStatusB('loading')
    try {
      const res = await fetch(QUIZ_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'subscribe', data: { email: emailB }, session: session ? { ...session, pathway: 'B' } : null }),
      })
      setSubStatusB(res.ok ? 'done' : 'idle')
    } catch { setSubStatusB('idle') }
  }

  const q = questions[currentQ]
  const act = acts.find(a => currentQ >= a.start && currentQ <= a.end)
  const currentAns = answers[currentQ]
  const hasAnswer = currentAns !== null
  const band = session ? (score >= 15 ? results[0] : score >= 9 ? results[1] : results[2]) : null

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        .quiz-wrap {
          --pink: #ec4197;
          --pink-light: rgba(236,65,151,0.08);
          --black: #0d0d0d;
          --off-white: #f7f4f0;
          --warm-grey: #8a8580;
          --mid-grey: #3d3a36;
          --border: rgba(13,13,13,0.12);
          font-family: 'DM Sans', sans-serif;
          background: var(--off-white);
          color: var(--black);
          min-height: 100vh;
        }

        /* TITLE */
        .qs-title { display:flex; flex-direction:column; align-items:center; justify-content:center; padding:72px 24px 80px; text-align:center; position:relative; overflow:hidden; }
        .qs-eyebrow { font-size:11px; font-weight:500; letter-spacing:0.18em; text-transform:uppercase; color:var(--pink); margin-bottom:24px; display:block; }
        .qs-title-h1 { font-family:'Playfair Display',serif; font-size:clamp(32px,6vw,58px); font-weight:700; line-height:1.1; max-width:720px; margin:0 0 8px; }
        .qs-title-h1 em { font-style:italic; color:var(--pink); }
        .qs-title-sub { font-size:15px; color:var(--warm-grey); font-weight:300; margin-bottom:48px; max-width:480px; line-height:1.6; }
        .qs-title-meta { display:flex; gap:32px; margin-bottom:48px; flex-wrap:wrap; justify-content:center; }
        .qs-meta-item { display:flex; flex-direction:column; align-items:center; gap:4px; }
        .qs-meta-num { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; color:var(--pink); }
        .qs-meta-label { font-size:11px; letter-spacing:0.1em; text-transform:uppercase; color:var(--warm-grey); }
        .qs-framing { max-width:560px; font-size:14px; line-height:1.7; color:var(--mid-grey); margin-bottom:48px; }
        .btn-primary { background:var(--pink); color:white; border:none; padding:16px 40px; font-family:'DM Sans',sans-serif; font-size:14px; font-weight:500; letter-spacing:0.04em; cursor:pointer; transition:opacity 0.15s; }
        .btn-primary:hover { opacity:0.88; }
        .resume-banner { margin-top:24px; padding:18px 24px; background:white; border:1px solid var(--border); max-width:380px; width:100%; text-align:center; }
        .resume-banner p { font-size:14px; color:var(--mid-grey); margin-bottom:14px; line-height:1.5; }
        .resume-actions { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; }
        .btn-resume { background:var(--pink); color:white; border:none; padding:10px 20px; font-family:'DM Sans',sans-serif; font-size:13px; cursor:pointer; font-weight:500; }
        .btn-ghost { background:none; border:1px solid var(--border); color:var(--warm-grey); padding:10px 20px; font-family:'DM Sans',sans-serif; font-size:13px; cursor:pointer; }

        /* QUIZ SCREEN */
        .qs-quiz { min-height:100vh; display:flex; flex-direction:column; position:relative; }
        .quiz-header { background:white; border-bottom:1px solid var(--border); padding:12px 24px; display:flex; align-items:center; justify-content:space-between; position:sticky; top:0; z-index:5; }
        .quiz-brand { font-size:12px; font-weight:500; letter-spacing:0.1em; text-transform:uppercase; color:var(--warm-grey); }
        .progress-container { display:flex; align-items:center; gap:10px; }
        .progress-text { font-size:11px; color:var(--warm-grey); white-space:nowrap; }
        .progress-track { width:120px; height:3px; background:rgba(0,0,0,0.1); border-radius:2px; overflow:hidden; }
        .progress-fill { height:100%; background:var(--pink); border-radius:2px; transition:width 0.3s ease; }
        .act-bar { background:var(--off-white); border-bottom:1px solid var(--border); padding:7px 24px; display:flex; align-items:center; gap:8px; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; color:var(--warm-grey); }
        .act-label { color:var(--pink); font-weight:500; }
        .quiz-body { max-width:680px; margin:0 auto; width:100%; padding:40px 24px 80px; flex:1; }
        .noticing-meter { display:flex; align-items:center; gap:8px; margin-bottom:20px; padding:9px 14px; background:rgba(236,65,151,0.06); border-left:2px solid var(--pink); }
        .noticing-label { font-size:11px; color:var(--warm-grey); text-transform:uppercase; letter-spacing:0.08em; white-space:nowrap; }
        .noticing-value { font-size:12px; font-weight:500; color:var(--pink); font-style:italic; }
        .q-number { font-size:11px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; color:var(--warm-grey); margin-bottom:12px; }
        .q-text { font-family:'Playfair Display',serif; font-size:clamp(18px,3vw,24px); font-weight:600; line-height:1.35; margin-bottom:10px; color:var(--black); }
        .q-subtext { font-size:14px; color:var(--warm-grey); margin-bottom:28px; line-height:1.6; font-style:italic; }
        .options-grid { display:flex; flex-direction:column; gap:10px; }
        .option-card { display:flex; align-items:flex-start; gap:14px; padding:16px 18px; background:white; border:1px solid var(--border); cursor:pointer; text-align:left; font-family:'DM Sans',sans-serif; font-size:14px; line-height:1.55; color:var(--mid-grey); transition:border-color 0.15s, background 0.15s; }
        .option-card:hover { border-color:rgba(236,65,151,0.4); }
        .option-card.selected { border-color:var(--pink); background:rgba(236,65,151,0.06); color:var(--black); }
        .option-dot { width:16px; height:16px; min-width:16px; border-radius:50%; border:1.5px solid var(--border); margin-top:2px; transition:background 0.15s, border-color 0.15s; }
        .option-card.selected .option-dot { background:var(--pink); border-color:var(--pink); }
        .q-commentary { margin-top:14px; padding:12px 16px; background:var(--pink-light); border-left:2px solid var(--pink); font-size:13px; font-style:italic; line-height:1.65; color:var(--mid-grey); }
        .pass-area { margin-top:10px; text-align:center; }
        .btn-pass { background:none; border:none; font-family:'DM Sans',sans-serif; font-size:12px; color:var(--warm-grey); cursor:pointer; text-decoration:underline; padding:4px 8px; }
        .btn-pass:hover { color:var(--black); }
        .btn-pass:disabled { text-decoration:none; color:var(--pink); cursor:default; }
        .kbd-hints { text-align:center; font-size:11px; color:rgba(0,0,0,0.25); margin-top:10px; letter-spacing:0.03em; }
        .kbd-hints kbd { font-family:inherit; background:rgba(0,0,0,0.07); border-radius:3px; padding:1px 5px; font-size:10px; }
        .quiz-nav { display:flex; justify-content:space-between; align-items:center; margin-top:32px; }
        .btn-back { background:none; border:none; font-family:'DM Sans',sans-serif; font-size:13px; color:var(--warm-grey); cursor:pointer; padding:10px 0; }
        .btn-back:disabled { opacity:0.3; cursor:default; }
        .btn-next { background:none; border:1px solid rgba(0,0,0,0.15); font-family:'DM Sans',sans-serif; font-size:13px; color:var(--warm-grey); cursor:pointer; padding:12px 28px; transition:all 0.15s; }
        .btn-next.enabled { background:var(--pink); border-color:var(--pink); color:white; }

        /* INTERSTITIAL */
        .interstitial-overlay { position:fixed; inset:0; background:var(--black); display:flex; flex-direction:column; align-items:center; justify-content:center; padding:40px 32px; text-align:center; z-index:50; }
        .interstitial-text { font-family:'Playfair Display',serif; font-size:clamp(20px,4vw,30px); font-weight:400; font-style:italic; color:white; line-height:1.4; max-width:520px; margin-bottom:16px; }
        .interstitial-sub { font-size:13px; color:rgba(247,244,240,0.5); margin-bottom:36px; max-width:420px; line-height:1.7; }
        .btn-interstitial { background:none; border:1px solid rgba(247,244,240,0.3); color:white; padding:12px 32px; font-family:'DM Sans',sans-serif; font-size:12px; letter-spacing:0.08em; text-transform:uppercase; cursor:pointer; transition:all 0.2s; }
        .btn-interstitial:hover { background:white; color:var(--black); }

        /* REVIEW DRAWER */
        .review-drawer { position:fixed; bottom:0; left:0; right:0; background:white; border-top:1px solid var(--border); z-index:40; max-height:60vh; overflow-y:auto; }
        .review-header { display:flex; align-items:center; justify-content:space-between; padding:14px 20px; border-bottom:1px solid var(--border); }
        .review-title { font-size:13px; font-weight:500; letter-spacing:0.06em; text-transform:uppercase; color:var(--mid-grey); }
        .review-close { background:none; border:none; font-size:20px; color:var(--warm-grey); cursor:pointer; line-height:1; padding:0 4px; }
        .review-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(160px,1fr)); gap:6px; padding:16px; }
        .review-item { display:flex; flex-direction:column; gap:2px; padding:10px 12px; background:var(--off-white); font-size:12px; }
        .review-q { font-weight:500; color:var(--warm-grey); font-size:10px; letter-spacing:0.08em; text-transform:uppercase; }
        .review-a { color:var(--mid-grey); line-height:1.4; }
        .review-a.skipped { color:var(--pink); font-style:italic; }
        .review-footer { display:flex; gap:8px; justify-content:flex-end; padding:12px 16px; border-top:1px solid var(--border); }

        /* RESULTS */
        .qs-results { max-width:680px; margin:0 auto; padding:56px 24px 80px; }
        .results-eyebrow { font-size:11px; font-weight:500; letter-spacing:0.18em; text-transform:uppercase; color:var(--pink); margin-bottom:12px; }
        .results-band { font-family:'Playfair Display',serif; font-size:clamp(32px,6vw,54px); font-weight:700; line-height:1.1; margin-bottom:8px; color:var(--black); }
        .results-band em { font-style:italic; color:var(--pink); }
        .results-score { font-size:14px; color:var(--warm-grey); margin-bottom:4px; }
        .results-time { font-size:13px; color:var(--warm-grey); font-style:italic; margin-bottom:28px; }
        .results-diagnosis { font-size:18px; font-weight:500; color:var(--black); margin-bottom:16px; line-height:1.5; }
        .results-body { font-size:15px; color:var(--mid-grey); line-height:1.8; margin-bottom:28px; }
        .results-box { background:rgba(236,65,151,0.06); border-left:2px solid var(--pink); padding:18px 20px; margin-bottom:20px; }
        .results-box-label { font-size:10px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:var(--pink); margin-bottom:8px; }
        .results-box-text { font-size:14px; color:var(--mid-grey); line-height:1.7; }
        .results-divider { border:none; border-top:1px solid var(--border); margin:32px 0; }
        .results-reveal-title { font-family:'Playfair Display',serif; font-size:20px; font-weight:600; margin-bottom:14px; color:var(--black); }
        .results-reveal-text { font-size:14px; color:var(--mid-grey); line-height:1.8; }
        .badge-section { margin-top:40px; text-align:center; }
        .badge-eyebrow { font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:var(--warm-grey); margin-bottom:16px; }
        .badge-canvas { display:block; margin:0 auto 12px; width:270px; height:270px; }
        .btn-badge { background:none; border:1px solid var(--border); font-family:'DM Sans',sans-serif; font-size:13px; color:var(--mid-grey); cursor:pointer; padding:10px 20px; transition:all 0.15s; }
        .btn-badge:hover { border-color:var(--pink); color:var(--pink); }
        .btn-cta { display:inline-block; background:var(--pink); color:white; border:none; padding:16px 36px; font-family:'DM Sans',sans-serif; font-size:14px; font-weight:500; cursor:pointer; letter-spacing:0.02em; transition:opacity 0.15s; }
        .btn-cta:hover { opacity:0.88; }
        .results-cta-center { text-align:center; margin-top:40px; }

        /* PATH SCREEN */
        .qs-path { max-width:680px; margin:0 auto; padding:56px 24px 80px; }
        .path-eyebrow { font-size:11px; font-weight:500; letter-spacing:0.18em; text-transform:uppercase; color:var(--pink); margin-bottom:12px; }
        .path-title { font-family:'Playfair Display',serif; font-size:clamp(28px,5vw,40px); font-weight:700; margin-bottom:40px; color:var(--black); }
        .path-cards { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px; }
        @media(max-width:520px){ .path-cards { grid-template-columns:1fr; } }
        .path-card { background:white; border:1px solid var(--border); padding:28px 24px; text-align:left; cursor:pointer; font-family:'DM Sans',sans-serif; transition:border-color 0.15s; display:flex; flex-direction:column; }
        .path-card:hover { border-color:var(--pink); }
        .path-card-a:hover { background:rgba(236,65,151,0.03); }
        .path-card-b:hover { background:rgba(0,153,204,0.03); }
        .path-label { font-size:10px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:var(--warm-grey); margin-bottom:10px; display:block; }
        .path-card-title { font-family:'Playfair Display',serif; font-size:18px; font-weight:600; margin-bottom:10px; color:var(--black); }
        .path-card-body { font-size:13px; color:var(--warm-grey); line-height:1.65; margin-bottom:16px; flex:1; }
        .path-card-cta { font-size:12px; color:var(--pink); font-weight:500; }
        .btn-neither { background:none; border:none; font-family:'DM Sans',sans-serif; font-size:13px; color:var(--warm-grey); cursor:pointer; text-decoration:underline; padding:8px; display:block; margin:0 auto; }
        .btn-neither:hover { color:var(--black); }
        .path-content { margin-top:48px; }

        /* CTA / subscribe */
        .results-cta { background:white; border:1px solid var(--border); padding:32px; }
        .results-cta-eyebrow { font-size:10px; font-weight:500; letter-spacing:0.14em; text-transform:uppercase; color:var(--pink); margin-bottom:12px; }
        .results-cta-title { font-family:'Playfair Display',serif; font-size:22px; font-weight:600; line-height:1.3; margin-bottom:10px; }
        .results-cta-title em { font-style:italic; color:var(--pink); }
        .results-cta-body { font-size:14px; color:var(--warm-grey); line-height:1.6; margin-bottom:20px; }
        .cta-form { display:flex; gap:8px; flex-wrap:wrap; }
        .cta-input { flex:1; min-width:200px; padding:12px 14px; border:1px solid var(--border); font-family:'DM Sans',sans-serif; font-size:14px; background:var(--off-white); outline:none; }
        .cta-input:focus { border-color:var(--pink); }
        .cta-status { font-size:14px; color:var(--pink); margin-top:8px; }
        .cta-fine-print { font-size:11px; color:var(--warm-grey); margin-top:12px; line-height:1.6; }
        .cta-fine-print a { color:var(--warm-grey); }

        /* TOOLS in path B */
        .tool-card { background:white; border:1px solid var(--border); padding:24px; margin-bottom:16px; }
        .tool-header { display:flex; align-items:flex-start; gap:16px; margin-bottom:12px; }
        .tool-number { font-family:'Playfair Display',serif; font-size:32px; font-weight:700; color:var(--pink); line-height:1; min-width:36px; }
        .tool-name { font-weight:500; font-size:15px; margin-bottom:2px; }
        .tool-author { font-size:12px; color:var(--warm-grey); }
        .tool-desc { font-size:13px; color:var(--mid-grey); line-height:1.75; margin-bottom:10px; }
        .tool-signal { font-size:12px; color:var(--warm-grey); line-height:1.6; margin-bottom:12px; }
        .tool-links { display:flex; gap:10px; flex-wrap:wrap; }
        .tool-link { font-size:12px; color:var(--pink); text-decoration:none; border-bottom:1px solid rgba(236,65,151,0.3); padding-bottom:1px; }
        .tool-link:hover { border-color:var(--pink); }

        /* PATH NEITHER */
        .path-exit { text-align:center; padding:32px 0; }
        .path-exit p { font-size:15px; color:var(--warm-grey); margin-bottom:16px; }
        .keep-going-link { font-size:14px; color:var(--pink); text-decoration:none; border-bottom:1px solid rgba(236,65,151,0.3); }
        .keep-going-link:hover { border-color:var(--pink); }
        .keep-going-note { font-size:12px; color:var(--warm-grey); }
        .btn-restart { background:none; border:1px solid var(--border); font-family:'DM Sans',sans-serif; font-size:13px; color:var(--mid-grey); cursor:pointer; padding:10px 20px; }
      `}</style>

      <div className="quiz-wrap">
        {/* ── TITLE ── */}
        {screen === 'title' && (
          <div className="qs-title">
            <span className="qs-eyebrow">Everyday Futurism</span>
            <h1 className="qs-title-h1">Can You Actually Read a <em>Trust Signal?</em></h1>
            <p className="qs-title-sub">You trust what you notice. But what shaped what you notice in the first place? 18 questions to find out.</p>
            <div className="qs-title-meta">
              <div className="qs-meta-item"><span className="qs-meta-num">18</span><span className="qs-meta-label">Questions</span></div>
              <div className="qs-meta-item"><span className="qs-meta-num">~6</span><span className="qs-meta-label">Minutes</span></div>
              <div className="qs-meta-item"><span className="qs-meta-num">3</span><span className="qs-meta-label">Outcomes</span></div>
            </div>
            <p className="qs-framing">
              This is not a quiz about cynicism. It&rsquo;s a quiz about filters — specifically, about identifying which signals were independently observed versus cooperatively produced. Most trust signals are one of those things. Very few are the other. By question 18, you&rsquo;ll know which is which.
            </p>
            <button className="btn-primary" onClick={startFresh}>Begin</button>
            {resumeQ !== null && (
              <div className="resume-banner">
                <p>You were on question <strong>{resumeQ + 1}</strong> of 18.<br />Pick up where you left off?</p>
                <div className="resume-actions">
                  <button className="btn-resume" onClick={resumeQuiz}>Continue →</button>
                  <button className="btn-ghost" onClick={() => { clearProgress(); setResumeQ(null) }}>Start fresh</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── QUIZ ── */}
        {screen === 'quiz' && (
          <div className="qs-quiz">
            <header className="quiz-header">
              <span className="quiz-brand">Trust Signal Quiz</span>
              <div className="progress-container">
                <span className="progress-text">{currentQ + 1} of {TOTAL}</span>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${((currentQ + 1) / TOTAL) * 100}%` }} />
                </div>
              </div>
            </header>

            {act && (
              <div className="act-bar">
                <span className="act-label">{act.label}</span>
                <span style={{ opacity: 0.3 }}>—</span>
                <span>{act.title}</span>
              </div>
            )}

            <div className="quiz-body">
              {q.noticing && currentQ > 0 && (
                <div className="noticing-meter">
                  <span className="noticing-label">You&rsquo;re filtering for</span>
                  <span className="noticing-value">{q.noticing}</span>
                </div>
              )}

              <p className="q-number">Question {String(currentQ + 1).padStart(2, '0')}</p>
              <h2 className="q-text">{q.text}</h2>
              {q.subtext && <p className="q-subtext">{q.subtext}</p>}

              <div className="options-grid">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`option-card${currentAns === i ? ' selected' : ''}`}
                    onClick={() => selectOption(i)}
                  >
                    <span className="option-dot" />
                    <span>{opt}</span>
                  </button>
                ))}
              </div>

              {hasAnswer && q.commentary && (
                <div className="q-commentary">{q.commentary}</div>
              )}

              <div className="pass-area">
                <button
                  className="btn-pass"
                  disabled={hasAnswer}
                  onClick={passQuestion}
                >
                  {currentAns === -1 ? 'Passed ✓' : hasAnswer ? 'Answered' : 'Pass — I want to think about this'}
                </button>
              </div>

              <div className="kbd-hints">
                Press <kbd>1</kbd>–<kbd>4</kbd> to select · <kbd>↵</kbd> to continue · <kbd>⌫</kbd> to go back
              </div>

              <div className="quiz-nav">
                <button className="btn-back" disabled={currentQ === 0} onClick={() => currentQ > 0 && setShowReview(true)}>← Back</button>
                <button
                  className={`btn-next${hasAnswer ? ' enabled' : ''}`}
                  onClick={advanceQuestion}
                >
                  {currentQ === TOTAL - 1 ? 'See Results →' : 'Next →'}
                </button>
              </div>
            </div>

            {interstitial && (
              <div className="interstitial-overlay">
                <p className="interstitial-text">{interstitial.text}</p>
                <p className="interstitial-sub">{interstitial.sub}</p>
                <button className="btn-interstitial" onClick={dismissInterstitial}>Continue →</button>
              </div>
            )}
          </div>
        )}

        {/* REVIEW DRAWER */}
        {screen === 'quiz' && showReview && (
          <div className="review-drawer">
            <div className="review-header">
              <span className="review-title">Your answers so far</span>
              <button className="review-close" onClick={() => setShowReview(false)}>×</button>
            </div>
            <div className="review-grid">
              {answers.slice(0, currentQ).map((ans, i) => (
                <div key={i} className={`review-item${ans === -1 ? ' skipped' : ''}`}>
                  <span className="review-q">Q{i + 1}</span>
                  <span className={`review-a${ans === -1 ? ' skipped' : ''}`}>
                    {ans === -1 ? 'Passed' : ans === null ? '—' : questions[i].options[ans as number].slice(0, 60) + (questions[i].options[ans as number].length > 60 ? '…' : '')}
                  </span>
                </div>
              ))}
            </div>
            <div className="review-footer">
              <button className="btn-ghost" onClick={() => setShowReview(false)}>Stay here</button>
              <button className="btn-resume" onClick={() => { setShowReview(false); setCurrentQ(q => Math.max(0, q - 1)) }}>← Go back</button>
            </div>
          </div>
        )}

        {/* ── RESULTS ── */}
        {screen === 'results' && band && (
          <div className="qs-results">
            <p className="results-eyebrow">Your Result</p>
            <h2 className="results-band" dangerouslySetInnerHTML={{ __html: band.band.replace(' ', '<br><em>').replace(/([A-Z][a-z]+)$/, '$1</em>') || band.band }} />
            <p className="results-score">{score} out of {TOTAL} — the quiz can&rsquo;t see you, but you can.</p>
            {timeDisplay && <p className="results-time">{timeDisplay}</p>}
            <p className="results-diagnosis">{band.diagnosis}</p>
            <p className="results-body">{band.body}</p>

            <div className="results-box">
              <p className="results-box-label">Your blind spot</p>
              <p className="results-box-text">{band.blindspot}</p>
            </div>

            <div className="results-box">
              <p className="results-box-label">What you&rsquo;re learning to notice</p>
              <p className="results-box-text">{band.notice}</p>
            </div>

            <hr className="results-divider" />

            <h3 className="results-reveal-title">The pattern this quiz was building toward</h3>
            <p className="results-reveal-text">Almost every conventional trust signal is cooperatively produced. The subject shaped it, approved it, paid for it, traded it, or fit a narrative someone else needed to tell. The purchased byline, the approved case study, the coordinated blurb, the mutual rating, the pitched profile — all of them passed through a filter controlled by the subject or someone with an interest in the outcome. The signals that can&rsquo;t be manufactured are the ones that didn&rsquo;t require anyone&rsquo;s cooperation to exist. An independent observer noticing something. An unprompted citation. A referral that can&rsquo;t explain itself. A journalist who had to fight for the story. Those are rare. That&rsquo;s the point.</p>

            <div className="badge-section">
              <p className="badge-eyebrow">Share your result</p>
              <canvas ref={badgeRef} className="badge-canvas" width={270} height={270} />
              <br />
              <button className="btn-badge" onClick={downloadBadge}>↓ Download badge</button>
            </div>

            <div className="results-cta-center">
              <button className="btn-cta" onClick={showPathScreen}>What do you do with it? →</button>
            </div>
          </div>
        )}

        {/* ── PATH ── */}
        {screen === 'path' && (
          <div className="qs-path">
            <p className="path-eyebrow">You&rsquo;ve seen the pattern.</p>
            <h2 className="path-title">What do you do with it?</h2>

            {path === null && (
              <>
                <div className="path-cards">
                  <button className="path-card path-card-a" onClick={() => choosePathFn('A')}>
                    <span className="path-label">Path A</span>
                    <h3 className="path-card-title">Keep reading the signals.</h3>
                    <p className="path-card-body">Weekly essays on trust, credibility, and how to read the future more clearly. No algorithm. No noise. Just the thinking that holds up.</p>
                    <span className="path-card-cta">Get the newsletter →</span>
                  </button>
                  <button className="path-card path-card-b" onClick={() => choosePathFn('B')}>
                    <span className="path-label">Path B</span>
                    <h3 className="path-card-title">Go deeper with tools.</h3>
                    <p className="path-card-body">Three tools built by people who had a problem with how a conversation was being conducted and decided to change it rather than complain about it.</p>
                    <span className="path-card-cta">See the tools →</span>
                  </button>
                </div>
                <button className="btn-neither" onClick={() => choosePathFn('neither')}>I&rsquo;m good for now</button>
              </>
            )}

            {path === 'A' && (
              <div className="path-content">
                <div className="results-cta">
                  <p className="results-cta-eyebrow">Everyday Futurism</p>
                  <h3 className="results-cta-title">Keep reading the signals.<br /><em>Get the newsletter.</em></h3>
                  <p className="results-cta-body">Weekly thinking on trust, credibility, and how to read the future more clearly.</p>
                  {subStatusA === 'done' ? (
                    <p className="cta-status">You&rsquo;re in. Check your inbox to confirm.</p>
                  ) : (
                    <form className="cta-form" onSubmit={subscribeA}>
                      <label htmlFor="quiz-email-a" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>Email address</label>
                      <input id="quiz-email-a" type="email" className="cta-input" placeholder="Your email address" required value={emailA} onChange={e => setEmailA(e.target.value)} />
                      <button type="submit" className="btn-cta" disabled={subStatusA === 'loading'}>{subStatusA === 'loading' ? '...' : 'Subscribe →'}</button>
                    </form>
                  )}
                  <p className="cta-fine-print">By subscribing you agree to receive Nola Simon&rsquo;s Everyday Futurism newsletter. Unsubscribe anytime. <a href="/privacy">Privacy Policy</a></p>
                </div>
                <div style={{ textAlign: 'center', marginTop: 24 }}>
                  <button className="btn-neither" onClick={startFresh}>Take it again</button>
                </div>
              </div>
            )}

            {path === 'B' && (
              <div className="path-content">
                <h3 className="results-reveal-title">Three tools for people doing the work.</h3>
                <p className="results-reveal-text" style={{ marginBottom: 32 }}>None of them ask you to take their word for it. All of them teach through doing or through evidence. All three were built by people who had a problem with how a conversation was being conducted and decided to change it rather than complain about it. That&rsquo;s not a credential. That&rsquo;s a signal.</p>

                <div className="tool-card">
                  <div className="tool-header">
                    <span className="tool-number">01</span>
                    <div>
                      <p className="tool-name">Critical Thinking Bot</p>
                      <p className="tool-author">Shae O. Omonijo — Harvard PhD Candidate, historian, founder of Analog Social</p>
                    </div>
                  </div>
                  <p className="tool-desc">Built by Shae, a historian who taught herself machine learning and became dedicated to one specific problem: what happens to reasoning in the age of AI. You bring one idea, claim, or argument. You work it until it becomes clear, concise, and defensible. The output is a conclusion artifact — starting claim, refined claim, what changed in the reasoning, what still blocks defensibility. The process is the point.</p>
                  <p className="tool-signal"><em>The trust signal: she built the tool she needed and made it public. No VC deck. No waitlist. Just the thing.</em></p>
                  <div className="tool-links">
                    <a href="https://www.criticalthinkingbot.com/" target="_blank" rel="noopener noreferrer" className="tool-link">Tool ↗</a>
                    <a href="https://shaeomonijo.substack.com/" target="_blank" rel="noopener noreferrer" className="tool-link">Substack ↗</a>
                    <a href="https://iamshaeo.com/" target="_blank" rel="noopener noreferrer" className="tool-link">Website ↗</a>
                    <a href="https://linkedin.com/in/omonijo" target="_blank" rel="noopener noreferrer" className="tool-link">LinkedIn ↗</a>
                  </div>
                </div>

                <div className="tool-card">
                  <div className="tool-header">
                    <span className="tool-number">02</span>
                    <div>
                      <p className="tool-name">Dead Reference</p>
                      <p className="tool-author">Sam Illingworth — Professor of Creative Pedagogies, poet, founder of Slow AI</p>
                    </div>
                  </div>
                  <p className="tool-desc">Ten academic citations. Half real. Half invented by AI with perfect formatting, plausible authors, and DOIs that follow every convention exactly. The game is harder than you think. Most AI literacy tools explain hallucination in the abstract. Dead Reference puts you inside it — you make a judgment, then learn exactly how to verify what you just read. The teaching happens between the guesses, not at the end.</p>
                  <p className="tool-signal"><em>If you scored Witnessed Observer, Dead Reference is the next level. If you scored Signal Inheritor, start here.</em></p>
                  <div className="tool-links">
                    <a href="https://samillingworth.itch.io/dead-reference" target="_blank" rel="noopener noreferrer" className="tool-link">Tool ↗</a>
                    <a href="https://theslowai.substack.com/" target="_blank" rel="noopener noreferrer" className="tool-link">Substack ↗</a>
                    <a href="https://samillingworth.com/" target="_blank" rel="noopener noreferrer" className="tool-link">Website ↗</a>
                    <a href="https://linkedin.com/in/samillingworth" target="_blank" rel="noopener noreferrer" className="tool-link">LinkedIn ↗</a>
                  </div>
                </div>

                <div className="tool-card">
                  <div className="tool-header">
                    <span className="tool-number">03</span>
                    <div>
                      <p className="tool-name">The Strategic Linguist</p>
                      <p className="tool-author">Rebecca Wicker — trained linguist, writer on language, power, and professional life</p>
                    </div>
                  </div>
                  <p className="tool-desc">Rebecca writes about the linguistics of authentic versus performed speech — and why your brain has been running this analysis on every conversation you&rsquo;ve ever had, mostly without your knowledge. Disfluency theory explains why perfect speech sounds fake. Prosodic patterns explain why you can hear a sales script before you consciously identify one. Lexical fingerprints explain why borrowed language feels borrowed even when you can&rsquo;t say why.</p>
                  <p className="tool-signal"><em>The trust signal: she&rsquo;s explaining the science of the thing your gut already does. That&rsquo;s not a small contribution.</em></p>
                  <div className="tool-links">
                    <a href="https://www.thestrategiclinguist.com/" target="_blank" rel="noopener noreferrer" className="tool-link">Website ↗</a>
                    <a href="https://thestrategiclinguist.substack.com/" target="_blank" rel="noopener noreferrer" className="tool-link">Substack ↗</a>
                  </div>
                </div>

                <div className="results-cta" style={{ marginTop: 40 }}>
                  <p className="results-cta-eyebrow">While you&rsquo;re here</p>
                  <h3 className="results-cta-title">Get the thinking that goes with the tools.<br /><em>The newsletter.</em></h3>
                  <p className="results-cta-body">Weekly essays on trust, credibility, and how to read the future more clearly.</p>
                  {subStatusB === 'done' ? (
                    <p className="cta-status">You&rsquo;re in. Check your inbox to confirm.</p>
                  ) : (
                    <form className="cta-form" onSubmit={subscribeB}>
                      <label htmlFor="quiz-email-b" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>Email address</label>
                      <input id="quiz-email-b" type="email" className="cta-input" placeholder="Your email address" required value={emailB} onChange={e => setEmailB(e.target.value)} />
                      <button type="submit" className="btn-cta" disabled={subStatusB === 'loading'}>{subStatusB === 'loading' ? '...' : 'Subscribe →'}</button>
                    </form>
                  )}
                  <p className="cta-fine-print">By subscribing you agree to receive Nola Simon&rsquo;s Everyday Futurism newsletter. Unsubscribe anytime. <a href="/privacy">Privacy Policy</a></p>
                </div>
                <div style={{ textAlign: 'center', marginTop: 24 }}>
                  <button className="btn-neither" onClick={startFresh}>Take it again</button>
                </div>
              </div>
            )}

            {path === 'neither' && (
              <div className="path-content">
                <div className="path-exit">
                  <p>The quiz stays here whenever you need it.</p>
                  <a href="/writing/the-rabbit-hole" className="keep-going-link">Read The Rabbit Hole →</a>
                  <p className="keep-going-note" style={{ marginTop: 8 }}>Six depths. No gate. The quiz is the surface; this is what&rsquo;s underneath.</p>
                  <button className="btn-restart" style={{ marginTop: 32 }} onClick={startFresh}>Take it again</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
