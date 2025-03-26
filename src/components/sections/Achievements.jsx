import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { FaTrophy, FaMedal, FaHackathon, FaShieldAlt } from 'react-icons/fa';

export const Achievements = () => {
    const { theme } = useTheme();

    const achievements = [
        {
            category: "Hackathons",
            items: [
                {
                    title: "WeHack 2025",
                    description: "Built a Crowdfunding DApp named WeFund, a crowdfunding platform for startups and projects",
                    icon: <FaMedal className="w-6 h-6 text-purple-500" />
                },
                {
                    title: "Hack Verse 2.0 (Tamil Nadu)",
                    description: "Built DApp Social, a social media blogging app based on blockchain technology",
                    icon: <FaMedal className="w-6 h-6 text-purple-500" />
                },
                {
                    title: "CSI Great India Hackfest2k24",
                    description: "Built Cryptography Deanonymizer, a dApp for De-anonymisation for monitoring and tracking of illegal activities performed using cryptocurrency transaction technology (Currently in development)",
                    icon: <FaMedal className="w-6 h-6 text-purple-500" />
                }
            ]
        },
        {
            category: "Security Research",
            items: [
                {
                    title: "Codehawks Ranking",
                    description: "Currently ranked #80 as a security researcher and auditor",
                    icon: <FaShieldAlt className="w-6 h-6 text-blue-500" />
                }
            ]
        }
    ];

    return (
        <Section id="achievements" className="py-20">
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
                        Achievements
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        Notable accomplishments and recognitions
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {achievements.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                        >
                            <h3
                                className="text-xl font-bold mb-4 flex items-center gap-2"
                                style={{ color: theme.colors.text }}
                            >
                                <FaTrophy className="text-yellow-500" />
                                {category.category}
                            </h3>
                            <div className="space-y-4">
                                {category.items.map((achievement, index) => (
                                    <motion.div
                                        key={achievement.title}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            {achievement.icon}
                                        </div>
                                        <div>
                                            <h4
                                                className="text-lg font-semibold mb-1"
                                                style={{ color: theme.colors.text }}
                                            >
                                                {achievement.title}
                                            </h4>
                                            <p
                                                className="text-sm"
                                                style={{ color: theme.colors.textSecondary }}
                                            >
                                                {achievement.description}
                                            </p>
                                        </div>
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