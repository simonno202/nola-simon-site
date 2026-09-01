"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export default function MakeItSoFaq({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ marginTop: 40 }}>
      <style>{`
        .mis-faq-item { border-bottom: 1px solid var(--border-subtle); }
        .mis-faq-item:first-child { border-top: 1px solid var(--border-subtle); }
        .mis-faq-trigger {
          width: 100%;
          background: none;
          border: none;
          padding: 28px 0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          text-align: left;
        }
        .mis-faq-q {
          font-family: var(--sans);
          font-size: 17px;
          font-weight: 600;
          color: var(--text);
          line-height: 1.4;
          margin: 0;
        }
        .mis-faq-icon {
          font-family: var(--mono);
          font-size: 20px;
          font-weight: 300;
          color: var(--pink);
          flex-shrink: 0;
          line-height: 1;
          width: 20px;
          text-align: center;
          margin-top: 2px;
          transition: transform 0.25s ease;
          user-select: none;
        }
        .mis-faq-item.open .mis-faq-icon { transform: rotate(45deg); }
        .mis-faq-body { padding: 0 40px 28px 0; }
        .mis-faq-a {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.75;
          margin: 0;
          white-space: pre-line;
        }
      `}</style>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`mis-faq-item${isOpen ? " open" : ""}`} key={faq.q}>
            <button
              className="mis-faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="mis-faq-q">{faq.q}</span>
              <span className="mis-faq-icon" aria-hidden="true">
                +
              </span>
            </button>
            {isOpen && (
              <div className="mis-faq-body">
                <p className="mis-faq-a">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
