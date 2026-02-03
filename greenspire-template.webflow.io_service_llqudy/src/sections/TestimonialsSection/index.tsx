import { TestimonialSlider } from "@/sections/TestimonialsSection/components/TestimonialSlider";
import { SliderControls } from "@/sections/TestimonialsSection/components/SliderControls";

export const TestimonialsSection = () => {
  return (
    <section className="box-border caret-transparent overflow-hidden py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-center md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-none gap-y-4 md:max-w-[555px]">
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                [Testimonials]
              </div>
              <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                What Our Happy Clients{" "}
                <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
                  Are Saying
                </span>
              </h2>
            </div>
          </div>
          <div
            role="region"
            aria-label="carousel"
            className="relative bg-transparent box-border caret-transparent clear-both blur-0 text-center mt-20 md:mt-[60px]"
          >
            <TestimonialSlider />
            <SliderControls
              direction="previous"
              ariaLabel="previous slide"
              iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-10.svg"
              variant="z-[3] right-[60px]"
            />
            <SliderControls
              direction="next"
              ariaLabel="next slide"
              iconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-11.svg"
              variant="z-[4] right-[0%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
