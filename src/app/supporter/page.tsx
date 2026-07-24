import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SimpleFooter from "@/components/SimpleFooter";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "支援者の回復 — YOHAKU Lab",
  description:
    "トラウマインフォームドケア(TIC)と共感疲労・バーンアウトの理解を軸に、支援者自身の余白を整えます。",
};

const SELF_CHECKS = [
  "対象者のことを考えて眠れない",
  "私がやらなくてはと頑なに思う",
  "自分が役に立っていないと感じる",
  "些細なことで怒りを爆発させたりイライラする",
  "仕事仲間が信頼できない",
  "人と話すことが億劫になっている",
];

const FOUR_R = [
  { no: "①", title: "理解する" },
  { no: "②", title: "気づく" },
  { no: "③", title: "対応する" },
  { no: "④", title: "再トラウマ化を防ぐ" },
];

const PRINCIPLES = [
  { title: "① 安全", desc: "急がさない・否定しない・見通しを伝える。安心感は回復の土台。" },
  { title: "② 信頼性・透明性", desc: "約束を守り、丁寧に説明する。信頼は積み重ねで生まれる。" },
  { title: "③ ピアサポート", desc: "同じ経験をした人とのつながりが回復の力になる。" },
  { title: "④ 協働と相互性", desc: "支援する側・される側ではなく、一緒に考える関係をつくる。" },
  { title: "⑤ エンパワメント・選択", desc: "自分で選べる・決められる感覚を取り戻す。" },
  { title: "⑥ 文化・歴史・ジェンダーへの配慮", desc: "その人の背景にある価値観や歴史を尊重する。" },
];

const WARNING_SIGNS = [
  "人の話がうるさく感じる",
  "利用者に優しくできない",
  "家に帰ると何もしたくない",
  "休日も仕事が頭から離れない",
  "感情が動かない",
  "「もうどうでもいい」と思う",
];

const PROGRAMS = [
  { name: "支援者回復プログラム", desc: "TICとセルフケアを組み合わせた、支援者自身のための継続支援プログラム。" },
  { name: "バーンアウト予防研修", desc: "共感疲労・バーンアウトの理解とセルフチェック、早期対処を学ぶ研修。" },
  { name: "TIC研修", desc: "トラウマインフォームドケアの理論と実践を、事業所・職種に合わせて設計。" },
  { name: "スーパービジョン", desc: "支援者自身が安心して振り返り、次の一歩を整理するための個別・グループ支援。" },
];

