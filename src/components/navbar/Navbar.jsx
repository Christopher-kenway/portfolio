import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assests/Logo.png";

const Navbar = () => {
  return (
    <div className="container__nav">
      <Link className="logo" to="/">
        <img src={Logo} alt="My logo" />
      </Link>
      <nav className="nav__navlinks">
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
