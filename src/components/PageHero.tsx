import DriftBlob from "./DriftBlob";
import Tag, { TagVariant } from "./Tag";
import AnchorNav from "./AnchorNav";

export default function PageHero({
  eyebrow,
  tag,
  title,
  lead,
  anchors,
  blobColor = "var(--color-accent-soft)",
  blobSide = "left",
  maxWidth = "900px",
  titleMaxWidth,
}: {
  eyebrow?: string;
  tag?: { variant: TagVariant; label: string };
  title: string;
  lead?: string;
  anchors?: { href: string; label: string }[];
  blobColor?: string;
  blobSide?: "left" | "right";
  maxWidth?: string;
  titleMaxWidth?: string;
}) {
  return (
    <section
      className="relative mx-auto flex flex-col items-center gap-5 overflow-hidden px-5 pb-10 pt-22 text-center tab:px-10"
      style={{ maxWidth }}
    >
      <DriftBlob
        color={blobColor}
        size={300}
        top={-100}
        {...(blobSide === "left" ? { left: -60 } : { right: -60 })}
      />
      {eyebrow && (
        <div className="yh-rise relative text-xs font-medium tracking-[0.28em] text-ink-faint [animation-delay:0.1s]">
          {eyebrow}
        </div>
      )}
      {tag && (
        <span className="relative">
          <Tag variant={tag.variant}>{tag.label}</Tag>
        </span>
      )}
      <h1
        className="yh-rise relative font-serif text-[clamp(28px,4vw,40px)] font-medium leading-[1.6] tracking-[0.02em] text-balance [animation-delay:0.15s]"
        style={{ maxWidth: titleMaxWidth }}
      >
        {title}
      </h1>
      {lead && (
        <p className="yh-rise relative max-w-[540px] text-[14.5px] leading-[1.9] text-ink-soft [animation-delay:0.3s]">
          {lead}
        </p>
      )}
      {anchors && <AnchorNav items={anchors} />}
    </section>
  );
}
