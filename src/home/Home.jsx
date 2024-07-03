import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import { Button } from "@mui/material";
import Dots from "../assets/Dots.png";
import Union from "../assets/Union.png";
import Project from "../components/projectCard/Project";
import Skills from "../components/skills/Skills";
import About from "../components/about/About";
import Contact from "../components/contacts/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="px-24">
        <Navbar />
        <div className="container mx-auto">
          <div className="herosection">
            <div className="section__content">
              <span className="section__info">
                <h1>MXXXX is a web designer and front-end developer</h1>
                <h3>
                  He crafts responsive websites where technologies meet
                  creativity
                </h3>
                <Button className="hero_btn" variant="outlined">
                  Contact me!!
                </Button>
              </span>
              <span>
                <img src={Dots} alt="Dots" />
                <img src={Union} alt="Union" />
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
