import React from 'react';
import Azzi from './assets/azzi.png';

const ContactMe = () => {
  return (
    <div id="contact" style={{ backgroundImage: `url(${Azzi})` }} className=" font-space bg-cover object-cover text-white text-center items-center flex flex-col justify-evenly py-16 h-screen px-4">
      <div className="text-center  mb-12">
        <h2 className="text mb-2 transition duration-300 hover:scale-105 hover:text-white text-black">Get in Touch</h2>
        <h1 className="text lg:text-5xl md:text-4xl font-bold transition duration-300 hover:scale-105 text-black hover:text-white mb-8">Contact Me</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <div className="flex items-center hover:cursor-pointer  px-6 py-4  border-2 border-white hover:bg-white hover:text-black transition duration-300 hover:scale-105">
          <span className="text-2xl mr-4">📧</span>
          <span className=" text-lg"> Azeem.pvt.co@gmail.com</span>
        </div>
       <div className="flex items-center hover:cursor-pointer  px-6 py-4 border-2 border-white hover:bg-white hover:text-black transition duration-300 hover:scale-105">
       <a href="https://www.linkedin.com/in/azeem-ansari-23b8b4271/"> <span className="text-2xl mr-4">🔗</span>
          <span className=" text-lg">LinkedIn</span></a>
        </div>
      </div>
      <footer className="text-center p-4  text-white">
  <nav className="flex flex-col sm:flex-row pt-10 justify-center gap-4 sm:gap-6 text-lg sm:text-xl mb-4">
    <a
      href="#about"
      className="hover:text-black hover:underline underline-offset-4 tracking-wide transition duration-300"
    >
      About
    </a>
    <a
      href="#experience"
      className="hover:text-black hover:underline underline-offset-4 tracking-wide transition duration-300"
    >
      Experience
    </a>
    <a
      href="#projects"
      className="hover:text-black hover:underline underline-offset-4 tracking-wide transition duration-300"
    >
      Projects
    </a>
    <a
      href="#contact"
      className="hover:text-black hover:underline underline-offset-4 tracking-wide transition duration-300"
    >
      Contact
    </a>
  </nav>
  <p className="text-sm sm:text-base text-gray-200 tracking-wide mt-10 pt-10">
    Copyright © 2024 Azeem Ansari. All Rights Reserved.
  </p>
</footer>

    </div>
  );
};

export default ContactMe;
