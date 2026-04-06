"use client";

import type { LucideIcon, LucideProps } from "lucide-react";

export type IconProps = LucideProps & {
  icon: LucideIcon;
};

export default function Icon({ icon: IconComponent, ...props }: IconProps) {
  return <IconComponent {...props} />;
}

Icon.displayName = "Icon";
