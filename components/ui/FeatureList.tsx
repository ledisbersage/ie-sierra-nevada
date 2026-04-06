"use client";

import type { LucideIcon } from "lucide-react";
import Icon from "@/components/ui/Icon";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FeatureListProps = {
  features: FeatureItem[];
};

export default function FeatureList({ features }: FeatureListProps) {
  if (!features.length) {
    return null;
  }

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="flex gap-3 rounded-2xl border border-stone-200 bg-white/70 p-4 shadow-sm"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-institucional-azul/10 text-institucional-azul">
            <Icon icon={feature.icon} size={24} className="text-institucional-azul" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-stone-800">{feature.title}</h3>
            <p className="mt-1 text-sm text-stone-600">{feature.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
