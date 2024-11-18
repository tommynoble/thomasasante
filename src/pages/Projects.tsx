import React from 'react';
import { motion } from 'framer-motion';
import ProjectGrid from '../components/ProjectGrid';

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProjectGrid />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;