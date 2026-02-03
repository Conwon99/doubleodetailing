import { NewsletterForm } from "@/sections/NewsletterSection/components/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <section className="relative text-white bg-cyan-950 box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-center md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent blur-0 basis-[0%] grow">
              <h1 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                Subscribe to Our  
                <br className="text-3xl box-border caret-transparent leading-[35px] md:text-[52px] md:leading-[62px]" />
                ‍
                <span className="text-3xl italic box-border caret-transparent leading-[35px] font-playfair_display md:text-[52px] md:leading-[62px]">
                  Newsletter
                </span>
              </h1>
            </div>
            <div className="box-border caret-transparent blur-0 max-w-[568px] w-full">
              <NewsletterForm />
              <div
                role="region"
                aria-label="Email Form success"
                className="text-gray-700 bg-lime-300 box-border caret-transparent hidden text-center p-5"
              >
                <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                  Thank you! Your submission has been received!
                </div>
              </div>
              <div
                role="region"
                aria-label="Email Form failure"
                className="text-emerald-950 bg-red-100 box-border caret-transparent hidden text-center mt-2.5 p-2.5"
              >
                <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
          </div>
          <div className="items-stretch box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 mt-[50px] md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:mt-20">
            <div className="box-border caret-transparent gap-x-6 flex blur-0 flex-col max-w-none gap-y-6 md:gap-x-5 md:max-w-[435px] md:gap-y-5">
              <a
                href="/"
                className="text-blue-700 box-border caret-transparent block blur-0 max-w-full underline"
              >
                <img
                  src="https://c.animaapp.com/mkllold3CHU3xz/assets/689bafd63b8c771c0fcb9750_Frame_7.svg"
                  alt="Logo White"
                  className="box-border caret-transparent inline-block max-w-full"
                />
              </a>
              <div className="text-slate-200/80 box-border caret-transparent">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  We’re dedicated to making your outdoors look its best. From
                  regular lawn mowing to complete garden care, our experienced
                  team delivers reliable service with a personal touch.
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent gap-x-6 flex blur-0 basis-[0%] grow flex-wrap auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-between max-w-none gap-y-6 md:gap-x-3 md:grid md:flex-nowrap md:grid-cols-[1fr_1fr_auto] md:justify-normal md:max-w-[495px] md:gap-y-8">
              <div className="items-start box-border caret-transparent gap-x-6 blur-0 auto-cols-[1fr] grid-cols-[0.5fr_1fr] grid-rows-[auto] justify-start gap-y-6 md:gap-x-10 md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-10">
                <div className="text-sm font-semibold box-border caret-transparent leading-7 uppercase md:text-xl md:leading-[30px]">
                  Navigation
                </div>
                <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5 mt-5 md:mt-6">
                  <a
                    href="/"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Home 01
                    </div>
                  </a>
                  <a
                    href="/home-02"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Home 02
                    </div>
                  </a>
                  <a
                    href="/pricing"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Pricing
                    </div>
                  </a>
                  <a
                    href="/contact"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Contact
                    </div>
                  </a>
                  <a
                    href="/project"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Project
                    </div>
                  </a>
                  <a
                    href="/blog"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Blog
                    </div>
                  </a>
                </div>
              </div>
              <div className="items-start box-border caret-transparent gap-x-6 blur-0 auto-cols-[1fr] grid-cols-[0.5fr_1fr] grid-rows-[auto] justify-start gap-y-6 md:gap-x-10 md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-10">
                <div className="text-sm font-semibold box-border caret-transparent leading-7 uppercase md:text-xl md:leading-[30px]">
                  Company
                </div>
                <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5 mt-5 md:mt-6">
                  <a
                    href="/service"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Service
                    </div>
                  </a>
                  <a
                    href="/about"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      About
                    </div>
                  </a>
                  <a
                    href="https://greenspire-template.webflow.io/post/comprehensive-lawn-garden-care-that-goes-beyond-the-basics----because-every-outdoor-space-deserves-expert-attention"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Blog Details
                    </div>
                  </a>
                  <a
                    href="https://greenspire-template.webflow.io/project/green-haven-backyard"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Project Details
                    </div>
                  </a>
                  <a
                    href="https://greenspire-template.webflow.io/service/fertilization-weed-control"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Service Details
                    </div>
                  </a>
                </div>
              </div>
              <div className="items-start box-border caret-transparent gap-x-6 blur-0 auto-cols-[1fr] grid-cols-[0.5fr_1fr] grid-rows-[auto] justify-start gap-y-6 md:gap-x-10 md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-10">
                <div className="text-sm font-semibold box-border caret-transparent leading-7 uppercase md:text-xl md:leading-[30px]">
                  Legal
                </div>
                <div className="box-border caret-transparent gap-x-2.5 flex flex-col gap-y-2.5 mt-5 md:mt-6">
                  <a
                    href="https://greenspire-template.webflow.io/404"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      404
                    </div>
                  </a>
                  <a
                    href="/reference/style-guide"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Style Guide
                    </div>
                  </a>
                  <a
                    href="/reference/license"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      License
                    </div>
                  </a>
                  <a
                    href="/reference/changelog"
                    className="text-slate-200/80 box-border caret-transparent block max-w-full hover:text-white hover:border-white"
                  >
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      Changelog
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-slate-200/80 items-center box-border caret-transparent gap-x-5 flex blur-0 flex-col justify-start gap-y-5 text-center mt-10 md:flex-row md:justify-between md:text-start md:mt-[60px]">
            <div className="box-border caret-transparent leading-[22px] text-center md:text-start">
              © 2025 Copywrite. All rights reserved.
            </div>
            <div className="items-center box-border caret-transparent gap-x-[18px] flex gap-y-[18px] text-center md:gap-x-5 md:gap-y-5 md:text-start">
              <a
                href="/privacy"
                className="box-border caret-transparent block max-w-full text-center md:text-start hover:text-white hover:border-white"
              >
                <div className="box-border caret-transparent leading-[22px] text-center md:text-start">
                  Privacy policy
                </div>
              </a>
            </div>
          </div>
          <div className="relative box-border caret-transparent flex blur-0 justify-center mt-2.5 md:-mt-1">
            <div className="relative bg-cyan-950 box-border caret-transparent gap-x-2 flex justify-center gap-y-2 z-[1] px-2.5">
              <a
                href="https://www.facebook.com/webflow"
                className="items-center backdrop-blur-[15px] box-border caret-transparent flex h-8 justify-center max-w-full underline w-8 border overflow-hidden rounded-[50%] border-solid border-white hover:text-cyan-950 hover:bg-emerald-200 hover:border-emerald-200"
              >
                <div className="box-border caret-transparent h-4 w-4 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                  <img
                    src="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-13.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-full w-full"
                  />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@webflow"
                className="items-center backdrop-blur-[15px] box-border caret-transparent flex h-8 justify-center max-w-full underline w-8 border overflow-hidden rounded-[50%] border-solid border-white hover:text-cyan-950 hover:bg-emerald-200 hover:border-emerald-200"
              >
                <div className="box-border caret-transparent h-4 w-4 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                  <img
                    src="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-14.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-full w-full"
                  />
                </div>
              </a>
              <a
                href="https://x.com/webflow"
                className="items-center backdrop-blur-[15px] box-border caret-transparent flex h-8 justify-center max-w-full underline w-8 border overflow-hidden rounded-[50%] border-solid border-white hover:text-cyan-950 hover:bg-emerald-200 hover:border-emerald-200"
              >
                <div className="box-border caret-transparent h-4 w-4 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                  <img
                    src="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-15.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-full w-full"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/webflow"
                className="items-center backdrop-blur-[15px] box-border caret-transparent flex h-8 justify-center max-w-full underline w-8 border overflow-hidden rounded-[50%] border-solid border-white hover:text-cyan-950 hover:bg-emerald-200 hover:border-emerald-200"
              >
                <div className="box-border caret-transparent h-4 w-4 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                  <img
                    src="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-16.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-full w-full"
                  />
                </div>
              </a>
            </div>
            <div className="absolute bg-white box-border caret-transparent h-px opacity-10 w-full top-2/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
