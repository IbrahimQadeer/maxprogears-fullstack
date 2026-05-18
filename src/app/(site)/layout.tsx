import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full bg-black text-off-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}