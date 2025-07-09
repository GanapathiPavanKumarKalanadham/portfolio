import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';

const LinkedInSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const linkedinUrl = `https://www.linkedin.com/search/results/people/?keywords=${encodeURIComponent(searchTerm)}`;
      window.open(linkedinUrl, '_blank');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700"
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Search size={20} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">Find Me on LinkedIn</h3>
      </div>
      
      <p className="text-gray-400 mb-4">
        Search for my professional profile and connect with me on LinkedIn
      </p>
      
      <div className="flex space-x-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter my name to search..."
          className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <motion.button
          onClick={handleSearch}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <span>Search</span>
          <ExternalLink size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LinkedInSearch;