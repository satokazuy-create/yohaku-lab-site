import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import SimpleFooter from "@/components/SimpleFooter";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "メンタルヘルス経営 — YOHAKU Lab",
  description: "EAP・ストレスチェック・研修・管理職研修・健康経営支援を、専門性をもって伴走します。",
};

const EAP_MENU = [
  {
    no: "01",
    title: "メンタルヘルス通信・研修",
    desc: "対人職のセルフケアや気持ちの整え方のヒントを年1回配信。ご希望に応じて年1回の研修(オンライン／対面)に変更可。",
  },
  {
    no: "02",
    title: "57項目ストレスチェック(厚労省版)1回/年",
    desc: "Googleフォームでの実施サポート、個人レポートPDFの自動作成、小規模事業所向け簡易集団分析、3段階ストレス評価+コメント、高ストレス者へのフォロー。",
  },
  {
    no: "03",
    title: "ウェルビーイング パーソナルセッション(1回/年・45分)",
    desc: "仕事・キャリア・生活・家庭・人間関係・病気・介護との両立など。「なんとなくしんどい」気持ちの整理と、こころのコンディショニング。",
  },
];

const EAP_SCENES = [
  "日々の気持ちを整理したいとき",
  "ふと立ち止まって方向性を考えたいとき",
  "話すことで気づきを得たいとき",
  "仕事・家庭・介護の両立で余白がないとき",
  "スタッフ同士では話しにくいとき",
  "ストレス状況を把握したいとき",
];

const CHECK_FLOW = [
  { no: "01", text: "実施計画のご相談・設計" },
  { no: "02", text: "ストレスチェックの実施" },
  { no: "03", text: "結果の分析・職場ごとのフィードバック" },
  { no: "04", text: "職場環境改善に向けた提案・伴走" },
];

const TRAINING_MENU = [
  { name: "セルフケア研修", desc: "ストレスとの付き合い方、自分を整える基本を学ぶ。", target: "全従業員" },
  { name: "ラインケア研修", desc: "部下の変化に気づき、適切に関わるための管理職向け研修。", target: "管理職" },
  { name: "ハラスメント研修", desc: "予防の視点と、起きたときの初期対応を実践的に学ぶ。", target: "全従業員" },
  { name: "オーダーメイド研修", desc: "組織の課題に合わせて内容・時間をカスタマイズ。", target: "要相談" },
];

const FLOW_STEPS = [
  { no: "1", title: "お問い合わせ", desc: "まずは現状の課題感をお聞かせください。" },
  { no: "2", title: "ヒアリング", desc: "組織の状況・目的を丁寧に伺います。" },
  { no: "3", title: "ご提案・お見積り", desc: "内容・期間・費用をご提案します。" },
  { no: "4", title: "導入・伴走", desc: "実施後も、必要に応じて継続的に伴走します。" },
];

