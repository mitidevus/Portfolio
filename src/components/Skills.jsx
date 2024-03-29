/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Docker from "../assets/skills/docker.png";
import RabbitMQ from "../assets/skills/rabbitmq.png";
import Linux from "../assets/skills/linux.png";

import NestJS from "../assets/skills/nestjs.svg";
import Golang from "../assets/skills/go.png";
import Gin from "../assets/skills/gin.png";
import NodeJS from "../assets/skills/node.png";
import Loopback from "../assets/skills/loopback.svg";
import PostgreSQL from "../assets/skills/postgresql.svg.png";
import MongoDB from "../assets/skills/mongo.png";
import TypeScript from "../assets/skills/typescript.svg";

import NextJS from "../assets/skills/nextjs.svg";
import ReactJS from "../assets/skills/react.png";
import Tailwind from "../assets/skills/tailwind.png";
import MUI from "../assets/skills/mui.png";

function Skills() {
    const skills = [
        // Backend
        { name: "TypeScript", icon: TypeScript },
        { name: "Node.js", icon: NodeJS },
        { name: "NestJS", icon: NestJS },
        { name: "LoopBack 4", icon: Loopback },
        { name: "PostgreSQL", icon: PostgreSQL },
        { name: "Golang", icon: Golang },
        { name: "Gin", icon: Gin },
        { name: "Docker", icon: Docker },
        { name: "RabbitMQ", icon: RabbitMQ },
        { name: "MongoDB", icon: MongoDB },
        // Frontend
        { name: "React", icon: ReactJS },
        { name: "Next.js", icon: NextJS },
        { name: "Tailwind CSS", icon: Tailwind },
        { name: "Material UI", icon: MUI },
        // Tools
        { name: "Linux", icon: Linux },
    ];

    return (
        <div
            name="skills"
            className="w-full sm:h-screen bg-[#0a192f] text-gray-300"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                        Skills
                    </p>
                    <p className="py-4">
                        // These are the technologies I've worked with
                    </p>
                </div>

                {/* Container for icons */}
                <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4"
                        >
                            <img
                                className={`${
                                    skill.name === "Docker" ? "w-16" : "w-12"
                                } h-12 mx-auto`}
                                src={skill.icon}
                                alt={`${skill.name} Icon`}
                            />
                            <p className="my-4">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
