import React from "react";
import Logo from "../../assets/Logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="md:container md:mx-auto mx-auto max-w-7xl px-4 sm:px-6 lg:px-36">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-1 rtl:space-x-reverse"
            >
              <img src={Logo} className="h-6" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                XXXXX
              </span>
            </a>
          </div>
          <div className="flex align-center justify-center mx-auto">
            <a
              className="mt-9 text-sm text-gray-500 sm:text-center dark:text-gray-400"
              href="https://www.linkedin.com/in/israel-sanyaolu-69055023a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              © Copyright 2024. Designed by Israel sanyaolu
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
