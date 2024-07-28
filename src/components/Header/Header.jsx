import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/Logo.png";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";
import { Button, duration } from "@mui/material";
import { navigation } from "../../data";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/gsap-core";
import { Opacity } from "@mui/icons-material";
import OutboundIcon from "@mui/icons-material/Outbound";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const header = useRef(null);
  const content = useRef(null);

  useGSAP(() => {
    gsap.to(".irotate", {
      rotation: 360,
      duration: 1,
      repeat: 1,
      scale: 1.1,
      repeatDelay: 1,
    });
  });

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    // Set visibility of header to visible
    gsap.to(header.current, { visibility: "visible" });

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title1", "#title2", "#title3", "#title4", "#title5"], {
        opacity: 0,
        y: "+=250",

        ease: "circ.out",
        duration: 1.5,
        stagger: 0.5,
      });
    }, content);
    return () => ctx.revert();
  }, []);

  return (
    <div className="max-h-screen">
      <nav
        className={`navbar ${
          isScrolled ? "navbar-scrolled" : "navbar-default"
        } navbar-margin flex items-center justify-between py-10 lg:py-8 md:py-10 sm:py-10`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="flex-shrink-0">
            <img className="h-6 w-auto" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              className="navlink text-sm font-semibold leading-6 text-gray-900"
              exact
              activeClassName="active"
              href={`#${item.href}`}
            >
              #{item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full h-full overflow-y-auto bg-[#282C33] px-4 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-6 w-auto" src={Logo} alt="Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>

              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    className="navlink -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                    exact
                    activeClassName="active"
                    to={`#${item.href}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    #{item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      <div className="herosection" ref={header}>
        <div className="mt-1 relative isolate">
          <div className="section__content flex overflow-hidden">
            <div ref={content} className="section__info w-full">
              <h1 id="title1" className="text-9xl font-bold tracking-wide">
                Creative
              </h1>
              <h1
                id="title2"
                className="text-purple text-9xl font-bold tracking-wider"
              >
                Web designer
              </h1>
              <h1 id="title3" className="text-9xl font-bold tracking-wide">
                And
              </h1>
              <h1
                id="title4"
                className=" flex text-purple text-9xl font-bold tracking-wider items-center"
              >
                Web devel
                <span>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <OutboundIcon
                      className="irotate"
                      sx={{ fontSize: 92, marginTop: 3 }}
                    />
                  </a>
                </span>
                per
              </h1>
              <h3
                id="title5"
                className="mt-2 text-lg leading-8 italic text-wider"
              >
                Crafting responsive websites where technologies meet creativity
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <div className="quote-box">
            <div className="top-box">
              With great power comes great electricity bill
            </div>
            <div className="bottom-box">- Dr. Who</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