export default function CorporatePage() {
  return (
    <>
      <PageHero
        tag={{ variant: "corporate", label: "法人" }}
        title="メンタルヘルス経営"
        lead="従業員のこころに余白があるほど、組織はしなやかに強くなる。EAP・ストレスチェック・研修・管理職研修・健康経営支援を、専門性をもって伴走します。"
        anchors={[
          { href: "#eap", label: "EAP" },
          { href: "#check", label: "ストレスチェック" },
          { href: "#training", label: "研修" },
          { href: "#flow", label: "導入の流れ" },
        ]}
        blobColor="var(--color-sky-soft)"
        blobSide="left"
        titleMaxWidth="560px"
      />

      {/* ============ 課題提起 ============ */}
      <Reveal className="mx-auto max-w-[900px] px-5 pb-16 pt-6 text-center tab:px-10" threshold={0.12}>
        <p className="mx-auto max-w-[600px] text-[15px] leading-[2] text-ink-soft">
          離職・休職の増加。管理職の疲弊。ハラスメントへの不安。
          <br />
          制度は整えても、現場の「余白のなさ」まで手が届かないことがあります。
          <br />
          YOHAKU Labは、制度と現場のあいだに橋をかけます。
        </p>
      </Reveal>

      {/* ============ EAP ============ */}
      <Reveal id="eap" className="bg-bg-alt px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">01 — EAP(伴走型)</div>
          <h2 className="mb-2 font-serif text-[22px] font-semibold">支える人を支える、伴走型EAP。</h2>
          <p className="mb-8 max-w-[600px] text-sm leading-[1.9] text-ink-soft">
            小規模介護・福祉・医療事業所のためのメンタルウェルビーイングサービス。対人職のこころを、そっと支える外部パートナーです。
            <br />
            対人職は、いつも&ldquo;聴く側&rdquo;になることが多く、自分のことをゆっくり語る場が少なくなりがち。外部の第三者が入ることで、安心して話せる&ldquo;もうひとつの語りの場&rdquo;が生まれます。
          </p>

          <div className="mb-9 flex flex-col border-t border-border">
            {EAP_MENU.map((m) => (
              <div key={m.no} className="flex items-start gap-5 border-b border-border py-5.5">
                <div className="w-8 shrink-0 font-serif text-xl font-semibold text-accent">{m.no}</div>
                <div className="flex flex-col gap-1.5">
                  <div className="text-[14.5px] font-semibold">{m.title}</div>
                  <div className="text-[12.5px] leading-[1.8] text-ink-soft">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-3 text-[11px] tracking-[0.1em] text-ink-faint">こんなときに、ご利用いただけます</div>
          <div className="mb-9 flex flex-wrap gap-2.5">
            {EAP_SCENES.map((s) => (
              <span key={s} className="rounded-pill border border-border bg-surface px-4 py-2 text-[12.5px] text-ink-soft">
                {s}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card-sm border border-border bg-border tab:grid-cols-3">
            <div className="flex flex-col gap-2 bg-surface p-6">
              <div className="text-[11px] text-ink-faint">担当</div>
              <div className="text-[13.5px] leading-[1.7] text-ink-soft">
                公認心理師／社会福祉士／精神保健福祉士／臨床発達心理士／キャリアコンサルタント
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-surface p-6">
              <div className="text-[11px] text-ink-faint">形式</div>
              <div className="text-[13.5px] leading-[1.7] text-ink-soft">オンラインと訪問を組み合わせた柔軟な支援スタイル</div>
            </div>
            <div className="flex flex-col gap-2 bg-surface p-6">
              <div className="text-[11px] text-ink-faint">費用</div>
              <div className="text-[13.5px] leading-[1.7] text-ink-soft">
                事業所規模・ご希望内容に応じて個別にご提案(ご相談・お見積りは無料)
              </div>
            </div>
          </div>
        </Container>
      </Reveal>

      {/* ============ ストレスチェック ============ */}
      <Reveal id="check" className="px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">02 — ストレスチェック</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">数値の先にある、一人ひとりの声を聴く。</h2>
          <p className="mb-8 max-w-[600px] text-sm leading-[1.9] text-ink-soft">
            法定のストレスチェックを実施するだけでなく、結果を読み解き、職場環境の改善につなげるところまでを伴走します。
          </p>
          <div className="grid grid-cols-1 items-center gap-8 tab:grid-cols-[1fr_1.1fr]">
            <PhotoPlaceholder label="オフィス・研修の様子(写真)" height={240} radius={20} />
            <div className="flex flex-col gap-3.5">
              {CHECK_FLOW.map((c) => (
                <div key={c.no} className="flex items-baseline gap-3.5">
                  <div className="shrink-0 text-xs font-semibold text-accent">{c.no}</div>
                  <div className="text-[13.5px] leading-[1.8] text-ink-soft">{c.text}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Reveal>

      {/* ============ 研修 ============ */}
      <Reveal id="training" className="bg-bg-alt px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">03 — 研修・管理職研修</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">知識を、現場で使える形に。</h2>
          <p className="mb-8 max-w-[600px] text-sm leading-[1.9] text-ink-soft">
            一般従業員向けのセルフケア研修から、管理職向けのラインケア研修まで。組織の状況に合わせてオーダーメイドで設計します。
          </p>
          <div className="flex flex-col border-t border-border">
            {TRAINING_MENU.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-baseline gap-2 border-b border-border py-4.5 tab:flex-row tab:gap-6"
              >
                <div className="w-40 shrink-0 text-sm font-semibold">{t.name}</div>
                <div className="flex-1 text-[13px] leading-[1.7] text-ink-soft">{t.desc}</div>
                <div className="w-27.5 shrink-0 text-[12.5px] text-ink-faint tab:text-right">{t.target}</div>
              </div>
            ))}
          </div>
        </Container>
      </Reveal>

      {/* ============ 健康経営支援 ============ */}
      <Reveal className="px-5 py-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-2 text-xs tracking-[0.24em] text-ink-faint">04 — 健康経営支援</div>
          <h2 className="mb-4 font-serif text-[22px] font-semibold">制度づくりから、認定取得まで。</h2>
          <p className="mb-6 max-w-[600px] text-sm leading-[1.9] text-ink-soft">
            健康経営優良法人認定に向けた体制づくりや、社内制度の設計・見直しを心理・福祉の専門知見からサポートします。
          </p>
          <div className="flex flex-col gap-2 rounded-card-sm bg-bg-alt px-7 py-6">
            <div className="text-[11px] text-ink-faint">声</div>
            <p className="text-[13.5px] italic leading-[1.8] text-ink-soft">
              「制度は作ったものの、現場で機能していなかった。外部の視点が入ることで、初めて実態が見えてきました。」
            </p>
          </div>
        </Container>
      </Reveal>

      {/* ============ 導入の流れ ============ */}
      <Reveal id="flow" className="bg-bg-alt px-5 pb-24 pt-16 tab:px-10" threshold={0.12}>
        <Container maxWidth="900px" className="!px-0">
          <div className="mb-10 flex flex-col items-center gap-3.5 text-center">
            <div className="text-xs tracking-[0.24em] text-ink-faint">FLOW</div>
            <h2 className="font-serif text-[clamp(22px,2.8vw,26px)] font-medium">ご導入の流れ</h2>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card-sm border border-border bg-border tab:grid-cols-4">
            {FLOW_STEPS.map((f) => (
              <div key={f.no} className="flex flex-col gap-2 bg-surface p-5">
                <div className="font-serif text-[13px] font-semibold text-accent">STEP {f.no}</div>
                <div className="text-[13.5px] font-semibold">{f.title}</div>
                <div className="text-xs leading-[1.7] text-ink-soft">{f.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-9 flex justify-center">
            <PrimaryButton href="/#contact">法人向けの相談をする</PrimaryButton>
          </div>
        </Container>
      </Reveal>

      <SimpleFooter>
        <SecondaryButton href="/#audiences">できること 一覧に戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
