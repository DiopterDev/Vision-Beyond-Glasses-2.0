import React from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ duration = 2000 }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center">
        {/* Logo with pulse effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut"
          }}
          className="mb-8 relative"
        >
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-white p-1">
            <img 
              src="https://i.ibb.co/cSPhLMyD/logo-Dr-Kaushal.webp" 
              alt="Dr. Kaushal Pokhrel Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Animated rings around logo */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border-2 border-primary -z-10"
          />
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute inset-0 rounded-full border-2 border-primary -z-10"
          />
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-1.5 bg-primary/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: duration / 1000, 
              ease: "easeInOut" 
            }}
            className="absolute inset-y-0 left-0 bg-primary rounded-full"
          />
        </div>
        
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-primary/60 animate-pulse"
        >
          Loading Excellence
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
