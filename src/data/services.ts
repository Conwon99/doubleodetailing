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
    slug: "machine-polishing",
    title: "Machine Polishing",
    shortDescription:
      "Professional machine polishing to restore your vehicle's paintwork to showroom condition. We use premium products and proven techniques.",
    imageUrl: "/Machine polishing.png",
  },
  {
    slug: "ceramic-coatings",
    title: "Ceramic Coatings",
    shortDescription:
      "Long-lasting ceramic coating protection for your vehicle. Provides superior protection against UV rays, chemicals, and environmental damage.",
    imageUrl: "/Ceramic coating.png",
  },
  {
    slug: "deep-cleans",
    title: "Deep Cleans and Valets",
    shortDescription:
      "Comprehensive deep cleaning and valeting services to keep your vehicle looking immaculate inside and out. Attention to every detail.",
    imageUrl: "/Deep clean detailing.png",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    shortDescription:
      "Regular maintenance packages to keep your vehicle in pristine condition. Protect your investment with our ongoing care programs.",
    imageUrl: "/Maintenance.png",
  },
  {
    slug: "headlight-restoration",
    title: "Headlight Restoration",
    shortDescription:
      "Restore cloudy or yellowed headlights for improved visibility and a like-new appearance. Professional polishing and UV protection.",
    imageUrl: "/Headlights restoration.png",
  },
  {
    slug: "soft-top-restoration",
    title: "Soft Top Restoration and Coating",
    shortDescription:
      "Revive and protect convertible and soft tops with specialist cleaning, restoration, and durable coating for lasting finish.",
    imageUrl: "/Soft top restoration.jpg",
  },
  {
    slug: "interior-fabric-coating",
    title: "Interior Fabric Coating",
    shortDescription:
      "Protect upholstery, carpets, and mats with fabric coating. Repels stains and moisture while keeping interiors looking fresh.",
    imageUrl: "/Interior fabric coating.png",
  },
  {
    slug: "engine-bay-detailing",
    title: "Engine Bay Detailing",
    shortDescription:
      "Thorough cleaning and dressing of the engine bay. Safe, professional treatment to showcase and protect under-bonnet areas.",
    imageUrl: "/Engine detailing.png",
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
