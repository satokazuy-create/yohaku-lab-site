import type { Metadata } from "next";
import DriftBlob from "@/components/DriftBlob";
import Reveal from "@/components/Reveal";
import SimpleFooter from "@/components/SimpleFooter";
import { SecondaryButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "実績 — YOHAKU Lab",
  description: "講師・講演実績。介護支援専門員連絡会、グループホーム協会、行政、地域包括支援センターなどでの研修・講演実績。",
};

const LECTURE_RESULTS = [
  "介護支援専門員連絡会における研修講師",
  "グループホーム協会における研修講師",
  "介護保険事業所を対象とした職員研修",
  "高齢者施設・介護施設における職員研修",
  "行政主催の市民向け講演会・介護者向け講座",
  "地域包括支援センター、介護・福祉関係機関、NPO法人における研修・講演",
  "家族介護者向けの心理教育・セルフケア講座",
  "対人援助職を対象としたメンタルヘルス・相談援助研修等",
];

export default function ResultsPage() {
  return (
    <>
      <section className="relative mx-auto flex max-w-[900px] flex-col items-center gap-5 overflow-hidden px-5 pb-10 pt-22 text-center tab:px-10">
        <DriftBlob color="var(--color-accent-soft)" size={300} top={-100} left={-60} />
        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          RESULTS
        </div>
        <h1 className="yh-rise relative font-serif text-[clamp(28px,4vw,40px)] font-medium leading-[1.6] tracking-[0.02em] [animation-delay:0.25s]">
          実績
        </h1>
        <p className="yh-rise relative max-w-[540px] text-[14.5px] leading-[1.9] text-ink-soft [animation-delay:0.4s]">
          福祉・介護・行政・地域の現場で、研修・講演を通じて余白を届けてきました。
        </p>
      </section>

      <Reveal className="mx-auto max-w-[760px] px-5 pb-24 pt-6 tab:px-10" threshold={0.15}>
        <div className="mb-6 text-xs tracking-[0.24em] text-ink-faint">講師・講演実績</div>
        <ul className="flex flex-col gap-0 border-t border-border">
          {LECTURE_RESULTS.map((item) => (
            <li
              key={item}
              className="border-b border-border py-4 text-[14px] leading-[1.8] text-ink-soft"
            >
              {item}
            </li>
          ))}
        </ul>
      </Reveal>

      <SimpleFooter>
        <SecondaryButton href="/">TOPページに戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
