import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Award, 
  BookOpen, 
  Users, 
  Microscope, 
  Zap, 
  ShieldCheck, 
  GraduationCap, 
  Heart, 
  Globe, 
  Stethoscope 
} from 'lucide-react';

const CredentialsMarquee: React.FC = () => {
  const { t } = useLanguage();

  const credentials = [
    { key: 'cred.nmc', icon: <ShieldCheck size={18} /> },
    { key: 'cred.fellowship', icon: <Globe size={18} /> },
    { key: 'cred.volume', icon: <Award size={18} /> },
    { key: 'cred.laser', icon: <Zap size={18} /> },
    { key: 'cred.tech', icon: <Microscope size={18} /> },
    { key: 'cred.teaching', icon: <GraduationCap size={18} /> },
    { key: 'cred.leadership', icon: <Users size={18} /> },
    { key: 'cred.society', icon: <Stethoscope size={18} /> },
    { key: 'cred.research', icon: <BookOpen size={18} /> },
    { key: 'cred.lions', icon: <Heart size={18} /> },
  ];

  // Duplicate the list for seamless looping
  const duplicatedCredentials = [...credentials, ...credentials, ...credentials];

  return (
    <div 
      className="w-full bg-transparent py-1 md:py-2 relative z-20 -mt-2 md:-mt-4"
      role="region"
      aria-label="Doctor Credentials and Affiliations"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-hidden group relative">
          <motion.div
            animate={{
              x: [0, -100 * credentials.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex whitespace-nowrap space-x-6 px-6 py-3"
            style={{ width: "max-content" }}
          >
            {duplicatedCredentials.map((cred, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center space-x-3 px-4 py-2 rounded-full bg-surface border border-primary/10 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {cred.icon}
                </span>
                <span className="text-sm font-semibold text-text-body tracking-tight">
                  {t(cred.key)}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade edges - moved inside constrained container */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background/40 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default CredentialsMarquee;
