"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./PdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[640px] items-center justify-center bg-surface text-sm text-ink-faint">
      資料を読み込んでいます…
    </div>
  ),
});

export default function PdfViewerClient({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return <PdfViewer src={src} className={className} />;
}
