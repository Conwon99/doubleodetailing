export const WhyChooseHeader = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
      <div className="box-border caret-transparent flex blur-0 justify-center">
        <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
          [Why Choose Us]
        </div>
      </div>
      <div className="box-border caret-transparent blur-0 max-w-[680px] text-center mx-auto">
        <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
          Here’s Why Our Clients Love{" "}
          <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
            Working With Us
          </span>
        </h2>
      </div>
      <div className="box-border caret-transparent blur-0 max-w-[590px] text-center mx-auto">
        <div className="text-gray-700 box-border caret-transparent">
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            We believe great lawn care is more than just cutting grass — it’s
            about building trust, delivering consistent results, and treating
            every yard like our own
          </div>
        </div>
      </div>
    </div>
  );
};
