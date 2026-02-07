import { useState } from "react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "Bookings",
    answer:
      "We require a 10% holding deposit to secure a booking, this will be reduced from your bill.",
  },
  {
    question: "Cancellation Policy",
    answer:
      "We request that you provide at least 48 hours notice for you cancelling your booking. Otherwise the deposit will be non-refundable.",
  },
  {
    question: "Payment & Receipts",
    answer:
      "Payment can be settled upfront or at the time of service, and please inform us if you would like a copy of the invoice provided to your email address.",
  },
  {
    question: "Time / Price",
    answer:
      "All timings and prices for services are based on a standard level of job at hand. Certain jobs will require more time using more materials and labour, thus the price could reflect this to bring the car back to the required satisfaction and quality.",
  },
  {
    question: "Social Media",
    answer:
      "Please let us know if you consent to your car being featured on our social media platforms.",
  },
  {
    question: "Belongings in Vehicle",
    answer:
      "We would appreciate if you could remove your belongings prior to the beginning of all services.",
  },
  {
    question: "Water + Power",
    answer:
      "We have our own power and water supply, thus we can operate anywhere that is convenient to you.",
  },
];

export const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid w-fit">
            <span className="font-medium leading-[22px]">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-refrigerator uppercase">
            Booking & Service Info
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
