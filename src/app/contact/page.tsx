import type { Metadata } from "next";
import DriftBlob from "@/components/DriftBlob";
import SimpleFooter from "@/components/SimpleFooter";
import { SecondaryButton } from "@/components/Buttons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ — YOHAKU Lab",
  description: "個人相談・法人相談・講演依頼・メディア/コラボのご相談を承っています。",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative mx-auto flex max-w-[900px] flex-col items-center gap-5 overflow-hidden px-5 pb-10 pt-22 text-center tab:px-10">
        <DriftBlob color="var(--color-accent-soft)" size={300} top={-100} left={-60} />
        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          CONTACT
        </div>
        <h1 className="yh-rise relative font-serif text-[clamp(28px,4vw,40px)] font-medium leading-[1.6] tracking-[0.02em] [animation-delay:0.25s]">
          お問い合わせ
        </h1>
        <p className="yh-rise relative max-w-[540px] text-[14.5px] leading-[1.9] text-ink-soft [animation-delay:0.4s]">
          個人相談・法人相談・講演依頼・メディア/コラボのご相談を承っています。下記フォームにご入力のうえ送信すると、お使いのメールソフトが起動します。
        </p>
      </section>

      <section className="mx-auto max-w-[560px] px-5 pb-24 pt-6 tab:px-10">
        <ContactForm />
      </section>

      <SimpleFooter>
        <SecondaryButton href="/">TOPページに戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
