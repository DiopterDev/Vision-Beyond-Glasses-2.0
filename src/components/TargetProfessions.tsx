import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Plane, Stethoscope, Trophy, Mountain, Info, X, ChevronDown, Hand, ArrowRight, Wallet, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

interface Profession {
  id: string;
  icon: React.ComponentType<any>;
  titleKey: string;
  descKey: string;
  criteriaKey: string;
  altKey: string;
  color: string;
  image: string;
}

const professions: Profession[] = [
  {
    id: 'military',
    icon: Shield,
    titleKey: 'professions.military.title',
    descKey: 'professions.military.desc',
    criteriaKey: 'professions.military.criteria',
    altKey: 'professions.military.alt',
    color: 'primary',
    image: 'https://i.ibb.co/xqwndQqX/british-gurkha-army.webp',
  },
  {
    id: 'aviation',
    icon: Plane,
    titleKey: 'professions.aviation.title',
    descKey: 'professions.aviation.desc',
    criteriaKey: 'professions.aviation.criteria',
    altKey: 'professions.aviation.alt',
    color: 'primary',
    image: 'https://i.ibb.co/JjSH2wsz/pilot-airhostess.webp',
  },
  {
    id: 'medical',
    icon: Stethoscope,
    titleKey: 'professions.medical.title',
    descKey: 'professions.medical.desc',
    criteriaKey: 'professions.medical.criteria',
    altKey: 'professions.medical.alt',
    color: 'primary',
    image: 'https://i.ibb.co/JwWz7VmK/doctor-nurse.webp',
  },
  {
    id: 'sports',
    icon: Trophy,
    titleKey: 'professions.sports.title',
    descKey: 'professions.sports.desc',
    criteriaKey: 'professions.sports.criteria',
    altKey: 'professions.sports.alt',
    color: 'primary',
    image: 'https://i.ibb.co/5x1cdMZs/atheletes.webp',
  },
  {
    id: 'adventure',
    icon: Mountain,
    titleKey: 'professions.adventure.title',
    descKey: 'professions.adventure.desc',
    criteriaKey: 'professions.adventure.criteria',
    altKey: 'professions.adventure.alt',
    color: 'primary',
    image: 'https://i.ibb.co/4R7kSPHM/adventure-outdoor-rockclimbing.webp',
  },
];

