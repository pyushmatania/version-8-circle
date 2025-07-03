import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Film, Music, TrendingUp, Users, DollarSign, Target, Award, Star, Zap, Crown, Gift, Sparkles, CheckCircle, Globe, Calendar, BarChart3, Coins } from 'lucide-react';
import Typewriter from './Typewriter';
import AnimatedNumber from './AnimatedNumber';
import { useTheme } from './ThemeProvider';
import Lottie from 'lottie-react';
import clapperAnimation from '../lottie/clapper.json';
import coinAnimation from '../lottie/coin.json';
import fansAnimation from '../lottie/fans.json';
import profitAnimation from '../lottie/profit.json';

interface HeroProps {
  setCurrentView?: (view: 'home' | 'dashboard' | 'projects' | 'community') => void;
}

// CSS override to hide any old cube visuals
const cubeOverride = `
  [class*="cube"], .cube, .stat-cube, .impact-cube {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
  }
`;

// Stat data for main metrics (now using Lucide icons)
const mainStats = [
  {
    key: 'projects',
    label: 'Active Projects',
    value: 20,
    description: 'Films, Music & Series',
    growth: '+45%',
    icon: Film,
    lottie: 'clapper',
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-gradient-to-br from-purple-900/60 to-pink-900/60',
    tooltip: 'Number of live projects open for investment.'
  },
  {
    key: 'raised',
    label: 'Total Raised',
    value: 30,
    prefix: '₹',
    unit: 'Cr+',
    description: 'Across all projects',
    growth: '+127%',
    icon: DollarSign,
    lottie: 'coin',
    color: 'from-green-500 to-emerald-500',
    bg: 'bg-gradient-to-br from-green-900/60 to-emerald-900/60',
    tooltip: 'Total funds raised by the platform.'
  },
  {
    key: 'investors',
    label: 'Total Investors',
    value: 40000,
    unit: '+',
    description: 'Active community',
    growth: '+89%',
    icon: Users,
    lottie: 'fans',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-gradient-to-br from-blue-900/60 to-cyan-900/60',
    tooltip: 'Number of unique investors.'
  },
  {
    key: 'returns',
    label: 'Avg Returns',
    value: 230,
    unit: '%',
    description: 'Quarterly average',
    growth: '+23%',
    icon: TrendingUp,
    lottie: 'profit',
    color: 'from-yellow-500 to-orange-500',
    bg: 'bg-gradient-to-br from-yellow-900/60 to-orange-900/60',
    tooltip: 'Average returns delivered to investors.'
  }
];

// Supporting stats
const supportingStats = [
  {
    icon: Globe,
    title: 'Global Reach',
    value: '15 Countries',
    description: 'Investors from around the world',
    color: 'from-emerald-400 to-cyan-400',
    iconBg: 'bg-gradient-to-br from-emerald-500 via-cyan-400 to-blue-500',
    glow: 'shadow-emerald-400/40'
  },
  {
    icon: Calendar,
    title: 'Success Rate',
    value: '87%',
    description: 'Projects meeting funding goals',
    color: 'from-green-400 to-lime-400',
    iconBg: 'bg-gradient-to-br from-green-500 via-lime-400 to-yellow-300',
    glow: 'shadow-green-400/40'
  },
  {
    icon: Coins,
    title: 'Avg Investment',
    value: '₹25,000',
    description: 'Per investor per project',
    color: 'from-yellow-400 to-orange-400',
    iconBg: 'bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400',
    glow: 'shadow-yellow-400/40'
  }
];

