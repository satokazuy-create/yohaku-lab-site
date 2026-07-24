import type { Metadata } from "next";
import Container from "@/components/Container";
import DriftBlob from "@/components/DriftBlob";
import Reveal from "@/components/Reveal";
import StaggerReveal from "@/components/StaggerReveal";
import SimpleFooter from "@/components/SimpleFooter";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "余白とは — YOHAKU Lab",
  description: "YOHAKU Labのブランド思想と、回復の8分野理論について。",
};

const REVEAL_WORDS = [
  "身体に。",
  "こころに。",
  "思考に。",
  "人との関係に。",
  "役割に。",
  "環境に。",
  "時間に。",
  "そして、未来に。",
];

const DOMAINS = [
  { label: "身体", rotate: 0, desc: "呼吸が浅い、眠れない、慢性的な緊張。", question: "気づけば肩に力が入っていませんか?" },
  { label: "こころ", rotate: 45, desc: "感情に蓋をして、笑うことが増えている。", question: "涙が出そうなのに、我慢していませんか?" },
  { label: "思考", rotate: 90, desc: "同じ考えが、ぐるぐる回り続けている。", question: "「どうせ」「もう無理」が口癖になっていませんか?" },
  { label: "人との関係", rotate: 135, desc: "本音を話せる相手が、思い当たらない。", question: "誰かに頼ることを、諦めていませんか?" },
  { label: "役割", rotate: 180, desc: "自分の役割に、押しつぶされそうになる。", question: "「〜であるべき」に縛られていませんか?" },
  { label: "環境", rotate: 225, desc: "落ち着ける場所が、家にも職場にもない。", question: "帰りたい場所を、思い出せますか?" },
  { label: "時間", rotate: 270, desc: "予定に追われ、自分のための時間がない。", question: "最後にぼんやりしたのは、いつですか?" },
  { label: "未来", rotate: 315, desc: "先のことを考えると、不安だけが先に立つ。", question: "希望を、描けなくなっていませんか?" },
];

