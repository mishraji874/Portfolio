import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Achievements } from './components/sections/Achievements';
import { Blog } from './components/sections/Blog';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Blog />
              <Skills />
              <Certifications />
              <Achievements />
              <Contact />
              <Footer />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;