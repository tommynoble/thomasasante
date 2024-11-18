import React from 'react';

interface NavigationProps {
  activeSection: string;
  mobile?: boolean;
  onClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, mobile, onClick }) => {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  const baseClasses = "relative py-2 transition-colors duration-200";
  const mobileClasses = mobile 
    ? "block text-3xl py-4 font-light" 
    : "text-sm font-medium tracking-wide";
  
  return (
    <nav className={mobile ? "flex flex-col" : "flex space-x-12"}>
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={onClick}
          className={`
            ${baseClasses}
            ${mobileClasses}
            ${activeSection === href.slice(1) ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}
            group
          `}
        >
          {label}
          {!mobile && (
            <span 
              className={`
                absolute bottom-0 left-0 h-0.5 w-full transform origin-left
                transition-transform duration-300 ease-out
                ${activeSection === href.slice(1) ? "scale-x-100 bg-blue-600" : "scale-x-0 bg-gray-900"}
                group-hover:scale-x-100
              `}
            />
          )}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;