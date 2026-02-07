export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[250px]">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
        Our Services
      </div>
      <nav className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base cursor-not-allowed opacity-70"
        >
          Machine Polishing
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base cursor-not-allowed opacity-70"
        >
          Ceramic Coatings
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base cursor-not-allowed opacity-70"
        >
          Deep Cleans and Valets
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base cursor-not-allowed opacity-70"
        >
          Maintenance
        </a>
      </nav>
    </div>
  );
};
