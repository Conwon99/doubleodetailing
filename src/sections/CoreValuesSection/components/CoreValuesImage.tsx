export const CoreValuesImage = () => {
  return (
    <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto md:max-w-[520px]">
      <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] md:w-full">
        <img
          src="/about-us-dd.jpg"
          sizes="(max-width: 767px) 100vw, 520px"
          alt="Double O Detailing"
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 w-full md:flex-row md:gap-y-0 md:w-auto">
        <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
          <img
            src="/about-main-1.jpg"
            sizes="(max-width: 767px) 100vw, 240px"
            alt="Double O Detailing Car Detailing"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
        <div className="box-border caret-transparent blur-0 h-[190px] w-full overflow-hidden rounded-2xl md:h-[190px] md:w-[240px]">
          <img
            src="/about-main-2.jpg"
            sizes="(max-width: 767px) 100vw, 240px"
            alt="Double O Detailing Professional Service"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};
