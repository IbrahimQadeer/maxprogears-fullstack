import Image from "next/image";
import { cn } from "@/lib/cn";

type OverlayVariant = "dark" | "gold" | "none";
type ObjectFitVariant = "cover" | "contain";

export type ShowcaseImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Tailwind aspect-* class on the wrapper */
  aspectClass?: string;
  overlay?: OverlayVariant;
  glow?: boolean;
  border?: boolean;
  objectPosition?: string;
  objectFit?: ObjectFitVariant;
};

export function ShowcaseImage({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
  className,
  aspectClass = "aspect-[4/3]",
  overlay = "dark",
  glow = false,
  border = true,
  objectPosition = "center",
  objectFit = "cover",
}: ShowcaseImageProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-black",
        aspectClass,
        border && "border border-gold/20",
        glow &&
          "shadow-[0_0_48px_rgba(201,168,76,0.15),0_24px_48px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          objectFit === "contain" ? "object-contain p-2 md:p-3" : "object-cover",
        )}
        style={{ objectPosition }}
      />
      {overlay === "dark" && (
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
          aria-hidden
        />
      )}
      {overlay === "gold" && (
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-black/50"
          aria-hidden
        />
      )}
    </div>
  );
}
