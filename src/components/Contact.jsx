import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa';
import { IoMailOpen } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const FloatingText = () => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
            >
                Contact Me
                <meshStandardMaterial color="#3b82f6" wireframe />
            </Text3D>
        </Float>
    );
};

const ContactMe = () => {
    const socialLinks = [
        { icon: <IoMailOpen />, href: "mailto:jobs.adityamsr@gmail.com", label: "Email" },
        { icon: <FaGithub />, href: "https://www.github.com/mishraji874", label: "GitHub" },
        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/aditya-mishra-a76237226", label: "LinkedIn" },
        { icon: <FaTwitter />, href: "https://x.com/mishraji874_eth?t=KDJgecA4KOH_ucltIC8_Jw&s=09", label: "Twitter" },
        { icon: <FaInstagram />, href: "https://instagram.com/mishraaa874", label: "Instagram" },
        { icon: <FaTelegram />, href: "https://telegram.me/mishraji63", label: "Telegram" }
    ];

    return (
        <section id="contact" className="bg-black text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 opacity-90"></div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <FloatingText />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
            <div className="container mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-8"
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    Feel free to reach out through any of the following platforms:
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-8"
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                            viewport={{ once: true }}
                            className="text-3xl hover:text-blue-500 transition-colors"
                            aria-label={link.label}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactMe;
