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
              class="flex items-center mb-4 sm:mb-0 space-x-1 rtl:space-x-reverse"
            >
              <img src={Logo} class="h-6" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                XXXXX
              </span>
            </a>
          </div>
          <div className="text-center  mx-auto">
            <span className="mt-9 text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © Copyright 2022. Made by Israel sanyaolu
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
