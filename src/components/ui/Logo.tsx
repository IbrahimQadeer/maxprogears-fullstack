import Link from "next/link";
import { cn } from "@/lib/cn";
import { BrandImage } from "@/components/ui/BrandImage";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
};

const sizeStyles = {
  sm: "h-[38px] w-auto lg:h-[50px]",
  md: "h-[42px] w-auto lg:h-[52px]",
  lg: "h-[46px] w-auto lg:h-[56px]",
};

export function Logo({ className, size = "sm", showText = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        showText
          ? "inline-flex flex-col items-center justify-center gap-1 transition-opacity hover:opacity-90"
          : "inline-flex items-center transition-opacity hover:opacity-90",
        className,
      )}
      aria-label="MAX PRO GEARS home"
    >
      <BrandImage
        variant="wings"
        priority
        className={cn(sizeStyles[size], "object-contain")}
      />
      {showText && (
        <span className="whitespace-nowrap font-condensed text-[9px] leading-none font-semibold tracking-[0.24em] text-gold/80 uppercase lg:text-[10px]">
          MAX PRO GEARS
        </span>
      )}
    </Link>
  );
}
