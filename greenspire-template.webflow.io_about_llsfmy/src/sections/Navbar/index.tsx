import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopNavigation } from "@/sections/Navbar/components/DesktopNavigation";
import { NavbarCTA } from "@/sections/Navbar/components/NavbarCTA";
import { MobileMenuToggle } from "@/sections/Navbar/components/MobileMenuToggle";

export const Navbar = () => {
  return (
    <div className="sticky bg-white box-border caret-transparent flex justify-center w-full z-[100] px-5 py-4 top-0 md:px-[30px]">
      <div
        role="banner"
        className="relative bg-transparent box-border caret-transparent flex justify-center max-w-full w-full z-[5] rounded-[100px] md:max-w-[1140px] before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist"
      >
        <div className="box-border caret-transparent basis-[0%] grow">
          <div className="relative items-center box-border caret-transparent gap-x-0 flex auto-cols-[1fr] grid-cols-[1fr_auto] grid-rows-[auto] justify-between gap-y-0 md:static md:grid-cols-[max-content_1fr_max-content]">
            <NavbarLogo />
            <DesktopNavigation />
            <div className="items-center box-border caret-transparent flex basis-auto grow-0 shrink-0 justify-end justify-self-end md:basis-[0%] md:grow md:shrink">
              <NavbarCTA />
              <MobileMenuToggle />
            </div>
          </div>
        </div>
        <div className="absolute box-border caret-transparent hidden w-full overflow-hidden top-full inset-x-0"></div>
      </div>
    </div>
  );
};
