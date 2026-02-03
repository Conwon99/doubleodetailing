export type ProcessCardProps = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
};

export const ProcessCard = (props: ProcessCardProps) => {
  return (
    <div className="static items-center bg-neutral-100 box-border caret-transparent gap-x-6 flex flex-col gap-y-6 p-6 rounded-xl top-[100px] md:sticky md:gap-x-8 md:flex-row md:gap-y-8 md:p-8">
      <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-40 max-w-none w-full overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[180px] md:max-w-[200px] md:w-auto">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
        />
      </div>
      <div className="box-border caret-transparent gap-x-[18px] flex basis-[0%] flex-col grow gap-y-[18px] md:gap-x-5 md:gap-y-5">
        <div className="text-2xl font-bold box-border caret-transparent leading-[30px] md:text-[32px] md:leading-10 font-refrigerator uppercase">
          {props.title}
        </div>
        <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
          {props.description}
        </div>
      </div>
    </div>
  );
};
