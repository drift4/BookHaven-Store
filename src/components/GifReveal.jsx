import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GifReveal = ({ 
  gifSrc = `${import.meta.env.BASE_URL}me.gif`, 
  width = "auto",
  height = "auto",
  containerClassName = ""
}) => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });
  const [isVisible, setIsVisible] = useState(false);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fade in effect on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delay before fade in starts

    return () => clearTimeout(timer);
  }, []);

  // Optional: Add periodic fade out/in effect for dynamic behavior
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Fade out for 2 seconds, then fade back in
    }, 15000); // Repeat every 15 seconds

    return () => clearInterval(interval);
  }, [isVisible]);

  // Responsive sizing
  const getResponsiveSize = () => {
    if (windowSize.width < 640) return { width: '5rem', height: '5rem' }; // 80px
    if (windowSize.width < 768) return { width: '6rem', height: '6rem' }; // 96px  
    if (windowSize.width < 1024) return { width: '7rem', height: '7rem' }; // 112px
    return { width: '8rem', height: '8rem' }; // 128px
  };

  const responsiveSize = getResponsiveSize();

  return (
    <div className="fixed bottom-4 left-4 z-40 pointer-events-none">
      {/* Main container with gentle breathing effect and fade animations */}
      <motion.div
        className="relative cursor-pointer"
        style={{
          width: responsiveSize.width,
          height: responsiveSize.height,
        }}
        initial={{ 
          opacity: 0, 
          scale: 0.3, 
          x: -100,
          y: 50,
          rotate: -10
        }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.3,
          x: isVisible ? 0 : -100,
          y: isVisible ? 0 : 50,
          rotate: isVisible ? 0 : -10
        }}
        exit={{
          opacity: 0,
          scale: 0.2,
          x: -150,
          y: 100,
          rotate: 15,
          transition: { duration: 0.8, ease: "easeIn" }
        }}
        transition={{ 
          duration: 1.5, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{ 
          scale: 1.1,
          opacity: 1,
          transition: { duration: 0.3 }
        }}
      >
        {/* Subtle background glow with fade */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isVisible ? [0.2, 0.6, 0.4, 0.2] : 0,
            scale: isVisible ? [1, 1.05, 1.02, 1] : 0.8
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />

        {/* Main GIF with gentle breathing animation and fade */}
        <motion.div
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border-2 border-white/30"
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            rotateY: -15,
            filter: "blur(4px)"
          }}
          animate={{
            opacity: isVisible ? [0.9, 1, 0.95, 1] : 0,
            scale: isVisible ? [1, 1.08, 1.04, 1] : 0.8,
            rotateY: isVisible ? 0 : -15,
            filter: isVisible ? "blur(0px)" : "blur(4px)"
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
            rotateY: { duration: 1.2, repeat: 0 },
            filter: { duration: 1.5, repeat: 0 }
          }}
          style={{
            willChange: 'transform, opacity, filter'
          }}
        >
          <img
            src={gifSrc}
            alt="Animated GIF"
            className="w-full h-full object-cover"
          />
          
          {/* Subtle inner glow overlay with fade */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-400/10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isVisible ? [0.1, 0.4, 0.25, 0.1] : 0
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          />
        </motion.div>

        {/* Soft outer glow effect with fade */}
        <motion.div
          className="absolute inset-0 rounded-2xl -z-10"
          initial={{ 
            opacity: 0,
            scale: 0.7
          }}
          animate={{
            opacity: isVisible ? [0.4, 0.8, 0.6, 0.4] : 0,
            scale: isVisible ? [1, 1.1, 1.05, 1] : 0.7,
            boxShadow: isVisible ? [
              '0 0 15px rgba(147,51,234,0.4)',
              '0 0 30px rgba(219,39,119,0.6)', 
              '0 0 25px rgba(59,130,246,0.5)',
              '0 0 20px rgba(147,51,234,0.4)'
            ] : '0 0 0px rgba(147,51,234,0)'
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
            opacity: { duration: 1.5, repeat: 0 },
            scale: { duration: 1.8, repeat: 0 }
          }}
          style={{
            filter: 'blur(8px)'
          }}
        />
      </motion.div>
    </div>
  );
};

export default GifReveal;