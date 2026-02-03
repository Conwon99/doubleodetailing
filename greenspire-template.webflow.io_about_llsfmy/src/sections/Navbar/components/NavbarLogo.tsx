export const NavbarLogo = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow">
      <a
        href="/"
        aria-label="home"
        className="relative text-white box-border caret-transparent block float-left h-10 max-h-10 overflow-hidden"
      >
        <div className="box-border caret-transparent">
          <img
            src="https://c.animaapp.com/mkllptvwihl2Ks/assets/689a95e54b63b834be7e8748_Frame_1707482768.svg"
            alt="Logo Black"
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
        <div className="box-border caret-transparent hidden">
          <img
            src="https://c.animaapp.com/mkllptvwihl2Ks/assets/689bafd63b8c771c0fcb9750_Frame_7.svg"
            alt="Logo White"
            className="box-border caret-transparent inline-block max-w-full"
          />
        </div>
      </a>
    </div>
  );
};
