import type { Location } from "@/data/locations";

export type LocationServiceIntroProps = {
  location: Location;
};

export const LocationServiceIntro = ({ location }: LocationServiceIntroProps) => {
  const { name, neighborhoods = [] } = location;
  const areas =
    neighborhoods.length > 0
      ? ` in ${name} and nearby including ${neighborhoods.slice(0, 3).join(", ")}`
      : ` across ${name}`;

  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
          {/* Image – same structure as CoreValuesImage */}
          <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto md:max-w-[700px]">
            <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[600px] md:w-full">
              <img
                src="/about-us-dd.jpg"
                sizes="(max-width: 767px) 100vw, 700px"
                alt={`Double O Detailing – mobile detailing in ${name}`}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
          {/* Content – same structure as CoreValuesContent */}
          <div className="box-border caret-transparent blur-0 basis-[0%] grow max-w-none md:max-w-[544px]">
            <div className="box-border caret-transparent inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
              <div className="font-medium box-border caret-transparent leading-[22px]">
                {name}
              </div>
            </div>
            <div className="box-border caret-transparent mt-[18px] mb-4 md:mt-5">
              <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-refrigerator uppercase">
                Car detailing that comes to you
              </h2>
            </div>
            <div className="text-gray-700 box-border caret-transparent">
              <p className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                We provide mobile detailing{areas}. Rain, road salt, and pollen are part of life here—so we focus on protection and deep cleans that stand up to local conditions. Whether you need a one-off correction or ongoing maintenance, we bring the same premium service to your home or workplace.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </span>
                  <span className="text-[15px] font-medium text-black md:text-base">Fully Mobile</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <span className="text-[15px] font-medium text-black md:text-base">Fully Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </span>
                  <span className="text-[15px] font-medium text-black md:text-base">Quality Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent mt-6 pt-6 border-t border-neutral-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 md:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="order-2 sm:order-none flex-1 min-w-0">
                    <span className="text-[15px] font-medium text-black leading-6 md:text-base">SONAX and PROFILINE Coating Trained</span>
                  </div>
                  <div className="order-1 sm:order-none w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center sm:self-start">
                    <img src="/certs/SONAX.png" alt="SONAX certification" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 md:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="order-2 sm:order-none flex-1 min-w-0">
                    <span className="text-[15px] font-medium text-black leading-6 md:text-base">SONAX and PROFILINE Expert Trained</span>
                  </div>
                  <div className="order-1 sm:order-none w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center sm:self-start">
                    <img src="/certs/SONAX.png" alt="SONAX certification" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 md:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="order-2 sm:order-none flex-1 min-w-0">
                    <span className="text-[15px] leading-6 text-gray-700 md:text-base">Paint Correction, Sanding + Coating Business Skills</span>
                  </div>
                  <div className="order-1 sm:order-none w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center sm:self-start">
                    <img src="/certs/cmpristine.jpg" alt="Paint Correction, Sanding + Coating Business Skills certification" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 md:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="order-2 sm:order-none flex-1 min-w-0">
                    <span className="text-[15px] leading-6 text-gray-700 md:text-base">Machine Polishing Technique — UKDA Trained</span>
                  </div>
                  <div className="order-1 sm:order-none w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center sm:self-start">
                    <img src="/certs/ukDA.png" alt="UKDA certification" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent flex pt-6">
                <a
                  href="/contact"
                  className="text-white items-center bg-cta-dark box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border border-cta-dark px-6 py-4 rounded-[100px] border-solid hover:text-cta-dark hover:bg-white"
                >
                  <span className="relative text-sm font-medium z-[2] md:text-base md:leading-6">
                    BOOK NOW
                  </span>
                  <span className="box-border caret-transparent flex h-4 w-4 items-center justify-center">
                    <img
                      src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-8.svg"
                      alt=""
                      className="box-border caret-transparent h-2 w-3 brightness-0 invert"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
