import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-900 bg-gray-100 body-font">
      <div className="container px-5 pt-10 pb-16 mx-auto text-center ">
        <div className="flex flex-col w-full mb-10 md:text-left text-center">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className=" text-3xl font-medium font-serif  mb-4">
            Websites I've Built
          </h1>
          <span className="border border-b border-gray-900 w-24 md:mx-0 mx-auto"></span>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I have built many websites using Html5, CSS3, Bootstrap,Tailwind
            CSS, SCSS, JavaScript, jQuery, ReactJS and WordPress.
            <br></br>
          </p>
          <p className="py-4 bold capitalize text-lg">
            You can visit theme from the gallery.
          </p> */}
        </div>
        <div className="flex flex-wrap projects">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="lg:w-1/6 sm:w-1/3 w-1/2 w-100 p-1"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-260 object-cover object-center"
                  src={project.image}
                />
                <div className=" text-white overflow-hidden px-2 py-2 relative z-10 w-full h-260 border-4  bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition duration-700 ease-in-out delay-110 hover:-translate-y-1 hover:scale-150 ">
                  <div children="mt-40">
                    <h2 className="tracking-widest text-sm font-serif font-medium text-green-400 mb-1 mt-40">
                      {project.subtitle}
                    </h2>
                    <h1 className="font-serif text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    {/* <p className="leading-relaxed">{project.description}</p> */}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
