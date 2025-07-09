import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavigationProps {
  activeSection?: string;
  onNavigate: {
    about: () => void;
    skills: () => void;
    experience: () => void;
    education: () => void;
    certifications: () => void;
    projects: () => void;
    interests: () => void;
    testimonials: () => void;
    contact: () => void;
  };
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: 'About', action: onNavigate.about, id: 'about' },
    { label: 'Skills', action: onNavigate.skills, id: 'skills' },
    { label: 'Experience', action: onNavigate.experience, id: 'experience' },
    { label: 'Education', action: onNavigate.education, id: 'education' },
    { label: 'Certifications', action: onNavigate.certifications, id: 'certifications' },
    { label: 'Projects', action: onNavigate.projects, id: 'projects' },
    { label: 'Interests', action: onNavigate.interests, id: 'interests' },
    { label: 'Testimonials', action: onNavigate.testimonials, id: 'testimonials' },
    { label: 'Contact', action: onNavigate.contact, id: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDark 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-purple-500/20' 
          : 'bg-white/90 backdrop-blur-xl border-b border-indigo-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{ fontFamily: 'cursive' }}
          >
            Ganapathi Pavan Kumar kalanadham
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map(({ label, action, id }) => (
              <motion.button
                key={label}
                onClick={action}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === id
                    ? isDark
                      ? 'bg-purple-600/30 text-purple-400'
                      : 'bg-indigo-100 text-indigo-600'
                    : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-indigo-100/50'
                }`}
              >
                {label}
              </motion.button>
            ))}
            
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-purple-600/20 hover:shadow-lg hover:shadow-purple-500/25'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-indigo-100/50 hover:shadow-lg hover:shadow-indigo-500/25'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={isDark ? 'text-gray-300' : 'text-gray-600'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`lg:hidden border-t transition-colors ${
              isDark ? 'bg-slate-800/95 border-purple-500/20' : 'bg-white/95 border-indigo-200/50'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(({ label, action, id }) => (
                <button
                  key={label}
                  onClick={() => {
                    action();
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === id
                      ? isDark
                        ? 'bg-purple-600/30 text-purple-400'
                        : 'bg-indigo-100 text-indigo-600'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-indigo-100/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;