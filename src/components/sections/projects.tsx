import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NFT Marketplace",
    description: [
      "Architected a smart contract system for NFT minting and trading, enhancing security and user trust by 20% and reducing errors by 30%.",
      "Utilized Web3.js and Hardhat for Ethereum integration, reducing development time by 25%.",
      "Elevated user experience by 40% through a React-based interface for minting, buying, and selling NFTs.",
      "Employed IPFS for storage, improving data retrieval speed by 50% and ensuring asset availability."
    ],
    image: "/nft-marketplace.png",
    tags: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Hardhat'],
    liveUrl: "https://github.com/mishraji874/Timeless-NFT-Marketplace",
    githubUrl: "https://github.com/mishraji874/Timeless-NFT-Marketplace",
    aiHint: "nft marketplace"
  },
  {
    title: "Airbnb dApp Clone",
    description: [
      "Established a booking system for short-term rentals, increasing booking transparency by 35%.",
      "Integrated web3.storage for property listing storage, managing over 2,500 listings and reducing server costs by 40%.",
      "Designed analytics to track booking trends, enhancing forecast accuracy by 20%.",
      "Incorporated smart contract components for seamless integration with Ethereum payment gateways, enabling compatibility with over 10,000 transactions monthly."
    ],
    image: "/airbnb-dapp.png",
    tags: ['Solidity', 'Web3.js', 'React', 'web3.storage', 'Ethereum'],
    liveUrl: "https://airbnb-dapp-xi.vercel.app/",
    githubUrl: "https://github.com/mishraji874/Airbnb-dApp",
    aiHint: "home sharing"
  },
  {
    title: "DSocial",
    description: [
      "Built a user authentication system, achieving 100% control over user data.",
      "Developed a content posting feature, processing over 10,000 transactions daily on Ethereum.",
      "Generated real-time data visualizations, increasing user retention by 30%.",
      "Fortified data integrity by 50% and reduced contract deployment costs by 20% with modular smart contracts integrated with IPFS."
    ],
    image: "/dsocial.png",
    tags: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Ethereum'],
    liveUrl: "https://dsocial-pi.vercel.app/",
    githubUrl: "https://github.com/mishraji874/Dsocial",
    aiHint: "social media"
  },
  {
    title: "zkTune",
    description: [
      "Artists upload and monetize music, keeping ownership through blockchain.",
      "Ensures user privacy using zero-knowledge proofs, protecting data during streaming.",
      "Stores music securely on IPFS and blockchain, making it tamper-proof and always accessible.",
      "Smart contracts enable direct, fee-free payments to artists for streams."
    ],
    image: "/zktune.png",
    tags: ['Solidity', 'Web3.js', 'React', 'IPFS', 'Zero-Knowledge Proofs'],
    liveUrl: "https://zktune.vercel.app/",
    githubUrl: "https://github.com/mishraji874/zkTune-Decentralized-Music-Streaming-Platform",
    aiHint: "music streaming"
  },
  {
    title: "BuyMeACoffee dApp",
    description: [
      "Enables users to send small donations to creators, allowing for direct support with minimal fees.",
      "Transactions are recorded on the Sepolia testnet, ensuring transparency and traceability for all contributions.",
      "Smart contracts automate and secure payments, providing immediate transfers to the creator's wallet.",
      "Features a simple and intuitive UI, making it easy for users to support creators with just a few clicks."
    ],
    image: "/buymeacoffee.png",
    tags: ['Solidity', 'Web3.js', 'React', 'Sepolia', 'Ethereum'],
    liveUrl: "https://buymeacoffee-dapp-seven.vercel.app/",
    githubUrl: "https://github.com/mishraji874/BuyMeACoffee-dApp",
    aiHint: "creator support"
  },
  {
    title: "B2B Travel Website",
    description: [
      "Provides a user-friendly interface for quick, efficient bookings across multiple travel services, tailored for business needs.",
      "Allows companies to manage complex travel itineraries and schedules in one centralized platform.",
      "Integrates with major travel providers, offering a broad range of options and ensuring real-time availability and pricing.",
      "Implements robust security measures for safe transactions, protecting sensitive business data throughout the booking process."
    ],
    image: "/b2b.png",
    tags: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'AWS'],
    liveUrl: "https://b2b-travel-company.vercel.app/",
    githubUrl: "https://github.com/mishraji874/B2B-Travel-Compnay",
    aiHint: "business travel"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of my work across the full stack and Web3.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 flex flex-col bg-card">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={project.aiHint}
                />
              </CardHeader>
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardContent className="p-0 text-muted-foreground flex-grow">
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-0 pt-6 flex justify-end gap-2">
                  <Button variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
