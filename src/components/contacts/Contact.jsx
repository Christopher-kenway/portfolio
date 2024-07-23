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

      <div className="mt-5 mx-auto flex flex-col lg:flex-row sm:flex-col justify-between">
        <div className="">
          <p className="mb-4 leading-8">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me
          </p>
        </div>
        <div className="border  p-5 gap-4 flex flex-col">
          <span>message me here</span>
          <Link>
            <GitHub className="" sx={{ fontSize: 20 }} />
            {"Christopher-kenway"}
          </Link>
          <Link>
            <Mail className="" sx={{ fontSize: 20 }} />
            {"maero1eguwe@gmail.com"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
