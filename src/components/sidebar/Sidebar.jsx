import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 md:w-10 lg:w-24">
      {/*VERTICAL LINE*/}
      <ul className="flex flex-col items-center justify-center h-full">
        <div className="w-px h-48 bg-gray-400"></div>
        <div className="flex flex-col items-center mt-4 gap-4">
          <NavLink to="#">
            <GitHubIcon className="social__icons" sx={{ fontSize: 21 }} />
          </NavLink>
          <NavLink to="#">
            <LinkedInIcon className="social__icons" sx={{ fontSize: 21 }} />
          </NavLink>
          <NavLink to="#">
            <InstagramIcon className="social__icons" sx={{ fontSize: 21 }} />
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
