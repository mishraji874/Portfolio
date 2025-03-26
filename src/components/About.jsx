import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text3D } from '@react-three/drei';

const FloatingText = () => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
            <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
            >
                About Me
                <meshStandardMaterial color="#3b82f6" wireframe />
            </Text3D>
        </Float>
    );
};

const About = () => {
    return (
        <section className="about text-white py-20 relative overflow-hidden">
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
                    <div className="text-lg leading-relaxed max-w-3xl">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            Hello! I'm <span className="text-blue-500">Aditya Mishra</span>, a passionate and experienced Full Stack Web Developer, Full Stack Web3 Developer, and Smart Contract Security Researcher and Auditor. With a robust background in software development and a deep understanding of blockchain technology, I have dedicated myself to mastering the full spectrum of web development and smart contract security.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mt-8 mb-4">Full Stack Web Developer</h3>
                            <p className="mb-4">
                                As a Full Stack Web Developer, I have extensive experience in building dynamic, responsive, and user-friendly web applications. My expertise spans both front-end and back-end development, utilizing modern technologies and frameworks such as ReactJS, NextJS, TailwindCSS, Node.js, and Express.js. I excel at creating efficient and scalable web solutions, ensuring seamless user experiences across various devices and platforms.
                            </p>
                            <p className="mb-4">
                                I am proficient in a variety of programming languages including JavaScript, Python, and SQL, and I have a strong understanding of database management systems like MongoDB and PostgreSQL. My projects often involve integrating APIs, optimizing performance, and implementing robust authentication and authorization mechanisms.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mt-8 mb-4">Full Stack Web3 Developer</h3>
                            <p className="mb-4">
                                In the realm of Web3 development, I specialize in building decentralized applications (DApps) that leverage blockchain technology to offer secure, transparent, and decentralized solutions. My skills include writing and deploying smart contracts using Solidity and Rust, as well as integrating them with front-end interfaces using Ether.js and Web3.js.
                            </p>
                            <p className="mb-4">
                                I am adept at working with various blockchain platforms such as Ethereum, Binance Smart Chain, and Layer 2 solutions like Polygon and Base. My experience includes developing tokenization systems, decentralized finance (DeFi) protocols, and non-fungible token (NFT) marketplaces. I am committed to pushing the boundaries of what's possible in the Web3 space, constantly exploring new technologies and frameworks to enhance my development toolkit.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mt-8 mb-4">Smart Contract Security Researcher and Auditor</h3>
                            <p className="mb-4">
                                As a Smart Contract Security Researcher and Auditor, I focus on ensuring the security and integrity of blockchain-based applications. My role involves meticulously reviewing and auditing smart contracts to identify vulnerabilities and potential exploits. I use industry-standard tools and methodologies to perform comprehensive security assessments, aiming to protect projects from malicious attacks and bugs.
                            </p>
                            <p className="mb-4">
                                My expertise in security extends to developing best practices for secure smart contract development, including implementing rigorous testing procedures and creating secure coding guidelines. I am passionate about contributing to the security community by sharing my findings and collaborating with other researchers to advance the field of blockchain security.
                            </p>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            viewport={{ once: true }}
                            className="mt-8"
                        >
                            In summary, my diverse skill set and experience in Full Stack Web Development, Full Stack Web3 Development, and Smart Contract Security Research and Auditing enable me to tackle complex challenges and deliver innovative solutions. I am always eager to learn and grow, embracing new technologies and methodologies to stay at the forefront of the industry.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
