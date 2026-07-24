import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "実績 — YOHAKU Lab",
  description: "講師・講演会・地域包括支援センター・EAPなどの実績。準備が整い次第、ご紹介します。",
};

export default function ResultsPage() {
  return (
    <ComingSoon
      eyebrow="RESULTS"
      title="実績"
      lead="講師・講演会・地域包括支援センター・EAPなどでの活動実績をまとめています。準備が整い次第、こちらでご紹介します。"
    />
  );
}
