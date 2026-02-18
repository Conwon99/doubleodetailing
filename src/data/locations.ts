/**
 * Location data for location landing pages and area-served schema.
 */

export type Location = {
  slug: string;
  name: string;
  /** For schema and meta */
  addressLocality?: string;
  /** Optional lat/lng for LocalBusiness geo */
  geo?: { latitude: string; longitude: string };
  /** Nearby areas for meta description and content */
  neighborhoods?: string[];
};

export const locations: Location[] = [
  {
    slug: "milngavie",
    name: "Milngavie",
    addressLocality: "Milngavie",
    geo: { latitude: "55.9422", longitude: "-4.3175" },
    neighborhoods: ["Bearsden", "Bishopbriggs", "Douglas Muir", "Craigton"],
  },
  {
    slug: "bearsden",
    name: "Bearsden",
    addressLocality: "Bearsden",
    geo: { latitude: "55.9206", longitude: "-4.3353" },
    neighborhoods: ["Milngavie", "Bishopbriggs", "Douglas", "Torrance"],
  },
  {
    slug: "jordanhill",
    name: "Jordanhill",
    addressLocality: "Glasgow",
    geo: { latitude: "55.8828", longitude: "-4.3342" },
    neighborhoods: ["Partick", "Scotstoun", "Kelvinside", "Broomhill", "Hyndland"],
  },
  {
    slug: "hyndland",
    name: "Hyndland",
    addressLocality: "Glasgow",
    geo: { latitude: "55.8772", longitude: "-4.3086" },
    neighborhoods: ["Partick", "Kelvinside", "Broomhill", "Jordanhill"],
  },
  {
    slug: "killearn",
    name: "Killearn",
    addressLocality: "Stirlingshire",
    geo: { latitude: "56.0392", longitude: "-4.3686" },
    neighborhoods: ["Balfron", "Drymen", "Strathblane", "Bearsden"],
  },
  {
    slug: "balfron",
    name: "Balfron",
    addressLocality: "Stirlingshire",
    geo: { latitude: "56.0711", longitude: "-4.3356" },
    neighborhoods: ["Killearn", "Drymen", "Stirling", "Fintry"],
  },
  {
    slug: "drymen",
    name: "Drymen",
    addressLocality: "Stirlingshire",
    geo: { latitude: "56.0650", longitude: "-4.4500" },
    neighborhoods: ["Balfron", "Killearn", "Balloch", "Balmaha"],
  },
  {
    slug: "stirling",
    name: "Stirling",
    addressLocality: "Stirling",
    geo: { latitude: "56.1165", longitude: "-3.9369" },
    neighborhoods: ["Balfron", "Bridge of Allan", "Dunblane", "Fallin"],
  },
  {
    slug: "balloch",
    name: "Balloch",
    addressLocality: "West Dunbartonshire",
    geo: { latitude: "56.0025", longitude: "-4.5833" },
    neighborhoods: ["Alexandria", "Dumbarton", "Drymen", "Helensburgh"],
  },
  {
    slug: "helensburgh",
    name: "Helensburgh",
    addressLocality: "Argyll and Bute",
    geo: { latitude: "56.0062", longitude: "-4.7265" },
    neighborhoods: ["Dumbarton", "Balloch", "Rhu", "Cardross"],
  },
  {
    slug: "dumbarton",
    name: "Dumbarton",
    addressLocality: "West Dunbartonshire",
    geo: { latitude: "55.9443", longitude: "-4.5705" },
    neighborhoods: ["Balloch", "Helensburgh", "Clydebank", "Alexandria"],
  },
  {
    slug: "bishopbriggs",
    name: "Bishopbriggs",
    addressLocality: "East Dunbartonshire",
    geo: { latitude: "55.9042", longitude: "-4.2286" },
    neighborhoods: ["Milngavie", "Glasgow", "Kirkintilloch", "Lenzie"],
  },
  {
    slug: "dullatur",
    name: "Dullatur",
    addressLocality: "North Lanarkshire",
    geo: { latitude: "55.9653", longitude: "-4.0089" },
    neighborhoods: ["Cumbernauld", "Kilsyth", "Bishopbriggs", "Lenzie"],
  },
  {
    slug: "lennoxtown",
    name: "Lennoxtown",
    addressLocality: "East Dunbartonshire",
    geo: { latitude: "55.9736", longitude: "-4.2000" },
    neighborhoods: ["Kilsyth", "Milton of Campsie", "Kirkintilloch", "Bishopbriggs"],
  },
];

/** All location slugs for getStaticPaths and sitemap */
export const locationSlugs = locations.map((loc) => loc.slug);

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}
