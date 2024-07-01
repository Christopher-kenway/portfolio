import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assests/Logo.png";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { Dialog, DialogPanel } from "@headlessui/react";
import CloseIcon from "@mui/icons-material/Close";
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
      <div className="flex lg:hidden flex-1 items-end justify-end">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <ShortTextIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <nav className="hidden lg:flex lg:flex-row lg:gap-8">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            className="navlink"
            exact
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
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-24 py-6">
          <div className="flex flex-1 items-end justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close Menu</span>
              <CloseIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="mt-6 flow-root">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                className="navlink -mx-3 block rounded-lg px-3 py-2"
                exact
                activeClassName="active"
                to={item.href}
              >
                #{item.name}
              </NavLink>
            ))}
          </nav>
        </DialogPanel>
      </Dialog>
    </div>
  );
};

export default Navbar;
