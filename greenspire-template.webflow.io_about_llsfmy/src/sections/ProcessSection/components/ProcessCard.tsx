export const ProcessCard = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-5 flex blur-0 flex-col min-h-[auto] min-w-[auto] opacity-100 gap-y-5 md:gap-x-6 md:min-h-0 md:min-w-0 md:opacity-0 md:gap-y-6">
      <div className="text-emerald-200 items-center bg-cyan-950 box-border caret-transparent flex h-12 justify-center min-h-[auto] min-w-[auto] w-12 rounded-[50%] md:min-h-0 md:min-w-0">
        <div className="text-base font-semibold box-border caret-transparent leading-[26px] min-h-[auto] min-w-[auto] md:text-lg md:min-h-0 md:min-w-0">
          01
        </div>
      </div>
      <div className="bg-neutral-100 box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 px-4 py-5 rounded-xl md:min-h-0 md:min-w-0">
        <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2 md:min-h-0 md:min-w-0">
          <div className="text-base font-semibold box-border caret-transparent leading-[26px] min-h-[auto] min-w-[auto] md:text-lg md:min-h-0 md:min-w-0">
            Consultation &amp; Assessment
          </div>
          <div className="text-gray-700 box-border caret-transparent min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
              We start by understanding your needs and evaluating your outdoor
              space
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent h-[180px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:min-h-0 md:min-w-0">
          <img
            src="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a777671a8f9bc97e015622_Frame_1707483377.webp"
            alt="Process 01"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};
