import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, index }) => {
  return (
    <div 
      className={`
        group relative overflow-hidden rounded-lg bg-white shadow-lg
        transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
        animate-fade-up opacity-0
      `}
      style={{ animationDelay: `${(index + 1) * 150}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="flex items-center gap-2 text-xl font-semibold transition-colors duration-300 group-hover:text-blue-600">
          {title}
          <ArrowUpRight 
            className="transform opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" 
            size={20} 
          />
        </h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600
                transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;