export default function SupporterPage() {
  return (
    <>
      <PageHero
        tag={{ variant: "supporter", label: "支援者" }}
        title="支援者の回復"
        lead="傷ついた人を支える人もまた、傷つくことがある。トラウマインフォームドケア(TIC)と共感疲労・バーンアウトの理解を軸に、支援者自身の余白を整えます。"
        anchors={[
          { href: "#tic", label: "TICとは" },
          { href: "#burnout", label: "共感疲労・バーンアウト" },
          { href: "#selfcare", label: "セルフケア" },
          { href: "#programs", label: "提供プログラム" },
        ]}
        blobColor="var(--color-warm-soft)"
        blobSide="right"
        titleMaxWidth="560px"
      />

      {/* ============ こんなことありませんか ============ */}
      <Reveal className="mx-auto max-w-[900px] px-5 pb-16 pt-6 tab:px-10" threshold={0.12}>
        <div className="mb-4 text-center text-xs tracking-[0.24em] text-ink-faint">SELF-CHECK</div>
        <h2 className="mb-6 text-center font-serif text-xl font-semibold">私自身、こんなことありませんか?</h2>
        <div className="grid grid-cols-1 gap-3 tab:grid-cols-2">
          {SELF_CHECKS.map((c) => (
            <div
              key={c}
              className="rounded-xl border border-border bg-surface px-4.5 py-3.5 text-[13px] leading-[1.6] text-ink-soft"
            >
              ・{c}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-[560px] text-center text-[13px] leading-[1.9] text-ink-faint">
          その背景には、トラウマの影響があるかもしれません。トラウマを理解することは、対象者理解と同時に、自分の心を守るセルフケアにもつながります。
        </p>
      </Reveal>

      {/* ============ TICとは・4つのR ============ */}
      <Reveal id="tic" className="bg-bg-alt px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">01 — トラウマインフォームドケア(TIC)</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">
            「何が悪いのか」ではなく「何があったのか」。
          </h2>
          <p className="mb-8 max-w-[640px] text-sm leading-[1.9] text-ink-soft">
            トラウマを知り、その反応や影響を理解して、「みんながトラウマ体験をしているかもしれない」という前提で、配慮ある関わりをするケアの姿勢です。困った行動の背景には、その人なりの体験や苦しさが隠れていることがあります。
          </p>
          <div className="mb-3.5 text-[11px] tracking-[0.1em] text-ink-faint">
            4つのR — 理解する・気づく・対応する・再トラウマ化を防ぐ
          </div>
          <div className="mb-9 grid grid-cols-1 gap-px overflow-hidden rounded-card-sm border border-border bg-border tab:grid-cols-4">
            {FOUR_R.map((r) => (
              <div key={r.no} className="flex flex-col gap-1.5 bg-surface p-5">
                <div className="font-serif text-[13px] font-semibold text-accent">{r.no}</div>
                <div className="text-[13px] font-semibold">{r.title}</div>
              </div>
            ))}
          </div>
          <div className="mb-3.5 text-[11px] tracking-[0.1em] text-ink-faint">6つの主要原則</div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card-sm border border-border bg-border tab:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-2 bg-surface p-5.5 transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_14px_32px_oklch(27%_0.015_85/0.08)]"
              >
                <div className="text-[13.5px] font-semibold">{p.title}</div>
                <div className="text-xs leading-[1.7] text-ink-soft">{p.desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </Reveal>

      {/* ============ 共感疲労・バーンアウト ============ */}
      <Reveal id="burnout" className="px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">02 — 共感疲労とバーンアウト</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">
            情熱を失ったのではなく、使い果たしてしまった状態。
          </h2>
          <p className="mb-8 max-w-[640px] text-sm leading-[1.9] text-ink-soft">
            傷ついた人の話を共感的に聴くことで生じる二次的外傷性ストレス=共感疲労は、援助職なら誰にでも起こりうる自然な反応です。頑張る→疲れる→イライラする→何も感じなくなる、というバーンアウトの流れに、小さなサインの段階で気づくことが予防の第一歩です。
          </p>
          <div className="flex flex-wrap gap-2.5">
            {WARNING_SIGNS.map((w) => (
              <span key={w} className="rounded-pill bg-warm-soft px-4 py-2 text-[12.5px] text-warm-ink">
                🟡 {w}
              </span>
            ))}
          </div>
        </Container>
      </Reveal>

      {/* ============ セルフケア ============ */}
      <Reveal id="selfcare" className="bg-bg-alt px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">03 — 支援者にも余白を</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">メンタルケアは、フィジカルケアから。</h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card-sm border border-border bg-border tab:grid-cols-2">
            <div className="flex flex-col gap-2.5 bg-surface p-6.5">
              <div className="text-[13.5px] font-semibold">5-4-3-2-1法</div>
              <div className="text-[12.5px] leading-[1.8] text-ink-soft">
                五感を使って「今ここ」に戻る3分セルフケア。見えるもの5つ、聞こえるもの5つ、感じるもの5つ→4つ→3つ→2つ→1つ。
              </div>
            </div>
            <div className="flex flex-col gap-2.5 bg-surface p-6.5">
              <div className="text-[13.5px] font-semibold">4・4・8呼吸法</div>
              <div className="text-[12.5px] leading-[1.8] text-ink-soft">
                鼻から4秒吸う→4秒止める→8秒かけて吐く、を4セット。自律神経を整えるポータブルなセルフケア。
              </div>
            </div>
          </div>
        </Container>
      </Reveal>

      {/* ============ 提供プログラム ============ */}
      <Reveal id="programs" className="px-5 pb-24 pt-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-10 flex flex-col items-center gap-3.5 text-center">
            <div className="text-xs tracking-[0.24em] text-ink-faint">PROGRAMS</div>
            <h2 className="font-serif text-[clamp(22px,2.8vw,26px)] font-medium">提供プログラム</h2>
          </div>
          <div className="flex flex-col border-t border-border">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-baseline gap-2 border-b border-border py-4.5 tab:flex-row tab:gap-6"
              >
                <div className="w-43 shrink-0 text-sm font-semibold">{p.name}</div>
                <div className="flex-1 text-[13px] leading-[1.7] text-ink-soft">{p.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/#contact">支援者向け研修・相談をする</PrimaryButton>
          </div>
        </Container>
      </Reveal>

      <SimpleFooter>
        <SecondaryButton href="/#audiences">できること 一覧に戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
