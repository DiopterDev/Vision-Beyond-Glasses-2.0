import React, { useState } from 'react';
import { MapPin, Mail, Copy, Check, ExternalLink, Clock, Share2, Facebook, Instagram, Linkedin, Youtube, Video, Share } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [mapLoading, setMapLoading] = useState(true);
  const email = 'mail@kaushalpokhrel.com.np';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent("Appointment request from Dr. Kaushal's website")}&body=${encodeURIComponent("Dear Team RSU, please book me an appointment with Dr. Kaushal Pokhrel based on available appointment slot.")}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('logo.title'),
          text: t('logo.subtitle'),
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const [copiedLink, setCopiedLink] = useState(false);

  const shareUrl = 'https://kaushalpokhrel.com.np';
  const shareText = typeof window !== 'undefined' ? `${t('logo.title')} - ${t('logo.subtitle')}` : '';

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden" aria-labelledby="contact-title">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-text-heading mb-4 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info Cards */}
          <div className="space-y-6">
            {/* Location Card */}
            <div className="card-modern p-6 flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <MapPin size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-text-heading mb-1">{t('contact.location.title')}</h3>
                <p className="text-text-body mb-4">{t('contact.location.desc')}</p>
                <a 
                  href="https://maps.app.goo.gl/korCUrfjy9CzGsjE8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:underline"
                  aria-label={t('contact.aria.directions')}
                >
                  <span>{t('contact.directions.btn')}</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="card-modern p-6 flex items-start space-x-4">
              <a 
                href={mailtoLink} 
                className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                aria-label="Email Dr. Kaushal Pokhrel"
              >
                <Mail size={24} />
              </a>
              <div className="flex-grow">
                <a href={mailtoLink} className="inline-block" aria-label="Appointment Request Email Title">
                  <h3 className="text-lg font-bold text-text-heading mb-1 hover:text-primary transition-colors">{t('contact.email.title')}</h3>
                </a>
                <div className="flex items-center justify-between bg-background p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                  <a href={mailtoLink} className="text-text-body font-mono text-xs sm:text-sm break-all mr-2 hover:text-primary transition-colors" aria-label={`Email: ${email}`}>{email}</a>
                  <button 
                    onClick={copyToClipboard}
                    className="p-2 rounded-md hover:bg-primary/10 text-primary transition-colors flex-shrink-0"
                    title={t('contact.email.copy')}
                    aria-label={t('contact.aria.copyEmail')}
                  >
                    {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-emerald-500 mt-2 font-medium">{t('contact.email.copied')}</p>
                )}
              </div>
            </div>

            {/* Social & Share Card */}
            <div className="card-modern p-6 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Share2 size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-text-heading mb-4">{t('contact.social.title')}</h3>
                  <div className="grid grid-cols-5 gap-2 w-full">
                    {[
                      { 
                        icon: Facebook, 
                        href: "https://www.facebook.com/Da.eyedoc", 
                        label: t('contact.social.facebook'),
                        color: "hover:bg-[#1877F2]"
                      },
                      { 
                        icon: Instagram, 
                        href: "https://www.instagram.com/da.eyedoc", 
                        label: t('contact.social.instagram'),
                        color: "hover:bg-[#E4405F]"
                      },
                      { 
                        icon: Linkedin, 
                        href: "https://www.linkedin.com/in/kaushalpokhrel", 
                        label: t('contact.social.linkedin'),
                        color: "hover:bg-[#0A66C2]"
                      },
                      { 
                        icon: Youtube, 
                        href: "https://www.youtube.com/@da.eyedoc", 
                        label: t('contact.social.youtube'),
                        color: "hover:bg-[#FF0000]"
                      },
                      { 
                        icon: Video, 
                        href: "https://www.tiktok.com/@da.eyedoc", 
                        label: t('contact.social.tiktok'),
                        color: "hover:bg-[#000000] dark:hover:bg-white dark:hover:text-black"
                      }
                    ].map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(
                          "group flex items-center justify-center h-10 bg-primary/5 text-primary rounded-xl transition-all duration-500 overflow-hidden",
                          social.color,
                          "hover:text-white hover:flex-[3] flex-1"
                        )}
                        aria-label={social.label}
                      >
                        <div className="flex items-center gap-1.5 px-2">
                          <social.icon size={16} className="shrink-0" />
                          <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-500 whitespace-nowrap font-bold text-[10px] uppercase tracking-wider">
                            {social.label}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Integrated Share Section */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-start space-x-4">
                  <button 
                    onClick={handleShare}
                    className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all group/share"
                    title={t('contact.share.title')}
                  >
                    <Share size={20} className="group-hover/share:rotate-12 transition-transform" />
                  </button>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-bold text-text-heading uppercase tracking-widest">{t('contact.share.title')}</h3>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(shareUrl);
                          setCopiedLink(true);
                          setTimeout(() => setCopiedLink(false), 2000);
                        }}
                        className="text-[10px] font-bold text-primary uppercase tracking-tighter hover:underline"
                      >
                        {copiedLink ? t('contact.email.copied') : t('contact.email.copy')}
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[80px] flex items-center justify-center space-x-2 py-2 px-3 bg-[#1877F2]/10 text-[#1877F2] rounded-lg text-xs font-bold hover:bg-[#1877F2] hover:text-white transition-all"
                      >
                        <Facebook size={14} />
                        <span>Facebook</span>
                      </a>
                      <a 
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[80px] flex items-center justify-center space-x-2 py-2 px-3 bg-[#25D366]/10 text-[#25D366] rounded-lg text-xs font-bold hover:bg-[#25D366] hover:text-white transition-all"
                      >
                        <Share2 size={14} />
                        <span>WhatsApp</span>
                      </a>
                      <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex-1 min-w-[100px] flex items-center justify-center space-x-2 py-2 px-3 rounded-lg text-xs font-bold transition-all shadow-sm border",
                          theme === 'light' 
                            ? "bg-white text-black border-black/20 hover:bg-black hover:text-white hover:border-transparent" 
                            : "bg-white/10 text-white border-transparent hover:bg-white/20"
                        )}
                      >
                        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Map */}
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl relative">
            {mapLoading && (
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-widest text-tagline">
                    {t('contact.aria.map')}...
                  </span>
                </div>
              </div>
            )}
            <iframe 
              title="Dr. Kaushal Pokhrel LASER Eye Surgeon"
              src="https://maps.google.com/maps?q=Dr+Kaushal+Pokhrel+LASER+Eye+Surgeon+Tilganga+Institute+of+Ophthalmology+Kathmandu&amp;output=embed&amp;z=16" 
              width="100%" 
              height="100%" 
              style={{ border: 0, flex: '1 1 0%', minHeight: '360px', display: 'block' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className={cn(
                "transition-all duration-700",
                theme === 'dark' ? "invert hue-rotate-180" : "",
                mapLoading ? "opacity-0" : "opacity-100"
              )}
              onLoad={() => setMapLoading(false)}
              aria-label="Dr. Kaushal Pokhrel LASER Eye Surgeon"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
