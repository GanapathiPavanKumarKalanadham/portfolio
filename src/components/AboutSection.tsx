import React, { forwardRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Target, Zap } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TechGlobe from './TechGlobe';
import { useTheme } from '../context/ThemeContext';

const AboutSection = forwardRef<HTMLElement>((_, ref) => {
  const { isDark } = useTheme();

  const highlights = [
    {
      icon: User,
      title: 'Who I Am',
      description: 'Passionate fresher Full-Stack Developer with strong foundation in modern web technologies and eagerness to learn.'
    },
    {
      icon: Heart,
      title: 'What I Love',
      description: 'Building responsive applications, learning cutting-edge technologies, and solving complex coding challenges.'
    },
    {
      icon: Target,
      title: 'My Goal',
      description: 'To contribute to innovative projects while growing as a developer and making a positive impact in the tech industry.'
    },
    {
      icon: Zap,
      title: 'My Approach',
      description: 'Clean code, continuous learning, and collaborative teamwork to deliver high-quality solutions.'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get to know the passionate fresher developer behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className={`rounded-2xl p-8 border backdrop-blur-md ${
              isDark 
                ? 'bg-slate-800/50 border-purple-500/20' 
                : 'bg-white/50 border-indigo-200/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                My Journey
              </h3>
              <div className={`space-y-4 text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>
                  Hello! I'm Ganapathi Pavan Kumar Kalanadham, a passionate fresher Full-Stack Developer from Rajahmundry, India. 
                  My journey into programming began during my computer science studies, where I discovered my love 
                  for creating digital solutions and solving complex problems through code.
                </p>
                <p>
                  As a recent graduate, I've dedicated myself to mastering modern web technologies including React, 
                  Node.js, TypeScript, and cloud platforms. I've built several projects that showcase my ability to 
                  create full-stack applications with clean, maintainable code.
                </p>
                <p>
                  I'm excited to start my professional career and contribute to innovative projects. My goal is to 
                  work with experienced teams where I can learn, grow, and make meaningful contributions to the 
                  tech industry while building solutions that make a difference.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profile Image with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-[600px] h-[800px] mx-auto">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-80 h-[450px] rounded-3xl overflow-hidden flex items-center justify-center mx-auto">
                  <div className={`w-full h-full rounded-3xl flex items-center justify-center overflow-hidden ${
                    isDark ? 'bg-slate-800' : 'bg-white'
                  }`}>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src="/certifications/WhatsApp Image 2025-07-09 at 13.59.32_e56671bf.jpg"
                      alt="Ganapathi Pavan Kumar Kalanadham"
                      className="w-full h-full rounded-3xl object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400";
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Enhanced 3D Tech Globe with Real Logos */}
              <div className="absolute inset-0">
                <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                  <ambientLight intensity={0.6} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} />
                  <Suspense fallback={null}>
                    <TechGlobe />
                    <OrbitControls 
                      enableZoom={false} 
                      enablePan={false}
                      autoRotate
                      autoRotateSpeed={0.3}
                    />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`rounded-2xl p-6 border backdrop-blur-md transition-all duration-200 ${
                isDark 
                  ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40' 
                  : 'bg-white/50 border-indigo-200/50 hover:border-indigo-300/60'
              }`}
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                <highlight.icon size={24} className="text-white" />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {highlight.title}
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;