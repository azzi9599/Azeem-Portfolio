import React, { useState } from 'react';
import Azzi from '../src/assets/azzi.png';
import Azzi1 from '../src/assets/azzi1.jpg';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{ backgroundImage: `url(${Azzi})` }}
      className="pt-6 bg-cover bg-center bg-no-repeat w-full min-h-screen pb-20 object-cover sm:h-screen lg:h-screen font-space"
    >
      <nav className="pb-20">
        <div className="container mx-auto pt-4 pb-4 px-4 lg:px-0 w-full lg:w-11/12 xl:w-3/4 flex justify-between items-center">
          <div className="text-black text-2xl sm:text-3xl hover:text-black tracking-widest transition duration-300">
            Azeem
          </div>
          {/* Hamburger Icon and Close Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? (
                // Close button (X)
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                // Hamburger icon (≡)
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
          {/* Navigation Links */}
          <div className={`flex-col lg:flex-row lg:flex space-x-0 lg:space-x-8 text-[#FFFFFF] text-lg sm:text-2xl ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
            <a href="#about" 
               className="hover:text-black hover:underline underline-offset-8 tracking-widest transition duration-300 active:bg-gray-700">
              About
            </a>
            <a href="#experience" 
               className="hover:text-black hover:underline underline-offset-8 tracking-widest transition duration-300 active:bg-gray-700">
              Experience
            </a>
            <a href="#projects" 
               className="hover:text-black hover:underline underline-offset-8 tracking-widest transition duration-300 active:bg-gray-700">
              Projects
            </a>
            <a href="#contact" 
               className="hover:text-black hover:underline underline-offset-8 tracking-widest transition duration-300 active:bg-gray-700">
              Contact
            </a>
          </div>
        </div>
        <hr className="border-t bg-[#FFFFFF] border-solid mx-auto justify-center w-full lg:w-11/12 xl:w-10/12 border-gray-600 mt-4"/>
      </nav>

      <div className="w-full p-4 sm:p-10 flex flex-col lg:flex-row justify-center items-center lg:space-x-10">
        <div className="w-4/5 sm:w-3/5 lg:w-2/5 h-auto mb-6 sm:mb-0">
          <img 
            className="w-full h-full bg-cover object-cover hover:scale-105 transition duration-300 rounded-3xl" 
            src={Azzi1} 
            alt=""
          />
        </div>
        <div className="w-4/5 sm:w-3/5 lg:w-2/5 text-center sm:p-10 p-4 text-[#FFFFFF]">
          <h3 className="text-xl sm:text-3xl transition duration-300 hover:text-black mb-2 sm:mb-4">Hello, I'm</h3>
          <h1 className="text-3xl sm:text-6xl transition duration-300 hover:text-black mb-2 sm:mb-4">Azeem Ansari</h1>
          <h1 className="text-xl sm:text-4xl transition duration-300 hover:text-black mb-4 sm:mb-8">Front End Developer</h1>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-8 mt-4 sm:mt-8">
            <button className="border-2 border-solid border-[#FFFFFF] px-10 py-2 transition duration-300 hover:text-black hover:bg-[#FFFFFF] hover:scale-105 active:bg-gray-700">Resume</button>
            <button className="border-2 border-solid border-[#FFFFFF] px-10 py-2 transition duration-300 hover:text-black hover:bg-[#FFFFFF] hover:scale-105 active:bg-gray-700">Contact</button>
          </div>

          <div className="flex  justify-center  space-x-0 sm:space-x-8 mt-4 sm:mt-8">
           <a href="https://www.linkedin.com/in/azeem-ansari-23b8b4271/"> <button className="rounded-xl px-4 py-2 transition duration-300 hover:text-black active:bg-gray-700"><FaLinkedinIn size={35} /></button></a>
            <a href="https://github.com/azzi9599"><button className="rounded-xl px-4 py-2 transition duration-300 hover:text-black active:bg-gray-700"><FaGithub size={35} /></button></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
