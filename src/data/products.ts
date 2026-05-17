import type { Product } from "@/types";

const defaultPricingNote =
  "Pricing depends on quantity, material specs, customization complexity, and shipping destination. Send your details for an accurate quote.";

const defaultCustomization = [
  "Full custom colors and patterns",
  "Academy / team logo placement",
  "Woven or printed labels",
  "Private label options available",
];

const defaultSuitableFor = [
  "BJJ academies",
  "MMA gyms",
  "Fight teams and clubs",
  "Combat sports brands",
];

/** All products — future Supabase `products` table seed */
export const allProducts: Product[] = [
  {
    slug: "gis",
    name: "BJJ Gis / Kimonos",
    tagline: "Custom BJJ Gis & Kimonos",
    shortDescription:
      "Pearl weave, ripstop, and gold weave options with full embroidery and patch customization.",
    longDescription:
      "Our BJJ Gis are crafted for competition and daily training. Available in pearl weave, ripstop, and gold weave fabrics with full embroidery, patches, and custom labels to represent your academy.",
    icon: "🥋",
    category: "Fight Gear",
    customizationOptions: [
      ...defaultCustomization,
      "Embroidery and woven patches",
      "Custom collar and lapel colors",
      "IBJJF-compliant cuts available",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Pearl weave, gold weave, and ripstop jacket options",
      "Ripstop or twill pants",
      "Reinforced stitching at stress points",
      "Custom size sets for teams",
    ],
    specs: [
      { key: "Jacket Fabrics", value: "Pearl Weave / Gold Weave / Ripstop" },
      { key: "Jacket Weight", value: "350gsm – 550gsm options" },
      { key: "Pants Fabric", value: "Ripstop / Twill Cotton" },
      { key: "Sizes", value: "A0 – A6, F1–F4, M, L (custom fits)" },
      { key: "Compliance", value: "IBJJF-compliant cuts available" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["rashguards", "fight-shorts", "custom-teamwear"],
  },
  {
    slug: "rashguards",
    name: "Rashguards",
    tagline: "Custom Rashguards",
    shortDescription:
      "Short and long sleeve rashguards with full sublimation printing for no-gi training and competition.",
    longDescription:
      "Designed for no-gi grappling and MMA, our custom rashguards use high-performance stretch fabric and full sublimation printing. Your academy's colors, logo, and design printed edge-to-edge.",
    icon: "👕",
    category: "Fight Gear",
    customizationOptions: [
      ...defaultCustomization,
      "Full sublimation print",
      "Short or long sleeve styles",
      "Compression or regular fit",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Moisture-wicking performance fabric",
      "Flatlock stitching",
      "No-cracking sublimation print",
      "Custom neck and size labels",
    ],
    specs: [
      { key: "Fabric", value: "82% Polyester / 18% Spandex (typical)" },
      { key: "Printing", value: "Full sublimation" },
      { key: "Styles", value: "Short sleeve / Long sleeve" },
      { key: "Sizes", value: "XS — 5XL (custom cuts available)" },
      { key: "Fit", value: "Compression / Regular" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["fight-shorts", "mma-shorts", "gis"],
  },
  {
    slug: "fight-shorts",
    name: "Fight Shorts",
    tagline: "Custom Fight Shorts",
    shortDescription:
      "MMA and BJJ fight shorts with stretch panels, side splits, and custom sublimation prints.",
    longDescription:
      "Built for grappling and mixed training. Fight shorts feature stretch panels, reinforced seams, and custom sublimation printing for your academy's identity.",
    icon: "🩳",
    category: "Fight Gear",
    customizationOptions: [
      ...defaultCustomization,
      "MMA / BJJ cut options",
      "Velcro or drawstring closure",
      "Screen print or sublimation",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Side slits and flex panels",
      "Reinforced seams",
      "Internal lining options",
      "Team size runs available",
    ],
    specs: [
      { key: "Fabric", value: "Polyester / Satin / Hybrid stretch" },
      { key: "Styles", value: "MMA / BJJ" },
      { key: "Closure", value: "Velcro / Drawstring" },
      { key: "Sizes", value: "XS — 5XL" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["mma-shorts", "muay-thai-shorts", "rashguards"],
  },
  {
    slug: "mma-shorts",
    name: "MMA Shorts",
    tagline: "Custom MMA Shorts",
    shortDescription:
      "Performance MMA shorts with flexible panels and durable construction for training and competition.",
    longDescription:
      "MMA shorts built for striking and grappling crossover training. Custom prints, academy branding, and flexible sizing for full team orders.",
    icon: "🩳",
    category: "Fight Gear",
    customizationOptions: defaultCustomization,
    suitableFor: defaultSuitableFor,
    features: [
      "Lightweight stretch fabric",
      "Secure waist closure",
      "Full custom print coverage",
      "Durable reinforced stitching",
    ],
    specs: [
      { key: "Style", value: "MMA competition / training" },
      { key: "Print", value: "Sublimation / Screen print" },
      { key: "Sizes", value: "XS — 5XL" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["fight-shorts", "muay-thai-shorts", "rashguards"],
  },
  {
    slug: "muay-thai-shorts",
    name: "Muay Thai Shorts",
    tagline: "Custom Muay Thai Shorts",
    shortDescription:
      "Traditional Muay Thai cut shorts with satin-style fabric and bold custom designs.",
    longDescription:
      "Muay Thai shorts tailored to your team's colors and logo. Suitable for striking gyms and hybrid MMA programs that want authentic Thai-style gear.",
    icon: "🥊",
    category: "Fight Gear",
    customizationOptions: defaultCustomization,
    suitableFor: [...defaultSuitableFor, "Muay Thai gyms"],
    features: [
      "Classic Thai silhouette",
      "Wide waistband options",
      "Bold sublimation or embroidery",
      "Team color matching",
    ],
    specs: [
      { key: "Fabric", value: "Satin / Polyester blends" },
      { key: "Sizes", value: "XS — 5XL" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["mma-shorts", "fight-shorts", "t-shirts"],
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    tagline: "Custom T-Shirts",
    shortDescription:
      "Academy and team t-shirts with screen print, embroidery, or heat-transfer branding.",
    longDescription:
      "Everyday training and lifestyle tees for your academy. Cotton and performance blends available with your logo and artwork applied to your specification.",
    icon: "👕",
    category: "Team Apparel",
    customizationOptions: [
      ...defaultCustomization,
      "Screen printing",
      "Embroidery",
      "Heat transfer for small runs",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Cotton and blend options",
      "Unisex and fitted cuts",
      "Bulk team sizing",
      "Multiple print positions",
    ],
    specs: [
      { key: "Fabrics", value: "100% Cotton / Cotton-poly blends" },
      { key: "Print Methods", value: "Screen / DTG / Embroidery" },
      { key: "Sizes", value: "XS — 5XL" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["polo-shirts", "hoodies", "tank-tops"],
  },
  {
    slug: "polo-shirts",
    name: "Polo Shirts / Collar Shirts",
    tagline: "Custom Polo Shirts",
    shortDescription:
      "Professional polo and collar shirts for coaches, staff, and academy branding.",
    longDescription:
      "Polos and collar shirts that present your academy professionally — ideal for coaches, front desk staff, seminars, and branded retail.",
    icon: "👔",
    category: "Team Apparel",
    customizationOptions: [
      ...defaultCustomization,
      "Left chest embroidery",
      "Custom button colors",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Pique and jersey knit options",
      "Embroidered logos",
      "Men's and women's cuts",
      "Color-matched thread",
    ],
    specs: [
      { key: "Decoration", value: "Embroidery / Screen print" },
      { key: "Sizes", value: "XS — 4XL" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["t-shirts", "hoodies", "custom-teamwear"],
  },
  {
    slug: "tank-tops",
    name: "Tank Tops",
    tagline: "Custom Tank Tops",
    shortDescription:
      "Training tank tops for gym wear, seminars, and team lifestyle apparel.",
    longDescription:
      "Lightweight tanks for training floors and team lifestyle wear. Custom prints and embroidery to match your academy kit.",
    icon: "🦺",
    category: "Team Apparel",
    customizationOptions: defaultCustomization,
    suitableFor: defaultSuitableFor,
    features: [
      "Muscle and racerback styles",
      "Moisture-wicking options",
      "Team bulk sizing",
    ],
    specs: [
      { key: "Styles", value: "Muscle / Racerback / Standard" },
      { key: "Sizes", value: "XS — 3XL" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["t-shirts", "singlets", "sports-bras"],
  },
  {
    slug: "singlets",
    name: "Singlets",
    tagline: "Custom Singlets",
    shortDescription:
      "Wrestling and grappling singlets with full custom sublimation for teams and clubs.",
    longDescription:
      "Custom singlets for wrestling, grappling, and combat sports teams. Full sublimation allows complex designs and consistent branding across your roster.",
    icon: "🤼",
    category: "Team Apparel",
    customizationOptions: [
      ...defaultCustomization,
      "Full sublimation body print",
      "Name personalization available",
    ],
    suitableFor: [...defaultSuitableFor, "Wrestling clubs"],
    features: [
      "4-way stretch fabric",
      "Flatlock construction",
      "Team size sets",
    ],
    specs: [
      { key: "Fabric", value: "Polyester / Spandex blend" },
      { key: "Print", value: "Full sublimation" },
      { key: "Sizes", value: "Youth — Adult (custom grading)" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["rashguards", "fight-shorts", "custom-teamwear"],
  },
  {
    slug: "sports-bras",
    name: "Sports Bras",
    tagline: "Custom Sports Bras",
    shortDescription:
      "Performance sports bras with custom colors and branding for academy women's programs.",
    longDescription:
      "Sports bras made to your colorway and branding requirements. Suitable for academy retail, team kits, and women's training programs.",
    icon: "🏃‍♀️",
    category: "Team Apparel",
    customizationOptions: [
      ...defaultCustomization,
      "Sublimation or solid colorways",
      "Custom size grading",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Medium-support performance cuts",
      "Moisture-wicking fabric",
      "Matching team collections",
    ],
    specs: [
      { key: "Sizes", value: "XS — XL (custom grading)" },
      { key: "Print", value: "Sublimation / Solid dye" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["tank-tops", "rashguards", "tracksuits"],
  },
  {
    slug: "hoodies",
    name: "Hoodies",
    tagline: "Custom Hoodies",
    shortDescription:
      "Pullover and zip hoodies with embroidery, screen print, or full custom branding.",
    longDescription:
      "Premium hoodies for your academy store and team kit. Pullover and full-zip styles with embroidery, patches, and screen-printed graphics.",
    icon: "🧥",
    category: "Team Apparel",
    customizationOptions: [
      ...defaultCustomization,
      "Embroidery and chenille patches",
      "Kangaroo or zip front",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Fleece and French terry options",
      "Drawcord and rib trim color matching",
      "Bulk team orders",
    ],
    specs: [
      { key: "Styles", value: "Pullover / Full zip" },
      { key: "Decoration", value: "Embroidery / Screen / DTG" },
      { key: "Sizes", value: "XS — 5XL" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["tracksuits", "t-shirts", "custom-teamwear"],
  },
  {
    slug: "tracksuits",
    name: "Tracksuits",
    tagline: "Custom Tracksuits",
    shortDescription:
      "Matching jacket and pant sets for teams, walkouts, and academy lifestyle wear.",
    longDescription:
      "Full tracksuit sets customized to your academy's identity. Ideal for team travel, walkouts, and branded lifestyle apparel.",
    icon: "🏃",
    category: "Team Apparel",
    customizationOptions: [
      ...defaultCustomization,
      "Matching jacket and pant design",
      "Stripe and panel color blocking",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Polyester tricot and fleece options",
      "Embroidered crests and logos",
      "Full team size breakdowns",
    ],
    specs: [
      { key: "Set Options", value: "Jacket + Pant / Jacket only" },
      { key: "Sizes", value: "XS — 5XL" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote: defaultPricingNote,
    relatedSlugs: ["hoodies", "custom-teamwear", "polo-shirts"],
  },
  {
    slug: "custom-teamwear",
    name: "Custom Teamwear",
    tagline: "Custom Teamwear",
    shortDescription:
      "Complete academy kits — mix multiple product types under one consistent brand.",
    longDescription:
      "Order a full academy kit across gis, rashguards, shorts, hoodies, and more with matched colors, labels, and packaging. One supplier, one brand identity.",
    icon: "🧥",
    category: "Team Apparel",
    customizationOptions: [
      ...defaultCustomization,
      "Multi-product orders in one quote",
      "Matched color standards across items",
      "Branded packaging options",
    ],
    suitableFor: defaultSuitableFor,
    features: [
      "Single point of contact",
      "Consistent branding across products",
      "Size sets for full rosters",
      "Flexible product mix per order",
    ],
    specs: [
      { key: "Products", value: "Mix any categories in one order" },
      { key: "MOQ", value: "Flexible — discussed per project" },
      { key: "Pricing", value: "Quote-based (quantity dependent)" },
    ],
    pricingNote:
      "Teamwear quotes are built per project based on product mix, quantities, and customization scope.",
    relatedSlugs: ["gis", "rashguards", "hoodies"],
  },
];
