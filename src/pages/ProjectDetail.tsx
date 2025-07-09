import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code } from 'lucide-react';
import NodeBackground from '../components/NodeBackground';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();

  // Mock project data - in a real app, this would come from an API or database
  const project = {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A comprehensive full-stack e-commerce solution built with modern technologies, featuring user authentication, product management, shopping cart functionality, and secure payment processing.',
    longDescription: `This e-commerce platform represents a complete solution for online retail businesses. Built with React for the frontend and Node.js for the backend, it provides a seamless shopping experience for customers while offering powerful management tools for administrators.

The platform includes advanced features such as real-time inventory management, order tracking, customer reviews, and analytics dashboard. The payment system is integrated with Stripe for secure transactions, and the entire application is deployed on AWS for scalability and reliability.

Key challenges overcome during development included implementing real-time updates for inventory, optimizing database queries for large product catalogs, and ensuring mobile responsiveness across all devices.`,
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    duration: '3 months',
    team: '4 developers',
    role: 'Full-Stack Developer',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Order management and tracking',
      'Admin dashboard with analytics',
      'Responsive design for all devices',
      'Real-time inventory updates'
    ],
    challenges: [
      'Implementing real-time inventory synchronization',
      'Optimizing database performance for large datasets',
      'Ensuring PCI compliance for payment processing',
      'Creating a scalable architecture for future growth'
    ],
    gallery: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600'
    ]
  };

  return (
    <div className="min-h-screen relative">
      <NodeBackground />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold text-white mb-6">{project.title}</h1>
                <p className="text-xl text-gray-400 mb-8">{project.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Users size={16} />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Code size={16} />
                    <span>{project.role}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full border border-blue-600/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Detailed Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700">
              <div className="prose prose-invert max-w-none">
                {project.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Features and Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
              <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Challenges Overcome</h2>
              <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          </div>

          {/* Gallery */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
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

export default ProjectDetail;