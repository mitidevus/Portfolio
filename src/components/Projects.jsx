/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";

import { data } from "../data/index.js";

function Projects() {
    const projects = data;

    return (
        <div name="projects" className="w-full md:h-full text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
                    <p className="py-4">// Check out some of my projects</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Items */}
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${project.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
                        >
                            {/* Hover Effects */}
                            <div className="overlay group-hover:opacity-60"></div>
                            <div className="opacity-0 z-10 group-hover:opacity-100 ">
                                <span className="text-2xl font-bold text-white tracking-wider">{project.name}</span>
                                <p className="pt-2 italic">{project.technologies}</p>
                                <p className="pt-2">{project.note}</p>
                                <div className="pt-8 text-center">
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px] ">
                                            <span className="flex items-center">
                                                {project.name === "Ogani" ? "Customer" : "Code"} <FaGithub size={20} className="ml-1 inline" />
                                            </span>
                                        </button>
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noreferrer">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                            <span className="flex items-center">
                                                {project.name === "Ogani" ? "Admin" : "Live Demo"}
                                                {project.name === "Ogani" ? (
                                                    <FaGithub size={20} className="ml-1 inline" />
                                                ) : (
                                                    <RiShareBoxLine size={20} className="ml-1 inline" />
                                                )}
                                            </span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
