import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level: number;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: Icon, level, color }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.1, 
        rotateY: 15,
        z: 50
      }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`bg-gradient-to-br ${color} p-6 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-md`}>
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4"
        >
          <Icon size={48} className="text-white" />
        </motion.div>
        
        <h3 className="text-white font-semibold text-center mb-3">{name}</h3>
        
        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white h-2 rounded-full"
          />
        </div>
        
        <p className="text-gray-200 text-sm text-center">{level}% Proficiency</p>
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
    </motion.div>
  );
};

export default SkillCard;