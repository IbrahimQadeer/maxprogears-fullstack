import Link from "next/link";
import { cn } from "@/lib/cn";

type CategoryCardProps = {
  name: string;
  href: string;
  icon: string;
  className?: string;
};

/** Compact category tile for the products listing page */
export function CategoryCard({ name, href, icon, className }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block border border-transparent bg-charcoal p-7 transition-all duration-300 hover:border-gold/20 hover:bg-[#1f1f1f] md:p-9",
        className,
      )}
    >
      <span className="mb-4 block text-[32px]" aria-hidden>
        {icon}
      </span>
      <span className="font-condensed text-sm font-bold tracking-[0.1em] text-off-white uppercase">
        {name}
      </span>
    </Link>
  );
}
