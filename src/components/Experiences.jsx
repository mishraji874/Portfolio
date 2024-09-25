import React from 'react';

const experiences = [
    {
        role: "Web3 Developer Intern",
        company: "LILLUP",
        duration: "April 2024 - Present",
        responsibilities: [
            "Engineered a dApp for peer-to-peer transactions, accelerating transaction speed by 20% on the Ethereum network.",
            "Implemented Solidity smart contracts, enhancing security and diminishing vulnerabilities by 30%.",
            "Scrutinized over 1,000 blockchain transactions, pinpointing inefficiencies in gas consumption, leading to a 15% reduction in gas fees."
        ]
    },
    {
        role: "Full Stack Developer",
        company: "FabHotels",
        duration: "June 2024 - August 2024",
        responsibilities: [
            "Developed a custom booking engine that increased user engagement by 25% and boosted conversion rates by 15%.",
            "Integrated REST APIs to enable real-time flight and hotel availability, improving search response times by 30%.",
            "Analyzed user behavior data from over 5,000 sessions to uncover pain points, resulting in a 20% decrease in cart abandonment.",
            "Presented insights and project improvements, receiving recognition for contributing to a 10% increase in client retention."
        ]
    },
    {
        role: "Frontend Web Developer",
        company: "InternDEV",
        duration: "Apr 2023 - Jun 2023",
        responsibilities: [
            "Boosted mobile user engagement by 25% by implementing a responsive layout system.",
            "Created a custom CSS framework that improved page load speed by 20%.",
            "Established an automated UI testing system, reducing manual testing time by 40%.",
            "Enhanced user interface, leading to a 15% increase in conversion rates."
        ]
    },
    {
        role: "Technical Team Member",
        company: "Directorate of Student Affairs",
        duration: "Nov 2022 - Present",
        responsibilities: [
            "Spearheaded a mentorship program that facilitated the development of 15 new projects and fostered a collaborative learning environment.",
            "Integrated analytics tools into event websites, which resulted in a 25% year-over-year increase in event attendance.",
            "Improved skills and knowledge in web technologies through practical experience and teamwork."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-black text-white-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border rounded-lg p-6 shadow-lg bg-white-50">
                            <h3 className="text-2xl font-bold">{exp.role}, <span className="text-blue-500">{exp.company}</span></h3>
                            <p className="text-red-600">{exp.duration}</p>
                            <ul className="list-disc list-inside mt-4">
                                {exp.responsibilities.map((item, idx) => (
                                    <li key={idx} className="mt-2">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
