// import React from 'react';
// import { motion } from 'framer-motion';
// import { useTheme } from '../../context/ThemeContext';
// import { Container } from '../layout/Container';
// import { Section } from '../layout/Section';
// import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa';
// import { IoMailOpen } from "react-icons/io5";
// import { FaInstagram } from "react-icons/fa6";

// export const Contact = () => {
//     const { theme } = useTheme();

//     return (
//         <Section id="contact" className="py-20">
//             <Container>
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center mb-12"
//                 >
//                     <h2
//                         className="text-3xl font-bold mb-4"
//                         style={{ color: theme.colors.text }}
//                     >
//                         Contact Me
//                     </h2>
//                     <p
//                         className="text-lg"
//                         style={{ color: theme.colors.textSecondary }}
//                     >
//                         Get in touch with me
//                     </p>
//                 </motion.div>

//                 <div className="max-w-2xl mx-auto">
//                     <form className="space-y-6">
//                         <div>
//                             <label
//                                 htmlFor="name"
//                                 className="block text-sm font-medium mb-2"
//                                 style={{ color: theme.colors.text }}
//                             >
//                                 Name
//                             </label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
//                                 style={{ color: theme.colors.text }}
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="email"
//                                 className="block text-sm font-medium mb-2"
//                                 style={{ color: theme.colors.text }}
//                             >
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
//                                 style={{ color: theme.colors.text }}
//                             />
//                         </div>
//                         <div>
//                             <label
//                                 htmlFor="message"
//                                 className="block text-sm font-medium mb-2"
//                                 style={{ color: theme.colors.text }}
//                             >
//                                 Message
//                             </label>
//                             <textarea
//                                 id="message"
//                                 name="message"
//                                 rows="4"
//                                 className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
//                                 style={{ color: theme.colors.text }}
//                             ></textarea>
//                         </div>
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                         >
//                             <button
//                                 type="submit"
//                                 className="w-full px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                             >
//                                 Send Message
//                             </button>
//                         </motion.div>
//                     </form>
//                 </div>
//                 <Section id="contact" className=" text-white py-20">
//                     <div className="container mx-auto text-center">
//                         <p className="mb-8">Feel free to reach out through any of the following platforms:</p>
//                         <div className="flex justify-center space-x-8">
//                             <a href="mailto:jobs.adityamsr@gmail.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
//                                 <IoMailOpen />
//                             </a>
//                             <a href="https://www.github.com/mishraji874" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
//                                 <FaGithub />
//                             </a>
//                             <a href="https://www.linkedin.com/in/aditya-mishra-a76237226" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
//                                 <FaLinkedin />
//                             </a>
//                             <a href="https://x.com/mishraji874_eth?t=KDJgecA4KOH_ucltIC8_Jw&s=09" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
//                                 <FaTwitter />
//                             </a>
//                             <a href="https://instagram.com/mishraaa874" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
//                                 <FaInstagram />
//                             </a>
//                             <a href="https://telegram.me/mishraji63" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500">
//                                 <FaTelegram />
//                             </a>
//                         </div>
//                     </div>
//                 </Section>
//             </Container>
//         </Section>
//     );
// }; 

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa';
import { IoMailOpen } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

export const Contact = () => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;
        const mailtoLink = `mailto:jobs.adityamsr@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

        window.location.href = mailtoLink;
    };

    return (
        <Section id="contact" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-3xl font-bold mb-4"
                        style={{ color: theme.colors.text }}
                    >
                        Contact Me
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        Get in touch with me
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2"
                                style={{ color: theme.colors.text }}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                style={{ color: theme.colors.text }}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2"
                                style={{ color: theme.colors.text }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                style={{ color: theme.colors.text }}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2"
                                style={{ color: theme.colors.text }}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                                style={{ color: theme.colors.text }}
                            ></textarea>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </motion.div>
                    </form>
                </div>

                {/* Social Media Links */}
                <Section id="contact" className="text-white py-20">
                    <div className="container mx-auto text-center">
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
                </Section>
            </Container>
        </Section>
    );
};
