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
      "SMILE PRO", "Femto-LASIK", "LASIK", "PRK", "ICL", "IPCL", "Presbyond", "Cataract Surgery",
      "Lens-based vision correction",
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
      <title>{language === 'en' 
        ? "LASIK Eye Surgery in Nepal | SMILE Pro & Vision Correction – Dr. Kaushal Pokhrel" 
        : "नेपालमा लेजर (LASIK) आँखा शल्यक्रिया | SMILE Pro र दृष्टि सुधार – डा. कौशल पोखरेल"}
      </title>
      <meta name="description" content={language === 'en' 
        ? "Search for LASIK eye surgery in Nepal and learn about modern options like SMILE Pro, PRK, and lens-based vision correction, guided by careful clinical evaluation." 
        : "नेपालमा LASIK आँखा शल्यक्रियाको बारेमा खोज्नुहोस् र SMILE Pro, PRK, र लेन्समा आधारित दृष्टि सुधार जस्ता आधुनिक विकल्पहरूको बारेमा जानकारी लिनुहोस्, जुन सावधानीपूर्वक क्लिनिकल मूल्याङ्कनद्वारा निर्देशित छ।"} 
      />
      <meta name="keywords" content="SMILE PRO Nepal, LASIK Kathmandu, PRK Nepal, Femto-LASIK Nepal, ICL surgery Nepal, lens-based vision correction Nepal, British Gurkha eye surgery, Singapore police eye test, pilot vision correction, Dr. Kaushal Pokhrel" />

      {/* Language Meta */}
      <html lang={language === 'en' ? 'en' : 'ne'} />
    </Helmet>
  );
};

export default SEO;
