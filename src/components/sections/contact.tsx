"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2, Mail, Github, Linkedin, Twitter, Instagram, Send } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function ContactSection() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    // Dummy onSubmit function
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log("Form submitted:", values);

        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        });

        form.reset();
        setIsSubmitting(false);
    }

    return (
        <section id="contact" className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Have a project in mind or just want to say hi? Feel free to reach out.
                    </p>
                </div>
                <div className="max-w-xl mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="your.email@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Your message..." {...field} rows={6} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <Mail className="mr-2 h-4 w-4" />
                                )}
                                Send Message
                            </Button>
                        </form>
                    </Form>
                    <Separator className="my-8" />
                    <div className="flex justify-center gap-4">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="mailto:jobs.adityamsr@gmail.com" target="_blank" aria-label="Mail">
                                <Mail className="h-6 w-6" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://www.linkedin.com/in/aditya-mishra-a76237226" target="_blank" aria-label="LinkedIn">
                                <Linkedin className="h-6 w-6" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://www.github.com/mishraji874" target="_blank" aria-label="GitHub">
                                <Github className="h-6 w-6" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://instagram.com/mishraaa874" target="_blank" aria-label="Instagram">
                                <Instagram className="h-6 w-6" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://x.com/mishraji874_eth" target="_blank" aria-label="Twitter">
                                <Twitter className="h-6 w-6" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="https://telegram.me/mishraji63" target="_blank" aria-label="Telegram">
                                <Send className="h-6 w-6" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
