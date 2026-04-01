export type LocationServicePageIntroProps = {
  heading: string;
  paragraphs: string[];
};

export const LocationServicePageIntro = ({
  heading,
  paragraphs,
}: LocationServicePageIntroProps) => {
  return (
    <section className="bg-neutral-100 box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border max-w-[752px]">
          <div className="inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid w-fit mb-4">
            <span className="font-medium leading-[22px]">In your area</span>
          </div>
          <h2 className="text-2xl font-bold tracking-[-0.52px] leading-tight md:text-3xl md:leading-[38px] font-heading uppercase text-black mb-5">
            {heading}
          </h2>
          <div className="flex flex-col gap-4 text-neutral-700 text-[15px] leading-6 md:text-base">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
