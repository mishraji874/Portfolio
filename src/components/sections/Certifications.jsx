import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { FaCertificate, FaAward, FaGraduationCap, FaCode, FaLaptopCode, FaNetworkWired, FaServer, FaUniversity } from 'react-icons/fa';
import { SiFreecodecamp, SiHackerrank, SiBitcoinsv, SiCisco, SiUniversity } from 'react-icons/si';

export const Certifications = () => {
    const { theme } = useTheme();

    const certifications = [
        {
            category: "Web Development",
            icon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
            items: [
                {
                    title: "FreeCodeCamp Certifications",
                    icon: <SiFreecodecamp className="w-6 h-6 text-green-500" />,
                    items: [
                        { name: "Responsive Web Design", link: "https://freecodecamp.org/certification/adityam874/responsive-web-design" },
                        { name: "JavaScript Algorithms and Data Structures", link: "https://freecodecamp.org/certification/adityam874/javascript-algorithms-and-data-structures" },
                        { name: "Frontend Development Libraries", link: "https://www.freecodecamp.org/certification/adityam874/front-end-development-libraries" }
                    ]
                },
                {
                    title: "HackerRank Certifications",
                    icon: <SiHackerrank className="w-6 h-6 text-green-500" />,
                    items: [
                        { name: "Python (Basic)", link: "https://www.hackerrank.com/certificates/b869a75d4ba1" },
                        { name: "CSS", link: "https://www.hackerrank.com/certificates/6041309198ab" },
                        { name: "JavaScript (Basic)", link: "https://www.hackerrank.com/certificates/239aa05558db" }
                    ]
                }
            ]
        },
        {
            category: "Blockchain & Cryptocurrency",
            icon: <FaServer className="w-8 h-8 text-purple-500" />,
            items: [
                {
                    title: "BSV Academy Certifications",
                    icon: <SiBitcoinsv className="w-6 h-6 text-orange-500" />,
                    items: [
                        { name: "Bitcoin Basics: Protocol and Design Course", link: "https://bitcoinsv.academy/student/certificate/509421719867b607d48a0a1b0ae35c89" },
                        { name: "Bitcoin Primitives: Digital Signatures Course", link: "https://academy.bsvblockchain.org/student/certificate/27c602eea419202c123f75f17df800e0" },
                        { name: "Bitcoin Enterprise Course", link: "https://academy.bsvblockchain.org/student/certificate/02cf7b95eaf630256990316ef6d5bcb3" }
                    ]
                }
            ]
        },
        {
            category: "Networking & Operating Systems",
            icon: <FaNetworkWired className="w-8 h-8 text-blue-500" />,
            items: [
                {
                    title: "Cisco Networking Academy",
                    icon: <SiCisco className="w-6 h-6 text-blue-500" />,
                    items: [
                        { name: "Networking Basics" },
                        { name: "Operating System Basics" }
                    ]
                }
            ]
        },
        {
            category: "Full Stack Development",
            icon: <FaCode className="w-8 h-8 text-green-500" />,
            items: [
                {
                    title: "University of Helsinki",
                    icon: <FaUniversity  className="w-6 h-6 text-blue-500" />,
                    items: [
                        { name: "Full Stack Development Certification Course" }
                    ]
                }
            ]
        }
    ];

    return (
        <Section id="certifications" className="py-20">
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
                        Certifications
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        Professional certifications and courses I've completed
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="flex items-center gap-3">
                                    {category.icon}
                                    <h3
                                        className="text-xl font-bold"
                                        style={{ color: theme.colors.text }}
                                    >
                                        {category.category}
                                    </h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="space-y-6">
                                    {category.items.map((item, itemIndex) => (
                                        <div key={item.title} className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                {item.icon}
                                                <h4
                                                    className="text-lg font-semibold"
                                                    style={{ color: theme.colors.text }}
                                                >
                                                    {item.title}
                                                </h4>
                                            </div>
                                            <ul className="space-y-2 pl-8">
                                                {item.items.map((cert, certIndex) => (
                                                    <motion.li
                                                        key={cert.name}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: certIndex * 0.1 }}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <FaCertificate className="text-yellow-500 flex-shrink-0" />
                                                        {cert.link ? (
                                                            <a
                                                                href={cert.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-500 hover:text-blue-600 transition-colors flex-grow"
                                                            >
                                                                {cert.name}
                                                            </a>
                                                        ) : (
                                                            <span
                                                                className="flex-grow"
                                                                style={{ color: theme.colors.text }}
                                                            >
                                                                {cert.name}
                                                            </span>
                                                        )}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}; 