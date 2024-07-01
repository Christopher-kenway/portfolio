import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 z-40 w-24 h-screen transition-transform -translate-x-full  sm:translate-x-0 sm:pr-12 md:pr-1"
      aria-label="Sidebar"
    >
      {/*VERTICAL LINE*/}
      <ul className="items-center flex flex-col">
        <div className="w-px h-48 bg-gray-400"></div>
        <NavLink className="items-center flex flex-col mt-2 gap-4">
          <GitHubIcon className="social__icons" sx={{ fontSize: 21 }} />
          <LinkedInIcon className="social__icons" sx={{ fontSize: 21 }} />
          <InstagramIcon className="social__icons" sx={{ fontSize: 21 }} />
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
