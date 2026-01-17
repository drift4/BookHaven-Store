import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeOverlay = () => {
  const [countdown, setCountdown] = useState(5);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Start exit animation when countdown reaches 0
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Small delay before exit
      return () => clearTimeout(exitTimer);
    }
  }, [countdown]);

  // Floating shapes animation variants
  const floatingShapeVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingShape2Variants = {
    animate: {
      y: [0, 15, 0],
      x: [0, -15, 0],
      rotate: [0, -3, 3, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  const floatingShape3Variants = {
    animate: {
      y: [0, -10, 0],
      x: [0, 20, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  // Particles animation
  const particleVariants = {
    animate: {
      y: [0, -100],
      opacity: [0, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ 
            x: typeof window !== 'undefined' && window.innerWidth < 640 ? '100%' : '-100%', 
            opacity: 0 
          }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ 
            x: typeof window !== 'undefined' && window.innerWidth < 640 ? '100%' : '-100%', 
            opacity: 0 
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.4, 0.0, 0.2, 1] // Custom cubic bezier for smooth animation
          }}
          className="fixed inset-x-0 top-0 h-1/2 sm:inset-y-0 sm:left-0 sm:w-1/2 sm:h-full z-50 overflow-hidden"
        >
          {/* Glassmorphism Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-400/15 to-primary-600/25 backdrop-blur-xl">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
            
            {/* Animated Background Shapes */}
            <motion.div
              variants={floatingShapeVariants}
              animate="animate"
              className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-br from-primary-400/30 to-secondary-400/20 rounded-full blur-xl"
            />
            
            <motion.div
              variants={floatingShape2Variants}
              animate="animate"
              className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-secondary-500/25 to-primary-300/30 rounded-full blur-lg"
            />
            
            <motion.div
              variants={floatingShape3Variants}
              animate="animate"
              className="absolute bottom-32 left-12 w-40 h-20 bg-gradient-to-r from-primary-300/20 to-secondary-300/25 rounded-full blur-2xl"
            />

            {/* Geometric Patterns */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 right-10 w-16 h-16 border border-white/20 rotate-45"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 left-20 w-12 h-12 border-2 border-primary-300/30 rounded-full"
            />

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                variants={particleVariants}
                animate="animate"
                transition={{
                  ...particleVariants.animate.transition,
                  delay: i * 0.8,
                }}
                className="absolute w-2 h-2 bg-white/40 rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  bottom: `${10 + (i % 3) * 20}%`,
                }}
              />
            ))}
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4 sm:px-8 py-4 sm:py-0">
              {/* Welcome Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-6 sm:mb-12"
              >
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4 font-sans tracking-tight">
                  Welcome to
                </h1>
                <h2 className="text-xl sm:text-3xl md:text-4xl font-light text-white/90 font-sans">
                  BookHaven
                </h2>
                <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mt-3 sm:mt-6 rounded-full" />
              </motion.div>

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="relative"
              >
                {/* Countdown Circle Background */}
                <div className="relative w-20 h-20 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-400/20 to-secondary-400/20" />
                  
                  {/* Countdown Number */}
                  <motion.div
                    key={countdown}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="text-3xl sm:text-5xl font-bold text-white font-sans tracking-wider">
                      {countdown}
                    </span>
                  </motion.div>

                  {/* Animated Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-t-2 border-primary-400"
                  />
                </div>

                {/* Countdown Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-sm sm:text-lg font-medium font-sans bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent px-2"
                >
                  By Karas Wael : +201220809951
                </motion.p>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex justify-center space-x-1.5 sm:space-x-2 mt-4 sm:mt-8"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.2 
                    }}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Border Gradient - Responsive */}
          <div className="absolute bottom-0 left-0 right-0 h-1 sm:right-0 sm:top-0 sm:bottom-0 sm:w-1 sm:h-auto bg-gradient-to-r sm:bg-gradient-to-b from-primary-400/50 via-secondary-400/30 to-primary-500/50" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOverlay;