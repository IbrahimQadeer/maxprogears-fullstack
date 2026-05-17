import Link from "next/link";
import type { GalleryItem } from "@/types";
import { cn } from "@/lib/cn";

type GalleryGridProps = {
  items: GalleryItem[];
  className?: string;
};

export function GalleryGrid({ items, className }: GalleryGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-[3px] md:grid-cols-4",
        className,
      )}
    >
      {items.map((item) => (
        <Link
          key={item.id}
          href="/gallery"
          className={cn(
            "group relative flex aspect-square items-center justify-center overflow-hidden bg-charcoal transition-all duration-300 hover:z-[2]",
            `bg-gradient-to-br ${item.gradient}`,
            item.variant === "tall" &&
              "md:row-span-2 md:aspect-auto md:min-h-[400px]",
            item.variant === "wide" &&
              "md:col-span-2 md:aspect-auto md:min-h-[200px]",
          )}
        >
          <span className="text-5xl opacity-[0.08]" aria-hidden>
            {item.icon}
          </span>
          <span className="absolute bottom-4 left-4 font-condensed text-[11px] font-semibold tracking-[0.15em] text-off-white/50 uppercase transition-colors group-hover:text-off-white/80">
            {item.label}
          </span>
          <span className="pointer-events-none absolute inset-0 border-2 border-transparent transition-colors group-hover:border-gold group-hover:bg-gold/10" />
        </Link>
      ))}
    </div>
  );
}
