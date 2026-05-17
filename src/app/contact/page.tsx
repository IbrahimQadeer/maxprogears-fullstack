import type { Metadata } from "next";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MAXPROGEARS for custom BJJ and MMA gear enquiries via WhatsApp, email, or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Get in Touch"
        title={
          <>
            Let&apos;s Talk About{" "}
            <em className="text-gold italic">Your Order</em>
          </>
        }
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-padding bg-charcoal">
        <Container>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <Tag className="mb-5">Contact Details</Tag>
              <h2 className="mb-8 font-display text-3xl text-off-white">
                Reach Out Directly
              </h2>

              <ul className="divide-y divide-gold/12">
                <li className="py-8">
                  <p className="mb-2 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
                    WhatsApp
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-off-white hover:text-gold"
                  >
                    {siteConfig.whatsappDisplay}
                  </a>
                </li>
                <li className="py-8">
                  <p className="mb-2 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg text-off-white hover:text-gold"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="py-8">
                  <p className="mb-2 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
                    Instagram
                  </p>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-off-white hover:text-gold"
                  >
                    <InstagramIcon />
                    {siteConfig.instagramHandle}
                  </a>
                </li>
                <li className="py-8">
                  <p className="mb-2 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
                    Location
                  </p>
                  <p className="text-lg text-off-white">{siteConfig.location}</p>
                </li>
              </ul>

              <div className="mt-10 border border-gold/20 bg-gold/5 p-8">
                <p className="mb-2 font-condensed text-xs font-bold tracking-[0.2em] text-gold uppercase">
                  Response Time
                </p>
                <p className="text-sm leading-relaxed text-grey">
                  We aim to respond to enquiries within 24 hours on business
                  days. For the fastest response, message us on WhatsApp.
                </p>
              </div>

              <Button href={whatsappUrl} variant="whatsapp" className="mt-6">
                <WhatsAppIcon size={18} />
                Start WhatsApp Chat
              </Button>
            </div>

            <div>
              <Tag className="mb-5">Send a Message</Tag>
              <h2 className="mb-8 font-display text-3xl text-off-white">
                Quick Enquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
