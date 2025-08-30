import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Core Concepts of React: A Comprehensive Guide for Beginners",
    description:
      "A simple guide to the fundamental terminology of React, from components and JSX to state management, hooks, and advanced rendering concepts.",
    url: "https://markdown-memoirs.vercel.app/blogs/react-core-concepts-guide",
    tags: [
      "React",
      "JavaScript",
      "Web Development",
      "Frontend",
      "React Hooks",
      "Components",
      "State Management",
    ],
  },
  {
    title: "Understanding Pay to Script Hash (P2SH) in Bitcoin",
    description:
      "Learn about Pay to Script Hash (P2SH), a Bitcoin transaction type that enables complex, multi-party transactions while simplifying the address format for the sender.",
    url: "https://markdown-memoirs.vercel.app/blogs/pay-to-script-hash-p2sh-bitcoin",
    tags: [
      "Bitcoin",
      "P2SH",
      "Blockchain",
      "Smart Contracts",
      "Multisig",
      "Cryptography",
      "BIP16",
    ],
  },
  {
    title:
      "The Zero-Knowledge Revolution: Scaling Ethereum with ZK Proofs and Starknet",
    description:
      "Explore how Zero-Knowledge Proofs (ZKPs) are fundamentally reshaping blockchain scalability and privacy, with a focus on Starknet's innovative use of this technology to scale Ethereum.",
    url: "https://markdown-memoirs.vercel.app/blogs/zk-proofs-starknet-ethereum-scaling",
    tags: [
      "ZK Proofs",
      "Starknet",
      "Ethereum Scaling",
      "Blockchain",
      "Privacy",
      "Zero-Knowledge",
      "Cairo",
      "Web3",
    ],
  },
  {
    title:
      "DeFi's Evolution: Beyond Buzzwords to a Parallel Financial Revolution",
    description:
      "Explore how Decentralized Finance (DeFi) has evolved from an experiment to a robust, borderless financial system, attracting traditional finance and addressing key challenges.",
    url: "https://markdown-memoirs.vercel.app/blogs/defi-parallel-financial-system",
    tags: [
      "DeFi",
      "Decentralized Finance",
      "Blockchain",
      "Fintech",
      "Smart Contracts",
      "Web3",
      "Sustainable DeFi",
      "RWA",
    ],
  },
  {
    title:
      "Unlocking Web3 Security Careers: Why Cairo & Starknet Are Your Next Frontier",
    description:
      "Discover why mastering Cairo and Starknet is a strategic move for Web3 security researchers and Web2 cybersecurity professionals looking for high-demand opportunities.",
    url: "https://markdown-memoirs.vercel.app/blogs/cairo-starknet-security-career",
    tags: [
      "Cairo",
      "Cairo Lang",
      "Starknet",
      "Starknet Ecosystem",
      "Smart Contract Security",
    ],
  },
  {
    title: "Unlocking Vaults: A Deep Dive into the ERC-4626 Token Standard",
    description:
      "Explore ERC-4626, a standardized protocol that streamlines the operation and integration of tokenized vaults, enhancing DeFi efficiency and user experience.",
    url: "https://markdown-memoirs.vercel.app/blogs/erc-4626-vault-tokenization",
    tags: [
      "DeFi",
      "Blockchain",
      "ERC-4626",
      "Tokenized Vaults",
      "Smart Contracts",
      "Ethereum",
      "Web3",
    ],
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Latest Blog Posts
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sharing insights on Web3, security, and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 flex flex-col bg-card"
            >
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline mb-2 text-xl">
                  {post.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardContent className="p-0 text-muted-foreground flex-grow mb-4">
                  <p className="text-sm">{post.description}</p>
                </CardContent>
                <div className="mt-auto">
                  <Button asChild variant="link" className="p-0 h-auto">
                    <Link
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-all hover:shadow-lg transform hover:scale-105"
          >
            <Link
              href="https://markdown-memoirs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
