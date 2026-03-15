"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroLogo() {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 flex items-center justify-center text-institucional-amarilloClaro font-bold text-4xl border-4 border-institucional-amarilloClaro/50">
        IE
      </div>
    );
  }
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
      <Image
        src="/logo-sierra-nevada.png"
        alt="Escudo Institución Etnoeducativa Sierra Nevada"
        fill
        className="object-contain drop-shadow-md"
        sizes="160px"
        priority
        onError={() => setError(true)}
      />
    </div>
  );
}
