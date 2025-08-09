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
      description: 'Certified Full-Stack Developer & ServiceNow System Administrator from Rajahmundry, India, passionate about creating efficient and innovative digital solutions.'
    },
    {
      icon: Heart,
      title: 'What I Love',
      description: 'Building impactful web applications, exploring AI & machine learning, and applying best practices in scalability, security, and performance.'
    },
    {
      icon: Target,
      title: 'My Goal',
      description: 'To join a collaborative, forward-thinking team where I can contribute my expertise, grow alongside industry experts, and deliver meaningful solutions.'
    },
    {
      icon: Zap,
      title: 'My Approach',
      description: 'Combining clean code, continuous learning, and cross-disciplinary knowledge to design and implement high-quality, future-ready applications.'
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
                I’m Ganapathi Pavan Kumar Kalanadham, a certified Full-Stack Developer and ServiceNow System Administrator from Rajahmundry, India, passionate about building innovative and efficient digital solutions. My journey in technology began during my Computer Science studies, where I discovered my love for solving complex problems and creating impactful applications.
                </p>
                <p>
                I specialize in React, Node.js, TypeScript, PostgreSQL, MongoDB, and cloud platforms such as Azure and Firebase, with experience spanning both frontend and backend development. My skills are backed by multiple certifications, including ServiceNow Administration, Microsoft Azure AI, IBM Cybersecurity, and programming foundations in C, Python, SQL, and Database Management.
                </p>
                <p>
                Beyond certifications, I have developed projects in AI, machine learning, process automation, and web application development, applying best practices in performance, scalability, and security. I’m eager to join a collaborative team where I can contribute my skills, learn from industry experts, and help deliver solutions that make a real difference.
                </p>
                <p>
                I’m eager to join a forward-thinking team where I can apply my skills, continue learning from industry experts, and contribute to projects that merge innovation with meaningful outcomes.
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