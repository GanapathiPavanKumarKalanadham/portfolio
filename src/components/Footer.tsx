import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, MapPin, Phone, Code, Palette, Zap, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate?: {
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

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/GanapathiPavanKumarKalanadham', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ganapathi-pavan-kumar-kalanadham', label: 'LinkedIn' },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: 'https://x.com/GanaKpk?t=IEjUooEkYyfAJvLZ1pe3NQ&s=08', 
      label: 'X (Twitter)' 
    },
    { icon: Mail, href: 'mailto:gana.kpk@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', action: onNavigate?.about },
    { label: 'Skills', action: onNavigate?.skills },
    { label: 'Experience', action: onNavigate?.experience },
    { label: 'Education', action: onNavigate?.education },
    { label: 'Certifications', action: onNavigate?.certifications },
    { label: 'Projects', action: onNavigate?.projects },
    { label: 'Interests', action: onNavigate?.interests },
    { label: 'Testimonials', action: onNavigate?.testimonials },
    { label: 'Contact', action: onNavigate?.contact },
  ];

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Complete web applications with modern technologies'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast and efficient web solutions'
    },
    {
      icon: Globe,
      title: 'Web Consulting',
      description: 'Technical guidance and best practices'
    }
  ];

  return (
    <footer className={`relative transition-colors duration-500 ${
      isDark ? 'bg-slate-900/95' : 'bg-white/95'
    } backdrop-blur-md overflow-hidden`}>
      {/* Animated Ocean Wave with Particles */}
      <div className="relative overflow-hidden h-6">
        <motion.div
          animate={{
            background: [
              'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 25%, #ec4899 50%, #06b6d4 75%, #3b82f6 100%)',
              'linear-gradient(90deg, #06b6d4 0%, #3b82f6 25%, #8b5cf6 50%, #ec4899 75%, #06b6d4 100%)',
              'linear-gradient(90deg, #ec4899 0%, #06b6d4 25%, #3b82f6 50%, #8b5cf6 75%, #ec4899 100%)',
              'linear-gradient(90deg, #8b5cf6 0%, #ec4899 25%, #06b6d4 50%, #3b82f6 75%, #8b5cf6 100%)',
              'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 25%, #ec4899 50%, #06b6d4 75%, #3b82f6 100%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="h-full w-full"
        />
        {/* Multiple Wave Layers */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{ 
              duration: 6 + i * 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 0.5
            }}
            className="absolute top-0 h-full w-full"
            style={{
              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${0.3 - i * 0.1}) 50%, transparent 100%)`
            }}
          />
        ))}
        {/* Enhanced Floating Particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              background: `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`
            }}
            animate={{
              x: ['-20px', '100vw'],
              y: [0, -15, 0, 15, 0],
              opacity: [0, 1, 1, 1, 0],
              scale: [0.5, 1.5, 0.8, 1.2, 0.5],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}
      </div>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDark ? 'bg-purple-500/10' : 'bg-indigo-500/10'
            }`}
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: 'cursive' }}>
              GANAPATHI PAVAN KUMAR KALANADHAM
            </h3>
            <p className={`mb-6 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate fresher Full-Stack Developer eager to create innovative solutions 
              with modern technologies. Ready to contribute to exciting projects and grow in the tech industry.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-500" />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Rajahmundry, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-green-500" />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  +91 81437 57999
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-purple-500" />
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  gana.kpk@gmail.com
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-800 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600' 
                      : 'bg-gray-100 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600'
                  }`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className={`text-lg font-semibold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={link.action}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`transition-colors text-left ${
                      isDark 
                        ? 'text-gray-400 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className={`text-lg font-semibold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Services I Provide
            </h4>
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isDark 
                      ? 'bg-slate-800/50 hover:bg-slate-800' 
                      : 'bg-gray-100/50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <service.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <h5 className={`font-medium text-sm ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {service.title}
                      </h5>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className={`text-lg font-semibold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Connect
            </h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:gana.kpk@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`block px-6 py-3 rounded-lg font-medium text-center transition-all duration-300 ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                } hover:shadow-lg`}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className={`border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ${
            isDark ? 'border-purple-500/20' : 'border-indigo-200/50'
          }`}
        >
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2025 Ganapathi Pavan Kumar Kalanadham. All rights reserved.
          </p>
        </motion.div>
      </div>
      {/* Scroll to Top with Enhanced Effect */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ 
          scale: 1.2, 
          rotate: 360,
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg z-50 hover:shadow-2xl transition-all duration-300"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;