import type { Metadata } from "next";
import Container from "@/components/Container";
import DriftBlob from "@/components/DriftBlob";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SimpleFooter from "@/components/SimpleFooter";
import { PrimaryButton, TextLink } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "わたぼん — YOHAKU Lab",
  description: "わたしの物語が、あたたかな絵本になる。「わたぼん(わたしの絵本)」プロジェクト。",
};

const FIT_FOR = [
  "これまでの棚卸しをしたい",
  "言葉にすることで、気づきを得たい",
  "今の自分にOKを出したい",
  "自分にやさしくなりたい",
];

const STEPS = [
  { no: "1", title: "週1回の問いかけ", desc: "LINEで毎週、簡単な問いが届きます(全12回)。書ける範囲で少しずつ。" },
  { no: "2", title: "寄り添いのフィードバック", desc: "あなたのことばを大切に受けとめ、そっと照らすような返信をお届けします。" },
  { no: "3", title: "ナラティブセッション", desc: "Zoomでの対話を通して「あなたらしさの核」を一緒に探ります(希望者のみ)。" },
  { no: "4", title: "わたしだけの絵本が完成", desc: "あなたの物語をもとに、あたたかな絵本として形に。PDF・印刷でお届け予定です。" },
];

const FAQS = [
  { q: "書けるかどうか不安です", a: "書けるところだけで大丈夫です。空欄でも問題ありません。" },
  { q: "絵が描けません", a: "絵は必要ありません。こちらで作成いたします。" },
  { q: "プライバシーは守られますか?", a: "回答内容は守秘義務のもと丁寧に扱います。公表することはありません。" },
];

