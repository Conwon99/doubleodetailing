import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <section className="bg-white box-border caret-transparent pb-[60px] md:pb-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-end md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-[740px] gap-y-4">
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                [Our Services]
              </div>
              <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                Browse All Our{" "}
                <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
                  Services
                </span>
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent">
            <div
              role="list"
              className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-7 mt-10 md:grid-cols-[1fr_1fr_1fr] md:gap-y-4 md:mt-14"
            >
              <ServiceCard
                href="/service/fertilization-weed-control"
                imageUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/68a788de51daa6bb544d5449_asdasasdfas.webp"
                imageSizes="(max-width: 767px) 100vw, 740px"
                title="Fertilization &amp; Weed Control"
                description="From flower beds to complete redesigns, we bring your garden vision to life."
                iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg"
                iconAlt="Icon"
              />
              <ServiceCard
                href="/service/seasonal-cleanups"
                imageUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/68a7a05ee8647fba1ff5fc8c_freepik_assistant_1752740256828_1.webp"
                imageSizes="(max-width: 767px) 100vw, 740px"
                title="Seasonal Cleanups"
                description="We offer mulching, pruning, fertilizing, and seasonal planting to keep your space thriving all"
                iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg"
                iconAlt="Icon"
              />
              <ServiceCard
                href="/service/garden-design-planting"
                imageUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/68a7a079f2f36df44a6f48fa_skilled-gardener-tending-plants-modern-landscaped-garden-daylight_1.webp"
                imageSizes="(max-width: 767px) 100vw, 740px"
                title="Garden Design & Planting"
                description="We fix patchy, worn-out grass with new turf, re-seeding, aeration, and soil treatment."
                iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg"
                iconAlt="Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
