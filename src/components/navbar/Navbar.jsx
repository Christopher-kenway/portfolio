import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assests/Logo.png";
import { useState } from "react";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { Dialog, DialogPanel } from "@headlessui/react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState();
  return (
    <div className=" flex items-center justify-between px-0 py-7 top-0 z-50 w-full">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <img className="h-6 w-auto" src={Logo} alt="" />
        </a>
      </div>
      <nav className="flex flex-row gap-8">
        <NavLink
          className="navlink"
          exact={true}
          activeClassName="active"
          to="/"
        >
          #home
        </NavLink>
        <NavLink
          className="navlink"
          exact={true}
          activeClassName="active"
          to="/"
        >
          #works
        </NavLink>
        <NavLink
          className="navlink"
          exact={true}
          activeClassName="active"
          to="/"
        >
          #about-me
        </NavLink>
        <NavLink
          className="navlink"
          exact={true}
          activeClassName="active"
          to="/"
        >
          #contacts
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
