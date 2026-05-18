"use client";

import { useState, useEffect, useRef } from "react";

const BRAND = {
  pink: "#ec4197",
  darkBg: "#0a0a0f",
  surface: "#12121a",
  surfaceAlt: "#1a1a26",
  border: "#2a2a3a",
  textPrimary: "#f0f0f8",
  textMuted: "#8888aa",
  textDim: "#3a3a5a",
};

const DOMAIN_COLORS: Record<string, string> = {
  Why: "#ec4197",
  What: "#7b61ff",
  Who: "#ff6b35",
  When: "#00c4b4",
  Where: "#f5c518",
};

const SELF_OPENING =
  "What decision or direction are you about to commit to — or just committed to?";

const FAC_OPENING =
  "I'm the analytical layer for this session — I'll name what I'm hearing and follow the logic as you go.\n\nWhat decision or direction is your prospect about to commit to?";

type Assumption = {
  label: string;
  domain: string;
  constraintType: string;
  cost: string;
};

type Message = {
  role: "user" | "assistant";
  content: string;
  assumption?: Assumption | null;
};

function parseAssumption(text: string): Assumption | null {
  const m = text.match(
    /ASSUMPTION_FOUND\nLabel: ([\s\S]+)\nDomain: ([\s\S]+)\nConstraintType: ([\s\S]+)\nCost: ([\s\S]+)\nEND_ASSUMPTION/
  );
  if (!m) return null;
  return {
    label: m[1].trim(),
    domain: m[2].trim(),
    constraintType: m[3].trim(),
    cost: m[4].trim(),
  };
}

function cleanText(text: string): string {
  return text.replace(/ASSUMPTION_FOUND[\s\S]*?END_ASSUMPTION/, "").trim();
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 py-3 pl-9">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: BRAND.pink,
            display: "inline-block",
            animation: "agaDot 1.4s ease-in-out infinite",
            animationDelay: `${i * 0.18}s`,
          }}
        />
      ))}
    </div>
  );
}

function AssumptionCard({ assumption }: { assumption: Assumption }) {
  const domainColor = DOMAIN_COLORS[assumption.domain] || BRAND.pink;
  return (
    <div
      style={{
        marginTop: 20,
        background: "#0d0d16",
        border: `1px solid ${domainColor}50`,
        borderRadius: 14,
        padding: "24px 20px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${domainColor}, transparent)`,
        }}
      />
      <div style={{ display: "flex", gap: 7, marginBottom: 14, flexWrap: "wrap" }}>
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: domainColor,
            background: `${domainColor}18`,
            padding: "4px 10px",
            borderRadius: 4,
          }}
        >
          {assumption.domain}
        </span>
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: BRAND.textMuted,
            background: BRAND.border,
            padding: "4px 10px",
            borderRadius: 4,
          }}
        >
          {assumption.constraintType}
        </span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-dm-serif), serif",
          fontSize: 22,
          color: BRAND.textPrimary,
          lineHeight: 1.25,
          marginBottom: 14,
        }}
      >
        {assumption.label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 14,
          color: BRAND.textMuted,
          lineHeight: 1.65,
          paddingTop: 14,
          borderTop: `1px solid ${BRAND.border}`,
          marginBottom: 20,
        }}
      >
        {assumption.cost}
      </div>
      <a
        href="/contact"
        style={{
          display: "inline-block",
          background: BRAND.pink,
          color: "#fff",
          textDecoration: "none",
          borderRadius: 8,
          padding: "10px 20px",
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.03em",
        }}
      >
        Book a conversation with Nola →
      </a>
    </div>
  );
}

function ChatBubble({ msg, isNew }: { msg: Message; isNew: boolean }) {
  const isUser = msg.role === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: 14,
        animation: isNew ? "agaFadeUp 0.28s ease forwards" : "none",
        opacity: isNew ? 0 : 1,
      }}
    >
      {!isUser && (
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${BRAND.pink}, #7b61ff)`,
            flexShrink: 0,
            marginRight: 9,
            marginTop: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 8,
            color: "#fff",
            fontWeight: 700,
          }}
        >
          AGA
        </div>
      )}
      <div style={{ maxWidth: "76%" }}>
        <div
          style={{
            background: isUser ? `${BRAND.pink}14` : BRAND.surfaceAlt,
            border: `1px solid ${isUser ? BRAND.pink + "28" : BRAND.border}`,
            borderRadius: isUser ? "14px 3px 14px 14px" : "3px 14px 14px 14px",
            padding: "11px 15px",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            color: BRAND.textPrimary,
            lineHeight: 1.68,
            whiteSpace: "pre-wrap",
          }}
        >
          {msg.content}
        </div>
        {msg.assumption && <AssumptionCard assumption={msg.assumption} />}
      </div>
    </div>
  );
}

function ModeSelector({ onSelect }: { onSelect: (mode: string) => void }) {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "40px 24px",
        gap: 36,
        background: BRAND.darkBg,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            color: BRAND.pink,
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Everyday Futurism
        </div>
        <div
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: 28,
            color: BRAND.textPrimary,
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          Assumption-Ground Audit
        </div>
        <div
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            color: BRAND.textMuted,
            maxWidth: 340,
            lineHeight: 1.65,
            margin: "0 auto",
          }}
        >
          A conversation that surfaces the hidden assumption doing the most work
          underneath your next commitment.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: "100%",
          maxWidth: 360,
        }}
      >
        {[
          {
            id: "self",
            label: "Self-serve",
            sub: "You drive. The audit follows your logic.",
          },
          {
            id: "facilitated",
            label: "Facilitated",
            sub: "Nola runs the session. The audit reasons alongside you.",
          },
        ].map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            onMouseEnter={() => setHovered(opt.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === opt.id ? BRAND.surfaceAlt : BRAND.surface,
              border: `1px solid ${
                hovered === opt.id ? BRAND.pink + "60" : BRAND.border
              }`,
              borderRadius: 12,
              padding: "18px 20px",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.16s ease",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: hovered === opt.id ? BRAND.pink : BRAND.textPrimary,
                marginBottom: 4,
                transition: "color 0.16s",
              }}
            >
              {opt.label}
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                color: BRAND.textMuted,
              }}
            >
              {opt.sub}
            </div>
          </button>
        ))}
      </div>

      <div
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: 10,
          color: BRAND.textDim,
          letterSpacing: "0.1em",
        }}
      >
        nolasimon.com
      </div>
    </div>
  );
}

