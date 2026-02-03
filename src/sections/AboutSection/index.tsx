import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section className="box-border caret-transparent pb-[60px] md:pb-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <AboutContent />
      </div>
    </section>
  );
};