export default function YohakuTohaPage() {
  return (
    <>
      {/* ============ PAGE TITLE ============ */}
      <section className="relative mx-auto flex max-w-[900px] flex-col items-center gap-5 overflow-hidden px-5 pb-6 pt-22 text-center tab:px-10">
        <DriftBlob color="var(--color-warm-soft)" size={300} top={-100} left={-60} />
        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          PHILOSOPHY
        </div>
        <h1 className="yh-rise relative font-serif text-[clamp(30px,4.4vw,46px)] font-medium leading-[1.6] tracking-[0.02em] [animation-delay:0.25s]">
          なぜ、余白か
        </h1>
      </section>

      {/* ============ BODY COPY ============ */}
      <Reveal
        className="mx-auto max-w-[680px] px-5 pb-20 pt-10 tab:px-10"
        threshold={0.15}
      >
        <div className="flex flex-col gap-9 text-base leading-[2.15] text-ink-soft tab:text-[16px]">
          <p>20年あまり、人の話を聴いてきました。</p>
          <p>
            心理支援の現場で。福祉の窓口で。地域の集まりの片隅で。キャリアの相談室で。
            <br />
            立場も、年齢も、抱えているものも、まったく違う人たちの話を、ただ、聴いてきました。
          </p>
          <p>そのなかで、ひとつだけ、確信になったことがあります。</p>
          <p className="text-center font-serif text-[19px] font-semibold text-ink">
            人には、自ら回復していく力がある。
          </p>
          <p>ただし——回復の仕方は、一人ひとり違う。</p>
          <p>
            ある人に必要だったのは、まず身体を休めることでした。
            <br />
            ある人に必要だったのは、考え方を少しだけやわらかくすることでした。
            <br />
            ある人には、安心して話せる誰かとのつながりが。
            <br />
            ある人には、制度やサービスという現実的な支えが。
            <br />
            ある人には、仕事との向き合い方を見直す時間が、必要でした。
          </p>
          <p>
            正解は、ひとつではありませんでした。
            <br />
            身体、こころ、思考、人との関係、環境、制度、仕事——。
            <br />
            その人の、そのときに、必要なものは違うのです。
          </p>
          <p>
            しかも、同じ人でも、人生のタイミングで変わっていきます。
            <br />
            若い頃と、子育ての只中と、介護をしている時期と、仕事を離れたあとと、病気のときと、老後と。
            <br />
            必要なものも、優先順位も、全部違う。
          </p>
          <p>だから私は、「この心理療法だけ」という支援をしません。</p>
          <p>
            必要ならば、心理療法も使います。制度の利用も一緒に考えます。
            <br />
            地域の資源につなぎ、人との出会いをつくり、ときには働き方を一緒に見直す。
            <br />
            その人の、そのときに合わせて、組み合わせをつくる。
            <br />
            既製服ではなく、オーダーメイドの支援です。
          </p>
          <p>そして、相談室のなかで終わらせません。</p>
          <p>
            気づきは、暮らしに戻ってはじめて、力になります。
            <br />
            制度につなぐ。地域につなぐ。人につなぐ。
            <br />
            そして最後は、その人自身に、つなぐ。
            <br />
            回復を、生活のなかに実装していく——ここまでが、私の仕事だと思っています。
          </p>
          <p>
            私は、答えを与える人ではありません。
            <br />
            答えは、その人の中にあります。
          </p>
          <p>
            私がするのは、それを見つけやすくすること。
            <br />
            絡まったものを、一緒に整理すること。
            <br />
            違う角度から、光を当てること。
            <br />
            眠っていた力が目を覚ますのを、隣で待つこと。
            <br />
            ときには、異なる専門性を掛け合わせて、新しい可能性を一緒に生み出すこと。
          </p>
          <p>
            個人も、企業も、地域も、行政も。
            <br />
            働く人も、高齢の方も、家族も、支援する側の人も。
            <br />
            フィールドは違っても、私のしていることは、いつも同じです。
          </p>
          <p className="font-medium text-ink">
            その人が、その組織が、その地域が、本来持っている力を取り戻すこと。
          </p>
          <p>
            そして、そのために何より必要だと気づいたのが——
            <span className="font-semibold text-ink">余白</span>でした。
          </p>
          <p>余白とは、ただ休むことではありません。</p>

          <StaggerReveal
            items={REVEAL_WORDS}
            className="flex flex-wrap justify-center gap-x-[18px] gap-y-2.5 py-3"
            itemClassName="font-serif text-[19px] text-ink"
          />

          <p>少しだけ、呼吸できる空間を取り戻すこと。</p>
          <p>
            余白があるから、人は回復できる。
            <br />
            余白があるから、考えられる。挑戦できる。人を思いやれる。人生を楽しめる。
          </p>
          <p>
            だから私は、心理療法を届けたいのではありません。
            <br />
            制度につなぎたいだけでも、地域活動をしたいだけでもありません。
          </p>
          <p className="font-medium text-ink">
            余白を届けたい。
            <br />
            人が、その人らしく生きるための、余白を。
          </p>
          <p>企業にも。地域にも。人生にも。</p>
        </div>
      </Reveal>

      {/* ============ 結語 ============ */}
      <Reveal
        className="flex items-center justify-center px-5 py-30 text-center tab:px-10 tab:py-35"
      >
        <h2 className="font-serif text-[clamp(30px,4.6vw,48px)] font-medium tracking-[0.03em]">
          余白のある世界を。
        </h2>
      </Reveal>

      {/* ============ 8分野カード ============ */}
      <section className="bg-bg-alt px-5 py-24 tab:px-10">
        <Container maxWidth="1100px">
          <div className="mb-12 flex flex-col items-center gap-3.5 text-center">
            <div className="text-xs tracking-[0.24em] text-ink-faint">
              EIGHT DOMAINS OF RECOVERY
            </div>
            <h2 className="font-serif text-[clamp(22px,2.8vw,28px)] font-medium">
              余白の8分野
            </h2>
            <p className="mt-2 max-w-[520px] text-[13.5px] text-ink-soft">
              中心にあるのは余白。そこから、8つの分野へと回復の方位が広がります。
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-border bg-border tab:grid-cols-4">
            {DOMAINS.map((d) => (
              <div
                key={d.label}
                className="flex flex-col gap-3.5 bg-surface p-7 transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-1.5 hover:shadow-[0_18px_40px_oklch(27%_0.015_85/0.09)]"
              >
                <div className="relative h-[34px] w-[34px] rounded-full border-[1.5px] border-accent">
                  <div
                    className="absolute left-1/2 top-1/2 h-[13px] w-[1.5px] origin-bottom bg-accent"
                    style={{ transform: `translate(-50%, -100%) rotate(${d.rotate}deg)` }}
                  />
                </div>
                <h3 className="font-serif text-[16.5px] font-semibold">{d.label}</h3>
                <p className="text-[12.5px] leading-[1.8] text-ink-soft">{d.desc}</p>
                <p className="border-t border-border pt-1.5 text-[11.5px] leading-[1.7] text-ink-faint">
                  {d.question}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ ページ末尾リンク ============ */}
      <SimpleFooter>
        <div className="flex flex-wrap justify-center gap-5">
          <SecondaryButton href="/">TOPページに戻る</SecondaryButton>
          <SecondaryButton href="/profile">プロフィールを読む</SecondaryButton>
          <PrimaryButton href="/#audiences">できることを見る</PrimaryButton>
        </div>
      </SimpleFooter>
    </>
  );
}
