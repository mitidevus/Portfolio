/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactJS from "../assets/react.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";

import NodeJS from "../assets/node.png";
import MongoDB from "../assets/mongo.png";
import Firebase from "../assets/firebase.png";
import GraphQL from "../assets/graphql.png";

import Postman from "../assets/postman.png";
import GitHub from "../assets/github.png";

function Skills() {
    return (
        <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">// These are the technologies I've worked with</p>
                </div>

                {/* Container for icons */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={HTML} alt="HTML Icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={CSS} alt="CSS Icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={JavaScript} alt="JavaScript Icon" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={ReactJS} alt="ReactJS Icon" />
                        <p className="my-4">ReactJS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={Bootstrap} alt="Bootstrap Icon" />
                        <p className="my-4">Bootstrap</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={Tailwind} alt="Tailwind Icon" />
                        <p className="my-4">Tailwind</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={NodeJS} alt="NodeJS Icon" />
                        <p className="my-4">NodeJS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={MongoDB} alt="MongoDB Icon" />
                        <p className="my-4">MongoDB</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={Firebase} alt="Firebase Icon" />
                        <p className="my-4">Firebase</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={GraphQL} alt="GraphQL Icon" />
                        <p className="my-4">GraphQL</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={Postman} alt="Postman Icon" />
                        <p className="my-4">Postman</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-12 mx-auto" src={GitHub} alt="GitHub Icon" />
                        <p className="my-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
