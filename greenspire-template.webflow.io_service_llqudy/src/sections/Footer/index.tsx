import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const Footer = () => {
  return (
    <div className="items-stretch box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 mt-[50px] md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:mt-20">
      <FooterBrand />
      <div className="box-border caret-transparent gap-x-6 flex blur-0 basis-[0%] grow flex-wrap auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-between max-w-none gap-y-6 md:gap-x-3 md:grid md:flex-nowrap md:grid-cols-[1fr_1fr_auto] md:justify-normal md:max-w-[495px] md:gap-y-8">
        <FooterColumn
          title="Navigation"
          links={[
            { href: "/", text: "Home 01" },
            { href: "/home-02", text: "Home 02" },
            { href: "/pricing", text: "Pricing" },
            { href: "/contact", text: "Contact" },
            { href: "/project", text: "Project" },
            { href: "/blog", text: "Blog" },
          ]}
        />
        <FooterColumn
          title="Company"
          links={[
            { href: "/service", text: "Service" },
            { href: "/about", text: "About" },
            {
              href: "https://greenspire-template.webflow.io/post/comprehensive-lawn-garden-care-that-goes-beyond-the-basics----because-every-outdoor-space-deserves-expert-attention",
              text: "Blog Details",
            },
            {
              href: "https://greenspire-template.webflow.io/project/green-haven-backyard",
              text: "Project Details",
            },
            {
              href: "https://greenspire-template.webflow.io/service/fertilization-weed-control",
              text: "Service Details",
            },
          ]}
        />
        <FooterColumn
          title="Legal"
          links={[
            { href: "https://greenspire-template.webflow.io/404", text: "404" },
            { href: "/reference/style-guide", text: "Style Guide" },
            { href: "/reference/license", text: "License" },
            { href: "/reference/changelog", text: "Changelog" },
          ]}
        />
      </div>
    </div>
  );
};
