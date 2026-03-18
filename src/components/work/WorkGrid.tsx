"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { WORK_ITEMS, type WorkFormat } from "@/data/work-items";

const FORMATS: Array<"All" | WorkFormat> = [
  "All",
  "Writing",
  "Audio",
  "Video",
  "Books",
];

const FORMAT_ICONS: Record<WorkFormat, string> = {
  Writing: "✍️",
  Audio: "🎙️",
  Video: "🎬",
  Books: "📖",
};

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<"All" | WorkFormat>("All");

  const filtered =
    activeFilter === "All"
      ? WORK_ITEMS
      : WORK_ITEMS.filter((item) => item.format === activeFilter);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {FORMATS.map((format) => {
          const isActive = format === activeFilter;
          const count =
            format === "All"
              ? WORK_ITEMS.length
              : WORK_ITEMS.filter((i) => i.format === format).length;

          return (
            <button
              key={format}
              onClick={() => setActiveFilter(format)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-navy text-cream border-navy"
                  : "bg-transparent text-navy border-border-medium hover:bg-surface"
              }`}
            >
              {format}
              <span
                className={`text-xs ${
                  isActive ? "text-cream/60" : "text-text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target={item.url.startsWith("/") ? undefined : "_blank"}
            rel={item.url.startsWith("/") ? undefined : "noopener noreferrer"}
            className="group block"
          >
            <Card className="h-full transition-shadow hover:shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base" aria-hidden="true">
                  {FORMAT_ICONS[item.format]}
                </span>
                <span className="text-[12px] font-mono text-text-muted uppercase tracking-wide">
                  {item.format}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-navy group-hover:text-pink transition-colors">
                {item.title}
              </h3>

              <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                {item.description}
              </p>

              {item.source && (
                <p className="mt-3 text-[12px] font-medium text-text-muted">
                  {item.source}
                </p>
              )}
            </Card>
          </a>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="rounded-xl border border-border-medium bg-surface p-10 text-center">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            Nothing here yet. Check back soon.
          </p>
        </div>
      )}
    </div>
  );
}

export default WorkGrid;
