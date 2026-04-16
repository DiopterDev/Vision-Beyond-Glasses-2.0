import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, ArrowLeft, RotateCcw, CheckCircle2, AlertCircle, XCircle, HelpCircle, Calendar, Minus, Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

// --- Corrected 11-Question Logic FLOW ---
const FLOW: any = {
  q1: { id: "q1", key: "elig.q1", type: "yesno", yes: "q2", no: "r_no_surgery" },
  q2: { id: "q2", key: "elig.q2", type: "yesno", yes: "r_observe", no: "q3" },
  q3: { id: "q3", key: "elig.q3", type: "yesnoknow", infoKey: "elig.info.keratoconus", yes: "q4", no: "q5", notSure: "q5" },
  q4: { id: "q4", key: "elig.q4", type: "yesnoknow", infoKey: "elig.info.cataract", yes: "r_cle", no: "r_icl", notSure: "r_icl" },
  q5: { id: "q5", key: "elig.q5", type: "yesnoknow", infoKey: "elig.info.cataract", yes: "r_cle", no: "q7", notSure: "q7" },
  q7: { id: "q7", key: "elig.q7", type: "plusminus", yes: "q8", no: "q9" }, // yes=Minus (Myopic), no=Plus (Hypermetropic)
  q8: { id: "q8", key: "elig.q8", type: "yesno", yes: "r_smile_prk_icl_cle2", no: "q10" }, // Myopic + Sports
  q9: { id: "q9", key: "elig.q9", type: "yesno", yes: "r_prk_icl_cle", no: "q11" }, // Hypermetropic + Sports
  q10: { id: "q10", key: "elig.q10", type: "yesno", yes: "r_smile_prk_icl_cle", no: "r_smile_prk_lasik_icl_cle" }, // Myopic Dry Eye
  q11: { id: "q11", key: "elig.q11", type: "yesno", yes: "r_prk_smile_cle_icl", no: "r_smile_prk_lasik_icl_cle" }, // Hypermetropic Dry Eye

  // Results Mapping - Keys match LanguageContext exactly
  r_no_surgery: { status: "ineligible", key: "r_no_surgery", procedures: [] },
  r_observe: { status: "observe", key: "r_observe", procedures: [] },
  r_cle: { status: "eligible", key: "r_cle", procedures: ["CLE"] },
  r_icl: { status: "eligible", key: "r_icl", procedures: ["ICL", "CLE"] },
  r_smile_prk: { status: "eligible", key: "r_smile_prk", procedures: ["SMILE", "PRK", "ICL", "CLE"] },
  r_prk_icl_cle: { status: "eligible", key: "r_prk_icl_cle", procedures: ["SMILE", "PRK", "ICL", "CLE"] },
  r_smile_prk_icl_cle: { status: "eligible", key: "r_smile_prk_icl_cle", procedures: ["SMILE", "PRK", "ICL", "CLE"] },
  r_smile_prk_icl_cle2: { status: "eligible", key: "r_smile_prk_icl_cle2", procedures: ["SMILE", "PRK", "ICL", "CLE"] },
  r_smile_prk_lasik_icl_cle: { status: "eligible", key: "r_smile_prk_lasik_icl_cle", procedures: ["SMILE", "LASIK", "PRK", "ICL", "CLE"] },
  r_prk_smile_cle_icl: { status: "eligible", key: "r_prk_smile_cle_icl", procedures: ["SMILE", "PRK", "ICL", "CLE"] },
  r_smile_lasik_prk_cle_icl: { status: "eligible", key: "r_smile_lasik_prk_cle_icl", procedures: ["SMILE", "LASIK", "PRK", "ICL", "CLE"] },
};

