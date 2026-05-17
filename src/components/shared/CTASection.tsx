import { whatsappUrl } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

type CTASectionProps = {
  tag?: string;
  title: string;
  description: string;
  premium?: boolean;
};

export function CTASection({
  tag = "Ready to Order?",
  title,
  description,
  premium = false,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-gold/20 py-[72px] text-center md:py-[100px]",
        premium
          ? "bg-gradient-to-br from-black via-[#171307] to-black md:py-[108px]"
          : "bg-gradient-to-br from-[#0f0e09] via-[#1a1505] to-[#0f0e09]",
      )}
    >
      {premium && (
        <>
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12),transparent_58%)]"
            aria-hidden
          />
        </>
      )}
      <Container>
        <div className={cn("relative mx-auto", premium ? "max-w-[860px]" : "max-w-[760px]")}>
          <Tag className="mx-auto mb-5 block w-fit">{tag}</Tag>
          <h2 className="mb-5 font-display text-[clamp(2rem,4vw,3.75rem)] leading-tight font-semibold text-off-white">
            {title}
          </h2>
          <p
            className={cn(
              "mx-auto mb-10 text-base leading-8 md:text-lg",
              premium ? "max-w-[640px] text-grey-light" : "max-w-[600px] text-grey",
            )}
          >
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button href="/quote" showArrow className="w-full sm:w-auto">
              Request a Quote
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" className="w-full sm:w-auto">
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
