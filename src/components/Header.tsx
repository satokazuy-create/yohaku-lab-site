"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";

const NAV_ITEMS: { href: string; label: string; key?: string }[] = [
  { href: "/yohaku-toha", label: "余白とは", key: "yohaku-toha" },
  { href: "/#audiences", label: "できること", key: "audiences" },
  { href: "/#content", label: "コンテンツ", key: "content" },
  { href: "#", label: "プロダクト" },
  { href: "#", label: "実績" },
  { href: "/profile", label: "プロフィール", key: "profile" },
];

const ACTIVE_MAP: Record<string, string> = {
  "/yohaku-toha": "yohaku-toha",
  "/profile": "profile",
  "/kokoro-care": "audiences",
  "/supporter": "audiences",
  "/corporate": "audiences",
  "/community": "audiences",
};

export default function Header() {
  const pathname = usePathname();
  const activeKey =
    ACTIVE_MAP[pathname] ?? (pathname.startsWith("/column") ? "content" : undefined);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/88 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-5">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-[0.06em]"
        >
          YOHAKU Lab
        </Link>
        <nav className="hidden gap-6 whitespace-nowrap text-[13.5px] tracking-[0.02em] text-ink-soft nav:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={
                item.key && activeKey === item.key
                  ? "border-b border-accent pb-0.5 text-ink"
                  : "transition-colors duration-300 hover:text-ink"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="whitespace-nowrap rounded-pill border border-ink px-[22px] py-2.5 text-[13px] transition-colors duration-300 hover:bg-ink hover:text-surface"
        >
          お問い合わせ
        </Link>
      </Container>
    </header>
  );
}
