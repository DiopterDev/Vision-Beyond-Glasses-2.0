import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, HelpCircle, ChevronRight, Search, FileText, ArrowRight, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { FAQItem } from '../components/FAQ';
import { surgeriesData } from '../constants/surgeriesData';

interface ResourceTopic {
  id: string;
  title: string;
  type: 'article' | 'faq';
  content?: string;
  faqs?: { q: string; a: string }[];
}

import SEO from '../components/SEO';

const ResourcesPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTopicId, setActiveTopicId] = useState('general-faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-primary/30 text-text-heading rounded-sm px-0.5">{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };
  
  // Aggregate FAQs from all surgeries
  const surgeryFaqs = Object.values(surgeriesData).flatMap(s => {
    const surgery = s[language as 'en' | 'np'];
    return surgery.faqs?.map(f => ({
      q: f.question,
      a: f.answer,
      surgeryTitle: surgery.title
    })) || [];
  });

  const topics: ResourceTopic[] = [
    {
      id: 'general-faq',
      title: language === 'en' ? 'General FAQs' : 'सामान्य प्रश्नहरू',
      type: 'faq',
      faqs: [
        { q: 'faq.q1.question', a: 'faq.q1.answer' },
        { q: 'faq.q2.question', a: 'faq.q2.answer' },
        { q: 'faq.q3.question', a: 'faq.q3.answer' },
        { q: 'faq.q4.question', a: 'faq.q4.answer' },
        { q: 'faq.q5.question', a: 'faq.q5.answer' },
        { q: 'faq.smile_safety.q', a: 'faq.smile_safety.a' },
        { q: 'faq.lasik_unsuitable.q', a: 'faq.lasik_unsuitable.a' },
        { q: 'faq.smile_replace_lasik.q', a: 'faq.smile_replace_lasik.a' },
        { q: 'faq.recovery_speed.q', a: 'faq.recovery_speed.a' },
        { q: 'faq.why_still_lasik.q', a: 'faq.why_still_lasik.a' },
      ]
    },
    {
      id: 'surgery-faqs',
      title: language === 'en' ? 'Surgery Specific FAQs' : 'शल्यक्रिया सम्बन्धी प्रश्नहरू',
      type: 'faq',
      faqs: surgeryFaqs.map(f => ({ q: f.q, a: f.a }))
    },
    {
      id: 'pre-op',
      title: language === 'en' ? 'Pre-Operative Care' : 'शल्यक्रिया अघिको हेरचाह',
      type: 'article',
      content: language === 'en' 
        ? "Before your surgery, it's essential to follow specific guidelines to ensure the best possible outcome. This includes avoiding contact lenses for a certain period, arranging for transportation on the day of surgery, and using prescribed eye drops. Our team will provide you with a detailed checklist during your consultation. Proper preparation is key to a smooth procedure and quick recovery."
        : "तपाईंको शल्यक्रिया अघि, उत्तम सम्भावित परिणाम सुनिश्चित गर्न विशेष दिशानिर्देशहरू पालना गर्नु आवश्यक छ। यसमा निश्चित अवधिका लागि कन्ट्याक्ट लेन्सहरू नलगाउने, शल्यक्रियाको दिन यातायातको व्यवस्था गर्ने, र तोकिएको आँखाको थोपा प्रयोग गर्ने समावेश छ। हाम्रो टोलीले तपाईंको परामर्शको क्रममा विस्तृत चेकलिस्ट प्रदान गर्नेछ। सुचारु प्रक्रिया र छिटो निको हुनको लागि उचित तयारी महत्वपूर्ण छ।"
    },
    {
      id: 'post-op',
      title: language === 'en' ? 'Post-Operative Recovery' : 'शल्यक्रिया पछिको निको हुने प्रक्रिया',
      type: 'article',
      content: language === 'en'
        ? "Recovery after laser eye surgery is typically fast, but following post-operative instructions is crucial. You may experience some mild discomfort or dryness in the first few days. It's important to avoid rubbing your eyes, wear protective eyewear as instructed, and attend all follow-up appointments. Most patients return to work and normal activities within a day or two, but full stabilization of vision can take a few weeks."
        : "लेजर आँखा शल्यक्रिया पछि निको हुने प्रक्रिया सामान्यतया छिटो हुन्छ, तर शल्यक्रिया पछिको निर्देशनहरू पालना गर्नु महत्त्वपूर्ण छ। तपाईंले पहिलो केही दिनहरूमा केही हल्का असुविधा वा सुख्खापन अनुभव गर्न सक्नुहुन्छ। आफ्नो आँखा माड्नबाट बच्न, निर्देशन अनुसार सुरक्षात्मक चश्मा लगाउन र सबै फलो-अप भेटघाटहरूमा उपस्थित हुनु महत्त्वपूर्ण छ। धेरैजसो बिरामीहरू एक वा दुई दिन भित्र काम र सामान्य गतिविधिहरूमा फर्कन्छन्, तर दृष्टिको पूर्ण स्थिरता हुन केही हप्ता लाग्न सक्छ।"
    },
    {
      id: 'technology',
      title: language === 'en' ? 'Our Technology' : 'हाम्रो प्रविधि',
      type: 'faq',
      faqs: language === 'en' ? [
        { q: 'What is the Visumax 800?', a: 'The VISUMAX® 800 from ZEISS represents the latest generation of femtosecond lasers. It is specifically designed for SMILE® pro, offering faster treatment times (less than 10 seconds for lenticule creation) and advanced features like CentraLign® and OcuLign® for improved precision.' },
        { q: 'What is the MEL 90?', a: 'The MEL® 90 is a high-performance excimer laser from ZEISS used for LASIK, PRK, and other surface treatments. It features a fast 500 Hz repetition rate and the Triple-A ablation profile, which ensures excellent predictability and tissue-saving treatments.' },
        { q: 'What is the MS-39?', a: 'The MS-39 is an advanced diagnostic tool that combines AS-OCT (Anterior Segment Optical Coherence Tomography) with Placido corneal topography. It provides extremely high-resolution cross-sectional images and detailed maps of the cornea, essential for surgical planning.' },
        { q: 'What is the Pentacam?', a: 'The Pentacam® is a rotating Scheimpflug camera system that captures 3D images of the anterior segment of the eye. It provides comprehensive data on corneal shape, thickness, and the anterior chamber, helping surgeons identify candidates for laser vision correction.' },
        { q: 'What is the Atlas System?', a: 'The ZEISS ATLAS® 9000 is a corneal topography system that uses Placido disk technology to map the curvature of the cornea. It is highly accurate and helps in detecting corneal irregularities and planning customized treatments.' },
        { q: 'What is an LVC Nomogram?', a: 'An LVC (Laser Vision Correction) nomogram is a specialized calculation tool or data set used by surgeons to adjust laser settings based on previous surgical outcomes. It helps account for individual healing patterns and environmental factors to achieve the most accurate visual results.' },
        { q: 'What makes our operating room special?', a: 'Our operating room is a state-of-the-art facility designed specifically for refractive surgery. It features advanced climate control (temperature and humidity), HEPA air filtration systems to maintain a sterile environment, and is equipped with the latest ZEISS technology to ensure maximum safety and precision.' }
      ] : [
        { q: 'Visumax 800 के हो?', a: 'ZEISS को VISUMAX® 800 फेम्टोसेकेन्ड लेजरको पछिल्लो पुस्ता हो। यो विशेष गरी SMILE® pro को लागि डिजाइन गरिएको हो, जसले छिटो उपचार समय (लेन्टिकल निर्माणको लागि १० सेकेन्ड भन्दा कम) र राम्रो शुद्धताको लागि CentraLign® र OcuLign® जस्ता उन्नत सुविधाहरू प्रदान गर्दछ।' },
        { q: 'MEL 90 के हो?', a: 'MEL® 90 ZEISS बाट एक उच्च-प्रदर्शन एक्साइमर लेजर हो जुन LASIK, PRK र अन्य सतह उपचारका लागि प्रयोग गरिन्छ। यसमा ५०० हर्ट्जको छिटो पुनरावृत्ति दर र ट्रिपल-ए एब्लेसन प्रोफाइल छ, जसले उत्कृष्ट भविष्यवाणी र तन्तु-बचत उपचार सुनिश्चित गर्दछ।' },
        { q: 'MS-39 के हो?', a: 'MS-39 एक उन्नत निदान उपकरण हो जसले AS-OCT (Anterior Segment Optical Coherence Tomography) लाई प्लेसिडो कोर्नियल टोपोग्राफीसँग जोड्दछ। यसले उच्च-रिजोल्युसन क्रस-सेक्शनल छविहरू र कोर्नियाको विस्तृत नक्साहरू प्रदान गर्दछ, जुन शल्यक्रिया योजनाको लागि आवश्यक छ।' },
        { q: 'Pentacam के हो?', a: 'Pentacam® एक घुम्ने Scheimpflug क्यामेरा प्रणाली हो जसले आँखाको अघिल्लो भागको 3D छविहरू खिच्दछ। यसले कोर्नियल आकार, मोटाई र अघिल्लो च्याम्बरमा व्यापक डाटा प्रदान गर्दछ, जसले सर्जनहरूलाई लेजर दृष्टि सुधारका लागि उम्मेदवारहरू पहिचान गर्न मद्दत गर्दछ।' },
        { q: 'Atlas System के हो?', a: 'ZEISS ATLAS® 9000 एक कोर्नियल टोपोग्राफी प्रणाली हो जसले कोर्नियाको वक्रता नक्सा गर्न प्लेसिडो डिस्क प्रविधि प्रयोग गर्दछ। यो धेरै सही छ र कोर्नियल अनियमितताहरू पत्ता लगाउन र अनुकूलित उपचार योजना बनाउन मद्दत गर्दछ।' },
        { q: 'LVC Nomogram के हो?', a: 'LVC (Laser Vision Correction) नोग्राम एक विशेष गणना उपकरण वा डाटा सेट हो जुन शल्य चिकित्सकहरूले अघिल्लो शल्यक्रिया परिणामहरूको आधारमा लेजर सेटिङहरू समायोजन गर्न प्रयोग गर्छन्। यसले सबैभन्दा सही दृश्य परिणामहरू प्राप्त गर्न व्यक्तिगत निको हुने ढाँचा र वातावरणीय कारकहरूलाई ध्यानमा राख्न मद्दत गर्दछ।' },
        { q: 'हाम्रो अपरेटिङ रूमलाई के विशेष बनाउँछ?', a: 'हाम्रो अपरेटिङ रूम विशेष गरी अपवर्तक शल्यक्रियाका लागि डिजाइन गरिएको अत्याधुनिक सुविधा हो। यसमा उन्नत जलवायु नियन्त्रण (तापमान र आर्द्रता), बाँझ वातावरण कायम राख्न HEPA एयर फिल्टरेशन प्रणालीहरू छन्, र अधिकतम सुरक्षा र शुद्धता सुनिश्चित गर्न नवीनतम ZEISS प्रविधिले सुसज्जित छ।' }
      ]
    }
  ];

  const filteredTopics = topics.filter(topic => {
    const searchLower = searchQuery.toLowerCase();
    const titleMatch = topic.title.toLowerCase().includes(searchLower);
    if (titleMatch) return true;

    if (topic.type === 'article' && topic.content) {
      return topic.content.toLowerCase().includes(searchLower);
    }

    if (topic.type === 'faq' && topic.faqs) {
      return topic.faqs.some(faq => {
        const q = faq.q.includes('.') ? t(faq.q) : faq.q;
        const a = faq.a.includes('.') ? t(faq.a) : faq.a;
        return q.toLowerCase().includes(searchLower) || a.toLowerCase().includes(searchLower);
      });
    }

    return false;
  });

  // Auto-select first matching topic if current one is filtered out
  React.useEffect(() => {
    if (searchQuery.trim() && !filteredTopics.some(t => t.id === activeTopicId)) {
      if (filteredTopics.length > 0) {
        setActiveTopicId(filteredTopics[0].id);
      }
    }
  }, [searchQuery, filteredTopics, activeTopicId]);

  const activeTopic = topics.find(t => t.id === activeTopicId) || topics[0];

  const filteredFaqs = activeTopic.faqs?.filter(faq => {
    if (!searchQuery.trim()) return true;
    const q = faq.q.includes('.') ? t(faq.q) : faq.q;
    const a = faq.a.includes('.') ? t(faq.a) : faq.a;
    return q.toLowerCase().includes(searchQuery.toLowerCase()) || a.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <SEO 
        title={language === 'en' ? 'Eye Surgery FAQs & Resources | Dr. Kaushal Pokhrel' : 'आँखा शल्यक्रिया प्रश्नहरू र स्रोतहरू | डा. कौशल पोखरेल'}
        description={language === 'en' ? 'Expert answers to common questions about SMILE Pro, LASIK, ICL, and refractive surgery in Nepal. Clinical insights by Dr. Kaushal Pokhrel.' : 'SMILE Pro, LASIK, ICL, र नेपालमा अपवर्तक शल्यक्रियाको बारेमा सामान्य प्रश्नहरूको विशेषज्ञ जवाफ। डा. कौशल पोखरेलद्वारा क्लिनिकल अन्तर्दृष्टि।'}
        schemas={[{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": topics.filter(t => t.type === 'faq').flatMap(t => t.faqs || []).map(faq => ({
            "@type": "Question",
            "name": faq.q.includes('.') ? t(faq.q) : faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a.includes('.') ? t(faq.a) : faq.a
            }
          }))
        }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Topics List */}
          <aside className="w-full lg:w-1/3">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-tagline" size={18} />
                <input
                  type="text"
                  placeholder={language === 'en' ? "Search FAQs & resources..." : "प्रश्न र स्रोतहरू खोज्नुहोस्..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-surface border border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-tagline hover:text-primary transition-colors"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              {searchQuery && (
                <div className="px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-xs text-tagline">
                    {language === 'en' 
                      ? `Found ${filteredTopics.length} topics matching "${searchQuery}"`
                      : `"${searchQuery}" सँग मिल्ने ${filteredTopics.length} विषयहरू फेला पर्यो`}
                  </p>
                </div>
              )}

              <div className="card-modern overflow-hidden flex flex-col lg:max-h-[calc(100vh-320px)]">
                <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-surface/50 flex justify-between items-center">
                  <h2 className="font-bold text-text-heading flex items-center gap-2">
                    <BookOpen size={18} className="text-primary" />
                    {language === 'en' ? 'Topics' : 'विषयहरू'}
                  </h2>
                  <span className="lg:hidden text-xs text-tagline">
                    {filteredTopics.length} {language === 'en' ? 'Available' : 'उपलब्ध'}
                  </span>
                </div>
                
                {/* Custom Scrollbar Container */}
                <div className="overflow-y-auto lg:flex-1 custom-scrollbar p-2 space-y-1 max-h-[250px] lg:max-h-none">
                  {filteredTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setActiveTopicId(topic.id);
                        setOpenFaqIndex(0);
                        // Scroll to content on mobile
                        if (window.innerWidth < 1024) {
                          const contentElement = document.getElementById('resource-content');
                          if (contentElement) {
                            const y = contentElement.getBoundingClientRect().top + window.pageYOffset - 100;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                          }
                        }
                      }}
                      className={cn(
                        "w-full flex items-center justify-between p-3 rounded-lg text-left transition-all group",
                        activeTopicId === topic.id 
                          ? "bg-primary text-white shadow-md" 
                          : "hover:bg-primary/10 text-text-body hover:text-primary"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {topic.type === 'article' ? <FileText size={16} /> : <HelpCircle size={16} />}
                        <span className="font-medium text-sm truncate">
                          {highlightText(topic.title, searchQuery)}
                        </span>
                      </div>
                      <ChevronRight size={16} className={cn(
                        "transition-transform",
                        activeTopicId === topic.id ? "rotate-90" : "group-hover:translate-x-1"
                      )} />
                    </button>
                  ))}
                  {filteredTopics.length === 0 && (
                    <div className="p-8 text-center space-y-4">
                      <p className="text-tagline text-sm italic">
                        {language === 'en' ? 'No topics found' : 'कुनै विषय फेला परेन'}
                      </p>
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="text-xs text-primary font-bold hover:underline"
                      >
                        {language === 'en' ? 'Clear search' : 'खोज हटाउनुहोस्'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="w-full lg:w-2/3" id="resource-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTopicId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <div className="card-modern p-6 md:p-10 min-h-[500px] flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      {activeTopic.type === 'article' ? <FileText size={24} /> : <HelpCircle size={24} />}
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-text-heading">
                      {highlightText(activeTopic.title, searchQuery)}
                    </h1>
                  </div>

                  <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    {activeTopic.type === 'article' ? (
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-text-body leading-relaxed text-lg">
                          {highlightText(activeTopic.content || '', searchQuery)}
                        </p>
                        {/* Placeholder for longer content to demonstrate scrollbar */}
                        <div className="mt-8 p-6 bg-surface/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                          <p className="text-tagline italic text-sm">
                            {language === 'en' 
                              ? "This is a detailed resource article. More content will be added here to provide comprehensive information about this topic."
                              : "यो एक विस्तृत स्रोत लेख हो। यस विषयको बारेमा व्यापक जानकारी प्रदान गर्न यहाँ थप सामग्री थपिनेछ।"}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-200 dark:divide-gray-800">
                        {filteredFaqs && filteredFaqs.length > 0 ? (
                          filteredFaqs.map((faq, index) => {
                            const qText = faq.q.includes('.') ? t(faq.q) : faq.q;
                            const aText = faq.a.includes('.') ? t(faq.a) : faq.a;
                            return (
                              <FAQItem
                                key={index}
                                question={highlightText(qText, searchQuery)}
                                answer={highlightText(aText, searchQuery)}
                                isOpen={openFaqIndex === index}
                                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                              />
                            );
                          })
                        ) : (
                          <div className="py-12 text-center space-y-4">
                            <p className="text-tagline italic">
                              {language === 'en' 
                                ? "No matching FAQs found in this topic." 
                                : "यस विषयमा कुनै मिल्दो प्रश्नहरू फेला परेनन्।"}
                            </p>
                            <button 
                              onClick={() => setSearchQuery('')}
                              className="text-sm text-primary font-bold hover:underline"
                            >
                              {language === 'en' ? 'Clear search' : 'खोज हटाउनुहोस्'}
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-10 border-t border-gray-200 dark:border-gray-800">
                    <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
                      <div className="p-2 bg-primary text-white rounded-lg shrink-0">
                        <HelpCircle size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-heading mb-1">
                          {language === 'en' ? 'Clinical Accuracy Verified' : 'क्लिनिकल शुद्धता प्रमाणित'}
                        </h4>
                        <p className="text-sm text-text-body leading-relaxed">
                          {language === 'en' 
                            ? 'All medical information and FAQ answers are reviewed and verified by Dr. Kaushal Pokhrel, ensuring the highest standards of clinical accuracy and patient safety.'
                            : 'सबै चिकित्सा जानकारी र प्रश्नका जवाफहरू डा. कौशल पोखरेलद्वारा समीक्षा र प्रमाणित गरिएका छन्, जसले क्लिनिकल शुद्धता र बिरामी सुरक्षाको उच्चतम मापदण्ड सुनिश्चित गर्दछ।'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.03);
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(var(--color-primary-rgb), 0.2);
          border-radius: 10px;
          transition: background 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--color-primary-rgb), 0.4);
        }
      `}} />
    </div>
  );
};

export default ResourcesPage;
