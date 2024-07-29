import React from 'react';
import { FaGitAlt, FaEthereum, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython, FaJs, FaDocker, FaReact } from 'react-icons/fa';
import { SiMongodb, SiC, SiCplusplus, SiSolidity, SiRust, SiGo, SiSqlite, SiTailwindcss, SiNextdotjs, SiBootstrap, SiNumpy, SiPandas, SiEthers, SiWeb3Dotjs, SiWeb3Py, SiHardhat, SiTruffle, SiBrownie, SiFoundry } from 'react-icons/si';
import { LuHardHat } from "react-icons/lu";

const skills = [
    { name: "C", icon: <SiC className="w-12 h-12 text-blue-600" /> },
    { name: "C++", icon: <SiCplusplus className="w-12 h-12 text-blue-500" /> },
    { name: "Java", icon: <FaJava className="w-12 h-12 text-red-500" /> },
    { name: "Python", icon: <FaPython className="w-12 h-12 text-yellow-500" /> },
    { name: "JavaScript", icon: <FaJs className="w-12 h-12 text-yellow-500" /> },
    { name: "Ethereum", icon: <FaEthereum className="w-12 h-12 text-gray-800" /> },
    { name: "Solidity", icon: <SiSolidity className="w-12 h-12 text-black" /> },
    { name: "Rust", icon: <SiRust className="w-12 h-12 text-brown-500" /> },
    { name: "Go", icon: <SiGo className="w-12 h-12 text-blue-400" /> },
    { name: "SQL", icon: <SiSqlite className="w-12 h-12 text-blue-300" /> },
    { name: "Docker", icon: <FaDocker className="w-12 h-12 text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="w-12 h-12 text-orange-600" /> },
    { name: "API Development", icon: <FaJs className="w-12 h-12 text-blue-600" /> }, // Placeholder
    { name: "HTML5", icon: <FaHtml5 className="w-12 h-12 text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="w-12 h-12 text-purple-600" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="w-12 h-12 text-teal-400" /> },
    { name: "ReactJS", icon: <FaReact className="w-12 h-12 text-blue-400" /> },
    { name: "NextJS", icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
    { name: "Hardhat", icon: <LuHardHat className="w-12 h-12 text-yellow-600" /> },
    // { name: "Truffle", icon: <SiTruffle className="w-12 h-12 text-brown-600" /> },
    // { name: "Brownie", icon: <SiBrownie className="w-12 h-12 text-brown-500" /> }, // Placeholder
    // { name: "Foundry", icon: <SiFoundry className="w-12 h-12 text-gray-700" /> }, // Placeholder
    { name: "Ether.js", icon: <SiEthers className="w-12 h-12 text-purple-500" /> },
    { name: "Web3.js", icon: <SiWeb3Dotjs className="w-12 h-12 text-green-500" /> },
    // { name: "Web3.py", icon: <SiWeb3Py className="w-12 h-12 text-green-500" /> },
    { name: "NumPy", icon: <SiNumpy className="w-12 h-12 text-blue-400" /> },
    { name: "Pandas", icon: <SiPandas className="w-12 h-12 text-black" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-black-100 text-white-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
                            {skill.icon}
                            <p className="text-lg mt-4">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
