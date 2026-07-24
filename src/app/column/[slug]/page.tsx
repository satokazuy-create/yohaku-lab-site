import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FadeParagraph from "@/components/FadeParagraph";
import SimpleFooter from "@/components/SimpleFooter";
import { SecondaryButton } from "@/components/Buttons";
import { ARTICLES } from "@/lib/articles";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} — YOHAKU Lab コラム`,
    description: article.excerpt,
  };
}

export default async function ColumnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  if (slug === "wakuwaku-ikari") {
    return (
      <>
        <section className="mx-auto flex max-w-[680px] flex-col items-center gap-4 px-5 pb-6 pt-22 text-center tab:px-10">
          <span className="yh-rise rounded-pill bg-accent-soft px-3.5 py-1.5 text-[11px] tracking-[0.06em] text-accent [animation-delay:0.1s]">
            {article.series}
          </span>
          <h1 className="yh-rise font-serif text-[clamp(24px,3.4vw,32px)] font-medium leading-[1.6] tracking-[0.02em] [animation-delay:0.25s]">
            {article.title}
          </h1>
        </section>

        <section className="mx-auto max-w-[640px] px-5 pb-18 pt-6 tab:px-10">
          <div className="flex flex-col gap-7 text-base leading-[2.1] text-ink-soft">
            <FadeParagraph>
              こんにちは。
              <br />
              今日は、マンガやアニメの印象的な場面から、私たちの心の動きや、人間関係について考えていきます。
            </FadeParagraph>
            <FadeParagraph>第1回は、『ドラゴンボール』の孫悟空とベジータです。</FadeParagraph>
            <FadeParagraph>
              ベジータは、悟空に対して強いライバル心を持っています。
              <br />
              負けたくない。自分の方が強いと証明したい。サイヤ人の王子としての誇りを守りたい。
              <br />
              その思いは、ときに怒りや敵意となって悟空へ向けられます。
            </FadeParagraph>
            <FadeParagraph>
              けれど、悟空はその怒りを、そのまま怒りとして受け取りません。
              <br />
              「こいつは自分を攻撃している」「自分を否定している」「言い返さなければならない」とは、あまり考えない。
              <br />
              むしろ、「面白いやつだな」「もっと強くなるかもしれない」「なんだかワクワクする」という方向から、ベジータを見ています。
            </FadeParagraph>
            <FadeParagraph>同じ相手を見ていても、意味づけがまったく違うのです。</FadeParagraph>
            <FadeParagraph>
              心理学では、出来事の見方や意味づけを変えることを、<b className="text-ink">リフレーミング</b>と呼びます。
            </FadeParagraph>
            <FadeParagraph>
              たとえば、相手が不機嫌な顔をしていたとき。
              <br />
              「私が嫌われている」と考えると、不安になったり、腹が立ったりします。
              <br />
              けれど、「今日は何か大変なことがあったのかもしれない」「この人は、いま余裕がないのかもしれない」と考えると、少しだけ受け止め方が変わります。
            </FadeParagraph>
            <FadeParagraph>
              もちろん、本当の理由は分かりません。
              <br />
              大切なのは、最初に浮かんだ解釈だけを、唯一の事実だと思わないことです。
            </FadeParagraph>
            <FadeParagraph>
              相手が怒っている。それは事実かもしれません。
              <br />
              けれど、「だから私は攻撃されている」「だから私は価値がない」「だから私も怒り返さなければならない」というところまでは、私たちの解釈です。
            </FadeParagraph>
            <FadeParagraph>
              悟空は、ベジータの怒りがつくった世界に、そのまま入っていきません。
              <br />
              敵か味方か。勝つか負けるか。上か下か。
              <br />
              そうした枠組みから少し離れて、「この人、面白いな」「この先、どうなるんだろう」と、好奇心を向けます。
            </FadeParagraph>
            <FadeParagraph>
              怒りに対して、怒りを返さない。
              <br />
              相手の感情に、自分の心のハンドルを渡さない。
              <br />
              これは、相手を無視することとも、我慢することとも違います。自分の反応を、自分で選ぶということです。
            </FadeParagraph>
            <FadeParagraph>
              ただし、暴力やハラスメントなど、危険な場面まで面白がる必要はありません。
              <br />
              危険なときには、距離を取る。助けを求める。自分の安全を守る。それが一番大切です。
            </FadeParagraph>
            <FadeParagraph
              as="div"
              className="my-2 flex flex-col gap-2.5 rounded-card-sm bg-bg-alt px-7 py-6"
            >
              <div className="text-[11px] tracking-[0.1em] text-ink-faint">今日の小さな問い</div>
              <p className="text-sm leading-[1.9] text-ink">
                最近、誰かの言葉や態度に、強く反応したことはあったでしょうか。
                <br />
                その出来事を、今とは少し違う角度から見るとしたら、どんな見方ができるでしょう。
              </p>
              <p className="text-[13.5px] leading-[1.9] text-ink-soft">
                敵ではなく、困っている人かもしれない。
                <br />
                否定ではなく、その人自身の不安かもしれない。
                <br />
                脅威ではなく、自分の大切なものに気づくきっかけかもしれない。
              </p>
            </FadeParagraph>
            <FadeParagraph>
              見方を変えることは、相手のためではありません。
              <br />
              自分の心に、少し余白を取り戻すためです。
            </FadeParagraph>
            <FadeParagraph>それでは、また次の物語でお会いしましょう。</FadeParagraph>
            <FadeParagraph className="text-center font-serif text-[17px] font-semibold text-ink">
              余白は自分に還る力になる
            </FadeParagraph>
          </div>
        </section>

        <SimpleFooter>
          <SecondaryButton href="/column">コラム一覧に戻る</SecondaryButton>
        </SimpleFooter>
      </>
    );
  }

  notFound();
}
