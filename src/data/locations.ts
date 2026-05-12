/**
 * Location data for location landing pages and area-served schema.
 */

export type LocationRegionId =
  | "edinburgh"
  | "midlothian"
  | "east-lothian"
  | "west-lothian";

export type Location = {
  slug: string;
  name: string;
  regionId: LocationRegionId;
  /** For schema and meta */
  addressLocality?: string;
  /** Optional lat/lng for LocalBusiness geo */
  geo?: { latitude: string; longitude: string };
  /** Nearby areas for meta description and content */
  neighborhoods?: string[];
};

export const LOCATION_REGION_ORDER: {
  id: LocationRegionId;
  title: string;
}[] = [
  { id: "edinburgh", title: "Edinburgh" },
  { id: "midlothian", title: "Midlothian" },
  { id: "east-lothian", title: "East Lothian" },
  { id: "west-lothian", title: "West Lothian" },
];

export const locations: Location[] = [
  // Edinburgh
  {
    slug: "morningside",
    name: "Morningside",
    regionId: "edinburgh",
    addressLocality: "Morningside",
    geo: { latitude: "55.9270", longitude: "-3.2070" },
    neighborhoods: ["Bruntsfield", "Marchmont", "Merchiston", "Fairmilehead"],
  },
  {
    slug: "colinton",
    name: "Colinton",
    regionId: "edinburgh",
    addressLocality: "Colinton",
    geo: { latitude: "55.9135", longitude: "-3.2575" },
    neighborhoods: ["Juniper Green", "Craiglockhart", "Slateford", "Balerno"],
  },
  {
    slug: "corstorphine",
    name: "Corstorphine",
    regionId: "edinburgh",
    addressLocality: "Corstorphine",
    geo: { latitude: "55.9420", longitude: "-3.2810" },
    neighborhoods: ["Murrayfield", "Barnton", "Clermiston", "Sighthill"],
  },
  {
    slug: "cramond",
    name: "Cramond",
    regionId: "edinburgh",
    addressLocality: "Cramond",
    geo: { latitude: "55.9790", longitude: "-3.2960" },
    neighborhoods: ["Barnton", "Davidsons Mains", "Blackhall", "Silverknowes"],
  },
  {
    slug: "barnton",
    name: "Barnton",
    regionId: "edinburgh",
    addressLocality: "Barnton",
    geo: { latitude: "55.9650", longitude: "-3.2870" },
    neighborhoods: ["Cramond", "Davidsons Mains", "Corstorphine", "Blackhall"],
  },
  {
    slug: "murrayfield",
    name: "Murrayfield",
    regionId: "edinburgh",
    addressLocality: "Murrayfield",
    geo: { latitude: "55.9430", longitude: "-3.2510" },
    neighborhoods: ["Corstorphine", "Roseburn", "Ravelston", "Blackhall"],
  },
  {
    slug: "balerno",
    name: "Balerno",
    regionId: "edinburgh",
    addressLocality: "Balerno",
    geo: { latitude: "55.8810", longitude: "-3.3370" },
    neighborhoods: ["Currie", "Juniper Green", "Colinton", "Ratho"],
  },
  {
    slug: "juniper-green",
    name: "Juniper Green",
    regionId: "edinburgh",
    addressLocality: "Juniper Green",
    geo: { latitude: "55.9000", longitude: "-3.3010" },
    neighborhoods: ["Colinton", "Currie", "Balerno", "Baberton"],
  },
  {
    slug: "blackhall",
    name: "Blackhall",
    regionId: "edinburgh",
    addressLocality: "Blackhall",
    geo: { latitude: "55.9590", longitude: "-3.2580" },
    neighborhoods: ["Davidsons Mains", "Ravelston", "Murrayfield", "Stockbridge"],
  },
  {
    slug: "davidsons-mains",
    name: "Davidsons Mains",
    regionId: "edinburgh",
    addressLocality: "Davidsons Mains",
    geo: { latitude: "55.9700", longitude: "-3.2630" },
    neighborhoods: ["Cramond", "Blackhall", "Barnton", "Silverknowes"],
  },
  {
    slug: "fairmilehead",
    name: "Fairmilehead",
    regionId: "edinburgh",
    addressLocality: "Fairmilehead",
    geo: { latitude: "55.9020", longitude: "-3.2030" },
    neighborhoods: ["Morningside", "Buckstone", "Swanston", "Gilmerton"],
  },
  {
    slug: "trinity",
    name: "Trinity",
    regionId: "edinburgh",
    addressLocality: "Trinity",
    geo: { latitude: "55.9750", longitude: "-3.2110" },
    neighborhoods: ["Newhaven", "Leith", "Stockbridge", "Inverleith"],
  },
  // Midlothian
  {
    slug: "dalkeith",
    name: "Dalkeith",
    regionId: "midlothian",
    addressLocality: "Dalkeith",
    geo: { latitude: "55.8950", longitude: "-3.0680" },
    neighborhoods: ["Bonnyrigg", "Eskbank", "Newbattle", "Musselburgh"],
  },
  {
    slug: "bonnyrigg",
    name: "Bonnyrigg",
    regionId: "midlothian",
    addressLocality: "Bonnyrigg",
    geo: { latitude: "55.8720", longitude: "-3.1100" },
    neighborhoods: ["Dalkeith", "Loanhead", "Lasswade", "Newbattle"],
  },
  {
    slug: "loanhead",
    name: "Loanhead",
    regionId: "midlothian",
    addressLocality: "Loanhead",
    geo: { latitude: "55.8780", longitude: "-3.1530" },
    neighborhoods: ["Bonnyrigg", "Roslin", "Lasswade", "Gilmerton"],
  },
  {
    slug: "penicuik",
    name: "Penicuik",
    regionId: "midlothian",
    addressLocality: "Penicuik",
    geo: { latitude: "55.8260", longitude: "-3.2200" },
    neighborhoods: ["Roslin", "Loanhead", "Bilston", "Auchendinny"],
  },
  // East Lothian
  {
    slug: "musselburgh",
    name: "Musselburgh",
    regionId: "east-lothian",
    addressLocality: "Musselburgh",
    geo: { latitude: "55.9420", longitude: "-3.0560" },
    neighborhoods: ["Prestonpans", "Tranent", "Portobello", "Dalkeith"],
  },
  {
    slug: "tranent",
    name: "Tranent",
    regionId: "east-lothian",
    addressLocality: "Tranent",
    geo: { latitude: "55.9460", longitude: "-2.9550" },
    neighborhoods: ["Musselburgh", "Prestonpans", "Haddington", "Ormiston"],
  },
  {
    slug: "prestonpans",
    name: "Prestonpans",
    regionId: "east-lothian",
    addressLocality: "Prestonpans",
    geo: { latitude: "55.9560", longitude: "-3.0050" },
    neighborhoods: ["Musselburgh", "Tranent", "Cockenzie", "Longniddry"],
  },
  {
    slug: "haddington",
    name: "Haddington",
    regionId: "east-lothian",
    addressLocality: "Haddington",
    geo: { latitude: "55.9570", longitude: "-2.7800" },
    neighborhoods: ["Tranent", "North Berwick", "Gullane", "Dunbar"],
  },
  {
    slug: "north-berwick",
    name: "North Berwick",
    regionId: "east-lothian",
    addressLocality: "North Berwick",
    geo: { latitude: "56.0590", longitude: "-2.7180" },
    neighborhoods: ["Gullane", "Haddington", "Dunbar", "Dirleton"],
  },
  // West Lothian
  {
    slug: "south-queensferry",
    name: "South Queensferry",
    regionId: "west-lothian",
    addressLocality: "South Queensferry",
    geo: { latitude: "55.9905", longitude: "-3.4015" },
    neighborhoods: ["Kirkliston", "Dalmeny", "Cramond", "Broxburn"],
  },
  {
    slug: "kirkliston",
    name: "Kirkliston",
    regionId: "west-lothian",
    addressLocality: "Kirkliston",
    geo: { latitude: "55.9510", longitude: "-3.4030" },
    neighborhoods: ["South Queensferry", "Ratho", "Broxburn", "Uphall"],
  },
  {
    slug: "linlithgow",
    name: "Linlithgow",
    regionId: "west-lothian",
    addressLocality: "Linlithgow",
    geo: { latitude: "55.9760", longitude: "-3.6040" },
    neighborhoods: ["Livingston", "Bathgate", "Broxburn", "Uphall"],
  },
  {
    slug: "livingston",
    name: "Livingston",
    regionId: "west-lothian",
    addressLocality: "Livingston",
    geo: { latitude: "55.8830", longitude: "-3.5230" },
    neighborhoods: ["Linlithgow", "Bathgate", "Uphall", "Broxburn"],
  },
];

/** All location slugs for getStaticPaths and sitemap */
export const locationSlugs = locations.map((loc) => loc.slug);

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}

export function locationsInRegion(regionId: LocationRegionId): Location[] {
  return locations.filter((l) => l.regionId === regionId);
}