const ProfessionCard: React.FC<{ profession: Profession }> = ({ profession }) => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = profession.icon;

  return (
    <div className="relative h-[360px] w-full perspective-1000 group">
      <motion.div
        className="w-full h-full relative preserve-3d z-0 will-change-transform"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden" style={{ transform: 'translateZ(0)' }}>
          <button 
            type="button"
            className="h-full w-full p-8 rounded-3xl border border-primary/10 bg-background shadow-sm flex flex-col items-center text-center justify-center space-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary overflow-hidden relative"
            onClick={() => setIsFlipped(true)}
            aria-label={`${t(profession.titleKey)}. ${t(profession.descKey)}. Click to flip for criteria.`}
          >
            {/* Constant Flip Indicator removed in favor of chevron-aligned indicator */}

            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon size={32} />
              </div>
              <h3 className="text-lg font-bold text-text-heading uppercase tracking-widest">
                {t(profession.titleKey)}
              </h3>
              <p className="text-sm text-primary font-semibold">
                {t(profession.descKey)}
              </p>
            </div>
            <div className="mt-auto pt-6 flex flex-col items-center space-y-1 relative z-10 transition-all duration-300">
              <motion.div
                animate={{ 
                  y: [0, -2, 0],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center space-x-1 text-primary/80 group-hover:text-primary"
              >
                <div className="lg:hidden flex items-center space-x-1">
                  <Hand size={10} />
                  <span className="text-[9px] font-bold uppercase tracking-wider">{t('surgeries.tapToFlip')}</span>
                </div>
                <div className="hidden lg:flex items-center space-x-1">
                  <MousePointer2 size={10} />
                  <span className="text-[9px] font-bold uppercase tracking-wider">{t('surgeries.clickToFlip')}</span>
                </div>
              </motion.div>
              <ChevronDown size={16} className="text-primary/70 group-hover:text-primary transition-colors" />
            </div>
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180" style={{ transform: 'rotateY(180deg) translateZ(0)' }}>
          <button 
            type="button"
            onClick={() => setIsFlipped(false)}
            className="h-full w-full p-8 rounded-3xl border border-primary/20 bg-background shadow-inner flex flex-col items-center text-center justify-center space-y-4 overflow-hidden relative"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: `url(${profession.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-background/80 pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <h3 className="text-base font-bold text-primary uppercase tracking-widest">
                {t(profession.titleKey)}
              </h3>
              <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full" />
              <p className="text-xs text-text-body font-medium leading-relaxed italic">
                "{t(profession.criteriaKey)}"
              </p>
              <div className="pt-4">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest opacity-60">
                  {t('professions.close')}
                </span>
              </div>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const TargetProfessions: React.FC = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef({ cardWidth: 0 });

  useEffect(() => {
    const updateMetrics = () => {
      const width = window.innerWidth;
      setIsTabletOrMobile(width < 1024);
      setIsMobile(width < 768);
    };
    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target as Node)) {
        setActiveId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // Calculate card width lazily to avoid reflow on mount
      if (metricsRef.current.cardWidth === 0) {
        metricsRef.current.cardWidth = container.offsetWidth * 0.78;
      }
      const cardWidth = metricsRef.current.cardWidth;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleProfession = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const renderDetailContent = (id: string) => {
    const prof = professions.find(p => p.id === id);
    if (!prof) return null;

    return (
      <div 
        className={cn(
          "bg-background border border-primary/10 rounded-2xl p-8 md:p-12 shadow-2xl relative group cursor-pointer",
          isTabletOrMobile ? "mt-4" : "mt-10"
        )}
        onClick={() => setActiveId(null)}
      >
        <div className="absolute top-8 right-8 text-tagline hover:text-primary transition-colors">
          <X size={24} />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
            <div className={cn(
              "w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl flex-shrink-0",
              "bg-primary"
            )}>
              {React.createElement(prof.icon, { size: 32 })}
            </div>
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-text-heading tracking-tight mb-1">
                {t(prof.titleKey)}
              </h4>
              <p className="text-lg md:text-xl text-primary font-semibold">
                {t(prof.descKey)}
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-primary/20 rounded-full" />
              <p className="text-base md:text-lg text-text-body leading-relaxed italic text-balance">
                "{t(prof.criteriaKey)}"
              </p>
            </div>
            
            <div className="pt-10 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-2 text-tagline">
                <Info size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  {t('professions.eligibilityNote')}
                </span>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveId(null); }}
                className="px-6 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300"
              >
                {t('professions.close')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isMobile) {
    return (
      <section 
        ref={sectionRef}
        id="professions"
        className="py-24 bg-surface relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-text-heading mb-4 tracking-tight"
            >
              {t('professions.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-text-body max-w-2xl mx-auto"
            >
              {t('professions.subtitle')}
            </motion.p>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 custom-scrollbar"
          >
            <AnimatePresence mode="popLayout">
              {professions.map((prof, index) => (
                <motion.div
                  key={prof.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center shrink-0"
                >
                  <div className="w-[78vw] min-w-[78vw] max-w-[78vw] snap-center px-1">
                    <ProfessionCard profession={prof} />
                  </div>

                  {index < professions.length - 1 && (
                    <div className="flex items-center justify-center px-2 opacity-20 shrink-0">
                      <div className="w-1 h-12 bg-primary rounded-full" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Scroll Controls */}
          <div className="flex items-center justify-center space-x-6 mt-4">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-primary/10 text-primary active:scale-90"
              aria-label="Scroll left"
            >
              <ArrowRight size={20} className="rotate-180" />
            </button>
            <div className="w-12 h-1 bg-primary/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary/30 rounded-full"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-primary/10 text-primary active:scale-90"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      id="professions"
      className="py-20 bg-surface relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight"
          >
            {t('professions.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-text-body max-w-2xl mx-auto"
          >
            {t('professions.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {professions.map((prof, index) => {
            const Icon = prof.icon;
            const isActive = activeId === prof.id;

            return (
              <React.Fragment key={prof.id}>
                <div className="relative">
                  <motion.button
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.7, 
                        delay: index * 0.1, 
                        ease: [0.22, 1, 0.36, 1] 
                      }
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeInOut" }}
                    onClick={() => toggleProfession(prof.id)}
                    className={cn(
                      "w-full h-full p-5 md:p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-150 border group relative overflow-hidden",
                      isActive 
                        ? "bg-primary text-white border-primary shadow-2xl ring-4 ring-primary/10" 
                        : "bg-background text-text-heading border-primary/10 hover:border-primary/20 hover:shadow-xl"
                    )}
                  >
                    {/* Subtle Background Image on Hover */}
                    {!isActive && (
                      <>
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-150 pointer-events-none"
                          role="img"
                          aria-label={t(prof.altKey)}
                          style={{
                            backgroundImage: `url(${prof.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                        <div className="absolute bottom-2 right-2 text-[6px] text-text-heading/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none uppercase tracking-tighter font-bold">
                          © Dr. Kaushal Pokhrel
                        </div>
                      </>
                    )}
                    {/* Overlay for even more subtlety */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                    )}

                    <div className="flex-1 flex flex-col items-center justify-center">
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-150 relative z-10",
                        isActive 
                          ? "bg-white/20" 
                          : "bg-primary/10 text-primary"
                      )}>
                        <Icon size={28} className={isActive ? "text-white" : "text-current"} />
                      </div>
                      <h3 className="font-bold text-xs md:text-sm mb-2 uppercase tracking-widest relative z-10">{t(prof.titleKey)}</h3>
                      <p className={cn(
                        "text-[10px] md:text-xs font-medium opacity-70 relative z-10",
                        isActive ? "text-white/90" : "text-tagline"
                      )}>
                        {t(prof.descKey)}
                      </p>
                    </div>
                    
                    <div className="mt-8 flex flex-col items-center space-y-1 relative z-10">
                      <motion.div
                        animate={{ 
                          y: isActive ? 0 : [0, -2, 0],
                          opacity: isActive ? 1 : [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className={cn(
                          "flex items-center space-x-1",
                          isActive ? "text-white" : "text-primary/80 group-hover:text-primary"
                        )}
                      >
                        {isActive ? (
                          <span className="text-[8px] font-bold uppercase tracking-widest">{t('professions.close')}</span>
                        ) : (
                          <>
                            <div className="lg:hidden flex items-center space-x-1">
                              <Hand size={10} />
                              <span className="text-[8px] font-bold uppercase tracking-widest">{t('surgeries.tapToFlip')}</span>
                            </div>
                            <div className="hidden lg:flex items-center space-x-1">
                              <MousePointer2 size={10} />
                              <span className="text-[8px] font-bold uppercase tracking-widest">{t('surgeries.clickToFlip')}</span>
                            </div>
                          </>
                        )}
                      </motion.div>
                      <div className={cn(
                        "transition-transform duration-150",
                        isActive ? "rotate-180" : "rotate-0"
                      )}>
                        <ChevronDown size={14} className={isActive ? "text-white" : "text-primary/70"} />
                      </div>
                    </div>
                  </motion.button>
                </div>
                {/* Tablet/Mobile Inline Detail */}
                {isTabletOrMobile && (
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="col-span-2 md:col-span-3 overflow-hidden"
                      >
                        {renderDetailContent(prof.id)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Desktop Detail Section */}
        {!isTabletOrMobile && (
          <AnimatePresence>
            {activeId && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 20, height: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                {renderDetailContent(activeId)}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-blue/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
    </section>
  );
};

export default TargetProfessions;
