import React from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Sidebar = () => {
  return (
    <div className="sidebar__nav">
      <div className="vl"></div>
      <ul>
        <NavLink className="link__icons">
          <GitHubIcon className="social__icons" sx={{ fontSize: 21 }} />
          <LinkedInIcon className="social__icons" sx={{ fontSize: 21 }} />
          <InstagramIcon className="social__icons" sx={{ fontSize: 21 }} />
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
