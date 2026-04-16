import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubSection, setActiveSubSection] = useState('');
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isSurgeryPage = pathname.startsWith('/surgery/');
  const isResourcesPage = pathname === '/resources';

  // Detect screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll detection for navbar background/shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy Logic for sections
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSubSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    let sections: string[] = [];
    if (isHomePage) {
      sections = ['home', 'surgeries', 'costs', 'professions', 'reviews', 'eligibility', 'faq', 'contact'];
    } else if (isAboutPage) {
      sections = ['interviews', 'hobbies', 'social-services', 'spreading-smiles', 'research', 'contact'];
    }

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname, isHomePage, isAboutPage]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const surgerySubItems = [
    { key: 'surgery.smile.title', href: '/surgery/smile-pro', id: 'smile-pro' },
    { key: 'surgery.lasik.title', href: '/surgery/femto-lasik', id: 'femto-lasik' },
    { key: 'surgery.prk.title', href: '/surgery/prk', id: 'prk' },
    { key: 'surgery.presbyond.title', href: '/surgery/presbyond', id: 'presbyond' },
    { key: 'surgery.icl.title', href: '/surgery/icl-ipcl', id: 'icl-ipcl' },
    { key: 'surgery.cle.title', href: '/surgery/cle-cataract', id: 'cle-cataract' },
  ];

  const mainNavItems = [
    { key: 'nav.home', href: '/', id: 'home', active: isHomePage },
    { key: 'nav.surgeries', href: '#', id: 'surgeries', active: isSurgeryPage },
    { key: 'resources.title', href: '/resources', id: 'resources', active: isResourcesPage },
    { key: 'nav.about', href: '/about', id: 'about', active: isAboutPage },
  ];

  const getSubNavItemsForId = (id: string) => {
    if (id === 'home') {
      return [
        { key: 'nav.surgeries', href: '/#surgeries', id: 'surgeries' },
        { key: 'nav.costs', href: '/#costs', id: 'costs' },
        { key: 'nav.visionAndWork', href: '/#professions', id: 'professions' },
        { key: 'nav.reviews', href: '/#reviews', id: 'reviews' },
        { key: 'nav.eligibilityChecker', href: '/#eligibility', id: 'eligibility' },
        { key: 'nav.faq', href: '/#faq', id: 'faq' },
        { key: 'nav.contact', href: '/#contact', id: 'contact' },
      ];
    }
    if (id === 'about') {
      return [
        { key: 'nav.interviews', href: '/about#interviews', id: 'interviews' },
        { key: 'nav.hobbies', href: '/about#hobbies', id: 'hobbies' },
        { key: 'nav.socialServices', href: '/about#social-services', id: 'social-services' },
        { key: 'nav.spreadingSmiles', href: '/about#spreading-smiles', id: 'spreading-smiles' },
        { key: 'nav.research', href: '/about#research', id: 'research' },
        { key: 'nav.contact', href: '/about#contact', id: 'contact' },
      ];
    }
    if (id === 'surgeries') {
      return surgerySubItems;
    }
    return [];
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#') {
      e.preventDefault();
      return;
    }
    if (href.includes('#')) {
      const [path, id] = href.split('#');
      // Normalize path for comparison
      const normalizedPath = path === '' ? '/' : path;
      const normalizedPathname = pathname === '' ? '/' : pathname;

      if (normalizedPathname === normalizedPath || (normalizedPath === '/' && isHomePage) || (normalizedPath === '/about' && isAboutPage)) {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -120; // Offset for navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          // Update URL hash without reload
          window.history.pushState(null, '', href.includes('#') ? `#${id}` : '');
        }
        setIsMenuOpen(false);
        setHoveredNavItem(null);
      } else {
        // Internal navigation with hash to another page
        e.preventDefault();
        navigate(href);
        setIsMenuOpen(false);
        setHoveredNavItem(null);
      }
    } else if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
      setIsMenuOpen(false);
      setHoveredNavItem(null);
    }
  };

  return (
    <motion.header 
      ref={navRef} 
      initial={false}
      role="banner"
      animate={{
        borderRadius: isMobile ? "0px" : (isMenuOpen ? "24px" : "9999px"),
        height: isMobile ? (isMenuOpen ? "auto" : "56px") : "76px",
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={cn(
        "glass-nav sticky z-50 transition-all duration-300",
        isMobile 
          ? "top-0 w-full border-b border-white/20 dark:border-white/10 shadow-lg overflow-hidden" 
          : "top-4 mx-auto max-w-7xl w-[calc(100%-2rem)] border border-white/20 dark:border-white/10 shadow-2xl"
      )}
      onMouseLeave={() => !isMobile && setHoveredNavItem(null)}
    >
      <div className="px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 lg:h-[76px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3 group" aria-label="Dr. Kaushal Pokhrel - Home" onMouseEnter={() => !isMobile && setHoveredNavItem(null)}>
            <img 
              src="https://i.ibb.co/cSPhLMyD/logo-Dr-Kaushal.webp" 
              alt="Dr. Kaushal Pokhrel - LASIK and SMILE PRO Surgeon Logo" 
              className="h-10 w-10 lg:h-12 lg:w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="text-base lg:text-xl font-bold tracking-tight text-primary leading-tight">
                {t('logo.title')}
              </span>
              <span className="text-xs font-bold text-text-body uppercase tracking-widest leading-tight">
                {t('logo.subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Top Line */}
          <nav className="hidden lg:flex space-x-8 items-center" aria-label="Main Navigation">
            {mainNavItems.map((item) => (
              <div 
                key={item.key} 
                className="relative h-[76px] flex items-center" 
                onMouseEnter={() => setHoveredNavItem(item.id)}
                onMouseLeave={() => setHoveredNavItem(null)}
              >
                <motion.a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative text-sm font-bold py-1 transition-all duration-300 flex items-center space-x-1",
                    item.active ? "text-primary" : "text-text-body hover:text-primary"
                  )}
                >
                  <span>{t(item.key)}</span>
                  {getSubNavItemsForId(item.id).length > 0 && (
                    <ChevronDown 
                      size={14} 
                      className={cn("transition-transform duration-300", hoveredNavItem === item.id ? "rotate-180" : "")} 
                    />
                  )}
                  {item.active && (
                    <motion.span
                      layoutId="nav-active-tab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </motion.a>

                {/* Vertical Dropdown */}
                <AnimatePresence>
                  {hoveredNavItem === item.id && getSubNavItemsForId(item.id).length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[76px] left-1/2 -translate-x-1/2 w-56 py-3 bg-surface border border-white/20 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden z-50"
                    >
                      <div className="flex flex-col">
                        {getSubNavItemsForId(item.id).map((sub) => (
                          <a
                            key={sub.key}
                            href={sub.href}
                            onClick={(e) => handleNavClick(e, sub.href)}
                            className={cn(
                              "px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-primary/5",
                              (item.id === 'home' || item.id === 'about') 
                                ? (activeSubSection === sub.id ? "text-primary bg-primary/5" : "text-text-body hover:text-primary")
                                : (pathname === sub.href ? "text-primary bg-primary/5" : "text-text-body hover:text-primary")
                            )}
                          >
                            {t(sub.key)}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="flex items-center space-x-4 pl-4 border-l border-gray-200 dark:border-gray-700" onMouseEnter={() => !isMobile && setHoveredNavItem(null)}>
              <button
                type="button"
                onClick={toggleTheme}
                className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'np' : 'en')}
                className="flex items-center space-x-1 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold transition-colors"
                aria-label={language === 'en' ? 'नेपालीमा परिवर्तन गर्नुहोस्' : 'Switch to English'}
              >
                <Globe size={18} className="text-primary" />
                <span>{language === 'en' ? 'ने' : 'EN'}</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'np' : 'en')}
              className="p-2 font-bold text-sm"
              aria-label={language === 'en' ? 'नेपालीमा परिवर्तन गर्नुहोस्' : 'Switch to English'}
            >
              {language === 'en' ? 'ने' : 'EN'}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-primary"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-text-heading/5 bg-surface overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {mainNavItems.map((item) => (
                <div key={item.key} className="space-y-1">
                  <button
                    onClick={() => {
                      if (item.id === 'surgeries') {
                        setExpandedMobileItem(expandedMobileItem === item.id ? null : item.id);
                      } else {
                        navigate(item.href);
                        setIsMenuOpen(false);
                        if (item.id === 'home' && isHomePage) {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all",
                      item.active ? "bg-primary/10 text-primary" : "text-text-body hover:bg-primary/5"
                    )}
                  >
                    <span>{t(item.key)}</span>
                    {item.id === 'surgeries' && (
                      <ChevronDown 
                        size={18} 
                        className={cn("transition-transform duration-300", expandedMobileItem === item.id ? "rotate-180" : "")} 
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedMobileItem === item.id && item.id === 'surgeries' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-6 space-y-1 overflow-hidden"
                      >
                        {getSubNavItemsForId('surgeries').map((sub) => (
                          <a
                            key={sub.key}
                            href={sub.href}
                            onClick={(e) => handleNavClick(e, sub.href)}
                            className={cn(
                              "block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                              (sub.href.startsWith('#') && activeSubSection === sub.id) || pathname === sub.href
                                ? "text-primary bg-primary/5" 
                                : "text-text-body hover:text-primary"
                            )}
                          >
                            {t(sub.key)}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
