import Container from "./Container";
import Reveal from "./Reveal";

const MENU_LINKS = [
  { label: "余白とは", href: "/yohaku-toha" },
  { label: "できること", href: "/#audiences" },
  { label: "プロダクト", href: "/product" },
  { label: "実績", href: "/results" },
];
const CONTACT_LINKS = ["個人相談", "法人相談", "講演依頼", "メディア・コラボ"].map((label) => ({
  label,
  href: "/contact",
}));
const SNS_LINKS = ["Instagram", "StandFM", "note"].map((label) => ({ label, href: "#" }));

export default function TopFooter() {
  return (
    <footer>
      <Reveal className="px-5 pb-12 pt-20 tab:px-10">
        <Container>
          <div className="grid grid-cols-1 gap-10 border-b border-border pb-14 mob:grid-cols-2 tab:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-3.5">
              <div className="font-serif text-lg tracking-[0.05em]">
                YOHAKU Lab
              </div>
              <p className="max-w-[260px] text-[13px] leading-[1.9] text-ink-faint">
                回復をデザインする研究所。心理学・コミュニティデザイン・身体感覚・AIを組み合わせ、余白を社会のインフラにしていきます。
              </p>
            </div>
            <FooterColumn heading="MENU" links={MENU_LINKS} />
            <FooterColumn heading="CONTACT" links={CONTACT_LINKS} />
            <FooterColumn heading="SNS" links={SNS_LINKS} />
          </div>
          <div className="pt-7 text-xs text-ink-faint">
            © YOHAKU Lab — Recovery Design Lab
          </div>
        </Container>
      </Reveal>
    </footer>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3 text-[13px] text-ink-soft">
      <div className="mb-1 text-[11px] tracking-[0.1em] text-ink-faint">
        {heading}
      </div>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="transition-colors duration-300 hover:text-ink"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
