import Image from "next/image";
import Container from "@/components/Container";
import DriftBlob from "@/components/DriftBlob";
import Reveal from "@/components/Reveal";
import Tag, { TagVariant } from "@/components/Tag";
import TopFooter from "@/components/TopFooter";
import { PrimaryButton, SecondaryButton, TextLink } from "@/components/Buttons";

const AUDIENCES: {
  tag: string;
  variant: TagVariant;
  title: string;
  desc: string;
  href: string;
}[] = [
  {
    tag: "個人",
    variant: "individual",
    title: "暮らしのこころケア",
    desc: "ここりは／オンライン相談／家族介護者支援／自分史／わたぼん",
    href: "/kokoro-care",
  },
  {
    tag: "支援者",
    variant: "supporter",
    title: "支援者の回復",
    desc: "支援者回復プログラム／バーンアウト予防／TIC／スーパービジョン",
    href: "/supporter",
  },
  {
    tag: "法人",
    variant: "corporate",
    title: "メンタルヘルス経営",
    desc: "EAP／ストレスチェック／研修／管理職研修／健康経営支援",
    href: "/corporate",
  },
  {
    tag: "地域",
    variant: "community",
    title: "地域とつながる",
    desc: "余白をひらく会／街歩き／家族介護者教室／地域イベント",
    href: "/community",
  },
];