export default function WatabonPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative mx-auto flex max-w-[900px] flex-col items-center gap-5.5 overflow-hidden px-5 pb-14 pt-24 text-center tab:px-10">
        <DriftBlob color="var(--color-warm-soft)" size={300} top={-100} left={-60} />
        <span className="relative rounded-pill bg-accent-soft px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-accent">
          個人向けプロダクト
        </span>
        <h1 className="yh-rise relative font-serif text-[clamp(28px,4.4vw,42px)] font-medium leading-[1.75] tracking-[0.02em] [animation-delay:0.15s]">
          わたしの物語が、
          <br />
          あたたかな絵本になる。
        </h1>
        <div className="yh-rise relative font-serif text-[15px] tracking-[0.1em] text-ink-faint [animation-delay:0.3s]">
          ―― わたぼん(わたしの絵本)プロジェクト ――
        </div>
        <p className="yh-rise relative mt-3 max-w-[520px] text-[15px] leading-[2] text-ink-soft [animation-delay:0.45s]">
          「様々なことがあったこれまで」
          <br />
          「ここまで、よくやってきた私」
          <br />
          そう思えるような、あなただけの&ldquo;心の物語&rdquo;を綴ってみませんか。
        </p>
        <div className="yh-rise relative mt-6 w-full max-w-[680px] [animation-delay:0.6s]" style={{ aspectRatio: "16/8" }}>
          <PhotoPlaceholder label="ベンチに座る後ろ姿・桜(雰囲気写真)" className="h-full w-full" radius={24} />
        </div>
      </section>

      {/* ============ わたぼんとは ============ */}
      <Reveal className="bg-bg-alt px-5 py-20 tab:px-10">
        <Container maxWidth="720px" className="!px-0 flex flex-col items-center gap-6 text-center">
          <div className="text-xs tracking-[0.24em] text-ink-faint">WHAT IS わたぼん</div>
          <h2 className="font-serif text-[clamp(22px,2.8vw,28px)] font-medium">わたぼんとは</h2>
          <p className="text-[14.5px] leading-[2.1] text-ink-soft">
            「わたぼん(わたしの絵本)」は、わたしのこれまでの人生を、やさしくふりかえりながら、わたしの絵本としてカタチにしていくプロジェクトです。
          </p>
          <div className="mt-2 text-[11px] text-ink-faint">こんな方におすすめです</div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {FIT_FOR.map((f) => (
              <span key={f} className="rounded-pill border border-border bg-surface px-4.5 py-2.25 text-[13px] text-ink-soft">
                {f}
              </span>
            ))}
          </div>
        </Container>
      </Reveal>

      {/* ============ 完成までのステップ ============ */}
      <Reveal className="px-5 py-22 tab:px-10">
        <Container maxWidth="1000px" className="!px-0">
          <div className="mb-12 flex flex-col items-center gap-3.5 text-center">
            <div className="text-xs tracking-[0.24em] text-ink-faint">FOUR STEPS</div>
            <h2 className="font-serif text-[clamp(22px,2.8vw,28px)] font-medium">わたぼんの完成まで</h2>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border tab:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.no}
                className="flex flex-col gap-3 bg-surface p-7 transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_36px_oklch(27%_0.015_85/0.08)]"
              >
                <div className="font-serif text-[13px] font-semibold text-accent">STEP {s.no}</div>
                <h3 className="font-serif text-base font-semibold">{s.title}</h3>
                <p className="text-[12.5px] leading-[1.85] text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 items-center gap-8 tab:grid-cols-[1fr_1.1fr]">
            <PhotoPlaceholder label="親子・夕暮れの写真(プロセスの余白感)" height={280} radius={20} />
            <div className="flex flex-col gap-4 px-3 py-2">
              <p className="text-[13.5px] leading-[1.9] text-ink-soft">
                LINEで毎週、簡単な問いが届きます。書ける範囲で、少しずつふりかえってみましょう。あなたのことばを大切に受けとめ、少しだけ&ldquo;ことばを照らす&rdquo;ような返信をお届けします。
              </p>
              <p className="text-[13.5px] leading-[1.9] text-ink-soft">
                最後に、Zoomでの対話を通して「あなたらしさの核」をいっしょに探ります(希望者のみ)。あなたの物語をもとに、あたたかな絵本として形にします。ご希望の方には、PDFや印刷でお届け予定です。
              </p>
            </div>
          </div>
        </Container>
      </Reveal>

      {/* ============ よくあるご質問 ============ */}
      <Reveal className="bg-bg-alt px-5 py-22 tab:px-10">
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-10 flex flex-col items-center gap-3.5 text-center">
            <div className="text-xs tracking-[0.24em] text-ink-faint">FAQ</div>
            <h2 className="font-serif text-[clamp(22px,2.8vw,28px)] font-medium">よくあるご質問</h2>
          </div>
          <div className="grid grid-cols-1 items-start gap-8 tab:grid-cols-[1fr_1.2fr]">
            <PhotoPlaceholder label="海辺・帽子の写真(軽やかさ)" height={320} radius={20} />
            <div className="flex flex-col border-t border-border">
              {FAQS.map((f) => (
                <div key={f.q} className="flex flex-col gap-2 border-b border-border py-5">
                  <div className="text-[13.5px] font-semibold">Q. {f.q}</div>
                  <div className="text-[13px] leading-[1.8] text-ink-soft">→ {f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Reveal>

      {/* ============ 主催・CTA ============ */}
      <Reveal className="flex flex-col items-center gap-5 px-5 py-24 text-center tab:px-10">
        <h2 className="font-serif text-[clamp(24px,3.2vw,34px)] font-medium">わたしから、わたしへの贈り物です。</h2>
        <p className="text-xs text-ink-faint">
          主催:わたしの街の心理師さん　はじめ
          <br />
          公認心理師／臨床発達心理士／社会福祉士／精神保健福祉士
        </p>
        <PrimaryButton href="/#contact" className="mt-2">
          わたぼんについて相談する
        </PrimaryButton>
      </Reveal>

      <SimpleFooter>
        <TextLink href="/kokoro-care" className="border-none pb-0 text-[13.5px] text-ink-faint hover:text-ink">
          ← 暮らしのこころケア に戻る
        </TextLink>
      </SimpleFooter>
    </>
  );
}
