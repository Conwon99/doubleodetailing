import { packagesData, categoryLabels } from "../../data/packages";
import type { PackageData } from "../../data/packages";

const categoryOrder: PackageData["category"][] = [
  "machine-polishing",
  "deep-clean",
  "maintenance",
];

/** Gallery image for packages hero background */
const PACKAGES_HERO_IMAGE = "/gallery/WhatsApp Image 2026-02-02 at 11.18.23 PM (3).jpeg";

/** Service section images from home page - used as card backgrounds */
const categoryImages: Record<PackageData["category"], string> = {
  "machine-polishing": "/Machine polishing.png",
  "deep-clean": "/Deep clean detailing.png",
  maintenance: "/Maintenance.png",
};

export const PackagesOverview = () => {
  const byCategory = categoryOrder.map((cat) => ({
    categoryId: cat,
    label: categoryLabels[cat],
    packages: packagesData.filter((p) => p.category === cat),
    imageUrl: categoryImages[cat],
  }));

  return (
    <>
      {/* Hero with background image from gallery - pt clears fixed navbar */}
      <section
        className="relative min-h-[280px] md:min-h-[360px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-[120px] md:pt-[150px]"
        style={{ backgroundImage: `url("${PACKAGES_HERO_IMAGE.replace(/"/g, "%22")}")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-5">
          <div className="inline-block border border-white/80 px-3 py-1 rounded-[1000px] mb-4">
            <span className="font-medium leading-[22px] text-white">Packages & Pricing</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-tight md:text-5xl md:leading-tight font-refrigerator uppercase text-white">
            Packages Overview
          </h2>
        </div>
      </section>

      <section className="box-border py-[60px] md:py-[100px]">
        <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
          <div className="box-border flex flex-col gap-y-10 md:gap-y-14">
          {/* Three overview cards - image only in the heading box, solid dark for list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {byCategory.map(({ categoryId, label, packages, imageUrl }) => (
              <div
                key={label}
                className="rounded-xl overflow-hidden border border-neutral-700 shadow-lg bg-[#282828] flex flex-col"
              >
                {/* Heading box only - background image from home page services section */}
                <div className="relative min-h-[100px] md:min-h-[120px] flex items-center justify-center p-5 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-[#282828]/85" />
                  <div className="relative w-[80%] mx-auto text-center">
                    <h3 className="font-refrigerator uppercase text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-white">
                      {label}
                    </h3>
                  </div>
                </div>
                {/* Package list - solid dark background, no image */}
                <div className="border-t border-neutral-600 p-5 md:p-6 text-white divide-y divide-neutral-500 flex-1">
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="py-3 first:pt-0 last:pb-0">
                      <span className="font-refrigerator uppercase text-sm md:text-base font-bold block">
                        {pkg.tagline ?? pkg.title}
                      </span>
                      <p className="font-figtree text-xs md:text-sm text-neutral-200 mt-0.5 leading-snug">
                        {pkg.subtitle ?? pkg.sections[0]?.items[0]}
                      </p>
                      {pkg.priceOptions && pkg.priceOptions.length > 0 ? (
                        <div className="mt-1.5 space-y-0.5">
                          {pkg.priceOptions.map((option, i) => (
                            <p key={i} className="font-figtree text-xs md:text-sm font-medium text-white">
                              {i + 1}. {option}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="font-figtree text-xs md:text-sm font-medium text-white mt-1">
                          {pkg.priceDisplay}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {/* Learn More CTA - links to this category's page */}
                <div className="border-t border-neutral-600 p-4 md:p-5">
                  <a
                    href={`/packages/${categoryId}`}
                    className="block w-full text-center text-white font-figtree text-sm font-medium py-2.5 px-4 rounded-lg bg-cta hover:bg-cta-dark border border-transparent transition"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-gray-600 md:text-base text-center max-w-[560px] mx-auto">
            All packages are tailored to your vehicle. Get a quote for exact pricing.
          </p>
          </div>
        </div>
      </section>
    </>
  );
};
