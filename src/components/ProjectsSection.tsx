import React, { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProjectsSection = forwardRef<HTMLElement>((props, ref) => {
  const { isDark } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Medical Insurance Cost Prediction',
      description: 'Machine learning model to predict medical insurance costs based on personal data',
      longDescription: 'A medical insurance cost estimation tool using Python and machine learning. Processes user data (age, BMI, smoking status, etc.), trains a regression model (e.g. Random Forest), and deploys via a Flask web service for real-time cost predictions.',
      image: 'https://images.pexels.com/photos/7163953/pexels-photo-7163953.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'Pandas', 'scikit-learn', 'Heroku'],
      github: 'https://github.com/GanapathiPavanKumarKalanadham/MEDICAL-INSURENCE-COST-PREDICT',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 2,
      title: 'IBM Data Analysis Project',
      description: 'Data analysis of retail sales and profit dataset from an IBM internship project',
      longDescription: 'An IBM internship project analyzing a retail sales dataset. The project involves data cleaning, exploratory analysis, and visualization of sales and profit trends to derive business insights, using Python with Pandas and Matplotlib.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter', 'SQL'],
      github: 'https://github.com/GanapathiPavanKumarKalanadham/ibm_internship',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Online Payment Fraud Detection',
      description: 'Machine learning solution to detect fraudulent online payment transactions',
      longDescription: 'A fraud detection system for online payment transactions. The project collects transaction data and uses Python machine learning libraries to train classification models (e.g. Random Forest) that distinguish between legitimate and fraudulent transactions, with feature analysis and model evaluation.',
      image: 'https://images.pexels.com/photos/7534380/pexels-photo-7534380.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
      github: 'https://github.com/GanapathiPavanKumarKalanadham/online-payment-fraud-detection-',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 4,
      title: 'Visiting Pass Generation using Tesseract',
      description: 'Web app to generate visitor passes by extracting text from ID cards using OCR',
      longDescription: 'A visitor pass generator application that reads ID card images (e.g. PAN or Aadhar) using Tesseract OCR. Extracted information (name, DOB, etc.) is used to auto-generate a visiting pass PDF. The Django app also creates a QR code for validation and supports manual entry and PDF download.',
      image: 'https://images.pexels.com/photos/7319161/pexels-photo-7319161.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Django', 'Tesseract', 'OpenCV', 'JavaScript'],
      github: 'https://github.com/GanapathiPavanKumarKalanadham/Visiting-pass-generation-using-tesseract',
      live: 'https://example.com',
      featured: true
    }
    
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                isDark 
                  ? 'bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:border-blue-500' 
                  : 'bg-white/50 backdrop-blur-md border border-gray-200 hover:border-indigo-500'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                >
                  <motion.button
                    onClick={() => setSelectedProject(project.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Eye size={20} />
                  </motion.button>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark 
                          ? 'bg-blue-600/20 text-blue-400' 
                          : 'bg-indigo-100 text-indigo-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 transition-colors ${
                        isDark 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 transition-colors ${
                        isDark 
                          ? 'text-gray-400 hover:text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                  
                  <motion.button
                    onClick={() => setSelectedProject(project.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div>
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      
                      <div className="p-8">
                        <h3 className={`text-3xl font-bold mb-4 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {project.title}
                        </h3>
                        
                        <p className={`text-lg mb-6 leading-relaxed ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {project.longDescription}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-4 py-2 rounded-full ${
                                isDark 
                                  ? 'bg-blue-600/20 text-blue-400' 
                                  : 'bg-indigo-100 text-indigo-600'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                          >
                            <Github size={20} />
                            <span>View Code</span>
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                          >
                            <ExternalLink size={20} />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;