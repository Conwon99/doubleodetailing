export type TestimonialCardProps = {
  ariaLabel: string;
  imageUrl: string;
  imageAlt: string;
  iconUrl: string;
  testimonialText: string;
  authorName: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      aria-label={props.ariaLabel}
      role="group"
      className="relative box-border caret-transparent h-full text-left w-full"
    >
      <div className="relative box-border caret-transparent overflow-hidden rounded-lg">
        <img
          src={props.imageUrl}
          sizes="100vw"
          alt={props.imageAlt}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
        <div className="absolute text-white bg-[linear-gradient(360deg,rgb(0,0,0),rgba(255,255,255,0))] box-border caret-transparent opacity-100 transform-none p-6 bottom-[0%] inset-x-[0%]">
          <div className="box-border caret-transparent w-[22px] before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
            <img
              src={props.iconUrl}
              alt="Icon"
              className="box-border caret-transparent h-4 w-[23px]"
            />
          </div>
          <div className="box-border caret-transparent mt-4 mb-[18px] md:mb-5">
            <div className="text-xl font-medium box-border caret-transparent leading-6 md:text-2xl md:leading-8">
              {props.testimonialText}
            </div>
          </div>
          <div className="text-[15px] font-medium box-border caret-transparent leading-6 md:text-base">
            — {props.authorName}
          </div>
        </div>
      </div>
    </div>
  );
};
