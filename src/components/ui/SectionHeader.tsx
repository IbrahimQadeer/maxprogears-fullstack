import { cn } from "@/lib/cn";
import { Divider } from "@/components/ui/Divider";
import { Tag } from "@/components/ui/Tag";

type SectionHeaderProps = {
  tag: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
};

export function SectionHeader({
  tag,
  title,
  description,
  centered = false,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-16",
        centered && "text-center",
        className,
      )}
    >
      <Tag className={cn(centered && "mx-auto block w-fit", "mb-5")}>
        {tag}
      </Tag>
      <h2
        className={cn(
          "font-display text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-tight",
          light ? "text-text-dark" : "text-off-white",
        )}
      >
        {title}
      </h2>
      <Divider centered={centered} />
      {description && (
        <p
          className={cn(
            "max-w-xl text-[17px] leading-relaxed",
            light ? "text-text-muted" : "text-grey",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
