import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa';
import { IoMailOpen } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const ContactMe = () => {
    return (
        <section id="contact" className="bg-black text-white py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
                <p className="mb-8">Feel free to reach out through any of the following platforms:</p>
                <div className="flex justify-center space-x-8">
                    <a href="mailto:jobs.adityamsr@gmail.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
                        <IoMailOpen />
                    </a>
                    <a href="https://www.github.com/mishraji874" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-mishra-a76237226" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
                        <FaLinkedin />
                    </a>
                    <a href="https://x.com/mishraji874_eth?t=KDJgecA4KOH_ucltIC8_Jw&s=09" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com/mishraaa874" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
                        <FaInstagram />
                    </a>
                    <a href="https://telegram.me/mishraji63" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
                        <FaTelegram />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
