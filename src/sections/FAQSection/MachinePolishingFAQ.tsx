import { useState } from "react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is machine polishing?",
    answer:
      "Machine polishing uses a dual-action or rotary polisher with pads and compounds to remove light defects, swirl marks, and oxidation from your paintwork. It restores clarity and gloss and can be done in one stage (single-stage) for enhancement or multiple stages (multi-stage) for deeper correction.",
  },
  {
    question: "How long does machine polishing take?",
    answer:
      "It depends on the vehicle size, condition, and the level of correction. A single-stage polish might take a day, while a full multi-stage correction with coating can take several days. We'll give you a clearer timeframe when we assess your vehicle.",
  },
  {
    question: "Can you polish my car at my home or workplace?",
    answer:
      "Yes. We're a mobile service and bring our equipment to you. We need a suitable space (driveway, garage, or similar) with access to power. We can discuss your location when you book.",
  },
  {
    question: "Do I need a ceramic coating after polishing?",
    answer:
      "It's not mandatory, but we recommend some form of protection—sealant, wax, or ceramic coating—after polishing. Polishing removes defects but also leaves the paint clean and ready for protection. A coating or sealant helps lock in the results and makes maintenance easier.",
  },
  {
    question: "Will machine polishing remove scratches?",
    answer:
      "It can reduce or remove light scratches, swirls, and marring. Deeper scratches that go through the clear coat may only be improved, not fully removed. We'll assess your paint and explain what's achievable before we start.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We're based in North Glasgow and cover Glasgow, Central Scotland, Stirling, and the surrounding areas. Get in touch with your location and we can confirm we can reach you.",
  },
];

export const MachinePolishingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid w-fit">
            <span className="font-medium leading-[22px]">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
            Machine Polishing FAQs
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
                  <span className="font-heading uppercase text-base md:text-lg font-bold text-black">
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
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-[15px] leading-6 text-neutral-700 md:text-base">
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
