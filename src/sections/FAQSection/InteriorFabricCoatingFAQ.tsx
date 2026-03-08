import { useState } from "react";

const faqs: { question: string; answer: string }[] = [
  { question: "What does fabric coating do?", answer: "Fabric coating creates a barrier that repels liquids and dirt from upholstery, carpets, and mats. Spills bead off and are easier to wipe away, and the interior stays cleaner for longer." },
  { question: "How long does it last?", answer: "Depending on use and product, fabric coating can last from several months to a year or more. We'll advise on aftercare. Avoiding harsh cleaners helps maintain the protection." },
  { question: "Is it safe for all fabrics?", answer: "We use products designed for automotive upholstery and carpets. We assess the material before application and can advise if your interior is suitable." },
  { question: "Do you come to me?", answer: "Yes. We're mobile and come to you. We need a suitable space and power. We cover Glasgow and the surrounding areas—get in touch to confirm." },
  { question: "What areas do you cover?", answer: "We're based in North Glasgow and cover Glasgow, Central Scotland, Stirling, and the surrounding areas. Contact us with your location and we'll confirm we can reach you." },
];

export const InteriorFabricCoatingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid w-fit"><span className="font-medium leading-[22px]">FAQ</span></div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">Interior Fabric Coating FAQs</h2>
          <div className="box-border flex flex-col gap-y-0 border border-neutral-200 rounded-xl overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-neutral-200 last:border-b-0">
                <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full text-left flex items-center justify-between gap-4 py-5 px-5 md:py-6 md:px-6 hover:bg-neutral-50 transition" aria-expanded={openIndex === index}>
                  <span className="font-heading uppercase text-base md:text-lg font-bold text-black">{faq.question}</span>
                  <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`} aria-hidden><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-[500px]" : "max-h-0"}`}><div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-[15px] leading-6 text-blue-700 md:text-base">{faq.answer}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
