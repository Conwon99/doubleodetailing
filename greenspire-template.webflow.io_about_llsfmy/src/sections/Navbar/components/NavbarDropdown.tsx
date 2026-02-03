export const NavbarDropdown = () => {
  return (
    <div className="relative items-start box-border caret-transparent flex flex-col text-left z-[900] mx-auto md:[align-items:normal] md:inline-block md:flex-row">
      <div
        role="button"
        className="relative items-center box-border caret-transparent flex text-center text-nowrap align-top mx-auto"
      >
        <div className="text-[15px] box-border caret-transparent leading-6 min-h-0 min-w-0 text-nowrap md:text-base md:min-h-[auto] md:min-w-[auto]">
          Pages
        </div>
        <img
          src="https://c.animaapp.com/mkllptvwihl2Ks/assets/667d12d98a8ab07b92556639_Frame_(6).svg"
          alt="Caret Down"
          className="box-border caret-transparent h-4 max-w-full min-h-0 min-w-0 text-nowrap w-4 ml-1 md:min-h-[auto] md:min-w-[auto]"
        />
      </div>
      <nav className="absolute bg-zinc-300 box-border caret-transparent hidden min-w-full">
        <div className="bg-gray-200 box-border caret-transparent gap-x-6 grid flex-wrap auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] justify-between gap-y-6 w-[262.5px] border-zinc-100 overflow-hidden mb-[30px] px-5 py-[30px] rounded-3xl border-b border-l border-r right-5 top-[22px] md:gap-x-[normal] md:flex md:flex-nowrap md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:gap-y-[normal] md:w-[513px] md:mb-0 md:px-10">
          <div className="box-border caret-transparent flex flex-col w-full md:w-auto">
            <div className="items-start box-border caret-transparent gap-x-6 flex flex-col auto-cols-[1fr] grid-cols-[0.5fr_1fr] grid-rows-[auto] justify-start gap-y-6 w-full md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:w-auto">
              <div className="text-sm font-medium box-border caret-transparent leading-5 md:text-base md:leading-6">
                Main Pages
              </div>
              <div className="items-start box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                <a
                  href="/"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Home 01
                  </div>
                </a>
                <a
                  href="/home-02"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Home 02
                  </div>
                </a>
                <a
                  href="/about"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    About us
                  </div>
                </a>
                <a
                  href="/project"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Projects
                  </div>
                </a>
                <a
                  href="/service"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Service
                  </div>
                </a>
                <a
                  href="/pricing"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Pricing
                  </div>
                </a>
                <a
                  href="/blog"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Blogs
                  </div>
                </a>
                <a
                  href="/contact"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Contact
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-neutral-200 box-border caret-transparent hidden w-full md:block md:w-px"></div>
          <div className="box-border caret-transparent flex flex-col w-full md:w-auto">
            <div className="items-start box-border caret-transparent gap-x-6 flex flex-col auto-cols-[1fr] grid-cols-[0.5fr_1fr] grid-rows-[auto] justify-start gap-y-6 w-full md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:w-auto">
              <div className="text-sm font-medium box-border caret-transparent leading-5 md:text-base md:leading-6">
                Inner Pages
              </div>
              <div className="items-start box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                <a
                  href="https://greenspire-template.webflow.io/project/cambridge-lawn-rescue"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Project Details
                  </div>
                </a>
                <a
                  href="https://greenspire-template.webflow.io/post/comprehensive-lawn-garden-care-that-goes-beyond-the-basics----because-every-outdoor-space-deserves-expert-attention"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Blog Details
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-neutral-200 box-border caret-transparent hidden w-full md:block md:w-px"></div>
          <div className="box-border caret-transparent flex flex-col w-full md:w-auto">
            <div className="items-start box-border caret-transparent gap-x-6 flex flex-col auto-cols-[1fr] grid-cols-[0.5fr_1fr] grid-rows-[auto] justify-start gap-y-6 w-full md:auto-cols-auto md:grid-cols-none md:grid-rows-none md:w-auto">
              <div className="text-sm font-medium box-border caret-transparent leading-5 md:text-base md:leading-6">
                Utility Pages
              </div>
              <div className="items-start box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
                <a
                  href="https://greenspire-template.webflow.io/404"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    404
                  </div>
                </a>
                <a
                  href="/reference/style-guide"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Styleguide
                  </div>
                </a>
                <a
                  href="/reference/license"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    License
                  </div>
                </a>
                <a
                  href="/reference/changelog"
                  className="text-stone-950 box-border caret-transparent block max-w-full"
                >
                  <div className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
                    Changelog
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
