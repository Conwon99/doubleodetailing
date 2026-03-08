export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[250px]">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
        Contact
      </div>
      <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3 text-[15px] text-white/80 md:text-base">
        <a href="tel:+447919270128" className="hover:text-white">07919 270128</a>
        <span>2 West Bowhouse Way, Irvine</span>
      </div>
    </div>
  );
};
