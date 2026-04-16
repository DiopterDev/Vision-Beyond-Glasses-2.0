import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage } from '../context/LanguageContext';
import { surgeriesData } from '../constants/surgeriesData';
import { Wallet, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CostOverview: React.FC = () => {
  const { formatPrice } = useCurrency();
  const { t, language } = useLanguage();
  const [isMobile, setIsMobile] = React.useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth * 0.78;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const surgeries = [
    { slug: 'smile-pro', name: 'SMILE PRO' },
    { slug: 'femto-lasik', name: 'Femto-LASIK' },
    { slug: 'prk', name: 'PRK' },
    { slug: 'icl-ipcl', name: 'ICL / IPCL' },
    { slug: 'cle-cataract', name: 'Advanced Cataract Surgery' },
  ];

  if (isMobile) {
    return (
      <section id="costs" className="py-24 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text-heading mb-4 tracking-tight">
              {t('costs.title')}
            </h2>
            <p className="text-base text-text-body max-w-2xl mx-auto">
              {t('costs.subtitle')}
            </p>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 custom-scrollbar"
          >
            <AnimatePresence mode="popLayout">
              {surgeries.map((s, i) => {
                const data = surgeriesData[s.slug]?.[language as 'en' | 'np'];
                if (!data || !data.cost) return null;

                return (
                  <motion.div
                    key={s.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center shrink-0"
                  >
                    <div className="w-[78vw] min-w-[78vw] max-w-[78vw] snap-center px-1">
                      <div className="p-5 rounded-3xl bg-background border border-primary/10 shadow-sm flex flex-col h-[360px] w-full overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-base font-bold text-text-heading truncate mr-2">
                            {s.name}
                          </h3>
                          <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                            <Wallet size={16} />
                          </div>
                        </div>

                        <div className="mb-4 flex-grow">
                          {data.cost.notStarted ? (
                            <p className="text-amber-600 dark:text-amber-400 font-medium text-xs">
                              {t('costs.startingSoon')}
                            </p>
                          ) : (
                            <div className="space-y-0.5">
                              <p className="text-xl font-black text-primary flex items-baseline flex-wrap">
                                {data.cost.isStartingAt && (
                                  <span className="text-[9px] font-bold text-text-body mr-1 uppercase">
                                    {t('costs.from')}
                                  </span>
                                )}
                                <span>{formatPrice(data.cost.surgeryCost)}</span>
                              </p>
                              <p className="text-[9px] text-text-body font-bold uppercase tracking-wider">
                                {data.cost.isPerEye 
                                  ? t('costs.perEye')
                                  : t('costs.bothEyes')}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="space-y-2 mb-4">
                          {data.cost.opdRegistration && (
                            <div className="flex items-center text-[11px] text-text-body font-medium">
                              <CheckCircle2 size={12} className="text-success mr-2 shrink-0" />
                              <span className="truncate">
                                {t('costs.opdRegistration')}
                                <span className="font-bold ml-1">{formatPrice(data.cost.opdRegistration)}</span>
                              </span>
                            </div>
                          )}
                          {data.cost.eligibilityScan && (
                            <div className="flex items-center text-[11px] text-text-body font-medium">
                              <CheckCircle2 size={12} className="text-success mr-2 shrink-0" />
                              <span className="truncate">
                                {t('costs.eligibilityScan')}
                                <span className="font-bold ml-1">{formatPrice(data.cost.eligibilityScan)}</span>
                              </span>
                            </div>
                          )}
                          <div className="flex items-center text-[11px] text-text-body font-medium">
                            <CheckCircle2 size={12} className="text-success mr-2 shrink-0" />
                            <span>{t('costs.postOpCare')}</span>
                          </div>
                          <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-800">
                            <p className="text-[9px] text-text-body font-medium leading-tight italic line-clamp-2">
                              {t('costs.disclaimer')}
                            </p>
                          </div>
                        </div>

                        <Link 
                          to={`/surgery/${s.slug}`}
                          className="w-full py-3 rounded-xl bg-surface border border-gray-100 dark:border-gray-800 text-text-heading font-bold flex items-center justify-center text-xs mt-auto"
                        >
                          {t('costs.viewDetails')}
                          <ArrowRight size={14} className="ml-2" />
                        </Link>
                      </div>
                    </div>

                    {i < surgeries.length - 1 && (
                      <div className="flex items-center justify-center px-2 opacity-20 shrink-0">
                        <div className="w-1 h-12 bg-primary rounded-full" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
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
    <section id="costs" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
            {t('costs.title')}
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            {t('costs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {surgeries.map((s, i) => {
              const data = surgeriesData[s.slug]?.[language as 'en' | 'np'];
              if (!data || !data.cost) return null;

              return (
                <motion.div
                  key={s.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-3xl bg-background border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-text-heading group-hover:text-primary transition-colors">
                      {s.name}
                    </h3>
                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                      <Wallet size={20} />
                    </div>
                  </div>

                  <div className="mb-8 flex-grow">
                    {data.cost.notStarted ? (
                      <p className="text-amber-600 dark:text-amber-400 font-medium text-sm">
                        {t('costs.startingSoon')}
                      </p>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-3xl font-black text-primary">
                          {data.cost.isStartingAt && (
                            <span className="text-xs font-bold text-text-body mr-2 uppercase">
                              {t('costs.from')}
                            </span>
                          )}
                          {formatPrice(data.cost.surgeryCost)}
                        </p>
                        <p className="text-xs text-text-body font-bold uppercase tracking-wider">
                          {data.cost.isPerEye 
                            ? t('costs.perEye')
                            : t('costs.bothEyes')}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {data.cost.opdRegistration && (
                      <div className="flex items-center text-sm text-text-body font-medium">
                        <CheckCircle2 size={16} className="text-success mr-2" />
                        <span>
                          {t('costs.opdRegistration')}
                          <span className="font-bold">{formatPrice(data.cost.opdRegistration)}</span>
                        </span>
                      </div>
                    )}
                    {data.cost.eligibilityScan && (
                      <div className="flex items-center text-sm text-text-body font-medium">
                        <CheckCircle2 size={16} className="text-success mr-2" />
                        <span>
                          {t('costs.eligibilityScan')}
                          <span className="font-bold">{formatPrice(data.cost.eligibilityScan)}</span>
                        </span>
                      </div>
                    )}
                    <div className="flex items-center text-sm text-text-body font-medium">
                      <CheckCircle2 size={16} className="text-success mr-2" />
                      <span>{t('costs.postOpCare')}</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
                      <p className="text-[11px] text-text-body font-medium leading-tight italic">
                        {t('costs.disclaimer')}
                      </p>
                    </div>
                  </div>

                  <Link 
                    to={`/surgery/${s.slug}`}
                    className="w-full py-5 rounded-2xl bg-surface border border-gray-100 dark:border-gray-800 text-text-heading font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm"
                    aria-label={`${t('costs.viewDetails')} ${s.name}`}
                  >
                    {t('costs.viewDetails')}
                    <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CostOverview;
