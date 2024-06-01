import React from "react";
import { NormalImgeas } from "../../assets/data";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white bg-opacity-80 max-w-3xl mx-auto p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our website! We are dedicated to...
        </p>
      </div>
      <div className="max-w-3xl mx-auto p-8 mt-8">
        <img
          src={NormalImgeas}
          alt="background photo"
          className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default About;
