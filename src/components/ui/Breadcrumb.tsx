import Link from "next/link";
import type { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/cn";

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-2.5 font-condensed text-[11px] tracking-[0.1em] text-grey uppercase",
        className,
      )}
    >
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2.5">
          {index > 0 && <span className="text-gold/30" aria-hidden>/</span>}
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          ) : (
            <span className="text-grey">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
