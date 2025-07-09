import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Coffee, Heart } from 'lucide-react';
import NodeBackground from '../components/NodeBackground';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Technologies Mastered' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const timeline = [
    {
      year: '2025',
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Inc.',
      description: 'Leading development of enterprise-scale applications and mentoring junior developers.'
    },
    {
      year: '2023',
      title: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud technologies.'
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Creative Agency',
      description: 'Specialized in creating responsive and interactive user interfaces for various clients.'
    },
    {
      year: '2021',
      title: 'Computer Science Graduate',
      company: 'University',
      description: 'Graduated with honors, specializing in software engineering and web technologies.'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <NodeBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer with a love for creating innovative solutions and beautiful user experiences
            </p>
          </motion.div>

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Hello! I'm a passionate full-stack developer with over 3 years of experience 
                    creating digital solutions that make a difference. My journey began with a 
                    curiosity about how websites work, which quickly evolved into a deep love 
                    for coding and problem-solving.
                  </p>
                  <p>
                    I specialize in modern web technologies including React, Node.js, TypeScript, 
                    and cloud platforms. I believe in writing clean, maintainable code and 
                    creating user experiences that are both beautiful and functional.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge with the developer community. 
                    I'm always excited to take on new challenges and collaborate on innovative projects.
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </motion.button>
              </div>

              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Profile"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Stats */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">My Journey</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-600"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                        <div className="text-blue-400 font-bold mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <div className="text-gray-400 mb-3">{item.company}</div>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Values */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-12 text-center">What Drives Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'I strive for excellence in every project, paying attention to details and delivering high-quality solutions.'
                },
                {
                  icon: Coffee,
                  title: 'Continuous Learning',
                  description: 'Technology evolves rapidly, and I love staying up-to-date with the latest trends and best practices.'
                },
                {
                  icon: Heart,
                  title: 'Passion',
                  description: 'I genuinely love what I do. Coding is not just my profession, it\'s my passion and creative outlet.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700 text-center"
                >
                  <div className="p-3 bg-blue-600 rounded-lg w-fit mx-auto mb-4">
                    <value.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;