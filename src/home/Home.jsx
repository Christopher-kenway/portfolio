import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/Header/Header";
import "./Home.css";

import Project from "../components/projectCard/Project";
import Skills from "../components/skills/Skills";
import About from "../components/about/About";
import Contact from "../components/contacts/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Sidebar />

      <div className="md:container md:mx-auto mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
        <Header />
        <Project />
        <Skills />
        <About />
        <Contact />
      </div>
      <div className="border-t-2 border-gray-200">
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default Home;
