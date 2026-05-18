import Image from "next/image";
import { cn } from "@/lib/cn";

type BrandImageProps = {
  className?: string;
  priority?: boolean;
  variant?: "wings" | "circle";
};

const brandSources = {
  wings: {
    src: "/branding/wings.png",
    alt: "MAX PRO GEARS",
    width: 1536,
    height: 1024,
  },
  circle: {
    src: "/branding/circle.PNG",
    alt: "MAX PRO GEARS emblem",
    width: 1254,
    height: 1254,
  },
};

export function BrandImage({
  className,
  priority = false,
  variant = "wings",
}: BrandImageProps) {
  const image = brandSources[variant];

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
      sizes="(max-width: 768px) 120px, 180px"
    />
  );
}
