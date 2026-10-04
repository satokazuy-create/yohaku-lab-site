"use client";

import { useEffect, useRef, useState } from "react";

// 50秒のブランドフィルム(PULSE → 余白美術館)。縦長の画面では縦版、横長の画面では横版を出し分け、
// クリック(ユーザー操作)を起点に音ありで最初から再生する。
const FILM = {
  portrait: { src: "/videos/yohaku-film-portrait.mp4", poster: "/videos/yohaku-film-portrait-poster.jpg" },
  landscape: { src: "/videos/yohaku-film-landscape.mp4", poster: "/videos/yohaku-film-landscape-poster.jpg" },
};

type Orientation = keyof typeof FILM;

export default function BrandMovieButton() {
  const [open, setOpen] = useState<Orientation | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    // 音ありで再生。ブラウザに止められた場合はコントロールから再生してもらう
    videoRef.current?.play().catch(() => {});
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  function openFilm() {
    setOpen(window.matchMedia("(max-aspect-ratio: 1/1)").matches ? "portrait" : "landscape");
  }

  const film = open ? FILM[open] : null;

  return (
    <>
      <button
        type="button"
        onClick={openFilm}
        className="yh-rise relative mt-3 inline-flex items-center gap-2.5 text-[13px] text-ink-soft transition-colors duration-300 hover:text-accent [animation-delay:0.9s]"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-accent">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden>
            <path d="M0 0.5L10 6L0 11.5V0.5Z" fill="currentColor" />
          </svg>
        </span>
        ブランドムービーを見る(50秒・音が出ます)
      </button>

      {film && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="ブランドムービー"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/80 p-5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={
              "relative overflow-hidden rounded-card bg-ink shadow-[0_30px_80px_oklch(27%_0.015_85/0.3)] " +
              (open === "portrait"
                ? "aspect-[9/16] h-[min(86vh,calc((100vw-40px)*16/9))]"
                : "aspect-video w-[min(1120px,calc(100vw-40px),calc((86vh)*16/9))]")
            }
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
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
              ref={videoRef}
              src={film.src}
              poster={film.poster}
              preload="auto"
              autoPlay
              playsInline
              controls
              aria-label="YOHAKU Lab ブランドムービー(PULSE と 余白美術館)"
              className="block h-full w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