export default function AGAAuditPage() {
  const [mode, setMode] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [apiHistory, setApiHistory] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [newMsgIndex, setNewMsgIndex] = useState<number | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function startSession(selectedMode: string) {
    const opening =
      selectedMode === "facilitated" ? FAC_OPENING : SELF_OPENING;
    setMode(selectedMode);
    setMessages([{ role: "assistant", content: opening }]);
    setApiHistory([{ role: "assistant", content: opening }]);
    setNewMsgIndex(0);
  }

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const text = input.trim();
    setInput("");

    const userMsg = { role: "user" as const, content: text };
    const newHistory = [...apiHistory, { role: "user", content: text }];
    const newMessages = [...messages, userMsg];

    setApiHistory(newHistory);
    setMessages(newMessages);
    setNewMsgIndex(newMessages.length - 1);
    setLoading(true);

    try {
      const res = await fetch("/api/aga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory, mode }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.text) {
        setMessages((m) => {
          const updated = [
            ...m,
            {
              role: "assistant" as const,
              content:
                "The audit couldn't respond just now. Please try again in a little while.",
            },
          ];
          setNewMsgIndex(updated.length - 1);
          return updated;
        });
        return;
      }

      const raw: string = data.text;
      const assumption = parseAssumption(raw);
      const content = assumption ? cleanText(raw) : raw;

      const assistantMsg: Message = { role: "assistant", content, assumption };
      setApiHistory((h) => [...h, { role: "assistant", content: raw }]);
      setMessages((m) => {
        const updated = [...m, assistantMsg];
        setNewMsgIndex(updated.length - 1);
        return updated;
      });
      if (assumption) setDone(true);
    } catch {
      setMessages((m) => {
        const updated = [
          ...m,
          {
            role: "assistant" as const,
            content:
              "Something went wrong reaching the audit. Please try again.",
          },
        ];
        setNewMsgIndex(updated.length - 1);
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function reset() {
    setMode(null);
    setMessages([]);
    setApiHistory([]);
    setInput("");
    setLoading(false);
    setDone(false);
    setNewMsgIndex(null);
  }

  if (!mode) return <ModeSelector onSelect={startSession} />;

  return (
    <>
      <style>{`
        @keyframes agaDot {
          0%, 80%, 100% { opacity: 0.15; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
        @keyframes agaFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .aga-textarea:focus { outline: none; }
        .aga-textarea { resize: none; }
      `}</style>

      <div
        style={{
          background: BRAND.darkBg,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "12px 18px",
            borderBottom: `1px solid ${BRAND.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: done ? "#00c4b4" : BRAND.pink,
                boxShadow: `0 0 6px ${done ? "#00c4b4" : BRAND.pink}`,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                color: BRAND.textMuted,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              AGA · {mode === "facilitated" ? "Facilitated" : "Self-serve"} ·{" "}
              {done ? "Complete" : "Active"}
            </span>
          </div>
          <button
            onClick={reset}
            style={{
              background: "transparent",
              border: "none",
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: BRAND.textDim,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "20px 16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {messages.map((msg, i) => (
            <ChatBubble key={i} msg={msg} isNew={i === newMsgIndex} />
          ))}
          {loading && <TypingDots />}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        {!done ? (
          <div
            style={{
              padding: "10px 14px 14px",
              borderTop: `1px solid ${BRAND.border}`,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                background: BRAND.surface,
                border: `1px solid ${BRAND.border}`,
                borderRadius: 12,
                padding: "10px 12px",
                alignItems: "flex-end",
              }}
            >
              <textarea
                ref={textareaRef}
                className="aga-textarea"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder={
                  mode === "facilitated"
                    ? "Enter what the prospect said..."
                    : "Your response..."
                }
                rows={1}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  color: BRAND.textPrimary,
                  lineHeight: 1.5,
                  maxHeight: 100,
                  overflowY: "auto",
                }}
                onInput={(e) => {
                  const t = e.target as HTMLTextAreaElement;
                  t.style.height = "auto";
                  t.style.height = Math.min(t.scrollHeight, 100) + "px";
                }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                style={{
                  background:
                    input.trim() && !loading ? BRAND.pink : BRAND.border,
                  border: "none",
                  borderRadius: 7,
                  width: 30,
                  height: 30,
                  flexShrink: 0,
                  cursor: input.trim() && !loading ? "pointer" : "default",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "background 0.14s",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M7 1l6 6-6 6"
                    stroke="#fff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                color: BRAND.textDim,
                textAlign: "center",
                marginTop: 7,
                letterSpacing: "0.08em",
              }}
            >
              Enter to send · Shift+Enter for new line
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: "12px 16px",
              borderTop: `1px solid ${BRAND.border}`,
              textAlign: "center",
            }}
          >
            <button
              onClick={reset}
              style={{
                background: "transparent",
                border: `1px solid ${BRAND.border}`,
                borderRadius: 8,
                padding: "8px 16px",
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                color: BRAND.textMuted,
                cursor: "pointer",
              }}
            >
              Run another audit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
