import Link from "next/link";
import type { ProductCategory } from "@/types";
import { cn } from "@/lib/cn";

type ProductCardProps = {
  product: ProductCategory;
  ctaLabel?: string;
  className?: string;
  premium?: boolean;
};

export function ProductCard({
  product,
  ctaLabel = "Explore",
  className,
  premium = false,
}: ProductCardProps) {
  if (premium) {
    return (
      <Link
        href={product.href}
        className={cn(
          "group relative block overflow-hidden border border-gold/12 bg-black/45 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-black/70 hover:shadow-[0_18px_44px_rgba(0,0,0,0.35)]",
          className,
        )}
      >
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="mb-8 flex items-center justify-between gap-4">
          <span className="h-px w-14 bg-gold/45 transition-all duration-300 group-hover:w-20 group-hover:bg-gold" />
          <span
            className="font-condensed text-[56px] leading-none font-extrabold text-gold/10 transition-colors group-hover:text-gold/20"
            aria-hidden
          >
            {product.name.charAt(0)}
          </span>
        </div>
        <article>
          <h3 className="mb-3 font-condensed text-lg font-bold tracking-[0.08em] text-off-white uppercase">
            {product.name}
          </h3>
          <p className="text-sm leading-7 text-grey">{product.description}</p>
          <span className="mt-6 flex items-center gap-2 font-condensed text-[11px] font-bold tracking-[0.15em] text-gold uppercase transition-all duration-200 group-hover:gap-3">
            {ctaLabel} <span aria-hidden>-&gt;</span>
          </span>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={product.href}
      className={cn(
        "group relative block overflow-hidden border border-transparent bg-charcoal transition-all duration-400 hover:border-gold",
        className,
      )}
    >
      <div className="relative flex aspect-[4/5] items-end overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-black p-6">
        <span
          className="font-condensed text-5xl leading-none font-extrabold text-gold/10 transition-colors group-hover:text-gold/20"
          aria-hidden
        >
          {product.name.charAt(0)}
        </span>
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>
      <article className="p-6">
        <h3 className="mb-2 font-condensed text-base font-bold tracking-[0.08em] text-off-white uppercase">
          {product.name}
        </h3>
        <p className="text-[13px] leading-relaxed text-grey">{product.description}</p>
        <span className="mt-4 flex items-center gap-2 font-condensed text-[11px] font-bold tracking-[0.15em] text-gold uppercase transition-all duration-200 group-hover:gap-3">
          {ctaLabel} <span aria-hidden>-&gt;</span>
        </span>
      </article>
    </Link>
  );
}
