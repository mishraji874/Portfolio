import React from 'react';

const experiences = [
    {
        role: "Web3 Developer Intern",
        company: "LILLUP",
        duration: "Mar 2024 - Present",
        responsibilities: [
            "Working as a Team Lead of the Web3/Blockchain Team in the company.",
            "Using Base blockchain (Layer2) for the development of the project in the internship.",
            "Implemented smart contracts for various use cases, such as tokenization, decentralized finance (DeFi), and non-fungible tokens (NFTs)."
        ]
    },
    {
        role: "Frontend Web Developer",
        company: "InternDEV",
        duration: "Apr 2023 - Jun 2023",
        responsibilities: [
            "I worked as a frontend web developer intern at InternDEV.",
            "By doing internships and making projects I’ve learned the best use of React and NextJS.",
            "Working on the tasks helps me understand the concepts of React and NextJS very well."
        ]
    },
    {
        role: "Technical Team Member",
        company: "Directorate of Student Affairs",
        duration: "Nov 2022 - Present",
        responsibilities: [
            "I’m working as a Technical Team Member in my college technical club DSA.",
            "I’m working here as a Full Stack Web Developer in the team and developing some websites for college events.",
            "This club helps me in gaining so much knowledge about web technologies and also enhances my skills by 10X."
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
