import type {
  FAQItem,
  GalleryItem,
  HeroHighlight,
  ProcessStep,
  ProductCategory,
  WhyChooseItem,
} from "@/types";

export const heroHighlights: HeroHighlight[] = [
  { value: "30+", label: "Product Types" },
  { value: "100%", label: "Custom Made" },
  { value: "PKT", label: "Sialkot, Pakistan" },
];

export const productCategories: ProductCategory[] = [
  {
    id: "rashguards",
    name: "Rashguards",
    description:
      "Short & long sleeve, sublimation printed, moisture-wicking performance fabric. Built for no-gi competition and training.",
    href: "/products/rashguards",
    icon: "👕",
  },
  {
    id: "gis",
    name: "BJJ Gis / Kimonos",
    description:
      "Pearl weave, ripstop, gold weave options. IBJJF-compliant cuts with full embroidery and patch customization.",
    href: "/products/gis",
    icon: "🥋",
  },
  {
    id: "fight-shorts",
    name: "Fight Shorts",
    description:
      "MMA, BJJ, and Muay Thai shorts. Stretch panels, side splits, velcro closures. Custom prints and cuts available.",
    href: "/products/fight-shorts",
    icon: "🩳",
  },
  {
    id: "custom-teamwear",
    name: "Team Apparel",
    description:
      "Hoodies, tracksuits, bomber jackets, caps, and more. Complete academy branding from head to toe.",
    href: "/products/custom-teamwear",
    icon: "🧥",
  },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "custom",
    icon: "⚙️",
    title: "Full Custom Production",
    description:
      "Every item is made to your academy's specifications — colors, logos, cuts, labels, and packaging. Nothing is off-the-shelf.",
  },
  {
    id: "sialkot",
    icon: "🏭",
    title: "Sialkot-Made Quality",
    description:
      "Produced in Sialkot, Pakistan — the global capital of combat sports manufacturing. Trusted craftsmanship with modern facilities.",
  },
  {
    id: "design",
    icon: "🎨",
    title: "In-House Design Support",
    description:
      "Submit your logo and ideas. Our design team creates production-ready mockups for your approval before any production begins.",
  },
  {
    id: "packaging",
    icon: "📦",
    title: "Academy-Ready Packaging",
    description:
      "Custom hang tags, woven labels, neck labels, and branded bags available. Present your gear like a professional brand.",
  },
  {
    id: "shipping",
    icon: "🚢",
    title: "Worldwide Shipping",
    description:
      "We ship to academies across Europe, North America, the Middle East, Australia, and beyond. Clear timelines communicated upfront.",
  },
  {
    id: "communication",
    icon: "💬",
    title: "Direct Communication",
    description:
      "Speak directly with our team via WhatsApp or email. No middlemen, no confusion — clear updates throughout your order.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "01",
    number: "01",
    title: "Send Your Idea",
    description:
      "Share your logo, colors, and requirements via our quote form or WhatsApp.",
  },
  {
    id: "02",
    number: "02",
    title: "Design & Mockup",
    description:
      "Our design team creates detailed mockups for your review and approval.",
  },
  {
    id: "03",
    number: "03",
    title: "Confirm & Produce",
    description:
      "Approve materials, sizes, and design. Production begins with strict quality controls.",
  },
  {
    id: "04",
    number: "04",
    title: "Quality Check",
    description:
      "Every item is inspected before packing. Photos shared for final sign-off.",
  },
  {
    id: "05",
    number: "05",
    title: "Ship & Track",
    description:
      "Packed and dispatched with tracking. Delivered to your academy door.",
  },
];

export const galleryPreviewItems: GalleryItem[] = [
  {
    id: "gi",
    label: "BJJ Gi — Pearl Weave",
    icon: "🥋",
    gradient: "from-[#1a1a1a] to-[#111111]",
    variant: "tall",
  },
  {
    id: "rashguard",
    label: "Sublimation Rashguard",
    icon: "👕",
    gradient: "from-[#1c1c14] to-[#111111]",
  },
  {
    id: "shorts",
    label: "Fight Shorts",
    icon: "🩳",
    gradient: "from-[#161616] to-[#0f0f0f]",
  },
  {
    id: "training",
    label: "Training Gear",
    icon: "🏋️",
    gradient: "from-[#181810] to-[#111111]",
    variant: "tall",
  },
  {
    id: "manufacturing",
    label: "Sialkot Manufacturing",
    icon: "🏭",
    gradient: "from-[#1a1a12] to-[#111111]",
    variant: "wide",
  },
  {
    id: "hoodies",
    label: "Hoodies & Apparel",
    icon: "🧥",
    gradient: "from-[#1c1208] to-[#111111]",
  },
  {
    id: "packaging",
    label: "Custom Packaging",
    icon: "📦",
    gradient: "from-[#141414] to-[#0a0a0a]",
  },
];

export const homeFaqPreview: FAQItem[] = [
  {
    id: "custom-designs",
    question: "Do you offer fully custom designs?",
    answer:
      "Yes. Every order is made to your exact specifications — including colors, logos, patterns, labels, and packaging. We provide design mockups for your approval before production begins.",
  },
  {
    id: "moq",
    question: "Is MOQ flexible?",
    answer:
      "We support flexible order quantities depending on the product type and customization needs. Contact us with your requirements and we will advise accordingly.",
  },
  {
    id: "academy-orders",
    question: "Can you make gear for my full academy or team?",
    answer:
      "Absolutely. We specialize in academy and team orders — including size sets, multiple product types, and consistent branding across your entire kit. Gis, rashguards, shorts, hoodies, and more.",
  },
  {
    id: "shipping-quote",
    question: "Is shipping included in the quote?",
    answer:
      "Shipping costs depend on your destination, quantity, and shipment method. We will include shipping options and estimated costs in your quote so everything is clear before you confirm.",
  },
];
