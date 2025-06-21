"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const experiences = [
    {
        title: 'Smart Contract Security Researcher & Auditor',
        company: 'Freelance',
        period: '2023 - Present',
        description: 'Conducting security audits of smart contracts, identifying vulnerabilities, and providing recommendations for improvements. Working with various blockchain platforms and protocols.',
        technologies: ['Solidity', 'Web3.js', 'Smart Contract Security', 'Ethereum', 'BSC'],
    },
    {
        title: 'Web3 Developer Intern',
        company: 'LILLUP',
        period: 'April 2024 - December 2024',
        description: 'Engineered a dApp for peer-to-peer transactions, accelerating transaction speed by 20%. Implemented Solidity smart contracts, enhancing security by 30%. Pinpointed gas inefficiencies, leading to a 15% reduction in fees.',
        technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'Node.js'],
    },
    {
        title: 'Full Stack Developer',
        company: 'FabHotels',
        period: 'June 2024 - August 2024',
        description: 'Developed a custom booking engine increasing user engagement by 25%. Integrated REST APIs for real-time data, improving search response by 30%. Analyzed user behavior to decrease cart abandonment by 20%.',
        technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'AWS'],
    },
    {
        title: 'Frontend Web Developer',
        company: 'InternDEV',
        period: 'April 2023 - June 2023',
        description: 'Boosted mobile user engagement by 25% with a responsive layout. Created a CSS framework improving page load speed by 20%. Automated UI testing, reducing manual testing time by 40%.',
        technologies: ['React', 'CSS', 'JavaScript', 'UI Testing'],
    },
    {
        title: 'Technical Team Member',
        company: 'Directorate of Student Affairs',
        period: 'November 2022 - March 2024',
        description: 'Spearheaded a mentorship program facilitating 15 new projects. Integrated analytics tools on event websites, increasing attendance by 25% year-over-year.',
        technologies: ['Web Development', 'Analytics', 'Project Management'],
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Experience</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        My professional journey
                    </p>
                </div>
                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:border-l-0">
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block" aria-hidden="true"></div>

                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            className={`pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-12 relative ${index % 2 !== 0 ? 'md:[&>*:first-child]:col-start-2' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={`py-6 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                                    <h3 className="text-xl font-bold font-headline">{experience.title}</h3>
                                    <p className="text-md font-semibold text-primary mb-1">{experience.company}</p>
                                    <p className="text-sm text-muted-foreground mb-3">{experience.period}</p>
                                    <p className="text-muted-foreground mb-4">{experience.description}</p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {experience.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline">{tech}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-5 h-5 rounded-full bg-primary border-4 border-secondary"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
