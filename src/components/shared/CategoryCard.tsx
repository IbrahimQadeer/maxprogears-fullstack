import Link from "next/link";
import { cn } from "@/lib/cn";

type CategoryCardProps = {
  name: string;
  href: string;
  description?: string;
  index?: number;
  className?: string;
};

/** Premium category tile for the products listing page */
export function CategoryCard({
  name,
  href,
  description,
  index = 0,
  className,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[220px] flex-col overflow-hidden border border-gold/12 bg-black/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-black/65 hover:shadow-[0_18px_44px_rgba(0,0,0,0.35)] md:p-7",
        className,
      )}
    >
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-gold/20 to-transparent opacity-70" />
      <div className="mb-8 flex items-start justify-between gap-4">
        <span className="h-px w-12 bg-gold/45 transition-all duration-300 group-hover:w-20 group-hover:bg-gold" />
        <span
          className="font-condensed text-[13px] font-extrabold tracking-[0.16em] text-gold/45 transition-colors group-hover:text-gold"
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-condensed text-lg leading-snug font-bold tracking-[0.08em] text-off-white uppercase">
          {name}
        </h2>
        {description && (
          <p className="mt-4 line-clamp-3 text-sm leading-7 text-grey">
            {description}
          </p>
        )}
        <span className="mt-auto pt-7 font-condensed text-[11px] font-bold tracking-[0.15em] text-gold uppercase transition-all duration-200 group-hover:translate-x-1">
          View Product -&gt;
        </span>
      </div>
    </Link>
  );
}
