import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const blogPosts = [
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
  {
    title:
      "Avalanche Blockchain: Scaling Web3 with Subnets and Super-Fast dApps",
    description:
      "Explore Avalanche, a high-performance Layer 1 blockchain offering near-instant finality, modularity, and the ability to create custom blockchains or subnets, ideal for modern dApps.",
    url: "https://markdown-memoirs.vercel.app/blogs/avalance-blockchain",
    tags: [
      "Avalanche",
      "Blockchain",
      "dApps",
      "Scalability",
      "Subnets",
      "EVM",
      "Web3",
    ],
  },
  {
    title: "Unlocking Ethereum’s Potential: A Deep Dive into EIP-712",
    description:
      "Explore Ethereum Improvement Proposal 712 (EIP-712), a standard that has revolutionized Ethereum’s approach to digital signatures and data handling, enhancing security and transparency.",
    url: "https://markdown-memoirs.vercel.app/blogs/eip-712-deep-dive",
    tags: [
      "Ethereum",
      "Web3",
      "EVM",
      "EIP",
      "Smart Contracts",
      "Digital Signatures",
      "NFTs",
    ],
  },
  {
    title: "RPC Providers in Web3 and Blockchain",
    description:
      "Learn about RPC (Remote Procedure Call) providers, the crucial bridge between decentralized applications (dApps) and blockchain networks, facilitating seamless interaction with on-chain data and smart contracts.",
    url: "https://markdown-memoirs.vercel.app/blogs/rpc-providers-web3-blockchain",
    tags: ["Web3", "Blockchain", "RPC", "dApps", "JSON-RPC"],
  },
  {
    title:
      "A Deep Dive into EIP-1271: Understanding Signature Verification for Smart Contracts",
    description:
      "Explore EIP-1271, a crucial Ethereum improvement proposal that enables smart contracts to verify signatures, enhancing dApp security and functionality.",
    url: "https://markdown-memoirs.vercel.app/blogs/eip-1271-deep-dive",
    tags: [
      "Blockchain",
      "Ethereum",
      "EIP-1271",
      "Smart Contracts",
      "Security",
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
