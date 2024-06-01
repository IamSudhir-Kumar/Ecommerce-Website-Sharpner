import React from "react";
import { FacebookImages, Youtube, Instagram } from "../../assets/data";

const Footer = () => {
  return (
    <footer className="bg-cyan-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-20">
        <p className="text-2xl md:text-3xl text-cyan-50 font-bold">
          OUR SOCIAL MEDIA PLATFORMS:
        </p>
        <div className="flex flex-col items-center space-y-2 md:space-y-0">
          <img
            src={FacebookImages}
            alt="Facebook"
            className="h-10 w-10 hover:scale-110 transition-transform duration-300"
          />
          <p className="text-white">Facebook</p>
        </div>
        <div className="flex flex-col items-center space-y-2 md:space-y-0">
          <img
            src={Youtube}
            alt="Youtube"
            className="h-10 w-10 hover:scale-110 transition-transform duration-300"
          />
          <p className="text-white">YouTube</p>
        </div>
        <div className="flex flex-col items-center space-y-2 md:space-y-0">
          <img
            src={Instagram}
            alt="Instagram"
            className="h-10 w-10 hover:scale-110 transition-transform duration-300"
          />
          <p className="text-white">Instagram</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
