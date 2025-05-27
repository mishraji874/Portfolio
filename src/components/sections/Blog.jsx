import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../common/Button';

const sampleBlogs = [
    {
        title: "Understanding Flash Loan Attacks",
        excerpt: "Explore how flash loans work in DeFi, their potential for exploitation in governance systems, and strategies to mitigate these attacks.",
        link: "https://blog-aditya.vercel.app/blog/understanding-flash-loan-attacks",
        image: "https://lh6.googleusercontent.com/ONsCHP1R5vVNvfUiGvsyRNNhzd5CjXirp4lCrQPIhx4A3lXAq54mXYE1ik0pzFyc4wunchhEZKi5SHAZ6TAx7w3irhqDkB1fp_ZMjFLIOFEX_lWjfZMllUE08wlVuFwqfYnOA9HY"
    },
    {
        title: "A Deep Dive into EIP-1271",
        excerpt: "Learn about the vulnerabilities in EIP-1271, including signature replay attacks, and how to mitigate them effectively.",
        link: "https://blog-aditya.vercel.app/blog/a-deep-dive-into-eip-1271",
        image: "https://celebrated-gift-f83e5c9419.media.strapiapp.com/EIP_1272_e65792851d.png"
    },
    {
        title: "Understanding getProgramAccounts RPC Method using TypeScript",
        excerpt: "Learn how to use the getProgramAccounts RPC method using TypeScript to query accounts owned by a program on Solana.",
        link: "https://blog-aditya.vercel.app/blog/understanding-getprogramaccounts-rpc-method-using-typescript",
        image: "https://miro.medium.com/v2/resize:fit:1358/1*YOIQtfgKs4J4u6tvgYwLTQ.jpeg"
    },
    {
        title: "Safeguarding Solidity's ecrecover Against Signature Malleability",
        excerpt: "Learn how to secure Ethereum's ecrecover function against signature malleability attacks using OpenZeppelin's ECDSA library.",
        link: "https://blog-aditya.vercel.app/blog/safeguarding-soliditys-ecrecover-against-signature-malleability",
        image: "https://miro.medium.com/v2/resize:fit:728/1*MVc6Bwoj5LWsZ-5xBnnkEw.png"
    },
    {
        title: "Mastering Fuzzing in Blockchain: A Deep Dive into Securing Layer 1 Protocols & Smart Contracts",
        excerpt: "Explore how fuzzing can help secure Layer 1 protocols and smart contracts in blockchain systems.",
        link: "https://blog-aditya.vercel.app/blog/mastering-fuzzing-in-blockchain-a-deep-dive-into-securing-layer-1-protocols--smart-contracts",
        image: "https://wp.hacken.io/wp-content/uploads/2023/06/Blockchain-Fuzzing.jpg"
    },
    {
        title: "From Blocks to Chains: Building Your First Blockchain in Python",
        excerpt: "Learn how to build a blockchain from scratch using Python and understand its core concepts.",
        link: "https://blog-aditya.vercel.app/blog/building-your-first-blockchain-in-python",
        image: "https://cdn.activestate.com/wp-content/uploads/2020/02/BuildaBlockchainWithPython.png"
    },
];

export const Blog = () => {
    const { theme } = useTheme();

    return (
        <Section id="blogs" className="py-20">
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
                        Latest Blogs
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        Insights and tutorials on web development and blockchain
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {sampleBlogs.map((blog, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                        >
                            <div className="mb-4">
                                <a href={blog.link} target="_blank" rel="noopener noreferrer">
                                    <img 
                                        src={blog.image} 
                                        alt={blog.title} 
                                        className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity"
                                    />
                                </a>
                            </div>
                            <h3
                                className="text-xl font-bold mb-4"
                                style={{ color: theme.colors.text }}
                            >
                                {blog.title}
                            </h3>
                            <p
                                className="mb-4"
                                style={{ color: theme.colors.textSecondary }}
                            >
                                {blog.excerpt}
                            </p>
                            <a
                                href={blog.link}
                                className="text-blue-500 hover:text-blue-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More →
                            </a>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => window.open('https://blog-aditya.vercel.app/', '_blank')}
                        style={{ backgroundColor: theme.colors.primary, color: theme.colors.text }}
                    >
                        View All Blogs
                    </Button>
                </div>
            </Container>
        </Section>
    );
};