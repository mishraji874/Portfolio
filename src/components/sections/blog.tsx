import Link from "next/link";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "RPC Providers in Web3 and Blockchain",
    description: "Learn about RPC (Remote Procedure Call) providers, the crucial bridge between decentralized applications (dApps) and blockchain networks, facilitating seamless interaction with on-chain data and smart contracts.",
    url: "https://markdown-memoirs.vercel.app/blogs/rpc-providers-web3-blockchain",
    tags: ["Web3", "Blockchain", "RPC", "dApps", "JSON-RPC"],
  },
  {
    title: "A Deep Dive into EIP-1271: Understanding Signature Verification for Smart Contracts",
    description: "Explore EIP-1271, a crucial Ethereum improvement proposal that enables smart contracts to verify signatures, enhancing dApp security and functionality.",
    url: "https://markdown-memoirs.vercel.app/blogs/eip-1271-deep-dive",
    tags: ["Blockchain", "Ethereum", "EIP-1271", "Smart Contracts", "Security", "Web3"],
  },
  {
    title: "EIP-7528: Standardizing ETH Handling in EVM for Enhanced Interoperability",
    description: "Discover EIP-7528, a proposed Ethereum standard that aims to unify the handling of native ETH with ERC-20 tokens using a pseudo-address, streamlining development and improving gas efficiency.",
    url: "https://markdown-memoirs.vercel.app/blogs/eip-7528-eth-standardization",
    tags: ["Ethereum", "EIP", "EVM", "ETH", "ERC-20", "Web3", "Blockchain"],
  },
  {
    title: "Understanding Flash Loan Attacks: A Deep Dive into DeFi Vulnerabilities",
    description: "Explore the mechanics of flash loan attacks in DeFi, how they exploit governance systems, and crucial mitigation strategies, with insights from the 'Selfie' challenge.",
    url: "https://markdown-memoirs.vercel.app/blogs/flash-loan-attacks",
    tags: ["DeFi", "Flash Loans", "Security", "Blockchain", "DAO", "Governance"],
  },
  {
    title: "Understanding getProgramAccounts RPC Method Using TypeScript",
    description: "Learn how to efficiently use Solana's getProgramAccounts RPC method with filters and data slicing using TypeScript and web3.js.",
    url: "https://markdown-memoirs.vercel.app/blogs/solana-getprogramaccounts-typescript",
    tags: ["Solana", "Web3", "TypeScript", "RPC", "Blockchain"],
  },
  {
    title: "Safeguarding Solidity's ecrecover Against Signature Malleability",
    description: "NUnderstand how to protect Ethereum smart contracts from signature malleability by leveraging OpenZeppelin's ECDSA library with Solidity.",
    url: "https://markdown-memoirs.vercel.app/blogs/solidity-ecrecover-signature-malleability",
    tags: ["Solidity", "Security", "ECDSA", "ecrecover", "OpenZeppelin"],
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Latest Blog Posts</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Sharing insights on Web3, security, and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 flex flex-col bg-card">
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="font-headline mb-2 text-xl">{post.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardContent className="p-0 text-muted-foreground flex-grow mb-4">
                  <p className="text-sm">{post.description}</p>
                </CardContent>
                <div className="mt-auto">
                    <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={post.url} target="_blank" rel="noopener noreferrer">
                            Read More <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
