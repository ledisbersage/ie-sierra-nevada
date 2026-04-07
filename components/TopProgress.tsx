"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function TopProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number | null>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setVisible(true);
    setProgress(10);

    timerRef.current = window.setInterval(() => {
      setProgress((current) => {
        const next = current + Math.random() * 15;
        return clamp(next, 10, 90);
      });
    }, 200);

    const doneTimeout = window.setTimeout(() => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setProgress(100);
      const hide = window.setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 200);
      return () => window.clearTimeout(hide);
    }, 800);

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
      window.clearTimeout(doneTimeout);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full z-[999]">
      <div
        className="h-1 bg-institucional-azul transition-[width,opacity] duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className="h-1 bg-institucional-azul/30 animate-pulse" />
    </div>
  );
}
