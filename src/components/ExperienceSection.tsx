import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ExperienceSection = forwardRef<HTMLElement>((props, ref) => {
  const { isDark } = useTheme();

  const experiences = [
    {
      id: 1,
      title: 'VisiOCR',
      company: 'Infosis SpringBoard',
      location: 'Remote, India',
      period: 'Oct 2024 - Dec 2024',
      type: 'Full-time',
      description: 'Completed a technical internship at Infosys, working on the VisiOCR project using Django. Gained hands-on experience in backend development, RESTful API design, database integration, and full-stack web application deployment. Enhanced skills in Python, Django framework, and collaborative software development in a professional setting.',
      achievements: [
        'Team lead for the VisiOCR project',
        'Completed a technical internship at Infosys, working on the VisiOCR project using Django.',
        'Worked on the VisiOCR project using Django',
        'Gained hands-on experience in backend development, RESTful API design, database integration, and full-stack web application deployment.',
        'Enhanced skills in Python, Django framework, and collaborative software development in a professional setting.',
      ],
      technologies: ['Django', 'Python', 'RESTful API', 'Database Integration', 'Full-stack Web Application Deployment'],
      website: 'https://www.infosis.com/'
    },
    {
      id: 2,
      title: 'Predict medical insurance costs',
      company: 'Microsoft',
      location: 'Remote, India',
      period: 'May 2025 - Jun 2025',
      type: 'Full-time',
      description: 'Developed a machine learning model to Predict medical insurance costs based on individual attributes like age, BMI, smoking status, and region. Collected and cleaned data, performed exploratory data analysis (EDA), and applied feature encoding and normalization. Trained and evaluated multiple regression models using Scikit-learn, selecting the bestperforming one based on accuracy metrics. Visualized key insights and model performance to support prediction reliability.',
      achievements: [
        'Worked on the Microsoft Azure project using React.js and Node.js',
        'Gained hands-on experience in frontend development, RESTful API design, database integration, and full-stack web application deployment. ',
        'Enhanced skills in React.js, Node.js, and collaborative software development in a professional setting.',
      ],
      technologies: ['React', 'Javascript', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS'],
      website: 'https://www.microsoft.com/'
    },
    {
      id: 3,
      title: 'Hiding data under image using STEGNOGRAPHY',
      company: 'IBM Skillsbuild',
      location: 'Remote',
      period: 'Jun 2025 - July 2025',
      type: 'part time',
      description: 'This project aims to perform customer segmentation for a credit card company based on customer behavioral data. The objective is to identify patterns in spending habits and demographic factors to help the company personalize its marketing strategies, improve customer service, and enhance satisfaction. By using clustering algorithms, the company can target specific customer groups with tailored offers, thus increasing profitability. This segmentation allows the business to make informed decisions, leading to better resource allocation and customer retention.',
      achievements: [
        'Loaded the cover image and accepted a secret message as input',
        'Converted the message into binary format for embedding',
        'Embedded binary bits into the Least Significant Bits (LSBs) of image pixels',
        'Generated a stego image visually identical to the original',
        'Extracted LSBs from stego image to reconstruct the hidden message',
        'Deployed the project using Python 3.x in Jupyter Notebook / Google Colab',
        'Used libraries like OpenCV, NumPy, and Tkinter for GUI (optional)',
        'Validated output by checking image similarity and PSNR/MSE values'
      ],
      technologies: ['Python 3.x','OpenCV (cv2) for image processing','NumPy for numerical operations','Tkinter for basic GUI (optional)','Jupyter Notebook / Google Colab for development and testing'],
      website: 'https:ibmskillsbuild.com'
    },
    {
      id: 4,
      title: 'Online Payment Fraud Detection',
      location: 'Remote',
      period: 'Jun 2025 - Jul 2025',
      type: 'Part-Time',
      description: 'This project focuses on detecting fraudulent transactions in online payments using machine learning models. By analyzing transaction patterns and behavior-based features, the model identifies anomalies and flags potential frauds. The goal is to build a reliable classifier that minimizes false positives and helps financial institutions prevent monetary losses.',
      achievements: [
        'Preprocessed and analyzed a large imbalanced dataset of payment transactions',
        'Applied techniques like SMOTE to handle class imbalance and improve model performance',
        'Built and trained ML models including Logistic Regression, Random Forest, and XGBoost',
        'Achieved high recall and precision scores to minimize false negatives in fraud detection',
        'Evaluated models using confusion matrix, ROC-AUC, and classification report',
        'Visualized key features and correlations using heatmaps and pair plots',
        'Deployed the solution in a Jupyter Notebook environment for demonstration',
        'Stored code and results in GitHub for reproducibility and collaboration'
      ],
      technologies: [
        'Python 3.x',
        'Pandas & NumPy for data handling',
        'Scikit-learn for model building and evaluation',
        'Matplotlib & Seaborn for visualization',
        'Imbalanced-learn (SMOTE) for class balancing',
        'Jupyter Notebook for development and testing'
      ],
      website: 'https://dtu.com'
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
            Internship <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My professional journey and the impact I've made
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <motion.div 
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"
                />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`rounded-2xl p-8 border backdrop-blur-md transition-all duration-300 ${
                      isDark 
                        ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40' 
                        : 'bg-white/50 border-indigo-200/50 hover:border-indigo-300/60'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-bold mb-1 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <Briefcase size={16} className="text-blue-500" />
                          <span className={`font-medium ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            {experience.company}
                          </span>
                          {experience.website && (
                            <a
                              href={experience.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-400 transition-colors"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} className="text-gray-500" />
                            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                              {experience.period}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} className="text-gray-500" />
                            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                              {experience.location}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            isDark 
                              ? 'bg-purple-600/20 text-purple-400' 
                              : 'bg-indigo-100 text-indigo-600'
                          }`}>
                            {experience.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`mb-6 leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                            <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className={`font-semibold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-sm ${
                              isDark 
                                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' 
                                : 'bg-blue-100 text-blue-600 border border-blue-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = 'ExperienceSection';

export default ExperienceSection;