const Hero: React.FC<HeroProps> = ({ setCurrentView }) => {
  const { theme, currentGradient } = useTheme();
  const [coinDrop, setCoinDrop] = useState(false);

  // Gradient theme names for the indicator
  const gradientNames = [
    'Aurora Borealis',
    'Sunset Dreams',
    'Ocean Depths',
    'Mystic Forest',
    'Royal Purple',
    'Solar Flare'
  ];

  // Coin SVG (simple, gold)
  const Coin = () => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="16" fill="#FFD700" stroke="#F59E42" strokeWidth="3" />
      <circle cx="18" cy="18" r="10" fill="#FFF7CC" stroke="#F59E42" strokeWidth="2" />
      <text x="18" y="23" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#F59E42">₹</text>
    </svg>
  );

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-16 transform-gpu ${
      theme === 'light'
        ? 'animated-gradient-light'
        : 'animated-gradient-dark'
    }`}>
      
      {/* Gradient Theme Indicator */}
      {theme === 'light' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="gradient-indicator animate-gradient-pulse flex items-center gap-1"
        >
          <Sparkles className="w-4 h-4 animate-pulse" /> {gradientNames[currentGradient]}
        </motion.div>
      )}
      
      {/* Enhanced Floating Orbs Animation with Gradient Awareness */}
      <div className="absolute inset-0 overflow-hidden transform-gpu">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-40 transition-all duration-[3000ms] ${
            theme === 'light'
              ? currentGradient === 0 ? 'bg-gradient-to-br from-green-300 to-blue-300' :
                currentGradient === 1 ? 'bg-gradient-to-br from-orange-300 to-pink-300' :
                currentGradient === 2 ? 'bg-gradient-to-br from-cyan-300 to-blue-300' :
                currentGradient === 3 ? 'bg-gradient-to-br from-green-300 to-emerald-300' :
                'bg-gradient-to-br from-purple-300 to-violet-300'
              : 'bg-gradient-to-br from-purple-500 to-pink-500'
          }`}
        />
        
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -40, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-35 transition-all duration-[3000ms] ${
            theme === 'light'
              ? currentGradient === 0 ? 'bg-gradient-to-br from-blue-300 to-purple-300' :
                currentGradient === 1 ? 'bg-gradient-to-br from-red-300 to-orange-300' :
                currentGradient === 2 ? 'bg-gradient-to-br from-blue-300 to-indigo-300' :
                currentGradient === 3 ? 'bg-gradient-to-br from-lime-300 to-green-300' :
                'bg-gradient-to-br from-purple-300 to-pink-300'
              : 'bg-gradient-to-br from-blue-500 to-cyan-500'
          }`}
        />
        
        <motion.div
          animate={{
            x: [0, 60, -90, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-30 transition-all duration-[3000ms] ${
            theme === 'light'
              ? currentGradient === 0 ? 'bg-gradient-to-br from-emerald-300 to-cyan-300' :
                currentGradient === 1 ? 'bg-gradient-to-br from-yellow-300 to-red-300' :
                currentGradient === 2 ? 'bg-gradient-to-br from-sky-300 to-blue-300' :
                currentGradient === 3 ? 'bg-gradient-to-br from-green-300 to-teal-300' :
                'bg-gradient-to-br from-violet-300 to-purple-300'
              : 'bg-gradient-to-br from-yellow-500 to-orange-500'
          }`}
        />

        {/* Additional Gradient-Aware Orbs */}
        <motion.div
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 50, -70, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 15
          }}
          className={`absolute top-3/4 left-1/2 w-72 h-72 rounded-full blur-3xl opacity-25 transition-all duration-[3000ms] ${
            theme === 'light'
              ? currentGradient === 0 ? 'bg-gradient-to-br from-teal-300 to-green-300' :
                currentGradient === 1 ? 'bg-gradient-to-br from-pink-300 to-rose-300' :
                currentGradient === 2 ? 'bg-gradient-to-br from-indigo-300 to-purple-300' :
                currentGradient === 3 ? 'bg-gradient-to-br from-emerald-300 to-lime-300' :
                'bg-gradient-to-br from-fuchsia-300 to-purple-300'
              : 'bg-gradient-to-br from-emerald-500 to-teal-500'
          }`}
        />

        {/* Extra orbs */}
        <motion.div
          animate={{ x: [0, 90, -40, 0], y: [0, -40, 60, 0], scale: [1, 1.3, 0.7, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
          className={`absolute top-1/4 right-1/2 w-56 h-56 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-gradient-to-br from-purple-300 to-blue-300' : 'bg-gradient-to-br from-purple-600 to-blue-600'
          }`}
        />
        <motion.div
          animate={{ x: [0, -60, 80, 0], y: [0, 70, -50, 0], scale: [1, 0.9, 1.1, 1], opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className={`absolute bottom-1/4 left-1/3 w-60 h-60 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-gradient-to-br from-yellow-300 to-pink-300' : 'bg-gradient-to-br from-yellow-600 to-pink-600'
          }`}
        />

        {/* Additional fading orbs */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={`absolute top-1/3 left-1/4 w-40 h-40 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-gradient-to-br from-green-300 to-emerald-300' : 'bg-gradient-to-br from-green-600 to-emerald-600'
          }`}
        />
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className={`absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-gradient-to-br from-blue-300 to-cyan-300' : 'bg-gradient-to-br from-blue-600 to-cyan-600'
          }`}
        />
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className={`absolute top-1/5 right-1/3 w-52 h-52 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-gradient-to-br from-rose-300 to-fuchsia-300' : 'bg-gradient-to-br from-rose-600 to-fuchsia-600'
          }`}
        />
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
          className={`absolute bottom-1/5 left-1/4 w-44 h-44 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-gradient-to-br from-orange-300 to-yellow-300' : 'bg-gradient-to-br from-orange-600 to-yellow-600'
          }`}
        />
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className={`absolute top-1/6 left-1/2 w-36 h-36 rounded-full blur-3xl ${
            theme === 'light' ? 'bg-gradient-to-br from-indigo-300 to-purple-300' : 'bg-gradient-to-br from-indigo-600 to-purple-600'
          }`}
        />

        {/* New orb behind heading */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-1/2 left-1/2 w-[32rem] h-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-40 ${
            theme === 'light'
              ? 'bg-gradient-to-br from-purple-300 to-pink-300'
              : 'bg-gradient-to-br from-purple-600 to-pink-600'
          }`}
        />
      </div>

      {/* Enhanced Particle Effects with Gradient Colors */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full transition-all duration-[3000ms] ${
              theme === 'light' 
                ? currentGradient === 0 ? 'bg-green-400' :
                  currentGradient === 1 ? 'bg-orange-400' :
                  currentGradient === 2 ? 'bg-blue-400' :
                  currentGradient === 3 ? 'bg-emerald-400' :
                  'bg-purple-400'
                : 'bg-white'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          {/* Enhanced Floating Badge with Gradient Awareness */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border font-medium mb-8 backdrop-blur-md transition-all duration-[3000ms] ${
              theme === 'light'
                ? currentGradient === 0 ? 'bg-green-50/60 border-green-300/50 text-green-700 shadow-lg shadow-green-200/50' :
                  currentGradient === 1 ? 'bg-orange-50/60 border-orange-300/50 text-orange-700 shadow-lg shadow-orange-200/50' :
                  currentGradient === 2 ? 'bg-blue-50/60 border-blue-300/50 text-blue-700 shadow-lg shadow-blue-200/50' :
                  currentGradient === 3 ? 'bg-emerald-50/60 border-emerald-300/50 text-emerald-700 shadow-lg shadow-emerald-200/50' :
                  'bg-purple-50/60 border-purple-300/50 text-purple-700 shadow-lg shadow-purple-200/50'
                : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300'
            }`}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            The Future of Entertainment Investment
          </motion.div>

          <h1 className={`text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            <Typewriter
              text="Own the stories you love"
              className={`bg-gradient-to-r bg-clip-text text-transparent ${
                theme === 'light'
                  ? 'from-purple-600 via-pink-500 to-blue-600'
                  : 'from-purple-400 via-pink-500 to-cyan-500'
              }`}
            />
          </h1>
          
          <motion.p 
            className={`text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transform from passive viewer to co-producer. Invest in movies, music, and series. 
            Earn returns, unlock exclusive perks, and shape the future of entertainment.
          </motion.p>

          {/* Enhanced CTA Buttons with Gradient Awareness */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <motion.button
              onClick={() => {
                setCoinDrop(true);
                setTimeout(() => {
                  setCurrentView?.('projects');
                  setTimeout(() => setCoinDrop(false), 900); // Hide coin after animation
                }, 600); // Coin drop duration
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-8 py-4 rounded-full text-white font-semibold text-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                theme === 'light'
                  ? currentGradient === 0 ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-500/25' :
                    currentGradient === 1 ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-orange-500/25' :
                    currentGradient === 2 ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-blue-500/25' :
                    currentGradient === 3 ? 'bg-gradient-to-r from-emerald-600 to-green-600 hover:shadow-emerald-500/25' :
                    'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:shadow-purple-500/25'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-purple-500/25'
              }`}
            >
              {/* Coin drop animation */}
              <motion.div
                initial={false}
                animate={coinDrop ? { y: [ -60, 0, 8, 0 ], opacity: [1, 1, 1, 0] } : { y: -60, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0.8, 0.2, 1] }}
                style={{ position: 'absolute', left: '50%', top: '-2.5rem', zIndex: 20, transform: 'translateX(-50%)', pointerEvents: 'none' }}
              >
                <Coin />
              </motion.div>
              <span className="relative z-10 flex items-center gap-3">
                Start Investing
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </span>
              {/* Enhanced Animated Background */}
              <motion.div
                className={`absolute inset-0 transition-all duration-[3000ms] ${
                  theme === 'light'
                    ? currentGradient === 0 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                      currentGradient === 1 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                      currentGradient === 2 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                      currentGradient === 3 ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                      'bg-gradient-to-r from-purple-500 to-fuchsia-500'
                    : 'bg-gradient-to-r from-purple-500 to-blue-500'
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Enhanced Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>

            <motion.button
              onClick={() => setCurrentView?.('projects')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center gap-3 px-8 py-4 border rounded-full font-semibold text-xl backdrop-blur-md transition-all duration-[3000ms] ${
                theme === 'light'
                  ? currentGradient === 0 ? 'border-green-300 text-green-700 bg-green-50/60 hover:bg-green-50/80 shadow-lg hover:shadow-xl' :
                    currentGradient === 1 ? 'border-orange-300 text-orange-700 bg-orange-50/60 hover:bg-orange-50/80 shadow-lg hover:shadow-xl' :
                    currentGradient === 2 ? 'border-blue-300 text-blue-700 bg-blue-50/60 hover:bg-blue-50/80 shadow-lg hover:shadow-xl' :
                    currentGradient === 3 ? 'border-emerald-300 text-emerald-700 bg-emerald-50/60 hover:bg-emerald-50/80 shadow-lg hover:shadow-xl' :
                    'border-purple-300 text-purple-700 bg-purple-50/60 hover:bg-purple-50/80 shadow-lg hover:shadow-xl'
                  : 'border-white/20 text-white bg-white/5 hover:bg-white/10'
              }`}
            >
                <TrendingUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Explore Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Platform Impact Section - Redesigned */}
        <style>{cubeOverride}</style>
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 text-center mt-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border font-medium mb-4 transition-all duration-[3000ms] bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300"
            >
              <BarChart3 className="w-5 h-5" />
              Platform Impact
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              Transforming Entertainment{' '}
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent transition-all duration-[3000ms]">
                Investment
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Real numbers from our growing community of creators and investors
            </p>
          </motion.div>

          {/* Main Stats - Responsive Grid or Stacked */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {mainStats.map((stat, idx) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`group relative p-8 py-10 rounded-2xl backdrop-blur-xl border transition-all duration-500 ${idx === 0 || idx === 3 ? '' : 'hover:scale-105'} ${
                  theme === 'light'
                    ? currentGradient === 0 ? 'bg-green-50/40 border-green-300/60 shadow-lg hover:shadow-xl' :
                      currentGradient === 1 ? 'bg-orange-50/40 border-orange-300/60 shadow-lg hover:shadow-xl' :
                      currentGradient === 2 ? 'bg-blue-50/40 border-blue-300/60 shadow-lg hover:shadow-xl' :
                      currentGradient === 3 ? 'bg-emerald-50/40 border-emerald-300/60 shadow-lg hover:shadow-xl' :
                      'bg-purple-50/40 border-purple-300/60 shadow-lg hover:shadow-xl'
                    : currentGradient === 0 ? 'bg-green-500/10 border-green-400/30 hover:border-green-400/50' :
                      currentGradient === 1 ? 'bg-orange-500/10 border-orange-400/30 hover:border-orange-400/50' :
                      currentGradient === 2 ? 'bg-blue-500/10 border-blue-400/30 hover:border-blue-400/50' :
                      currentGradient === 3 ? 'bg-emerald-500/10 border-emerald-400/30 hover:border-emerald-400/50' :
                      'bg-purple-500/10 border-purple-400/30 hover:border-purple-400/50'
                }`}
              >
                <div className={`relative z-10 text-center flex flex-col justify-center h-full`}>
                  <div className={`mb-4 ${idx === 0 || idx === 3 ? '' : 'group-hover:scale-110'} transition-transform duration-300 ${
                    currentGradient === 0 ? 'text-green-400' :
                    currentGradient === 1 ? 'text-orange-400' :
                    currentGradient === 2 ? 'text-blue-400' :
                    currentGradient === 3 ? 'text-emerald-400' :
                    'text-purple-400'
                  }`}>
                    {stat.lottie ? (
                      <div className="w-24 h-24 mx-auto">
                        <Lottie
                          autoplay={true}
                          loop={true}
                          animationData={
                            stat.lottie === 'clapper' ? clapperAnimation :
                            stat.lottie === 'coin' ? coinAnimation :
                            stat.lottie === 'fans' ? fansAnimation :
                            stat.lottie === 'profit' ? profitAnimation :
                            clapperAnimation
                          }
                          style={{ width: '96px', height: '96px' }}
                          rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice',
                            progressiveLoad: true,
                            hideOnTransparent: true
                          }}
                          onLoadedImages={() => console.log('Lottie loaded')}
                          onError={(error) => console.error('Lottie error:', error)}
                        />
                      </div>
                    ) : (
                      <stat.icon className="w-8 h-8 mx-auto" />
                    )}
                  </div>
                  <div className="text-xl font-bold mb-3 text-white">{stat.label}</div>
                  <div className="text-3xl font-extrabold mb-2 text-white">
                    <AnimatedNumber value={stat.value} format={(v) => `${stat.prefix || ''}${v.toLocaleString()}${stat.unit || ''}`}/>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{stat.description}</div>
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3" />
                    {stat.growth}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supporting Stats - Responsive Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingStats.map((metric, idx) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (mainStats.length + idx) * 0.2 }}
                viewport={{ once: true }}
                className={`group relative p-8 py-10 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${
                  theme === 'light'
                    ? 'bg-white/40 border-white/60 shadow-lg hover:shadow-xl'
                    : `${metric.color} border-white/20 hover:border-white/40`
                }`}
              >
                <div className={`relative z-10 text-center`}>
                  <div className={`mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    metric.color.includes('green') ? 'text-green-400' :
                    metric.color.includes('blue') ? 'text-blue-400' :
                    metric.color.includes('purple') ? 'text-purple-400' :
                    metric.color.includes('orange') ? 'text-orange-400' :
                    'text-gray-400'
                  }`}>
                    <metric.icon className="w-8 h-8 mx-auto" />
                  </div>
                  <div className="text-xl font-bold mb-3 text-white">{metric.title}</div>
                  <div className="text-2xl font-extrabold mb-2 text-white">{metric.value}</div>
                  <div className="text-xs text-white/60">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with Gradient Awareness */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border-2 rounded-full flex justify-center transition-all duration-[3000ms] ${
            theme === 'light' 
              ? currentGradient === 0 ? 'border-green-400' :
                currentGradient === 1 ? 'border-orange-400' :
                currentGradient === 2 ? 'border-blue-400' :
                currentGradient === 3 ? 'border-emerald-400' :
                'border-purple-400'
              : 'border-white/30'
          }`}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-1 h-3 rounded-full mt-2 transition-all duration-[3000ms] ${
              theme === 'light' 
                ? currentGradient === 0 ? 'bg-green-500' :
                  currentGradient === 1 ? 'bg-orange-500' :
                  currentGradient === 2 ? 'bg-blue-500' :
                  currentGradient === 3 ? 'bg-emerald-500' :
                  'bg-purple-500'
                : 'bg-white/50'
            }`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;