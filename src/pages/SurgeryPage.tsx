import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { surgeriesData } from '../constants/surgeriesData';
import { 
  CheckCircle2, 
  UserCheck, 
  ShieldCheck, 
  Zap, 
  Eye, 
  ArrowRight, 
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Info,
  AlertCircle,
  Calendar,
  Shield,
  Plane,
  Stethoscope,
  Trophy,
  Mountain,
  Briefcase,
  Target,
  Users
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { cn } from '../lib/utils';
import CostCard from '../components/CostCard';
import { FAQItem } from '../components/FAQ';

import { aeoData } from '../constants/aeoData';
import { transcriptsData } from '../constants/transcriptsData';

const SurgeryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showTranscript, setShowTranscript] = useState(false);
  
  const data = slug ? surgeriesData[slug]?.[language as 'en' | 'np'] : null;
  const transcript = slug ? transcriptsData[slug]?.[language as 'en' | 'np'] : null;
  const aeoItems = slug ? aeoData[slug]?.[language as 'en' | 'np'] || [] : [];

  const mergedFaqs = [
    ...(data?.faqs || []).map(faq => ({ ...faq, isVerified: false })),
    ...aeoItems.map((item: any) => ({ 
      question: item.question, 
      answer: item.answer, 
      isVerified: true 
    }))
  ];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-heading mb-4">Page Not Found</h1>
          <Link to="/" className="text-primary hover:underline flex items-center justify-center">
            <ArrowRight className="mr-2 rotate-180" size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap size={24} />,
    Eye: <Eye size={24} />,
  };

  const professionIconMap: Record<string, React.ReactNode> = {
    // English
    'Military': <Shield size={24} />,
    'Police': <Shield size={24} />,
    'Pilots': <Plane size={24} />,
    'Surgeons': <Stethoscope size={24} />,
    'Athletes': <Trophy size={24} />,
    'Trekkers': <Mountain size={24} />,
    'Medical Professionals': <Stethoscope size={24} />,
    'Office Professionals': <Briefcase size={24} />,
    'British Gurkha': <Shield size={24} />,
    'Nepal Army': <Shield size={24} />,
    'Singapore Police': <Shield size={24} />,
    'Combat Sports': <Target size={24} />,
    'Presbyopic People': <Eye size={24} />,
    
    // Nepali
    'सेना': <Shield size={24} />,
    'प्रहरी': <Shield size={24} />,
    'पाइलट': <Plane size={24} />,
    'सर्जन': <Stethoscope size={24} />,
    'एथलीट': <Trophy size={24} />,
    'ट्रेकर': <Mountain size={24} />,
    'चिकित्सा पेशेवर': <Stethoscope size={24} />,
    'कार्यालय पेशेवर': <Briefcase size={24} />,
    'ब्रिटिश गोर्खा': <Shield size={24} />,
    'नेपाल सेना': <Shield size={24} />,
    'सिंगापुर प्रहरी': <Shield size={24} />,
    'लडाई खेल': <Target size={24} />,
    'प्रेसबायोपिक व्यक्तिहरू': <Eye size={24} />,
  };

  return (
    <div className="bg-background pt-20">
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords.join(', ')} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": data.title,
            "description": data.subtitle,
            "procedureType": "SurgicalProcedure",
            "bodyLocation": "Eye",
            "relevantSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Ophthalmology"
            },
            "provider": {
              "@type": "Physician",
              "name": "Dr. Kaushal Pokhrel",
              "medicalSpecialty": "Ophthalmology",
              "description": "Expert in Laser Vision Correction and Refractive Surgery",
              "url": window.location.origin
            },
            "offers": {
              "@type": "Offer",
              "description": data.investment.description
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <nav className="flex items-center space-x-2 text-sm text-text-body/60 mb-6">
                <Link to="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link>
                <ChevronRight size={14} />
                <span className="text-primary font-medium">{data.title}</span>
              </nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl text-text-body mb-8 leading-relaxed max-w-xl">
                {data.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/#eligibility"
                  className="bg-success text-white px-6 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-floating text-center inline-block"
                >
                  {t('cta.eligibility')}
                </Link>
                <Link 
                  to="/#contact"
                  className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all shadow-floating text-center inline-block"
                >
                  {t('cta.consultation')}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 dark:border-white/5 bg-slate-900"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900 animate-pulse">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              </div>
              <iframe
                src={data.videoUrl}
                title={data.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full border-0 z-10"
              ></iframe>
            </motion.div>
            {data.videoCaption && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-center"
              >
                <p className="text-text-body/80 italic text-sm md:text-base mb-2">
                  {data.videoCaption}
                </p>
                {transcript && (
                  <button 
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="text-xs font-bold text-primary hover:underline flex items-center justify-center mx-auto"
                  >
                    {showTranscript ? (language === 'en' ? 'Hide Transcript' : 'ट्रान्सक्रिप्ट लुकाउनुहोस्') : (language === 'en' ? 'View Transcript' : 'ट्रान्सक्रिप्ट हेर्नुहोस्')}
                    {showTranscript ? <ChevronUp size={14} className="ml-1" /> : <ChevronDown size={14} className="ml-1" />}
                  </button>
                )}
                <AnimatePresence>
                  {showTranscript && transcript && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 p-4 bg-surface rounded-xl border border-text-heading/5 text-left text-xs text-text-body leading-relaxed"
                    >
                      <h4 className="font-bold mb-2 uppercase tracking-widest text-[10px] text-primary">Video Transcript</h4>
                      {transcript}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 bg-surface/30 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: data.benefits.title, 
                desc: data.benefits.description, 
                icon: <CheckCircle2 className="text-green-500" size={32} />,
                bg: "bg-green-500/5"
              },
              { 
                title: data.idealCandidate.title, 
                desc: data.idealCandidate.description, 
                icon: <UserCheck className="text-blue-500" size={32} />,
                bg: "bg-blue-500/5",
                cta: {
                  text: language === 'en' ? 'Check Your Eligibility' : 'आफ्नो योग्यता जाँच गर्नुहोस्',
                  href: '/#eligibility'
                }
              },
              { 
                title: data.advantage.title, 
                desc: data.advantage.description, 
                icon: <ShieldCheck className="text-primary" size={32} />,
                bg: "bg-primary/5"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl border border-white/20 dark:border-white/10 ${item.bg} backdrop-blur-sm shadow-sm hover:shadow-md transition-all flex flex-col`}
              >
                <div className="mb-6 p-3 rounded-2xl bg-white dark:bg-white/10 w-fit shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-4">{item.title}</h3>
                <p className="text-text-body leading-relaxed mb-6 flex-grow">{item.desc}</p>
                {item.cta && (
                  <Link 
                    to={item.cta.href}
                    className="inline-flex items-center text-primary font-bold hover:underline group/cta"
                  >
                    {item.cta.text}
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Professions Section */}
      {data.targetProfessions && data.targetProfessions.length > 0 && (
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
                {t('surgery.targetProfessions.title')}
              </h2>
              <p className="text-text-body max-w-2xl mx-auto">
                {t('surgery.targetProfessions.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {data.targetProfessions.map((profession, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col items-center p-6 rounded-2xl bg-surface border border-primary/10 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {professionIconMap[profession] || <Users size={24} />}
                  </div>
                  <span className="text-sm font-bold text-text-heading text-center">
                    {profession}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clinical Details - Information Gain Section */}
      {data.clinicalDetails && data.clinicalDetails.length > 0 && (
        <section className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
                {language === 'en' ? 'Clinical Precision & Advanced Details' : 'क्लिनिकल सटीकता र उन्नत विवरणहरू'}
              </h2>
              <p className="text-text-body max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Deep dive into the technical excellence that ensures your safety and visual quality.'
                  : 'तपाईंको सुरक्षा र दृश्य गुणस्तर सुनिश्चित गर्ने प्राविधिक उत्कृष्टताको गहिरो अध्ययन।'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.clinicalDetails.map((detail, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-primary/10 shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">{detail.title}</h3>
                  <p className="text-text-body leading-relaxed text-sm">{detail.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology Spotlight - Tools of Precision */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              {language === 'en' ? 'Tools of Precision' : 'सटीकताका उपकरणहरू'}
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full" />
          </div>
          
          <PrecisionToolsSection slug={slug || ''} language={language as 'en' | 'np'} />
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-24 bg-surface/30 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              {language === 'en' ? 'Recovery Timeline' : 'रिकभरी टाइमलाइन'}
            </h2>
            <p className="text-text-body max-w-2xl mx-auto">
              {language === 'en' 
                ? 'What to expect in the hours, days, and weeks following your procedure.'
                : 'तपाईंको प्रक्रिया पछिका घण्टा, दिन र हप्ताहरूमा के अपेक्षा गर्ने।'}
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Aligned with icons */}
            <div className="absolute top-8 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {data.timeline.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="relative group h-full z-10 hover:z-20"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon Marker */}
                    <div className="w-16 h-16 rounded-full bg-surface border-4 border-primary/20 shadow-floating dark:shadow-dark-floating flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300 z-30 bg-clip-padding">
                      <Calendar className="text-primary" size={24} />
                    </div>
                    
                    {/* Content Card */}
                    <div className="p-8 rounded-3xl bg-white/90 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-md w-full h-full flex flex-col hover:shadow-2xl transition-all duration-300 group-hover:bg-white dark:group-hover:bg-white/10">
                      <h4 className="text-xl font-bold text-primary mb-3 tracking-tight">{stage.time}</h4>
                      <p className="text-sm text-text-body leading-relaxed flex-grow">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison & Cost */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={cn(
                "p-10 rounded-3xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10",
                data.comparison.table ? "lg:col-span-2" : ""
              )}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-text-heading">{data.comparison.title}</h3>
              </div>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                {data.comparison.description}
              </p>

              {data.comparison.table && (
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <div className="inline-block min-w-full align-middle">
                    <table className="min-w-full border-separate border-spacing-0">
                      <thead>
                        <tr>
                          {data.comparison.table.headers.map((header, i) => (
                            <th 
                              key={i} 
                              className={cn(
                                "p-4 text-left text-xs font-bold uppercase tracking-wider border-b border-white/10",
                                i === 0 ? "text-primary" : "text-text-heading"
                              )}
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {data.comparison.table.rows.map((row, i) => (
                          <tr key={i} className="group transition-colors hover:bg-white/5">
                            <td className="p-4 text-sm font-bold text-text-heading whitespace-nowrap">
                              {row.label}
                            </td>
                            {row.values.map((val, j) => (
                              <td key={j} className="p-4 text-sm text-text-body leading-relaxed min-w-[200px]">
                                {val}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </motion.div>

            <div className={cn(
              "lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch",
              !data.cost && "md:grid-cols-1"
            )}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-white dark:bg-white/5 border border-primary/20 shadow-xl flex flex-col h-full"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-text-heading">{data.investment.title}</h3>
                </div>
                <p className="text-lg text-text-body leading-relaxed mb-8 flex-grow">
                  {data.investment.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/#contact" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    {language === 'en' ? 'Book Consultation' : 'परामर्श बुक गर्नुहोस्'}
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link 
                    to="/#eligibility" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary/10 text-primary border border-primary/20 rounded-full font-bold hover:bg-primary/20 transition-all"
                  >
                    {language === 'en' ? 'Check Eligibility' : 'योग्यता जाँच गर्नुहोस्'}
                  </Link>
                </div>
              </motion.div>

              {data.cost && (
                <CostCard 
                  costData={{
                    ...data.cost,
                    title: language === 'en'
                      ? `${data.cost.title} of ${data.title.split(':')[0].trim()}`
                      : `${data.title.split(':')[0].trim()} को ${data.cost.title}`
                  }} 
                  className="h-full" 
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Consolidated FAQs */}
      {mergedFaqs.length > 0 && (
        <section className="py-24 bg-surface/30 dark:bg-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
                {t('faq.title')}
              </h2>
              <p className="text-lg text-text-body max-w-2xl mx-auto">
                {language === 'en' 
                  ? `Common questions and expert insights about ${data.title}.`
                  : `${data.title} बारे सामान्य प्रश्नहरू र विशेषज्ञ अन्तर्दृष्टि।`}
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-modern p-2 md:p-8"
            >
              <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {mergedFaqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isVerified={faq.isVerified}
                    isOpen={openFaqIndex === index}
                    onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  />
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link 
                    to="/resources" 
                    className="inline-flex items-center text-primary font-bold hover:underline group"
                  >
                    {t('faq.seeMoreResources')}
                    <ArrowRight size={20} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Crawlable Eligibility Logic Summary */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-text-heading mb-8 text-center">
            {language === 'en' ? 'Surgery Eligibility Criteria Summary' : 'शल्यक्रिया योग्यता मापदण्ड सारांश'}
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-text-body text-sm leading-relaxed">
            <p>
              {language === 'en' 
                ? 'Our clinical eligibility logic for refractive surgery considers multiple factors to ensure patient safety and optimal visual outcomes. Key criteria include:'
                : 'अपवर्तक शल्यक्रियाका लागि हाम्रो क्लिनिकल योग्यता तर्कले बिरामीको सुरक्षा र इष्टतम दृश्य परिणामहरू सुनिश्चित गर्न धेरै कारकहरू विचार गर्दछ। मुख्य मापदण्डहरू समावेश छन्:'}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
              <li className="flex items-start space-x-2">
                <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                <span>{language === 'en' ? 'Stable prescription for at least 6 months.' : 'कमतीमा ६ महिनाको लागि स्थिर प्रिस्क्रिप्शन।'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                <span>{language === 'en' ? 'Healthy corneal thickness and shape (no Keratoconus).' : 'स्वस्थ कोर्नियल मोटाई र आकार (केराटोकोनस नभएको)।'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                <span>{language === 'en' ? 'Absence of active eye infections or severe dry eye.' : 'सक्रिय आँखा संक्रमण वा गम्भीर सुख्खा आँखाको अभाव।'}</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                <span>{language === 'en' ? 'Age appropriateness (typically 18-45 for laser, 45+ for Presbyond/CLE).' : 'उपयुक्त उमेर (सामान्यतया लेजरका लागि १८-४५, Presbyond/CLE का लागि ४५+)।'}</span>
              </li>
            </ul>

            <div className="mt-10 flex justify-center">
              <Link 
                to="/#eligibility" 
                className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
              >
                <span>{t('cta.eligibility')}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ToolItem {
  name: string;
  description: string;
  image: string;
  category: string;
  alt: string;
}

const PrecisionToolsSection: React.FC<{ slug: string; language: 'en' | 'np' }> = ({ slug, language }) => {
  const tools: ToolItem[] = [
    // Surgery Devices (Conditional)
    ...(slug === 'smile-pro' ? [{
      category: language === 'en' ? 'Surgery' : 'शल्यक्रिया',
      name: 'VisuMax 800',
      description: language === 'en' 
        ? 'The latest femtosecond laser from ZEISS, allowing for a 10-second laser application for maximum patient comfort.'
        : 'ZEISS बाट पछिल्लो फेम्टोसेकेन्ड लेजर, जसले बिरामीको अधिकतम आरामको लागि १० सेकेन्डको लेजर प्रयोग गर्न अनुमति दिनुहुन्छ।',
      image: 'https://i.ibb.co/CpJw9BMd/Visumax-800.webp',
      alt: 'ZEISS VisuMax 800 femtosecond laser system for SMILE Pro surgery'
    }] : []),
    ...(slug === 'femto-lasik' ? [
      {
        category: language === 'en' ? 'Surgery' : 'शल्यक्रिया',
        name: 'VisuMax 800',
        description: language === 'en' 
          ? 'Used for precise, blade-free corneal flap creation.'
          : 'सटीक, ब्लेड-रहित कोर्नियल फ्ल्याप निर्माणको लागि प्रयोग गरिन्छ।',
        image: 'https://i.ibb.co/CpJw9BMd/Visumax-800.webp',
        alt: 'ZEISS VisuMax 800 used for blade-free LASIK flap creation'
      },
      {
        category: language === 'en' ? 'Surgery' : 'शल्यक्रिया',
        name: 'MEL 90',
        description: language === 'en' 
          ? 'Advanced excimer laser for precise corneal reshaping.'
          : 'सटीक कोर्नियल रिसेपिङका लागि उन्नत एक्साइमर लेजर।',
        image: 'https://i.ibb.co/k6H4dkWp/Mel-90.webp',
        alt: 'ZEISS MEL 90 excimer laser for precise vision correction'
      }
    ] : []),
    ...(slug === 'prk' || slug === 'presbyond' ? [{
      category: language === 'en' ? 'Surgery' : 'शल्यक्रिया',
      name: 'MEL 90',
      description: language === 'en' 
        ? 'High-speed excimer laser for precise surface reshaping.'
        : 'सटीक सतह रिसेपिङका लागि उच्च-गति एक्साइमर लेजर।',
      image: 'https://i.ibb.co/k6H4dkWp/Mel-90.webp',
      alt: 'ZEISS MEL 90 excimer laser system for PRK and Presbyond procedures'
    }] : []),
    ...(slug === 'icl-ipcl' ? [{
      category: language === 'en' ? 'Surgery' : 'शल्यक्रिया',
      name: 'ICL / IPCL Lenses',
      description: language === 'en' 
        ? 'Premium biocompatible lenses implanted inside the eye for permanent vision correction.'
        : 'स्थायी दृष्टि सुधारका लागि आँखा भित्र प्रत्यारोपण गरिने प्रिमियम बायोकम्प्याटिबल लेन्सहरू।',
      image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800&h=600',
      alt: 'Premium ICL and IPCL biocompatible lenses for vision correction'
    }] : []),
    ...(slug === 'cle-cataract' ? [{
      category: language === 'en' ? 'Surgery' : 'शल्यक्रिया',
      name: 'Premium IOLs',
      description: language === 'en' 
        ? 'Advanced Trifocal and EDOF intraocular lenses for a full range of vision.'
        : 'दृष्टिको पूर्ण दायराका लागि उन्नत ट्राइफोकल र EDOF इन्ट्राओकुलर लेन्सहरू।',
      image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800&h=600',
      alt: 'Advanced Trifocal and EDOF intraocular lenses for cataract surgery'
    }] : []),

    // Investigation Devices (Common)
    {
      category: language === 'en' ? 'Investigation' : 'अनुसन्धान',
      name: 'MS-39',
      description: language === 'en' 
        ? 'High-resolution AS-OCT and Placido topography for detailed corneal mapping.'
        : 'विस्तृत कोर्नियल म्यापिङका लागि उच्च-रिजोल्युसन AS-OCT र प्लासिडो टोपोग्राफी।',
      image: 'https://i.ibb.co/bR61GWRV/MS39.webp',
      alt: 'MS-39 high-resolution AS-OCT and Placido topography system'
    },
    {
      category: language === 'en' ? 'Investigation' : 'अनुसन्धान',
      name: 'Pentacam',
      description: language === 'en' 
        ? '3D Scheimpflug imaging for comprehensive corneal tomography.'
        : 'व्यापक कोर्नियल टोमोग्राफीका लागि 3D Scheimpflug इमेजिङ।',
      image: 'https://i.ibb.co/HfdLN8C3/Pentacam.webp',
      alt: 'Pentacam 3D Scheimpflug imaging for corneal tomography'
    },
    {
      category: language === 'en' ? 'Investigation' : 'अनुसन्धान',
      name: 'ATLAS',
      description: language === 'en' 
        ? 'Advanced corneal topography system for precise surface analysis.'
        : 'सटीक सतह विश्लेषणका लागि उन्नत कोर्नियल टोपोग्राफी प्रणाली।',
      image: 'https://i.ibb.co/Zz23gJws/ATLAS.webp',
      alt: 'ATLAS advanced corneal topography system for surface analysis'
    },
    {
      category: language === 'en' ? 'Investigation' : 'अनुसन्धान',
      name: 'Automated Pupillometer',
      description: language === 'en' 
        ? 'Precise pupil measurement under various lighting conditions.'
        : 'विभिन्न प्रकाश अवस्थाहरूमा सटीक पुतली मापन।',
      image: 'https://i.ibb.co/HDNkRZz4/Automatic-Pupillometer.webp',
      alt: 'Automated Pupillometer for precise pupil measurement'
    },
    {
      category: language === 'en' ? 'Investigation' : 'अनुसन्धान',
      name: 'Advanced Dry Eye Screening',
      description: language === 'en' 
        ? 'Comprehensive tear film and ocular surface analysis.'
        : 'व्यापक आँसु फिल्म र ओकुलर सतह विश्लेषण।',
      image: 'https://i.ibb.co/Q3RggzqH/Advanced-Dry-Eye.webp',
      alt: 'Advanced dry eye screening and ocular surface analysis system'
    },

    // Operative Theater (Common)
    {
      category: language === 'en' ? 'Operative Theater' : 'शल्यक्रिया कक्ष',
      name: 'State of Art OR',
      description: language === 'en' 
        ? 'A sterile, temperature-controlled environment designed for maximum safety and precision.'
        : 'अधिकतम सुरक्षा र सटीकताका लागि डिजाइन गरिएको बाँझ, तापमान-नियन्त्रित वातावरण।',
      image: 'https://i.ibb.co/DHB81Bj4/State-of-Art-OR.webp',
      alt: 'State-of-the-art sterile operating room for ophthalmic surgeries'
    },

    // Software (Common)
    {
      category: language === 'en' ? 'Software' : 'सफ्टवेयर',
      name: 'LVC Nomogram',
      description: language === 'en' 
        ? 'Proprietary planning algorithm from London Vision Clinic for superior visual outcomes.'
        : 'उत्कृष्ट दृश्य परिणामहरूको लागि लन्डन भिजन क्लिनिकबाट स्वामित्व योजना एल्गोरिदम।',
      image: 'https://i.ibb.co/pBjKwZyy/LVC-Normogram.webp',
      alt: 'LVC Nomogram planning algorithm for superior visual outcomes'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tools.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tools.length]);

  const getIndex = (offset: number) => {
    return (activeIndex + offset + tools.length) % tools.length;
  };

  const getVisibleTools = () => {
    // We want to show the current, previous, and next tools
    const indices = [getIndex(-1), activeIndex, getIndex(1)];
    return indices.map(idx => {
      let rel = 0;
      if (idx === getIndex(-1)) rel = -1;
      if (idx === getIndex(1)) rel = 1;
      return { tool: tools[idx], rel, index: idx };
    });
  };

  const visibleTools = getVisibleTools();

  const verticalOffset = isMobile ? 120 : 180;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side: Vertical Carousel with Rotating Wheel Animation */}
      <div className={cn(
        "relative flex flex-col justify-center overflow-visible group",
        isMobile ? "h-[350px]" : "aspect-[4/3]"
      )}>
        {/* Navigation Arrows */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => setActiveIndex(getIndex(-1))}
            className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-all hover:scale-110"
            aria-label="Previous tool"
          >
            <ChevronUp size={28} />
          </button>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => setActiveIndex(getIndex(1))}
            className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-all hover:scale-110"
            aria-label="Next tool"
          >
            <ChevronDown size={28} />
          </button>
        </div>

        <div className="relative h-full w-full max-w-xl mx-auto flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {visibleTools.map(({ tool, rel, index }) => (
              <motion.div
                key={tool.name}
                initial={{ 
                  opacity: 0, 
                  y: rel * verticalOffset * 1.2, 
                  scale: 0.7, 
                  zIndex: 0,
                  filter: 'blur(4px)'
                }}
                animate={{ 
                  opacity: rel === 0 ? 1 : 0.5, 
                  y: rel * verticalOffset, 
                  scale: rel === 0 ? 1 : 0.8, 
                  zIndex: rel === 0 ? 20 : 10,
                  filter: rel === 0 ? 'blur(0px)' : 'blur(0.5px)',
                }}
                exit={{ 
                  opacity: 0, 
                  y: rel === 0 ? -verticalOffset : (rel < 0 ? -verticalOffset * 1.5 : 0), 
                  scale: 0.6, 
                  zIndex: 0,
                  filter: 'blur(8px)'
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 25, 
                  mass: 1,
                  filter: { duration: 0.3 }
                }}
                className={cn(
                  "absolute w-full p-6 md:p-8 rounded-3xl border-2 transition-colors duration-500 backdrop-blur-md overflow-hidden cursor-pointer",
                  rel === 0 
                    ? "border-primary bg-primary/10 shadow-2xl" 
                    : "border-white/20 bg-white/5 dark:bg-white/5 shadow-xl"
                )}
                onClick={() => rel !== 0 && setActiveIndex(index)}
              >
                <div className="flex items-center justify-between mb-2 md:mb-4">
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                    rel === 0 ? "text-primary bg-primary/20" : "text-text-body/60 bg-text-body/10"
                  )}>
                    {tool.category}
                  </span>
                  {rel === 0 && (
                    <div className="flex space-x-1">
                      {tools.map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeIndex ? 'bg-primary' : 'bg-primary/20'}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <h4 className={cn(
                  "font-bold mb-2 md:mb-3 transition-all duration-500",
                  rel === 0 ? "text-xl md:text-3xl text-primary" : "text-lg text-text-heading/60"
                )}>
                  {tool.name}
                </h4>
                {rel === 0 && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-text-body text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-none"
                  >
                    {tool.description}
                  </motion.p>
                )}
                
                {/* Progress bar for auto-cycle (only on active) */}
                {rel === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20 overflow-hidden">
                    <motion.div 
                      key={activeIndex}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full bg-primary"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side: Image Stack & Detail */}
      <div className={cn(
        "relative",
        isMobile ? "aspect-video" : "aspect-[4/3]"
      )}>
        <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={tools[activeIndex].name}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
                <img
                  src={tools[activeIndex].image}
                  alt={tools[activeIndex].alt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              <div className="absolute bottom-4 right-4 text-[8px] text-white/50 bg-black/10 px-1.5 py-0.5 rounded-full z-20">
                © Dr. Kaushal Pokhrel
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{tools[activeIndex].name}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {tools[activeIndex].description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 blur-3xl rounded-full -z-10" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -z-10" />
      </div>
    </div>
  );
};

export default SurgeryPage;
