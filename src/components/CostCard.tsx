import React from 'react';
import { motion } from 'motion/react';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage } from '../context/LanguageContext';
import { Wallet, Info, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '../lib/utils';

interface CostCardProps {
  costData?: {
    title: string;
    opdRegistration?: number;
    eligibilityScan?: number;
    surgeryCost: number;
    isPerEye?: boolean;
    isStartingAt?: boolean;
    notStarted?: boolean;
  };
  className?: string;
}

const CostCard: React.FC<CostCardProps> = ({ costData, className }) => {
  const { formatPrice } = useCurrency();
  const { t, language } = useLanguage();

  if (!costData) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      viewport={{ once: true }}
      className={cn(
        "p-10 rounded-3xl bg-primary/5 dark:bg-primary/10 border border-primary/30 shadow-xl relative overflow-hidden group transition-all duration-300",
        className
      )}
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <Wallet size={24} />
          </div>
          <h3 className="text-2xl font-bold text-text-heading">{costData.title}</h3>
        </div>

        {costData.notStarted ? (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start space-x-4">
              <AlertCircle className="text-amber-500 shrink-0" size={24} />
              <div>
                <p className="text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
                  {t('costs.startingSoonNotice')}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-text-body/10">
              <Link 
                to="/#costs" 
                className="inline-flex items-center text-sm font-bold text-primary hover:underline group/link"
              >
                {t('costs.viewAll')}
                <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {costData.opdRegistration && (
              <div className="flex justify-between items-center pb-4 border-b border-text-body/10">
                <div>
                  <p className="text-sm text-text-body font-bold uppercase tracking-wider mb-1">
                    {t('costs.opdRegistration')}
                  </p>
                  <p className="text-text-body text-sm font-medium">
                    {t('costs.opdRegistrationDesc')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-text-heading">
                    {formatPrice(costData.opdRegistration)}
                  </p>
                </div>
              </div>
            )}

            {costData.eligibilityScan && (
              <div className="flex justify-between items-center pb-4 border-b border-text-body/10">
                <div>
                  <p className="text-sm text-text-body font-bold uppercase tracking-wider mb-1">
                    {t('costs.eligibilityScan')}
                  </p>
                  <p className="text-text-body text-sm font-medium">
                    {t('costs.eligibilityScanDesc')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-text-heading">
                    {formatPrice(costData.eligibilityScan)}
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-text-body font-bold uppercase tracking-wider mb-1">
                  {t('costs.surgeryCost')}
                </p>
                <p className="text-text-body text-sm font-medium">
                  {costData.isPerEye 
                    ? t('costs.perEye')
                    : t('costs.bothEyes')}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-black text-primary">
                  {costData.isStartingAt && (
                    <span className="text-sm font-bold text-text-body mr-2 uppercase">
                      {t('costs.from')}
                    </span>
                  )}
                  {formatPrice(costData.surgeryCost)}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-surface/50 dark:bg-white/5 flex items-start space-x-3">
              <Info className="text-primary shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-text-body font-medium leading-relaxed">
                {t('costs.disclaimer')}
              </p>
            </div>

            <div className="pt-4 border-t border-text-body/10">
              <Link 
                to="/#costs" 
                className="inline-flex items-center text-sm font-bold text-primary hover:underline group/link py-2"
              >
                {t('costs.viewAll')}
                <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CostCard;
