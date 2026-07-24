export default function DriftBlob({
  color = "var(--color-warm-soft)",
  size = 300,
  top,
  bottom,
  left,
  right,
  variant = 1,
}: {
  color?: string;
  size?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  variant?: 1 | 2;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-[6px] ${
        variant === 1 ? "yh-drift-1" : "yh-drift-2"
      }`}
      style={{
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
      }}
    />
  );
}
