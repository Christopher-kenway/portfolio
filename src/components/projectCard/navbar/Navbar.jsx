import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png";
import ShortTextIcon from "@mui/icons-material/ShortText";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogPanel } from "@headlessui/react";
import "./Navbar.css";

const Navbar = () => {
  const navigation = [
    { name: "home", href: "/" },
    { name: "works", href: "/works" },
    { name: "about-me", href: "/about-me" },
    { name: "contacts", href: "/contacts" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 py-7 top-0 z-50 w-full">
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <img className="h-6 w-auto" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">
            {mobileMenuOpen ? "Close main menu" : "Open main menu"}
          </span>
          {mobileMenuOpen ? (
            <CloseIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <ShortTextIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <nav className="hidden lg:flex lg:flex-row lg:gap-8">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            className="navlink"
            exact="true"
            activeClassName="active"
            to={item.href}
          >
            #{item.name}
          </NavLink>
        ))}
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <DialogPanel className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-95 py-6">
          <div className="flex items-center justify-between px-4">
            <Link to="/" className="-m-1.5 p-1.5">
              <img className="h-6 w-auto" src={Logo} alt="Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close Menu</span>
              <CloseIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="mt-6 px-4">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    className="navlink block rounded-lg px-3 py-2 text-white"
                    exact="true"
                    activeClassName="active"
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    #{item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Navbar;
