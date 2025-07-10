import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Cloud, Palette, Server, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  const { isDark } = useTheme();
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { name: 'React', icon: Code, level: 95, color: 'from-blue-500 to-blue-700' },
    { name: 'TypeScript', icon: Code, level: 90, color: 'from-blue-600 to-blue-800' },
    { name: 'Node.js', icon: Server, level: 88, color: 'from-green-500 to-green-700' },
    { name: 'Python', icon: Code, level: 85, color: 'from-yellow-500 to-yellow-700' },
    { name: 'Next.js', icon: Globe, level: 85, color: 'from-gray-600 to-gray-800' },
    { name: 'PostgreSQL', icon: Database, level: 80, color: 'from-blue-500 to-blue-700' },
    { name: 'Html', icon: Cloud, level: 82, color: 'from-orange-500 to-orange-700' },
    { name: 'css', icon: Smartphone, level: 78, color: 'from-purple-500 to-purple-700' },
    { name: 'Tailwind', icon: Palette, level: 92, color: 'from-cyan-500 to-cyan-700' },
    { name: 'MongoDB', icon: Database, level: 75, color: 'from-green-600 to-green-800' },
    { name: 'SQL', icon: Cloud, level: 75, color: 'from-blue-400 to-blue-600' },
    { name: 'Tesseract', icon: Zap, level: 70, color: 'from-pink-500 to-pink-700' },
    { name: 'Firebase', icon: Cloud, level: 80, color: 'from-yellow-600 to-yellow-800' },
    { name: 'Javascript', icon: Code, level: 75, color: 'from-green-400 to-green-600' },
    { name: 'Express', icon: Server, level: 85, color: 'from-gray-500 to-gray-700' },
    { name: 'Java', icon: Database, level: 70, color: 'from-red-500 to-red-700' },
    { name: 'Django', icon: Database, level: 70, color: 'from-blue-500 to-red-700' },
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
            My <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Technologies and frameworks I work with to create amazing digital experiences
          </p>
        </motion.div>

        {/* Horizontal Scrolling Skills */}
        <div className="relative overflow-hidden mb-8">
          <motion.div
            animate={{ x: [0, -100 * skills.length] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex space-x-6 whitespace-nowrap"
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                  isDark 
                    ? 'bg-slate-800/50 border-purple-500/20 text-purple-400' 
                    : 'bg-white/50 border-indigo-200/50 text-indigo-600'
                }`}
              >
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                z: 50,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative cursor-pointer"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
              layoutId={`skill-card-${index}`}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={`relative overflow-hidden rounded-xl p-3 h-24 transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800/50 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/40' 
                  : 'bg-white/50 backdrop-blur-md border border-indigo-200/50 hover:border-indigo-300/60'
              }`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl`} />
                
                {/* Icon with enhanced animations */}
                <motion.div
                  whileHover={{ 
                    rotate: 720, 
                    scale: 1.4,
                    y: -8
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-center mb-1 relative z-10"
                  layoutId={`skill-icon-${index}`}
                >
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${skill.color} shadow-lg`}>
                    <skill.icon size={16} className="text-white" />
                  </div>
                </motion.div>
                
                <h3 className={`font-semibold text-center text-xs mb-1 relative z-10 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
                
                {/* Enhanced progress bar that appears on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredSkill === index ? 1 : 0,
                    y: hoveredSkill === index ? 0 : 10
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                  layoutId={`skill-bar-${index}`}
                >
                  <div className={`w-full rounded-full h-1 mb-1 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredSkill === index ? `${skill.level}%` : 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`h-1 rounded-full bg-gradient-to-r ${skill.color}`}
                      layoutId={`skill-bar-inner-${index}`}
                    />
                  </div>
                  <p className={`text-xs text-center ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {skill.level}%
                  </p>
                </motion.div>

                {/* Enhanced glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`} />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ 
                        x: Math.random() * 100 + '%',
                        y: '100%'
                      }}
                      whileHover={{
                        y: '-20%',
                        transition: {
                          duration: Math.random() * 1 + 0.5,
                          repeat: Infinity,
                          repeatType: 'loop'
                        }
                      }}
                      layoutId={`skill-particle-${index}-${i}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;