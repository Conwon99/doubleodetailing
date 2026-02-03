export const Logo = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow">
      <a
        href="/"
        aria-label="home"
        className="relative text-white box-border caret-transparent block float-left h-24 max-h-24 overflow-visible md:h-32 md:max-h-32"
      >
        <div className="box-border caret-transparent">
          <img
            src="/double-o-logo.png"
            alt="Double O Detailing Logo"
            className="box-border caret-transparent inline-block max-w-full h-24 object-contain md:h-32 brightness-0 invert"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </a>
    </div>
  );
};