const EligibilityChecker: React.FC = () => {
  const { t } = useLanguage();
  const [history, setHistory] = useState<string[]>(["q1"]);
  const [currentId, setCurrentId] = useState<string>("q1");
  const [showResult, setShowResult] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<boolean>(false);
  const [isConsented, setIsConsented] = useState<boolean>(false);

  const currentNode = FLOW[currentId];
  const progress = (history.length / 7) * 100; // Longest path is 7 questions

  const isPlusPower = history.includes('q9') || history.includes('q11');

  const handleAnswer = (answer: 'yes' | 'no' | 'notSure') => {
    const nextId = answer === 'notSure' ? (currentNode.notSure || currentNode.no) : currentNode[answer];

    if (FLOW[nextId].status) {
      setShowResult(true);
      setCurrentId(nextId);
    } else {
      setCurrentId(nextId);
      setHistory([...history, nextId]);
      setActiveTooltip(false);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setCurrentId(history[history.length - 1]);
    } else if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const prevId = newHistory[newHistory.length - 1];
      setHistory(newHistory);
      setCurrentId(prevId);
      setActiveTooltip(false);
    }
  };

  const reset = () => {
    setHistory(["q1"]);
    setCurrentId("q1");
    setShowResult(false);
    setActiveTooltip(false);
    setIsConsented(false);
  };

  const result = showResult ? FLOW[currentId] : null;

  return (
    <section id="eligibility" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className={cn(
          "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] transition-colors duration-1000",
          !showResult ? "bg-primary/20" : 
          result?.status === 'eligible' ? "bg-emerald-500/30" :
          result?.status === 'observe' ? "bg-amber-500/30" : "bg-rose-500/30"
        )} />
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">{t('elig.title')}</h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">{t('elig.subtitle')}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "card-modern overflow-hidden min-h-[480px] flex flex-col transition-all duration-500",
            !isConsented && "border-primary/20",
            showResult && result?.status === 'eligible' && "!bg-emerald-50/50 dark:!bg-emerald-950/20 border-emerald-200 shadow-emerald-500/5",
            showResult && result?.status === 'observe' && "!bg-amber-50/50 dark:!bg-amber-950/20 border-amber-200 shadow-amber-500/5",
            showResult && result?.status === 'ineligible' && "!bg-rose-50/50 dark:!bg-rose-950/20 border-rose-200 shadow-rose-500/5"
          )}
        >
          {isConsented && !showResult && (
            <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
              <motion.div 
                className="h-full bg-primary" 
                initial={{ width: 0 }} 
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 40, damping: 15 }}
              />
            </div>
          )}

          <div className="p-8 md:p-12 flex-grow flex flex-col">
            {!isConsented ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex-grow flex flex-col items-center justify-center text-center py-4"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <Info size={32} />
                </div>
                <h3 className="text-[28px] font-bold text-text-heading mb-6 font-sans leading-tight">{t('elig.consent.title')}</h3>
                <div className="p-6 md:p-8 bg-surface dark:bg-primary/10 border border-text-heading/10 dark:border-primary/20 rounded-2xl mb-10 max-w-lg">
                  <p className="text-text-body leading-relaxed text-lg md:text-xl">
                    {t('elig.consent.text')}
                  </p>
                </div>
                <button 
                  onClick={() => setIsConsented(true)}
                  className="w-full sm:w-auto px-10 py-5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 text-lg flex items-center justify-center space-x-3"
                >
                  <span>{t('elig.consent.button')}</span>
                  <CheckCircle2 size={20} />
                </button>
              </motion.div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">
                    {!showResult ? `${t('elig.questionOf')} ${history.length}` : t(`elig.badge.${result.status}`)}
                  </span>
                  <div className="flex space-x-2">
                    {(history.length > 1 || showResult) && (
                      <button onClick={handleBack} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-text-body transition-colors" aria-label={t('elig.prevQuestion')}>
                        <ArrowLeft size={18} />
                      </button>
                    )}
                    <button onClick={reset} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-text-body transition-colors" aria-label={t('elig.startOver')}>
                      <RotateCcw size={18} />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {!showResult ? (
                    <motion.div 
                      key={currentId} 
                      initial={{ opacity: 0, x: 15 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      exit={{ opacity: 0, x: -15 }} 
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-grow flex flex-col"
                      role="region"
                      aria-live="polite"
                    >
                      <div className="mb-10">
                        <div className="flex items-start justify-between space-x-4">
                          <h3 className="text-xl md:text-2xl font-semibold text-text-heading leading-tight" id="elig-question-text">{t(currentNode.key)}</h3>
                          {currentNode.infoKey && (
                            <button 
                              onClick={() => setActiveTooltip(!activeTooltip)} 
                              className={cn("mt-1 p-2 rounded-full transition-all", activeTooltip ? "bg-primary text-white" : "bg-primary/10 text-primary")}
                              aria-label={t('elig.info.label')}
                              aria-expanded={activeTooltip}
                            >
                              <HelpCircle size={20} />
                            </button>
                          )}
                        </div>
                        {activeTooltip && currentNode.infoKey && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }} 
                            animate={{ opacity: 1, height: 'auto' }} 
                            className="mt-4 p-4 bg-primary/5 border border-primary/10 rounded-xl text-sm text-text-body flex items-start space-x-3"
                            role="alert"
                          >
                            <Info size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <p>{t(currentNode.infoKey)}</p>
                          </motion.div>
                        )}
                      </div>

                      <div className={cn("grid gap-4 mt-auto", currentNode.type === 'yesnoknow' ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2")}>
                        {(currentNode.type === 'yesno' || currentNode.type === 'yesnoknow') && (
                          <>
                            <button onClick={() => handleAnswer('yes')} className="flex items-center justify-center space-x-3 p-5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all text-lg shadow-lg shadow-emerald-600/20">
                              <CheckCircle2 size={22} /><span>{t('elig.yes')}</span>
                            </button>
                            <button onClick={() => handleAnswer('no')} className="flex items-center justify-center space-x-3 p-5 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 transition-all text-lg shadow-lg shadow-rose-600/20">
                              <XCircle size={22} /><span>{t('elig.no')}</span>
                            </button>
                            {currentNode.type === 'yesnoknow' && (
                              <button onClick={() => handleAnswer('notSure')} className="flex items-center justify-center space-x-3 p-5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition-all text-lg shadow-lg shadow-amber-500/20">
                                <HelpCircle size={22} /><span>{t('elig.notSure')}</span>
                              </button>
                            )}
                          </>
                        )}
                        {currentNode.type === 'plusminus' && (
                          <>
                            <button onClick={() => handleAnswer('yes')} className="flex items-center justify-center space-x-3 p-5 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all text-lg shadow-lg shadow-emerald-600/20">
                              <Minus size={22} /><span>{t('elig.q7.yesLabel')}</span>
                            </button>
                            <button onClick={() => handleAnswer('no')} className="flex items-center justify-center space-x-3 p-5 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700 transition-all text-lg shadow-lg shadow-rose-600/20">
                              <Plus size={22} /><span>{t('elig.q7.noLabel')}</span>
                            </button>
                          </>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.98 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="text-center flex flex-col items-center justify-center flex-grow"
                    >
                      <div className={cn("mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center space-x-2", 
                        result.status === 'eligible' ? "bg-emerald-100 text-emerald-700" : result.status === 'observe' ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"
                      )}>
                        {result.status === 'eligible' ? <CheckCircle2 size={14} /> : result.status === 'observe' ? <AlertCircle size={14} /> : <XCircle size={14} />}
                        <span>{t(`elig.badge.${result.status}`)}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-text-heading mb-4">{t(`elig.${result.key}.title`)}</h3>
                      <p className="text-text-body mb-6 max-w-md mx-auto leading-relaxed">{t(`elig.${result.key}.desc`)}</p>

                      {result.procedures.length > 0 && (
                        <div className="flex flex-wrap gap-2 justify-center mb-6">
                          {result.procedures.map((p: string) => (
                            <span key={p} className="px-4 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold border border-primary/20">{p}</span>
                          ))}
                        </div>
                      )}

                      {isPlusPower && result.procedures.includes('SMILE') && (
                        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl text-left">
                          <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
                            <strong className="text-amber-900 dark:text-amber-100">{t('elig.smileNoteLabel')}</strong>
                            {t('elig.smileNote')}
                          </p>
                        </div>
                      )}

                      {/* General Medical Disclaimer for Results */}
                      <div className="mb-8 p-4 bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 rounded-xl text-left">
                        <div className="flex items-start space-x-3">
                          <AlertCircle size={16} className="text-primary/60 mt-0.5 flex-shrink-0" />
                          <p className="text-[10px] md:text-xs text-text-body dark:text-text-body leading-relaxed italic">
                            {t('elig.consent.text')}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full justify-center mt-auto">
                        <a href="#contact" className="flex items-center justify-center space-x-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20" aria-label={t('elig.bookConsultation')}>
                          <Calendar size={20} /><span>{t('elig.bookConsultation')}</span>
                        </a>
                        <button onClick={reset} className="flex items-center justify-center space-x-2 px-8 py-4 bg-surface border border-gray-200 dark:border-gray-700 text-text-heading font-bold rounded-xl hover:border-primary transition-all">
                          <RotateCcw size={20} /><span>{t('elig.startOver')}</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EligibilityChecker;