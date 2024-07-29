import React from 'react';

const projects = [
    {
        title: "NFT Marketplace",
        description: [
            "The NFT marketplace is a digital space where unique digital assets are bought, sold, and traded using blockchain technology. Non-fungible tokens (NFTs) represent ownership of exclusive digital or physical items. Artists tokenize their work, and smart contracts ensure secure, transparent transactions, reshaping industries by providing a novel way to own and monetize digital creations.",
            "Integrated digital wallets for secure storage and transfer of NFTs, reducing the number of reported security issues by 20% through robust encryption and authentication measures.",
            "Developed and deployed an authentication and authorization system, achieving a 99.9% uptime and zero reported security breaches during the project lifecycle."
        ],
        image: "/images/nft-marketplace.gif",
        link: "https://github.com/mishraji874/Timeless-NFT-Marketplace"
    },
    {
        title: "Browser Wallet Extension",
        description: [
            "The wallet extension project aimed to provide a secure and convenient solution for managing cryptocurrency assets, combining robust security measures with user-friendly design and seamless browser integration.",
            "I’ve developed the project to address increasing demand, enhance convenience, improve security, and capitalize on market opportunities, and built with the help of ReactJS, Ether.js, and Moralis.",
            "It has key features like secure storage, browser integration, transaction management, multi-currency support, privacy protection, backup and recovery."
        ],
        image: "/images/browser-wallet-extension.png",
        link: "https://github.com/mishraji874/Brownser-Extension-Wallet"
    },
    {
        title: "DApp Social",
        description: [
            "The DApp Social Media Platform revolutionizes social networking with decentralization, ensuring user privacy and data control. Built on blockchain, it employs smart contracts for transparent interactions and content monetization.",
            "This platform empowers users, offering a secure, censorship-resistant space where ownership and control over data are prioritized, creating a truly community-driven social experience.",
            "Utilized IPFS (InterPlanetary File System) for decentralized storage of media files, improving content availability and reducing reliance on centralized servers."
        ],
        image: "/images/dsocial.png",
        link: "https://github.com/mishraji874/Dsocial"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black text-white-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="border rounded-lg shadow-lg overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                {project.description.map((desc, idx) => (
                                    <p key={idx} className="text-white-600 mb-4">{desc}</p>
                                ))}
                                <a href={project.link} className="inline-block bg-blue-500 text-white px-4 py-2 rounded mt-4">See Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
