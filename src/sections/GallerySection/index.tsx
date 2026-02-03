import { GalleryGrid } from "@/sections/GallerySection/components/GalleryGrid";

export const GallerySection = () => {
  return (
    <section className="box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
            <div className="box-border caret-transparent flex blur-0 justify-center">
              <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
                <div className="font-medium box-border caret-transparent leading-[22px]">
                  Gallery
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent blur-0 max-w-[680px] text-center mx-auto">
              <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-refrigerator uppercase">
                See Our Work - Premium Car Detailing Results
              </h2>
            </div>
          </div>
          <GalleryGrid />
          <div className="box-border caret-transparent mt-8 text-center">
            <p className="text-[15px] box-border caret-transparent leading-6 text-gray-500 italic md:text-base">
              All imagery shown on this website is our own and is of vehicles we have detailed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
