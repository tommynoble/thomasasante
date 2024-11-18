import React from 'react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  process?: string[];
  research?: {
    insights: string[];
    quotes: string[];
  };
  synthesis?: {
    doing: string[];
    thinking: string[];
    seeing: string[];
    hearing: string[];
    pains: string[];
    gains: string[];
  };
}

interface CaseStudyProps {
  project: Project;
  onClose: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#121212] overflow-y-auto">
      <div className="min-h-screen">
        <header className="sticky top-0 z-10 bg-[#121212]/80 backdrop-blur-md border-b border-zinc-800">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  <span className="hidden sm:inline">Live Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                  <span className="hidden sm:inline">View Code</span>
                </a>
              )}
            </div>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {project.description}
              </p>
              {project.tags && (
                <div className="flex flex-wrap gap-3 justify-center">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-gray-300 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Main Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-16 bg-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                <p className="text-gray-400">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
                <p className="text-gray-400">{project.solution}</p>
              </div>
            </div>

            {/* Process */}
            {project.process && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Design Process</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.process.map((step, index) => (
                    <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                      <span className="text-purple-500 font-mono mb-2 block">0{index + 1}</span>
                      <p className="text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Research Insights */}
            {project.research && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Research</h2>
                <div className="grid gap-8">
                  {project.research.insights.map((insight, index) => (
                    <div key={index} className="bg-zinc-800 p-6 rounded-lg">
                      <p className="text-gray-300">{insight}</p>
                    </div>
                  ))}
                  {project.research.quotes && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                      {project.research.quotes.map((quote, index) => (
                        <blockquote
                          key={index}
                          className="border-l-4 border-purple-500 pl-4 py-2"
                        >
                          <p className="text-gray-400 italic">"{quote}"</p>
                        </blockquote>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Synthesis */}
            {project.synthesis && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">Synthesis</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(project.synthesis).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                      <h3 className="text-lg font-semibold capitalize">{category}</h3>
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="bg-zinc-800 p-4 rounded-lg text-sm text-gray-300"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Key Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800 p-6 rounded-lg flex items-start gap-4"
                  >
                    <span className="text-purple-500 font-mono">0{index + 1}</span>
                    <p className="text-gray-300">{result}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-zinc-800 text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default CaseStudy;