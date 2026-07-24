import Link from "next/link";

export const SWEEP_GRADIENT =
  "linear-gradient(100deg, var(--color-ink) 0%, var(--color-ink) 45%, var(--color-accent) 50%, var(--color-ink) 55%, var(--color-ink) 100%)";

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-pill bg-[length:220%_100%] bg-[position:100%_0] px-8 py-3.5 text-sm text-surface transition-[background-position] duration-700 ease-out hover:bg-[position:0%_0] ${className}`}
      style={{ backgroundImage: SWEEP_GRADIENT }}
    >
      {children}
    </Link>
  );
}

export function PrimaryButtonAction({
  children,
  className = "",
  type = "button",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-pill bg-[length:220%_100%] bg-[position:100%_0] px-8 py-3.5 text-sm text-surface transition-[background-position] duration-700 ease-out hover:bg-[position:0%_0] ${className}`}
      style={{ backgroundImage: SWEEP_GRADIENT }}
      {...rest}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-pill border border-border px-8 py-3.5 text-sm text-ink-soft transition-colors duration-300 ease-out hover:border-ink hover:text-ink ${className}`}
    >
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className = "",
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      className={`inline-block border-b border-ink pb-0.5 text-[13.5px] text-ink transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </Link>
  );
}

export function PillLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`whitespace-nowrap rounded-pill border border-border px-4 py-2 text-[12.5px] text-ink-soft transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </a>
  );
}
