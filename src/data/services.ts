/**
 * Service slug and display data for location-service pages and service grids.
 */

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
};

export const services: Service[] = [
  {
    slug: "roof-steam-cleaning",
    title: "Roof Steam Cleaning",
    shortDescription:
      "Safe roof steam cleaning and Ayrshire roof cleaning services. Professional moss removal from roof and algae removal from roof tiles. Roof cleaning and moss treatment for lasting results.",
    imageUrl: "/jimbos/roofclean1.jpg",
  },
  {
    slug: "render-softwashing",
    title: "Render Softwashing",
    shortDescription:
      "Render softwashing specialists providing render cleaning Ayrshire and softwash render cleaning. Expert stain removal from render surfaces without damage.",
    imageUrl: "/jimbos/rendersoftwashjimbo.jpg",
  },
  {
    slug: "driveway-cleaning",
    title: "Driveway Cleaning",
    shortDescription:
      "Driveway cleaning, pressure washing and driveway restoration. Professional patio and driveway cleaning with pressure washing services.",
    imageUrl: "/jimbos/drivewaycleaningjimbo.jpg",
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDescription:
      "Gutter cleaning Ayrshire and gutter maintenance. Expert gutter clearing service and gutter inspection and cleaning.",
    imageUrl: "/jimbos/gutter%20cleaning.webp",
  },
  {
    slug: "pvc-white-cleaning",
    title: "PVC White Cleaning",
    shortDescription:
      "PVC white cleaning specialists: PVC fascias, soffit and gutter cleaning. Professional fascia and soffit cleaning and PVC restoration.",
    imageUrl: "/jimbos/pvc%20clean%20jimbo.jpg",
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortDescription:
      "Residential and commercial window cleaning. Professional window washing for sparkling results every time.",
    imageUrl: "/jimbos/window-cleaning%20jimbo.jpg",
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
