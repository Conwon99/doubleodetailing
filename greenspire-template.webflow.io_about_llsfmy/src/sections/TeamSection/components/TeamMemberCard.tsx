export type TeamMemberCardProps = {
  ariaLabel: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  role: string;
  socialUrl: string;
  socialIconUrl: string;
};

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  return (
    <div
      aria-label={props.ariaLabel}
      role="group"
      className="relative box-border caret-transparent inline-block h-full text-left align-top w-full mr-4"
    >
      <div className="box-border caret-transparent">
        <div className="relative box-border caret-transparent overflow-hidden rounded-xl">
          <img
            src={props.imageUrl}
            alt={props.imageAlt}
            sizes="(max-width: 991px) 100vw, 800.0000610351562px"
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          />
        </div>
        <div className="items-center box-border caret-transparent gap-x-[18px] flex flex-wrap justify-between gap-y-[18px] pt-[18px] px-2 md:gap-x-5 md:gap-y-5 md:pt-5 md:px-3">
          <div className="box-border caret-transparent gap-x-1 flex flex-col gap-y-1">
            <div className="text-[22px] font-semibold box-border caret-transparent leading-[30px] md:text-[28px] md:leading-9">
              {props.name}
            </div>
            <div className="text-zinc-600 box-border caret-transparent">
              <div className="text-lg box-border caret-transparent leading-[30px] md:text-xl md:leading-7">
                {props.role}
              </div>
            </div>
          </div>
          <a
            href={props.socialUrl}
            className="text-cyan-950 items-center bg-white box-border caret-transparent flex h-10 justify-center max-w-full underline w-10 border border-gray-700 rounded-[50%] border-solid md:h-14 md:w-14"
          >
            <div className="box-border caret-transparent h-6 w-6 md:h-8 md:w-8 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-left after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
              <img
                src={props.socialIconUrl}
                alt="Icon"
                className="box-border caret-transparent h-full w-full"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
