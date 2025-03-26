import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const Experience = () => {
    const { theme } = useTheme();

    const experiences = [
        {
            title: 'Smart Contract Security Researcher & Auditor',
            company: 'Freelance',
            period: '2023 - Present',
            description: 'Conducting security audits of smart contracts, identifying vulnerabilities, and providing recommendations for improvements. Working with various blockchain platforms and protocols.',
            technologies: ['Solidity', 'Web3.js', 'Smart Contract Security', 'Ethereum', 'BSC'],
            achievements: [
                'Conducted security audits for multiple DeFi protocols',
                'Identified and reported critical vulnerabilities in smart contracts',
                'Developed automated testing tools for smart contract security',
                'Contributed to open-source security tools and documentation'
            ]
        },
        {
            title: 'Web3 Developer Intern',
            company: 'LILLUP',
            period: 'April 2024 - December 2024',
            description: 'Working on blockchain development and optimization of decentralized applications.',
            technologies: ['Solidity', 'Web3.js', 'Ethereum', 'React', 'Node.js'],
            achievements: [
                'Engineered a dApp for peer-to-peer transactions, accelerating transaction speed by 20% on the Ethereum network',
                'Implemented Solidity smart contracts, enhancing security and diminishing vulnerabilities by 30%',
                'Scrutinized over 1,000 blockchain transactions, pinpointing inefficiencies in gas consumption, leading to a 15% reduction in gas fees'
            ]
        },
        {
            title: 'Full Stack Developer',
            company: 'FabHotels',
            period: 'June 2024 - August 2024',
            description: 'Developed and optimized web applications for hotel booking and management.',
            technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'AWS'],
            achievements: [
                'Developed a custom booking engine that increased user engagement by 25% and boosted conversion rates by 15%',
                'Integrated REST APIs to enable real-time flight and hotel availability, improving search response times by 30%',
                'Analyzed user behavior data from over 5,000 sessions to uncover pain points, resulting in a 20% decrease in cart abandonment',
                'Presented insights and project improvements, receiving recognition for contributing to a 10% increase in client retention'
            ]
        },
        {
            title: 'Frontend Web Developer',
            company: 'InternDEV',
            period: 'April 2023 - June 2023',
            description: 'Focused on frontend development and UI/UX optimization.',
            technologies: ['React', 'CSS', 'JavaScript', 'UI Testing'],
            achievements: [
                'Boosted mobile user engagement by 25% by implementing a responsive layout system',
                'Created a custom CSS framework that improved page load speed by 20%',
                'Established an automated UI testing system, reducing manual testing time by 40%',
                'Enhanced user interface, leading to a 15% increase in conversion rates'
            ]
        },
        {
            title: 'Technical Team Member',
            company: 'Directorate of Student Affairs',
            period: 'November 2022 - March 2024',
            description: 'Contributing to technical initiatives and mentorship programs.',
            technologies: ['Web Development', 'Analytics', 'Project Management'],
            achievements: [
                'Spearheaded a mentorship program that facilitated the development of 15 new projects and fostered a collaborative learning environment',
                'Integrated analytics tools into event websites, which resulted in a 25% year-over-year increase in event attendance',
                'Improved skills and knowledge in web technologies through practical experience and teamwork'
            ]
        }
    ];

    return (
        <Section id="experience" className="py-20">
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
                        Experience
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        My professional journey
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500"></div>
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:ml-auto md:w-1/2' : 'md:mr-auto md:w-1/2'
                                    }`}
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative">
                                    <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-500 rounded-full"></div>
                                    <div className="ml-4">
                                        <h3
                                            className="text-xl font-bold mb-2"
                                            style={{ color: theme.colors.text }}
                                        >
                                            {experience.title}
                                        </h3>
                                        <p
                                            className="text-lg mb-2"
                                            style={{ color: theme.colors.primary }}
                                        >
                                            {experience.company}
                                        </p>
                                        <p
                                            className="text-sm mb-4"
                                            style={{ color: theme.colors.textSecondary }}
                                        >
                                            {experience.period}
                                        </p>
                                        <p
                                            className="mb-4"
                                            style={{ color: theme.colors.text }}
                                        >
                                            {experience.description}
                                        </p>
                                        <div className="mb-4">
                                            <h4
                                                className="font-semibold mb-2"
                                                style={{ color: theme.colors.text }}
                                            >
                                                Key Achievements:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1">
                                                {experience.achievements.map((achievement, i) => (
                                                    <li
                                                        key={i}
                                                        style={{ color: theme.colors.text }}
                                                    >
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}; 