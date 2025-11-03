import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, color: "bg-orange-100" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, color: "bg-blue-100" },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, color: "bg-yellow-100" },
    { name: "ReactJS", icon: <FaReact className="text-sky-400" />, color: "bg-sky-100" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, color: "bg-cyan-100" },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, color: "bg-purple-100" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, color: "bg-green-100" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          My <span className="text-orange-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ${skill.color}`}
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
