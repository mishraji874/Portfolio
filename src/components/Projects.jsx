import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D } from '@react-three/drei';

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
        demo: "https://github.com/mishraji874/Timeless-NFT-Marketplace"
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
        demo: "https://airbnb-dapp-xi.vercel.app/"
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
        demo: "https://dsocial-pi.vercel.app/"
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
        demo: "https://zktune.vercel.app/"
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
        demo: "https://buymeacoffee-dapp-seven.vercel.app/"
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
        demo: "https://b2b-travel-company.vercel.app/"
    }
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
        Projects
        <meshStandardMaterial color="#3b82f6" wireframe />
      </Text3D>
    </Float>
  );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black text-white-800 relative overflow-hidden">
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
                    Projects
                </motion.h2>
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="border border-gray-700 rounded-lg shadow-lg overflow-hidden bg-gray-800/50 backdrop-blur-sm hover:border-blue-500 transition-colors"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            </motion.div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                {project.description.map((desc, idx) => (
                                    <motion.p 
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-white-600 mb-4"
                                    >
                                        <li>{desc}</li>
                                    </motion.p>
                                ))}
                                <div className="flex space-x-4 mt-4">
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.link}
                                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                                        target='_blank'
                                    >
                                        See Project
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={project.demo}
                                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                                        target='_blank'
                                    >
                                        Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
