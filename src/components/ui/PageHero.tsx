import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Divider } from "@/components/ui/Divider";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/ui/Container";
import type { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  tag: string;
  title: React.ReactNode;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
};

/** Standard inner-page hero — matches products-hero from original design */
export function PageHero({
  tag,
  title,
  description,
  breadcrumbs,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-black via-dark to-[#101008] pt-[160px] pb-20",
        className,
      )}
    >
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} className="mb-8" />
        )}
        <Tag className="mb-5">{tag}</Tag>
        <h1 className="max-w-3xl font-display text-[clamp(2.5rem,5vw,4rem)] leading-tight font-semibold text-off-white">
          {title}
        </h1>
        <Divider />
        {description && (
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-grey">
            {description}
          </p>
        )}
      </Container>
    </div>
  );
}
