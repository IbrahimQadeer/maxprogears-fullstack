import type { SiteConfig } from "@/types";

/** Central site config — update here when contact details change */
export const siteConfig: SiteConfig = {
  name: "MAXPROGEARS",
  tagline:
    "Premium custom BJJ and MMA gear for academies, teams, and fight clubs. Manufactured in Sialkot, shipped worldwide.",
  description:
    "Premium custom rashguards, fight shorts, gis, and teamwear for BJJ academies, MMA gyms, and combat sports teams.",
  whatsapp: "923365203279",
  whatsappDisplay: "+92 336 520 3279",
  email: "info@maxprogears.com",
  location: "Sialkot, Punjab, Pakistan",
  instagram: "https://www.instagram.com/maxprogears/",
  instagramHandle: "@maxprogears",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;
