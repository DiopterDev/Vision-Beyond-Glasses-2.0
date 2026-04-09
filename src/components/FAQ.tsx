import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

interface FAQItemProps {
  questionKey?: string;
  answerKey?: string;
  question?: React.ReactNode;
  answer?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  isVerified?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({ 
  questionKey, 
  answerKey, 
  question, 
  answer, 
  isOpen, 
  onToggle,
  isVerified
}) => {
  const { t } = useLanguage();

  const q = question || (questionKey ? t(questionKey) : '');
  const a = answer || (answerKey ? t(answerKey) : '');

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-4">
          <div className={cn(
            "p-2 rounded-lg transition-colors",
            isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary group-hover:bg-primary/20"
          )}>
            <HelpCircle size={20} />
          </div>
          <div className="flex flex-col">
            <h3 className={cn(
              "text-lg font-bold transition-colors",
              isOpen ? "text-primary" : "text-text-heading group-hover:text-primary"
            )}>
              {q}
            </h3>
            {isVerified && !isOpen && (
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest flex items-center mt-1">
                <ShieldCheck size={10} className="mr-1" />
                Verified Insight
              </span>
            )}
          </div>
        </div>
        <ChevronDown 
          size={20} 
          className={cn(
            "text-tagline transition-transform duration-300",
            isOpen ? "rotate-180 text-primary" : "group-hover:text-primary"
          )} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-14 pr-4">
              <div className="text-text-body leading-relaxed">
                {a}
              </div>
              {isVerified && (
                <div className="mt-4 flex items-center text-xs font-bold text-primary uppercase tracking-widest">
                  <ShieldCheck size={14} className="mr-2" />
                  Verified Clinical Insight
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    { q: 'faq.q1.question', a: 'faq.q1.answer' },
    { q: 'faq.q2.question', a: 'faq.q2.answer' },
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="card-modern p-2 md:p-8"
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                questionKey={item.q}
                answerKey={item.a}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a 
                href="/resources" 
                className="inline-flex items-center text-primary font-bold hover:underline group"
              >
                {t('faq.seeMoreResources')}
                <ChevronDown size={20} className="ml-1 -rotate-90 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
