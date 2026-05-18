import { heroHighlights } from "@/data/home";
import { whatsappUrl } from "@/lib/constants";
import { IMAGE_ALT, IMAGES } from "@/lib/images";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { ShowcaseImage } from "@/components/ui/ShowcaseImage";
import { Tag } from "@/components/ui/Tag";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-black via-dark to-[#161204]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.5) 60px, rgba(201,168,76,0.5) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.5) 60px, rgba(201,168,76,0.5) 61px)
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-[220px] -right-[220px] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.11)_0%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 pt-[132px] pb-[88px] md:pt-[150px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-10">
        <div className="max-w-[670px]">
          <Tag className="mb-6">Premium Custom BJJ & MMA Gear</Tag>
          <h1 className="animate-fade-up mb-7 font-display text-[clamp(2.9rem,5.4vw,5.75rem)] leading-[0.98] font-bold text-off-white">
            Custom Combat Gear for{" "}
            <em className="text-gold italic">Academies, Teams</em> & Fight Clubs
          </h1>
          <p className="animate-fade-up-delay-1 mb-10 max-w-[570px] text-[17px] leading-8 font-light text-grey-light md:text-xl md:leading-9">
            Premium rashguards, fight shorts, gis, and teamwear built around
            your academy identity, from first mockup to finished kit.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="/quote" showArrow className="w-full sm:w-auto">
              Request a Quote
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" className="w-full sm:w-auto">
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </Button>
          </div>
          <div className="animate-fade-up-delay-3 mt-12 grid grid-cols-3 gap-4 border-t border-gold/15 pt-8 sm:flex sm:flex-wrap sm:gap-10">
            {heroHighlights.map((stat) => (
              <div key={stat.label}>
                <p className="font-condensed text-3xl leading-none font-extrabold text-gold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-[0.08em] text-grey uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up-delay-2 relative">
          <ShowcaseImage
            src={IMAGES.hero}
            alt={IMAGE_ALT.hero}
            priority
            glow
            overlay="gold"
            objectFit="contain"
            aspectClass="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-[610px]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-sm bg-[linear-gradient(135deg,#050505,#15120a)] lg:min-h-[540px]"
          />
          <span className="absolute -top-3 right-4 z-10 bg-gold px-4 py-2 font-condensed text-[10px] font-extrabold tracking-[0.15em] text-black uppercase shadow-lg md:-right-3">
            Made in Sialkot
          </span>
          <span className="absolute bottom-5 left-5 z-10 max-w-[calc(100%-40px)] font-condensed text-[11px] font-semibold tracking-[0.15em] text-off-white/90 uppercase drop-shadow-md">
            MAX PRO GEARS Custom Gear Collection
          </span>
        </div>
      </div>
    </section>
  );
}
