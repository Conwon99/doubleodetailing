import { FeatureCard } from "@/sections/WhyUsSection/components/FeatureCard";

export const MobileCarousel = () => {
  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative bg-transparent box-border caret-transparent clear-both block blur-0 opacity-100 text-center mt-10 md:hidden md:opacity-0 md:mt-14"
    >
      <div className="relative box-border caret-transparent h-full max-w-[656px] text-nowrap z-[1] inset-x-0">
        <div
          aria-label="1 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-11.svg"
              title="Major Swiss Brand Experience"
              description="Over a decade of professional horological experience, having worked for major Swiss brands including Omega, Longines, Tissot & Hamilton, and served as in-house watchmakers for well-known high-street jewellers."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"
                sizes="100vw"
                alt="Precision Watchmaking Tools"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="2 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-12.svg"
              title="Direct Communication & Fast Turnaround"
              description="Being fully independent means you deal directly with the watchmaker—no intermediaries. This allows for clear communication, transparent explanations, and consistently tighter turnaround times, typically 3–5 weeks."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
                sizes="100vw"
                alt="Expert Watchmaker Service"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="3 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-13.svg"
              title="Wide Range of Expertise"
              description="We work on both modern and vintage watches, carrying out everything from glass replacements to complete mechanical services. Our expertise allows us to work on almost any brand that comes in for repair with no job too small."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80"
                sizes="100vw"
                alt="Bespoke Watch Solutions"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="4 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-14.svg"
              title="Utmost Care & Respect"
              description="As watch enthusiasts ourselves, we fully appreciate the value and often deep sentimental importance that watches can hold. Every watch is treated with the utmost care and respect throughout the entire service process."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="https://images.unsplash.com/photo-1594534475808-18d6d2c09e0d?w=800&q=80"
                alt="Master Watchmakers"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-white text-[11px] bottom-[-47px] box-border caret-transparent h-10 z-[5] m-auto pt-2.5 inset-x-0 md:text-sm md:z-[2] md:bottom-0">
        <div
          aria-label="Show slide 1 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 2 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 3 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 4 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
      </div>
    </div>
  );
};
