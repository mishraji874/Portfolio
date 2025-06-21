"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-primary/10 [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold font-headline tracking-tighter">
                    Aditya Mishra
                </h1>
                <p className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    Full-Stack & Web3 Developer
                </p>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    I build secure, scalable, and innovative solutions that bridge the gap between Web2 and the decentralized world. My passion lies in crafting robust applications and ensuring the integrity of the digital frontier.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#projects">
                            View My Work
                            <ArrowDown className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                        <Link href="https://drive.google.com/file/d/1LR2_hJU4Wys9kkR1_DE6tYsqGmrFTKVl/view" target="_blank" rel="noopener noreferrer">
                            My Resume
                            <Download className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
