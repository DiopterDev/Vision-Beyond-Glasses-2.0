import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Scan, Zap, Layers, BookOpen, CircleDot, Eye, Info, ChevronDown, ChevronUp, ArrowRight, Hand, MousePointer2 } from 'lucide-react';
import { surgeriesData } from '../constants/surgeriesData';

interface SurgeryCardProps {
  titleKey: string;
  descKey: string;
  detailsKey: string;
  slug: string;
  icon: React.ReactNode;
  targetProfessions?: string[];
}

const SurgeryCard: React.FC<SurgeryCardProps> = ({ titleKey, descKey, detailsKey, slug, icon, targetProfessions }) => {
  const { t } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className="relative h-[360px] w-full perspective-1000 group">
      <motion.div
        className="w-full h-full relative preserve-3d z-0 hover:z-10 will-change-transform"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        whileHover={{ 
          y: -12,
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        }}
        transition={{ 
          rotateY: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden" style={{ transform: 'translateZ(0)' }}>
          <button 
            type="button"
            className="h-full w-full p-6 rounded-xl border border-primary/10 bg-background shadow-lg group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center text-center justify-center space-y-3 transition-all duration-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary overflow-hidden"
            onClick={() => setIsFlipped(true)}
            aria-label={`${t(titleKey)}. ${t(descKey)}. Click to see more details.`}
          >
            {/* Constant Flip Indicator */}
            <div className="absolute top-3 right-3 flex items-center space-x-1.5 px-2 py-1 rounded-full border border-primary/10 bg-primary/5 text-primary/40 group-hover:text-primary/60 transition-colors duration-300">
              <div className="lg:hidden flex items-center space-x-1">
                <Hand size={10} />
                <span className="text-[9px] font-bold uppercase tracking-wider">
                  {t('surgeries.tapToFlip')}
                </span>
              </div>
              <div className="hidden lg:flex items-center space-x-1">
                <MousePointer2 size={10} />
                <span className="text-[9px] font-bold uppercase tracking-wider">
                  {t('surgeries.clickToFlip')}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-full bg-primary/10 text-primary mb-1 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-text-heading">
              {t(titleKey)}
            </h3>
            <p className="text-sm text-text-body leading-relaxed line-clamp-2">
              {t(descKey)}
            </p>

            {targetProfessions && targetProfessions.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1.5 pt-2">
                {targetProfessions.slice(0, 3).map((prof) => (
                  <span key={prof} className="px-2 py-0.5 bg-primary/5 text-primary/70 text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/10">
                    {prof}
                  </span>
                ))}
                {targetProfessions.length > 3 && (
                  <span className="px-2 py-0.5 bg-primary/5 text-primary/70 text-[10px] font-bold uppercase tracking-wider rounded-full border border-primary/10">
                    +{targetProfessions.length - 3}
                  </span>
                )}
              </div>
            )}

            <div className="pt-2 flex items-center text-xs font-bold text-primary uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <Info size={14} className="mr-2" />
              {t('surgeries.flipHint')}
            </div>
          </button>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180" style={{ transform: 'rotateY(180deg) translateZ(0)' }}>
          <button 
            type="button"
            onClick={() => setIsFlipped(false)}
            className="h-full w-full p-8 rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 shadow-inner group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center text-center justify-center space-y-4 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Back to ${t(titleKey)} summary.`}
          >
            <h3 className="text-lg font-bold text-primary">
              {t(titleKey)}
            </h3>
            <div className="w-12 h-1 bg-primary/20 rounded-full" />
            <p className="text-sm text-text-body leading-relaxed">
              {t(detailsKey)}
            </p>
            <div className="flex justify-center pt-2">
              <Link 
                to={`/surgery/${slug}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
              >
                Learn More
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const SurgeriesGrid: React.FC = () => {
  const { t, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const secondCardRef = useRef<HTMLDivElement>(null);
  const thirdCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fix scroll position when expanding or collapsing on mobile
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // When expanding or collapsing on mobile, ensure the 2nd card (Femto-LASIK) is visible
    if (isMobile && secondCardRef.current) {
      const yOffset = -80; // Offset for navbar
      const y = secondCardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  }, [showAll, isMobile]);

  const surgeries = [
    {
      titleKey: 'surgery.smile.title',
      descKey: 'surgery.smile.desc',
      detailsKey: 'surgery.smile.details',
      slug: 'smile-pro',
      icon: <Scan size={32} />,
      targetProfessions: surgeriesData['smile-pro'][language].targetProfessions,
    },
    {
      titleKey: 'surgery.lasik.title',
      descKey: 'surgery.lasik.desc',
      detailsKey: 'surgery.lasik.details',
      slug: 'femto-lasik',
      icon: <Zap size={32} />,
      targetProfessions: surgeriesData['femto-lasik'][language].targetProfessions,
    },
    {
      titleKey: 'surgery.prk.title',
      descKey: 'surgery.prk.desc',
      detailsKey: 'surgery.prk.details',
      slug: 'prk',
      icon: <Layers size={32} />,
      targetProfessions: surgeriesData['prk'][language].targetProfessions,
    },
    {
      titleKey: 'surgery.presbyond.title',
      descKey: 'surgery.presbyond.desc',
      detailsKey: 'surgery.presbyond.details',
      slug: 'presbyond',
      icon: <BookOpen size={32} />,
      targetProfessions: surgeriesData['presbyond'][language].targetProfessions,
    },
    {
      titleKey: 'surgery.icl.title',
      descKey: 'surgery.icl.desc',
      detailsKey: 'surgery.icl.details',
      slug: 'icl-ipcl',
      icon: <CircleDot size={32} />,
      targetProfessions: surgeriesData['icl-ipcl'][language].targetProfessions,
    },
    {
      titleKey: 'surgery.cle.title',
      descKey: 'surgery.cle.desc',
      detailsKey: 'surgery.cle.details',
      slug: 'cle-cataract',
      icon: <Eye size={32} />,
      targetProfessions: surgeriesData['cle-cataract'][language].targetProfessions,
    },
  ];

  const visibleSurgeries = isMobile && !showAll ? surgeries.slice(0, 2) : surgeries;

  return (
    <section id="surgeries" className="py-24 bg-surface relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            {t('surgeries.title')}
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            {t('surgeries.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleSurgeries.map((surgery, index) => (
              <motion.div
                key={surgery.titleKey}
                ref={index === 1 ? secondCardRef : index === 2 ? thirdCardRef : null}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <SurgeryCard {...surgery} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile See More Button */}
        {isMobile && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center md:hidden"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
            >
              <span>{showAll ? t('surgeries.seeLess') : t('surgeries.seeMore')}</span>
              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SurgeriesGrid;
