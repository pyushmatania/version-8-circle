import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  DollarSign,
  Users,
  TrendingUp,
  Globe,
  Calendar,
  Coins,
} from 'lucide-react';
import AnimatedNumber from './AnimatedNumber';
import { useTheme } from './ThemeProvider';

const mainStats = [
  {
    icon: Target,
    value: 20,
    label: 'Active Projects',
    description: 'Films, Music & Series',
    growth: '+45%',
  },
  {
    icon: DollarSign,
    value: 30,
    unit: 'Cr+',
    prefix: '₹',
    label: 'Total Raised',
    description: 'Across all projects',
    growth: '+127%',
  },
  {
    icon: Users,
    value: 40000,
    unit: '+',
    label: 'Total Investors',
    description: 'Active community',
    growth: '+89%',
  },
  {
    icon: TrendingUp,
    value: 230,
    unit: '%',
    label: 'Avg Returns',
    description: 'Quarterly average',
    growth: '+23%',
  },
];

const extraStats = [
  {
    icon: Globe,
    value: '15 Countries',
    label: 'Global Reach',
    description: 'Investors worldwide',
  },
  {
    icon: Calendar,
    value: '87%',
    label: 'Success Rate',
    description: 'Projects funded',
  },
  {
    icon: Coins,
    value: '₹25,000',
    label: 'Avg Investment',
    description: 'Per investor',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const PlatformImpact: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="relative z-10 max-w-6xl mx-auto p-8">
      <h3 className="sr-only">Platform Impact</h3>
      {/* Top metrics */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        {mainStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`relative rounded-2xl p-6 border backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 shadow-lg overflow-hidden ${theme === 'light' ? 'border-gray-200 bg-white/80' : 'border-white/10'}`}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 opacity-0"
              whileHover={{ opacity: 0.15 }}
            />
            <div className="relative z-10 text-center flex flex-col items-center">
              <motion.div
                className="p-4 rounded-xl mb-4 bg-white/10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                <stat.icon className="w-8 h-8 text-purple-300" />
              </motion.div>
              <motion.div className="text-4xl font-extrabold text-white mb-1">
                <AnimatedNumber value={stat.value} format={(v) => `${stat.prefix || ''}${v.toLocaleString()}${stat.unit || ''}`} />
              </motion.div>
              <div className="text-sm text-gray-300 font-medium mb-2">{stat.label}</div>
              <div className="text-xs text-gray-400 mb-2">{stat.description}</div>
              <motion.span
                className="text-xs inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-500/20 text-purple-200"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <TrendingUp className="w-3 h-3" />
                {stat.growth}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Secondary metrics */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {extraStats.map((metric, idx) => (
          <motion.div
            key={metric.label}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className={`relative rounded-xl p-4 border backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 overflow-hidden ${theme === 'light' ? 'border-gray-200 bg-white/80' : 'border-white/10'}`}
          >
            <div className="relative z-10 text-center">
              <metric.icon className="w-6 h-6 mx-auto mb-2 text-purple-300" />
              <div className="text-lg font-bold text-white">{metric.value}</div>
              <div className="text-sm text-gray-300 font-medium">{metric.label}</div>
              <div className="text-xs text-gray-400">{metric.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlatformImpact;
