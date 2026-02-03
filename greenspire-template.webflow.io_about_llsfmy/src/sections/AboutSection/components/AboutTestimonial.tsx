export const AboutTestimonial = () => {
  return (
    <div className="bg-transparent border-b-emerald-950 border-l-cyan-950 border-r-emerald-950 border-t-emerald-950 box-border caret-transparent blur-0 px-[18px] rounded-r-xl border-l md:px-5">
      <div className="text-xl italic font-medium box-border caret-transparent leading-6 font-playfair_display md:text-2xl md:leading-8">
        “One of the most common mistakes I see is people cutting their grass too
        short, especially in spring and summer. Leaving it just a little longer
        encourages deeper roots and protects it from heat stress. If you’re not
        adjusting your blade height with the seasons, you’re missing a key part
        of lawn care.”
      </div>
      <div className="box-border caret-transparent gap-x-4 flex flex-wrap gap-y-4 mt-6 md:mt-8">
        <div className="box-border caret-transparent h-[46px] w-[46px] overflow-hidden rounded-[50%]">
          <img
            src="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a3a92303b20de7a977ca4d_5508e5b8c372c3f2a167c4f551b69fbb28203a98.webp"
            sizes="(max-width: 1200px) 100vw, 1200px"
            alt="Client"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
        <div className="box-border caret-transparent">
          <div className="text-base font-semibold box-border caret-transparent leading-[26px] md:text-lg">
            Mark Henderson
          </div>
          <div className="text-gray-700 box-border caret-transparent">
            <div className="box-border caret-transparent leading-[22px]">
              Lawn Care Specialist (Kent, UK)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
