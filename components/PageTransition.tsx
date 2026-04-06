"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [direction, setDirection] = useState<"in" | "out">("in");

  useEffect(() => {
    // Trigger a short fade/slide transition on route change
    setDirection("out");
    const outTimeout = window.setTimeout(() => {
      setDirection("in");
      setVisible(true);
    }, 150);

    return () => window.clearTimeout(outTimeout);
  }, [pathname]);

  return (
    <div
      className={`transition-transform transition-opacity duration-300 ease-out ${
        direction === "out"
          ? "opacity-0 -translate-y-2"
          : "opacity-100 translate-y-0"
      }`}
    >
      {children}
    </div>
  );
}
