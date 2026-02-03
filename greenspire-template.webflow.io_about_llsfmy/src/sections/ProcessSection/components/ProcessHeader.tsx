export const ProcessHeader = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-center md:gap-x-10 md:flex-row md:gap-y-10">
      <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-none gap-y-4 md:max-w-[555px]">
        <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
          [Our Process]
        </div>
        <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
          Our Approach to
          <br className="text-3xl box-border caret-transparent leading-[35px] md:text-[52px] md:leading-[62px]" />
          Expert{" "}
          <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
            Garden Care
          </span>
        </h2>
      </div>
    </div>
  );
};
