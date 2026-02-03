import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

export const Footer = () => {
  return (
    <div className="items-stretch box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 mt-[50px] md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:mt-20">
      <FooterBrand />
      <FooterLinks />
    </div>
  );
};
