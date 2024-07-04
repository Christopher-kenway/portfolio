import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "./Home.css";
import { Button } from "@mui/material";
import hero from "../assets/hero.jpg";
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
      <div className="pl-36 pr-4 mx-auto">
        <Navbar />
        <div className="container relative mx-auto">
          <div className="herosection">
            <div className="section__content  overflow-hidden">
              <div className="section__info relative  lg:px-8 gap-10 text-left z-40">
                <h1 className="">
                  MXXXX is a web designer and front-end developer
                </h1>
                <h3>
                  He crafts responsive websites where technologies meet
                  creativity
                </h3>
                <Button
                  type="button"
                  className="hero_btn -m-2.5 inline-flex items-center justify-center"
                  variant="outlined"
                >
                  Contact me!!
                </Button>
              </div>
              <img className="z-0" src={hero} alt="Hero" />
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
