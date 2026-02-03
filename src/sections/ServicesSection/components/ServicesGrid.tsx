import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] gap-y-4 mt-10 mb-7 md:flex md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:mt-14 md:mb-10">
      <ServiceCard
        imageUrl="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
        imageAlt="Quartz Watch Service"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-9.svg"
        title="Quartz Service"
        description="Quartz Service from £150. Includes movement exchange for fashion brands (Armani, DKNY, Fossil etc) from £50. New Swiss-made Renata battery installed."
        linkHref="/services"
        linkText="See Details"
        arrowIconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
        variant="md:w-[24%]"
      />
      <ServiceCard
        imageUrl="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80"
        imageAlt="Mechanical Watch Service"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-10.svg"
        title="Mechanical Service"
        description="Manual Wind from £200, Automatic Movement from £230. Complete service including disassembly, cleaning, mainspring replacement, and regulation."
        linkHref="/services"
        linkText="See Details"
        arrowIconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
        variant="md:w-[24%]"
      />
      <ServiceCard
        imageUrl="https://images.unsplash.com/photo-1594534475808-18d6d2c09e0d?w=800&q=80"
        imageAlt="Chronograph Service"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-9.svg"
        title="Chronograph Service"
        description="Mechanical Chronograph from £330, Automatic Chronograph from £350. Specialised service for complex chronograph movements with full warranty."
        linkHref="/services"
        linkText="See Details"
        arrowIconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
        variant="md:w-[24%]"
      />
      <ServiceCard
        imageUrl="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
        imageAlt="Part Repairs"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-10.svg"
        title="Part Repairs"
        description="Battery replacement from £10, glass replacement from £40, crown & stem repairs from £45, case and bracelet polishing from £80."
        linkHref="/services"
        linkText="See Details"
        arrowIconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
        variant="md:w-[24%]"
      />
    </div>
  );
};
