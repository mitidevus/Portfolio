/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import Target from "../assets/projects/target.png";
import Coffee from "../assets/projects/coffee.png";
import Shopee from "../assets/projects/shopee.png";
import MusicPlayer from "../assets/projects/music-player.png";
import Netflix from "../assets/projects/netflix.png";
import Ogani from "../assets/projects/ogani.png";
import OganiAdmin from "../assets/projects/ogani-admin.png";
import Hobo from "../assets/projects/hobo.png";
import NoteApp from "../assets/projects/note-app.png";
import YGZone from "../assets/projects/ygzone.png";

function Projects() {
    return (
        <div name="projects" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Projects</p>
                    <p className="py-6">// Check out some of my projects</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Items */}
                    <div
                        style={{ backgroundImage: `url(${YGZone})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="overlay group-hover:opacity-60"></div>
                        <div className="opacity-0 z-10 group-hover:opacity-100 ">
                            <span className="text-2xl font-bold text-white tracking-wider">Target</span>
                            <p className="pt-2 italic">ReactJS, Redux Toolkit</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Code
                                        <FaGithub size={20} className="inline" />
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Live Demo
                                        <RiShareBoxLine size={20} className="inline" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${NoteApp})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="overlay group-hover:opacity-60"></div>
                        <div className="opacity-0 z-10 group-hover:opacity-100 ">
                            <span className="text-2xl font-bold text-white tracking-wider">Note App</span>
                            <p className="italic">ReactJS, Material UI, NodeJS, GraphQL, MongoDB, Firebase</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Code
                                        <FaGithub size={20} className="inline" />
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Live Demo
                                        <RiShareBoxLine size={20} className="inline" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Hobo})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="overlay group-hover:opacity-60"></div>
                        <div className="opacity-0 z-10 group-hover:opacity-100 ">
                            <span className="text-2xl font-bold text-white tracking-wider">HOBO</span>
                            <p className="italic">ReactJS, Redux Toolkit, NodeJS, MongoDB Atlas</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Code
                                        <FaGithub size={20} className="inline" />
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Live Demo
                                        <RiShareBoxLine size={20} className="inline" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Ogani})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="overlay group-hover:opacity-60"></div>
                        <div className="opacity-0 z-10 group-hover:opacity-100 ">
                            <span className="text-2xl font-bold text-white tracking-wider">Ogani</span>
                            <p className="italic"> NodeJS, ExpressJS, Handlebars, MySQL</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Code
                                        <FaGithub size={20} className="inline" />
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Live Demo
                                        <RiShareBoxLine size={20} className="inline" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Netflix})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="overlay group-hover:opacity-60"></div>
                        <div className="opacity-0 z-10 group-hover:opacity-100 ">
                            <span className="text-2xl font-bold text-white tracking-wider">Netflix</span>
                            <p className="italic">ReactJS, Tailwind CSS, Firebase</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Code
                                        <FaGithub size={20} className="inline" />
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Live Demo
                                        <RiShareBoxLine size={20} className="inline" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${MusicPlayer})` }}
                        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div"
                    >
                        {/* Hover Effects */}
                        <div className="overlay group-hover:opacity-60"></div>
                        <div className="opacity-0 z-10 group-hover:opacity-100 ">
                            <span className="text-2xl font-bold text-white tracking-wider">Music Player</span>
                            <p className="italic">HTML, CSS, JavaScript</p>
                            <div className="pt-8 text-center">
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Code
                                        <FaGithub size={20} className="inline" />
                                    </button>
                                </a>
                                <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg group-hover:translate-y-[-10px]">
                                        Live Demo
                                        <RiShareBoxLine size={20} className="inline" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
