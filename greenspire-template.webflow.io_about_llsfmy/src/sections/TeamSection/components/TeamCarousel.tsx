import { TeamMemberCard } from "@/sections/TeamSection/components/TeamMemberCard";

export const TeamCarousel = () => {
  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative bg-transparent box-border caret-transparent clear-both blur-0 text-center mt-20 md:mt-14"
    >
      <div className="relative box-border caret-transparent h-full max-w-[350px] text-nowrap z-[1] inset-x-0 md:max-w-[400px]">
        <TeamMemberCard
          ariaLabel="1 of 4"
          imageUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a7732a9ab3bb2de22197d3_Frame_1597882116.webp"
          imageAlt="Team 02"
          name="Darlene Robertson"
          role="Client Service Coordinator"
          socialUrl="https://www.instagram.com/webflow"
          socialIconUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-11.svg"
        />
        <TeamMemberCard
          ariaLabel="2 of 4"
          imageUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a7732a900b1d7157a68a45_Frame_1597882116-1.webp"
          imageAlt="Team 04"
          name="Darrell Steward"
          role="Garden Specialist"
          socialUrl="https://www.instagram.com/webflow"
          socialIconUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-12.svg"
        />
        <TeamMemberCard
          ariaLabel="3 of 4"
          imageUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a7732a81ee613ec1620bd8_Frame_1597882116-2.webp"
          imageAlt="Team 03"
          name="Albert Flores"
          role="Landscape Designer"
          socialUrl="https://www.instagram.com/webflow"
          socialIconUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-12.svg"
        />
        <TeamMemberCard
          ariaLabel="4 of 4"
          imageUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/68a7732a97aea8e726a4e4c7_Frame_1597882116-3.webp"
          imageAlt="Team 01"
          name="Leslie Alexander"
          role="Lawn Care Specialist"
          socialUrl="https://www.instagram.com/webflow"
          socialIconUrl="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-12.svg"
        />
      </div>
      <div
        role="button"
        aria-label="previous slide"
        className="absolute text-cyan-950 text-[40px] items-center box-border caret-transparent flex h-11 justify-center w-11 z-[3] border border-neutral-200 overflow-hidden m-auto rounded-[50%] border-solid right-[60px] -top-20 md:top-[-100px] hover:text-emerald-200 hover:bg-cyan-950 hover:border-cyan-950"
      >
        <div className="items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-[40px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-[40px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
          <img
            src="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-13.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 w-6"
          />
        </div>
      </div>
      <div
        role="button"
        aria-label="next slide"
        className="absolute text-cyan-950 text-[40px] items-center box-border caret-transparent flex h-11 justify-center w-11 z-[4] border border-neutral-200 overflow-hidden m-auto rounded-[50%] border-solid right-[0%] -top-20 md:top-[-100px] hover:text-emerald-200 hover:bg-cyan-950 hover:border-cyan-950"
      >
        <div className="items-center box-border caret-transparent flex h-6 justify-center w-6 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-[40px] before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-[40px] after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
          <img
            src="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-14.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 w-6"
          />
        </div>
      </div>
    </div>
  );
};
