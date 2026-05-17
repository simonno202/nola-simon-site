"use client";

import { useState } from "react";

const BRAND = {
  pink: "#ec4197",
  pinkDark: "#c2317c",
  pinkLight: "rgba(236,65,151,0.08)",
  pinkBorder: "rgba(236,65,151,0.25)",
  deep: "#1a0d14",
  ink: "#0f0f0f",
  parchment: "#fdf9f7",
  sand: "#ecdfd8",
  muted: "#9a8f8a",
};

const questions: Record<string, Question[]> = {
  individual: [
    {
      category: "Why You're Here",
      text: "Before the titles, before the strategy decks, before anyone was watching — there was a reason you kept showing up.",
      sub: "Not your elevator pitch. The actual reason. Can you feel it right now, or has it gotten quiet?",
      options: [
        { text: "I can feel it clearly — it's what gets me out of bed when nothing else does", value: 3, anchor: "values" },
        { text: "It's there, but I haven't spoken it out loud in a while — I'd have to reach for it", value: 2, anchor: "values" },
        { text: "Somewhere underneath everything — muffled. The noise has been very loud.", value: 1, anchor: "values" },
        { text: "I'm not sure right now. That's part of what's unsettled me.", value: 0, anchor: "values" },
      ],
    },
    {
      category: "How You Think",
      text: "You have a way of working through hard problems — not a framework you learned, but a groove you've worn over years.",
      sub: "When things get genuinely complex, do you still reach for it? Or have you been borrowing other people's tools?",
      options: [
        { text: "I reach for it instinctively — it's more useful now than it's ever been", value: 3, anchor: "method" },
        { text: "It's still mine, though I've been code-switching more than usual", value: 2, anchor: "method" },
        { text: "I'm not sure I've named it precisely enough to defend it under pressure", value: 1, anchor: "method" },
        { text: "Honestly, I've been borrowing. The landscape shifted and I lost the thread.", value: 0, anchor: "method" },
      ],
    },
    {
      category: "Who Holds You",
      text: "Not your network. Not your contacts. The two or three people who have seen you in a genuinely hard moment and didn't leave — and didn't pretend it wasn't hard.",
      sub: "Do they know that's what they are to you? Have you called on them lately?",
      options: [
        { text: "I know exactly who they are and I lean on them — they know it too", value: 3, anchor: "relationships" },
        { text: "I know who they are, though I tend to carry things alone longer than I should", value: 2, anchor: "relationships" },
        { text: "I have a sense of who they might be, but the relationships need tending", value: 1, anchor: "relationships" },
        { text: "This is an honest gap. I've been navigating more alone than is sustainable.", value: 0, anchor: "relationships" },
      ],
    },
    {
      category: "What You Can Actually Do",
      text: "Imagine every platform, every tool, every subscription you rely on is gone tomorrow. Not updated — gone. There is still something you know how to do.",
      sub: "Can you name it in one sentence without reaching for jargon? Does it feel solid, or surprisingly thin?",
      options: [
        { text: "I can name it immediately — it's the thing I was doing before the tools existed", value: 3, anchor: "capability" },
        { text: "I know it's there, though I haven't had to articulate it in a while", value: 2, anchor: "capability" },
        { text: "I think it's there, but this question makes me less certain than I'd like", value: 1, anchor: "capability" },
        { text: "I'm more tool-dependent than I've let myself notice. This question lands.", value: 0, anchor: "capability" },
      ],
    },
    {
      category: "The Question You Always Ask",
      text: "Most people have one question they return to, in every room, every role, every conversation — whether they've named it or not.",
      sub: "What's yours? And does it feel like something you discovered, or something you absorbed from someone else without realizing?",
      options: [
        { text: "I know my question — I can trace where it came from and I trust it", value: 3, anchor: "perspective" },
        { text: "I know my question, though I haven't examined whether it still fits", value: 2, anchor: "perspective" },
        { text: "I have a sense of it, but some of it may be inherited and unexamined", value: 1, anchor: "perspective" },
        { text: "I'm not sure I've named it yet — or I've named it wrong", value: 0, anchor: "perspective" },
      ],
    },
    {
      category: "What You've Already Survived",
      text: "You've been through disruption before. Not this one — but something that felt, at the time, like it might take you under.",
      sub: "What did you learn about yourself in that moment that you're not currently using?",
      options: [
        { text: "I know exactly what I learned — and I'm drawing on it deliberately right now", value: 3, anchor: "history" },
        { text: "I remember it, though I haven't consciously connected it to what's happening now", value: 2, anchor: "history" },
        { text: "Those moments felt like survival, not learning — I'm still processing them", value: 1, anchor: "history" },
        { text: "I haven't thought about earlier hard moments as a resource. This is new.", value: 0, anchor: "history" },
      ],
    },
    {
      category: "How You Restore",
      text: "There is something you do — or used to do — that puts you back in contact with yourself. A walk. A practice. A ritual so small you'd be embarrassed to call it one.",
      sub: "Is it still in your week? Or has it quietly disappeared while you were busy?",
      options: [
        { text: "Still there — I protect it, even when the calendar fights me", value: 3, anchor: "pace" },
        { text: "Mostly intact, though it's been compressed and I feel the difference", value: 2, anchor: "pace" },
        { text: "It's slipped. I keep meaning to bring it back. That sentence feels familiar.", value: 1, anchor: "pace" },
        { text: "It's gone. I've been running on fumes and pretending that's fine.", value: 0, anchor: "pace" },
      ],
    },
    {
      category: "Where You Won't Go",
      text: "Every person operating with integrity has a line they won't cross — not a policy, not a rule someone else made. A line that is genuinely theirs.",
      sub: "Can you name yours right now? And do the people around you know it exists?",
      options: [
        { text: "Yes — my line is clear, and people who work with me know it", value: 3, anchor: "conviction" },
        { text: "Clear to me, though I hold it quietly — I'm not sure it's visible to others", value: 2, anchor: "conviction" },
        { text: "I know it in theory, but the current pressure has made it feel negotiable at the edges", value: 1, anchor: "conviction" },
        { text: "I'm not certain where my line is right now. That's uncomfortable to admit.", value: 0, anchor: "conviction" },
      ],
    },
    {
      category: "Whose Assumptions Are These",
      text: "The way you understand your industry, your role, your value — some of that you figured out yourself. Some of it you absorbed from a boss, a program, a decade you worked inside.",
      sub: "Can you tell the difference? Do you know which assumptions are yours and which ones you inherited?",
      options: [
        { text: "I've done this work — I know where my assumptions came from and I've pressure-tested them", value: 3, anchor: "origin" },
        { text: "Some of them, yes. Others I've been carrying so long I've stopped questioning them.", value: 2, anchor: "origin" },
        { text: "Mostly inherited, if I'm honest. I've been operating on received wisdom more than I'd like.", value: 1, anchor: "origin" },
        { text: "I haven't looked at this. I'm not sure I want to — which is probably the answer.", value: 0, anchor: "origin" },
      ],
    },
    {
      category: "The Next Real Step",
      text: "Not the five-year plan. Not the pivot. Not the version of yourself you're becoming.",
      sub: "What is the next concrete thing you're actually going to do — this week, or next? Something real, not aspirational.",
      options: [
        { text: "I know exactly what it is and I've already started", value: 3, anchor: "direction" },
        { text: "I know the direction, even if the specific step is still forming", value: 2, anchor: "direction" },
        { text: "I'm circling it — close but not quite landed", value: 1, anchor: "direction" },
        { text: "This is the question I came here with. I don't have it yet.", value: 0, anchor: "direction" },
      ],
    },
  ],
  organization: [
    {
      category: "Why This Exists",
      text: "Before the org chart solidified. Before the brand guidelines. Before anyone was managing anyone else — there was a reason this organization came into being.",
      sub: "Is that reason still shaping decisions at every level, or has it become something people say at all-hands but don't actually use?",
      options: [
        { text: "It's operative — you can trace it in real decisions, not just communication", value: 3, anchor: "purpose" },
        { text: "It's present in the culture, though leaders don't always reach for it first", value: 2, anchor: "purpose" },
        { text: "It's become more ceremonial than functional — we say it, we don't use it", value: 1, anchor: "purpose" },
        { text: "Honestly, we've drifted. The founding reason and the current reality don't quite match.", value: 0, anchor: "purpose" },
      ],
    },
    {
      category: "How Decisions Actually Get Made",
      text: "Every organization has two decision-making processes: the one in the org chart, and the one that actually happens.",
      sub: "Can you describe the real one? Is it named? Is it trusted? Or does it change depending on who's in the room?",
      options: [
        { text: "Named and trusted — it's part of how we describe ourselves and we actually use it", value: 3, anchor: "method" },
        { text: "Understood but not named — it works, though it's person-dependent in places", value: 2, anchor: "method" },
        { text: "Inconsistent. It exists in pockets but doesn't hold across the organization.", value: 1, anchor: "method" },
        { text: "We're more reactive than methodological right now. Each crisis gets its own process.", value: 0, anchor: "method" },
      ],
    },
    {
      category: "What People Do Without Being Asked",
      text: "In every organization with a real culture, there are behaviors that no policy required, no manager mandated, no incentive created — they just emerged and they held.",
      sub: "Can you name three of them right now? Are they still happening, or have they quietly faded since the last restructure, the last leadership change, the last difficult year?",
      options: [
        { text: "I can name them immediately — they're a source of pride and they're still happening", value: 3, anchor: "culture" },
        { text: "They exist, though we don't talk about them explicitly or protect them deliberately", value: 2, anchor: "culture" },
        { text: "They've weakened. Hard to say exactly when it started, but I've noticed.", value: 1, anchor: "culture" },
        { text: "We're not sure what survived the last transition. That's a real answer, and an uncomfortable one.", value: 0, anchor: "culture" },
      ],
    },
    {
      category: "Who Stayed When It Got Hard",
      text: "Not your biggest client. Not your most prestigious partner. The ones who stayed when something went wrong — when a project failed, a transition was rough, a year was genuinely bad.",
      sub: "Do you know who they are? Are you tending those relationships with the care they've earned?",
      options: [
        { text: "We know who they are and we tend them deliberately — they're not just accounts, they're relationships", value: 3, anchor: "relationships" },
        { text: "We know who they are, though we could be more intentional about how we show up for them", value: 2, anchor: "relationships" },
        { text: "We've lost track of some of them in the pressure of the current moment", value: 1, anchor: "relationships" },
        { text: "We're not entirely sure who would stay if things got harder again. That's worth sitting with.", value: 0, anchor: "relationships" },
      ],
    },
    {
      category: "What Your People Can Actually Do",
      text: "Strip away the software, the platforms, the AI-assisted everything. What remains? What can your team do with a whiteboard, a phone call, and their own judgment?",
      sub: "Is that underlying capability genuinely intact — or has it atrophied quietly while the tools got better?",
      options: [
        { text: "Intact and named — we talk about it as distinct from the tools, and we test it", value: 3, anchor: "capability" },
        { text: "Intact but unnamed — it's there, though we've never had to articulate it under pressure", value: 2, anchor: "capability" },
        { text: "Less intact than we'd like to believe — the tools have been carrying more weight than we've admitted", value: 1, anchor: "capability" },
        { text: "This question makes us genuinely uncomfortable. Which probably means we need to sit with it.", value: 0, anchor: "capability" },
      ],
    },
    {
      category: "What the Last Hard Thing Taught You",
      text: "Your organization has been through something genuinely difficult before — not a rough quarter, but something that tested what you actually were.",
      sub: "What did you learn about yourselves in that moment? Is that learning living anywhere, or did it leave when the people who held it moved on?",
      options: [
        { text: "It's alive — we actively draw on institutional memory and name it when relevant", value: 3, anchor: "history" },
        { text: "It lives in certain people, informally — but it's not in any system or structure", value: 2, anchor: "history" },
        { text: "The people who held it have mostly moved on. We're building institutional memory from scratch.", value: 1, anchor: "history" },
        { text: "We've been treating this moment as unprecedented. It may not be. That's worth examining.", value: 0, anchor: "history" },
      ],
    },
    {
      category: "The Gear You're In",
      text: "Organizations have a natural metabolism — periods of fast movement and periods of consolidation, integration, rest. Both are necessary. Neither can run forever.",
      sub: "Be honest: how long have you been running fast? Is that a strategic choice, or has urgency just become the default?",
      options: [
        { text: "We've been deliberate about pace — we know when to push and when to consolidate, and we do both", value: 3, anchor: "pace" },
        { text: "Mostly right, though the pressure to move fast has been intense and the consolidation keeps getting deferred", value: 2, anchor: "pace" },
        { text: "We've been running hot longer than is healthy — and we know it, even if we haven't said it", value: 1, anchor: "pace" },
        { text: "Urgency has become the default. We're not sure we have a rhythm anymore. We move, and then we move again.", value: 0, anchor: "pace" },
      ],
    },
    {
      category: "What You Won't Do",
      text: "Every organization with integrity has things it won't do — not because of regulation, but because of who it is. These are the lines that don't move regardless of how the competitive landscape shifts.",
      sub: "Can you name yours without reaching for the values poster? And are they visible to the people outside your walls?",
      options: [
        { text: "Clear and visible — they show up in real decisions and people outside us know it", value: 3, anchor: "boundaries" },
        { text: "Clear internally — though we haven't always made them legible to the outside world", value: 2, anchor: "boundaries" },
        { text: "They exist but they've been tested recently. Some edges have gotten softer than we'd like.", value: 1, anchor: "boundaries" },
        { text: "The current pressure has made some of what we said we'd never do feel negotiable. That's the honest answer.", value: 0, anchor: "boundaries" },
      ],
    },
    {
      category: "When Were These Ideas Born",
      text: "Your current strategy rests on a set of assumptions about your customers, your market, your value, your competition. Those assumptions were formed at a specific moment in time, in specific conditions.",
      sub: "\"Unprecedented\" was a reasonable explanation in 2020. Five years later, if it's still the explanation, that's not a volume problem — that's a leadership problem. When did your organization last ask: when were these assumptions actually formed, and is the world that formed them still the world you're operating in?",
      options: [
        { text: "We examine our assumptions regularly and deliberately — it's part of how we work", value: 3, anchor: "assumptions" },
        { text: "We know the major ones, though the examination isn't as systematic as it should be", value: 2, anchor: "assumptions" },
        { text: "Some of our assumptions are clearly inherited from a previous era — and we haven't formally examined them", value: 1, anchor: "assumptions" },
        { text: "We're still using explanations from 2020. That's probably the answer.", value: 0, anchor: "assumptions" },
      ],
    },
    {
      category: "The Next Committed Step",
      text: "Not the vision. Not the transformation roadmap. Not what you're becoming.",
      sub: "What is the next real, committed, calendared thing this organization is actually going to do? The one that's real enough that specific people are responsible for it?",
      options: [
        { text: "We have it — it's clear, it's owned, and the people responsible know what it is", value: 3, anchor: "direction" },
        { text: "We have a direction, though the specific step and ownership are still being worked out", value: 2, anchor: "direction" },
        { text: "We're close — there's movement, but alignment is incomplete and people aren't sure what they're committed to", value: 1, anchor: "direction" },
        { text: "This is part of what's unsettled right now. The next step is what we're trying to find.", value: 0, anchor: "direction" },
      ],
    },
  ],
};

