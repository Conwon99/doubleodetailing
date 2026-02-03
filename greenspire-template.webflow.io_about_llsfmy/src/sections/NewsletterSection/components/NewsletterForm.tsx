export const NewsletterForm = () => {
  return (
    <form
      name="email-form"
      aria-label="Email Form"
      className="items-center box-border caret-transparent gap-x-2.5 flex flex-col max-w-[558px] gap-y-2.5 w-full md:gap-x-3 md:flex-row md:gap-y-3"
    >
      <input
        name="Email-2"
        placeholder="Enter your email address"
        type="email"
        className="bg-transparent bg-[url('https://cdn.prod.website-files.com/689a8e2467db11e41193d52c/689bbcd142c6f5287ae93e72_mail-01.svg')] bg-no-repeat bg-size-[16px_16px] box-border caret-transparent block h-[50px] leading-[22px] align-middle w-full border bg-[position:20px_50%] pl-11 pr-3 py-2 rounded-[90px] border-solid border-white"
      />
      <div className="relative box-border caret-transparent basis-[0%] grow max-w-none w-full md:max-w-[172px] md:w-auto">
        <div className="box-border caret-transparent flex">
          <a
            href="/contact"
            className="text-cyan-950 items-center bg-emerald-200 box-border caret-transparent gap-x-5 flex justify-between max-w-full gap-y-5 text-center w-full border pl-6 pr-1 py-1 rounded-[100px] border-solid border-transparent hover:bg-white hover:border-emerald-950"
          >
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent">
                <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                  Subscribe
                </div>
              </div>
              <div className="absolute box-border caret-transparent w-full">
                <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                  Subscribe
                </div>
              </div>
            </div>
            <div className="text-emerald-200 items-center bg-cyan-950 box-border caret-transparent flex h-12 justify-center w-12 overflow-hidden rounded-[50%]">
              <div className="relative box-border caret-transparent">
                <div className="box-border caret-transparent">
                  <div className="box-border caret-transparent h-3.5 w-3.5 before:accent-auto before:caret-transparent before:text-emerald-200 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-200 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-4.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-full w-full"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[-200%] box-border caret-transparent left-[-200%]">
                  <div className="box-border caret-transparent h-3.5 w-3.5 before:accent-auto before:caret-transparent before:text-emerald-200 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-200 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                    <img
                      src="https://c.animaapp.com/mkllptvwihl2Ks/assets/icon-4.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <iframe
            src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rchZzWGtVeB_vW_4C.GVevX7e9Vup_V1y6CSAzU_UqLz5g-1768853536-1.3.1.1-QVnH_RDIK2gnmY2bWs013Mm82BDxfwYoClsbdOl.K6k/2cfpe/0x4AAAAAAAQTptj2So4dx43e/auto/fbE/failure_retry/normal?lang=auto"
            title="Widget containing a Cloudflare security challenge"
          ></iframe>
          <input
            type="hidden"
            name="cf-turnstile-response"
            value=""
            className="text-black text-base bg-transparent box-border caret-transparent hidden leading-[normal] p-0 font-times_new_roman"
          />
        </div>
      </div>
    </form>
  );
};
