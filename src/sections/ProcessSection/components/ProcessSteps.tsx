import { ProcessCard } from "@/sections/ProcessSection/components/ProcessCard";

export const ProcessSteps = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
        imageAlt="Book and secure your appointment"
        title="01. Book & secure your appointment."
        description="Contact us to schedule your detailing service. We require a 10% holding deposit to secure your booking—this is deducted from your final bill. If you need to cancel, please give us at least 48 hours notice; otherwise the deposit is non-refundable."
      />
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
        imageAlt="We come to you"
        title="02. We come to you."
        description="Our fully equipped mobile unit comes to your location. We have our own power and water supply, so we can operate anywhere that's convenient for you. Please remove any belongings from your vehicle before we begin."
      />
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
        imageAlt="Payment and completion"
        title="03. Payment & completion."
        description="Payment can be settled upfront or at the time of service. Tell us if you'd like an invoice sent to your email. Timings and prices are based on a standard job; some vehicles may need more time or materials, which we'll discuss with you."
      />
    </div>
  );
};
