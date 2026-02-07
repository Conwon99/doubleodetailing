export const AboutPageAbout = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent max-w-[988px]">
              <div className="text-3xl font-bold box-border caret-transparent blur-0 tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-cabinet">
                ABOUT US
              </div>
            </div>
          </div>
          <div className="items-center md:items-end box-border caret-transparent gap-x-7 flex flex-col justify-center md:justify-between gap-y-7 mt-[18px] md:gap-x-10 md:flex-row md:gap-y-10 md:mt-5">
            <div className="box-border caret-transparent gap-x-[18px] flex blur-0 flex-col max-w-[488px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
              <div className="text-gray-700 box-border caret-transparent space-y-4">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  At Double-O Detailing, we're passionate about restoring and protecting vehicles to the highest standard. Based in the north of Glasgow, we provide professional mobile detailing and valeting services across Central Scotland, including Glasgow and the surrounding areas. As a small, independent business, we pride ourselves on quality, attention to detail, and customer satisfaction.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  Every car we work on receives the same level of care and precision—whether it's a quick valet or a full ceramic coating. Our fully equipped mobile unit means we bring the service to you. With our own water and power supply, we make the process convenient and hassle-free, saving you time while ensuring your vehicle looks its absolute best.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  From exterior polishing to deep interior cleaning, we use premium products and proven techniques to deliver lasting results. At Double-O Detailing, your car is our mission—and your satisfaction is our guarantee.
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-200 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold font-cabinet text-black mb-3">
                      Qualifications
                    </h3>
                    <ul className="space-y-2 text-[15px] leading-6 md:text-base text-gray-700">
                      <li className="font-medium text-black flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>SONAX and PROFILINE Coating Trained</span>
                      </li>
                      <li className="font-medium text-black flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>SONAX and PROFILINE Expert Trained</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold font-cabinet text-black mb-3">
                      Training certifications
                    </h3>
                    <ul className="space-y-2 text-[15px] leading-6 md:text-base text-gray-700">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Paint Correction, Sanding + Coating Business Skills — @cmpristinedetailing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Machine Polishing Technique — UKDA Trained</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto">
              <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] md:w-[500px]">
                <img
                  src="/gallery/WhatsApp Image 2026-02-02 at 11.18.23 PM.jpeg"
                  sizes="(max-width: 767px) 100vw, 500px"
                  alt="Double O Detailing - vehicle detailing"
                  className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                />
              </div>
              <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-full md:flex-row md:gap-y-0 md:w-auto">
                <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
                  <img
                    src="/gallery/WhatsApp Image 2026-02-02 at 11.18.23 PM (1).jpeg"
                    sizes="(max-width: 767px) 100vw, 240px"
                    alt="Car detailing - gallery"
                    className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                </div>
                <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
                  <img
                    src="/gallery/WhatsApp Image 2026-02-02 at 11.18.23 PM (2).jpeg"
                    sizes="(max-width: 767px) 100vw, 240px"
                    alt="Double O Detailing - car care"
                    className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
