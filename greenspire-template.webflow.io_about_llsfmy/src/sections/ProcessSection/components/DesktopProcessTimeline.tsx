import { ProcessStep } from "@/sections/ProcessSection/components/ProcessStep";

export const DesktopProcessTimeline = () => {
  return (
    <div className="box-border caret-transparent hidden h-auto md:block md:h-[3000px]">
      <div className="static box-border caret-transparent mt-[30px] top-[140px] md:sticky md:mt-[58px]">
        <div className="relative box-border caret-transparent flex flex-col">
          <div className="box-border caret-transparent gap-x-5 hidden auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] min-h-0 min-w-0 gap-y-5 md:gap-x-[normal] md:grid md:grid-cols-[1fr_1fr_1fr_1fr] md:min-h-[auto] md:min-w-[auto] md:gap-y-[normal]">
            <div className="text-emerald-200 items-center self-center bg-emerald-950 box-border caret-transparent flex h-12 justify-center justify-self-center min-h-0 min-w-0 w-12 border border-teal-400/20 rounded-[60px] border-solid md:bg-cyan-950 md:min-h-[auto] md:min-w-[auto]">
              <div className="text-base font-semibold box-border caret-transparent leading-[26px] min-h-0 min-w-0 md:text-lg md:min-h-[auto] md:min-w-[auto]">
                01
              </div>
            </div>
            <div className="text-emerald-200 items-center self-center bg-emerald-950 box-border caret-transparent flex h-12 justify-center justify-self-center min-h-0 min-w-0 w-12 border border-teal-400/20 rounded-[60px] border-solid md:text-cyan-950 md:bg-neutral-200 md:min-h-[auto] md:min-w-[auto]">
              <div className="text-emerald-200 text-base font-semibold box-border caret-transparent leading-[26px] min-h-0 min-w-0 md:text-cyan-950 md:text-lg md:min-h-[auto] md:min-w-[auto]">
                02
              </div>
            </div>
            <div className="text-emerald-200 items-center self-center bg-emerald-950 box-border caret-transparent flex h-12 justify-center justify-self-center min-h-0 min-w-0 w-12 border border-teal-400/20 rounded-[60px] border-solid md:text-cyan-950 md:bg-neutral-200 md:min-h-[auto] md:min-w-[auto]">
              <div className="text-emerald-200 text-base font-semibold box-border caret-transparent leading-[26px] min-h-0 min-w-0 md:text-cyan-950 md:text-lg md:min-h-[auto] md:min-w-[auto]">
                03
              </div>
            </div>
            <div className="text-emerald-200 items-center self-center bg-emerald-950 box-border caret-transparent flex h-12 justify-center justify-self-center min-h-0 min-w-0 w-12 border border-teal-400/20 rounded-[60px] border-solid md:text-cyan-950 md:bg-neutral-200 md:min-h-[auto] md:min-w-[auto]">
              <div className="text-emerald-200 text-base font-semibold box-border caret-transparent leading-[26px] min-h-0 min-w-0 md:text-cyan-950 md:text-lg md:min-h-[auto] md:min-w-[auto]">
                04
              </div>
            </div>
          </div>
          <div className="absolute items-start border-b-emerald-950 border-l-emerald-950 border-r-emerald-950 border-t-teal-400/20 box-border caret-transparent hidden flex-col h-1 justify-center w-[74%] z-[-1] mx-auto border-t top-2/4 inset-x-[0%] md:block">
            <div className="bg-cyan-950 box-border caret-transparent h-1 w-[10%] -mt-px md:w-[0%]"></div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-5 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-5 overflow-hidden mt-[30px] md:gap-x-4 md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-y-4 md:mt-14">
          <ProcessStep
            title="Consultation & Assessment"
            description="We start by understanding your needs and evaluating your outdoor space"
            imageUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a777671a8f9bc97e015622_Frame_1707483377.webp"
            imageAlt="Process 01"
          />
          <ProcessStep
            title="Tailored Planning"
            description="Based on your goals and property, we create a customized service plan"
            imageUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a777671c0eca25d8ac817f_Frame_1707483377-1.webp"
            imageAlt="Process 02"
          />
          <ProcessStep
            title="Professional Execution"
            description="Our experienced team arrives on time with the right tools to deliver."
            imageUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a7776791aced7cedb2db5e_Frame_1707483377-2.webp"
            imageAlt="Process 03"
          />
          <ProcessStep
            title="Support & Maintenance"
            description="We offer regular maintenance, seasonal care, and check-ins to keep your garden a1."
            imageUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a777661c0eca25d8ac8142_Frame_1707483377-3.webp"
            imageAlt="Process 01"
          />
        </div>
      </div>
    </div>
  );
};
