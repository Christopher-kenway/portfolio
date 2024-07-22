import React from "react";
import "./Contact.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import GitHub from "@mui/icons-material/GitHub";
import { Mail } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="mt-9 mb-9">
      <div className="sectiontitle__head">
        <h2 className="text-white">
          <span className="text-purple">#</span>contacts
        </h2>
        <div className="horizontal__line"></div>
      </div>

      <div className="contact__info">
        <p>
          I'm interested in freelance opportunities. However, if you have other
          request or question, don't hesitate to contact me
        </p>
        <div className="socials__box">
          message me here
          <Link>
            <GitHub className="social__icons" sx={{ fontSize: 21 }} />
            {"Christopher-kenway"}
          </Link>
          <Link>
            <Mail className="social__icons" sx={{ fontSize: 21 }} />
            {"maero1eguwe@gmail.com"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
