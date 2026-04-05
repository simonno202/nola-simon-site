"use client";

import { useState, useMemo } from "react";
import {
  EPISODES,
  PODCAST_BASE_URL,
  APPLE_PODCASTS_URL,
  SPOTIFY_URL,
} from "@/data/episodes";
import { formatDate } from "@/lib/utils";

const ALL_TOPICS = [...new Set(EPISODES.flatMap((e) => e.topics))].sort();
const ALL_GUESTS = [
  ...new Set(EPISODES.filter((e) => e.guest).map((e) => e.guest!)),
].sort();
const ALL_SEASONS = [
  ...new Set(EPISODES.map((e) => e.season)),
].sort((a, b) => b - a);

const guestCount = EPISODES.filter((e) => e.type === "guest").length;
const soloCount = EPISODES.filter((e) => e.type === "solo").length;

/* ───────────────────── Episode Card ───────────────────── */

function EpisodeCard({
  ep,
  i,
}: {
  ep: (typeof EPISODES)[number];
  i: number;
}) {
  return (
    <a
      href={`${PODCAST_BASE_URL}/${ep.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-border-light px-7 py-[26px] no-underline text-inherit transition-colors hover:bg-surface-hover"
      style={{ animation: `fade-in-up 0.3s ease ${i * 0.025}s both` }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left content */}
        <div className="min-w-0 flex-1">
          {/* Meta row */}
          <div className="mb-[7px] flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.07em] text-text-light">
              {formatDate(ep.date)}
            </span>
            <span className="inline-block h-[3px] w-[3px] rounded-full bg-border-strong" />
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.07em] ${
                ep.type === "guest"
                  ? "font-semibold text-gold-dark"
                  : "text-text-light"
              }`}
            >
              {ep.type === "guest" ? ep.guest : "Solo"}
            </span>
            <span className="inline-block h-[3px] w-[3px] rounded-full bg-border-strong" />
            <span className="font-mono text-[11px] tracking-[0.07em] text-text-lighter">
              S{ep.season}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`m-0 font-sans text-[17px] font-semibold leading-[1.35] text-navy ${
              ep.desc ? "mb-[6px]" : "mb-[9px]"
            }`}
          >
            {ep.title}
          </h3>

          {/* Description */}
          {ep.desc && (
            <p className="m-0 mb-[9px] max-w-[620px] text-[13px] leading-[1.5] text-text-muted">
              {ep.desc}
            </p>
          )}

          {/* Topic pills */}
          <div className="flex flex-wrap gap-[5px]">
            {ep.topics.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-[--radius-pill] bg-tag-bg px-[10px] py-[5px] font-sans text-[11px] tracking-[0.02em] text-text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-border-strong transition-all group-hover:translate-x-[2px] group-hover:border-navy group-hover:bg-navy">
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 7h8M8 4l3 3-3 3"
              className="stroke-text-muted group-hover:stroke-cream"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

/* ───────────────────── Podcast Search ───────────────────── */

export default function PodcastSearch() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "guest" | "solo">(
    "all",
  );
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedGuest, setSelectedGuest] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [visible, setVisible] = useState(20);

  const toggleTopic = (t: string) =>
    setSelectedTopics((p) =>
      p.includes(t) ? p.filter((x) => x !== t) : [...p, t],
    );

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return EPISODES.filter((ep) => {
      if (q) {
        const s = [
          ep.title,
          ep.guest || "",
          ep.desc || "",
          ...ep.topics,
          ep.type,
          "season " + ep.season,
        ]
          .join(" ")
          .toLowerCase();
        if (!s.includes(q)) return false;
      }
      if (typeFilter === "guest" && ep.type !== "guest") return false;
      if (typeFilter === "solo" && ep.type !== "solo") return false;
      if (
        selectedTopics.length &&
        !selectedTopics.some((t) => ep.topics.includes(t))
      )
        return false;
      if (selectedGuest && ep.guest !== selectedGuest) return false;
      if (selectedSeason && ep.season !== Number(selectedSeason)) return false;
      return true;
    });
  }, [query, typeFilter, selectedTopics, selectedGuest, selectedSeason]);

  const shown = filtered.slice(0, visible);
  const activeFilterCount =
    (typeFilter !== "all" ? 1 : 0) +
    selectedTopics.length +
    (selectedGuest ? 1 : 0) +
    (selectedSeason ? 1 : 0);

  const clearAll = () => {
    setQuery("");
    setTypeFilter("all");
    setSelectedTopics([]);
    setSelectedGuest("");
    setSelectedSeason("");
  };

  return (
    <div>
      {/* Stats */}
      <span className="mb-[6px] block font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
        Made in Canada &middot; {EPISODES.length} Episodes &middot;{" "}
        {guestCount} Guest &middot; {soloCount} Solo
      </span>

      {/* Search input */}
      <div className="relative mb-[14px]">
        <svg
          width="17"
          height="17"
          viewBox="0 0 18 18"
          fill="none"
          className="absolute left-[15px] top-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <circle cx="7.5" cy="7.5" r="5.5" stroke="#a0a090" strokeWidth="1.5" />
          <path
            d="M12 12l4 4"
            stroke="#a0a090"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <label htmlFor="podcast-search" className="sr-only">
          Search episodes
        </label>
        <input
          id="podcast-search"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(20);
          }}
          placeholder="Search episodes by title, guest, topic..."
          className="w-full rounded-[--radius-input] border-[1.5px] border-border-input bg-surface py-[15px] pl-[46px] pr-[15px] font-sans text-[14.5px] text-navy outline-none transition-colors placeholder:text-text-lighter focus:border-navy"
        />
      </div>

      {/* Type filter + Filters toggle */}
      <div className="mb-[14px] flex flex-wrap items-center gap-[7px]">
        {(["all", "guest", "solo"] as const).map((t) => (
          <button
            key={t}
            onClick={() => {
              setTypeFilter(t);
              setVisible(20);
            }}
            className={`cursor-pointer rounded-[7px] border-[1.5px] px-4 py-[7px] font-sans text-[12.5px] font-medium transition-colors ${
              typeFilter === t
                ? "border-navy bg-navy text-cream"
                : "border-border-strong bg-transparent text-text-secondary"
            }`}
          >
            {t === "all"
              ? "All Episodes"
              : t === "guest"
                ? "Guest Episodes"
                : "Solo Episodes"}
          </button>
        ))}

        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex cursor-pointer items-center gap-[5px] rounded-[7px] border-[1.5px] border-border-strong px-4 py-[7px] font-sans text-[12.5px] font-medium text-text-secondary transition-colors ${
            showFilters ? "bg-tag-bg" : "bg-transparent"
          }`}
        >
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M1 3h12M3 7h8M5 11h4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-navy text-[10px] font-bold text-cream">
              {activeFilterCount}
            </span>
          )}
        </button>

        {activeFilterCount > 0 && (
          <button
            onClick={clearAll}
            className="cursor-pointer border-none bg-transparent px-3 py-[7px] font-sans text-[11.5px] font-semibold text-gold underline underline-offset-2"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Expanded filters panel */}
      {showFilters && (
        <div className="mb-[14px] animate-fade-in-up rounded-[--radius-input] border-[1.5px] border-border-medium bg-surface p-[22px]">
          {/* Guest filter */}
          <div className="mb-[18px]">
            <label htmlFor="filter-guest" className="mb-[7px] block font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-muted">
              Guest
            </label>
            <div className="relative">
              <select
                id="filter-guest"
                value={selectedGuest}
                onChange={(e) => {
                  setSelectedGuest(e.target.value);
                  setVisible(20);
                }}
                className="w-full max-w-[300px] cursor-pointer appearance-none rounded-[7px] border-[1.5px] border-border-input bg-surface-hover px-[13px] py-[9px] pr-[34px] font-sans text-[12.5px] text-navy outline-none"
              >
                <option value="">All guests</option>
                {ALL_GUESTS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                className="pointer-events-none absolute right-[13px] top-1/2 -translate-y-1/2"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5l3 3 3-3"
                  stroke="#8a8a7a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Season filter */}
          <div className="mb-[18px]">
            <label htmlFor="filter-season" className="mb-[7px] block font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-muted">
              Season
            </label>
            <div className="relative">
              <select
                id="filter-season"
                value={selectedSeason}
                onChange={(e) => {
                  setSelectedSeason(e.target.value);
                  setVisible(20);
                }}
                className="w-full max-w-[300px] cursor-pointer appearance-none rounded-[7px] border-[1.5px] border-border-input bg-surface-hover px-[13px] py-[9px] pr-[34px] font-sans text-[12.5px] text-navy outline-none"
              >
                <option value="">All seasons</option>
                {ALL_SEASONS.map((s) => (
                  <option key={s} value={s}>
                    Season {s}
                  </option>
                ))}
              </select>
              <svg
                width="11"
                height="11"
                viewBox="0 0 12 12"
                className="pointer-events-none absolute right-[13px] top-1/2 -translate-y-1/2"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5l3 3 3-3"
                  stroke="#8a8a7a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Topic pills */}
          <div>
            <label className="mb-[9px] block font-mono text-[10.5px] uppercase tracking-[0.1em] text-text-muted">
              Topics
            </label>
            <div className="flex max-h-[150px] flex-wrap gap-[5px] overflow-y-auto pr-[6px]">
              {ALL_TOPICS.map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    toggleTopic(t);
                    setVisible(20);
                  }}
                  className={`cursor-pointer whitespace-nowrap rounded-[--radius-pill] border-[1.5px] px-3 py-2 min-h-[44px] font-sans text-[11.5px] font-medium transition-colors ${
                    selectedTopics.includes(t)
                      ? "border-navy bg-navy text-cream"
                      : "border-border-strong bg-transparent text-text-secondary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Result count */}
      <div className="px-0 pb-[3px] pt-[6px] font-mono text-[11.5px] tracking-[0.04em] text-text-lighter">
        {filtered.length === EPISODES.length
          ? `Showing all ${EPISODES.length} episodes`
          : `${filtered.length} episode${filtered.length !== 1 ? "s" : ""} found`}
      </div>

      {/* Episode list */}
      <div className="mt-[10px] overflow-hidden rounded-[--radius-card] border-[1.5px] border-border-medium bg-surface">
        {shown.length === 0 ? (
          <div className="px-7 py-14 text-center">
            <p className="mb-[6px] font-sans text-[17px] text-text-muted">
              No episodes match your search
            </p>
            <p className="text-[12.5px] text-text-lighter">
              Try different terms or adjust filters
            </p>
          </div>
        ) : (
          shown.map((ep, i) => <EpisodeCard key={ep.id} ep={ep} i={i} />)
        )}
      </div>

      {/* Load more */}
      {visible < filtered.length && (
        <div className="pt-[22px] text-center">
          <button
            onClick={() => setVisible((p) => p + 20)}
            className="cursor-pointer rounded-[--radius-button] border-[1.5px] border-border-strong bg-transparent px-7 py-[11px] font-sans text-[12.5px] font-semibold text-navy transition-colors hover:bg-navy hover:text-cream"
          >
            Show more ({filtered.length - visible} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
