import React from 'react';
import Azzi from '../src/assets/azzi.png';
import Black from '../src/assets/black.jpg';
import { SlBadge } from "react-icons/sl";
import { PiBookmarksSimpleDuotone } from "react-icons/pi";

const Home2 = () => {
  return (  
    <div>
      <div id='about' style={{ backgroundImage: `url(${Azzi})` }} className="pt-10 bg-cover w-full h-full lg:h-screen sm:h-screen font-space">
        <div className="bg-cover h-full object-cover">
          <h1 className="text-2xl text-center hover:text-white transition duration-300 hover:scale-105">Get To Know More</h1>
          <h1 className="text-5xl text-center mb-10 hover:text-white transition duration-300 hover:scale-105">About Me</h1>

          <div className="text-white flex flex-col lg:flex-row px-4 sm:px-10">
           

            {/* Info Section */}
            <div className="w-full lg:w-3/5 h-auto lg:h-96 p-8 rounded-3xl text-white">
              <div className="flex flex-col sm:flex-row gap-6 items-center text-center lg:text-left">
                <div className="w-full sm:w-1/2 object-cover border-2 border-white hover:scale-105 hover:border-black hover:text-black transition duration-500 h-40 flex flex-col items-center justify-evenly">
                  <SlBadge size={25} />
                  <div>
                    <h1 className="text-3xl">Experience</h1>
                    <h2>1+ year</h2>
                    <h1>Front End Developer</h1>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 border-2 border-white hover:scale-105 hover:border-black hover:text-black transition duration-500 h-40 flex flex-col items-center justify-evenly">
                  <PiBookmarksSimpleDuotone size={25} />
                  <div>
                    <h1 className="text-3xl">Education</h1>
                    <h2>B.C.A </h2>
                    <h1>M.C.A </h1>
                  </div>
                </div>
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl hover:scale-95 hover:text-black transition duration-500 p-4 sm:p-8 lg:p-10 text-center lg:text-left leading-relaxed sm:leading-loose">
              Hello! I'm Azeem Ansari, a passionate Front-End Developer with over a year of experience in crafting responsive, user-friendly web applications. My journey in web development started with a deep curiosity about how websites work, and it quickly evolved into a fulfilling career. I specialize in translating designs into functional and visually appealing interfaces using modern technologies like React, Tailwind CSS, and JavaScript.              </h1>
            </div>

 {/* Image Section */}
 <div className="w-full lg:w-2/5 mb-8 lg:mb-0 rounded-3xl  bg-cover object-cover">
              <img 
                className="px-14 py-10 py-10-cover h-80 sm:h-full hover:scale-105 transition duration-500 bg-center bg-no-repeat object-cover rounded-3xl" 
                src={Black}
                alt="" 
                style={{ width: "100%", height: "82%", objectFit: "cover", objectPosition: "center", borderRadius: "75px" }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2;
