import type { Metadata } from "next";
import Container from "@/components/Container";
import DriftBlob from "@/components/DriftBlob";
import Reveal from "@/components/Reveal";
import FadeParagraph from "@/components/FadeParagraph";
import SimpleFooter from "@/components/SimpleFooter";
import { PrimaryButton, SecondaryButton, TextLink } from "@/components/Buttons";

export const metadata: Metadata = {
  title: "プロフィール — YOHAKU Lab",
  description: "なぜ、YOHAKU Labを始めたのか。マニフェストと経歴・資格。",
};

const CREDENTIALS = [
  "公認心理師",
  "臨床心理士",
  "精神保健福祉士",
  "福祉・医療・産業分野での相談支援歴 20年以上",
  "企業・行政・地域包括支援センター等での研修・講演実績多数",
];

export default function ProfilePage() {
  return (
    <>
      {/* ============ PAGE TITLE ============ */}
      <section className="relative mx-auto flex max-w-[900px] flex-col items-center gap-5 overflow-hidden px-5 pb-6 pt-22 text-center tab:px-10">
        <DriftBlob color="var(--color-accent-soft)" size={300} top={-100} right={-60} />
        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          PROFILE
        </div>
        <h1 className="yh-rise relative font-serif text-[clamp(28px,4vw,40px)] font-medium leading-[1.6] tracking-[0.02em] [animation-delay:0.25s]">
          なぜ、YOHAKU Labを始めたのか
        </h1>
      </section>

      {/* ============ マニフェスト ============ */}
      <section className="mx-auto max-w-[680px] px-5 pb-8 pt-10 tab:px-10">
        <div className="flex flex-col gap-8 text-base leading-[2.15] text-ink-soft">
          <FadeParagraph>
            人生は、山登りのようなもの。
            <br />
            晴れの日もあれば、雨の日もある。
            <br />
            急な坂もあれば、霧で前が見えなくなる日もある。
            <br />
            ときには、立ち止まることしかできない日もある。
            <br />
            そして、ときには、身体が震え、涙があふれるほど美しい景色に出会うこともあります。
          </FadeParagraph>
          <FadeParagraph>
            そんな人生の道を歩いていると、私たちはつい、
            <br />
            「もっと頑張らなければ」
            <br />
            「早く登らなければ」
            <br />
            と、自分を追い立ててしまいます。
          </FadeParagraph>
          <FadeParagraph>
            でも、本当に必要なのは、もう一歩前へ進むことではなく、
            <br />
            まずは、一呼吸することなのかもしれません。
          </FadeParagraph>
          <FadeParagraph>
            雨の日には、自分を責めず、自分をいたわるための
            <TextLink href="#" className="border-ink-faint pb-0 text-ink hover:border-accent hover:text-accent">
              セルフコンパッション
            </TextLink>
            。
            <br />
            道に迷ったときには、今ここへ戻るための
            <TextLink href="#" className="border-ink-faint pb-0 text-ink hover:border-accent hover:text-accent">
              マインドフルネス
            </TextLink>
            。
            <br />
            急な斜面に圧倒されそうなときには、苦しさを抱えながらも、自分が大切にしたい方向へ歩み続けるための
            <TextLink href="#" className="border-ink-faint pb-0 text-ink hover:border-accent hover:text-accent">
              ACT(アクセプタンス&コミットメント・セラピー)
            </TextLink>
            。
            <br />
            長い登りで先が見えなくなったときには、小さな変化や前進に目を向ける
            <TextLink href="#" className="border-ink-faint pb-0 text-ink hover:border-accent hover:text-accent">
              ソリューション・フォーカスト・アプローチ
            </TextLink>
            。
          </FadeParagraph>
          <FadeParagraph>
            そして、ときには、ザックを下ろし、水を飲み、景色を眺める。
            <br />
            そんな「余白」をつくることも、大切な前進です。
          </FadeParagraph>
          <FadeParagraph>
            私は、その人の人生を代わりに登ることはできません。
            <br />
            けれど、その人の歩幅を信じ、
            <br />
            ときには隣で休み、
            <br />
            ときには道を一緒に考えながら歩く。
            <br />
            そんな伴走者でありたいと思っています。
          </FadeParagraph>
          <FadeParagraph>
            山頂にたどり着くことだけが、人生の目的ではありません。
            <br />
            その人らしい歩幅で歩き続けられること。
            <br />
            道中で出会う景色や、人との出会い、季節の移ろいを味わいながら、自分らしい人生を紡いでいくこと。
          </FadeParagraph>
          <FadeParagraph className="text-center font-serif text-[19px] font-semibold text-ink">
            私は、その歩みに寄り添い、
            <br />
            「こころに羽を。
            <br />
            からだに余白を。
            <br />
            人生に彩りを。」
            <br />
            その想いを届け続けたいと願っています。
          </FadeParagraph>
        </div>
      </section>

      {/* ============ プロフィール本文 ============ */}
      <section className="mx-auto mt-2 max-w-[680px] border-t border-border px-5 pb-20 pt-16 tab:px-10">
        <div className="flex flex-col gap-8 text-base leading-[2.15] text-ink-soft">
          <FadeParagraph>どのライフステージにも、その人だけの山があります。</FadeParagraph>
          <FadeParagraph>
            発達の悩みを抱える子ども時代。進学や就職という最初の分岐点。働くこと、辞めること。子どもを育てる日々。人生の折り返しで訪れる「このままでいいのだろうか」というミッドライフの問い。病気。大切な人やものの喪失。親の介護。認知症とともに生きる時間。そして、人生の終盤という最後の道のり。
          </FadeParagraph>
          <FadeParagraph>私はこれまで、そのさまざまな山道で立ち止まっている人たちと出会ってきました。</FadeParagraph>
          <FadeParagraph>そこで気づいたことがあります。</FadeParagraph>
          <FadeParagraph>
            立ち止まっている人は、力がない人ではない、ということです。むしろ、頑張りすぎている人ほど動けなくなる。荷物を下ろす場所がなく、休む時間がなく、「休んでいい」と言ってくれる人がいない。足りないのは力ではなく、余白でした。
          </FadeParagraph>
          <FadeParagraph>だから私は、伴走者でありたいと思うようになりました。</FadeParagraph>
          <FadeParagraph>
            地図を渡すことも、答えを渡すこともしません。その人の歩幅だけが、その人を運べると知っているからです。けれど、隣を歩くことはできる。一緒に荷物を眺めて、「これは今、本当に背負う必要があるだろうか」と問い直すことはできる。景色のいい場所で、少し立ち止まることを提案できる。
          </FadeParagraph>
          <FadeParagraph>
            そして、こころのケアだけでは足りないとき——それは実際、とても多いのですが——福祉、医療、介護、地域の資源、使える制度へつなぐことも、私の大切な役割です。悩みごとは、こころの中だけで完結しません。暮らしの現実と地続きだからこそ、支援も地続きであるべきだと考えています。
          </FadeParagraph>
          <FadeParagraph className="text-center font-medium text-ink">
            もっと頑張るためではなく。
            <br />
            立ち止まり、整え、自分らしく歩き出すために。
          </FadeParagraph>
          <FadeParagraph>その余白を一緒につくる伴走者で、私はありたいと思っています。</FadeParagraph>
        </div>
      </section>

      {/* ============ 資格・経歴 ============ */}
      <Reveal className="bg-bg-alt px-5 py-14 tab:px-10">
        <Container maxWidth="680px" className="!px-0 flex flex-col gap-4">
          <div className="text-[11px] tracking-[0.1em] text-ink-faint">資格・経歴</div>
          <ul className="flex list-none flex-col gap-2 p-0 text-[12.5px] leading-[1.7] text-ink-faint">
            {CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Container>
      </Reveal>

      {/* ============ 末尾リンク ============ */}
      <SimpleFooter>
        <div className="flex flex-wrap justify-center gap-5">
          <SecondaryButton href="/yohaku-toha">余白とは</SecondaryButton>
          <PrimaryButton href="/#contact">お問い合わせ</PrimaryButton>
        </div>
        <TextLink href="/" className="mt-3 border-none pb-0 text-[12.5px] text-ink-faint hover:text-ink">
          TOPページに戻る
        </TextLink>
      </SimpleFooter>
    </>
  );
}
