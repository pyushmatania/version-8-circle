import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/projects';
import { useTheme } from './ThemeProvider';

const Testimonials: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-24 ${
      theme === 'light' 
        ? 'animated-gradient-light' 
        : 'bg-gradient-to-b from-black to-gray-900'
    } relative overflow-hidden`}>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-5xl md:text-6xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-8`}>
            What Our{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Community
            </span>{' '}
            Says
          </h2>
          <p className={`text-xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} max-w-3xl mx-auto`}>
            Real stories from fans who became co-producers, creators who found their audience, and investors who discovered a new passion.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${
                theme === 'light'
                  ? 'bg-white/40 border-white/60 shadow-lg hover:shadow-xl'
                  : 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-purple-500/20'
              }`}
            >
              
              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Quote className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className={`text-lg leading-relaxed mb-6 ${theme === 'light' ? 'text-gray-700' : 'text-white'}`}>
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900" />
                  </div>
                  <div>
                    <div className={`font-semibold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{testimonial.name}</div>
                    <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{testimonial.role}</div>
                    {testimonial.project && (
                      <div className="text-purple-400 text-xs mt-1">Invested in {testimonial.project}</div>
                    )}
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: "4.9/5", label: "Average Rating", color: "text-yellow-400" },
            { number: "1,200+", label: "Happy Investors", color: "text-green-400" },
            { number: "95%", label: "Would Recommend", color: "text-blue-400" },
            { number: "24/7", label: "Community Support", color: "text-purple-400" }
          ].map((stat, index) => (
            <div key={index} className={`text-center p-6 rounded-xl backdrop-blur-md border ${
              theme === 'light'
                ? 'bg-white/50 border-white/60'
                : 'bg-white/5 border-white/10'
            }`}>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Community Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`p-8 rounded-2xl backdrop-blur-xl border ${
            theme === 'light'
              ? 'bg-white/40 border-white/60'
              : 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-500/20'
          }`}>
            <h3 className={`text-3xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'} mb-6`}>
              Join{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                1,200+ Investors
              </span>{' '}
              Shaping Culture
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-purple-400 text-xl font-bold mb-2">Film Enthusiasts</div>
                <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Supporting the next generation of filmmakers</div>
              </div>
              <div className="text-center">
                <div className="text-blue-400 text-xl font-bold mb-2">Music Lovers</div>
                <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Discovering and funding breakthrough artists</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 text-xl font-bold mb-2">Smart Investors</div>
                <div className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>Building portfolios with passion and profit</div>
              </div>
            </div>

            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border font-medium ${
              theme === 'light'
                ? 'bg-white/60 border-purple-300/60 text-purple-700'
                : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-500/30 text-purple-300'
            }`}>
              <Star className="w-5 h-5" />
              Be part of something bigger
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;