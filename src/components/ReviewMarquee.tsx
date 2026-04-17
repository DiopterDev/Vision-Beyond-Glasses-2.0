import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MapPin, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, CheckCircle2, X, Hand, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

interface Review {
  name: string;
  text: { en: string; np: string };
  fullText: { en: string; np: string };
  tag: { en: string; np: string };
}

const reviews: Review[] = [
  {
    name: "S. BudaChhetri",
    text: {
      en: "A truly life-changing experience with a welcoming clinic atmosphere.",
      np: "साँचिकै जीवन परिवर्तन गर्ने अनुभव! क्लिनिकको वातावरण पनि स्वागतमय छ।"
    },
    fullText: {
      en: "A truly life-changing experience. Even during my post-checkup period, I'm very happy with the results. The doctor was patient, supportive, and professional throughout. The clinic has a clean and homely atmosphere that makes patients feel comfortable. After my treatment, my vision and confidence improved so much that it felt like I received a new life. Heartfelt thanks to Dr. Kaushal Pokhrel and his amazing team.",
      np: "साँचिकै जीवन परिवर्तन गर्ने खालको अनुभव भयो। मेरो नतिजाबाट पनि म धेरै खुशी छु। डाक्टर धैर्यशील, सहयोगी, र योग्य थिए। क्लिनिक सरसफाईले र घरजस्तो वातावरणले बिरामीलाई सहज महसुस गराएको जस्तो लाग्छ। मेरो उपचारपछि, मेरो दृष्टि र आत्मविश्वास यति सुधार भयो कि मैले नयाँ जीवन पाएको जस्तो लागि रहेको छ। डा. कौशल पोखरेल र उहाँको शानदार टोलीलाई हृदयदेखि धन्यवाद।"
    },
    tag: { en: "Life-changing", np: "जीवन परिवर्तन गर्ने खालको" }
  },
  {
    name: "K. Rai",
    text: {
      en: "Highly satisfied with the detailed SMILE Pro counselling and education.",
      np: "SMILE PRO को बारेमा उहाँले गर्नु भएको परामर्शबाट म धेरै सन्तुष्ट छु।"
    },
    fullText: {
      en: "Did SMILE Pro recently and very satisfied with his counselling & treatment plan. The way he explains every detail to his patients, making them comfortable, is truly commendable. Especially, the patients' education about the comparison in both PRK, LASIK & SMILE Pro was very knowledgeable. I would like to express my sincere appreciation to Dr. Kaushal for his thoughtful counselling.",
      np: "भर्खरै SMILE PRO गरेँ र उहाँको परामर्श र उपचार योजनाबाट धेरै सन्तुष्ट छु। उहाँको आफ्ना बिरामीहरूलाई हरेक विवरण बुझाउने र सहज बनाउने तरिका साँच्चै नै प्रशंसनीय छ। विशेष गरी PRK, LASIK र SMILE PRO बीचको तुलनाको शिक्षा धेरै ज्ञानवर्धक थियो। डा. कौशललाई उहाँको विस्तृत परामर्शको लागि म मनैबाट प्रशंसा गर्न चाहन्छु।"
    },
    tag: { en: "Counselling", np: "परामर्श" }
  },
  {
    name: "Adhikari A.",
    text: {
      en: "SMILE Pro surgery the very next day — everything moved super fast with zero wait.",
      np: "भोलिपल्ट नै SMILE PRO लेजर शल्यक्रिया — सबै कुरा धेरै छिटो भयो, कुनै पर्खाइ भएन।"
    },
    fullText: {
      en: "Amazing experience from start to finish. I was able to schedule my check-up and get my SMILE Pro LASER eye surgery the very next day. Everything moved super fast and I never had to wait long for anything. The clinic was very clean and the staff were friendly and professional. My vision improved drastically right after the surgery.",
      np: "मलाई सुरुदेखि नै अन्त्यसम्म अचम्मको अनुभव भयो; मैले जाँचको समय मिलाउन र भोलिपल्ट नै SMILE PRO लेजर शल्यक्रिया गराउन पाएँ। सबै कुरा एति छिटो भयो कि कुनै पनि कुरामा लामो समय पर्खनु परेन। अस्पताल पनि धेरै सफा रहेछ र कर्मचारीहरू पनि मिलनसार र व्यावसायिक। शल्यक्रिया पछि तुरुन्तै दृष्टि अच्चम्म रूपमा सुधार भयो।"
    },
    tag: { en: "Speed", np: "गति" }
  },
  {
    name: "R. Cresta",
    text: {
      en: "Dr. Kaushal explained the surgery step-by-step, making the experience very comfortable.",
      np: "शल्यक्रियाको समयमा डा. कौशलले के भइरहेको छ भनेर चरणबद्ध रूपमा बुझाइरहनुभयो।"
    },
    fullText: {
      en: "Overall, it was a very good experience and honestly a great decision for me. From counselling to surgery, everything went smoothly. During the operation, Dr. Kaushal Pokhrel was extremely calm and reassuring — he kept explaining what was happening step by step, which made me feel very comfortable. It has been one week since my SMILE surgery, and everything is going well.",
      np: "समग्रमा, यो धेरै राम्रो अनुभव र मेरो लागि एक उत्कृष्ट निर्णय थियो। परामर्शदेखि शल्यक्रियासम्म सबै कुरा सहज रूपमा भयो। शल्यक्रियाको समयमा डा. कौशल अत्यन्त शान्त र विश्वास दिलाउने खालको हुनुहुन्थ्यो — उहाँले के भइरहेको छ भनेर चरणबद्ध रूपमा बुझाइरहनुभयो, जसले मलाई धेरै डरको महसुस हुन पाएन। SMILE शल्यक्रिया भएको एक हप्ता भयो, र सबै कुरा राम्रो भइरहेको छ।"
    },
    tag: { en: "Compassion", np: "सहानुभूतिशील" }
  },
  {
    name: "B. Timilsina",
    text: {
      en: "The whole team was incredibly kind and supportive throughout the process.",
      np: "डा. कौशल र पूरा टोली अविश्वसनीय रूपमा दयालु, सहयोगी र व्यावसायिक हुनुहुन्थ्यो।"
    },
    fullText: {
      en: "I had my eye laser surgery done by Dr. Kaushal Pokhrel, and I am extremely happy. The doctor and the whole team were incredibly kind, supportive, and professional throughout. From beginning to end, everything was well explained, and I felt comfortable and cared for at every step. I am truly grateful that I chose this place for my treatment.",
      np: "डा. कौशल पोखरेलले मेरो आँखामा लेजर शल्यक्रिया गर्नुभयो, र म समग्र अनुभवबाट अत्यन्त खुसी छु। डाक्टर र पूरा टोली प्रक्रियाभर अविश्वसनीय रूपमा दयालु, सहयोगी, र व्यावसायिक हुनुहुन्थ्यो। सुरुदेखि अन्त्यसम्म सबै कुरा राम्ररी बुझाइदिनु भयो, र हरेक चरणमा सहज र हेरचाह गरेको महसुस गराउनु भयो।"
    },
    tag: { en: "Supportive", np: "सहयोगी" }
  },
  {
    name: "A. Neupane",
    text: {
      en: "One of the best decisions I've ever made. The surgery was quick and painless.",
      np: "यो मैले गरेको सबैभन्दा राम्रो निर्णयहरूमध्ये एक हो; शल्यक्रिया छिटो र दुखाइरहित थियो।"
    },
    fullText: {
      en: "I had my LASIK/SMILE eye surgery done at Tilganga Hospital with Dr. Kaushal Pokhrel and it was one of the best decisions I've ever made. From the first consultation to post-surgery follow-ups, everything was handled professionally and with great care. The surgery itself was quick and painless, and my vision improved within a very short time.",
      np: "तिलगंगा अस्पतालमा डा. कौशल पोखरेलसँग LASIK/SMILE आँखा शल्यक्रिया गराएँ र यो मैले गरेको सबैभन्दा राम्रो निर्णयहरूमध्ये एक हो। पहिलो परामर्शदेखि शल्यक्रिया पछिको फलोअपसम्म, सबै कुरा व्यावसायिक रूपमा सम्हालेको महसुस भयो। शल्यक्रिया पनि छिटो र दुखाइरहित थियो।"
    },
    tag: { en: "Professional", np: "व्यावसायिक" }
  },
  {
    name: "R. Pokhrel",
    text: {
      en: "He spent nearly an hour ensuring I was fully informed and comfortable.",
      np: "उहाँले मलाई पूर्ण रूपमा जानकारी दिन र सहज बनाउन लगभग एक घण्टा बिताउनुभयो।"
    },
    fullText: {
      en: "I've never met a doctor who takes so much time to genuinely console and educate their patients. He spent nearly an hour ensuring I was fully informed and comfortable with my decision. Dr. Kaushal explained every type of refractive surgery with absolute clarity — breaking down the pros, cons, and procedure in simple terms. Truly premium-level treatment in Nepal.",
      np: "मैले यति धेरै समय दिएर साँच्चै बिरामीहरूलाई सान्त्वना दिने र शिक्षित गर्ने डाक्टर कहिल्यै भेटेको छैन। उहाँले म पूर्ण रूपमा जानकार र निर्णयमा सहज छु भनी सुनिश्चित गर्न लगभग एक घण्टा बिताउनुभयो। डा. कौशलले हरेक प्रकारको लेजर शल्यक्रिया पूर्ण स्पष्टताका साथ बुझाउनुभयो — फाइदा, बेफाइदा, र प्रक्रिया सरल शब्दहरूमा।"
    },
    tag: { en: "Detailed", np: "विस्तृत" }
  },
  {
    name: "S. Malla",
    text: {
      en: "Counselling by Dr. Kaushal was so detailed; vision was clear within 3 days.",
      np: "डा. कौशल पोखरेलको परामर्श अत्यन्त विस्तृत थियो; अपरेसनको ३ दिनमै दृष्टि स्पष्ट भयो।"
    },
    fullText: {
      en: "My overall experience at RSU Tilganga is pretty good. From the reception up to the OT, I got a very nice treatment. The counselling session both before and after surgery by Dr. Kaushal Pokhrel was so detailed; everything from risks, complications, and precautions were well explained. My vision was much better within 3 days post-op and the vision is so clear.",
      np: "तिलगंगाको लेजर शल्यक्रिया विभागमा मेरो समग्र अनुभव धेरै राम्रो रह्यो। स्वागत-कक्षदेखि शल्यक्रिया कक्षसम्म सबैले धेरै राम्रो व्यवहार गर्नु भयो। शल्यक्रिया अघि र पछि दुवैमा डा. कौशल पोखरेलको परामर्श यति विस्तृत थियो; जोखिम, जटिलता, र सावधानीहरू सबै राम्ररी बुझाइदिनु भयो। अपरेसनको जम्मा ३ दिन भयो, तर मेरो दृष्टि अहिले नै एकदम सफा भैसक्यो।"
    },
    tag: { en: "Result", np: "नतिजा" }
  }
];

