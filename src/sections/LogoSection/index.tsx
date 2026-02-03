import { LogoCarousel } from "@/sections/LogoSection/components/LogoCarousel";

export const LogoSection = () => {
  return (
    <section className="box-border caret-transparent overflow-hidden py-[50px] md:py-20">
      <div className="box-border caret-transparent max-w-[1204px] overflow-hidden mx-auto px-5 md:px-8">
        <div className="items-center box-border caret-transparent gap-x-6 flex flex-col gap-y-6 text-center md:[align-items:normal] md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:text-start">
          <div className="box-border caret-transparent shrink-0 max-w-[262px] text-center mr-0 md:text-start md:mr-20">
            <div className="text-lg font-medium box-border caret-transparent leading-[30px] text-center md:text-xl md:leading-7 md:text-start">
              Trusted by more than 5k+{" "}
              <br className="text-lg box-border caret-transparent leading-[30px] text-center md:text-xl md:leading-7 md:text-start" />
              satisfied clients
            </div>
          </div>
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};
