import { BrandImage } from "@/components/ui/BrandImage";

export function BrandSplash() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.12),transparent_36%),linear-gradient(135deg,#050505,#111,#050505)] px-6">
      <div className="brand-splash-logo flex h-40 w-40 items-center justify-center rounded-full border border-gold/10 bg-black/30 shadow-[0_0_80px_rgba(201,168,76,0.12)] sm:h-48 sm:w-48">
        <BrandImage
          variant="circle"
          priority
          className="h-full w-full object-contain"
        />
      </div>
    </main>
  );
}
