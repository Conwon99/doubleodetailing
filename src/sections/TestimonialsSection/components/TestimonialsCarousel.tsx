import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsCarousel = () => {
  return (
    <div className="box-border caret-transparent grid gap-6 md:grid-cols-3">
      <TestimonialCard
        ariaLabel="Testimonial 1"
        imageUrl="/g1.jpeg"
        imageAlt="AM|PM Watch Repair Gallery"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-15.svg"
        testimonialText="&quot;They restored my grandfather's pocket watch with incredible precision and attention to detail. It runs perfectly now.&quot;"
        authorName="Daniel Harper"
      />
      <TestimonialCard
        ariaLabel="Testimonial 2"
        imageUrl="/g2.jpeg"
        imageAlt="AM|PM Watch Repair Gallery"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-16.svg"
        testimonialText="I bring my vintage Rolex in for regular servicing, and they always exceed my expectations. True master craftsmen."
        authorName="Srihas Kapoor"
      />
      <TestimonialCard
        ariaLabel="Testimonial 3"
        imageUrl="/g3.jpeg"
        imageAlt="AM|PM Watch Repair Gallery"
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-16.svg"
        testimonialText="I didn't know if my broken watch could be saved. Their team worked miracles and brought it back to life beautifully."
        authorName="Michael Reyes"
      />
    </div>
  );
};
