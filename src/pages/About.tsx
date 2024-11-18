import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-400 mb-12">
              I'm a passionate designer and developer with over 8 years of experience 
              creating digital products that make a difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <Code className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-gray-400">
                  Proficient in modern web technologies and frameworks, creating 
                  scalable and maintainable solutions.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <Palette className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-gray-400">
                  Creating beautiful, intuitive interfaces that prioritize user 
                  experience and accessibility.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <Lightbulb className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Strategy</h3>
                <p className="text-gray-400">
                  Developing comprehensive digital strategies that align with 
                  business goals and user needs.
                </p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg">
                <Rocket className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-400">
                  Staying ahead of industry trends and implementing cutting-edge 
                  solutions.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold">Senior Product Designer</h3>
                <p className="text-purple-500">2020 - Present</p>
                <p className="text-gray-400 mt-2">
                  Leading design initiatives for enterprise-level applications and 
                  mentoring junior designers.
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold">UI/UX Designer</h3>
                <p className="text-purple-500">2018 - 2020</p>
                <p className="text-gray-400 mt-2">
                  Designed user interfaces for various web and mobile applications, 
                  focusing on user experience and accessibility.
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-purple-500">2015 - 2018</p>
                <p className="text-gray-400 mt-2">
                  Developed responsive websites and web applications using modern 
                  frontend technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;