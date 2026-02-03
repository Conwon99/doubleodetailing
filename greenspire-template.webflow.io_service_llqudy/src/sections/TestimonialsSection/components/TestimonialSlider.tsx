import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialSlider = () => {
  return (
    <div className="relative box-border caret-transparent h-full max-w-[810px] text-nowrap z-[1] inset-x-0">
      <div
        aria-label="1 of 2"
        role="group"
        className="relative box-border caret-transparent inline-block h-full text-left align-top w-full mr-4"
      >
        <TestimonialCard
          clientImageUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/68a251d9a0f7151158a676c5_portrait-cute-caucasian-white-teenager-posing-outdoors.webp"
          quoteIconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-6.svg"
          quoteIconVariant="h-full w-full"
          testimonialText="The team is always on time, professional, and super friendly. They transformed our patchy yard into something we’re proud of. Highly recommend!"
          starIconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-7.svg"
          clientName="Jake Kelis"
          clientTitle="Owner of green haven supplies"
        />
      </div>
      <div
        aria-label="2 of 2"
        role="group"
        className="relative box-border caret-transparent inline-block h-full text-left align-top w-full mr-4"
      >
        <TestimonialCard
          clientImageUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/68a251d996016e8a58d93184_portrait-cute-caucasian-white-teenager-posing-outdoors-1.webp"
          quoteIconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-8.svg"
          quoteIconVariant="h-12 w-[67px]"
          testimonialText="They treated our small garden with as much attention as a big landscape job. The results were incredible — clean edges, healthy plants, and a fresh look!"
          starIconUrl="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-9.svg"
          clientName="Brandon Stokes"
          clientTitle="Owner of green haven supplies"
        />
      </div>
    </div>
  );
};
