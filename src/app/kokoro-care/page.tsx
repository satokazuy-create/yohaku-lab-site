import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import PdfViewer from "@/components/PdfViewerClient";
import SimpleFooter from "@/components/SimpleFooter";
import { PrimaryButton, TextLink, SecondaryButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "暮らしのこころケア — YOHAKU Lab",
  description:
    "ここりは・オンライン相談・家族介護者支援・わたぼん。日々の暮らしに寄り添う、個人向けの4つの入口。",
};

const KAIGO_MENU = [
  { name: "個別相談", desc: "介護の悩みを一対一で。愚痴でも、整理でも構いません。", price: "50分" },
  { name: "家族介護者教室", desc: "知識と、気持ちを分かち合う場を月1回程度で開催。", price: "参加費別" },
  { name: "街歩き・地域活動", desc: "外に出て、同じ立場の人と緩やかにつながる時間。", price: "参加費別" },
];

export default function KokoroCarePage() {
  return (
    <>
      <PageHero
        tag={{ variant: "individual", label: "個人" }}
        title="暮らしのこころケア"
        lead="日々の暮らしに寄り添う、4つの入口。ここりは・オンライン相談・家族介護者支援・わたぼん。"
        anchors={[
          { href: "#kokoriwa", label: "ここりは" },
          { href: "#online", label: "オンライン相談" },
          { href: "#kaigo", label: "家族介護者支援" },
          { href: "#watabon", label: "わたぼん" },
        ]}
        blobColor="var(--color-accent-soft)"
        blobSide="left"
      />

      {/* ============ ここりは ============ */}
      <Reveal id="kokoriwa" className="mx-auto max-w-[900px] px-5 py-16 tab:px-10" threshold={0.12}>
        <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">01 — ここりは</div>
        <h2 className="mb-5 font-serif text-[22px] font-semibold">ここりは</h2>
        <p className="mb-7 max-w-[600px] text-sm leading-[1.9] text-ink-soft">
          こころとからだの余白をつくる案内。詳しい内容は下記の資料からご覧いただけます。
        </p>
        <div className="overflow-hidden rounded-card border border-border bg-surface">
          <PdfViewer src="/assets/kokoro-care.pdf" />
        </div>
        <div className="mt-4 flex flex-col items-end gap-2">
          <p className="text-xs text-ink-faint">
            資料がうまく表示されない場合は、下のリンクから直接ご覧いただけます。
          </p>
          <TextLink href="/assets/kokoro-care.pdf" target="_blank">
            資料を新しいタブで開く →
          </TextLink>
        </div>
      </Reveal>

      {/* ============ オンライン相談 ============ */}
      <Reveal id="online" className="bg-bg-alt px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">02 — オンライン相談</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">画面越しでも、余白は届く。</h2>
          <p className="mb-8 max-w-[600px] text-sm leading-[1.9] text-ink-soft">
            通える範囲に相談先がない。外に出る気力がない。そんなときも、自宅から安心して話せる場所を。
          </p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card-sm border border-border bg-border tab:grid-cols-3">
            <div className="flex flex-col gap-2 bg-surface p-6">
              <div className="text-[11px] tracking-[0.06em] text-ink-faint">形式</div>
              <div className="text-[13.5px] leading-[1.7] text-ink-soft">ビデオ通話(Zoom等)／1回50分</div>
            </div>
            <div className="flex flex-col gap-2 bg-surface p-6">
              <div className="text-[11px] tracking-[0.06em] text-ink-faint">流れ</div>
              <div className="text-[13.5px] leading-[1.7] text-ink-soft">申込 → 日程調整 → 初回相談 → 継続 or 単発</div>
            </div>
            <div className="flex flex-col gap-2 bg-surface p-6">
              <div className="text-[11px] tracking-[0.06em] text-ink-faint">対象</div>
              <div className="text-[13.5px] leading-[1.7] text-ink-soft">個人(成人)／全国どこからでも</div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 rounded-card-sm border border-border bg-surface px-7 py-6">
            <div className="text-[11px] text-ink-faint">声</div>
            <p className="text-[13.5px] italic leading-[1.8] text-ink-soft">
              「対面だと身構えてしまうけれど、画面越しだから話せたことがありました。」
            </p>
          </div>
          <div className="mt-7 flex justify-center">
            <PrimaryButton href="/contact">オンライン相談を申し込む</PrimaryButton>
          </div>
        </Container>
      </Reveal>

      {/* ============ 家族介護者支援 ============ */}
      <Reveal id="kaigo" className="px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">03 — 家族介護者支援</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">支える人にも、余白を。</h2>
          <p className="mb-8 max-w-[600px] text-sm leading-[1.9] text-ink-soft">
            介護をしている人自身が、休み、話し、整える時間。ひとりで抱え込まないための場です。
          </p>
          <div className="mb-9 grid grid-cols-1 gap-4 tab:grid-cols-3">
            <PhotoPlaceholder label="介護者支援の様子(写真)" />
            <PhotoPlaceholder label="集まりの様子(写真)" />
            <PhotoPlaceholder label="個別相談の様子(写真)" />
          </div>
          <div className="flex flex-col border-t border-border">
            {KAIGO_MENU.map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-baseline gap-2 border-b border-border py-4.5 tab:flex-row tab:gap-6"
              >
                <div className="w-40 shrink-0 text-sm font-semibold">{m.name}</div>
                <div className="flex-1 text-[13px] leading-[1.7] text-ink-soft">{m.desc}</div>
                <div className="w-25 shrink-0 text-[12.5px] text-ink-faint tab:text-right">{m.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <PrimaryButton href="/contact">家族介護者支援について相談する</PrimaryButton>
          </div>
        </Container>
      </Reveal>

      {/* ============ わたぼん ============ */}
      <Reveal id="watabon" className="bg-bg-alt px-5 pb-24 pt-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0 flex flex-col items-center gap-5 text-center">
          <div className="text-xs tracking-[0.24em] text-ink-faint">04 — わたぼん</div>
          <h2 className="font-serif text-[22px] font-semibold">わたぼん</h2>
          <p className="max-w-[520px] text-sm leading-[1.9] text-ink-soft">
            わたぼんの詳しい世界観・使い方は、専用ページでご紹介しています。
          </p>
          <PrimaryButton href="/watabon" className="mt-2">
            わたぼんのページを見る →
          </PrimaryButton>
        </Container>
      </Reveal>

      <SimpleFooter>
        <SecondaryButton href="/#audiences">できること 一覧に戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
