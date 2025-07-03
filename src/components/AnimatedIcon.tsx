import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedIconProps {
  icon: React.ElementType;
  colorClass?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon: Icon, colorClass = 'from-purple-500 to-pink-500' }) => (
  <motion.div
    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${colorClass} bg-opacity-20 relative overflow-hidden`}
    initial={{ y: 20, opacity: 0, scale: 0.8 }}
    whileInView={{ y: 0, opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.1 }}
  >
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${colorClass} opacity-30 blur-lg`}
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    />
    <Icon className={`w-8 h-8 bg-gradient-to-r ${colorClass} bg-clip-text text-transparent relative z-10`} />
  </motion.div>
);

export default AnimatedIcon;
