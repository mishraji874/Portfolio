"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Award, Code, GraduationCap, Laptop, Network, Server, ExternalLink, Trophy, Medal, ShieldCheck } from 'lucide-react';
import { SiFreecodecamp, SiHackerrank, SiBitcoinsv, SiCisco } from 'react-icons/si';

const certificationsData = [
    {
        category: "Web Development",
        icon: <Laptop className="w-6 h-6" />,
        items: [
            {
                title: "FreeCodeCamp Certifications",
                icon: <SiFreecodecamp className="w-5 h-5" />,
                items: [
                    { name: "Responsive Web Design", link: "https://freecodecamp.org/certification/adityam874/responsive-web-design" },
                    { name: "JavaScript Algorithms and Data Structures", link: "https://freecodecamp.org/certification/adityam874/javascript-algorithms-and-data-structures" },
                    { name: "Frontend Development Libraries", link: "https://www.freecodecamp.org/certification/adityam874/front-end-development-libraries" }
                ]
            },
            {
                title: "HackerRank Certifications",
                icon: <SiHackerrank className="w-5 h-5" />,
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
        icon: <Server className="w-6 h-6" />,
        items: [
            {
                title: "BSV Academy Certifications",
                icon: <SiBitcoinsv className="w-5 h-5" />,
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
        icon: <Network className="w-6 h-6" />,
        items: [
            {
                title: "Cisco Networking Academy",
                icon: <SiCisco className="w-5 h-5" />,
                items: [
                    { name: "Networking Basics" },
                    { name: "Operating System Basics" }
                ]
            }
        ]
    },
    {
        category: "Full Stack Development",
        icon: <Code className="w-6 h-6" />,
        items: [
            {
                title: "University of Helsinki",
                icon: <GraduationCap className="w-5 h-5" />,
                items: [
                    { name: "Full Stack Development Certification Course" }
                ]
            }
        ]
    }
];

const achievementsData = [
    {
        category: "Hackathons",
        icon: <Trophy className="w-6 h-6" />,
        items: [
            {
                title: "WeHack 2025",
                description: "Built a Crowdfunding DApp named WeFund, a crowdfunding platform for startups and projects",
                icon: <Medal className="w-5 h-5 text-accent flex-shrink-0" />
            },
            {
                title: "Hack Verse 2.0 (Tamil Nadu)",
                description: "Built DApp Social, a social media blogging app based on blockchain technology",
                icon: <Medal className="w-5 h-5 text-accent flex-shrink-0" />
            },
            {
                title: "CSI Great India Hackfest2k24",
                description: "Built Cryptography Deanonymizer, a dApp for De-anonymisation for monitoring and tracking of illegal activities performed using cryptocurrency transaction technology (Currently in development)",
                icon: <Medal className="w-5 h-5 text-accent flex-shrink-0" />
            }
        ]
    },
    {
        category: "Security Research",
        icon: <ShieldCheck className="w-6 h-6" />,
        items: [
            {
                title: "Codehawks Ranking",
                description: "Currently ranked #80 as a security researcher and auditor",
                icon: <Award className="w-5 h-5 text-accent flex-shrink-0" />
            }
        ]
    }
];

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Certifications & Achievements</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        My commitment to continuous learning and professional development.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificationsData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl font-bold font-headline">
                                        {React.cloneElement(category.icon, { className: "text-primary" })}
                                        {category.category}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <Accordion type="single" collapsible className="w-full">
                                        {category.items.map((provider, providerIndex) => (
                                            <AccordionItem key={providerIndex} value={`item-${providerIndex}`}>
                                                <AccordionTrigger className="font-semibold">
                                                    <div className="flex items-center gap-2">
                                                        {React.cloneElement(provider.icon, { className: "w-5 h-5 text-muted-foreground" })}
                                                        <span>{provider.title}</span>
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <ul className="space-y-3 pl-2">
                                                        {provider.items.map((cert, certIndex) => (
                                                            <li key={certIndex} className="flex items-start gap-3">
                                                                <Award className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                                                                <div className="flex-grow">
                                                                    <p className="text-sm text-muted-foreground">{cert.name}</p>
                                                                    {cert.link && (
                                                                        <Button variant="link" size="sm" asChild className="p-0 h-auto -mt-1">
                                                                            <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                                                                                View Certificate <ExternalLink className="ml-1 h-3 w-3" />
                                                                            </Link>
                                                                        </Button>
                                                                    )}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                     {achievementsData.map((category, index) => (
                        <motion.div
                            key={index}
                             initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: (certificationsData.length + index) * 0.1 }}
                        >
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl font-bold font-headline">
                                        {React.cloneElement(category.icon, { className: "text-primary" })}
                                        {category.category}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-6">
                                        {category.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-4">
                                                {item.icon}
                                                <div className="flex-grow">
                                                    <h4 className="font-semibold">{item.title}</h4>
                                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
