import React from 'react';
import Azzi from '../src/assets/azzi.png';

const Navbar = () => {
  return (
    <nav className="bg-[#FF6B58]">
      <div className="container mx-auto pt-4 pb-4 w-3/4 flex justify-between items-center">
        <div className="text-[#FFFFFF] text-3xl ">
          Azeem
        </div>
        <div className="flex space-x-8 text-[#FFFFFF] text-2xl">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
      <hr className="border-t bg-[#FFFFFF]  border-solid mx-auto justify-center  w-10/12 border-gray-600 mt-4"/>
    </nav>
  );
};

export default Navbar;
