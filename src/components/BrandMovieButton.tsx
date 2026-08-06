"use client";

import { useEffect, useState } from "react";

export default function BrandMovieButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="yh-rise relative mt-3 inline-flex items-center gap-2.5 text-[13px] text-ink-soft transition-colors duration-300 hover:text-accent [animation-delay:0.9s]"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-accent">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden>
            <path d="M0 0.5L10 6L0 11.5V0.5Z" fill="currentColor" />
          </svg>
        </span>
        ブランドムービーを見る(20秒)
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="ブランドムービー"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/70 p-5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[720px] overflow-hidden rounded-card bg-surface shadow-[0_30px_80px_oklch(27%_0.015_85/0.3)]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="閉じる"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-surface transition-colors duration-300 hover:bg-ink"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <video
              src="/videos/brand-movie.mp4"
              poster="/videos/brand-movie-poster.jpg"
              autoPlay
              muted
              playsInline
              controls
              className="block h-auto w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
