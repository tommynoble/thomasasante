import React, { useState } from 'react';
import CaseStudy from './CaseStudy';

interface Project {
  title: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  tags?: string[];
}

const projects: Project[] = [
  {
    title: 'Wickster',
    description: 'Mobile app design for a social networking platform',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1674',
    challenge: 'Create a unique social networking experience that focuses on authentic connections and meaningful interactions.',
    solution: 'Developed a minimalist interface with focus on user-generated content and real-time interactions.',
    results: [
      '1M+ active users in first month',
      '4.8/5 average app store rating',
      '89% user retention rate',
      '15M+ daily interactions'
    ],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'WebSocket', 'AWS'],
    tags: ['Mobile', 'Social', 'React Native']
  },
  {
    title: 'proMark',
    description: 'Brand identity and packaging design',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1674',
    challenge: 'Revitalize a traditional brand for the modern market while maintaining its core values.',
    solution: 'Created a contemporary visual identity system that respects the brand\'s heritage.',
    results: [
      '45% increase in brand recognition',
      '60% boost in retail sales',
      'Successfully entered 3 new markets',
      'Won 2 design awards'
    ],
    techStack: ['Adobe Creative Suite', 'Figma', 'Blender', 'Cinema 4D'],
    tags: ['Branding', 'Design', '3D']
  },
  {
    title: 'VeriGreen',
    description: 'Sustainable product design and eco-packaging',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1674',
    challenge: 'Design environmentally conscious packaging without compromising on functionality.',
    solution: 'Innovative use of biodegradable materials with minimal waste design.',
    results: [
      '100% biodegradable packaging',
      '40% reduction in material usage',
      'Carbon neutral certification',
      'Featured in Sustainable Design Weekly'
    ],
    techStack: ['Sustainable Materials', '3D Printing', 'CAD Software', 'Life Cycle Assessment Tools'],
    tags: ['Sustainability', 'Product Design', 'Innovation']
  },
  {
    title: 'Veridyum',
    description: 'Healthcare platform UI/UX design',
    image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&q=80&w=1674',
    challenge: 'Simplify complex medical data for both healthcare providers and patients.',
    solution: 'Developed an intuitive interface with role-based dashboards and clear data visualization.',
    results: [
      '50% reduction in training time',
      '98% user satisfaction rate',
      'HIPAA compliant design',
      'Adopted by 100+ healthcare facilities'
    ],
    techStack: ['React', 'D3.js', 'TypeScript', 'Material-UI'],
    tags: ['Healthcare', 'UI/UX', 'Data Visualization']
  },
  {
    title: 'Big Mood',
    description: 'Mental health tracking application',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1674',
    challenge: 'Create an engaging and supportive platform for mental health monitoring.',
    solution: 'Built a gamified experience with mood tracking and personalized insights.',
    results: [
      '200K+ active users',
      '78% improvement in user engagement',
      '92% user satisfaction',
      'Featured in Mental Health Tech Awards'
    ],
    techStack: ['Flutter', 'Firebase', 'TensorFlow', 'Node.js'],
    tags: ['Mental Health', 'Mobile', 'AI']
  },
  {
    title: 'Cosmic Tech',
    description: 'Enterprise software solutions',
    image: 'https://images.unsplash.com/photo-1576153192396-180ecef2a715?auto=format&fit=crop&q=80&w=1674',
    challenge: 'Modernize legacy enterprise systems while ensuring minimal disruption.',
    solution: 'Implemented a microservices architecture with a modern, responsive interface.',
    results: [
      '35% increase in productivity',
      '60% reduction in system errors',
      '$2M annual cost savings',
      'Zero downtime migration'
    ],
    techStack: ['Angular', 'Java Spring', 'Kubernetes', 'PostgreSQL'],
    tags: ['Enterprise', 'Cloud', 'DevOps']
  }
];

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-zinc-900 rounded-lg overflow-hidden 
              hover:transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 
                  group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-zinc-800 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-block mt-4 text-purple-500 
                group-hover:translate-x-2 transition-transform">
                View Case Study →
              </span>
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
}

export default ProjectGrid;