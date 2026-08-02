import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SimpleFooter from "@/components/SimpleFooter";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "地域とつながる — YOHAKU Lab",
  description: "余白をひらく会・街歩き・家族介護者教室・地域イベント。人と人が緩やかにつながる、暮らしの延長線上の場です。",
};

const PILLARS = [
  {
    no: "1",
    title: "余白の街歩き",
    tagline: "歩くことで、気づくことがある",
    desc: "五感をひらきながら、まちをゆっくり歩く時間。自然や建物、人との出会いの中に、わたしに還る“間”が生まれます。",
    freq: "約90分・定員10名程度",
    price: "社会貢献型・ワンコイン",
    photo: "まちを歩く参加者(写真)",
  },
  {
    no: "2",
    title: "余白の対話",
    tagline: "話すことで、つながれる",
    desc: "安心できる場で、感じていることや考えていることを言葉にしてみる時間。誰かの話を聴くことも、自分を深く知るきっかけになります。",
    freq: "約90分・テーマは毎回変わる",
    price: "参加費 500円(税込)",
    photo: "対話の様子(写真)",
  },
  {
    no: "3",
    title: "余白の学びや",
    tagline: "知ることで、やさしくなれる",
    desc: "心・身・食・運動に関する知識や知恵を、わかりやすく、あたたかくお届けします。学びを通して自分と大切な誰かの余白をつくります。",
    freq: "約60〜90分・定員20名(先着順)",
    price: "参加費 500円(税込)",
    photo: "学びやの様子(写真)",
  },
  {
    no: "4",
    title: "余白の手紙屋",
    tagline: "想いを、手紙にのせて",
    desc: "大切な人へ。未来の自分へ。今の自分へ。想いを手紙にのせることで、心が整い、やさしいつながりが生まれます。",
    freq: "レターセット付き",
    price: "参加費 500円(税込)",
    photo: "手紙・便箋の様子(写真)",
  },
];

const VALUES = ["安心・安全な場づくり", "一人ひとりを尊重する姿勢", "地域に開かれた活動", "やさしく、続けられる関わり"];

const KYOSHITSU_PROGRAM = [
  { name: "基礎知識講座", desc: "認知症・介護保険制度など、知っておきたい基礎知識を分かりやすく解説。" },
  { name: "気持ちの分かち合い", desc: "同じ立場の人同士で、日頃の思いを安心して話せる時間。" },
  { name: "個別相談", desc: "講座の後に、個別で相談できる時間を設けています。" },
];

const TOOLS = [
  { no: "01", title: "ワークシート①", href: "/assets/tools/tool-1.pdf" },
  { no: "02", title: "ワークシート②", href: "/assets/tools/tool-2.pdf" },
  { no: "03", title: "ワークシート③", href: "/assets/tools/tool-3.pdf" },
  { no: "04", title: "ワークシート④", href: "/assets/tools/tool-4.pdf" },
  { no: "05", title: "今の気持ちを", href: "/assets/tools/tool-5.pdf" },
  { no: "06", title: "YOHAKU Lab 案内", href: "/assets/tools/tool-6.pdf" },
];

