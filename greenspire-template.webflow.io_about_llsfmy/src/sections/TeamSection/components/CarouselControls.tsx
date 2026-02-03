export type CarouselControlsProps = {
  direction: "previous" | "next";
  iconSrc: string;
  variant: string;
};

export const CarouselControls = (props: CarouselControlsProps) => {
  return (
    <div
      role="button"
      aria-label={`${props.direction} slide`}
      className={`absolute text-cyan-950 text-[40px] items-center box-border caret-transparent flex h-11 justify-center w-11 border border-neutral-200 overflow-hidden m-auto rounded-[50%] border-solid -top-20 md:top-[-100px] hover:text-emerald-200 hover:bg-cyan-950 hover:border-cyan-950 ${props.variant}`}
    >
      <div className="items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-[40px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-[40px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
        <img
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-6 w-6"
        />
      </div>
    </div>
  );
};
