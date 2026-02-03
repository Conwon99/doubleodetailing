import { DropdownMenu } from "@/sections/Navbar/components/DropdownMenu";

export const DesktopMenu = () => {
  return (
    <nav
      role="navigation"
      className="absolute box-border caret-transparent hidden basis-[0%] grow float-none justify-center min-h-0 min-w-0 md:relative md:flex md:float-right md:min-h-[auto] md:min-w-[auto]"
    >
      <ul
        role="list"
        className="absolute text-gray-700 items-start bg-white shadow-[rgba(0,0,0,0.05)_0px_8px_50px_0px] box-border caret-transparent gap-x-5 flex flex-col justify-around list-none max-h-[880px] min-h-0 min-w-0 gap-y-5 w-full overflow-auto mt-2.5 pt-5 pb-[30px] px-5 rounded-[20px] top-[0%] inset-x-[0%] md:static md:[align-items:normal] md:bg-transparent md:shadow-none md:gap-x-2 md:flex-row md:justify-normal md:max-h-none md:min-h-[auto] md:min-w-[auto] md:gap-y-2 md:w-auto md:overflow-visible md:mt-0 md:p-0 md:rounded-none md:top-auto md:inset-x-auto"
      >
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-4">
          <a
            href="/"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-700 hover:text-emerald-950 hover:border-emerald-950"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-gray-700 md:text-base md:min-h-[auto] md:min-w-[auto]">
              Home
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-4">
          <a
            href="/about"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-700 hover:text-emerald-950 hover:border-emerald-950"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-gray-700 md:text-base md:min-h-[auto] md:min-w-[auto]">
              About
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-4">
          <a
            href="/service"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-700 hover:text-emerald-950 hover:border-emerald-950"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-gray-700 md:text-base md:min-h-[auto] md:min-w-[auto]">
              Service
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-4">
          <a
            href="/blog"
            className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center md:text-gray-700 hover:text-emerald-950 hover:border-emerald-950"
          >
            <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-gray-700 md:text-base md:min-h-[auto] md:min-w-[auto]">
              Blog
            </div>
          </a>
        </li>
        <li className="box-border caret-transparent min-h-0 min-w-0 bg-[position:0px_0px] mx-0 md:min-h-[auto] md:min-w-[auto] md:mx-4">
          <DropdownMenu />
        </li>
      </ul>
    </nav>
  );
};
