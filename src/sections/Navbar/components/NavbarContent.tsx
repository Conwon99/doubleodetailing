import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { NavActions } from "@/sections/Navbar/components/NavActions";
import { MobileNav } from "@/sections/Navbar/components/MobileNav";

export const NavbarContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-0 flex auto-cols-[1fr] grid-cols-[1fr_auto] grid-rows-[auto] justify-between gap-y-0 md:static md:grid-cols-[max-content_1fr_max-content]">
      <Logo />
      <DesktopNav />
      <NavActions />
      <MobileNav />
    </div>
  );
};
