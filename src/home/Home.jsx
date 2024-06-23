import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Button } from "@mui/material";
import Dots from "../assests/Dots.png";
import Union from "../assests/Union.png";
import Project from "../components/projectCard/Project";
import Skills from "../components/skills/Skills";
import About from "../components/about/About";
import Contact from "../components/contacts/Contact";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="container__home">
        <Navbar />

        <div className="herosection">
          <div className="section__content">
            <span className="section__info">
              <h1>MXXXX is a web designer and front-end developer</h1>
              <h3>
                He crafts responsive websites where technologies meet creativity
              </h3>
              <Button className="hero_btn" variant="outlined">
                Contact me!!
              </Button>
            </span>
            <span>
              <img src={Dots} />
              <img src={Union} />
            </span>
          </div>
        </div>
        <div className="quote__container">
          <div className="quote-box">
            <div className="top-box">
              With great power comes great electricity bill
            </div>
            <div className="bottom-box">- Dr. Who</div>
          </div>
        </div>

        <Project />
        <Skills />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default Home;
