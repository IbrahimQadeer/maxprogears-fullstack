import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ProductRecord } from "@/types";

export function PublicProductCard({ product }: { product: ProductRecord }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group overflow-hidden rounded-3xl border border-zinc-800 bg-black/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-zinc-950/90",
      )}
    >
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/90 p-4 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.65)]">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-56 items-center justify-center bg-zinc-950 text-sm text-zinc-500">
            No preview
          </div>
        )}
      </div>
      <div className="mt-5 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            {product.category}
          </span>
          {product.featured && (
            <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Featured
            </span>
          )}
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">{product.name}</h3>
        <p className="min-h-[3rem] text-sm leading-7 text-zinc-300">{product.short_description}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-400">
            MOQ
            <p className="mt-1 text-sm text-white">{product.moq ?? "—"}</p>
          </div>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-400">
            Lead time
            <p className="mt-1 text-sm text-white">{product.lead_time ?? "—"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
