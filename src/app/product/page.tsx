import type { Metadata } from "next";
import Image from "next/image";
import DriftBlob from "@/components/DriftBlob";
import Reveal from "@/components/Reveal";
import SimpleFooter from "@/components/SimpleFooter";
import { SecondaryButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "プロダクト — YOHAKU Lab",
  description: "余白コンパス・余白ビンゴ。余白をカタチにする、小さな実験たち。",
};

export default function ProductPage() {
  return (
    <>
      <section className="relative mx-auto flex max-w-[900px] flex-col items-center gap-5 overflow-hidden px-5 pb-10 pt-22 text-center tab:px-10">
        <DriftBlob color="var(--color-accent-soft)" size={300} top={-100} left={-60} />
        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          PRODUCT
        </div>
        <h1 className="yh-rise relative font-serif text-[clamp(28px,4vw,40px)] font-medium leading-[1.6] tracking-[0.02em] [animation-delay:0.25s]">
          プロダクト
        </h1>
        <p className="yh-rise relative max-w-[540px] text-[14.5px] leading-[1.9] text-ink-soft [animation-delay:0.4s]">
          余白をカタチにする、小さな実験たち。今はモニターの方々と一緒に、育てている段階です。
        </p>
      </section>

      {/* ============ 余白コンパス ============ */}
      <Reveal className="mx-auto max-w-[1000px] px-5 pb-16 pt-6 tab:px-10" threshold={0.15}>
        <div className="grid grid-cols-1 items-center gap-10 tab:grid-cols-[1fr_1.2fr]">
          <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-card border border-border shadow-[0_18px_40px_oklch(27%_0.015_85/0.1)]">
            <Image
              src="/images/compass-preview-1.png"
              alt="余白コンパスのワークシート(質問項目)のイメージ"
              width={1024}
              height={1536}
              className="block h-auto w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-3.5">
            <span className="rounded-pill bg-accent-soft px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-accent">
              セルフチェックツール
            </span>
            <h2 className="font-serif text-[22px] font-semibold">余白コンパス</h2>
            <p className="font-serif text-sm text-ink-faint">
              〜 自分に戻る力を育むためのコンパス 〜
            </p>
            <p className="text-sm leading-[1.9] text-ink-soft">
              身体・こころ・思考・人との関係・役割・環境・時間・未来という「余白の8分野」について24の質問に答えると、レーダーチャートで今の余白バランスが見えてくるセルフチェックツールです。
              <br />
              点数の高い・低いは優劣ではありません。今の自分を知り、次の小さな一歩を見つけるための道具として使えるように設計しています。
            </p>
            <span className="mt-1 rounded-pill border border-border px-4 py-2 text-[12.5px] text-ink-faint">
              モニター検証中
            </span>
          </div>
        </div>
      </Reveal>

      {/* ============ 余白ビンゴ ============ */}
      <Reveal className="bg-bg-alt px-5 py-16 tab:px-10" threshold={0.15}>
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-10 tab:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col items-start gap-3.5 tab:order-1">
            <span className="rounded-pill bg-warm-soft px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-warm-ink">
              YOHAKU PLAY 01
            </span>
            <h2 className="font-serif text-[22px] font-semibold">余白ビンゴ</h2>
            <p className="font-serif text-sm text-ink-faint">よはくの庭師になろう</p>
            <p className="text-sm leading-[1.9] text-ink-soft">
              日々のちいさな「余白」をビンゴ形式で見つけ、積み重ねるほど自分の庭が育っていくセルフケアツールです。今日のひとマスから、余白の庭師に。
            </p>
            <span className="mt-1 rounded-pill border border-border bg-surface px-4 py-2 text-[12.5px] text-ink-faint">
              モニター検証中
            </span>
          </div>
          <div className="mx-auto w-full max-w-[240px] overflow-hidden rounded-card border border-border shadow-[0_18px_40px_oklch(27%_0.015_85/0.1)] tab:order-2">
            <Image
              src="/images/bingo-preview-1.jpg"
              alt="余白ビンゴのアプリ画面(余白の庭とビンゴマス)のイメージ"
              width={1080}
              height={1789}
              className="block h-auto w-full object-cover"
            />
          </div>
        </div>
      </Reveal>

      <SimpleFooter>
        <SecondaryButton href="/">TOPページに戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
