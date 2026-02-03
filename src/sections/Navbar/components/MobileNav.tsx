import { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        aria-label="menu"
        aria-expanded={isOpen}
        className="relative text-white text-2xl box-border caret-transparent block float-right min-h-[auto] min-w-[auto] p-3 md:hidden"
      >
        <div className="text-white box-border caret-transparent w-6 h-6">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[99] md:hidden"
            onClick={closeMenu}
          ></div>
          <nav
            role="navigation"
            className="fixed top-20 left-5 right-5 bg-white shadow-[rgba(0,0,0,0.05)_0px_8px_50px_0px] box-border caret-transparent rounded-[20px] z-[100] md:hidden"
          >
            <ul
              role="list"
              className="box-border caret-transparent gap-x-5 flex flex-col list-none gap-y-5 pt-5 pb-[30px] px-5"
            >
              <li>
                <a
                  href="/"
                  onClick={closeMenu}
                  className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center hover:text-cta"
                >
                  <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6">
                    Home
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={closeMenu}
                  className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center hover:text-cta"
                >
                  <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6">
                    About
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={closeMenu}
                  className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center hover:text-cta"
                >
                  <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6">
                    Services & Pricing
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={closeMenu}
                  className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center hover:text-cta"
                >
                  <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6">
                    Terms
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center hover:text-cta"
                >
                  <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6">
                    Facebook
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ampmwatch_repair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-slate-900 box-border caret-transparent flex justify-center max-w-full text-center hover:text-cta"
                >
                  <div className="text-slate-900 text-[15px] box-border caret-transparent leading-6">
                    Instagram
                  </div>
                </a>
              </li>
            </ul>
            <div className="box-border caret-transparent px-5 pb-5">
              <a
                href="/contact"
                onClick={closeMenu}
                className="text-white items-center bg-cta box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border border-cta px-6 py-3 rounded-[100px] border-solid hover:bg-cta-dark w-full justify-center"
              >
                <div className="relative box-border caret-transparent overflow-hidden">
                  <div className="box-border caret-transparent">
                    <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                      Message Us
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent">
                  <div className="items-center box-border caret-transparent flex h-4 justify-center w-4">
                    <img
                      src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-8.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-2 w-3"
                    />
                  </div>
                </div>
              </a>
            </div>
          </nav>
        </>
      )}
    </>
  );
};
