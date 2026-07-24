import { PillLink } from "./Buttons";

export default function AnchorNav({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <div className="yh-rise mt-2 flex flex-wrap justify-center gap-2.5 [animation-delay:0.45s]">
      {items.map((item) => (
        <PillLink key={item.href} href={item.href}>
          {item.label}
        </PillLink>
      ))}
    </div>
  );
}
