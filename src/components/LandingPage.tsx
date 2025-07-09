import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';

interface LandingPageProps {
  onComplete: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onComplete }) => {
  const [searchComplete, setSearchComplete] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    // Auto-search after 2 seconds
    const timer = setTimeout(() => {
      const linkedinUrl = `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent('Ganapathi Pavan Kumar Kalanadham')}`;
      window.open(linkedinUrl, '_blank');
      setSearchComplete(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchComplete) {
      const transitionTimer = setTimeout(() => {
        setShowTransition(true);
        setTimeout(onComplete, 1500);
      }, 1000);

      return () => clearTimeout(transitionTimer);
    }
  }, [searchComplete, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
            <Search size={48} className="text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Finding
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {" "}Ganapathi Pavan Kumar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl text-blue-200 mb-8"
        >
          Searching LinkedIn for professional profile...
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: searchComplete ? "100%" : "60%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto max-w-md mb-8"
        />

        {searchComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <ExternalLink size={20} />
              <span>LinkedIn search opened in new tab</span>
            </div>
            <p className="text-blue-200">Redirecting to portfolio...</p>
          </motion.div>
        )}

        {showTransition && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 20 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-gradient-to-br from-blue-600 to-purple-800 rounded-full"
            style={{ transformOrigin: 'center' }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default LandingPage;