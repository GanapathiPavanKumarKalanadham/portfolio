import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle, Star, X, Eye, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CertificationsSection = forwardRef<HTMLElement>((_, ref) => {
  const { isDark } = useTheme();
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
      {
        "id": 1,
        "title": "Programming for Problem Solving Using C",
        "issuer": "CodeTantra",
        "date": "May 7, 2023",
        "credentialId": "CT332-trlt8a8-c",
        "description": "Introductory programming course in C covering loops, arrays, functions, and basic data structures.",
        "detailedDescription": "This certification validates proficiency in foundational programming concepts using C. It includes structured programming, problem-solving approaches, and memory management techniques required for beginner-level developers.",
        "skills": ["C", "Functions", "Loops", "Arrays", "Pointers"],
        "verificationUrl": "https://bvcce.codetantra.com",
        "certificateUrl": "/certifications/codetantra.certificate.PDF",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": true,
        "validUntil": "May 2025",
        "examScore": "N/A",
        "issuedBy": "CodeTantra",
        "credentialType": "Course Certificate"
      },
      {
        "id": 2,
        "title": "Database Management System Part - 1",
        "issuer": "Infosys",
        "date": "May 16, 2024",
        "credentialId": "N/A",
        "description": "Fundamentals of relational databases and SQL queries.",
        "detailedDescription": "The course covers entity-relationship modeling, relational schema design, basic SQL commands, and the foundation of normalization techniques to ensure data consistency.",
        "skills": ["SQL", "ER Modeling", "Normalization", "RDBMS"],
        "verificationUrl": "https://verify.onwingspan.com/",
        "certificateUrl": "/certifications/dbms1_infosis.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": false,
        "validUntil": "May 2026",
        "examScore": "N/A",
        "issuedBy": "Infosis SpringBoard Learning Platform",
        "credentialType": "Course Certificate"
      },
      {
        "id": 3,
        "title": "Database Management System Part - 2",
        "issuer": "Infosys",
        "date": "May 25, 2024",
        "credentialId": "N/A",
        "description": "Comprehensive course covering relational databases, normalization, and query optimization.",
        "detailedDescription": "This certificate demonstrates proficiency in advanced database concepts including relational model design, normalization techniques, query optimization, and transaction management. It also covers SQL best practices and implementation strategies for scalable systems.",
        "skills": ["SQL", "Normalization", "Query Optimization", "Transactions"],
        "verificationUrl": "https://verify.onwingspan.com/",
        "certificateUrl": "/certifications/dbms2_infosis.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": false,
        "validUntil": "May 2026",
        "examScore": "N/A",
        "issuedBy": "Infosys SpringBoard Learning Platform",

        "credentialType": "Course Certificate"
      },
      {
        "id": 4,
        "title": "Introduction to NoSQL Databases",
        "issuer": "Infosys",
        "date": "August 8, 2024",
        "credentialId": "N/A",
        "description": "Introduction to key-value, document, and column-family NoSQL databases.",
        "detailedDescription": "Covers the structure, use cases, and performance characteristics of NoSQL systems such as MongoDB, Cassandra, and Redis. Emphasis on handling unstructured and semi-structured data efficiently.",
        "skills": ["NoSQL", "MongoDB", "Cassandra", "Redis"],
        "verificationUrl": "https://verify.onwingspan.com/",
        "certificateUrl": "/certifications/intonosqldatabase.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": false,
        "validUntil": "August 2026",
        "examScore": "N/A",
        "issuedBy": "Infosys SpringBoard Learning Platform",

        "credentialType": "Course Certificate"
      },
      {
        "id": 5,
        "title": "Programming Fundamentals using Python - Part 2",
        "issuer": "Infosys",
        "date": "August 7, 2024",
        "credentialId": "N/A",
        "description": "Python programming with OOP, functions, and data handling.",
        "detailedDescription": "Covers object-oriented programming in Python, file operations, data processing, and using Python libraries for practical applications.",
        "skills": ["Python", "OOP", "File Handling", "Functions"],
        "verificationUrl": "https://verify.onwingspan.com/",
        "certificateUrl": "/certifications/pfp2.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": false,
        "validUntil": "August 2026",
        "examScore": "N/A",
        "issuedBy": "Infosys SpringBoard Learning Platform",

        "credentialType": "Course Certificate"
      },
      {
        "id": 16,
        "title": "Basics of Python",
        "issuer": "Infosys",
        "date": "August 7, 2024",
        "credentialId": "N/A",
        "description": "Introductory course on Python programming.",
        "detailedDescription": "Learned Python basics including syntax, control flow, loops, and data structures. Focused on building foundational logic with hands-on practice.",
        "skills": ["Python", "Loops", "Conditionals", "Variables"],
        "verificationUrl": "https://verify.onwingspan.com/",
        "certificateUrl": "/certifications/basicofpython_infosis.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": false,
        "validUntil": "August 2026",
        "examScore": "N/A",
        "issuedBy": "Infosys SpringBoard Learning Platform",

        "credentialType": "Course Certificate"
      },
      {
        "id": 7,
        "title": "Time Management",
        "issuer": "Infosys",
        "date": "August 8, 2024",
        "credentialId": "N/A",
        "description": "Soft skills training in managing tasks and time efficiently.",
        "detailedDescription": "Provided frameworks and tools to manage daily tasks, set goals, and reduce time-related stress for academic and workplace productivity.",
        "skills": ["Time Management", "Goal Setting", "Productivity"],
        "verificationUrl": "https://verify.onwingspan.com/",
        "certificateUrl": "/certifications/time_infosis.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": false,
        "validUntil": "August 2026",
        "examScore": "N/A",
        "issuedBy": "Infosys SpringBoard Learning Platform",

        "credentialType": "Soft Skills Certificate"
      },
      {
        "id": 8,
        "title": "High Impact Presentations",
        "issuer": "Infosys",
        "date": "August 7, 2024",
        "credentialId": "N/A",
        "description": "Soft skills training for public speaking and presentation delivery.",
        "detailedDescription": "Focused on confidence-building, structuring presentations, and effective verbal/non-verbal communication to engage an audience.",
        "skills": ["Communication", "Public Speaking", "Presentation Skills"],
        "verificationUrl": "https://verify.onwingspan.com/",
        "certificateUrl": "/certifications/1-5b666d36-94fc-4a3a-bc53-45eeba39e234.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": false,
        "validUntil": "August 2026",
        "examScore": "N/A",
        "issuedBy": "Infosys SpringBoard Learning Platform",

        "credentialType": "Soft Skills Certificate"
      },
      {
        "id": 9,
        "title": "Cybersecurity Fundamentals",
        "issuer": "IBM SkillsBuild",
        "date": "June 20, 2025",
        "credentialId": "N/A",
        "description": "Introduction to security principles and threat detection.",
        "detailedDescription": "Covered core cybersecurity concepts including malware types, data protection, network vulnerabilities, and safe practices for users and developers.",
        "skills": ["Cybersecurity", "Network Security", "Malware Protection"],
        "verificationUrl": "https://www.credly.com/badges/a1fe648c-298f-41b1-847c-760e866cac49",
        "certificateUrl": "/certifications/IBMDesign20250623-27-pyccua.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": true,
        "validUntil": "June 2027",
        "examScore": "N/A",
        "issuedBy": "IBM SkillsBuild",
        "credentialType": "Professional Badge"
      },
      {
        "id": 10,
        "title": "Career Guidance Webinar",
        "issuer": "Skill Dunia & E-Cell IIT Hyderabad",
        "date": "June 13, 2023",
        "credentialId": "N/A",
        "description": "Career guidance and industry readiness discussion with experts.",
        "detailedDescription": "Participated in a knowledge session focusing on career planning, industry trends, and skill development strategies to improve employability.",
        "skills": ["Career Planning", "Industry Readiness"],
        "verificationUrl": "N/A",
        "certificateUrl": "/certifications/Participation Certificate - Ganapathi Pavan Kumar .pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": false,
        "validUntil": "June 2025",
        "examScore": "N/A",
        "issuedBy": "Skill Dunia & IIT Hyderabad E-Cell",
        "credentialType": "Participation Certificate"
      },
      {
        "id": 11,
        "title": "Java Programming",
        "issuer": "CLMS",
        "date": "September 30, 2023",
        "credentialId": "N/A",
        "description": "Core concepts of Java programming language with practical applications.",
        "detailedDescription": "This certificate covers object-oriented principles, data structures, exception handling, and GUI development in Java. It highlights the ability to build robust Java applications following best coding practices.",
        "skills": ["Java", "OOP", "Data Structures", "Exception Handling"],
        "verificationUrl": "N/A",
        "certificateUrl": "/certifications/clmsCertificate.pdf",
        "logo": "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=100",
        "featured": true,
        "validUntil": "September 2025",
        "examScore": "N/A",
        "issuedBy": "CLMS Certification",
        "credentialType": "Professional Certificate"
      },
      {
        "id": 13,
        "title": "Building LLM Applications With Prompt Engineering",
        "issuer": "NVIDIA",
        "date": "April 21, 2025",
        "credentialId": "v8clq6tnTiaM-HTH783uaA",
        "description": "Explores prompt engineering strategies for developing LLM-based applications.",
        "detailedDescription": "This certificate verifies the completion of training in prompt engineering, focusing on the application of large language models (LLMs) in real-world projects. Provided by NVIDIA.",
        "skills": ["Prompt Engineering", "LLMs", "AI Development"],
        "verificationUrl": "https://learn.nvidia.com/certificates?id=v8clq6tnTiaM-HTH783uaA",
        "certificateUrl": "/certifications/Ganapathi Pavan kumar - Nvidia.pdf",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
        "featured": true,
        "validUntil": "April 2027",
        "examScore": "N/A",
        "issuedBy": "NVIDIA",
        "credentialType": "Certificate of Competency"
      },
      {
        "id": 14,
        "title": "Internship - Design of VISIOCR",
        "issuer": "Infosys",
        "date": "January 9, 2025",
        "credentialId": "N/A",
        "description": "Internship certification for contributions to VISIOCR project.",
        "detailedDescription": "Successfully completed internship assignments on the VISIOCR project, gaining experience in computer vision and document recognition technologies. Duration: October 3, 2024 – December 5, 2024.",
        "skills": ["Computer Vision", "OCR", "Internship Experience"],
        "verificationUrl": "https://verify.onwingspan.com/",
        "certificateUrl": "/certifications/infosis_internship.pdf",
        "logo": "https://onwingspan.com/assets/logo.png",
        "featured": true,
        "validUntil": "January 2027",
        "examScore": "N/A",
        "issuedBy": "Onwingspan",
        "credentialType": "Internship Certificate"
      },
        {
          "id": 6,
          "title": "Programming Fundamentals using Python - Part 1",
          "issuer": "OnWingspan (Infosys Springboard)",
          "date": "August 7, 2024",
          "credentialId": "N/A",
          "description": "This course introduces the basic building blocks of programming using the Python language, enabling beginners to design, write, debug, and run Python programs:contentReference[oaicite:4]{index=4}.",
          "detailedDescription": "Foundational programming concepts are covered using Python. Topics include syntax, variables, data types, expressions, control structures (if statements, loops), functions, and simple data structures. Emphasis is placed on writing and debugging code and understanding how to unit-test Python programs. As noted, the course enables a beginner to design, write, debug, unit test and run a Python program:contentReference[oaicite:5]{index=5}.",
          "skills": ["Python", "Programming Basics", "Variables & Data Types", "Control Flow", "Functions", "Debugging"],
          "verificationUrl": "https://verify.onwingspan.com/",
          "certificateUrl": "/certifications/pfp1.pdf",
          "logo": "https://upload.wikimedia.org/wikipedia/commons/3/31/Python-logo.png",
          "featured": false,
          "validUntil": "August 7, 2026",
          "examScore": "N/A",
          "issuedBy": "Infosys Wingspan (Infosys Springboard)",
          "credentialType": "Course Certificate"
        },
        {
          "id": 17,
          "title": "Cloud Computing",
          "issuer": "NPTEL / SWAYAM",
          "date": "April 2025",
          "credentialId": "NPTEL25CS11S955400044",
          "description": "An in-depth course on cloud computing, a scalable on-demand model that provides shared computing resources (servers, storage, databases, applications, etc.) over the Internet:contentReference[oaicite:6]{index=6}.  The course covers cloud fundamentals, including platform architecture, service models (IaaS/PaaS/SaaS), and deployment models:contentReference[oaicite:7]{index=7}.",
          "detailedDescription": "Topics include cloud system architecture and virtualization, service management, data and resource management in the cloud, and security challenges. It explores open-source versus commercial cloud platforms, and advanced topics like fog/edge computing and serverless (Function-as-a-Service) models. The course also includes cloud security mechanisms and recent research trends:contentReference[oaicite:8]{index=8}. The student achieved a final score of 63/100 (24.69/25 average assignment score, 38.54/75 exam score):contentReference[oaicite:9]{index=9}.",
          "skills": ["Cloud Computing", "Virtualization", "Distributed Systems", "Resource Management", "Cloud Security", "Serverless Computing", "Fog/Edge Computing"],
          "verificationUrl": "https://nptel.ac.in/noc",
          "certificateUrl": "/certifications/Cloud Computing of ganapathi _250523_182130.pdf",
          "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cloud_computing_icon.svg/2560px-Cloud_computing_icon.svg.png",
          "featured": true,
          "validUntil": "April 2027",
          "examScore": 63,
          "issuedBy": "National Programme on Technology Enhanced Learning (NPTEL), Government of India",
          "credentialType": "Course Certificate"
        },
          {
            "id": 12,
            "title": "Edunet - SkillsBuild Orientation",
            "issuer": "IBM SkillsBuild",
            "date": "Jun 19, 2025",
            "credentialId": "PLAN-04138CD348A7",
            "description": "Orientation program to IBM SkillsBuild platform offered in collaboration with Edunet Foundation.",
            "detailedDescription": "This certificate verifies the completion of orientation to IBM SkillsBuild, introducing learners to learning pathways, tools, and opportunities for upskilling in technology and career development.",
            "skills": ["Orientation", "Digital Learning", "Career Development"],
            "verificationUrl": "https://skillsbuild.org",
            "certificateUrl": "/certifications/Screenshot 2025-07-08 134557.png",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            "featured": false,
            "validUntil": "N/A",
            "examScore": "N/A",
            "issuedBy": "IBM",
            "credentialType": "Completion Certificate"
          },
          {
            "id": 18,
            "title": "Cybersecurity Fundamentals",
            "issuer": "IBM SkillsBuild",
            "date": "Jun 20, 2025",
            "credentialId": "ILB-DNRPWDGQGMMY7GGD",
            "description": "Foundational course on key cybersecurity concepts and best practices.",
            "detailedDescription": "This certification demonstrates understanding of basic cybersecurity principles, including types of threats, methods of protection, and importance of digital security in modern systems.",
            "skills": ["Cybersecurity", "Threat Awareness", "Security Best Practices"],
            "verificationUrl": "https://skillsbuild.org",
            "certificateUrl": "/certifications/Screenshot 2025-07-08 134623.png",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            "featured": false,
            "validUntil": "N/A",
            "examScore": "N/A",
            "issuedBy": "IBM",
            "credentialType": "Course Certificate"
          },
          {
            "id": 19,
            "title": "AI Azure Internship",
            "issuer": "Microsoft (via Edunet Foundation)",
            "issuedBy": "Edunet Foundation in collaboration with AICTE",
            "date": "May 13, 2025",
            "validUntil": "June 13, 2025",
            "credentialId": "INTERNSHIP_174365314467ee0918e7994",
            "description": "4-week internship focused on artificial intelligence using Microsoft Azure tools and technologies.",
            "detailedDescription": "Successfully completed a 4-week AI Azure internship from May 13, 2025 to June 13, 2025. Conducted under a Microsoft initiative and facilitated by Edunet Foundation in collaboration with AICTE. Gained practical knowledge in cloud-based AI development, responsible AI practices, and hands-on implementation using Microsoft Azure services.",
            "skills": ["Artificial Intelligence", "Microsoft Azure", "Cloud Services", "AI Ethics", "Hands-on Labs"],
            "verificationUrl": "https://learn.microsoft.com/en-us/azure/ai-services/authentication",
            "certificateUrl": "/certifications/Ms_internship.pdf",
            "logo": "https://cdn-icons-png.flaticon.com/512/732/732221.png",
            "featured": true,
            "examScore": null,
            "credentialType": "Internship Certificate"
          }
          
  ];

  const featuredCertifications = certifications.filter(cert => cert.featured);
  const otherCertifications = certifications.filter(cert => !cert.featured);

  const handleViewCertificate = (cert: any) => {
    setSelectedCert(cert.id);
  };

  const selectedCertData = certifications.find(cert => cert.id === selectedCert);

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
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        {/* Horizontal Scrolling Certifications */}
        <div className="relative overflow-hidden mb-8">
          <motion.div
            animate={{ x: [0, -100 * certifications.length] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex space-x-6 whitespace-nowrap"
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <div
                key={`${cert.title}-${index}`}
                className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                  isDark 
                    ? 'bg-slate-800/50 border-purple-500/20 text-purple-400' 
                    : 'bg-white/50 border-indigo-200/50 text-indigo-600'
                }`}
              >
                <span className="font-medium">{cert.title}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Featured Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative rounded-2xl p-6 border backdrop-blur-md transition-all duration-200 cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40' 
                    : 'bg-white/50 border-indigo-200/50 hover:border-indigo-300/60'
                }`}
                onClick={() => handleViewCertificate(cert)}
              >
                {/* Featured Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                    <Star size={16} className="text-white" />
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex-shrink-0">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cert.title}
                    </h4>
                    <p className={`font-medium ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Date and Credential */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} className="text-gray-500" />
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      {cert.date}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle size={14} className="text-green-500" />
                    <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Verified
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`mb-4 text-sm leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-1 rounded-full text-xs ${
                          isDark 
                            ? 'bg-purple-600/20 text-purple-400' 
                            : 'bg-indigo-100 text-indigo-600'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    ID: {cert.credentialId}
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-400 transition-colors text-sm">
                      <Eye size={12} />
                      <span>View</span>
                    </button>
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-green-500 hover:text-green-400 transition-colors text-sm"
                    >
                      <span>Verify</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-2xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            Additional Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl p-6 border backdrop-blur-md transition-all duration-200 cursor-pointer ${
                  isDark 
                    ? 'bg-slate-800/30 border-purple-500/10 hover:border-purple-400/20' 
                    : 'bg-white/30 border-indigo-200/30 hover:border-indigo-300/40'
                }`}
                onClick={() => handleViewCertificate(cert)}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex-shrink-0">
                    <Award size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-bold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {cert.title}
                    </h4>
                    <p className={`font-medium mb-2 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {cert.date}
                      </span>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-400 transition-colors">
                          <Eye size={12} />
                          <span>View</span>
                        </button>
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-1 text-green-500 hover:text-green-400 transition-colors"
                        >
                          <span>Verify</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded text-xs ${
                            isDark 
                              ? 'bg-purple-600/20 text-purple-400' 
                              : 'bg-indigo-100 text-indigo-600'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className={`px-2 py-1 rounded text-xs ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Detail Modal */}
        <AnimatePresence>
          {selectedCert && selectedCertData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative p-8">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div className="flex items-start space-x-6 mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                      <Award size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-3xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {selectedCertData.title}
                      </h3>
                      <p className={`text-xl font-medium mb-4 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {selectedCertData.issuer}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className={`block font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Issued
                          </span>
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {selectedCertData.date}
                          </span>
                        </div>
                        <div>
                          <span className={`block font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Valid Until
                          </span>
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {selectedCertData.validUntil}
                          </span>
                        </div>
                        <div>
                          <span className={`block font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Score
                          </span>
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {selectedCertData.examScore}
                          </span>
                        </div>
                        <div>
                          <span className={`block font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Type
                          </span>
                          <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                            {selectedCertData.credentialType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      About This Certification
                    </h4>
                    <p className={`leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {selectedCertData.detailedDescription}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Skills Validated
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedCertData.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`px-4 py-2 rounded-full ${
                            isDark 
                              ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' 
                              : 'bg-indigo-100 text-indigo-600 border border-indigo-200'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`text-xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Credential Details
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className={`p-4 rounded-lg ${
                        isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                      }`}>
                        <span className={`block font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Credential ID
                        </span>
                        <span className={`font-mono text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {selectedCertData.credentialId}
                        </span>
                      </div>
                      <div className={`p-4 rounded-lg ${
                        isDark ? 'bg-gray-700/50' : 'bg-gray-100'
                      }`}>
                        <span className={`block font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          Issued By
                        </span>
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {selectedCertData.issuedBy}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedCertData.certificateUrl}
                      download
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Download size={20} />
                      <span>Download Certificate</span>
                    </a>
                    <a
                      href={selectedCertData.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                      <CheckCircle size={20} />
                      <span>Verify Credential</span>
                    </a>
                    <a
                      href={selectedCertData.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>View Online</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

CertificationsSection.displayName = 'CertificationsSection';

export default CertificationsSection;