export const MobileMenuToggle = () => {
  return (
    <div
      aria-label="menu"
      role="button"
      className="relative text-2xl box-border caret-transparent block float-right min-h-[auto] min-w-[auto] p-3 md:hidden md:min-h-0 md:min-w-0 md:p-[18px]"
    >
      <div className="box-border caret-transparent w-6 md:w-[30px]">
        <img
          src="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent h-full w-full"
        />
      </div>
    </div>
  );
};
