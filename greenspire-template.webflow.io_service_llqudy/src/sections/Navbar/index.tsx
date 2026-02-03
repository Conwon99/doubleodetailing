import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { DesktopMenu } from "@/sections/Navbar/components/DesktopMenu";
import { MobileMenuToggle } from "@/sections/Navbar/components/MobileMenuToggle";

export const Navbar = () => {
  return (
    <div className="sticky bg-white box-border caret-transparent flex justify-center w-full z-[100] px-5 py-4 top-0 md:px-[30px]">
      <div
        role="banner"
        className="relative bg-transparent box-border caret-transparent flex justify-center max-w-full w-full z-[5] rounded-[100px] md:max-w-[1140px] before:accent-auto before:caret-transparent before:text-emerald-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-emerald-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist"
      >
        <div className="box-border caret-transparent basis-[0%] grow">
          <div className="relative items-center box-border caret-transparent gap-x-0 flex auto-cols-[1fr] grid-cols-[1fr_auto] grid-rows-[auto] justify-between gap-y-0 md:static md:grid-cols-[max-content_1fr_max-content]">
            <NavbarLogo />
            <DesktopMenu />
            <div className="items-center box-border caret-transparent flex basis-auto grow-0 shrink-0 justify-end justify-self-end md:basis-[0%] md:grow md:shrink">
              <div className="items-center box-border caret-transparent gap-x-1 hidden min-h-0 min-w-0 gap-y-1 md:flex md:min-h-[auto] md:min-w-[auto]">
                <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                  <div className="box-border caret-transparent flex">
                    <a
                      href="/contact"
                      className="text-cyan-950 items-center bg-transparent box-border caret-transparent gap-x-2 flex justify-between max-w-full min-h-0 min-w-0 gap-y-2 text-center w-full border pl-2 pr-1 py-1 rounded-[100px] border-solid border-transparent md:min-h-[auto] md:min-w-[auto] md:pl-3 hover:bg-white hover:border-transparent"
                    >
                      <div className="relative box-border caret-transparent min-h-0 min-w-0 overflow-hidden md:min-h-[auto] md:min-w-[auto]">
                        <div className="box-border caret-transparent">
                          <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                            Get Started
                          </div>
                        </div>
                        <div className="absolute box-border caret-transparent w-full">
                          <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                            Get Started
                          </div>
                        </div>
                      </div>
                      <div className="text-emerald-200 items-center bg-cyan-950 box-border caret-transparent flex h-8 justify-center min-h-0 min-w-0 w-8 overflow-hidden rounded-[50%] md:min-h-[auto] md:min-w-[auto]">
                        <div className="relative box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                          <div className="box-border caret-transparent">
                            <div className="items-center box-border caret-transparent flex h-2 justify-center w-2 before:accent-auto before:caret-transparent before:text-emerald-200 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-emerald-200 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist after:md:min-h-[auto] after:md:min-w-[auto]">
                              <img
                                src="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-1.svg"
                                alt="Icon"
                                className="box-border caret-transparent h-full w-full"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-[-200%] box-border caret-transparent left-[-200%]">
                            <div className="items-center box-border caret-transparent flex h-2 justify-center w-2 before:accent-auto before:caret-transparent before:text-emerald-200 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:min-h-0 before:min-w-0 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist before:md:min-h-[auto] before:md:min-w-[auto] after:accent-auto after:caret-transparent after:clear-both after:text-emerald-200 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:min-h-0 after:min-w-0 after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist after:md:min-h-[auto] after:md:min-w-[auto]">
                              <img
                                src="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-1.svg"
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
                <div className="box-border caret-transparent hidden">
                  <div className="box-border caret-transparent flex">
                    <a
                      href="/contact"
                      className="text-cyan-950 items-center bg-emerald-200 box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border px-4 py-2 rounded-[100px] border-solid border-transparent hover:bg-white hover:border-emerald-950"
                    >
                      <div className="relative box-border caret-transparent overflow-hidden">
                        <div className="box-border caret-transparent">
                          <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                            Get Started
                          </div>
                        </div>
                        <div className="absolute box-border caret-transparent w-full">
                          <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                            Get Started
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent">
                        <div className="items-center box-border caret-transparent flex h-4 justify-center w-4 before:accent-auto before:caret-transparent before:text-cyan-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-cyan-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                          <img
                            src="https://c.animaapp.com/mkllold3CHU3xz/assets/icon-2.svg"
                            alt="Icon"
                            className="box-border caret-transparent h-2 w-3"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <MobileMenuToggle />
            </div>
          </div>
        </div>
        <div className="absolute box-border caret-transparent hidden w-full overflow-hidden top-full inset-x-0"></div>
      </div>
    </div>
  );
};
