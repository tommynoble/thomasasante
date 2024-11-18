import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800/80 transition-all duration-300"
    >
      <div className="w-12 h-12 mb-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-from to-primary-to rounded-lg opacity-20 group-hover:opacity-30 blur-lg transition-opacity" />
        <div className="relative w-full h-full bg-gradient-to-r from-primary-from/10 to-primary-to/10 rounded-lg flex items-center justify-center group-hover:from-primary-from/20 group-hover:to-primary-to/20 transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        {title}
        <span className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">→</span>
      </h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;