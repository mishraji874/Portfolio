import React from 'react';
import {
  FaJava, FaJs, FaEthereum, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaJenkins, FaPython
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiSolidity, SiRust, SiGo, SiSqlite, SiBootstrap, SiTailwindcss, SiNextdotjs, SiMongodb, SiEthers, SiWeb3Dotjs, SiNumpy, SiPandas, SiMysql, SiPostgresql, SiGooglecloud, SiKubernetes, SiIpfs, SiSolana, SiTypescript, SiExpress
} from 'react-icons/si';
import { HardHat, Cloud } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const skillCategories = [
    {
        name: "Programming Languages",
        skills: [
            { name: "C", icon: <SiC /> },
            { name: "C++", icon: <SiCplusplus /> },
            { name: "Java", icon: <FaJava /> },
            { name: "Python", icon: <FaPython /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Solidity", icon: <SiSolidity /> },
            { name: "Vyper", icon: <SiSolidity /> },
            { name: "Rust", icon: <SiRust /> },
            { name: "Go", icon: <SiGo /> }
        ]
    },
    {
        name: "Web Technologies",
        skills: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "Bootstrap", icon: <SiBootstrap /> },
            { name: "TailwindCSS", icon: <SiTailwindcss /> },
            { name: "ReactJS", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "API Development", icon: <FaJs /> }
        ]
    },
    {
        name: "Database Systems",
        skills: [
            { name: "SQL", icon: <SiSqlite /> },
            { name: "SQLite", icon: <SiSqlite /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> }
        ]
    },
    {
        name: "Data Science & Machine Learning",
        skills: [
            { name: "NumPy", icon: <SiNumpy /> },
            { name: "Pandas", icon: <SiPandas /> }
        ]
    },
    {
        name: "Cloud Technologies",
        skills: [
            { name: "AWS", icon: <FaAws /> },
            { name: "Google Cloud", icon: <SiGooglecloud /> },
            { name: "Microsoft Azure", icon: <Cloud /> }
        ]
    },
    {
        name: "DevOps & Version Control",
        skills: [
            { name: "Docker", icon: <FaDocker /> },
            { name: "Kubernetes", icon: <SiKubernetes /> },
            { name: "Git", icon: <FaGitAlt /> },
            { name: "Jenkins", icon: <FaJenkins /> },
            { name: "CI/CD", icon: <FaGitAlt /> }
        ]
    },
    {
        name: "Web3 & Blockchain",
        skills: [
            { name: "Solidity", icon: <SiSolidity /> },
            { name: "Vyper", icon: <SiSolidity /> },
            { name: "Hardhat", icon: <HardHat /> },
            { name: "Web3.js", icon: <SiWeb3Dotjs /> },
            { name: "Ether.js", icon: <SiEthers /> },
            { name: "IPFS", icon: <SiIpfs /> },
            { name: "Solana", icon: <SiSolana /> },
        ]
    },
    {
        name: "Specialized Skills",
        skills: [
            { name: "Smart Contract Dev", icon: <SiSolidity /> },
            { name: "Blockchain Security", icon: <FaEthereum /> },
            { name: "dApps Development", icon: <SiWeb3Dotjs /> },
            { name: "API Integration", icon: <FaJs /> },
            { name: "Smart Contract Auditing", icon: <SiSolidity /> },
            { name: "Data Visualization", icon: <SiPandas /> },
            { name: "Technical Writing", icon: <FaJs /> },
            { name: "Statistical Analysis", icon: <SiNumpy /> }
        ]
    }
];

export default function SkillsSection() {
    return (
        <section id="skills" className="py-20 lg:py-32 bg-secondary/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Skills & Expertise</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        A showcase of the technologies and tools I wield.
                    </p>
                </div>
                <div className="space-y-20">
                    {skillCategories.map((category) => (
                        <div key={category.name} className="relative rounded-xl border bg-card p-8 pt-12 shadow-lg">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                <h3 className="text-lg md:text-xl font-bold font-headline bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-md">{category.name}</h3>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10">
                                {category.skills.map((skill) => (
                                    <TooltipProvider key={skill.name}>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <div className="group rounded-full border-2 border-border p-4 bg-background shadow-md hover:border-primary hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                                                    <div className="transition-transform duration-300 group-hover:scale-125">
                                                        {React.cloneElement(skill.icon, { className: "w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" })}
                                                    </div>
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="font-medium">{skill.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
