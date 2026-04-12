import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, Video } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface border-t border-gray-200 dark:border-gray-800 py-12" role="contentinfo">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm text-text-body dark:text-dark-text-body">
              <li><Link to="/#home" className="hover:text-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/#costs" className="hover:text-primary transition-colors">{t('nav.costs')}</Link></li>
              <li><Link to="/#eligibility" className="hover:text-primary transition-colors">{t('nav.eligibility')}</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">{t('resources.title')}</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/#contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Surgeries */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">{t('footer.surgeries')}</h3>
            <ul className="space-y-2 text-sm text-text-body dark:text-dark-text-body">
              <li><Link to="/surgery/smile-pro" className="hover:text-primary transition-colors">{t('surgery.smile.title')}</Link></li>
              <li><Link to="/surgery/femto-lasik" className="hover:text-primary transition-colors">{t('surgery.lasik.title')}</Link></li>
              <li><Link to="/surgery/prk" className="hover:text-primary transition-colors">{t('surgery.prk.title')}</Link></li>
              <li><Link to="/surgery/presbyond" className="hover:text-primary transition-colors">{t('surgery.presbyond.title')}</Link></li>
              <li><Link to="/surgery/icl-ipcl" className="hover:text-primary transition-colors">{t('surgery.icl.title')}</Link></li>
              <li><Link to="/surgery/cle-cataract" className="hover:text-primary transition-colors">{t('surgery.cle.title')}</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">{t('footer.locations')}</h3>
            <div className="space-y-4">
              <a 
                href="https://maps.app.goo.gl/XmsjR6Ljqz2dZVQJ7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-sm text-text-body dark:text-dark-text-body hover:text-primary transition-colors group"
              >
                <MapPin size={18} className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="group-hover:text-primary transition-colors">Tilganga Institute of Ophthalmology, Refractive Surgery Unit (RSU), Kathmandu, Nepal</p>
              </a>
              <a 
                href="https://maps.app.goo.gl/xJaK6g28MmZaHfof9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-sm text-text-body dark:text-dark-text-body hover:text-primary transition-colors group"
              >
                <MapPin size={18} className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="group-hover:text-primary transition-colors">Tilganga City Eye Center, Dampa Complex, Chuchepati, Kathmandu, Nepal</p>
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-primary">{t('footer.contact')}</h3>
            <a 
              href={`mailto:mail@kaushalpokhrel.com.np?subject=${encodeURIComponent("Appointment request from Dr. Kaushal's website")}&body=${encodeURIComponent("Dear Team RSU, please book me an appointment with Dr. Kaushal Pokhrel based on available appointment slot.")}`}
              className="flex items-center space-x-3 text-sm text-text-body dark:text-dark-text-body mb-2 hover:text-primary transition-colors group"
            >
              <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
              <p className="group-hover:text-primary transition-colors">mail@kaushalpokhrel.com.np</p>
            </a>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.facebook.com/Da.eyedoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all"
                aria-label={t('footer.social.facebook')}
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/da.eyedoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all"
                aria-label={t('footer.social.instagram')}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kaushalpokhrel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all"
                aria-label={t('footer.social.linkedin')}
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@da.eyedoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all"
                aria-label={t('footer.social.youtube')}
              >
                <Youtube size={18} />
              </a>
              <a 
                href="https://www.tiktok.com/@da.eyedoc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all"
                aria-label={t('footer.social.tiktok')}
              >
                <Video size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-text-body dark:text-dark-text-body">
          <p>© {new Date().getFullYear()} {t('logo.title')}. Vision Beyond Glasses.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
