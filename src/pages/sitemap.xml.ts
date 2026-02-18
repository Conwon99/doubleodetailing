import type { APIRoute } from "astro";
import { locationSlugs } from "../data/locations";
import { serviceSlugs } from "../data/services";
import { packagesData } from "../data/packages";

const siteUrl = "https://doubleodetailing.co.uk";

/** Package category slugs (from packages data) for category index pages */
const packageCategories = [
  ...new Set(packagesData.map((p) => p.category)),
] as const;

const staticPages: string[] = [
  "",
  "about",
  "ceramic-coatings",
  "contact",
  "deep-cleans",
  "engine-bay-detailing",
  "gallery",
  "headlight-restoration",
  "interior-fabric-coating",
  "machine-polishing",
  "maintenance",
  "packages",
  ...packageCategories.map((cat) => `packages/${cat}`),
  ...packagesData.map((p) => `packages/${p.category}/${p.id}`),
  "services",
  "soft-top-restoration",
  "terms",
];

function buildLocationPaths(): string[] {
  const paths: string[] = ["locations"];
  for (const loc of locationSlugs) {
    paths.push(loc);
    for (const svc of serviceSlugs) {
      paths.push(`${loc}/${svc}`);
    }
  }
  return paths;
}

const locationPaths = buildLocationPaths();
const allPaths = [...staticPages, ...locationPaths];

function getPriority(path: string): string {
  if (path === "") return "1.0";
  const main = ["about", "services", "packages", "contact", "gallery"];
  if (main.includes(path)) return "0.9";
  if (path === "locations" || locationSlugs.includes(path)) return "0.85";
  if (path.startsWith("packages/") && !path.includes("/", 9)) return "0.85"; // category
  if (path.startsWith("packages/")) return "0.8"; // package detail
  if (locationPaths.includes(path) && path.includes("/")) return "0.8"; // location-service
  if (
    [
      "ceramic-coatings",
      "deep-cleans",
      "machine-polishing",
      "maintenance",
      "headlight-restoration",
      "soft-top-restoration",
      "interior-fabric-coating",
      "engine-bay-detailing",
    ].includes(path)
  )
    return "0.85";
  if (path === "terms") return "0.3";
  return "0.7";
}

function getChangefreq(path: string): string {
  if (path === "" || path === "packages" || path === "gallery") return "weekly";
  if (path === "terms") return "yearly";
  if (locationSlugs.includes(path) || locationPaths.includes(path)) return "weekly";
  return "monthly";
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split("T")[0];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPaths
  .map((path) => {
    const loc = path ? `${siteUrl}/${path}` : siteUrl + "/";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(path)}</changefreq>
    <priority>${getPriority(path)}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
