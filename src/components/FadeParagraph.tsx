"use client";

import { useEffect, useRef, useState } from "react";

type FadeParagraphProps = {
  children: React.ReactNode;
  as?: "p" | "div";
  className?: string;
};

export default function FadeParagraph({
  children,
  as = "p",
  className = "",
}: FadeParagraphProps) {
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `yh-fade-p${visible ? " yh-in" : ""} ${className}`;
  const refCallback = (node: HTMLElement | null) => {
    ref.current = node;
  };

  if (as === "div") {
    return (
      <div ref={refCallback} className={cls}>
        {children}
      </div>
    );
  }

  return (
    <p ref={refCallback} className={cls}>
      {children}
    </p>
  );
}
