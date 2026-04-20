import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Offset for navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-8 md:pt-12 pb-8 md:pb-12 header-gradient" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-6 opacity-0 animate-fade-in-up"
          >
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-bold text-text-heading uppercase tracking-widest">
                {t('hero.name')}
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                {t('hero.specialty')}
              </span>
            </div>
            
            <h1 id="hero-title" className="text-4xl md:text-6xl font-bold tracking-tight text-text-heading leading-tight">
              {t('hero.title')}
              <span className="block text-2xl md:text-3xl font-medium text-text-body mt-2">
                {t('hero.titleSecondary')}
              </span>
            </h1>
            
            <p className="text-lg text-text-body font-medium leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col space-y-4 pt-2">
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#eligibility"
                  onClick={(e) => scrollToSection(e, 'eligibility')}
                  className="bg-success text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-floating text-center inline-block min-w-[180px]"
                >
                  {t('cta.eligibility')}
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all shadow-floating text-center inline-block min-w-[180px]"
                >
                  {t('cta.consultation')}
                </a>
              </div>
              <p className="text-xs md:text-sm text-text-body font-medium italic">
                {t('hero.disclaimer')}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Image & Quote */}
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative group/hero-img opacity-0 animate-fade-in"
          >
            <div className="relative">
              <motion.div 
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="aspect-square rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 relative"
              >
                <img
                  src="https://i.ibb.co/SXKFTjB2/dr-pokhrel.webp"
                  alt="Dr. Kaushal Pokhrel - LASIK Eye Surgery Specialist in Nepal offering SMILE Pro, PRK, and ICL at Tilganga Institute of Ophthalmology"
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover/hero-img:scale-[1.03] group-hover/hero-img:translate-y-1 group-hover/hero-img:opacity-95"
                  referrerPolicy="no-referrer"
                  width={600}
                  height={600}
                  fetchPriority="high"
                  loading="eager"
                />
                <div className="absolute bottom-4 right-4 text-[10px] text-white/50 bg-black/10 px-2 py-1 rounded-full backdrop-blur-sm">
                  © Dr. Kaushal Pokhrel
                </div>
              </motion.div>
            </div>
            
            {/* Quote block */}
            <div className="mt-4 md:mt-0 md:absolute md:-right-4 md:-bottom-6 md:w-80 bg-surface/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-primary/20 shadow-2xl z-20 transition-transform duration-500">
              <div className="text-primary mb-2 md:mb-3 flex justify-end">
                <Quote size={24} fill="currentColor" className="opacity-50 rotate-180" />
              </div>
              <p className="text-sm md:text-base italic text-text-heading leading-relaxed font-medium text-right">
                "{t('hero.quote.text')}"
              </p>
              <p className="mt-2 md:mt-3 text-sm font-bold text-primary text-right not-italic">
                {t('hero.quote.author')}
              </p>
            </div>

            {/* Decorative elements */}
            <div 
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 group/deco-blue"
              role="img"
              aria-label={t('hero.deco.blue')}
            >
              <span className="absolute -bottom-4 left-0 text-[10px] font-bold uppercase tracking-widest text-primary opacity-0 group-hover/deco-blue:opacity-40 transition-opacity duration-300">
                {t('hero.deco.blue')}
              </span>
            </div>
            <div 
              className="absolute -top-6 -right-6 w-48 h-48 bg-success/10 rounded-full blur-3xl -z-10 group/deco-green"
              role="img"
              aria-label={t('hero.deco.green')}
            >
              <span className="absolute -top-4 right-0 text-[10px] font-bold uppercase tracking-widest text-success opacity-0 group-hover/deco-green:opacity-40 transition-opacity duration-300">
                {t('hero.deco.green')}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
