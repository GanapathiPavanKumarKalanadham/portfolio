import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TechGlobe from './TechGlobe';
import { useTheme } from '../context/ThemeContext';

interface HeroSectionProps {
  onAboutClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onAboutClick }) => {
  const { isDark } = useTheme();

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '/certifications/KALANADHAM GANAPATHI PAVAN KUMAR.pdf'; // Replace with actual resume URL
    link.download = 'Ganapathi_Pavan_Kumar_Resume.pdf';

    fetch(link.href, { method: 'HEAD' })
    .then(response => {
      if (response.ok) {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        alert('Resume file not found. Please place your resume in public/assets/resume/ folder');
      }
    })
    .catch(() => {
      alert('Resume file not found. Please place your resume in public/assets/resume/ folder');
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontFamily: 'cursive' }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ganapathi
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`text-xl mb-8 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Passionate fresher Full-Stack Developer eager to create innovative digital experiences 
            with modern technologies and creative problem-solving skills.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.button
              onClick={onAboutClick}
              whileHover={{ 
                scale: 1.05,
                boxShadow: isDark 
                  ? "0 20px 40px rgba(139, 92, 246, 0.4)" 
                  : "0 20px 40px rgba(99, 102, 241, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-medium transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Learn More About Me
                <ArrowDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ 
                scale: 1.05,
                borderColor: isDark ? "#8b5cf6" : "#6366f1"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`group px-8 py-4 border-2 rounded-xl font-medium transition-all duration-300 ${
                isDark 
                  ? 'border-purple-500/50 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/10' 
                  : 'border-indigo-300 text-gray-600 hover:text-gray-900 hover:border-indigo-500 hover:bg-indigo-50'
              }`}
            >
              <span className="flex items-center">
                <FileText size={20} className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Enhanced 3D Profile with Tech Globe */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-[450px]">
            {/* Enhanced Profile Image with Multiple Glow Effects - 9:16 Ratio */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 60px rgba(139, 92, 246, 1), 0 0 120px rgba(59, 130, 246, 0.8), 0 0 180px rgba(236, 72, 153, 0.6)",
                  "0 0 70px rgba(59, 130, 246, 1), 0 0 130px rgba(236, 72, 153, 0.8), 0 0 190px rgba(139, 92, 246, 0.6)",
                  "0 0 60px rgba(236, 72, 153, 1), 0 0 120px rgba(139, 92, 246, 0.8), 0 0 180px rgba(59, 130, 246, 0.6)",
                  "0 0 60px rgba(139, 92, 246, 1), 0 0 120px rgba(59, 130, 246, 0.8), 0 0 180px rgba(236, 72, 153, 0.6)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="w-80 h-[450px] rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-2">
                <div className={`w-full h-full rounded-3xl flex items-center justify-center overflow-hidden ${
                  isDark ? 'bg-slate-800' : 'bg-white'
                }`}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    src="/certifications/me.jpg"
                    alt="Ganapathi Pavan Kumar Kalanadham"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;