import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { Github, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h1>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? Let's work together to create something amazing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-purple-500" />
                  <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white">
                    hello@example.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="w-6 h-6 text-purple-500" />
                  <a href="https://github.com" className="text-gray-400 hover:text-white">
                    github.com/username
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-purple-500" />
                  <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                    linkedin.com/in/username
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Location</h2>
                <p className="text-gray-400">St. Paul, Minnesota</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;