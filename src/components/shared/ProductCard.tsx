import Link from "next/link";
import type { ProductCategory } from "@/types";
import { cn } from "@/lib/cn";

type ProductCardProps = {
  product: ProductCategory;
  ctaLabel?: string;
  className?: string;
};

export function ProductCard({
  product,
  ctaLabel = "Explore",
  className,
}: ProductCardProps) {
  return (
    <Link
      href={product.href}
      className={cn(
        "group relative block overflow-hidden border border-transparent bg-charcoal transition-all duration-400 hover:border-gold",
        className,
      )}
    >
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-gradient-to-br from-[#222] to-charcoal">
        <span
          className="text-[64px] opacity-[0.12] transition-transform duration-400 group-hover:scale-105"
          aria-hidden
        >
          {product.icon}
        </span>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-condensed text-base font-bold tracking-[0.08em] text-off-white uppercase">
          {product.name}
        </h3>
        <p className="text-[13px] leading-relaxed text-grey">{product.description}</p>
        <span className="mt-4 flex items-center gap-2 font-condensed text-[11px] font-bold tracking-[0.15em] text-gold uppercase transition-all duration-200 group-hover:gap-3">
          {ctaLabel} <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
