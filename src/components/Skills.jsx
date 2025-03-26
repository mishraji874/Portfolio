import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D } from '@react-three/drei';
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
    { name: "API Development", icon: <FaJs className="w-12 h-12 text-blue-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="w-12 h-12 text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="w-12 h-12 text-purple-600" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="w-12 h-12 text-teal-400" /> },
    { name: "ReactJS", icon: <FaReact className="w-12 h-12 text-blue-400" /> },
    { name: "NextJS", icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-500" /> },
    { name: "Hardhat", icon: <LuHardHat className="w-12 h-12 text-yellow-600" /> },
    { name: "Ether.js", icon: <SiEthers className="w-12 h-12 text-purple-500" /> },
    { name: "Web3.js", icon: <SiWeb3Dotjs className="w-12 h-12 text-green-500" /> },
    { name: "NumPy", icon: <SiNumpy className="w-12 h-12 text-blue-400" /> },
    { name: "Pandas", icon: <SiPandas className="w-12 h-12 text-black" /> },
];

const FloatingText = () => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
            >
                Skills
                <meshStandardMaterial color="#3b82f6" wireframe />
            </Text3D>
        </Float>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-black-100 text-white-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <FloatingText />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-8 text-center"
                >
                    Skills
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center p-4 border border-gray-700 rounded-lg shadow-lg bg-gray-800/50 backdrop-blur-sm hover:border-blue-500 transition-colors"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {skill.icon}
                            </motion.div>
                            <p className="text-lg mt-4">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
