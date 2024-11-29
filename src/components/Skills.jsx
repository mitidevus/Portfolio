/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

import Docker from "../assets/skills/docker.png";
import GraphQL from "../assets/skills/graphql.png";
import RabbitMQ from "../assets/skills/rabbitmq.png";

import Gin from "../assets/skills/gin.png";
import Golang from "../assets/skills/go.png";
import MongoDB from "../assets/skills/mongo.png";
import NestJS from "../assets/skills/nestjs.svg";
import NodeJS from "../assets/skills/node.png";
import PostgreSQL from "../assets/skills/postgresql.svg.png";
import Python from "../assets/skills/python.png";
import TypeScript from "../assets/skills/typescript.svg";

import MUI from "../assets/skills/mui.png";
import NextJS from "../assets/skills/nextjs.svg";
import ReactJS from "../assets/skills/react.png";
import Tailwind from "../assets/skills/tailwind.png";

function Skills() {
    const skills = [
        // Backend
        { name: "TypeScript", icon: TypeScript },
        { name: "Node.js", icon: NodeJS },
        { name: "NestJS", icon: NestJS },
        { name: "PostgreSQL", icon: PostgreSQL },
        { name: "MongoDB", icon: MongoDB },
        { name: "Golang", icon: Golang },
        { name: "Gin", icon: Gin },
        { name: "Python", icon: Python },
        { name: "Docker", icon: Docker },
        { name: "RabbitMQ", icon: RabbitMQ },
        // Frontend
        { name: "React", icon: ReactJS },
        { name: "Next.js", icon: NextJS },
        { name: "Material UI", icon: MUI },
        { name: "Tailwind CSS", icon: Tailwind },
        // Others
        { name: "GraphQL", icon: GraphQL },
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
