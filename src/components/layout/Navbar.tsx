"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavLinks } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-[1000] border-b border-transparent px-5 transition-all duration-400 sm:px-7 lg:px-12",
          scrolled &&
            "border-gold/12 bg-black/97 backdrop-blur-xl",
        )}
      >
        <div className="mx-auto grid h-[80px] max-w-[1480px] grid-cols-[auto_auto] items-center gap-5 lg:h-[88px] lg:grid-cols-[minmax(190px,auto)_1fr_minmax(160px,auto)]">
          <Logo showText />

          <ul className="hidden items-center justify-center gap-9 xl:gap-11 lg:flex">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "nav-link font-condensed text-[13px] font-bold tracking-[0.18em] text-grey-light uppercase transition-colors xl:text-sm",
                    (pathname === link.href ||
                      (link.href !== "/" &&
                        pathname.startsWith(`${link.href}/`))) &&
                      "text-off-white",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden justify-self-end lg:block">
            <Button href="/quote" showArrow className="!px-6 !py-3 !text-xs">
              Get Quote
            </Button>
          </div>

          <button
            type="button"
            className="flex flex-col gap-1.5 justify-self-end lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-off-white transition-all duration-300",
                mobileOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-off-white transition-all duration-300",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-off-white transition-all duration-300",
                mobileOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 top-[80px] z-[999] flex flex-col gap-2 bg-black px-6 py-10 transition-all duration-300 lg:hidden",
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        {mainNavLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMobile}
            className="border-b border-gold/12 py-3.5 font-condensed text-lg font-bold tracking-[0.12em] text-off-white uppercase transition-colors hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
        <Button
          href="/quote"
          showArrow
          className="mt-5 w-full justify-center"
          onClick={closeMobile}
        >
          Get Quote
        </Button>
      </div>
    </>
  );
}
