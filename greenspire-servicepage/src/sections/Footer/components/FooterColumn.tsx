export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="items-start box-border caret-transparent gap-x-6 blur-0 auto-cols-[1fr] grid-cols-[0.5fr_1fr] grid-rows-[auto] justify-start gap-y-6 md:gap-x-10 md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-10">
      <div className="text-sm font-semibold box-border caret-transparent leading-7 uppercase md:text-xl md:leading-[30px]">
        {props.title}
      </div>
      <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5 mt-5 md:mt-6">
        {props.links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
          >
            <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
              {link.text}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
