/**
 * Package data for Packages & Pricing page.
 * Sourced from Double O Detailing package cards (SONAX Professional Detailer).
 */

export type PackageSection = {
  heading: string;
  items: string[];
};

export type PackageData = {
  id: string;
  category: "machine-polishing" | "deep-clean" | "maintenance";
  title: string;
  tagline?: string;
  subtitle?: string;
  /** Short summary for the packages overview page */
  summary: string;
  sections: PackageSection[];
  /** Optional extras section (e.g. Upgraded Coating, Engine Bay) */
  extras?: PackageSection;
  /** Optional pricing options within the card (e.g. coating choices with prices) */
  priceOptions?: string[];
  /** Main price display text (e.g. "From £295 or £350") */
  priceDisplay: string;
  /** Prerequisite note for maintenance packages */
  note?: string;
  /** Optional image for the package (path under /packages/) */
  imageUrl?: string;
};

const PRICE_DISCLAIMER =
  "Price/Time can vary based on vehicle condition and size.";

export const PRICE_DISCLAIMER_TEXT = PRICE_DISCLAIMER;

export const packagesData: PackageData[] = [
  {
    id: "casino-royale",
    category: "machine-polishing",
    title: "SINGLE STAGE PAINT ENHANCEMENT + CERAMIC COATING",
    tagline: "CASINO ROYALE",
    summary:
      "Transform your paintwork with machine polishing to remove 60–80% of swirls, marring, and oxidation, then protect it with a durable 1- or 2-year ceramic coating. Leaves a deep gloss finish with long-lasting protection against UV, bird lime, and the elements.",
    sections: [
      {
        heading: "EXTERIOR PREP",
        items: [
          "Wheel arches, alloys, exhaust tips deep cleaned & decontaminated",
          "Safe multi-stage wash using prewash, snow foam & 2-bucket method",
          "Paint chemically decontaminated (iron, sap & tar removal) and clay treated",
          "Dried with plush towels & air blow-dry to reduce water spotting",
        ],
      },
      {
        heading: "PAINT ENHANCEMENT",
        items: [
          "Single-stage machine polish to remove swirls, marring & oxidation (60–80% correction)",
          "Glass, exhaust tips & chrome polished",
          "Two IPA panel wipe-downs for coating prep",
        ],
      },
      {
        heading: "CERAMIC COATING OPTIONS",
        items: [
          "Single Stage Paint Enhancement + 1-Year Ceramic Coating – from £295",
          "Single Stage Paint Enhancement + 2-Year Ceramic Coating – from £350",
        ],
      },
    ],
    priceDisplay: "From £295 / £350",
    imageUrl: "/packages/casino-royale.png",
  },
  {
    id: "snow-time-to-die",
    category: "machine-polishing",
    title: "WINTER PROTECTION DETAIL",
    tagline: "SNOW TIME TO DIE",
    subtitle: "Light machine polish + winter protection",
    summary:
      "Light machine polish and winter protection package designed to protect your vehicle from road salt, grime, and harsh winter conditions while enhancing gloss and making maintenance easier. Options available: 12 Month Ceramic Wax, 1 Year Ceramic Coating.",
    sections: [
      {
        heading: "EXTERIOR PREP",
        items: [
          "Wheel arches, alloys, tyres & exhaust tips deep cleaned and decontaminated",
          "Safe prewash, snow foam & 2-bucket wash using soft mitts and brushes",
        ],
      },
      {
        heading: "DECONTAMINATION",
        items: [
          "Chemical decontamination (iron, tar & sap removal)",
          "Clay bar treatment for bonded contaminants",
          "Rinsed, towel dried & air blown to prevent spotting",
        ],
      },
      {
        heading: "POLISH & PROTECTION",
        items: [
          "Light machine polish to enhance gloss and depth",
          "Glass, exhaust tips & chrome refined",
          "Paintwork prepped with panel wipe for coating adhesion",
          "Glass sealed, trims & tyres dressed",
          "Options: 12 Month Ceramic Wax | 1 Year Ceramic Coating",
        ],
      },
    ],
    priceOptions: ["12 Month Ceramic Wax", "1 Year Ceramic Coating"],
    priceDisplay: "From £240 or £295",
    imageUrl: "/packages/snow-time-to-die.jpeg",
  },
  {
    id: "shaken-not-stirred",
    category: "deep-clean",
    title: "DEEP CLEAN DETAIL",
    tagline: "SHAKEN, NOT STIRRED",
    summary:
      "Our ultimate reset detail. A full deep clean of the interior and exterior, including safe wash, decontamination, protection, and thorough interior detail. Brings your car back to showroom condition and sets the foundation for ongoing maintenance.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Wheel arches, alloys, exhaust tips, and engine bay deep cleaned and protected",
          "Safe multi-stage wash using prewash, snow foam, and 2-bucket method",
          "Paintwork chemically decontaminated (iron, sap & tar removal)",
          "SONAX 3-month ceramic sealant for gloss & protection",
          "Dried with plush towels & air blow-dry to avoid water spots",
          "Trim, arches & tyres dressed (Matte, Satin, or Gloss finish)",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Full deep vacuum including boot",
          "Compressed air dust removal & detailed cleaning of all surfaces",
          "Carpets & mats shampooed and wet-vac extracted",
          "Seats, consoles, vents, belts, and switches thoroughly detailed",
          "Matte UV-protective interior dressing applied",
          "Glass cleaned inside & out",
          "Door shuts and jambs cleaned & protected",
        ],
      },
    ],
    extras: {
      heading: "EXTRAS",
      items: [
        "Upgraded Coating (POA)",
        "Ozone Machine Treatment for Odours",
        "Pet Hair Removal",
        "SONAX Fabric Coating (Carpets/Mats/Seats)",
      ],
    },
    priceDisplay: "From £155",
    imageUrl: "/packages/shaken-not-stirred.png",
  },
  {
    id: "spectre",
    category: "maintenance",
    title: "MAINTENANCE DETAIL",
    tagline: "SPECTRE",
    summary:
      "A top-up detail every 4–6 weeks to keep your car looking its best. Includes an interior mini detail and exterior safe wash, with added protection to maintain that just-detailed finish. Available after an initial service.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Wheel arches, alloys & exhaust tips cleaned and decontaminated",
          "Safe multi-stage wash using prewash, snow foam & 2-bucket method",
          "SONAX 3-month ceramic sealant for gloss & protection",
          "Dried with plush towels & air blow-dry to avoid water spots",
          "Trim, arches & tyres dressed (Matte, Satin, or Gloss finish)",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Full vacuum including upholstery & boot",
          "Compressed air dust removal & detailed surface cleaning",
          "Carpets & mats deep cleaned and wet-vac extracted",
          "Seats, consoles, vents, and switches detailed",
          "Matte UV-protective interior dressing applied",
          "Glass cleaned inside & out",
          "Door shuts & jambs cleaned and protected",
        ],
      },
    ],
    note: "Must have had Shaken, Not Stirred or Casino Royale within a 4-6 week period to enrol in our maintenance plan",
    priceDisplay: "From £80",
    imageUrl: "/packages/spectre.png",
  },
  {
    id: "q",
    category: "maintenance",
    title: "MAINTENANCE VALET",
    tagline: "Q",
    summary:
      "A lighter upkeep option covering all standard valeting, inside and out. Ideal for maintaining cleanliness between details. Available after an initial service.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Wheel arches, alloys & tyres cleaned",
          "Safe prewash & 2-bucket contact wash",
          "Liquid wax applied for added gloss",
          "Dried with soft microfibre towels",
          "Trim, arches & tyres dressed (Matte, Satin, or Gloss finish)",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Full vacuum (boot included if empty)",
          "Dust removal & wipe-down of all surfaces",
          "Carpets & mats vacuumed, cleaned & dried",
          "Glass cleaned inside & out",
          "Door sills pressure washed & dried",
        ],
      },
    ],
    note: "Must have had Shaken, Not Stirred or Casino Royale within a 4-6 week period to enrol in our maintenance plan",
    priceDisplay: "From £55",
    imageUrl: "/packages/q.png",
  },
  {
    id: "007",
    category: "maintenance",
    title: "EXTERIOR SAFE WASH",
    tagline: "007",
    summary:
      "A premium safe wash designed to minimise swirls and scratches while protecting your paintwork. Includes thorough cleaning, decontamination, protection, and optional engine bay maintenance.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Wheel arches, alloys & exhaust tips deep cleaned and decontaminated",
          "Safe prewash, snow foam & 2-bucket wash with soft brushes including intricate areas",
          "SONAX 3-month ceramic sealant for gloss & protection",
          "Dried with plush towels & air blow-dry to avoid spotting",
          "Trim, arches & tyres dressed (Matte, Satin, or Gloss finish)",
        ],
      },
    ],
    extras: {
      heading: "EXTRAS",
      items: ["Upgraded Coating (POA)", "Engine Bay Maintenance"],
    },
    priceDisplay: "From £50",
    imageUrl: "/packages/exterior-wash.png",
  },
];

export const categoryLabels: Record<PackageData["category"], string> = {
  "machine-polishing": "Machine Polishing & Coatings",
  "deep-clean": "Deep Clean Detailing",
  maintenance: "Maintenance",
};

export function getPackageByCategoryAndId(
  category: PackageData["category"],
  id: string
): PackageData | undefined {
  return packagesData.find((p) => p.category === category && p.id === id);
}
