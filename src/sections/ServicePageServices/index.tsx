import { ServiceCard } from "./components/ServiceCard";

export const ServicePageServices = () => {
  return (
    <section className="bg-white box-border caret-transparent pb-[60px] md:pb-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-end md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-[740px] gap-y-4">
              <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-refrigerator uppercase">
                Browse our services.
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent">
            <div
              role="list"
              className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-7 mt-10 md:grid-cols-[1fr_1fr_1fr] md:gap-y-4 md:mt-14"
            >
              <ServiceCard
                href="/machine-polishing"
                imageUrl="/Machine polishing.png"
                imageSizes="(max-width: 767px) 100vw, 740px"
                title="Machine Polishing"
                description="Professional machine polishing to restore your vehicle's paintwork to showroom condition. We use premium products and proven techniques."
                iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg"
                iconAlt="Icon"
              />
              <ServiceCard
                href="/ceramic-coatings"
                imageUrl="/Ceramic coating.png"
                imageSizes="(max-width: 767px) 100vw, 740px"
                title="Ceramic Coatings"
                description="Long-lasting ceramic coating protection for your vehicle. Provides superior protection against UV rays, chemicals, and environmental damage."
                iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg"
                iconAlt="Icon"
              />
              <ServiceCard
                href="/deep-cleans"
                imageUrl="/Deep clean detailing.png"
                imageSizes="(max-width: 767px) 100vw, 740px"
                title="Deep Cleans and Valets"
                description="Comprehensive deep cleaning and valeting services to keep your vehicle looking immaculate inside and out. Attention to every detail."
                iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg"
                iconAlt="Icon"
              />
              <ServiceCard
                href="/maintenance"
                imageUrl="/Maintenance.png"
                imageSizes="(max-width: 767px) 100vw, 740px"
                title="Maintenance"
                description="Regular maintenance packages to keep your vehicle in pristine condition. Protect your investment with our ongoing care programs."
                iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg"
                iconAlt="Icon"
              />
            </div>
            <div className="mt-10 md:mt-14 border-t border-neutral-200 pt-8 md:pt-10">
              <h3 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-4">
                Additional services
              </h3>
              <ul className="space-y-3 list-none pl-0">
                <li>
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">Headlight Restoration</span>
                  <span className="font-figtree text-[15px] text-gray-700 leading-6"> — Restore cloudy or yellowed headlights for improved visibility and a like-new appearance. Professional polishing and UV protection.</span>
                </li>
                <li>
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">Soft Top Restoration and Coating</span>
                  <span className="font-figtree text-[15px] text-gray-700 leading-6"> — Revive and protect convertible and soft tops with specialist cleaning, restoration, and durable coating for lasting finish.</span>
                </li>
                <li>
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">Interior Fabric Coating</span>
                  <span className="font-figtree text-[15px] text-gray-700 leading-6"> — Protect upholstery, carpets, and mats with fabric coating. Repels stains and moisture while keeping interiors looking fresh.</span>
                </li>
                <li>
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">Engine Bay Detailing</span>
                  <span className="font-figtree text-[15px] text-gray-700 leading-6"> — Thorough cleaning and dressing of the engine bay. Safe, professional treatment to showcase and protect under-bonnet areas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
