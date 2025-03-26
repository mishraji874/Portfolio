import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const Projects = () => {
    const { theme } = useTheme();

    const projects = [
        {
            title: "NFT Marketplace: Distributed platform for trading and minting NFTs",
            description: [
                "Architected a smart contract system for NFT minting and trading, enhancing security and user trust by 20% and reducing errors by 30%.",
                "UtilizedWeb3.js and Hardhat for Ethereum integration, reducing development time by 25%.",
                "Elevated user experience by 40% through a React-based interface for minting, buying, and selling NFTs.",
                "Employed IPFS for storage, improving data retrieval speed by 50% and ensuring asset availability."
            ],
            image: "/images/nft-marketplace.gif",
            link: "https://github.com/mishraji874/Timeless-NFT-Marketplace",
            demo: "https://github.com/mishraji874/Timeless-NFT-Marketplace",
            technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Hardhat']
        },
        {
            title: "Airbnb dapp Clone: Decentralized Home Sharing",
            description: [
                "Established a booking system for short-term rentals, increasing booking transparency by 35%.",
                "Integrated web3.storage for property listing storage, managing over 2,500 listings and reducing server costs by 40%.",
                "Designed analytics to track booking trends, enhancing forecast accuracy by 20%.",
                "Incorporated smart contract components for seamless integration with Ethereum payment gateways, enabling compatibility with over 10,000 transactions monthly."
            ],
            image: "/images/airbnb-dapp.png",
            link: "https://github.com/mishraji874/Airbnb-dApp",
            demo: "https://airbnb-dapp-xi.vercel.app/",
            technologies: ['Solidity', 'Web3.js', 'React', 'web3.storage', 'Ethereum']
        },
        {
            title: "DSocial: Decentralized Social Media Application",
            description: [
                "Built a user authentication system, achieving 100% control over user data.",
                "Developed a content posting feature, processing over 10,000 transactions daily on Ethereum.",
                "Generated real-time data visualizations, increasing user retention by 30%.",
                "Fortified data integrity by 50% and reduced contract deployment costs by 20% with modular smart contracts integrated with IPFS."
            ],
            image: "/images/dsocial.png",
            link: "https://github.com/mishraji874/Dsocial",
            demo: "https://dsocial-pi.vercel.app/",
            technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Ethereum']
        },
        {
            title: "zkTune: Decentralized Music Streaming Platform",
            description: [
                "Artists upload and monetize music, keeping ownership through blockchain.",
                "Ensures user privacy using zero-knowledge proofs, protecting data during streaming.",
                "Stores music securely on IPFS and blockchain, making it tamper-proof and always accessible.",
                "Smart contracts enable direct, fee-free payments to artists for streams."
            ],
            image: "/images/zktune.png",
            link: "https://github.com/mishraji874/zkTune-Decentralized-Music-Streaming-Platform",
            demo: "https://zktune.vercel.app/",
            technologies: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Zero-Knowledge Proofs']
        },
        {
            title: "BuyMeACoffee-dApp: Support Creators Seamlessly",
            description: [
                "Enables users to send small donations to creators, allowing for direct support with minimal fees.",
                "Transactions are recorded on the Sepolia testnet, ensuring transparency and traceability for all contributions.",
                "Smart contracts automate and secure payments, providing immediate transfers to the creator's wallet.",
                "Features a simple and intuitive UI, making it easy for users to support creators with just a few clicks."
            ],
            image: "/images/buymeacoffee.png",
            link: "https://github.com/mishraji874/BuyMeACoffee-dApp",
            demo: "https://buymeacoffee-dapp-seven.vercel.app/",
            technologies: ['Solidity', 'Web3.js', 'React', 'Sepolia', 'Ethereum']
        },
        {
            title: "B2B Travel Company Website: Efficient Travel Solutions for Businesses",
            description: [
                "Provides a user-friendly interface for quick, efficient bookings across multiple travel services, tailored for business needs.",
                "Allows companies to manage complex travel itineraries and schedules in one centralized platform.",
                "Integrates with major travel providers, offering a broad range of options and ensuring real-time availability and pricing.",
                "Implements robust security measures for safe transactions, protecting sensitive business data throughout the booking process."
            ],
            image: "/images/b2b.png",
            link: "https://github.com/mishraji874/B2B-Travel-Compnay",
            demo: "https://b2b-travel-company.vercel.app/",
            technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'AWS']
        }
    ];

    return (
        <Section id="projects" className="py-20">
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
                        Projects
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        Featured work and contributions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex space-x-4">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3
                                    className="text-xl font-bold mb-4"
                                    style={{ color: theme.colors.text }}
                                >
                                    {project.title}
                                </h3>
                                <div className="space-y-3 mb-4">
                                    {project.description.map((desc, i) => (
                                        <p
                                            key={i}
                                            className="text-sm"
                                            style={{ color: theme.colors.textSecondary }}
                                        >
                                            {desc}
                                        </p>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
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