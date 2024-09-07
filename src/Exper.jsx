import React from 'react';
import { BiCheckSquare } from "react-icons/bi";
import Azzi from '../src/assets/azzi.png';

const ExperienceSection = () => {
  return (
    <div id='experience'
      style={{ backgroundImage: `url(${Azzi})` }}
      className="bg-cover bg-center font-space py-16 object-cover pb-40 px-4 sm:px-8 lg:px-16 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl text-[#000000] mb-2 transition duration-300 hover:scale-105 hover:text-white">Explore My</h2>
        <h1 className="text-5xl text-[#000000] font-bold mb-10 transition duration-300 hover:scale-105 hover:text-white">Experience</h1>
        
        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Left Card */}
          <div  className="border-2 border-[#FFFFFF] text-left object-cover hover:border-black hover:scale-105 hover:shadow-2xl  hover:text-black transition duration-500 bg-cover  rounded-xl shadow-lg p-6 w-full lg:w-2/5">
            <h2 className="text-2xl font-semibold mb-6">Frontend Development</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">HTML</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">CSS</h3>
                  <p>Experienced</p>
                </div>
              </div>
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">TailWind CSS</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">JavaScript</h3>
                  <p>Basic</p>
                </div>
              </div>
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">React</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">BootStrap</h3>
                  <p>Intermediate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div  className="border-2 border-[#FFFFFF] object-cover hover:scale-105 hover:border-black hover:shadow-2xl  hover:text-black transition duration-500 bg-cover  rounded-xl shadow-lg p-6 w-full lg:w-2/5">
            <h2 className="text-2xl font-semibold mb-6">Backend Development</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">My SQL</h3>
                  <p>Basic</p>
                </div>
              </div>
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">Git-Hub</h3>
                  <p>Basic</p>
                </div>
              </div>
              <div className="flex items-center">
                <BiCheckSquare size={35} className=" mr-4" />
                <div>
                  <h3 className=" font-bold">Git</h3>
                  <p>Basic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
