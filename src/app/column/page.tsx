import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SimpleFooter from "@/components/SimpleFooter";
import { SecondaryButton } from "@/components/Buttons";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "コラム — YOHAKU Lab",
  description: "不定期更新。日々の暮らしや、身近な物語のなかにあるこころの動きを綴ります。",
};

export default function ColumnListPage() {
  return (
    <>
      <section className="relative mx-auto flex max-w-[900px] flex-col items-center gap-5 overflow-hidden px-5 pb-14 pt-22 text-center tab:px-10">
        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          COLUMN
        </div>
        <h1 className="yh-rise relative font-serif text-[clamp(28px,4vw,40px)] font-medium leading-[1.6] tracking-[0.02em] [animation-delay:0.25s]">
          コラム
        </h1>
        <p className="yh-rise relative max-w-[480px] text-[14.5px] leading-[1.9] text-ink-soft [animation-delay:0.4s]">
          不定期更新。日々の暮らしや、身近な物語のなかにある、こころの動きを綴ります。
        </p>
      </section>

      <Reveal className="px-5 pb-25 tab:px-10" threshold={0.12}>
        <Container maxWidth="1000px" className="!px-0">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border tab:grid-cols-2">
            {ARTICLES.map((a) => (
              <a
                key={a.slug}
                href={`/column/${a.slug}`}
                className="flex flex-col gap-3.5 bg-surface p-8 transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_oklch(27%_0.015_85/0.09)]"
              >
                <span className="inline-flex w-fit items-center rounded-pill bg-accent-soft px-3 py-1.5 text-[11px] tracking-[0.06em] text-accent">
                  {a.series}
                </span>
                <h2 className="font-serif text-lg font-semibold text-ink">{a.title}</h2>
                <p className="text-[13px] leading-[1.8] text-ink-soft">{a.excerpt}</p>
                <div className="mt-auto pt-1.5 text-xs text-ink-faint">続きを読む →</div>
              </a>
            ))}
          </div>
        </Container>
      </Reveal>

      <SimpleFooter>
        <SecondaryButton href="/">TOPページに戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
