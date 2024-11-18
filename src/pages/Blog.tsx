import React from 'react';
import { motion } from 'framer-motion';
import BlogGrid from '../components/BlogGrid';

const Blog = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Design Blog</h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl">
            Thoughts, insights, and perspectives on design, development, and the 
            creative process.
          </p>
          
          <BlogGrid />
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;