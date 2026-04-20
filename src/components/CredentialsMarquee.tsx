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
          <div className="flex whitespace-nowrap animate-marquee-fast py-3">
            {/* Duplicated list for seamless looping */}
            {[...credentials, ...credentials, ...credentials, ...credentials].map((cred, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-4 py-2 rounded-full bg-surface border border-primary/10 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 group cursor-default mx-3"
              >
                <span className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {cred.icon}
                </span>
                <span className="text-sm font-semibold text-text-body tracking-tight">
                  {t(cred.key)}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background/40 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default CredentialsMarquee;
