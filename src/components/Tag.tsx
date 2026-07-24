const VARIANTS = {
  individual: "bg-accent-soft text-accent",
  supporter: "bg-warm-soft text-warm-ink",
  corporate: "bg-sky-soft text-sky-ink",
  community: "bg-lav-soft text-lav-ink",
} as const;

export type TagVariant = keyof typeof VARIANTS;

export default function Tag({
  variant,
  children,
  className = "",
}: {
  variant: TagVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-3.5 py-1.5 text-[11px] tracking-[0.06em] ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
