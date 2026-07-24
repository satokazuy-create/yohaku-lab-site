import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "プロダクト — YOHAKU Lab",
  description: "余白コンパス・Recovery Game・カード・アプリ。準備が整い次第、ご紹介します。",
};

export default function ProductPage() {
  return (
    <ComingSoon
      eyebrow="PRODUCT"
      title="プロダクト"
      lead="余白コンパス・Recovery Game・カード・アプリなど。急がず、ひとつずつ形にしています。準備が整い次第、こちらでご紹介します。"
    />
  );
}
