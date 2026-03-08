export const AboutPageAbout = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent max-w-[988px]">
              <div className="text-3xl font-bold box-border caret-transparent blur-0 tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
                ABOUT US
              </div>
            </div>
          </div>
          <div className="items-center md:items-end box-border caret-transparent gap-x-7 flex flex-col justify-center md:justify-between gap-y-7 mt-[18px] md:gap-x-10 md:flex-row md:gap-y-10 md:mt-5">
            <div className="box-border caret-transparent gap-x-[18px] flex blur-0 flex-col max-w-[488px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
              <div className="text-blue-700 box-border caret-transparent space-y-4">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  At Jimbos Cleaning we deliver professional exterior cleaning across Ayrshire and Glasgow. From roof steam cleaning and moss removal to render softwashing, driveway, gutter, PVC and window cleaning, we bring safe, effective service to your property. As a local business we pride ourselves on quality, reliability and customer satisfaction.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  Whether you need a one-off roof clean or regular gutter and window maintenance, we treat every job with the same care. We come to you with the right equipment and methods for each surface, so your home or business looks its best with minimal disruption.
                </div>
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  We're fully insured and use appropriate products and techniques for roofs, render, driveways and more. Get in touch for a free quote—we're here to help keep your property looking clean and well maintained.
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <h3 className="text-lg font-semibold font-heading uppercase text-black mb-4">
                    Why choose us
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 md:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      <div className="order-2 sm:order-none flex-1 min-w-0">
                        <span className="text-[15px] font-medium text-black leading-6 md:text-base">Fully insured</span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 md:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      <div className="order-2 sm:order-none flex-1 min-w-0">
                        <span className="text-[15px] font-medium text-black leading-6 md:text-base">Mobile service</span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-neutral-200 bg-neutral-50/50 p-4 md:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      <div className="order-2 sm:order-none flex-1 min-w-0">
                        <span className="text-[15px] leading-6 text-blue-700 md:text-base">Safe, effective methods for every surface</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto">
              <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] md:w-[500px]">
                <img
                  src="/jimbos/gal1.jpg"
                  sizes="(max-width: 767px) 100vw, 500px"
                  alt="Jimbos Cleaning - exterior cleaning"
                  className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                />
              </div>
              <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-full md:flex-row md:gap-y-0 md:w-auto">
                <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
                  <img
                    src="/jimbos/gal2.jpg"
                    sizes="(max-width: 767px) 100vw, 240px"
                    alt="Exterior cleaning - gallery"
                    className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
                  />
                </div>
                <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
                  <img
                    src="/jimbos/gal3.jpg"
                    sizes="(max-width: 767px) 100vw, 240px"
                    alt="Jimbos Cleaning - property care"
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
