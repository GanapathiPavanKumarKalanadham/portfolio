import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Brain, 
  Gamepad2, 
  Palette, 
  Database, 
  Shield,
  Zap,
  Globe,
  Cpu,
  Layers
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const InterestsSection = forwardRef<HTMLElement>((props, ref) => {
  const { isDark } = useTheme();

  const interests = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      description: 'Building scalable web applications with modern frameworks like React, Node.js, and cloud technologies.',
      icon: Code,
      color: 'from-blue-500 to-blue-700',
      technologies: ['React', 'Node.js', 'TypeScript', 'Next.js'],
      featured: true
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications using React Native and Flutter.',
      icon: Smartphone,
      color: 'from-green-500 to-green-700',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Computing & DevOps',
      description: 'Designing and implementing cloud infrastructure, CI/CD pipelines, and containerization.',
      icon: Cloud,
      color: 'from-orange-500 to-orange-700',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      featured: false
    },
    {
      id: 4,
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Exploring machine learning algorithms, neural networks, and AI-powered applications.',
      icon: Brain,
      color: 'from-purple-500 to-purple-700',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
      featured: false
    },
    {
      id: 5,
      title: 'HTML',
      description: 'Markup language used to structure content on the web, forming the backbone of web development.',
      icon: Code,
      color: 'from-orange-500 to-orange-700',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      featured: true
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and creating seamless user experiences.',
      icon: Palette,
      color: 'from-cyan-500 to-cyan-700',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      featured: false
    },
    {
      id: 7,
      title: 'Database Management',
      description: 'Designing efficient database schemas and optimizing query performance.',
      icon: Database,
      color: 'from-indigo-500 to-indigo-700',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
      featured: false
    },
    {
      id: 8,
      title: 'Cybersecurity',
      description: 'Implementing security best practices and protecting applications from vulnerabilities.',
      icon: Shield,
      color: 'from-red-500 to-red-700',
      technologies: ['Security Auditing', 'Penetration Testing', 'OWASP'],
      featured: false
    },
    {
      id: 9,
      title: 'Performance Optimization',
      description: 'Optimizing application performance, load times, and user experience.',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-700',
      technologies: ['Web Vitals', 'Lighthouse', 'Performance Monitoring'],
      featured: false
    },
    {
      id: 10,
      title: 'Web development',
      description: 'Exploring decentralized applications and blockchain technologies.',
      icon: Globe,
      color: 'from-teal-500 to-teal-700',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'DeFi'],
      featured: false
    },
  ];

  const featuredInterests = interests.filter(interest => interest.featured);
  const otherInterests = interests.filter(interest => !interest.featured);

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
            Areas of <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Interest</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Domains I'm passionate about and actively exploring
          </p>
        </motion.div>

        {/* Featured Interests */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Primary Focus Areas
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredInterests.map((interest, index) => (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative rounded-2xl p-8 border backdrop-blur-md transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40' 
                    : 'bg-white/50 border-indigo-200/50 hover:border-indigo-300/60'
                }`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <div className={`p-4 bg-gradient-to-br ${interest.color} rounded-xl w-fit`}>
                    <interest.icon size={32} className="text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <h4 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {interest.title}
                </h4>
                
                <p className={`mb-6 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {interest.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {interest.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark 
                          ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' 
                          : 'bg-indigo-100 text-indigo-600 border border-indigo-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Interests */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Exploring & Learning
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherInterests.map((interest, index) => (
              <motion.div
                key={interest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`rounded-xl p-6 border backdrop-blur-md transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/30 border-purple-500/10 hover:border-purple-400/20' 
                    : 'bg-white/30 border-indigo-200/30 hover:border-indigo-300/40'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className={`p-3 bg-gradient-to-br ${interest.color} rounded-lg flex-shrink-0`}>
                      <interest.icon size={20} className="text-white" />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {interest.title}
                    </h4>
                    <p className={`text-sm mb-3 leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {interest.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {interest.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded text-xs ${
                            isDark 
                              ? 'bg-purple-600/20 text-purple-400' 
                              : 'bg-indigo-100 text-indigo-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {interest.technologies.length > 2 && (
                        <span className={`px-2 py-1 rounded text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          +{interest.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

InterestsSection.displayName = 'InterestsSection';

export default InterestsSection;