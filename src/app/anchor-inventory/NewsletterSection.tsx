"use client";

import { useState } from "react";

const KIT_FORM_URL = "https://app.convertkit.com/forms/430927c5eb/subscriptions";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitting(true);
    try {
      const formData = new URLSearchParams();
      formData.append("email_address", email);
      await fetch(KIT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
        mode: "no-cors",
      });
    } catch {
      // Fail silently
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="anchor-newsletter">
      <div className="anchor-newsletter-inner">
        <h2>Essays on trust, leadership, and the future of work.</h2>
        <p>No noise. Just signal.</p>
        {submitted ? (
          <p className="anchor-newsletter-success">Good. Watch for it. — Nola</p>
        ) : (
          <form className="anchor-newsletter-form" onSubmit={handleSubmit}>
            <input
              className="anchor-newsletter-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              className="anchor-newsletter-btn"
              type="submit"
              disabled={submitting}
              style={{ opacity: submitting ? 0.75 : 1 }}
            >
              {submitting ? "Sending…" : "Send it to me"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
