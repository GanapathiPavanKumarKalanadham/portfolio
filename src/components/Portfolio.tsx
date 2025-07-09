import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import ProjectsSection from './ProjectsSection';
import InterestsSection from './InterestsSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import NodeBackground from './NodeBackground';
import { useTheme } from '../context/ThemeContext';

const Portfolio: React.FC = () => {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('hero');
  
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const certificationsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const interestsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', ref: heroRef },
        { id: 'about', ref: aboutRef },
        { id: 'skills', ref: skillsRef },
        { id: 'experience', ref: experienceRef },
        { id: 'education', ref: educationRef },
        { id: 'certifications', ref: certificationsRef },
        { id: 'projects', ref: projectsRef },
        { id: 'interests', ref: interestsRef },
        { id: 'testimonials', ref: testimonialsRef },
        { id: 'contact', ref: contactRef },
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = section.ref.current;
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationProps = {
    activeSection,
    onNavigate: {
      about: () => scrollToSection(aboutRef),
      skills: () => scrollToSection(skillsRef),
      experience: () => scrollToSection(experienceRef),
      education: () => scrollToSection(educationRef),
      certifications: () => scrollToSection(certificationsRef),
      projects: () => scrollToSection(projectsRef),
      interests: () => scrollToSection(interestsRef),
      testimonials: () => scrollToSection(testimonialsRef),
      contact: () => scrollToSection(contactRef)
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`min-h-screen transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
      }`}
    >
      <NodeBackground />
      <Navigation {...navigationProps} />
      
      <main className="relative z-10">
        <section ref={heroRef}>
          <HeroSection onAboutClick={() => scrollToSection(aboutRef)} />
        </section>
        <AboutSection ref={aboutRef} />
        <SkillsSection ref={skillsRef} />
        <ExperienceSection ref={experienceRef} />
        <EducationSection ref={educationRef} />
        <CertificationsSection ref={certificationsRef} />
        <ProjectsSection ref={projectsRef} />
        <InterestsSection ref={interestsRef} />
        <TestimonialsSection ref={testimonialsRef} />
        <ContactSection ref={contactRef} />
      </main>

      <Footer onNavigate={navigationProps.onNavigate} />
    </motion.div>
  );
};

export default Portfolio;