import React from "react";
import { Link } from "react-scroll";
import Avatar from "../assets/avatar.jpg";

function About() {
    return (
        <div
            name="about"
            className="w-full sm:h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold ">
                        <p>
                            Hi, I'm Tri, nice to meet you. Please take a look
                            around.
                        </p>
                        <div className="flex justify-center">
                            <img
                                src={Avatar}
                                alt="avatar"
                                className="rounded-full mt-4 w-64 h-64 border-[6px] border-pink-600"
                            />
                        </div>
                    </div>
                    <div>
                        <p>Dear Visitor,</p>
                        <br />
                        <p>
                            I am currently a senior student pursuing a Bachelor
                            of Science in Software Engineering at{" "}
                            <span className="font-bold">
                                Ho Chi Minh City University of Science
                            </span>
                            . I’m seeking opportunities in order to contribute
                            to projects and advance my skills as a software
                            engineer.
                        </p>
                        <br />
                        <p>
                            If you have any questions or would like to get in
                            touch, please feel free to leave a message on the{" "}
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                className="font-bold cursor-pointer"
                            >
                                Contact
                            </Link>{" "}
                            page, and I will get back to you as soon as
                            possible. Thank you for visiting my website!
                        </p>
                        <br />
                        <p>Best regards,</p>
                        <p>Tri Do</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
