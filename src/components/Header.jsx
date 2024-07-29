import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center bg-transparent backdrop-blur-none">
            <h1 className="text-2xl font-bold"><Link to="/">Aditya Mishra</Link></h1>
            <ul className="flex space-x-4">
                <li><a href="#home" className="hover:text-gray-400">Home</a></li>
                <li><a href="#about" className="hover:text-gray-400">About Me</a></li>
                <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
                <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
                <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
                <li><a href="#certifications" className="hover:text-gray-400">Certifications</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact Me</a></li>
                <li><Link to="https://drive.google.com/file/d/1jPrARqUCW69T7lpHwRWDR5GPwpQGsMUo/view?usp=sharing" className="hover:text-gray-400">Resume</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
