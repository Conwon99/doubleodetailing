import { useState } from "react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is a ceramic coating?",
    answer:
      "A ceramic coating is a liquid polymer that bonds to your paint and cures to form a hard, hydrophobic layer. It protects against UV, chemicals, and light contamination, and makes washing easier because water and dirt bead off. We offer 1-year and 2-year coatings.",
  },
  {
    question: "Do I need machine polishing before a ceramic coating?",
    answer:
      "We recommend it for the best result. Coatings bond to the surface as it is—so any defects, swirls, or oxidation will be sealed in. A machine polish first removes those defects and leaves a clean, smooth surface so the coating looks and performs at its best. We can discuss prep options based on your vehicle and budget.",
  },
  {
    question: "How long does ceramic coating last?",
    answer:
      "Our packages include 1-year and 2-year ceramic coating options. How long they look their best depends on how the car is washed and maintained. We’ll give you aftercare advice so you get the full benefit of the protection.",
  },
  {
    question: "Can you apply ceramic coating at my home?",
    answer:
      "Yes. We’re a mobile service and bring everything needed to prep and apply the coating to you. We need a suitable space (e.g. driveway or garage) and access to power. Get in touch with your location and we can confirm we cover you.",
  },
  {
    question: "What’s the difference between 1-year and 2-year coating?",
    answer:
      "The 2-year coating typically offers longer durability and may have slightly better resistance to contaminants and washing. We can talk through the options and pricing when you get a quote.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We’re based in North Glasgow and cover Glasgow, Central Scotland, Stirling, and the surrounding areas. Contact us with your location and we’ll confirm we can reach you.",
  },
];

export const CeramicCoatingsFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid w-fit">
            <span className="font-medium leading-[22px]">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-refrigerator uppercase">
            Ceramic Coatings FAQs
          </h2>
          <div className="box-border flex flex-col gap-y-0 border border-neutral-200 rounded-xl overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-neutral-200 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 py-5 px-5 md:py-6 md:px-6 hover:bg-neutral-50 transition"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-[15px] leading-6 text-gray-700 md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
