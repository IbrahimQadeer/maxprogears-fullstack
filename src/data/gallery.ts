import type { GallerySection } from "@/types";

export const gallerySections: GallerySection[] = [
  {
    id: "bjj-gear",
    tag: "BJJ Gear",
    title: "Gi & Kimono",
    items: [
      {
        id: "gi-pearl",
        label: "BJJ Gi — Pearl Weave",
        icon: "🥋",
        gradient: "from-[#1a1a1a] to-[#111111]",
        variant: "tall",
      },
      {
        id: "gi-patch",
        label: "Custom Patches",
        icon: "🔖",
        gradient: "from-[#1c1c14] to-[#111111]",
      },
      {
        id: "gi-embroidery",
        label: "Embroidered Crest",
        icon: "🪡",
        gradient: "from-[#161616] to-[#0f0f0f]",
      },
    ],
  },
  {
    id: "no-gi",
    tag: "No-Gi Gear",
    title: "Rashguards & Shorts",
    items: [
      {
        id: "rashguard",
        label: "Sublimation Rashguard",
        icon: "👕",
        gradient: "from-[#1c1c14] to-[#111111]",
        variant: "wide",
      },
      {
        id: "fight-shorts",
        label: "Custom Fight Shorts",
        icon: "🩳",
        gradient: "from-[#181810] to-[#111111]",
      },
      {
        id: "training",
        label: "Training Set",
        icon: "🏋️",
        gradient: "from-[#141414] to-[#0a0a0a]",
      },
    ],
  },
  {
    id: "team-apparel",
    tag: "Team Apparel",
    title: "Academy Lifestyle",
    items: [
      {
        id: "hoodie",
        label: "Team Hoodie",
        icon: "🧥",
        gradient: "from-[#1c1208] to-[#111111]",
      },
      {
        id: "tracksuit",
        label: "Tracksuit Set",
        icon: "🏃",
        gradient: "from-[#1a1a12] to-[#111111]",
        variant: "tall",
      },
      {
        id: "polo",
        label: "Coach Polo",
        icon: "👔",
        gradient: "from-[#161410] to-[#0f0f0f]",
      },
    ],
  },
  {
    id: "packaging",
    tag: "Packaging / Details",
    title: "Finishing Touches",
    items: [
      {
        id: "labels",
        label: "Woven Labels",
        icon: "🏷️",
        gradient: "from-[#181818] to-[#0f0f0f]",
      },
      {
        id: "packaging",
        label: "Custom Packaging",
        icon: "📦",
        gradient: "from-[#14140c] to-[#0a0a0a]",
      },
      {
        id: "manufacturing",
        label: "Production Detail",
        icon: "🏭",
        gradient: "from-[#1a1a1a] to-[#111111]",
        variant: "wide",
      },
    ],
  },
];