const ReviewCard: React.FC<{ 
  review: Review; 
  isExpanded: boolean; 
  onToggle: () => void;
  onClose: () => void;
  showFull?: boolean;
}> = ({ review, isExpanded, onToggle, onClose, showFull = false }) => {
  const { language } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  const isDisplayingFull = isExpanded || showFull;

  return (
    <motion.div 
      ref={cardRef}
      layout
      initial={false}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onToggle();
        }
      }}
      aria-expanded={isExpanded}
      aria-label={`Review from ${review.name}. ${isExpanded ? "Click to read less" : "Click to read more"}`}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "card-modern p-6 mx-4 flex flex-col space-y-4 shadow-2xl transition-all duration-500 cursor-pointer",
        isExpanded 
          ? "min-w-[350px] md:min-w-[450px] max-w-[500px] z-50 scale-105 border-primary/30 ring-1 ring-primary/20" 
          : showFull 
            ? "min-w-full z-0 opacity-100"
            : "min-w-[300px] max-w-[300px] z-0 opacity-90 hover:opacity-100"
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest bg-primary text-white px-3 py-1 rounded-full shadow-sm">
          {review.tag[language]}
        </span>
      </div>
      
      <div className="flex-grow">
        <p className={cn(
          "text-sm text-text-body leading-relaxed italic whitespace-normal transition-all duration-300",
          isDisplayingFull ? "line-clamp-none" : "line-clamp-3"
        )}>
          "{isDisplayingFull ? review.fullText[language] : review.text[language]}"
        </p>
        
        {isDisplayingFull && (
          <a 
            href="https://maps.app.goo.gl/SmSt7R2rEDUUNvqU7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center space-x-1.5 text-emerald-600 dark:text-emerald-400 hover:opacity-80 transition-opacity w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle2 size={12} className="flex-shrink-0" />
            <span className="text-[10px] font-bold uppercase tracking-wider underline underline-offset-2">
              {language === 'en' ? "Verified Patient" : "प्रमाणित बिरामी"}
            </span>
          </a>
        )}
        
        {!showFull && (
          <div 
            className="mt-3 flex items-center space-x-1 text-xs font-bold text-primary hover:text-medical-blue transition-colors group/btn"
            aria-hidden="true"
          >
            <span>{isExpanded ? (language === 'en' ? "Read Less" : "थोरै पढ्नुहोस्") : (language === 'en' ? "Click to Read More" : "थप पढ्न क्लिक गर्नुहोस्")}</span>
            {isExpanded ? (
              <ChevronUp size={14} className="transition-transform group-hover/btn:-translate-y-0.5" />
            ) : (
              <ChevronDown size={14} className="transition-transform group-hover/btn:translate-y-0.5" />
            )}
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
        <span className="text-xs font-bold text-text-heading">{review.name}</span>
      </div>
    </motion.div>
  );
};

