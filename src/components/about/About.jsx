import React from "react";
import aboutme from "../../assets/aboutme.png";

const About = () => {
  return (
    <div className="mt-10 py-1 sm:py-20">
      <div className="sectiontitle__head">
        <h2 className="text-gray text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="text-purple">#</span>about me
        </h2>
        <div className="horizontal__line"></div>
      </div>

      <div className="mt-10 flex">
        <div className="flex flex-col w-full lg:w-full align-center justify-between sm:flex-col md:flex-col lg:flex-row sm:gap-16 md:gap-16 lg:gap-20">
          <img className="mb-10 hidden lg:block" src={aboutme} alt="maero" />
          <div className="flex flex-col gap-5 w-full text-left my-auto lg:text-right sm:text-left">
            <p className="tracking-wider">Hello, i'm Maero!</p>
            <p className="tracking-wider">
              I'm a self-taught front-end developer based in Lagos, Nigeria,
              passionate about crafting user-centric web experiences. I have a
              strong foundation in building responsive websites from scratch,
              transforming them into modern and engaging interfaces.
            </p>
            <p className="tracking-wider">
              Transforming my creativity and knowledge into user-friendly
              websites has been my passion for over a year. It's incredibly
              rewarding to take an idea and weave it into a digital experience
              that not only looks sharp, but also makes users' lives easier. As
              a self-taught front-end developer based in Lagos, Nigeria, I've
              honed my skills in building responsive websites from scratch. I
              don't just build websites, I transform them - taking them from
              basic concepts to modern and engaging interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