const CONTENT_TAGS: { label: string; href?: string; external?: boolean }[] = [
  { label: "StandFM" },
  { label: "note", href: "https://note.com/magic_alpaca7688", external: true },
  { label: "コラム", href: "/column" },
  { label: "朗読・音声" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-9 overflow-hidden px-5 pb-22 pt-24 text-center tab:px-10">
        <DriftBlob
          color="var(--color-warm-soft)"
          size={320}
          top={-100}
          left={-70}
          variant={1}
        />
        <DriftBlob
          color="var(--color-accent-soft)"
          size={380}
          bottom={-120}
          right={-90}
          variant={2}
        />

        <Image
          src="/images/accent-feather-soft.png"
          alt=""
          aria-hidden
          width={135}
          height={200}
          className="yh-drift-1 pointer-events-none absolute left-2 top-4 h-[42px] w-[28px] object-contain opacity-90 mob:left-[5%] mob:h-[54px] mob:w-[36px] tab:left-[6%] tab:top-6 tab:h-[70px] tab:w-[47px]"
        />
        <Image
          src="/images/accent-birds-soft.png"
          alt=""
          aria-hidden
          width={400}
          height={172}
          className="yh-drift-2 pointer-events-none absolute right-2 top-6 h-[26px] w-[60px] object-contain opacity-90 mob:right-[5%] mob:h-[34px] mob:w-[78px] tab:right-[8%] tab:top-10 tab:h-[46px] tab:w-[108px]"
        />
        <Image
          src="/images/accent-flowers-soft.png"
          alt=""
          aria-hidden
          width={250}
          height={195}
          className="pointer-events-none absolute bottom-4 left-1 h-[56px] w-[72px] object-contain opacity-95 mob:left-[3%] mob:h-[70px] mob:w-[90px] tab:bottom-10 tab:left-[4%] tab:h-[86px] tab:w-[110px]"
        />

        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          RECOVERY DESIGN LAB
        </div>
        <h1 className="yh-rise relative font-serif text-[clamp(36px,5.2vw,64px)] font-medium leading-[1.55] tracking-[0.02em] [animation-delay:0.25s]">
          こころに羽を。
          <br />
          からだに余白を。
          <br />
          人生に彩りを。
        </h1>
        <p className="yh-rise relative max-w-[560px] text-base leading-[1.9] text-ink-soft [animation-delay:0.4s]">
          メンタルヘルスを、ポップに軽やかに。
          <br />
          心理学・コミュニティデザイン・身体感覚・AIを組み合わせ、
          <br />
          「回復」をデザインする研究所です。
        </p>
        <div className="yh-rise relative mt-2 flex flex-wrap justify-center gap-4 [animation-delay:0.55s]">
          <PrimaryButton href="/yohaku-toha">余白について</PrimaryButton>
          <SecondaryButton href="#audiences">できることを見る</SecondaryButton>
        </div>
        <div className="yh-rise relative mt-8 [animation-delay:0.7s]">
          <Image
            src="/images/hero-mountain-trail.png"
            alt="山の稜線に続く木道を歩く人の水彩イラスト"
            width={600}
            height={600}
            priority
            className="h-[280px] w-[280px] rounded-full object-cover shadow-[0_24px_60px_oklch(27%_0.015_85/0.12)] tab:h-[380px] tab:w-[380px]"
          />
        </div>
        <svg
          viewBox="0 0 800 50"
          className="relative mt-2 h-[34px] w-full max-w-[760px] opacity-60"
        >
          <path
            d="M0,25 C100,0 200,50 300,25 C400,0 500,50 600,25 C700,0 750,12 800,25"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.4"
            strokeDasharray="5 9"
            className="yh-flow-line"
          />
        </svg>
      </section>

      {/* ============ 私の北極星 ============ */}
      <Reveal className="px-5 py-20 tab:px-10" threshold={0.15}>
        <Container maxWidth="900px" className="!px-0">
          <div className="grid grid-cols-1 items-center gap-10 tab:grid-cols-[0.85fr_1.15fr]">
            <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-card border border-border shadow-[0_18px_40px_oklch(27%_0.015_85/0.12)]">
              <Image
                src="/images/north-star-poster.png"
                alt="「私の北極星」ポスター:人は、自分を回復させる力を、もともと持っている。"
                width={1024}
                height={1536}
                className="block h-auto w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-5">
              <div className="text-xs tracking-[0.24em] text-ink-faint">MY NORTH STAR</div>
              <h2 className="font-serif text-[22px] font-semibold">私の北極星</h2>
              <p className="font-serif text-[17px] font-medium leading-[1.8] text-ink">
                人は、自分を回復させる力を、
                <br />
                もともと持っている。
              </p>
              <div className="flex flex-col gap-4 text-sm leading-[1.95] text-ink-soft">
                <p className="m-0">
                  私は、人には誰にでも、自分を回復させる力があると信じています。
                </p>
                <p className="m-0">
                  誰かを変えたいわけではありません。答えを与えたいわけでもありません。
                  <br />
                  私は、その人が自分自身の力と再会する時間をつくりたい。
                </p>
                <p className="m-0">
                  それが、私の仕事であり、私がつくる講座や相談、AIプロダクト、そしてYOHAKU
                  Labに共通して流れる願いです。
                </p>
              </div>
              <p className="font-serif text-sm text-ink-faint">
                対話とテクノロジーで、あなたがあなたに還る時間を。
              </p>
              <TextLink href="/profile">プロフィールを読む →</TextLink>
            </div>
          </div>
        </Container>
      </Reveal>

      {/* ============ PHILOSOPHY ============ */}
      <Reveal className="bg-bg-alt px-5 py-25 tab:px-10">
        <Container maxWidth="920px" className="!px-0">
          <div className="flex flex-col items-center gap-7 text-center">
            <div className="text-xs tracking-[0.24em] text-ink-faint">
              PHILOSOPHY
            </div>
            <h2 className="font-serif text-[clamp(24px,3vw,34px)] font-medium leading-[1.7]">
              余白を、社会のインフラに。
            </h2>
            <p className="max-w-[640px] text-[15.5px] leading-[2] text-ink-soft">
              「メンタルヘルス」や「回復」という言葉は、ときに重く、身構えられます。
              YOHAKU Labは、その本質を専門性でしっかり支えながらも、
              誰もが深呼吸できるくらい軽やかに届けたいと考えています。
              急かさない、詰め込まない、比べない——余白のある関わり方を、
              個人にも、支援者にも、組織にも、地域にも。
            </p>
            <TextLink href="/yohaku-toha">
              余白とは何か、8つの領域を読む →
            </TextLink>
          </div>
        </Container>
      </Reveal>

      {/* ============ AUDIENCES ============ */}
      <Reveal id="audiences" className="px-5 py-25 tab:px-10">
        <Container>
          <div className="mb-14 flex flex-col items-center gap-3.5 text-center">
            <div className="text-xs tracking-[0.24em] text-ink-faint">
              WHAT WE OFFER
            </div>
            <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-medium">
              できること
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border tab:grid-cols-4">
            {AUDIENCES.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="relative z-10 flex flex-col gap-4 bg-surface p-7 transition-[transform,box-shadow] duration-400 ease-out hover:z-20 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_oklch(27%_0.015_85/0.09)]"
              >
                <Tag variant={a.variant}>{a.tag}</Tag>
                <h3 className="font-serif text-[19px] font-semibold text-ink">
                  {a.title}
                </h3>
                <p className="text-[13.5px] leading-[1.9] text-ink-soft">
                  {a.desc}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </Reveal>

      {/* ============ CONTENT TEASER ============ */}
      <Reveal id="content" className="bg-bg-alt px-5 py-22 tab:px-10">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex max-w-[480px] flex-col gap-2.5">
              <div className="text-xs tracking-[0.24em] text-ink-faint">
                CONTENT — 毎週更新
              </div>
              <h2 className="font-serif text-[clamp(22px,2.8vw,28px)] font-medium">
                声と言葉で、余白を届ける。
              </h2>
              <p className="text-sm leading-[1.9] text-ink-soft">
                StandFM・note・コラム・朗読・音声・動画。日々の暮らしに寄り添う更新を続けています。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {CONTENT_TAGS.map((t) =>
                t.href ? (
                  <a
                    key={t.label}
                    href={t.href}
                    target={t.external ? "_blank" : undefined}
                    rel={t.external ? "noopener noreferrer" : undefined}
                    className="rounded-pill border border-border bg-surface px-[18px] py-[9px] text-[13px] text-ink-soft transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {t.label}
                  </a>
                ) : (
                  <span
                    key={t.label}
                    className="rounded-pill border border-border bg-surface px-[18px] py-[9px] text-[13px] text-ink-soft transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {t.label}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 rounded-card border border-border bg-surface px-8 py-7 transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_oklch(27%_0.015_85/0.08)]">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-warm-soft font-serif text-[22px] text-warm">
              絵
            </div>
            <div className="flex min-w-[220px] flex-1 flex-col gap-1.5">
              <span className="text-[11px] tracking-[0.06em] text-ink-faint">
                FEATURED — エッセイ漫画
              </span>
              <div className="font-serif text-lg font-semibold">
                わたしの街の心理師さん 〜はじめ〜
              </div>
              <p className="text-[13px] leading-[1.8] text-ink-soft">
                こころのケアを、日常の延長線上にあるものとして描く連載。専門性を軽やかに届ける、YOHAKU
                Labらしいコンテンツの入口です。
              </p>
            </div>
            <TextLink href="#" className="whitespace-nowrap">
              読む →
            </TextLink>
          </div>
        </Container>
      </Reveal>

      <TopFooter />
    </>
  );
}
