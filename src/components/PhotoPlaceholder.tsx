export default function PhotoPlaceholder({
  label,
  className = "",
  height = 180,
  radius = 16,
}: {
  label: string;
  className?: string;
  height?: number | string;
  radius?: number;
}) {
  return (
    <div
      className={`flex items-center justify-center border border-border bg-bg-alt px-4 text-center text-[11px] leading-relaxed text-ink-faint ${className}`}
      style={{ height, borderRadius: radius }}
    >
      {label}
    </div>
  );
}
