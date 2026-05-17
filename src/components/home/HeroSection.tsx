import { heroHighlights } from "@/data/home";
import { whatsappUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-black via-dark to-[#1a1505]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(201,168,76,0.5) 60px, rgba(201,168,76,0.5) 61px),
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(201,168,76,0.5) 60px, rgba(201,168,76,0.5) 61px)
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-[200px] -right-[200px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)]"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 px-6 pt-[140px] pb-[100px] lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <Tag className="mb-6">Premium Custom BJJ & MMA Gear</Tag>
          <h1 className="animate-fade-up mb-7 font-display text-[clamp(3rem,5.5vw,5.375rem)] leading-[1.02] font-bold text-off-white">
            Custom BJJ Gear Built for{" "}
            <em className="text-gold italic">Academies, Teams</em> & Fight Clubs
          </h1>
          <p className="animate-fade-up-delay-1 mb-11 max-w-[500px] text-lg font-light leading-relaxed text-grey-light">
            Premium custom rashguards, fight shorts, gis, and teamwear made for
            serious training programs. Built from Sialkot, shipped worldwide.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-4">
            <Button href="/quote" showArrow>
              Request a Quote
            </Button>
            <Button href={whatsappUrl} variant="whatsapp">
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </Button>
          </div>
          <div className="animate-fade-up-delay-3 mt-14 flex flex-wrap gap-10 border-t border-gold/12 pt-10">
            {heroHighlights.map((stat) => (
              <div key={stat.label}>
                <p className="font-condensed text-4xl leading-none font-extrabold text-gold">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-[0.08em] text-grey uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up-delay-2 hidden lg:block">
          <div className="relative max-h-[580px] border border-gold/20 bg-gradient-to-b from-charcoal to-black">
            <div className="flex aspect-[3/4] flex-col items-center justify-center bg-gradient-to-br from-[#252525] via-charcoal to-black p-10">
              <p className="mb-4 font-condensed text-[13px] tracking-[0.2em] text-gold uppercase">
                Featured Product
              </p>
              <span className="text-[80px] opacity-15" aria-hidden>
                🥋
              </span>
              <p className="mt-4 font-display text-[32px] text-off-white">
                Custom BJJ Gi
              </p>
              <p className="mt-2 text-[13px] text-grey">
                Pearl Weave · 450gsm · Full Custom
              </p>
            </div>
            <span className="absolute -top-4 -right-4 bg-gold px-4 py-2 font-condensed text-[10px] font-extrabold tracking-[0.15em] text-black uppercase">
              Made in Sialkot
            </span>
            <span className="absolute bottom-6 left-6 font-condensed text-[11px] font-semibold tracking-[0.15em] text-grey uppercase">
              MAXPROGEARS — Custom Gi Collection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
