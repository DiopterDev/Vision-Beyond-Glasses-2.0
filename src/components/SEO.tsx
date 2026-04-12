import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SEO: React.FC = () => {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const baseUrl = 'https://kaushalpokhrel.com.np'; // Final domain updated

  // Schema.org JSON-LD for Physician
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Kaushal Pokhrel",
    "image": "https://i.ibb.co/SXKFTjB2/dr-pokhrel.webp",
    "description": "Expert Refractive and Cataract Surgeon in Kathmandu, Nepal. Specializing in SMILE PRO, LASIK, and ICL for demanding professions including British Gurkha, Singaporean Police, Pilots, Surgeons, and Athletes.",
    "url": baseUrl,
    "telephone": "+977-1-4493684", // Example Tilganga number, replace if needed
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
      },
      {
        "@type": "Organization",
        "name": "Visual Freedom Foundation (VFF)"
      }
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Nepal Ophthalmic Society"
      },
      {
        "@type": "Organization",
        "name": "International Society of Manual Small Incision Cataract Surgery (ISMSICS) - Nepal Chapter"
      }
    ],
    "knowsAbout": [
      "SMILE PRO", "Femto-LASIK", "LASIK", "ICL", "IPCL", "Presbyond", "Cataract Surgery",
      "Vision Correction for British Gurkha Army",
      "SMILE Pro for Singaporean Police",
      "Visual Standards for Pilots and Cabin Crew",
      "Refractive Surgery for Surgeons and Nurses",
      "Laser Eye Surgery for Professional Athletes",
      "Vision Correction for Trekkers and Mountaineers"
    ],
    "sameAs": [
      "https://www.youtube.com/watch?v=VNBEZUXwQU0",
      "https://www.youtube.com/watch?v=kAn2i9J7LnE",
      "https://www.youtube.com/watch?v=4jhBMxADcaw"
    ]
  };

  return (
    <Helmet>
      {/* Hreflang Tags for Bilingual SEO */}
      <link rel="canonical" href={baseUrl + pathname} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/?lang=en`} />
      <link rel="alternate" hrefLang="ne" href={`${baseUrl}/?lang=np`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/`} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(physicianSchema)}
      </script>

      {/* Meta Tags */}
      <meta name="description" content={language === 'en' 
        ? "Expert Refractive and Cataract Surgeon in Kathmandu, Nepal. SMILE PRO, LASIK (Femto-LASIK), and ICL for British Gurkha, Pilots, Surgeons, and Athletes." 
        : "काठमाडौंमा विशेषज्ञ रिफ्र्याक्टिभ र मोतियाबिन्दु शल्यचिकित्सक। ब्रिटिश गोर्खा, पाइलट, शल्यचिकित्सक र खेलाडीहरूका लागि SMILE PRO, LASIK (Femto-LASIK) र ICL।"} 
      />
      <meta name="keywords" content="SMILE PRO Nepal, LASIK Kathmandu, Femto-LASIK Nepal, ICL surgery Nepal, British Gurkha eye surgery, Singapore police eye test, pilot vision correction, Dr. Kaushal Pokhrel" />

      {/* Language Meta */}
      <html lang={language === 'en' ? 'en' : 'ne'} />
    </Helmet>
  );
};

export default SEO;
