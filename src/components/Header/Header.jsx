import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";
import { Button } from "@mui/material";
import Union from "../../assets/Union.png";
import { motion } from "framer-motion";
import { navigation } from "../../data";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="flex items-center justify-between py-10 top-0 z-50 w-full lg:py-10 md:py-10 sm:py-10"
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
            <NavLink
              key={item.name}
              className="navlink text-sm font-semibold leading-6 text-gray-900"
              exact
              activeClassName="active"
              to={item.href}
            >
              #{item.name}
            </NavLink>
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
                  <NavLink
                    key={item.name}
                    className="navlink -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                    exact
                    activeClassName="active"
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    #{item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <motion.div animate={{}}>
        <div className="herosection mt-24 relative isolate px-6 pt-14 lg:px-8">
          <div className="section__content flex overflow-hidden">
            <div className="section__info text-left">
              <h1 className="text-5xl font-bold tracking-wide">
                XXXXX is a <span className="text-purple">web designer </span>
                and
                <span className="text-purple"> front-end developer</span>
              </h1>
              <h3 className="mt-6 text-lg leading-8">
                He crafts responsive websites where technologies meet creativity
              </h3>
              <Button
                type="button"
                className="hero_btn py-2 px-4 rounded text-lg font-medium text-white"
              >
                Contact me!!
              </Button>
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
      </motion.div>
    </>
  );
};

export default Header;
