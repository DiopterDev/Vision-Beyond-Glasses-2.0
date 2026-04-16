import React, { useEffect, useState, useRef } from 'react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence, useAnimate } from 'motion/react';
import { Heart, Users, BookOpen, Award, Droplets, Scissors, Globe, Quote, Mountain, Trees, Compass, MapPin, MessageSquare, Activity, Stethoscope, Eye, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('nepal');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'nepal', icon: <Mountain size={20} />, label: t('about.travel.cat.trekking') },
    { id: 'nature', icon: <Trees size={20} />, label: t('about.travel.cat.nature') },
    { id: 'adventure', icon: <Compass size={20} />, label: t('about.travel.cat.adventure') },
    { id: 'cities', icon: <MapPin size={20} />, label: t('about.travel.cat.cities') },
    { id: 'stories', icon: <MessageSquare size={20} />, label: t('about.travel.cat.stories') },
  ];

  const categoryImages: Record<string, { url: string; alt: string }[]> = {
    nepal: [
      { url: "https://i.ibb.co/xSndR16P/Nepal-Bhaktapur.webp", alt: "Bhaktapur Durbar Square, a UNESCO World Heritage site in Nepal" },
      { url: "https://i.ibb.co/qYbH2m1b/Nepal-Boudha-Stupa.webp", alt: "Boudhanath Stupa, one of the largest spherical stupas in Nepal" },
      { url: "https://i.ibb.co/PGSgf8dv/Nepal-Temple.webp", alt: "Ancient Hindu temple architecture in Nepal" },
      { url: "https://i.ibb.co/60fcYyDk/Nepal-Village-Home.webp", alt: "Traditional stone-roofed village home in rural Nepal" }
    ],
    nature: [
      { url: "https://i.ibb.co/gMy1B6ft/Nature-Everest.webp", alt: "The majestic peak of Mount Everest against a clear blue sky" },
      { url: "https://i.ibb.co/m5ryPXNd/Nature-Fall.webp", alt: "Vibrant autumn colors in a dense forest landscape" },
      { url: "https://i.ibb.co/yBWN8T46/Nature-Ocean.webp", alt: "Deep blue ocean waves crashing against the shore" },
      { url: "https://i.ibb.co/99rhCfmg/Nature-Sunset.webp", alt: "Stunning golden sunset over a mountain range" }
    ],
    adventure: [
      { url: "https://i.ibb.co/wFrqvkwc/Adventure-Annapurna.webp", alt: "Trekking trail leading to the Annapurna Base Camp" },
      { url: "https://i.ibb.co/1tgfkxGx/Adventure-Machhapuchhre.webp", alt: "The iconic fishtail peak of Machhapuchhre mountain" },
      { url: "https://i.ibb.co/PzNJtDYh/Adventure-Scuba.webp", alt: "Underwater scuba diving exploration in clear waters" },
      { url: "https://i.ibb.co/VWXq7Ddp/Adventure-Trekking.webp", alt: "High-altitude trekking adventure in the Himalayas" }
    ],
    cities: [
      { url: "https://i.ibb.co/N2y1jHwR/City-Ghandruk.webp", alt: "Ghandruk village, a popular tourist destination in Nepal" },
      { url: "https://i.ibb.co/xSdD4qFm/City-Taipei-101.webp", alt: "The Taipei 101 skyscraper in Taiwan" },
      { url: "https://i.ibb.co/cKNDTpJ1/City-Toronto.webp", alt: "The Toronto city skyline featuring the CN Tower" },
      { url: "https://i.ibb.co/mg3Xypb/City-Tower-Bridge.webp", alt: "The historic Tower Bridge in London, UK" }
    ],
    stories: [
      { url: "https://i.ibb.co/B5Z7j62P/Stories-Laughter.webp", alt: "Dr. Kaushal Pokhrel sharing a joyful moment with a patient" },
      { url: "https://i.ibb.co/BHn4kgGf/Stories-Old-man.webp", alt: "Dr. Kaushal Pokhrel providing eye care to an elderly patient" },
      { url: "https://i.ibb.co/mCsxqjcw/Stories-post-surgery-woman.webp", alt: "A happy patient after a successful eye surgery" },
      { url: "https://i.ibb.co/8Lb3DfPS/Stories-Post-Surgery.webp", alt: "Restoring vision through advanced ophthalmic procedures" }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => {
        const currentIndex = categories.findIndex(c => c.id === prev);
        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const humanitarianItems = [
    {
      icon: <Heart className="text-primary" size={24} />,
      title: "Visual Freedom Foundation (VFF)",
      desc: t('about.humanitarian.vff')
    },
    {
      icon: <Award className="text-primary" size={24} />,
      title: "Nepal Ophthalmic Society",
      desc: t('about.humanitarian.nos')
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Lions Club of Kathmandu",
      desc: t('about.humanitarian.lions')
    }
  ];

  const interviews = [
    {
      title: "Swatha Jeevan in Nepal Television",
      url: "https://www.youtube.com/embed/VNBEZUXwQU0?start=524"
    },
    {
      title: "Swastha Samaj in Nepal Television",
      url: "https://www.youtube.com/embed/kAn2i9J7LnE"
    },
    {
      title: "Healthy Hour in Nepal Television",
      url: "https://www.youtube.com/embed/4jhBMxADcaw"
    }
  ];

  const valueItems = [
    {
      icon: <Scissors className="text-amber-500" size={32} />,
      title: t('about.giving.item1')
    },
    {
      icon: <Droplets className="text-red-500" size={32} />,
      title: t('about.giving.item2')
    },
    {
      icon: <Activity className="text-blue-500" size={32} />,
      title: t('about.giving.item3')
    },
    {
      icon: <Stethoscope className="text-green-500" size={32} />,
      title: t('about.giving.item4')
    },
    {
      icon: <Eye className="text-primary" size={32} />,
      title: t('about.giving.item5')
    }
  ];

  const [scope, animate] = useAnimate();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    if (!scope.current) return;

    const itemHeight = 156; // 140px height + 16px gap
    const count = valueItems.length;
    const holdTime = 2;
    const scrollTime = 0.8;
    const totalDuration = count * (holdTime + scrollTime);
    
    const yValues = [0];
    const times = [0];
    
    for (let i = 1; i <= count; i++) {
      // Hold
      yValues.push(-(i - 1) * itemHeight);
      times.push((i * (holdTime + scrollTime) - scrollTime) / totalDuration);
      
      // Scroll
      yValues.push(-i * itemHeight);
      times.push((i * (holdTime + scrollTime)) / totalDuration);
    }

    controlsRef.current = animate(scope.current, { y: yValues }, {
      duration: totalDuration,
      times: times,
      repeat: Infinity,
      ease: "linear"
    });

    return () => controlsRef.current?.stop();
  }, [animate, scope, valueItems.length]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <SEO 
        title="About Dr. Kaushal Pokhrel | Ophthalmologist & Humanitarian"
        description="Learn about Dr. Kaushal Pokhrel's journey as an ophthalmologist, his passion for nature and adventure, and his commitment to humanitarian eye care in Nepal."
        keywords={["Dr. Kaushal Pokhrel", "Ophthalmologist", "Eye Surgeon", "Nepal", "Humanitarian", "Nature Photography", "Trekking"].join(', ')}
        image="https://i.ibb.co/x8wj59HG/Nature-Green.webp"
      />
      <main className="pt-24 pb-20">
        {/* 1. Hero Section */}
        <section className="px-6 md:px-8 max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                {t('nav.about')}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-text-heading leading-tight mb-6">
                {t('about.hero.title')}
              </h1>
              <p className="text-lg text-text-body mb-8 max-w-2xl leading-relaxed">
                {t('about.hero.subtitle')}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://i.ibb.co/x8wj59HG/Nature-Green.webp" 
                  alt="Dr. Kaushal Pokhrel - Ophthalmologist and Eye Surgeon" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 text-[10px] text-white/70 bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm">
                  © Dr. Kaushal Pokhrel
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. Media Interviews Section */}
        <section id="interviews" className="py-24 bg-surface/50 border-y border-text-heading/5">
          <div className="px-6 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
                Media Interviews
              </h2>
              <p className="text-lg text-text-body max-w-2xl mx-auto leading-relaxed">
                Sharing insights and expertise on eye health through national media.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {interviews.map((interview, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col"
                >
                  <div className="aspect-video rounded-3xl overflow-hidden bg-surface border border-text-heading/5 shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
                    <iframe
                      src={interview.url}
                      title={interview.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-text-heading px-2">{interview.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Nature, Adventure & Photography Section */}
        <section id="hobbies" className="py-24">
          <div className="px-6 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
                    {t('about.travel.title')}
                  </h2>
                  <p className="text-lg text-primary font-medium italic">
                    {t('about.travel.subtitle')}
                  </p>
                </div>
                <p className="text-lg text-text-body mb-10 leading-relaxed">
                  {t('about.travel.desc')}
                </p>
                
                {/* Category Selection Cards - Desktop only */}
                <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "flex flex-col items-center p-4 rounded-2xl border transition-all duration-300",
                        activeCategory === cat.id
                          ? "bg-primary border-primary text-white shadow-lg scale-105"
                          : "bg-surface border-text-heading/5 text-text-body hover:border-primary/30"
                      )}
                    >
                      <div className={cn(
                        "mb-2 transition-colors",
                        activeCategory === cat.id ? "text-white" : "text-primary"
                      )}>
                        {cat.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider">{cat.label}</span>
                    </button>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden lg:flex px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all items-center space-x-3"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <Compass size={20} />
                  <span>{t('about.travel.cta')}</span>
                </motion.button>
              </motion.div>
              
              {/* Image Gallery Grid */}
              <div className="relative order-1 lg:order-2 w-full">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeCategory}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                          <img src={categoryImages[activeCategory][0].url} alt={categoryImages[activeCategory][0].alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                          <div className="absolute bottom-2 right-2 text-[8px] text-white/50 bg-black/10 px-1.5 py-0.5 rounded-full">
                            © Dr. Kaushal Pokhrel
                          </div>
                        </div>
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                          <img src={categoryImages[activeCategory][1].url} alt={categoryImages[activeCategory][1].alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                          <div className="absolute bottom-2 right-2 text-[8px] text-white/50 bg-black/10 px-1.5 py-0.5 rounded-full">
                            © Dr. Kaushal Pokhrel
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4 pt-8">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                          <img src={categoryImages[activeCategory][2].url} alt={categoryImages[activeCategory][2].alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                          <div className="absolute bottom-2 right-2 text-[8px] text-white/50 bg-black/10 px-1.5 py-0.5 rounded-full">
                            © Dr. Kaushal Pokhrel
                          </div>
                        </div>
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                          <img src={categoryImages[activeCategory][3].url} alt={categoryImages[activeCategory][3].alt} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                          <div className="absolute bottom-2 right-2 text-[8px] text-white/50 bg-black/10 px-1.5 py-0.5 rounded-full">
                            © Dr. Kaushal Pokhrel
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Category Title at bottom of photo collection */}
                    <div className="lg:hidden flex items-center justify-center py-2">
                      <div className="flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-primary">
                        {categories.find(c => c.id === activeCategory)?.icon}
                        <span className="text-sm font-bold uppercase tracking-widest">
                          {categories.find(c => c.id === activeCategory)?.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Mobile Category Selection - Compact */}
                <div className="lg:hidden grid grid-cols-5 gap-2 mt-6">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        "flex flex-col items-center p-2 rounded-xl border transition-all duration-300",
                        activeCategory === cat.id
                          ? "bg-primary border-primary text-white shadow-md"
                          : "bg-surface border-text-heading/5 text-text-body"
                      )}
                    >
                      <div className={cn(
                        "mb-1 transition-colors scale-75",
                        activeCategory === cat.id ? "text-white" : "text-primary"
                      )}>
                        {cat.icon}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <div className="lg:hidden mt-8 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full max-w-xs px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-3"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <Compass size={20} />
                    <span>{t('about.travel.cta')}</span>
                  </motion.button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Social Services Section */}
        <section id="social-services" className="bg-surface/50 py-24 border-y border-text-heading/5">
          <div className="px-6 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
                {t('about.humanitarian.title')}
              </h2>
              <p className="text-lg text-text-body max-w-2xl mx-auto leading-relaxed">
                {t('about.humanitarian.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {humanitarianItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-surface border border-text-heading/5 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:z-10 relative transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-heading mb-3">{item.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Spreading Smiles Section */}
        <section id="spreading-smiles" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[452px] overflow-hidden">
                <div ref={scope} className="flex flex-col gap-4">
                  {[...valueItems, ...valueItems].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-8 p-8 bg-surface border border-text-heading/5 rounded-[2rem] shadow-sm hover:shadow-md transition-all h-[140px] shrink-0"
                    >
                      <div className="shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-base md:text-lg font-normal text-text-heading leading-tight">{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                Humanitarian Efforts
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
                {t('about.giving.title')}
              </h2>
              <p className="text-lg text-text-body leading-relaxed max-w-2xl mb-10">
                {t('about.giving.intro')}
              </p>
              <div className="flex items-center space-x-3 text-primary font-bold text-lg">
                <Heart size={24} />
                <span>{t('about.personal.touch')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Belief in Research Section */}
        <section id="research" className="bg-primary/5 py-24">
          <div className="px-6 md:px-8 max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-12 text-center tracking-tight">
                {t('about.research.title')}
              </h2>
              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <Globe className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-text-body text-lg leading-relaxed">
                      {t('about.research.raab')}
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <BookOpen className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-text-body text-lg leading-relaxed">
                      {t('about.research.pubs')}
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <Activity className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-text-body text-lg leading-relaxed">
                      {t('about.research.ismsics')}
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start space-x-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <Award className="text-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-text-body text-lg leading-relaxed">
                      {t('about.research.presentations')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
