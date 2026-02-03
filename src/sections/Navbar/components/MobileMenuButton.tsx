export const MobileMenuButton = () => {
  return (
    <div
      aria-label="menu"
      role="button"
      className="relative text-white text-2xl box-border caret-transparent block float-right min-h-[auto] min-w-[auto] p-3 md:text-black md:hidden md:min-h-0 md:min-w-0 md:p-[18px]"
    >
      <div className="text-white box-border caret-transparent invert-[1] w-6 md:text-amber-900 md:w-[30px]">
        <img
          src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-3.svg"
          alt="Icon"
          className="text-white box-border caret-transparent h-full w-full md:text-black"
        />
      </div>
    </div>
  );
};
