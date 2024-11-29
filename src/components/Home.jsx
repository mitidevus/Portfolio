import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    Tri Do
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
                    I'm a Software Engineer.
                </h2>
                <p className="text-[#8892b0] py-4 max-w-[700]">
                    As a recent graduate with a Bachelor’s degree in{" "}
                    <span className="text-[#ccd6f6] font-bold">
                        Software Engineering
                    </span>{" "}
                    from{" "}
                    <span className="text-[#ccd6f6] font-bold">
                        Ho Chi Minh City University of Science
                    </span>{" "}
                    , I have gained valuable experience in{" "}
                    <span className="text-pink-600 font-bold">
                        Web Development
                    </span>{" "}
                    using{" "}
                    <span className="text-[#ccd6f6] font-bold">Node.js</span>,{" "}
                    <span className="text-[#ccd6f6] font-bold">ReactJS</span>,{" "}
                    <span className="text-[#ccd6f6] font-bold">Python</span> and{" "}
                    <span className="text-[#ccd6f6] font-bold">Golang</span>.
                    I am eager to contribute to projects and continue enhancing my skills as a software engineer.
                </p>
                <div>
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                            View Work
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
