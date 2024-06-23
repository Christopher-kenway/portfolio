import React from "react";
import { Typography } from "@mui/material";
import aboutme from "../../assests/aboutme.png";

import "./About.css";

const About = () => {
  return (
    <div className="about__Section">
      <div className="sectiontitle__head">
        <h2>#about me</h2>
        <div className="horizontal__line"></div>
      </div>
      <div className="about__content">
        <div className="typography">
          <Typography variant="body3" gutterBottom>
            Hello, i'm Maero!
          </Typography>
          <Typography variant="body3" gutterBottom>
            I'm a self-taught front-end developer based in Lagos, Nigeria. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </Typography>
          <Typography variant="body3" gutterBottom>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks..
          </Typography>
        </div>
        <img src={aboutme} alt="" />
      </div>
    </div>
  );
};

export default About;
