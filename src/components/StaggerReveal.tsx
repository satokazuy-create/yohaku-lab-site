"use client";

import { useEffect, useRef, useState } from "react";

export default function StaggerReveal({
  items,
  className = "",
  itemClassName = "",
  threshold = 0.4,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  threshold?: number;
}) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setVisible(items.map(() => true)), 0);
      return () => clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = refs.current.findIndex((el) => el === entry.target);
          if (entry.isIntersecting && idx !== -1) {
            setVisible((v) => {
              const next = [...v];
              next[idx] = true;
              return next;
            });
            io.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, items.length]);

  return (
    <div className={className}>
      {items.map((label, i) => (
        <span
          key={label}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`transition-[opacity,transform] duration-700 ease-out ${
            visible[i] ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          } ${itemClassName}`}
          style={{ transitionDelay: `${i * 0.12}s` }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
