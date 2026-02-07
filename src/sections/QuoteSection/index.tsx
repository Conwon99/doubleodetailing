import { QuoteForm } from "./components/QuoteForm";
import { TermsAndConditions } from "./components/TermsAndConditions";

export type QuoteSectionProps = {
  showTerms?: boolean;
};

export const QuoteSection = ({ showTerms = true }: QuoteSectionProps) => {
  return (
    <section id="contact" className="relative bg-cover bg-center bg-no-repeat pt-[120px] pb-[60px] md:pt-[150px] md:pb-[100px]" style={{ backgroundImage: `url('/gallery/WhatsApp Image 2026-02-02 at 11.18.23 PM (3).jpeg')` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center gap-y-8 md:gap-y-12">
          <div className="text-center">
            <div className="inline-block border border-white/30 px-3 py-1 rounded-[1000px] mb-4">
              <div className="font-medium text-white leading-[22px]">
                Get a Quote
              </div>
            </div>
            <h2 className="text-[44px] font-bold text-white tracking-[-1.44px] leading-[52px] md:text-7xl md:leading-[80px] font-refrigerator uppercase">
              Request a{" "}
              <span className="text-[44px] leading-[52px] font-refrigerator uppercase md:text-7xl md:leading-[80px]">
                Free Quote
              </span>
            </h2>
            <p className="text-white/90 text-[15px] leading-6 mt-4 max-w-[600px] mx-auto md:text-base">
              Fill out the form below and we'll get back to you with a personalized quote for your car detailing or valeting needs.
            </p>
          </div>
          <QuoteForm />
          <div className="w-full max-w-[700px] bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/20">
            <div className="text-center">
              <div className="text-lg font-medium text-white mb-4 md:text-xl">
                Contact Us Directly
              </div>
              <div className="flex flex-col items-center gap-y-4">
                <div className="flex items-center gap-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a 
                    href="tel:07768243728" 
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        const pathname = window.location.pathname;
                        let eventName = 'phone_hero';
                        
                        if (pathname.includes('/services')) {
                          eventName = 'phone_services';
                        }
                        
                        (window as any).gtag('event', eventName, {
                          event_category: 'Phone',
                          event_label: pathname
                        });
                      }
                    }}
                    className="text-white text-xl font-medium hover:text-cta transition-colors md:text-2xl"
                  >
                    07768 243 728
                  </a>
                </div>
                <div className="text-white/80 text-[15px] md:text-base">
                  Glasgow + Stirling, Central Scotland
                </div>
              </div>
            </div>
          </div>
          {showTerms && <TermsAndConditions />}
        </div>
      </div>
    </section>
  );
};
