import React from 'react';
import Azzi from '../src/assets/azzi.png';

const projects = [
  {
    id: 1,
    title: "Direct Space",
    image: "../src/assets/space.png", // Replace with your image path
    githubLink: "https://github.com/azzi9599/DirectSpace",
    liveDemoLink: "#",
  },
  {
    id: 2,
    title: "MarkTechRover",
    image: "../src/assets/mark.png", // Replace with your image path
  
    githubLink: "https://github.com/azzi9599/MarkTechRover-Main",
    liveDemoLink: "#",
  },
  {
    id: 3,
    title: "ThePerfectFit",
    image: "../src/assets/rr.png", // Replace with your image path

    githubLink: "https://github.com/azzi9599/ThePerfectFit",
    liveDemoLink: "#",
  },
];

const Projects = () => {
  return (
    <div id='projects' style={{ backgroundImage: `url(${Azzi})` }} className="font-space object-cover bg-cover py-20 px-10">
      <h2 className="text-5xl text-black text-center mb-10"> Recent Projects</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" rounded-lg object-cover hover:scale-95 bg-cover text-white border-2 border-[#FFFFFF] hover:border-black hover:text-black p-6 shadow-lg hover:shadow-2xl transition duration-300 min-h-[400px]" // Increased padding and min-height
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg object-cover  bg-cover w-full h-80" // Increased height
            />
            <div className="p-5 ">
              <h3 className="text-2xl font-semibold text-center mb-6">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div  className="flex flex-col md:flex-row justify-between text-center gap-4"> {/* Use flex-col for mobile and flex-row for larger screens */}
                <a
                  href={project.githubLink}
                  className="bg-transparent border-2 text-white  py-2 px-8  hover:bg-white hover:scale-105  hover:text-black  transition duration-300"
                >
                  Github
                </a>
                <a
                  href={project.liveDemoLink}
                  className="bg-transparent border-2 text-white  py-2 px-8  hover:bg-white hover:scale-105  hover:text-black  transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
