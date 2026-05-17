import { whatsappUrl } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-pulse-wa fixed right-5 bottom-5 z-[900] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:right-8 md:bottom-8 md:h-[58px] md:w-[58px]"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} className="text-white" />
    </a>
  );
}
