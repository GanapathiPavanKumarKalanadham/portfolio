import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Cloud, Palette } from 'lucide-react';
import NodeBackground from '../components/NodeBackground';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SkillCard from '../components/SkillCard';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: Code, level: 95, color: 'from-blue-500 to-blue-700' },
        { name: 'TypeScript', icon: Code, level: 90, color: 'from-blue-600 to-blue-800' },
        { name: 'Next.js', icon: Globe, level: 85, color: 'from-gray-600 to-gray-800' },
        { name: 'Tailwind CSS', icon: Palette, level: 92, color: 'from-cyan-500 to-cyan-700' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: Database, level: 88, color: 'from-green-500 to-green-700' },
        { name: 'Python', icon: Code, level: 85, color: 'from-yellow-500 to-yellow-700' },
        { name: 'PostgreSQL', icon: Database, level: 80, color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', icon: Database, level: 75, color: 'from-green-600 to-green-800' },
      ]
    },
    {
      title: 'Mobile & Cloud',
      skills: [
        { name: 'React Native', icon: Smartphone, level: 78, color: 'from-purple-500 to-purple-700' },
        { name: 'AWS', icon: Cloud, level: 82, color: 'from-orange-500 to-orange-700' },
        { name: 'Docker', icon: Cloud, level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'Firebase', icon: Cloud, level: 80, color: 'from-yellow-400 to-yellow-600' },
      ]
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
              My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels across various technologies and frameworks
            </p>
          </motion.div>

          {/* Skills Grid */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                  >
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of development trends and deliver 
              cutting-edge solutions.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;