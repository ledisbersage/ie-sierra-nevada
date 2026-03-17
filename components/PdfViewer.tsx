"use client";

import { useEffect } from "react";

type PdfViewerProps = {
  src: string;
  title: string;
};

export default function PdfViewer({ src, title }: PdfViewerProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isMod = event.ctrlKey || event.metaKey;
      if (isMod && (key === "s" || key === "p" || key === "c" || key === "u")) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      className="mt-4 select-none"
      onContextMenu={(event) => event.preventDefault()}
      onCopy={(event) => event.preventDefault()}
    >
      <iframe
        title={title}
        src={`${src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        className="w-full h-[75vh] bg-white rounded-lg border border-stone-200"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
