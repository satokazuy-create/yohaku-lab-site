import DriftBlob from "./DriftBlob";
import SimpleFooter from "./SimpleFooter";
import { SecondaryButton } from "./Buttons";

export default function ComingSoon({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <>
      <section className="relative mx-auto flex min-h-[50vh] max-w-[720px] flex-col items-center justify-center gap-5 overflow-hidden px-5 py-24 text-center tab:px-10">
        <DriftBlob color="var(--color-accent-soft)" size={300} top={-100} left={-60} />
        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          {eyebrow}
        </div>
        <h1 className="yh-rise relative font-serif text-[clamp(26px,3.6vw,36px)] font-medium leading-[1.6] tracking-[0.02em] [animation-delay:0.25s]">
          {title}
        </h1>
        <p className="yh-rise relative max-w-[440px] text-sm leading-[1.9] text-ink-soft [animation-delay:0.4s]">
          {lead}
        </p>
        <span className="yh-rise relative mt-2 rounded-pill border border-border px-4 py-2 text-[12.5px] text-ink-faint [animation-delay:0.55s]">
          只今準備中です
        </span>
      </section>

      <SimpleFooter>
        <SecondaryButton href="/">TOPページに戻る</SecondaryButton>
      </SimpleFooter>
    </>
  );
}
