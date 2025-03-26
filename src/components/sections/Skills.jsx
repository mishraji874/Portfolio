import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { FaJava, FaJs, FaEthereum, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaJenkins } from 'react-icons/fa';
import { SiC, SiCplusplus, SiSolidity, SiRust, SiGo, SiSqlite, SiBootstrap, SiTailwindcss, SiNextdotjs, SiMongodb, SiEthers, SiWeb3Dotjs, SiNumpy, SiPandas, SiMysql, SiPostgresql, SiGooglecloud, SiAzuredevops, SiKubernetes, SiTruffle, SiIpfs, SiSolana, SiAnchor, SiTypescript, SiExpress } from 'react-icons/si';
import { LuHardHat } from 'react-icons/lu';
import { FaPython } from 'react-icons/fa6';

export const Skills = () => {
    const { theme } = useTheme();

    const skillCategories = [
        {
            name: "Programming Languages",
            skills: [
                { name: "C", icon: <SiC className="w-12 h-12 text-blue-600" /> },
                { name: "C++", icon: <SiCplusplus className="w-12 h-12 text-blue-500" /> },
                { name: "Java", icon: <FaJava className="w-12 h-12 text-red-500" /> },
                { name: "Python", icon: <FaPython className="w-12 h-12 text-yellow-500" /> },
                { name: "JavaScript", icon: <FaJs className="w-12 h-12 text-yellow-500" /> },
                { name: "TypeScript", icon: <SiTypescript className="w-12 h-12 text-blue-500" /> },
                { name: "Solidity", icon: <SiSolidity className="w-12 h-12 text-black" /> },
                { name: "Vyper", icon: <SiSolidity className="w-12 h-12 text-purple-500" /> },
                { name: "Rust", icon: <SiRust className="w-12 h-12 text-brown-500" /> },
                { name: "Go", icon: <SiGo className="w-12 h-12 text-blue-400" /> }
            ]
        },
        {
            name: "Web Technologies",
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="w-12 h-12 text-orange-600" /> },
                { name: "CSS3", icon: <FaCss3Alt className="w-12 h-12 text-blue-500" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="w-12 h-12 text-purple-600" /> },
                { name: "TailwindCSS", icon: <SiTailwindcss className="w-12 h-12 text-teal-400" /> },
                { name: "ReactJS", icon: <FaReact className="w-12 h-12 text-blue-400" /> },
                { name: "NextJS", icon: <SiNextdotjs className="w-12 h-12 text-black" /> },
                { name: "Node.js", icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="w-12 h-12 text-gray-600" /> },
                { name: "Docker", icon: <FaDocker className="w-12 h-12 text-blue-500" /> },
                { name: "API Development", icon: <FaJs className="w-12 h-12 text-blue-600" /> }
            ]
        },
        {
            name: "Database Systems",
            skills: [
                { name: "SQL", icon: <SiSqlite className="w-12 h-12 text-blue-300" /> },
                { name: "SQLite", icon: <SiSqlite className="w-12 h-12 text-blue-300" /> },
                { name: "MySQL", icon: <SiMysql className="w-12 h-12 text-blue-500" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12 text-blue-500" /> },
                { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-500" /> }
            ]
        },
        {
            name: "Data Science & Machine Learning",
            skills: [
                { name: "NumPy", icon: <SiNumpy className="w-12 h-12 text-blue-400" /> },
                { name: "Pandas", icon: <SiPandas className="w-12 h-12 text-black" /> }
            ]
        },
        {
            name: "Cloud Technologies",
            skills: [
                { name: "AWS", icon: <FaAws className="w-12 h-12 text-orange-500" /> },
                { name: "Google Cloud", icon: <SiGooglecloud className="w-12 h-12 text-blue-500" /> },
                { name: "Microsoft Azure", icon: <SiAzuredevops className="w-12 h-12 text-blue-600" /> }
            ]
        },
        {
            name: "DevOps & Version Control",
            skills: [
                { name: "Docker", icon: <FaDocker className="w-12 h-12 text-blue-500" /> },
                { name: "Kubernetes", icon: <SiKubernetes className="w-12 h-12 text-blue-500" /> },
                { name: "Git", icon: <FaGitAlt className="w-12 h-12 text-orange-600" /> },
                { name: "Jenkins", icon: <FaJenkins className="w-12 h-12 text-red-500" /> },
                { name: "CI/CD", icon: <FaGitAlt className="w-12 h-12 text-purple-500" /> }
            ]
        },
        {
            name: "Web3 & Blockchain",
            skills: [
                { name: "Solidity", icon: <SiSolidity className="w-12 h-12 text-black" /> },
                { name: "Vyper", icon: <SiSolidity className="w-12 h-12 text-purple-500" /> },
                { name: "Hardhat", icon: <LuHardHat className="w-12 h-12 text-yellow-600" /> },
                // { name: "Truffle", icon: <SiTruffle className="w-12 h-12 text-orange-500" /> },
                { name: "Web3.js", icon: <SiWeb3Dotjs className="w-12 h-12 text-green-500" /> },
                { name: "Ether.js", icon: <SiEthers className="w-12 h-12 text-purple-500" /> },
                { name: "IPFS", icon: <SiIpfs className="w-12 h-12 text-orange-500" /> },
                { name: "Solana", icon: <SiSolana className="w-12 h-12 text-purple-500" /> },
                // { name: "Anchor", icon: <SiAnchor className="w-12 h-12 text-blue-500" /> }
            ]
        },
        {
            name: "Specialized Skills",
            skills: [
                { name: "Smart Contract Development", icon: <SiSolidity className="w-12 h-12 text-black" /> },
                { name: "Blockchain Security", icon: <FaEthereum className="w-12 h-12 text-gray-800" /> },
                { name: "dApps Development", icon: <SiWeb3Dotjs className="w-12 h-12 text-green-500" /> },
                { name: "API Integration", icon: <FaJs className="w-12 h-12 text-blue-600" /> },
                { name: "Smart Contract Auditing", icon: <SiSolidity className="w-12 h-12 text-red-500" /> },
                { name: "Data Visualization", icon: <SiPandas className="w-12 h-12 text-black" /> },
                { name: "Technical Writing", icon: <FaJs className="w-12 h-12 text-gray-600" /> },
                { name: "Statistical Analysis", icon: <SiNumpy className="w-12 h-12 text-blue-400" /> }
            ]
        }
    ];

    return (
        <Section id="skills" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-3xl font-bold mb-4"
                        style={{ color: theme.colors.text }}
                    >
                        Skills
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        Technologies I work with
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
                        >
                            <h3
                                className="text-2xl font-bold mb-6"
                                style={{ color: theme.colors.text }}
                            >
                                {category.name}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow duration-300"
                                    >
                                        <div className="mb-2">
                                            {skill.icon}
                                        </div>
                                        <span
                                            className="text-sm font-medium text-center"
                                            style={{ color: theme.colors.text }}
                                        >
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}; 