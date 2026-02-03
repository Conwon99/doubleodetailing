export const FooterBottom = () => {
  return (
    <div className="text-slate-200/80 items-center box-border caret-transparent gap-x-5 flex blur-0 flex-col justify-start gap-y-5 text-center mt-10 md:flex-row md:justify-between md:text-start md:mt-[60px]">
      <div className="box-border caret-transparent leading-[22px] text-center md:text-start">
        © 2025 Copywrite. All rights reserved.
      </div>
      <div className="items-center box-border caret-transparent gap-x-[18px] flex gap-y-[18px] text-center md:gap-x-5 md:gap-y-5 md:text-start">
        <a
          href="/privacy"
          className="box-border caret-transparent block max-w-full text-center md:text-start hover:text-white hover:border-white"
        >
          <div className="box-border caret-transparent leading-[22px] text-center md:text-start">
            Privacy policy
          </div>
        </a>
      </div>
    </div>
  );
};
