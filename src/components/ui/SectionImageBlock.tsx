import { ShowcaseImage, type ShowcaseImageProps } from "@/components/ui/ShowcaseImage";
import { cn } from "@/lib/cn";

type SectionImageBlockProps = Omit<ShowcaseImageProps, "aspectClass"> & {
  aspectClass?: string;
  className?: string;
};

/** Full-width section image with consistent premium framing */
export function SectionImageBlock({
  className,
  aspectClass = "aspect-[21/9] md:aspect-[2.4/1]",
  overlay = "dark",
  glow = true,
  sizes = "100vw",
  ...props
}: SectionImageBlockProps) {
  return (
    <ShowcaseImage
      className={cn("w-full", className)}
      aspectClass={aspectClass}
      overlay={overlay}
      glow={glow}
      sizes={sizes}
      {...props}
    />
  );
}
