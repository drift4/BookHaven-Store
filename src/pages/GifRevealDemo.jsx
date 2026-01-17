import React from 'react';
import { motion } from 'framer-motion';
import GifReveal from '../components/GifReveal';

const GifRevealDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Floating GIF Widget */}
      <GifReveal 
        gifSrc="/me.gif"
        fragmentCount={25}
      />

      {/* Content to demonstrate the floating widget */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 pt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Floating GIF Widget
          </h1>
          <p className="text-gray-300 text-lg font-light tracking-wide max-w-2xl mx-auto">
            Check the bottom-left corner for a sophisticated GIF widget featuring elegant fade in/out effects, gentle breathing animations, and dynamic glow transitions
          </p>
        </motion.div>

        {/* Demo Content */}
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-xl font-semibold mb-4">Sophisticated Fade Animations</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The widget features elegant fade in/out sequences with 3D rotation, blur effects, and staggered entrance animations.
              Combined with gentle breathing effects, it creates a mesmerizing yet calming visual experience.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-xl font-semibold mb-4">Responsive Design</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              The widget automatically resizes based on screen size. On mobile devices, it becomes smaller 
              to avoid covering important content while maintaining its visual impact.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-xl font-semibold mb-4">Performance Optimized</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Simple breathing animations ensure smooth 60fps performance with minimal system resources.
              No complex fragments or heavy effects - just pure, efficient animation.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-xl font-semibold mb-4">Dynamic Glow Effects</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Features multi-layered fade effects: background glow fades, inner overlay transitions, and outer shadow animations.
              Each layer fades at different timings creating depth and visual richness.
            </p>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-gray-400 text-sm font-light mb-2">
            React + Framer Motion + TailwindCSS
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span>Fade Effects</span>
            <span>•</span>
            <span>3D Rotation</span>
            <span>•</span>
            <span>Multi-layer Animation</span>
            <span>•</span>
            <span>Auto Cycle (15s)</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GifRevealDemo;