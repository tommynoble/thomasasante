import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { Microscope, Layers, TestTube2, Github, Twitter, Linkedin } from 'lucide-react';
import ProjectGrid from '../components/ProjectGrid';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const words = ['design', 'research', 'lead', 'help'];

const Home = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent opacity-50" />
        <motion.div 
          className="container mx-auto px-6 pt-32 pb-20 relative z-10"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={item}
            >
              Hi! 👋 I{' '}
              <span className="inline-block min-w-[180px]">
                <motion.span
                  key={words[wordIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`inline-block bg-gradient-to-r ${
                    wordIndex === 0 ? 'from-purple-400 to-pink-600' :
                    wordIndex === 1 ? 'from-blue-400 to-purple-600' :
                    wordIndex === 2 ? 'from-green-400 to-blue-600' :
                    'from-orange-400 to-red-600'
                  } text-transparent bg-clip-text`}
                >
                  {words[wordIndex]}
                </motion.span>
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                products & brands.
              </span>
            </motion.h1>
            {/* Rest of the hero section remains unchanged */}
            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              variants={item}
            >
              Creating beautiful, functional digital experiences that solve real problems
              and delight users.
            </motion.p>
            <motion.div 
              className="flex gap-4 justify-center"
              variants={item}
            >
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 
                  transition-colors transform hover:scale-105 duration-200 flex items-center gap-2"
              >
                Let's talk
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a 
                href="#work" 
                className="group px-8 py-4 bg-zinc-800 rounded-full hover:bg-zinc-700 
                  transition-colors transform hover:scale-105 duration-200 flex items-center gap-2"
              >
                See my work
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* Services Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Research"
              description="Deep dive into user needs and market analysis to inform design decisions"
              icon={<Microscope className="w-6 h-6 text-white stroke-[1.5]" />}
            />
            <ServiceCard 
              title="Product Design"
              description="Creating intuitive and beautiful interfaces that users love to interact with"
              icon={<Layers className="w-6 h-6 text-white stroke-[1.5]" />}
            />
            <ServiceCard 
              title="Testing"
              description="Rigorous testing and iteration to ensure the best possible user experience"
              icon={<TestTube2 className="w-6 h-6 text-white stroke-[1.5]" />}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400">Some of my recent work that showcases my design and development expertise.</p>
          </div>
          <ProjectGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Reach Out!</h2>
              <p className="text-gray-400">Let's collaborate on your next project.</p>
            </div>
            
            <form className="space-y-6 max-w-2xl mx-auto">
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 
                    focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none 
                    transition-colors placeholder:text-sm placeholder:tracking-wider"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 
                    focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none 
                    transition-colors placeholder:text-sm placeholder:tracking-wider"
                />
              </div>
              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 rounded-lg border border-zinc-700 
                    focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none 
                    transition-colors placeholder:text-sm placeholder:tracking-wider"
                ></textarea>
              </div>

              <div className="space-y-4">
                <p className="text-sm tracking-wider text-gray-400">HOW CAN I HELP?</p>
                <div className="flex flex-wrap gap-4">
                  {['UX Design', 'Digital Strategy', 'Research', 'Branding', 'Marketing', 'Coffee!'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox rounded border-zinc-700 text-purple-500 
                          focus:ring-purple-500 focus:ring-offset-0 bg-zinc-800"
                      />
                      <span className="text-sm text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 
                  transition-colors text-sm tracking-wider"
              >
                Send ➝
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400">
              © 2024 Portfolio. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;