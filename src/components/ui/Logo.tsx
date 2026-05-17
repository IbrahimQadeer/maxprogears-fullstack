import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeStyles = {
  sm: "text-[22px]",
  md: "text-2xl",
  lg: "text-[28px]",
};

export function Logo({ className, size = "sm" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-condensed font-extrabold tracking-[0.15em] text-off-white transition-opacity hover:opacity-90",
        sizeStyles[size],
        className,
      )}
    >
      MAX<span className="text-gold">PRO</span>GEARS
    </Link>
  );
}
