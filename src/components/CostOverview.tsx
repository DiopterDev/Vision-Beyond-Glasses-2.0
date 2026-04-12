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
  const [showAll, setShowAll] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const buttonRef = React.useRef<HTMLDivElement>(null);
  const femtoCardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fix scroll position when collapsing on mobile
  const isFirstRender = React.useRef(true);
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // When collapsing on mobile, scroll back to the Femto-LASIK card
    if (isMobile && !showAll && femtoCardRef.current) {
      const yOffset = -120; // Offset for navbar and some breathing room
      const y = femtoCardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  }, [showAll, isMobile]);

  const surgeries = [
    { slug: 'smile-pro', name: 'SMILE PRO' },
    { slug: 'femto-lasik', name: 'Femto-LASIK' },
    { slug: 'prk', name: 'PRK' },
    { slug: 'icl-ipcl', name: 'ICL / IPCL' },
    { slug: 'cle-cataract', name: 'Advanced Cataract Surgery' },
  ];

  const visibleSurgeries = isMobile && !showAll ? surgeries.slice(0, 2) : surgeries;

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
            {visibleSurgeries.map((s, i) => {
              const data = surgeriesData[s.slug]?.[language as 'en' | 'np'];
              if (!data || !data.cost) return null;

              return (
                <motion.div
                  key={s.slug}
                  ref={s.slug === 'femto-lasik' ? femtoCardRef : null}
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
                            <span className="text-xs font-bold text-text-body/60 mr-2 uppercase">
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

        {/* Mobile See More Button */}
        {isMobile && surgeries.length > 2 && (
          <motion.div 
            ref={buttonRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center md:hidden"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
              aria-label={showAll ? t('surgeries.seeLess') : t('surgeries.seeMore')}
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

export default CostOverview;
