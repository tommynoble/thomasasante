import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text">
      <header className="fixed top-0 left-0 right-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Portfolio</Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/projects', label: 'Projects' },
                { path: '/blog', label: 'Blog' },
                { path: '/contact', label: 'Contact' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative py-2 ${
                    isActive(path) ? 'text-primary' : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                  } transition-colors`}
                >
                  {label}
                  {isActive(path) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default Layout;