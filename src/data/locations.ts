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
    slug: "irvine",
    name: "Irvine",
    addressLocality: "Irvine",
    geo: { latitude: "55.6190", longitude: "-4.6551" },
    neighborhoods: ["Kilwinning", "Dreghorn", "Bourtreehill", "Girdle Toll"],
  },
  {
    slug: "kilmarnock",
    name: "Kilmarnock",
    addressLocality: "Kilmarnock",
    geo: { latitude: "55.6111", longitude: "-4.4958" },
    neighborhoods: ["Hurlford", "Crosshouse", "Kilmaus", "Shortlees"],
  },
  {
    slug: "ayr",
    name: "Ayr",
    addressLocality: "Ayr",
    geo: { latitude: "55.4580", longitude: "-4.6299" },
    neighborhoods: ["Alloway", "Doonfoot", "Whitletts", "Prestwick"],
  },
  {
    slug: "troon",
    name: "Troon",
    addressLocality: "Troon",
    geo: { latitude: "55.5436", longitude: "-4.6633" },
    neighborhoods: ["Barassie", "Dundonald", "Prestwick", "Ayr"],
  },
  {
    slug: "prestwick",
    name: "Prestwick",
    addressLocality: "Prestwick",
    geo: { latitude: "55.4833", longitude: "-4.6167" },
    neighborhoods: ["Ayr", "Troon", "Monkton", "Symington"],
  },
  {
    slug: "paisley",
    name: "Paisley",
    addressLocality: "Paisley",
    geo: { latitude: "55.8473", longitude: "-4.4401" },
    neighborhoods: ["Renfrew", "Johnstone", "Elderslie", "Linwood"],
  },
  {
    slug: "saltcoats",
    name: "Saltcoats",
    addressLocality: "Saltcoats",
    geo: { latitude: "55.6362", longitude: "-4.7849" },
    neighborhoods: ["Ardrossan", "Stevenston", "Kilwinning", "West Kilbride"],
  },
  {
    slug: "ardrossan",
    name: "Ardrossan",
    addressLocality: "Ardrossan",
    geo: { latitude: "55.6500", longitude: "-4.8167" },
    neighborhoods: ["Saltcoats", "Stevenston", "West Kilbride", "Largs"],
  },
  {
    slug: "largs",
    name: "Largs",
    addressLocality: "Largs",
    geo: { latitude: "55.7923", longitude: "-4.8667" },
    neighborhoods: ["West Kilbride", "Fairlie", "Wemyss Bay", "Greenock"],
  },
  {
    slug: "kilwinning",
    name: "Kilwinning",
    addressLocality: "Kilwinning",
    geo: { latitude: "55.6533", longitude: "-4.7067" },
    neighborhoods: ["Irvine", "Stevenston", "Dalry", "Saltcoats"],
  },
  {
    slug: "stevenston",
    name: "Stevenston",
    addressLocality: "Stevenston",
    geo: { latitude: "55.6397", longitude: "-4.7533" },
    neighborhoods: ["Saltcoats", "Ardrossan", "Kilwinning", "Irvine"],
  },
  {
    slug: "renfrew",
    name: "Renfrew",
    addressLocality: "Renfrew",
    geo: { latitude: "55.8783", longitude: "-4.3925" },
    neighborhoods: ["Paisley", "Clydebank", "Bishopton", "Erskine"],
  },
  {
    slug: "johnstone",
    name: "Johnstone",
    addressLocality: "Johnstone",
    geo: { latitude: "55.8344", longitude: "-4.5056" },
    neighborhoods: ["Paisley", "Linwood", "Elderslie", "Houston"],
  },
  {
    slug: "cumnock",
    name: "Cumnock",
    addressLocality: "Cumnock",
    geo: { latitude: "55.4542", longitude: "-4.2667" },
    neighborhoods: ["Auchinleck", "New Cumnock", "Mauchline", "Kilmarnock"],
  },
  {
    slug: "stewarton",
    name: "Stewarton",
    addressLocality: "Stewarton",
    geo: { latitude: "55.6708", longitude: "-4.5142" },
    neighborhoods: ["Kilmarnock", "Dunlop", "Beith", "Kilmaurs"],
  },
  {
    slug: "barrhead",
    name: "Barrhead",
    addressLocality: "Barrhead",
    geo: { latitude: "55.8011", longitude: "-4.3928" },
    neighborhoods: ["Newton Mearns", "Paisley", "Neilston", "Giffnock"],
  },
  {
    slug: "dalry",
    name: "Dalry",
    addressLocality: "Dalry",
    geo: { latitude: "55.7097", longitude: "-4.7219" },
    neighborhoods: ["Kilwinning", "Beith", "Kilbirnie", "Irvine"],
  },
  {
    slug: "west-kilbride",
    name: "West Kilbride",
    addressLocality: "West Kilbride",
    geo: { latitude: "55.6936", longitude: "-4.8517" },
    neighborhoods: ["Largs", "Ardrossan", "Saltcoats", "Fairlie"],
  },
  {
    slug: "newton-mearns",
    name: "Newton Mearns",
    addressLocality: "Newton Mearns",
    geo: { latitude: "55.7714", longitude: "-4.3333" },
    neighborhoods: ["Giffnock", "Barrhead", "Clarkston", "Busby"],
  },
  {
    slug: "mauchline",
    name: "Mauchline",
    addressLocality: "Mauchline",
    geo: { latitude: "55.5167", longitude: "-4.3833" },
    neighborhoods: ["Kilmarnock", "Cumnock", "Ayr", "Catrine"],
  },
  {
    slug: "maybole",
    name: "Maybole",
    addressLocality: "Maybole",
    geo: { latitude: "55.3550", longitude: "-4.6833" },
    neighborhoods: ["Ayr", "Girvan", "Kirkoswald", "Crosshill"],
  },
];

/** All location slugs for getStaticPaths and sitemap */
export const locationSlugs = locations.map((loc) => loc.slug);

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}
