import Link from "next/link";
import { footerNavLinks, footerProductLinks } from "@/data/navigation";
import { siteConfig, whatsappUrl } from "@/lib/constants";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/12 bg-[#050505] pt-20 pb-10">
      <Container>
        <div className="mb-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo size="md" className="mb-4 block" />
            <p className="mb-7 max-w-[280px] text-[13px] leading-relaxed text-grey">
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-gold/20 text-grey transition-colors hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-gold/20 text-grey transition-colors hover:border-gold hover:text-gold"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="mb-5 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
              Navigation
            </h5>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-grey transition-colors hover:text-off-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
              Products
            </h5>
            <ul className="space-y-3">
              {footerProductLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-grey transition-colors hover:text-off-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 font-condensed text-[11px] font-bold tracking-[0.2em] text-gold uppercase">
              Contact
            </h5>
            <ul className="space-y-3.5">
              <li className="flex gap-3 text-[13px] text-grey">
                <span className="shrink-0 text-gold" aria-hidden>
                  📍
                </span>
                {siteConfig.location}
              </li>
              <li className="flex gap-3 text-[13px] text-grey">
                <span className="shrink-0 text-gold" aria-hidden>
                  ✉️
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-off-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3 text-[13px] text-grey">
                <span className="shrink-0 text-gold" aria-hidden>
                  💬
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-off-white"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </li>
              <li className="flex gap-3 text-[13px] text-grey">
                <span className="shrink-0 text-gold" aria-hidden>
                  📸
                </span>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-off-white"
                >
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gold/12 pt-8">
          <p className="text-xs text-grey">
            © {year} MAX PRO GEARS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-grey hover:text-off-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-grey hover:text-off-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
