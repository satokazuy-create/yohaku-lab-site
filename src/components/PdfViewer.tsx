"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function PdfViewer({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [width, setWidth] = useState<number>(720);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-surface px-6 py-16 text-center text-sm text-ink-faint ${className}`}
      >
        資料の表示に失敗しました。下のリンクからご覧ください。
      </div>
    );
  }

  return (
    <div
      ref={(el) => {
        if (el) setWidth(el.clientWidth);
      }}
      className={`flex max-h-[640px] flex-col items-center gap-4 overflow-y-auto bg-surface p-4 ${className}`}
    >
      <Document
        file={src}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={() => setFailed(true)}
        loading={
          <div className="flex h-[560px] items-center justify-center text-sm text-ink-faint">
            資料を読み込んでいます…
          </div>
        }
      >
        {Array.from({ length: numPages ?? 0 }, (_, i) => (
          <Page
            key={i}
            pageNumber={i + 1}
            width={Math.min(width - 32, 720)}
            className="mb-4 overflow-hidden rounded-[10px] shadow-[0_4px_16px_oklch(27%_0.015_85/0.1)] last:mb-0"
          />
        ))}
      </Document>
    </div>
  );
}
