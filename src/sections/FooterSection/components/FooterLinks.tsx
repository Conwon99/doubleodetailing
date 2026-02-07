export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[200px]">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
        Quick Links
      </div>
      <nav className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base cursor-not-allowed opacity-70"
        >
          Home
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base cursor-not-allowed opacity-70"
        >
          About Us
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base cursor-not-allowed opacity-70"
        >
          Services
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-[15px] box-border caret-transparent leading-6 text-white/80 hover:text-white md:text-base cursor-not-allowed opacity-70"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