const ReviewMarquee: React.FC = () => {
  const { t, language } = useLanguage();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'marquee' | 'carousel'>('marquee');
  const marqueeRef = useRef<HTMLDivElement>(null);
  const scrollInfo = useRef({ maxScroll: 0 });
  
  // Duplicate reviews to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    const scrollSpeed = 0.5; // pixels per frame at 60fps

    const updateMetrics = () => {
      if (marqueeRef.current) {
        scrollInfo.current.maxScroll = marqueeRef.current.scrollWidth / 3;
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);

    const scroll = (time: number) => {
      if (marqueeRef.current) {
        if (lastTime !== 0) {
          const deltaTime = time - lastTime;
          const move = (scrollSpeed * deltaTime) / 16.67; // normalize to 60fps
          marqueeRef.current.scrollLeft += move;

          // Infinite loop logic
          const maxScroll = scrollInfo.current.maxScroll;
          if (maxScroll > 0 && marqueeRef.current.scrollLeft >= maxScroll * 2) {
            marqueeRef.current.scrollLeft -= maxScroll;
          }
        }
        lastTime = time;
      } else {
        lastTime = 0;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateMetrics);
    };
  }, []);

  const nextReview = () => {
    setCarouselIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCarouselIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const openCarousel = (index: number) => {
    setCarouselIndex(index % reviews.length);
    setViewMode('carousel');
  };

  const closeCarousel = () => {
    setViewMode('marquee');
  };

  return (
    <section id="reviews" className="py-16 overflow-hidden bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
            {t('reviews.title')}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a 
              href="https://maps.app.goo.gl/HKaonPUrv5rNtqGM6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-lg text-text-body max-w-2xl mx-auto hover:text-primary transition-colors group"
            >
              <MapPin size={18} className="group-hover:animate-bounce text-primary" />
              <span className="font-medium">{t('reviews.source')}</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex overflow-x-hidden group">
            {/* Edge Fade Shadows */}
            <div className="absolute inset-y-0 left-0 w-8 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div
              ref={marqueeRef}
              className="flex whitespace-nowrap py-12 px-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
            >
              {duplicatedReviews.map((review, index) => (
                <ReviewCard 
                  key={index} 
                  review={review} 
                  isExpanded={false}
                  onToggle={() => openCarousel(index)}
                  onClose={() => {}}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Modal Overlay */}
        <AnimatePresence>
          {viewMode === 'carousel' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeCarousel}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            >
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-background/40 backdrop-blur-md"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-4xl z-10"
              >
                <div className="flex items-center justify-center min-h-[400px] relative">
                  <div className="w-full flex justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={carouselIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-lg"
                      >
                        <ReviewCard 
                          review={reviews[carouselIndex]} 
                          isExpanded={true}
                          onToggle={closeCarousel}
                          onClose={closeCarousel}
                          showFull={true}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Navigation and Pagination */}
                <div className="flex items-center justify-center space-x-6 mt-8 relative z-10" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevReview(); }}
                    className="p-2 rounded-full bg-surface border border-gray-200 dark:border-gray-800 text-text-heading hover:text-primary hover:border-primary transition-all shadow-md"
                    aria-label="Previous review"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex space-x-2">
                    {reviews.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCarouselIndex(idx)}
                        className={cn(
                          "w-2.5 h-2.5 rounded-full transition-all duration-300",
                          carouselIndex === idx ? "bg-primary w-8" : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
                        )}
                        aria-label={`Go to review ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={(e) => { e.stopPropagation(); nextReview(); }}
                    className="p-2 rounded-full bg-surface border border-gray-200 dark:border-gray-800 text-text-heading hover:text-primary hover:border-primary transition-all shadow-md"
                    aria-label="Next review"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeCarousel}
                  className="absolute -top-12 right-0 md:-right-12 text-tagline hover:text-primary transition-colors p-2"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ReviewMarquee;
