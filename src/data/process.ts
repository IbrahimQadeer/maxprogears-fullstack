import type { ProcessStep } from "@/types";

/** Full 7-step process — future CMS / Supabase content */
export const fullProcessSteps: ProcessStep[] = [
  {
    id: "01",
    number: "01",
    title: "Send Your Idea",
    description:
      "Submit our quote form or message us on WhatsApp. Share product type, quantity, deadline, and any design ideas or logo files. The more detail upfront, the faster we can respond.",
  },
  {
    id: "02",
    number: "02",
    title: "Share Logo & Colors",
    description:
      "Send your logo files and color references. We accept vector artwork when possible and can advise on the best decoration method for each product.",
  },
  {
    id: "03",
    number: "03",
    title: "Mockup & Design Approval",
    description:
      "Our design team creates visual mockups for your review. We revise until you approve. No production begins without your sign-off on the final design.",
  },
  {
    id: "04",
    number: "04",
    title: "Confirm Quantity & Sizes",
    description:
      "We confirm fabrics, size breakdowns, and final specifications. A sample may be discussed for certain orders depending on timeline and requirements.",
  },
  {
    id: "05",
    number: "05",
    title: "Production",
    description:
      "Your order enters production in Sialkot. Cutting, printing or embroidery, assembly, and finishing follow the approved specifications. Timelines are confirmed at order stage.",
  },
  {
    id: "06",
    number: "06",
    title: "Quality Check",
    description:
      "Every order is inspected before packing — stitching, print quality, measurements, and labels. Photos can be shared for your review before dispatch.",
  },
  {
    id: "07",
    number: "07",
    title: "Shipping & Tracking",
    description:
      "Orders are packed — with optional branded packaging — and shipped via your chosen method. Tracking details are provided and we remain available for follow-up questions.",
  },
];
