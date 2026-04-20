import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  article?: boolean;
  schemas?: object[];
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image = "https://www.kaushalpokhrel.com.np/kaushal-og-banner.webp",
  article = false,
  schemas = []
}) => {
  const { language, t } = useLanguage();
  const { pathname } = useLocation();
  const baseUrl = 'https://kaushalpokhrel.com.np';
  const fullUrl = `${baseUrl}${pathname}`;

  const defaultTitle = language === 'en' 
    ? "LASIK Eye Surgery in Nepal | SMILE Pro & Vision Correction – Dr. Kaushal Pokhrel" 
    : "नेपालमा लेजर (लेसिक) आँखा शल्यक्रिया | स्माइल प्रो र दृष्टि सुधार – डा. कौशल पोखरेल";

  const defaultDescription = language === 'en' 
    ? "Expert LASIK, SMILE Pro, and ICL eye surgery in Kathmandu, Nepal. Dr. Kaushal Pokhrel provides advanced vision correction for pilots, military, and athletes." 
    : "नेपालको काठमाडौंमा विशेषज्ञ LASIK, SMILE Pro, र ICL आँखा शल्यक्रिया। डा. कौशल पोखरेलले पाइलट, सेना र खेलाडीहरूका लागि उन्नत दृष्टि सुधार प्रदान गर्नुहुन्छ।";

  const seoTitle = title ? `${title} | Dr. Kaushal Pokhrel` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || "SMILE PRO Nepal, LASIK Kathmandu, PRK Nepal, Femto-LASIK Nepal, ICL surgery Nepal, lens-based vision correction Nepal, British Gurkha eye surgery, Singapore police eye test, pilot vision correction, Dr. Kaushal Pokhrel";

  // Schema.org JSON-LD for Physician (Base Entity)
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Kaushal Pokhrel",
    "image": "https://www.kaushalpokhrel.com.np/kaushal-portrait.webp",
    "description": "Expert Refractive and Cataract Surgeon in Kathmandu, Nepal. Specializing in SMILE PRO, LASIK, and ICL for demanding professions including British Gurkha, Singaporean Police, Pilots, Surgeons, and Athletes.",
    "url": baseUrl,
    "telephone": "+977-1-4584574",
    "medicalSpecialty": ["Ophthalmology", "Refractive Surgery", "Cataract Surgery"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tilganga Institute of Ophthalmology, Gaushala",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati",
      "postalCode": "44600",
      "addressCountry": "NP"
    },
    "affiliation": [
      {
        "@type": "MedicalOrganization",
        "name": "Tilganga Institute of Ophthalmology",
        "url": "https://www.tilganga.org"
      }
    ],
    "knowsAbout": [
      "SMILE PRO", "Femto-LASIK", "LASIK", "PRK", "ICL", "IPCL", "Presbyond", "Cataract Surgery",
      "Vision Correction for British Gurkha Army",
      "SMILE Pro for Singaporean Police",
      "Visual Standards for Pilots and Cabin Crew"
    ]
  };

  // Breadcrumb Schema
  const pathSegments = pathname.split('/').filter(p => p);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'en' ? "Home" : "गृहपृष्ठ",
        "item": baseUrl
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1),
        "item": `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  };

  const allSchemas = [physicianSchema, breadcrumbSchema, ...schemas];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Language Meta */}
      <html lang={language === 'en' ? 'en' : 'ne'} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${pathname}?lang=en`} />
      <link rel="alternate" hrefLang="ne" href={`${baseUrl}${pathname}?lang=np`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${pathname}`} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dr. Kaushal Pokhrel" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org JSON-LD */}
      {allSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(allSchemas.length === 1 ? allSchemas[0] : allSchemas)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
