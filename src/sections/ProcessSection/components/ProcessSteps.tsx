import { ProcessCard } from "@/sections/ProcessSection/components/ProcessCard";

export const ProcessSteps = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl="/s1.jpeg"
        imageAlt="Book Your Appointment"
        title="01. Book Your Appointment."
        description="Contact us to schedule your car detailing service. We'll discuss your needs and find a convenient time that works for you."
      />
      <ProcessCard
        imageUrl="/s4.jpeg"
        imageAlt="We come to you"
        title="02. We come to you."
        description="Our fully equipped mobile unit comes directly to your location. With our own power and water supply, we bring the service to you, saving you time and hassle."
      />
      <ProcessCard
        imageUrl="/s5.jpeg"
        imageAlt="Pay once the job is done"
        title="03. Pay once the job is done."
        description="Once we've completed the detailing service to your satisfaction, you can pay. No upfront payment required—just quality service you can see before you pay."
      />
    </div>
  );
};
