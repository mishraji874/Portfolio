import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-gray-900 text-white h-screen flex flex-col items-center justify-center text-center p-6" style={{ backgroundImage: 'url(https://images6.alphacoders.com/123/1239288.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center mb-4">
                    <span className="text-5xl md:text-7xl font-bold">Hi!</span>
                    {/* <img
                        src="./images/wave-emoji.jpg"
                        alt="Wave Emoji"
                        className="w-12 h-12 md:w-16 md:h-16 ml-2"
                    /> */}
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">I'm <span className="text-blue-500">Aditya Mishra</span></h1>
                <p className="text-2xl md:text-3xl mb-4">Full Stack Web Developer, Web3 Developer, and Smart Contract Security Researcher & Auditor</p>
                {/* <p className="text-xl md:text-2xl mb-8">A passionate <span className="text-blue-500">BLOCKCHAIN DEVELOPER</span> enthusiastic about blockchain and web3 industry, looking forward to learn something new every day and contribute to the industry!</p> */}
                <div className="flex space-x-4 mb-6">
                    <a href="https://www.github.com/mishraji874" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github text-3xl"></i>
                    </a>
                    <a href="https://x.com/mishraji874_eth?t=KDJgecA4KOH_ucltIC8_Jw&s=09" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter text-3xl"></i>
                    </a>
                    <a href="https://telegram.me/mishraji63" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-telegram text-3xl"></i>
                    </a>
                </div>
                <a
                    href="#contact"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default Hero;
