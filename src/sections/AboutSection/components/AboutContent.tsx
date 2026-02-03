import { AboutStats } from "@/sections/AboutSection/components/AboutStats";

export const AboutContent = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent gap-x-7 flex blur-0 flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
        <div className="box-border caret-transparent flex flex-col gap-y-4">
          <div className="font-medium box-border caret-transparent leading-[22px]">
            About Us
          </div>
          <div className="box-border caret-transparent border-8 border-black p-1 bg-[#D4AF37]">
            <div className="box-border caret-transparent overflow-hidden">
              <img
                src="/about1.jpeg"
                alt="Professional Watch Repair Troon - About Us"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[842px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
          <div className="text-[22px] font-medium box-border caret-transparent leading-[30px] md:text-[28px] md:leading-9">
            <span className="text-[22px] box-border caret-transparent leading-[30px] font-figtree md:text-[28px] md:leading-9">
              AM|PM Watch Repair{" "}
            </span>
            is an independent watchmaking workshop specialising in the repair and servicing of a wide range of luxury watches.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            Our experience spans many leading brands, including Omega, Rolex, TAG Heuer, Cartier, Breitling, Seiko, Ebel, and more. We work on both modern and vintage watches, carrying out everything from glass replacements to complete mechanical services.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            With over a decade of professional horological experience, we have previously worked for major Swiss brands including Omega, Longines, Tissot & Hamilton, and have also served as in-house watchmakers for well-known high-street jewellers. Our expertise and experience allows us to work on almost any brand that comes in for repair with no job too small.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            In addition, we are passionate about British watchmaking and collaborate with several British micro-brands, providing assembly services, warranty repairs, and technical consultation on forthcoming releases.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            Our workshop is based in the popular seaside town of Troon, South Ayrshire, and we receive watches for repair from clients across the UK.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            As watch enthusiasts ourselves, we fully appreciate the value, and often deep sentimental importance that watches can hold. Every watch is treated with the utmost care and respect.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            Being fully independent means you deal directly with the watchmaker—no intermediaries—allowing for clear communication, transparent explanations of recommended work, and consistently tighter turnaround times, typically 3–5 weeks.
          </div>
        </div>
      </div>
      <AboutStats />
    </div>
  );
};
