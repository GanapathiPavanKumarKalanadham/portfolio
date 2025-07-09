import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import NodeBackground from '../components/NodeBackground';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LinkedInSearch from '../components/LinkedInSearch';

const Home: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable applications with modern technologies'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Delivering fast and efficient solutions'
    }
  ];

  return (
    <div className="min-h-screen relative">
      <NodeBackground />
      <Navigation />
      
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Developer
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Passionate full-stack developer crafting innovative digital experiences 
                with cutting-edge technologies and creative problem-solving.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors group"
                >
                  View My Work
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg font-medium transition-colors">
                  <Download size={20} className="mr-2" />
                  Download CV
                </button>
              </motion.div>

              <LinkedInSearch />
            </motion.div>

            {/* Right Content - Profile Image with Tech Logos */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Profile Image */}
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Tech Logos */}
                {[
                  { name: 'React', position: 'top-0 left-0', delay: 0.8 },
                  { name: 'Node.js', position: 'top-0 right-0', delay: 1.0 },
                  { name: 'TypeScript', position: 'bottom-0 left-0', delay: 1.2 },
                  { name: 'Python', position: 'bottom-0 right-0', delay: 1.4 },
                  { name: 'AWS', position: 'top-1/2 -left-8', delay: 1.6 },
                  { name: 'Docker', position: 'top-1/2 -right-8', delay: 1.8 },
                ].map(({ name, position, delay }) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay, duration: 0.5 }}
                    className={`absolute ${position} w-16 h-16 bg-gray-800/80 backdrop-blur-md rounded-full flex items-center justify-center border border-gray-600`}
                  >
                    <span className="text-white text-xs font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">What I Do</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Combining technical expertise with creative vision to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <div className="p-3 bg-blue-600 rounded-lg w-fit mb-6">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;