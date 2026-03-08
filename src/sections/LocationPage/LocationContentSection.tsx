import type { Location } from "@/data/locations";
import { services } from "@/data/services";

export type LocationContentSectionProps = {
  location: Location;
};

export const LocationContentSection = ({
  location,
}: LocationContentSectionProps) => {
  const { name, neighborhoods = [] } = location;
  const areaList =
    neighborhoods.length > 0
      ? neighborhoods.join(", ")
      : name;

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="max-w-[800px] prose prose-neutral">
          <p className="text-[15px] text-blue-700 leading-6 md:text-base mb-8">
            Properties in {name} face the same challenges as elsewhere in the west of Scotland: rain, moss, algae and general wear. Keeping your roof, render, driveway and gutters clean protects your property and improves curb appeal. We bring our equipment and products to you, so you don’t have to be there all day—we work around your schedule.
          </p>

          {services.map((service) => (
            <div key={service.slug} className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-black mb-3 font-heading uppercase">
                {service.title} in {name}
              </h2>
              <p className="text-[15px] text-blue-700 leading-6 md:text-base">
                Our {service.title.toLowerCase()} service is popular with customers in {name} and the surrounding areas. We use the same premium methods and products as on our main service pages—the only difference is we come to you. Book a slot that suits you and we’ll bring our mobile setup to your door.
              </p>
            </div>
          ))}

          <h2 className="text-2xl font-bold tracking-tight text-black mt-12 mb-3 font-heading uppercase">
            Why exterior cleaning matters in {name}
          </h2>
          <p className="text-[15px] text-blue-700 leading-6 md:text-base">
            We cover {areaList} and the wider area. From roofs and render to driveways and gutters—we work around your setup. Regular exterior cleaning helps protect your property from moss, algae and wear, and keeps your home looking its best. Get in touch to confirm we cover your postcode and to book a visit.
          </p>
        </div>
      </div>
    </section>
  );
};
