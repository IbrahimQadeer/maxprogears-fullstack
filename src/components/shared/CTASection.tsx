import { whatsappUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

type CTASectionProps = {
  tag?: string;
  title: string;
  description: string;
};

export function CTASection({
  tag = "Ready to Order?",
  title,
  description,
}: CTASectionProps) {
  return (
    <section className="border-y border-gold/20 bg-gradient-to-br from-[#0f0e09] via-[#1a1505] to-[#0f0e09] py-[72px] text-center md:py-[100px]">
      <Container>
        <Tag className="mx-auto mb-5 block w-fit">{tag}</Tag>
        <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.75rem)] font-semibold text-off-white">
          {title}
        </h2>
        <p className="mx-auto mb-10 max-w-[600px] text-lg text-grey">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/quote" showArrow>
            Request a Quote
          </Button>
          <Button href={whatsappUrl} variant="whatsapp">
            <WhatsAppIcon size={18} />
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