const EVENTS = [
  { date: "開催予定", title: "余白をひらく会(月例)", desc: "次回日程は決まり次第お知らせします。" },
  { date: "開催予定", title: "季節の街歩き", desc: "次回日程は決まり次第お知らせします。" },
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        tag={{ variant: "community", label: "地域" }}
        title="地域とつながる"
        lead="余白をひらく会・街歩き・家族介護者教室・地域イベント。人と人が緩やかにつながる、暮らしの延長線上の場です。"
        anchors={[
          { href: "#hiraku", label: "余白をひらく会" },
          { href: "#kyoshitsu", label: "家族介護者教室" },
          { href: "#event", label: "地域イベント" },
        ]}
        blobColor="var(--color-lav-soft)"
        blobSide="right"
        titleMaxWidth="400px"
      />

      {/* ============ 余白をひらく会 ============ */}
      <Reveal id="hiraku" className="mx-auto max-w-[1100px] px-5 py-16 tab:px-10" threshold={0.12}>
        <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">01 — 余白をひらく会</div>
        <h2 className="mb-2 font-serif text-[22px] font-semibold">人が自分に戻る“間”をつくる。</h2>
        <p className="mb-10 max-w-[640px] text-sm leading-[1.9] text-ink-soft">
          日常の中にある“余白”を大切にし、自分自身と、大切な誰か、まちや社会とのつながりを育む活動です。現在は4つの柱があり、今後も少しずつ増えていきます。
        </p>

        <div className="mb-9 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border tab:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.no}
              className="flex flex-col gap-3.5 bg-surface p-7 transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_oklch(27%_0.015_85/0.09)]"
            >
              <PhotoPlaceholder label={p.photo} height={150} radius={14} />
              <div className="text-[11px] text-ink-faint">
                {p.no} — {p.tagline}
              </div>
              <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
              <p className="text-[12.5px] leading-[1.8] text-ink-soft">{p.desc}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-2.5 text-[11.5px] text-ink-faint">
                <span>{p.freq}</span>
                <span>{p.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-9 flex flex-col gap-2 rounded-card-sm bg-bg-alt px-7 py-6">
          <div className="text-[11px] tracking-[0.06em] text-ink-faint">私たちが大切にしていること</div>
          <div className="flex flex-wrap gap-2.5">
            {VALUES.map((v) => (
              <span key={v} className="rounded-pill border border-border bg-surface px-4 py-2 text-[12.5px] text-ink-soft">
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-[13px] text-ink-faint">
            余白をひらく会の活動レポートや最新のお知らせは、専用サイトでご紹介しています。
          </p>
          <PrimaryButton
            href="https://yohaku-wo-hiraku-kai-fuchu.netlify.app/"
            target="_blank"
          >
            余白をひらく会の公式サイトを見る →
          </PrimaryButton>
        </div>
      </Reveal>

      {/* ============ 家族介護者教室 ============ */}
      <Reveal id="kyoshitsu" className="px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">03 — 家族介護者教室</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">知ることも、支えになる。</h2>
          <p className="mb-8 max-w-[600px] text-sm leading-[1.9] text-ink-soft">
            介護の知識と、気持ちを分かち合う場を、地域包括支援センター等と連携して開催しています。
          </p>
          <div className="flex flex-col border-t border-border">
            {KYOSHITSU_PROGRAM.map((p) => (
              <div
                key={p.name}
                className="flex flex-col items-baseline gap-2 border-b border-border py-4.5 tab:flex-row tab:gap-6"
              >
                <div className="w-40 shrink-0 text-sm font-semibold">{p.name}</div>
                <div className="flex-1 text-[13px] leading-[1.7] text-ink-soft">{p.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-4 text-[11px] tracking-[0.1em] text-ink-faint">教室で使用するツール</div>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card-sm border border-border bg-border tab:grid-cols-3">
              {TOOLS.map((t) => (
                <a
                  key={t.no}
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2.5 bg-surface p-5.5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.75 hover:shadow-[0_12px_28px_oklch(27%_0.015_85/0.07)]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-[11px] font-semibold text-accent">
                    {t.no}
                  </div>
                  <div className="text-[13px] font-semibold">{t.title}</div>
                  <div className="text-[11.5px] text-ink-faint">PDFを見る →</div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Reveal>

      {/* ============ 地域イベント ============ */}
      <Reveal id="event" className="bg-bg-alt px-5 pb-24 pt-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">04 — 地域イベント</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">開催予定</h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card-sm border border-border bg-border tab:grid-cols-2">
            {EVENTS.map((e) => (
              <div
                key={e.title}
                className="flex flex-col gap-2.5 bg-surface p-6.5 transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_14px_32px_oklch(27%_0.015_85/0.08)]"
              >
                <div className="text-[11px] text-ink-faint">{e.date}</div>
                <div className="font-serif text-base font-semibold">{e.title}</div>
                <div className="text-[12.5px] leading-[1.7] text-ink-soft">{e.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">地域活動について相談する</PrimaryButton>
          </div>
        </Container>
      </Reveal>

      <SimpleFooter>
        <SecondaryButton href="/#audiences">できること 一覧に戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
