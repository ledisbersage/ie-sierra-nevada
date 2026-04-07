"use client";

import Link, { type LinkProps } from "next/link";
import type { LucideIcon } from "lucide-react";
import Icon from "./Icon";

type IconLinkProps = LinkProps & {
  icon: LucideIcon;
  label: string;
  className?: string;
  iconClassName?: string;
  iconSize?: number;
  labelClassName?: string;
  tooltipClassName?: string;
  tooltipTailClassName?: string;
  ariaLabel?: string;
};

export default function IconLink({
  icon,
  label,
  className = "",
  iconClassName = "",
  iconSize = 18,
  labelClassName = "hidden lg:inline-flex text-sm font-semibold",
  tooltipClassName = "bg-white/90 text-stone-900 border border-white/30",
  tooltipTailClassName = "border-t-white/90 border-l-transparent border-r-transparent border-b-transparent",
  ariaLabel,
  ...linkProps
}: IconLinkProps) {
  const tooltipWrapperClasses =
    "pointer-events-none absolute bottom-full left-1/2 z-10 -translate-x-1/2 translate-y-[-0.35rem] opacity-0 invisible transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-visible:visible group-focus-visible:opacity-100";

  const labelTextClass = `${labelClassName} whitespace-nowrap`;

  return (
    <Link
      {...linkProps}
      className={`group relative inline-flex items-center gap-2 ${className}`}
      aria-label={ariaLabel ?? label}
    >
      <Icon icon={icon} size={iconSize} className={iconClassName} aria-hidden="true" />
      <span className={labelTextClass}>{label}</span>
      <span className={tooltipWrapperClasses}>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-xl ${tooltipClassName}`}
        >
          {label}
        </span>
        <span
          className={`absolute left-1/2 top-full -translate-x-1/2 border-[6px] border-transparent ${tooltipTailClassName}`}
        />
      </span>
    </Link>
  );
}
