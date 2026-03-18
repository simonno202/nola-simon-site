"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { NAV_ITEMS, CTA_LINK } from "@/data/navigation";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Close on click outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[--max-width-content] items-center justify-between px-[28px] py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-sans text-[18px] font-semibold text-navy"
        >
          Nola Simon
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-sans text-[13px] font-medium text-navy transition-colors hover:text-pink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary" href={CTA_LINK} className="text-[13px] px-5 py-2.5">
            Book an Intro Consultation
          </Button>
        </div>

        {/* Mobile hamburger — min 44x44 touch target */}
        <button
          ref={buttonRef}
          className="flex flex-col items-center justify-center gap-[5px] md:hidden min-w-[44px] min-h-[44px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-[2px] w-5 bg-navy transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-5 bg-navy transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-5 bg-navy transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="menu"
          className="absolute right-4 top-14 z-40 w-64 rounded-xl border border-border-light bg-cream shadow-lg md:hidden animate-fade-in-up"
        >
          <ul className="flex flex-col py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block px-5 py-2.5 font-sans text-[14px] font-medium text-navy transition-colors hover:bg-surface hover:text-pink"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li role="none" className="px-5 pt-2 pb-1">
              <Button
                variant="primary"
                href={CTA_LINK}
                onClick={() => setMenuOpen(false)}
                className="w-full text-center text-[13px]"
              >
                Book an Intro Consultation
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
