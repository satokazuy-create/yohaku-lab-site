"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  id?: string;
};

export default function Reveal({
  children,
  className = "",
  threshold = 0.15,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={(node) => {
        ref.current = node;
      }}
      id={id}
      className={`yh-reveal${visible ? " yh-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
