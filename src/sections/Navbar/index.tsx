import { NavbarContainer } from "@/sections/Navbar/components/NavbarContainer";

export const Navbar = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-white box-border caret-transparent flex justify-center w-full z-[9999] px-5 py-2 top-0 md:px-[30px] md:py-2">
      <NavbarContainer />
    </div>
  );
};
