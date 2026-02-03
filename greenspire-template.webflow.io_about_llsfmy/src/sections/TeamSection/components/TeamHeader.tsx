export const TeamHeader = () => {
  return (
    <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-none gap-y-4 md:max-w-[555px]">
      <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
        [Our Team]
      </div>
      <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
        The Team That Cares For{" "}
        <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
          Your Outdoors
        </span>
      </h2>
    </div>
  );
};