interface Option {
  text: string;
  value: number;
  anchor: string;
}

interface Question {
  category: string;
  text: string;
  sub: string;
  options: Option[];
}

interface Results {
  pct: number;
  strong: string[];
  moderate: string[];
  emerging: string[];
  inheritedFlag: boolean;
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function computeResults(path: string, answers: Record<number, number>): Results {
  const qs = questions[path];
  const anchorScores: Record<string, number> = {};
  qs.forEach((q, i) => {
    const opt = q.options[answers[i]];
    anchorScores[opt.anchor] = (anchorScores[opt.anchor] || 0) + opt.value;
  });
  const sorted = Object.entries(anchorScores).sort((a, b) => b[1] - a[1]);
  const total = qs.length * 3;
  const overall = sorted.reduce((s, [, v]) => s + v, 0);
  const pct = Math.round((overall / total) * 100);
  const strong = sorted.filter(([, v]) => v >= 2.5).map(([k]) => k);
  const moderate = sorted.filter(([, v]) => v >= 1.5 && v < 2.5).map(([k]) => k);
  const emerging = sorted.filter(([, v]) => v < 1.5).map(([k]) => k);
  const originIdx = qs.findIndex((q) => q.category === "Assumptions" || q.category === "Whose Assumptions Are These" || q.category === "When Were These Ideas Born");
  const inheritedFlag = originIdx !== -1 && answers[originIdx] >= 1;
  return { pct, strong, moderate, emerging, inheritedFlag };
}

// ── SCREENS ──

function IntroScreen({ onStart }: { onStart: (path: string) => void }) {
  return (
    <div style={{ background: BRAND.deep, display: "flex", alignItems: "center", justifyContent: "center", padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 60%, rgba(236,65,151,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(236,65,151,0.08) 0%, transparent 50%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 560, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "2rem", marginBottom: "1.5rem", opacity: 0.6, letterSpacing: "0.3em" }}>⚓</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 400, color: BRAND.parchment, lineHeight: 1.1, marginBottom: "1.25rem" }}>
          The Anchor<br /><em style={{ color: BRAND.pink }}>Inventory</em>
        </h2>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.05rem", color: "rgba(253,249,247,0.72)", lineHeight: 1.8, marginBottom: "0.85rem", fontWeight: 300 }}>
          Most people in motion right now aren&apos;t moving toward something. They&apos;re drifting — pulled by forces they didn&apos;t choose, away from things that used to matter.
        </p>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1.05rem", color: "rgba(253,249,247,0.55)", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 300, fontStyle: "italic" }}>
          When everything is shifting, you need something concrete to hold onto — until you stabilize, and can move again with intention.
        </p>
        <p style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.pink, marginBottom: "1rem" }}>I am taking this as</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          {(["individual", "organization"] as const).map((p) => (
            <button
              key={p}
              onClick={() => onStart(p)}
              style={{ padding: "0.85rem 1.75rem", border: `1px solid rgba(236,65,151,0.5)`, background: "transparent", color: BRAND.parchment, fontFamily: "system-ui, sans-serif", fontSize: "1rem", cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = BRAND.pink; (e.currentTarget as HTMLButtonElement).style.background = "rgba(236,65,151,0.12)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(236,65,151,0.5)"; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            >
              {p === "individual" ? "An individual leader" : "Part of an organization"}
            </button>
          ))}
        </div>
        <p style={{ fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(253,249,247,0.25)", marginTop: "3rem" }}>10 questions · 5 minutes · no email required to start</p>
      </div>
    </div>
  );
}

function QuizScreen({ path, onDone }: { path: string; onDone: (answers: Record<number, number>) => void }) {
  const qs = questions[path];
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const q = qs[currentQ];
  const total = qs.length;
  const selected = answers[currentQ];

  const selectOption = (i: number) => setAnswers((prev) => ({ ...prev, [currentQ]: i }));
  const goNext = () => {
    if (currentQ < total - 1) setCurrentQ((n) => n + 1);
    else onDone(answers);
  };
  const goPrev = () => { if (currentQ > 0) setCurrentQ((n) => n - 1); };

  return (
    <div style={{ background: BRAND.parchment }}>
      {/* Header */}
      <div style={{ background: BRAND.deep, padding: "1.25rem 2rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontFamily: "monospace", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: BRAND.parchment, whiteSpace: "nowrap" }}>The Anchor Inventory</span>
        <div style={{ flex: 1, height: 2, background: "rgba(253,249,247,0.15)", borderRadius: 1 }}>
          <div style={{ height: "100%", background: BRAND.pink, borderRadius: 1, width: `${(currentQ / total) * 100}%`, transition: "width 0.4s ease" }} />
        </div>
        <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: BRAND.pink, whiteSpace: "nowrap" }}>{currentQ + 1} / {total}</span>
      </div>

      {/* Question */}
      <div style={{ maxWidth: 660, margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <div style={{ fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.pink, marginBottom: "1.25rem" }}>{q.category}</div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 400, color: BRAND.ink, lineHeight: 1.35, marginBottom: "0.6rem" }}>{q.text}</h2>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", color: BRAND.muted, fontStyle: "italic", marginBottom: "2.5rem", lineHeight: 1.6 }}>{q.sub}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2.5rem" }}>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => selectOption(i)}
              style={{ textAlign: "left", padding: "1rem 1.25rem", border: `1px solid ${selected === i ? BRAND.pink : BRAND.sand}`, background: selected === i ? BRAND.pinkLight : "transparent", fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: selected === i ? BRAND.pinkDark : BRAND.ink, cursor: "pointer", lineHeight: 1.45, transition: "all 0.2s", display: "flex", justifyContent: "space-between", alignItems: "center" }}
              onMouseEnter={(e) => { if (selected !== i) { (e.currentTarget as HTMLButtonElement).style.borderColor = BRAND.pink; (e.currentTarget as HTMLButtonElement).style.background = "rgba(236,65,151,0.04)"; } }}
              onMouseLeave={(e) => { if (selected !== i) { (e.currentTarget as HTMLButtonElement).style.borderColor = BRAND.sand; (e.currentTarget as HTMLButtonElement).style.background = "transparent"; } }}
            >
              <span>{opt.text}</span>
              {selected === i && <span style={{ color: BRAND.pink, marginLeft: "0.75rem", flexShrink: 0 }}>✓</span>}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={goPrev}
            disabled={currentQ === 0}
            style={{ padding: "0.7rem 1.5rem", border: `1px solid ${currentQ === 0 ? BRAND.sand : BRAND.ink}`, background: "transparent", color: currentQ === 0 ? BRAND.muted : BRAND.ink, fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", cursor: currentQ === 0 ? "not-allowed" : "pointer" }}
          >
            ← Back
          </button>
          <button
            onClick={goNext}
            disabled={selected === undefined}
            style={{ padding: "0.7rem 1.75rem", border: "none", background: selected === undefined ? BRAND.sand : BRAND.pink, color: selected === undefined ? BRAND.muted : "white", fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 500, cursor: selected === undefined ? "not-allowed" : "pointer", transition: "background 0.2s" }}
          >
            {currentQ === total - 1 ? "See My Anchors →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultsScreen({ path, answers }: { path: string; answers: Record<number, number> }) {
  const isOrg = path === "organization";
  const { pct, strong, moderate, emerging, inheritedFlag } = computeResults(path, answers);

  const label = pct >= 75
    ? "Your anchors are largely intact"
    : pct >= 50
    ? "Your foundation is present — some of it needs tending"
    : "You are in a moment of genuine re-grounding";

  const summaryText = pct >= 75
    ? `${isOrg ? "Your organization has" : "You have"} more to stand on than the current noise might suggest. The anchors holding most firmly — ${strong.slice(0, 2).map(cap).join(" and ")} — are real and demonstrably yours. They've held before. They'll hold again. The work right now isn't to find new ground. It's to trust the ground you're already standing on, and to stop mistaking movement for progress.`
    : pct >= 50
    ? `The foundation is there — some of it stronger than ${isOrg ? "the organization may currently recognize" : "you may be giving yourself credit for"}. What shows up as present rather than holding isn't gone. It's under-tended. ${strong.length > 0 ? `${cap(strong[0])} is your most reliable point of return right now — the place to stand before you decide what moves next.` : "The anchors that remain need deliberate attention, not more motion."} The instinct to keep moving is understandable. This is a moment to also look down at what you're standing on.`
    : `This inventory is most useful at exactly this kind of moment. Not because ${isOrg ? "the organization has" : "you have"} nothing to stand on — but because some of what felt solid may have been borrowed rather than built, inherited rather than examined. That's not failure. It's information. The re-grounding work is real work, and it starts with being honest about which anchors were always yours and which ones you assumed were.`;

  const MapRow = ({ items, rowLabel, fillPct }: { items: string[]; rowLabel: string; fillPct: number }) =>
    items.slice(0, 2).map((a) => (
      <div key={a} style={{ padding: "1rem 1.25rem", borderLeft: `3px solid ${rowLabel === "Holding" ? BRAND.pink : rowLabel === "Present" ? "rgba(236,65,151,0.4)" : BRAND.sand}`, marginBottom: "0.75rem" }}>
        <div style={{ fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND.muted, marginBottom: "0.3rem" }}>{rowLabel}</div>
        <div style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: BRAND.ink, marginBottom: "0.4rem" }}>{cap(a)}</div>
        <div style={{ height: 3, background: BRAND.sand, borderRadius: 2 }}>
          <div style={{ height: "100%", background: rowLabel === "Holding" ? BRAND.pink : rowLabel === "Present" ? "rgba(236,65,151,0.45)" : BRAND.sand, borderRadius: 2, width: `${fillPct}%`, transition: "width 1s ease" }} />
        </div>
      </div>
    ));

  return (
    <div style={{ background: BRAND.parchment }}>
      {/* Header */}
      <div style={{ background: BRAND.deep, padding: "3rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(1.8rem,5vw,3rem)", fontWeight: 400, color: BRAND.parchment, marginBottom: "0.6rem" }}>Your Anchor Map</h2>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", color: "rgba(253,249,247,0.65)", fontStyle: "italic" }}>{label}</p>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "2.5rem 1.5rem 1.5rem" }}>
        {/* Map */}
        <div style={{ background: "white", border: `1px solid ${BRAND.sand}`, padding: "2rem", marginBottom: "2.5rem" }}>
          <div style={{ fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.muted, textAlign: "center", marginBottom: "1.75rem" }}>Your Anchor Map</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1.5rem" }}>
            <div>
              <MapRow items={strong} rowLabel="Holding" fillPct={90} />
            </div>
            <div>
              <MapRow items={moderate} rowLabel="Present" fillPct={55} />
              <MapRow items={emerging} rowLabel="Needs tending" fillPct={22} />
            </div>
          </div>
        </div>

        {/* Summary */}
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.pink, marginBottom: "0.75rem" }}>Your Summary</div>
          <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.6rem", fontWeight: 400, color: BRAND.ink, marginBottom: "0.85rem", lineHeight: 1.3 }}>{label}.</h3>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.8, color: "#3a3834" }}>{summaryText}</p>
          {strong.concat(moderate).length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.25rem" }}>
              {strong.concat(moderate).map((a) => (
                <span key={a} style={{ padding: "0.35rem 0.9rem", background: BRAND.pinkLight, border: `1px solid ${BRAND.pinkBorder}`, color: BRAND.pinkDark, fontFamily: "system-ui, sans-serif", fontSize: "0.88rem", fontStyle: "italic" }}>{cap(a)}</span>
              ))}
            </div>
          )}
        </div>

        {inheritedFlag && (
          <div style={{ borderLeft: `3px solid ${BRAND.pink}`, background: BRAND.pinkLight, padding: "1.1rem 1.4rem", marginBottom: "2rem" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.97rem", lineHeight: 1.7, color: BRAND.ink, fontStyle: "italic" }}>
              One thing worth sitting with: some of the assumptions underneath {isOrg ? "your current strategy were" : "your current approach were"} formed in a different moment — and may not have been formally examined since. That&apos;s not a problem. It&apos;s an invitation.
            </p>
          </div>
        )}

        {/* Why I built this */}
        <div style={{ background: "white", border: `1px solid ${BRAND.sand}`, borderLeft: `3px solid ${BRAND.pink}`, padding: "1.75rem", marginBottom: "2rem" }}>
          <div style={{ fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: BRAND.pink, marginBottom: "1rem" }}>Why I built this</div>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", lineHeight: 1.75, color: BRAND.ink, marginBottom: "1rem" }}>
            My daughter graduated in June 2023. She didn&apos;t start university until August 2024. For that year in between, she was becoming an adult, and the role of mom was turning into something closer to advisor.
          </p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", lineHeight: 1.75, color: BRAND.ink, marginBottom: "1.25rem" }}>
            That&apos;s when the anchor question stopped being abstract for me. Not <em>what&apos;s my next move</em> — what holds steady when a role you&apos;ve stood on changes shape under you. Same question I help leaders work through now, before they decide what to move.
          </p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.98rem", lineHeight: 1.7, color: "#3a3834", margin: 0 }}>
            If the inventory surfaced something — a gap, a question, an anchor you&apos;d stopped noticing — I&apos;d like to hear about it.{" "}
            <a href="mailto:nola@nolasimon.com" style={{ color: BRAND.pinkDark, textDecoration: "underline" }}>nola@nolasimon.com</a>
          </p>
        </div>

        <div style={{ height: 1, background: BRAND.sand, margin: "2rem 0 1.5rem" }} />

        <div style={{ textAlign: "center", fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: BRAND.muted }}>
          A tool from <span style={{ color: BRAND.pink }}>Everyday Futurism</span> &middot; nolasimon.com
        </div>
      </div>
    </div>
  );
}

export default function AnchorInventory() {
  const [screen, setScreen] = useState<"intro" | "quiz" | "results">("intro");
  const [path, setPath] = useState<string | null>(null);
  const [finalAnswers, setFinalAnswers] = useState<Record<number, number> | null>(null);

  const handleStart = (p: string) => { setPath(p); setScreen("quiz"); };
  const handleDone = (answers: Record<number, number>) => { setFinalAnswers(answers); setScreen("results"); };

  if (screen === "intro") return <IntroScreen onStart={handleStart} />;
  if (screen === "quiz" && path) return <QuizScreen path={path} onDone={handleDone} />;
  if (screen === "results" && path && finalAnswers) return <ResultsScreen path={path} answers={finalAnswers} />;
  return null;
}
