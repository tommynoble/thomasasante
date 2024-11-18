import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import CaseStudy from './CaseStudy';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern shopping experience with real-time inventory and dynamic pricing",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    challenge: "The client needed a scalable e-commerce solution that could handle real-time inventory updates and dynamic pricing based on market conditions. The existing system was unable to handle peak traffic and lacked modern features expected by customers.",
    solution: "We developed a custom e-commerce platform using React for the frontend and Node.js for the backend. The solution includes real-time inventory tracking, dynamic pricing algorithms, and a robust payment processing system integrated with Stripe.",
    results: [
      "50% increase in conversion rate",
      "99.99% uptime during peak shopping seasons",
      "30% reduction in cart abandonment",
      "2x increase in average order value"
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "Stripe API",
      "Docker",
      "AWS"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "AI Analytics Dashboard",
    description: "Real-time data visualization with machine learning insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280",
    tags: ["Python", "TensorFlow", "React", "D3.js"],
    challenge: "The client needed to process and visualize large amounts of sensor data in real-time, with AI-powered insights to predict maintenance needs and optimize operations.",
    solution: "We built a real-time analytics dashboard using React and D3.js, backed by a Python-based machine learning pipeline that processes sensor data and generates predictive insights.",
    results: [
      "85% accuracy in predicting equipment failures",
      "40% reduction in maintenance costs",
      "Real-time monitoring of 1000+ sensors",
      "60% faster decision-making process"
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "React",
      "D3.js",
      "WebSocket",
      "PostgreSQL",
      "Kubernetes"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Social Platform",
    description: "Privacy-first social networking platform with end-to-end encryption",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1280",
    tags: ["React", "GraphQL", "AWS", "WebRTC"],
    challenge: "Create a secure, privacy-focused social platform where users can connect and share content without compromising their personal data.",
    solution: "Developed a social platform with end-to-end encryption for all communications, decentralized content storage, and zero-knowledge proof authentication.",
    results: [
      "1M+ users in first 6 months",
      "Zero data breaches since launch",
      "4.8/5 average user rating",
      "98% user retention rate"
    ],
    techStack: [
      "React",
      "GraphQL",
      "AWS",
      "WebRTC",
      "Signal Protocol",
      "IPFS",
      "Rust"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

const PortfolioGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800
              shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
              cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500
                  group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1
                      text-sm text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400
                      hover:text-blue-700 dark:hover:text-blue-300"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400
                      hover:text-gray-800 dark:hover:text-gray-200"
                    onClick={e => e.stopPropagation()}
                  >
                    <Github size={18} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <CaseStudy
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default PortfolioGrid;