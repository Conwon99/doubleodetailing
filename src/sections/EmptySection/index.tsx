export type EmptySectionProps = {
  variant: string;
  showContent?: boolean;
  showGrid?: boolean;
  showList?: boolean;
};

export const EmptySection = (props: EmptySectionProps) => {
  return (
    <section className={`box-border caret-transparent ${props.variant}`}>
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        {props.showContent && (
          <div className="box-border caret-transparent">
            <div
              className={
                props.showList
                  ? "items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-end md:gap-x-10 md:flex-row md:gap-y-10"
                  : "box-border caret-transparent gap-x-4 flex flex-col gap-y-4"
              }
            ></div>
            {props.showGrid && (
              <div className="box-border caret-transparent">
                {props.showList ? (
                  <div
                    role="list"
                    className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-4 mt-10 md:grid-cols-[1fr_1fr_1fr] md:mt-14"
                  ></div>
                ) : (
                  <div className="box-border caret-transparent gap-x-[18px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto_auto] gap-y-[18px] mt-10 md:gap-x-5 md:grid-cols-[1fr_1fr] md:gap-y-5 md:mt-14"></div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
