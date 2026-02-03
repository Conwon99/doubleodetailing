import { ServicesPricing } from "@/sections/ServicesSection/components/ServicesPricing";

export const ServicesSection = () => {
  return (
    <section className="box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
            <div className="box-border caret-transparent flex blur-0 justify-center">
              <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
                <div className="font-medium box-border caret-transparent leading-[22px]">
                  Services & Pricing
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent blur-0 max-w-[680px] text-center mx-auto">
              <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                Services Designed to Keep Your{" "}
                <span className="text-3xl box-border caret-transparent leading-[35px] font-figtree md:text-[52px] md:leading-[62px]">
                  Watches Ticking
                </span>
              </h2>
              <p className="text-[15px] box-border caret-transparent leading-6 text-gray-700 mt-3 md:text-base">
                Fully trained, fully insured workshop & insured shipping up to £10,000
              </p>
            </div>
          </div>

          <ServicesPricing />

          {/* Services Not Exhaustive Notice */}
          <div className="box-border caret-transparent mt-6 text-center max-w-[800px] mx-auto">
            <p className="text-[15px] box-border caret-transparent leading-6 text-gray-700 md:text-base">
              The services and repairs referred to above are not exhaustive, if you require a repair type not listed above please get in touch
            </p>
          </div>

          <div className="box-border caret-transparent flex justify-center mt-8">
            <div className="box-border caret-transparent flex">
              <a
                href="/contact"
                className="text-white items-center bg-cta-dark box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border border-cta-dark px-6 py-4 rounded-[100px] border-solid hover:text-cta-dark hover:bg-white"
              >
                <div className="relative box-border caret-transparent overflow-hidden">
                  <div className="box-border caret-transparent">
                    <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                      Message Us
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent w-full">
                    <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                      Message Us
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent">
                  <div className="items-center box-border caret-transparent flex h-4 justify-center w-4 before:accent-auto before:caret-transparent before:text-amber-200 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-amber-200 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-8.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-2 w-3 brightness-0 invert"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
