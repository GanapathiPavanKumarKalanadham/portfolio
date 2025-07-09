import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const EducationSection = forwardRef<HTMLElement>((props, ref) => {
  const { isDark } = useTheme();

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Palacharla, India',
      period: '2022 - 2026',
      grade: 'CGPA: 7.0/10',
      description: 'Specialized in software engineering, data structures, algorithms, and web development. Completed multiple projects in full-stack development and machine learning.',
      coursework: [
        'Data Structures and Algorithms',
        'Database Management Systems',
        'Software Engineering',
        'Web Technologies',
        'Machine Learning',
        'Computer Networks',
        'Operating Systems',
        'Object-Oriented Programming'
      ],
      projects: [
        'E-commerce Web Application using MERN Stack',
        'Student Management System with Java',
        'Machine Learning Model for Sentiment Analysis',
        'Mobile App for Campus Navigation'
      ],
      achievements: [
        'Top member in clg conducted Hackthon',
        'Best AI Agent',
        'Active member of Computer Science Society',
        'Participated in multiple hackathons and coding competitions'
      ]
    },
    {
      id: 2,
      degree: 'Intermediate (12th Grade) - MPC',
      institution: 'Government Junior College',
      location: 'Rajahmundry, India',
      period: '2020 - 2022',
      grade: 'Percentage: 67%',
      description: 'Completed intermediate education with Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills.',
      coursework: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Computer Science Basics'
      ],
      achievements: [
        'Secured 67% in board examinations',
        'Participated in science exhibitions',
        'Member of mathematics club'
      ]
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
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My academic journey and learning foundation
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-2xl p-8 border backdrop-blur-md transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40' 
                  : 'bg-white/50 border-indigo-200/50 hover:border-indigo-300/60'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {edu.degree}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen size={16} className="text-blue-500" />
                      <span className={`font-medium ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {edu.institution}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} className="text-gray-500" />
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} className="text-gray-500" />
                        <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          {edu.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award size={14} className="text-green-500" />
                        <span className={`font-medium ${
                          isDark ? 'text-green-400' : 'text-green-600'
                        }`}>
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className={`mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {edu.description}
              </p>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Coursework */}
                <div>
                  <h4 className={`font-semibold mb-3 flex items-center space-x-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <BookOpen size={16} className="text-blue-500" />
                    <span>Key Coursework</span>
                  </h4>
                  <ul className="space-y-2">
                    {edu.coursework.map((course, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {course}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects (if available) */}
                {edu.projects && (
                  <div>
                    <h4 className={`font-semibold mb-3 flex items-center space-x-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      <Award size={16} className="text-purple-500" />
                      <span>Major Projects</span>
                    </h4>
                    <ul className="space-y-2">
                      {edu.projects.map((project, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mt-2 flex-shrink-0" />
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {project}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                <div>
                  <h4 className={`font-semibold mb-3 flex items-center space-x-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <Award size={16} className="text-green-500" />
                    <span>Achievements</span>
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

EducationSection.displayName = 'EducationSection';

export default EducationSection;