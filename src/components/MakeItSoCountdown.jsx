"use client";
import { useState, useEffect } from "react";

const TARGET = new Date("2026-06-01T00:00:00");

function getTimeLeft() {
  const diff = TARGET - new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function Digit({ value, label }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "8px",
    }}>
      <div style={{
        fontFamily: "'DM Mono', 'Courier New', monospace",
        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
        fontWeight: "500",
        color: "#0a0a0a",
        background: "#f5f0e8",
        border: "1.5px solid #0a0a0a",
        padding: "16px 24px",
        minWidth: "90px",
        textAlign: "center",
        lineHeight: 1,
        letterSpacing: "-0.02em",
        boxShadow: "3px 3px 0px #ec4197",
        transition: "transform 0.1s ease",
      }}>
        {String(value).padStart(2, "0")}
      </div>
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.65rem",
        fontWeight: "600",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#0a0a0a",
        opacity: 0.5,
      }}>
        {label}
      </span>
    </div>
  );
}

export default function MakeItSoCountdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;600&display=swap');
      `}</style>
      <div style={{
        background: "#faf8f3",
        border: "1.5px solid #0a0a0a",
        boxShadow: "5px 5px 0px #0a0a0a",
        padding: "clamp(24px, 5vw, 48px)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "28px",
        maxWidth: "560px",
        width: "100%",
      }}>
        <div style={{ textAlign: "center" }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            fontWeight: "600",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#0a0a0a",
            opacity: 0.45,
            margin: "0 0 8px",
          }}>
            Enrollment closes
          </p>
          <h2 style={{
            fontFamily: "'DM Mono', 'Courier New', monospace",
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            fontWeight: "500",
            color: "#0a0a0a",
            margin: 0,
            letterSpacing: "-0.02em",
          }}>
            Make It So
          </h2>
        </div>

        {time ? (
          <div style={{
            display: "flex",
            gap: "clamp(10px, 2.5vw, 20px)",
            alignItems: "flex-start",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <Digit value={time.days} label="days" />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0a0a0a", opacity: 0.3, marginTop: "14px", lineHeight: 1 }}>:</div>
            <Digit value={time.hours} label="hours" />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0a0a0a", opacity: 0.3, marginTop: "14px", lineHeight: 1 }}>:</div>
            <Digit value={time.minutes} label="minutes" />
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#0a0a0a", opacity: 0.3, marginTop: "14px", lineHeight: 1 }}>:</div>
            <Digit value={time.seconds} label="seconds" />
          </div>
        ) : (
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.2rem",
            color: "#0a0a0a",
            margin: 0,
          }}>
            We're live. —
          </p>
        )}

        <a
          href="/make-it-so.html"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem",
            fontWeight: "600",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#faf8f3",
            background: "#ec4197",
            padding: "12px 28px",
            textDecoration: "none",
            display: "inline-block",
            border: "1.5px solid #0a0a0a",
            transition: "box-shadow 0.15s ease, transform 0.15s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.boxShadow = "3px 3px 0px #ec4197";
            e.currentTarget.style.background = "#faf8f3";
            e.currentTarget.style.color = "#ec4197";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.background = "#ec4197";
            e.currentTarget.style.color = "#faf8f3";
          }}
        >
          Secure your spot →
        </a>
      </div>
    </>
  );
}
