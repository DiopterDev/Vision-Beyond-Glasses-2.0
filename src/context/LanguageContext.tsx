import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'np';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  'nav.home': {
    en: 'Home',
    np: 'गृहपृष्ठ',
  },
  'nav.about': {
    en: 'About Me',
    np: 'मेरो बारेमा',
  },
  'nav.surgeries': {
    en: 'Surgeries',
    np: 'शल्यक्रिया',
  },
  'nav.eligibility': {
    en: 'Eligibility',
    np: 'योग्यता',
  },
  'nav.costs': {
    en: 'Cost',
    np: 'लागत',
  },
  'nav.reviews': {
    en: 'Reviews',
    np: 'प्रतिक्रियाहरू',
  },
  'nav.faq': {
    en: 'FAQ',
    np: 'प्रश्नहरू',
  },
  'nav.contact': {
    en: 'Contact',
    np: 'सम्पर्क',
  },
  'nav.visionAndWork': {
    en: 'Vision & Work',
    np: 'दृष्टि र कार्य',
  },
  'nav.eligibilityChecker': {
    en: 'Eligibility Checker',
    np: 'योग्यता जाँच',
  },
  'nav.interviews': {
    en: 'Interviews',
    np: 'अन्तर्वार्ता',
  },
  'nav.hobbies': {
    en: 'Hobbies',
    np: 'रुचिहरू',
  },
  'nav.socialServices': {
    en: 'Social Services',
    np: 'सामाजिक सेवा',
  },
  'nav.spreadingSmiles': {
    en: 'Spreading Smiles',
    np: 'मुस्कान फैलाउँदै',
  },
  'nav.research': {
    en: 'Research',
    np: 'अनुसन्धान',
  },
  'logo.title': {
    en: 'Dr. Kaushal Pokhrel',
    np: 'डा. कौशल पोखरेल',
  },
  'logo.subtitle': {
    en: 'The Eye Doc',
    np: 'आँखा रोग विशेषज्ञ',
  },
  'footer.quickLinks': {
    en: 'Quick Links',
    np: 'द्रुत लिङ्कहरू',
  },
  'footer.locations': {
    en: 'Locations',
    np: 'स्थानहरू',
  },
  'footer.surgeries': {
    en: 'Surgeries',
    np: 'शल्यक्रिया',
  },
  'footer.contact': {
    en: 'Contact',
    np: 'सम्पर्क',
  },
  'footer.social.facebook': { en: 'Visit our Facebook page', np: 'हाम्रो फेसबुक पेज हेर्नुहोस्' },
  'footer.social.instagram': { en: 'Visit our Instagram profile', np: 'हाम्रो इन्स्टाग्राम प्रोफाइल हेर्नुहोस्' },
  'footer.social.linkedin': { en: 'Visit our LinkedIn profile', np: 'हाम्रो लिंक्डइन प्रोफाइल हेर्नुहोस्' },
  'footer.social.youtube': { en: 'Visit our YouTube channel', np: 'हाम्रो यूट्यूब च्यानल हेर्नुहोस्' },
  'footer.social.tiktok': { en: 'Visit our TikTok profile', np: 'हाम्रो टिकटक प्रोफाइल हेर्नुहोस्' },
  'hero.name': {
    en: 'Dr. Kaushal Pokhrel, MBBS, MD',
    np: 'डा. कौशल पोखरेल, एम.बि.बि.एस., एम्.डि.',
  },
  'hero.specialty': {
    en: 'Ophthalmology · Fellowship in Refractive Surgery',
    np: 'आँखा रोग विशेषज्ञ · लेजर शल्यक्रियामा फेलोसिप',
  },
  'hero.title': {
    en: 'LASIK Eye Surgery Specialist in Nepal',
    np: 'नेपालको लेजर (लेसिक) आँखा शल्यक्रिया',
  },
  'hero.titleSecondary': {
    en: '— and modern alternatives like SMILE Pro, PRK, and lens-based vision correction',
    np: '— र स्माईल प्रो, पि.आर.के, तथा लेन्समा आधारित आधुनिक दृष्टि सुधार विकल्पहरूका विशेषज्ञ',
  },
  'hero.subtitle': {
    en: 'Helping patients reduce dependence on glasses and contact lenses—by choosing the most suitable procedure for their eyes, not just LASIK.',
    np: 'बिरामीहरूलाई चश्मा र कन्ट्याक्ट लेन्समाथिको निर्भरता कम गर्न मद्दत गर्दै—केवल LASIK मात्र नभई, तपाईंको आँखाका लागि सबैभन्दा उपयुक्त प्रक्रिया छनोट गरेर।',
  },
  'hero.disclaimer': {
    en: 'Consultation and surgery are advised only after a complete eye examination.',
    np: 'पूर्ण आँखा परीक्षण पछि मात्र परामर्श र शल्यक्रियाको सल्लाह दिइन्छ।',
  },
  'hero.quote.text': {
    en: 'Refractive surgery is not just about removing glasses or contact lenses — it is about restoring confidence, independence, and quality of life.',
    np: 'लेजर शल्यक्रियाले चश्मा वा कन्ट्याक लेन्स मात्र हटाउँदैन — यसले आत्मविश्वास, स्वतन्त्रता, र जीवनको गुणस्तर पुनर्स्थापना पनि गर्छ।',
  },
  'hero.quote.author': {
    en: '- Dr. Kaushal Pokhrel',
    np: '- डा. कौशल पोखरेल',
  },
  'hero.image.caption': {
    en: 'Dr. Kaushal Pokhrel',
    np: 'डा. कौशल पोखरेल',
  },
  'hero.deco.blue': {
    en: 'Visual accent representing clarity and precision',
    np: 'स्पष्टता र शुद्धताको प्रतीक',
  },
  'hero.deco.green': {
    en: 'Visual accent representing health and recovery',
    np: 'स्वास्थ्य र सुधारको प्रतीक',
  },
  'cta.eligibility': {
    en: 'Check Eligibility',
    np: 'योग्यता जाँच गर्नुहोस्',
  },
  'cta.consultation': {
    en: 'Book a Consultation',
    np: 'परामर्श बुक गर्नुहोस्',
  },
  'surgeries.title': {
    en: 'Vision Correction Procedures We Offer',
    np: 'हामीले प्रदान गर्ने दृष्टि सुधार प्रक्रियाहरू',
  },
  'surgeries.subtitle': {
    en: 'LASIK, SMILE Pro, ICL, and other clinically proven options as no single procedure is best for everyone',
    np: 'LASIK, SMILE Pro, ICL, र अन्य क्लिनिकली प्रमाणित विकल्पहरू किनभने कुनै एक प्रक्रिया सबैका लागि उत्कृष्ट हुँदैन',
  },
  'surgeries.flipHint': {
    en: 'Click to see clinical details',
    np: 'विस्तृत विवरणका लागि क्लिक गर्नुहोस्',
  },
  'surgeries.tapToFlip': {
    en: 'Tap to Flip',
    np: 'पल्टाउन ट्याप गर्नुहोस्',
  },
  'surgeries.clickToFlip': {
    en: 'Click to Flip',
    np: 'पल्टाउन क्लिक गर्नुहोस्',
  },
  'surgeries.seeMore': {
    en: 'See More Procedures',
    np: 'थप प्रक्रियाहरू हेर्नुहोस्',
  },
  'surgeries.seeLess': {
    en: 'Show Less',
    np: 'थोरै देखाउनुहोस्',
  },
  'surgeries.learnMore': {
    en: 'Learn More',
    np: 'थप जान्नुहोस्',
  },
  'costs.title': {
    en: 'Laser Eye Surgery Costs (2026)',
    np: 'लेजर आँखा शल्यक्रिया लागत (२०२६)',
  },
  'costs.subtitle': {
    en: 'Clear, transparent pricing for procedures at Tilganga Institute of Ophthalmology',
    np: 'तिलगंगा आँखा प्रतिष्ठानमा गरिने प्रक्रियाहरूको लागि स्पष्ट र पारदर्शी मूल्य निर्धारण',
  },
  'costs.from': {
    en: 'From',
    np: 'बाट',
  },
  'costs.perEye': {
    en: 'Per eye',
    np: 'प्रति आँखा',
  },
  'costs.bothEyes': {
    en: 'Both eyes',
    np: 'दुबै आँखा',
  },
  'costs.eligibilityScan': {
    en: 'Eligibility Scan: ',
    np: 'योग्यता स्क्यान: ',
  },
  'costs.postOpCare': {
    en: 'Post-op Care Included',
    np: 'शल्यक्रिया पछिको हेरचाह समावेश',
  },
  'costs.viewDetails': {
    en: 'View Details',
    np: 'विवरण हेर्नुहोस्',
  },
  'costs.startingSoon': {
    en: 'Service starting soon',
    np: 'सेवा चाँडै सुरु हुँदैछ',
  },
  'costs.startingSoonNotice': {
    en: 'The service has not yet started. Please contact RSU, Tilganga for new updates.',
    np: 'यो सेवा अझै सुरु भएको छैन। नयाँ अपडेटहरूको लागि कृपया RSU, तिलगंगालाई सम्पर्क गर्नुहोस्।',
  },
  'costs.eligibilityScanDesc': {
    en: 'Required for laser surgeries',
    np: 'लेजर शल्यक्रियाका लागि आवश्यक',
  },
  'costs.opdRegistration': {
    en: 'OPD Registration: ',
    np: 'OPD दर्ता: ',
  },
  'costs.opdRegistrationDesc': {
    en: 'Standard hospital fee',
    np: 'मानक अस्पताल शुल्क',
  },
  'costs.surgeryCost': {
    en: 'Surgery Cost',
    np: 'शल्यक्रिया लागत',
  },
  'costs.disclaimer': {
    en: 'Final cost may vary based on individual requirements. All prices include standard post-operative care. No other hidden charges.',
    np: 'अन्तिम लागत व्यक्तिगत आवश्यकताहरूमा आधारित हुन सक्छ। सबै मूल्यहरूमा मानक शल्यक्रिया पछिको हेरचाह समावेश छ। अन्य कुनै लुकेका शुल्कहरू छैनन्।',
  },
  'costs.viewAll': {
    en: 'View all surgery costs',
    np: 'सबै शल्यक्रिया लागतहरू हेर्नुहोस्',
  },
  'surgery.smile.title': {
    en: 'SMILE PRO',
    np: 'स्माईल प्रो',
  },
  'surgery.smile.desc': {
    en: 'Flap-free, minimally invasive laser vision correction.',
    np: 'फ्ल्याप नबनाइने, न्यूनतम चिरफारको लेजर दृष्टि सुधार।',
  },
  'surgery.smile.details': {
    en: 'Small Incision Lenticule Extraction (SMILE) is the latest advancement in laser vision correction. It is flap-free, leading to better corneal stability and reduced dry eye symptoms. Ideal for active individuals and athletes.',
    np: 'SMILE Pro लेजर दृष्टिको पछिल्लो प्रविधि हो। यसमा आँखाको बाहिरी तह (फ्ल्याप) काट्नु पर्दैन, जसले गर्दा आँखा सुख्खा हुने समस्या कम हुन्छ र आँखाको शक्ति बलियो रहन्छ।',
  },
  'surgery.lasik.title': {
    en: 'Femto-LASIK (LASIK)',
    np: 'फेम्टो-लासिक (LASIK)',
  },
  'surgery.lasik.desc': {
    en: 'Blade-free laser correction for rapid recovery.',
    np: 'ब्लेड नलाग्ने, छिटो निको हुने र सटीक लेजर दृष्टि उपचार।',
  },
  'surgery.lasik.details': {
    en: 'Femtosecond LASIK uses a laser to create a precise corneal flap instead of a mechanical blade. This offers higher precision, safety, and faster visual recovery. Most patients return to work the next day.',
    np: 'फेम्टो-लासिकमा ब्लेडको सट्टा लेजर प्रयोग गरेर फ्ल्याप बनाइन्छ। यो प्रविधि अत्यन्तै सटीक र सुरक्षित छ, र बिरामीले भोलिपल्टै देखि आफ्नो काम सुरु गर्न सक्छन्।',
  },
  'surgery.prk.title': {
    en: 'PRK',
    np: 'पि.आर.के।',
  },
  'surgery.prk.desc': {
    en: 'Surface-based laser treatment for thin corneas.',
    np: 'पातलो कोर्निया भएकाहरूका लागि सतहमा आधारित लेजर उपचार।',
  },
  'surgery.prk.details': {
    en: 'Photorefractive Keratectomy (PRK) is a surface-based procedure where no flap is created. It is an excellent alternative for patients with thin corneas or specific occupations where a flap might be risky.',
    np: 'PRK पातलो कोर्निया भएका व्यक्तिहरूका लागि उत्तम विकल्प हो। यसमा फ्ल्याप बनाइँदैन, त्यसैले यो केही विशेष पेशा वा खेलकुदमा संलग्न व्यक्तिहरूका लागि सुरक्षित मानिन्छ।',
  },
  'surgery.presbyond.title': {
    en: 'Presbyond',
    np: 'प्रेस्बियोन्ड',
  },
  'surgery.presbyond.desc': {
    en: 'Laser solution for reading glass independence.',
    np: 'चश्मा बिना नै पढ्न मद्दत गर्ने लेजर उपचार।',
  },
  'surgery.presbyond.details': {
    en: 'Presbyond Laser Blended Vision is a treatment for presbyopia (age-related reading vision loss). It adjusts each eye to provide a blend of near and distance vision, reducing the need for reading glasses.',
    np: '४० वर्ष कटेपछि नजिकको अक्षर पढ्न गाह्रो हुने (प्रेसबायोपिया) समस्याका लागि यो लेजर उपचार हो। यसले चश्मा बिना नै नजिक र टाढा दुवै स्पष्ट देख्न मद्दत गर्दछ।',
  },
  'surgery.icl.title': {
    en: 'ICL / IPCL',
    np: 'आई.सि.एल.',
  },
  'surgery.icl.desc': {
    en: 'Advanced lens-based solution for high prescriptions.',
    np: 'उच्च दृष्टिदोष भएकाहरूका लागि लेन्समा आधारित उपचार।',
  },
  'surgery.icl.details': {
    en: 'Implantable Collamer Lenses (ICL) are micro-thin lenses placed inside the eye. This is the gold standard for patients with very high myopia or those who are not suitable candidates for laser surgery.',
    np: 'धेरै उच्च पावर भएका वा लेजर शल्यक्रिया गर्न नमिल्ने व्यक्तिहरूका लागि यो लेन्स प्रत्यारोपण विधि हो। यो आँखाको भित्र राखिने एक विशेष लेन्स हो जसले स्थायी रूपमा दृष्टि सुधार गर्दछ।',
  },
  'surgery.cle.title': {
    en: 'Advanced Cataract',
    np: 'मोतिविन्दु शल्यक्रिया',
  },
  'surgery.cle.desc': {
    en: 'Clear Lens Exchange for permanent vision correction.',
    np: 'स्थायी दृष्टि सुधारका लागि लेन्स प्रतिस्थापन विधि।',
  },
  'surgery.cle.details': {
    en: 'Clear Lens Exchange (CLE) involves replacing the eye\'s natural lens with an advanced intraocular lens (IOL). Ideal for older patients with high prescriptions, permanently preventing future cataracts.',
    np: 'यस प्रविधिमा आँखाको प्राकृतिक लेन्सलाई आधुनिक कृत्रिम लेन्सले प्रतिस्थापन गरिन्छ। यो मोतिविन्दुको शल्यक्रिया जस्तै हुन्छ र यसले भविष्यमा मोतिविन्दु हुनबाट पनि बचाउँछ।',
  },

  'elig.title': {
    en: 'Check If You’re Eligible for Laser Eye Surgery',
    np: 'के तपाईं लेजर आँखा शल्यक्रियाका लागि योग्य हुनुहुन्छ? जाँच गर्नुहोस्',
  },
  'elig.subtitle': {
    en: 'A quick self-assessment to understand your suitability',
    np: 'तपाईंको उपयुक्तता बुझ्नको लागि एक द्रुत आत्म-मूल्याङ्कन',
  },
  'elig.consent.title': {
    en: 'Answer simple questions to find if you are fit for surgery.',
    np: 'तपाँईको अपरेसनको योग्यता थाहा पाउन केहि सामन्य प्रशनको उत्तर दिनुहोस।',
  },
  'elig.consent.text': {
    en: 'This tool is for informational purposes only. Final surgical decisions require a clinical examination and advanced scans at the clinic.',
    np: 'यो परीक्षण साधारण जानकारीको लागि मात्र हो। शल्यक्रियाको अन्तिम निर्णय अस्पतालमा गरिने विस्तृत चिकित्सकीय जाँच र अत्याधुनिक स्क्यान रिपोर्टहरू पछि मात्र तय गरिनेछ।',
  },
  'elig.consent.button': {
    en: 'I Understand & Wish to Proceed',
    np: 'मैले बुझें, अगाडि बढ्नुहोस्',
  },
  // --- Eligibility Questions (11 Questions Logic) ---
  "elig.q1": {
    en: "Is your age GREATER than 18?",
    np: "तपाईंको उमेर १८ वर्ष वा सो भन्दा बढी छ?",
  },
  "elig.q2": {
    en: "Has your prescription of glasses or contact lens CHANGED in the last 6 months?",
    np: "गत ६ महिनामा तपाईंको चश्मा वा कन्ट्याक लेन्सको नम्बर परिवर्तन भएको छ?",
  },
  "elig.q3": {
    en: "Have you or your family members ever been DIAGNOSED with keratoconus?",
    np: "तपाईंलाई वा तपाईँको परिवारको कसैलाई आँखाको नानीको आकार बिग्रिने रोग - केराटोकोनस (Keratoconus) - भएको जानकारी छ?",
  },
  "elig.q4": {
    en: "Have you been DIAGNOSED with cataracts?",
    np: "तपाईंलाई मोतियाबिन्दु भएको जानकारी छ?",
  },
  "elig.q5": {
    en: "Have you been DIAGNOSED with cataracts?",
    np: "तपाईंलाई मोतियाबिन्दु भएको जानकारी छ?",
  },
  "elig.q6": {
    en: "Do you have severe DRY EYES?",
    np: "तपाईंलाई गम्भीर सुख्खा आँखाको समस्या छ?",
  },
  "elig.q7": {
    en: "What is the POWER of your current prescription glasses?",
    np: "तपाईंको हालको चश्माको नम्बर कस्तो छ, प्लस कि माइनस?",
  },
  'elig.q7.yesLabel': {
    en: 'Minus (Myopic)',
    np: 'माइनस (नजिकको दृष्टिदोष)'
  },
  'elig.q7.noLabel': {
    en: 'Plus (Hypermetropic)',
    np: 'प्लस (टाढाको दृष्टिदोष)'
  },
  "elig.q8": {
    en: "Do you play contact SPORTS where there is a chance of injury to your eyes (eg. football, etc.)?",
    np: "के तपाईंले आँखामा चोट लाग्ने सम्भावना भएका खेलकुदहरु (जस्तै फुटबल, आदि) खेल्ने गर्नु भएको छ?",
  },
  "elig.q9": {
    en: "Do you play contact SPORTS where there is a chance of injury to your eyes (eg. football, etc.)?",
    np: "के तपाईंले आँखामा चोट लाग्ने सम्भावना भएका खेलकुदहरु (जस्तै फुटबल, आदि) खेल्ने गर्नु भएको छ?",
  },
  "elig.q10": {
    en: "Do you have severe DRY EYES?",
    np: "तपाईंलाई गम्भीर सुख्खा आँखाको समस्या छ?",
  },
  "elig.q11": {
    en: "Do you have severe DRY EYES?",
    np: "तपाईंलाई गम्भीर सुख्खा आँखाको समस्या छ?",
  },

  // --- Eligibility Results & Badges ---
  "elig.badge.eligible": {
    en: "Potentially Eligible",
    np: "सम्भावित रूपमा योग्य",
  },
  "elig.badge.conditional": { en: "Conditional", np: "सशर्त" },
  "elig.badge.ineligible": {
    en: "Not Eligible Yet",
    np: "अहिले अयोग्य",
  },
  "elig.badge.observe": {
    en: "Observation Advised",
    np: "निगरानी आवश्यक",
  },
  "elig.r_no_surgery.title": {
    en: "Surgery Not Recommended",
    np: "अहिले शल्यक्रिया सिफारिस गरिँदैन",
  },
  "elig.r_no_surgery.desc": {
    en: "Refractive surgery is generally not recommended for patients under 18 years of age, as the eyes are still developing and the prescription may continue to change. Please consult the clinic once you are 18 or older.",
    np: "१८ वर्ष मुनिका बिरामीहरूका लागि लेजर शल्यक्रिया सामान्यतया सिफारिस गरिँदैन, किनभने आँखाको अझै विकास भइरकेको हुन्छ र नम्बर बदलिन सक्छ। कृपया १८ वर्ष वा सो भन्दा बढी भएपछि अस्पतालमा सम्पर्क गर्नुहोस्।",
  },
  "elig.r_observe.title": {
    en: "Observation for 6 Months Recommended",
    np: "६ महिनासम्म अवलोकन जरुरी छ",
  },
  "elig.r_observe.desc": {
    en: "Your prescription appears to be changing. It is important to wait until your glasses or contact lens power stabilises for at least 6 months before proceeding with any refractive surgery. Please book a follow-up consultation.",
    np: "तपाईंको चश्माको नम्बर बदलिरहेको देखिन्छ। कुनै पनि लेजर शल्यक्रिया अगाडि बढ्नु अघि तपाईंको चश्मा वा कन्ट्याक लेन्सको नम्बर कम्तिमा ६ महिना स्थिर हुन कुर्नु महत्त्वपूर्ण छ। कृपया केहि पछिको लागि परामर्श समय लिनुहोस्।",
  },
  "elig.r_cle.title": {
    en: "CLE Recommended",
    np: "CLE लेन्स शल्यकृया सिफारिस गरिन्छ",
  },
  "elig.r_cle.desc": {
    en: "A cataract (clouding of the natural lens) means that neither laser-based surgery nor ICL/IPCL is appropriate. The correct treatment is Clear Lens Extraction (CLE) — removal of the cataractous lens followed by implantation of a monofocal or advanced multifocal intraocular lens — which restores both clarity and refractive correction. Please consult the clinic for a comprehensive evaluation.",
    np: "मोतियाबिन्दु (प्राकृतिक लेन्समा धुमिलोपन) को अर्थ लेजर शल्यक्रिया वा ICL/IPCL दुवै उपयुक्त छैन। सही उपचार Clear Lens Exchange (CLE) हो। — मोतियाबिन्दु भएको लेन्स हटाएर monofocal वा multifocal कृत्रिम लेन्स राख्नु पर्छ — जसले स्पष्टता र दृष्टि सुधार दुवै पुनर्स्थापना गर्छ। कृपया थप जाँचको लागि अस्पतालमा सम्पर्क गर्नुहोस्।",
  },
  "elig.r_icl.title": {
    en: "ICL / IPCL Recommended",
    np: "ICL / IPCL सिफारिस गरिन्छ",
  },
  "elig.r_icl.desc": {
    en: "Given keratoconus (or family history) without a cataract diagnosis, an Implantable Collamer Lens (ICL / IPCL) is the preferred approach as it avoids altering the corneal tissue. Clear Lens Extraction (CLE) remains an option as a last resort if ICL/IPCL is not feasible. A detailed clinical assessment will confirm the most suitable choice.",
    np: "तपाईमा वा तपाईको परिवारमा केराटोकोनस (Keratoconus) भएको तर मोतियाबिन्दु नभएको अवस्थामा, Implantable Collamer Lens (ICL / IPCL) प्राथमिक विकल्प हो किनभने यसले आँखाको नानीकमा केहि परिवर्तन गर्दैन। ICL/IPCL सम्भव नभएमा CLE अन्तिम उपायको रूपमा रहन्छ। विस्तृत चिकित्सकीय जाँचले सबैभन्दा उपयुक्त विकल्प पुष्टि गर्नेछ।",
  },
  "elig.r_smile_prk.title": {
    en: "SMILE, PRK or CLE Recommended",
    np: "SMILE, PRK वा CLE सिफारिस गरिन्छ",
  },
  "elig.r_smile_prk.desc": {
    en: "For patients wearing minus power glasses who also participate in contact sports, flapless procedures are strongly preferred — SMILE or PRK eliminates the risk of flap dislodgement during physical activity. ICL or CLE is available as a last-resort alternative if corneal-based procedures are not suitable. The best fit will be determined after a full evaluation.",
    np: "माइनस नम्बरको चश्मा लगाउने र सम्पर्क खेलकुद खेल्ने बिरामीहरूका लागि, फ्ल्याप नबनाइने प्रक्रियाहरू उपयुक्त हुन्छन। — SMILE वा PRK मा फ्ल्याप सर्ने जोखिम हुँदैन। लेजर प्रक्रिया उपयुक्त नभएमा ICL वा CLE अन्तिम उपायको रूपमा उपलब्ध छ। पूर्ण जाँच पछि सबैभन्दा उपयुक्त विकल्प निर्धारण गरिनेछ।",
  },
  "elig.r_prk_icl_cle.title": {
    en: "SMILE, PRK, ICL or CLE Recommended",
    np: "SMILE, PRK, ICL वा CLE सिफारिस गरिन्छ",
  },
  "elig.r_prk_icl_cle.desc": {
    en: "Based on your profile, SMILE, PRK, ICL, or CLE may be suitable options. SMILE and PRK are flapless corneal procedures, making them safe for active lifestyles; ICL preserves corneal tissue; and CLE is available as a last resort. The final recommendation will depend on your corneal measurements, lens power, and a thorough clinical assessment.",
    np: "तपाईंको विवरण अनुसार, SMILE, PRK, ICL, वा CLE उपयुक्त विकल्पहरू हुन सक्छन्। SMILE र PRK फ्ल्याप नबनाइने प्रक्रिया हुन्, जसले सक्रिय जीवनशैलीका लागि सुरक्षित बनाउँछ; ICL ले आँखाको नानीको तन्तु जोगाउँछ; र CLE अन्तिम उपायको रूपमा उपलब्ध छ। अन्तिम सिफारिस तपाईंको आँखाको नानीको मापन, लेन्सको नम्बर, र पूर्ण चिकित्सकीय जाँचमा निर्भर हुनेछ।",
  },
  "elig.r_smile_prk_icl_cle.title": {
    en: "SMILE, PRK, ICL or CLE Recommended",
    np: "SMILE, PRK, ICL वा CLE सिफारिस गरिन्छ",
  },
  "elig.r_smile_prk_icl_cle.desc": {
    en: "You are potentially suitable for several procedures. Significant dry eye symptoms tend to favour flapless or lens-based options. A detailed eye evaluation — including corneal topography and tear film assessment — will determine the optimal choice.",
    np: "तपाईं धेरै प्रक्रियाहरूका लागि सम्भावित रूपमा उपयुक्त हुनुहुन्छ। सुख्खा आँखाका लक्षणहरूले फ्ल्याप नबनाइने वा लेन्समा आधारित विकल्पहरूलाई प्राथमिकता दिइन्छ। आँखाको नानीको नक्सा र आँसुको तह जाँच सहित विस्तृत आँखा जाँच पछि उत्तम विकल्प निर्धारण गरिनेछ।",
  },
  "elig.r_smile_prk_icl_cle2.title": {
    en: "SMILE, PRK, ICL or CLE Recommended",
    np: "SMILE, PRK, ICL वा CLE सिफारिस गरिन्छ",
  },
  "elig.r_smile_prk_icl_cle2.desc": {
    en: "For patients wearing minus power glasses who also participate in contact sports, flapless procedures are strongly preferred. SMILE or PRK eliminates the risk of flap dislodgement during physical activity. ICL or CLE is available as a last-resort alternative if corneal-based procedures are not suitable. The best fit will be determined after a full evaluation.",
    np: "माइनस नम्बरको चश्मा लगाउने र सम्पर्क खेलकुद खेल्ने बिरामीहरूका लागि, फ्ल्याप नबनाइने प्रक्रियाहरू उपयुक्त हुन्छन। SMILE वा PRK मा फ्ल्याप सर्ने जोखिम हुँदैन। लेजर प्रक्रिया उपयुक्त नभएमा ICL वा CLE अन्तिम उपायको रूपमा उपलब्ध छ। पूर्ण जाँच पछि सबैभन्दा उपयुक्त विकल्प निर्धारण गरिनेछ।",
  },
  "elig.r_smile_prk_lasik_icl_cle.title": {
    en: "SMILE, PRK, LASIK, ICL or CLE Recommended",
    np: "SMILE, PRK, LASIK, ICL वा CLE सिफारिस गरिन्छ",
  },
  "elig.r_smile_prk_lasik_icl_cle.desc": {
    en: "You appear to be broadly suitable for a wide range of vision correction procedures. Without significant dry eye symptoms, all major options remain on the table. Your surgeon will guide you to the best procedure based on your corneal parameters and lifestyle needs.",
    np: "तपाईं प्रायः सबै दृष्टि सुधार प्रक्रियाहरूका लागि उपयुक्त देखिनुहुन्छ। सुख्खा आँखाका लक्षण बिना, सबै प्रमुख विकल्पहरू उपलब्ध छन्। तपाईंको चिकित्सकले तपाईंको आँखाको नानीको मापन र जीवनशैलीको आवश्यकता अनुसार सबैभन्दा उपयुक्त प्रक्रियाको मार्गदर्शन गर्नुहुनेछ।",
  },
  "elig.r_prk_smile_cle_icl.title": {
    en: "PRK, SMILE, CLE or ICL Recommended",
    np: "PRK, SMILE, CLE वा ICL सिफारिस गरिन्छ",
  },
  "elig.r_prk_smile_cle_icl.desc": {
    en: "Severe dry eye symptoms steer the recommendation towards procedures with a lower risk of worsening dryness. PRK, SMILE, CLE, or ICL are the preferred options. Your surgeon will assess your tear film and corneal health in detail before deciding.",
    np: "गम्भीर सुख्खा आँखाका लक्षणहरूले सुख्खापन बढ्ने कम जोखिम भएका प्रक्रियाहरूतर्फ सिफारिस दिन्छ। PRK, SMILE, CLE, वा ICL प्राथमिक विकल्पहरू हुन्। तपाईंको चिकित्सकले निर्णय गर्नु अघि आँसुको र आँखाको नानीको स्वास्थ्यको विस्तृत जाँच गर्नुहुनेछ।",
  },
  "elig.r_smile_lasik_prk_cle_icl.title": {
    en: "SMILE, PRK, CLE or ICL Recommended",
    np: "SMILE, PRK, CLE वा ICL सिफारिस गरिन्छ",
  },
  "elig.r_smile_lasik_prk_cle_icl.desc": {
    en: "You are potentially eligible for several vision correction procedures. LASIK has been excluded as a contact-sport lifestyle increases the risk of flap dislodgement following eye injury. Flapless options — SMILE and PRK — along with lens-based ICL and CLE as a last resort, remain on the table. Your surgeon will determine the best fit after a full evaluation.",
    np: "तपाईं प्रायः सबै दृष्टि सुधार प्रक्रियाहरूका लागि उपयुक्त देखिनुहुन्छ। खेलकुदको समयमा आँखामा चोट लागि फ्ल्याप सर्ने जोखिम बढाउने भएकोले LASIK को विकल्प हटाइएको छ। फ्ल्याप नबनाइने विकल्पहरू SMILE र PRK, र लेन्समा आधारित ICL गर्न मिल्छ। र, अन्तिम उपायको रूपमा CLE पनि उपलब्ध छ। तपाईंकि चिकित्सकले पूर्ण जाँच पछि सबैभन्दा उपयुक्त विकल्प निर्धारण गर्नुहुनेछ।",
  },
  "elig.info.label": { en: "More information", np: "थप जानकारी" },
  "elig.info.keratoconus": {
    en: "A condition where the clear front surface of your eye (cornea) becomes thin and bulges outward into a cone shape, causing blurry or distorted vision.",
    np: "आँखाको नानी (अगाडिको पारदर्शी सतह) पातलो भई चुच्चो हुने अवस्था, जसले धमिलो वा विकृत दृष्टि निम्त्याउँछ।",
  },
    "elig.info.cataract": {
    en: "A clouding of the natural lens inside your eye that makes your vision hazy or blurry — like looking through a foggy window.",
    np: "आँखा भित्रको प्राकृतिक लेन्समा धुमिलपन आउने अवस्था, जसले दृष्टि धमिलो बनाउँछ — कुहिरो लागेको जस्तो।",
  },  
  "elig.smileNote": {
    en: "SMILE surgery is an established treatment for myopia (minus power) prescriptions. Hyperopic SMILE — for plus power prescriptions — is currently under development and has not yet been launched in Nepal. If you wear plus power glasses, SMILE may become available in the near future. Stay updated by contacting the clinic.",
    np: "SMILE शल्यक्रिया Myopia (माइनस नम्बर) को लागि स्थापित उपचार हो। Hyperopic SMILE — प्लस नम्बरको लागि — हाल विकास हुँदैछ र नेपालमा अझै सुरु भएको छैन। यदि तपाईं प्लस नम्बरको चश्मा लगाउनुहुन्छ भने, SMILE नजिकको भविष्यमा उपलब्ध हुन सक्छ। नयाँ जानकारिको लागि अस्पतालमा सम्पर्क गर्नुहोस्।",
  },
  "elig.smileNoteLabel": {
    en: "Note on SMILE: ",
    np: "SMILE बारे नोट: ",
  },

  // --- Eligibility UI Buttons/Labels ---
  'elig.questionOf': { en: 'Question', np: 'प्रश्न' },
  'elig.yes': { en: 'Yes', np: 'हो' },
  'elig.no': { en: 'No', np: 'होइन' },
  'elig.notSure': { en: 'Not Sure', np: 'थाहा छैन' },
  'elig.startOver': { en: 'Start Over', np: 'फेरि सुरु गर्नुहोस्' },
  'elig.prevQuestion': { en: 'Previous Question', np: 'अघिल्लो प्रश्न' },
  'elig.bookConsultation': { en: 'Book Consultation', np: 'परामर्श बुक गर्नुहोस्' },

  // --- Contact & Reviews ---
  'contact.title': { en: 'Book a Consultation or Contact Us', np: 'परामर्श बुक गर्नुहोस् वा हामीलाई सम्पर्क गर्नुहोस्' },
  'contact.subtitle': { en: 'Talk directly with our clinical team about your eyes', np: 'तपाईंको आँखाको बारेमा हाम्रो क्लिनिकल टोलीसँग सीधा कुरा गर्नुहोस्' },
  'contact.location.title': { en: 'Location', np: 'स्थान' },
  'contact.location.desc': { en: 'Tilganga Institute of Ophthalmology, Refractive Surgery Unit (RSU).', np: 'तिलगंगा आँखा प्रतिष्ठान, रिफ्र्याक्टिभ सर्जरी युनिट (RSU)।' },
  'contact.email.title': { en: 'Email', np: 'इमेल' },
  'contact.email.copy': { en: 'Copy to Clipboard', np: 'क्लिपबोर्डमा कपी गर्नुहोस्' },
  'contact.email.copied': { en: 'Copied!', np: 'कपी गरियो!' },
  'contact.appointment.title': { en: 'Appointment', np: 'अपोइन्टमेन्ट' },
  'contact.appointment.btn': { en: 'Direct to RSU', np: 'RSU मा सिधै' },
  'contact.directions.btn': { en: 'Get Directions', np: 'दिशा निर्देशन' },
  'contact.hours.title': { en: 'Consultation Hours', np: 'परामर्श समय' },
  'contact.hours.desc': { en: 'Sun - Fri: 8:00 AM - 5:00 PM', np: 'आइतबार - शुक्रबार: बिहान ८:०० - दिउँसो ५:००' },
  'contact.share.title': { en: 'Share this page', np: 'यो पृष्ठ साझा गर्नुहोस्' },
  'contact.share.desc': { en: 'Help others find professional eye care.', np: 'अरूलाई व्यावसायिक आँखा उपचार खोज्न मद्दत गर्नुहोस्।' },
  'contact.share.btn': { en: 'Share Now', np: 'अहिले साझा गर्नुहोस्' },
  'contact.social.title': { en: 'Social Media', np: 'सामाजिक सञ्जाल' },
  'contact.social.facebook': { en: 'Facebook', np: 'फेसबुक' },
  'contact.social.instagram': { en: 'Instagram', np: 'इन्स्टाग्राम' },
  'contact.social.linkedin': { en: 'LinkedIn', np: 'लिंक्डइन' },
  'contact.social.youtube': { en: 'YouTube', np: 'यूट्यूब' },
  'contact.social.tiktok': { en: 'TikTok', np: 'टिकटक' },
  'contact.aria.directions': { en: 'Get directions to Tilganga on Google Maps', np: 'गुगल म्यापमा तिलगंगाको दिशा निर्देशन प्राप्त गर्नुहोस्' },
  'contact.aria.copyEmail': { en: 'Copy email address to clipboard', np: 'इमेल ठेगाना क्लिपबोर्डमा कपी गर्नुहोस्' },
  'contact.aria.share': { en: 'Share this website link', np: 'यो वेबसाइट लिङ्क साझा गर्नुहोस्' },
  'contact.aria.bookAppointment': { en: 'Send an appointment request email', np: 'अपोइन्टमेन्ट अनुरोध इमेल पठाउनुहोस्' },
  'contact.aria.map': { 
    en: 'Google Maps interactive map showing the location of Tilganga Institute of Ophthalmology in Kathmandu', 
    np: 'काठमाडौंस्थित तिलगंगा आँखा प्रतिष्ठानको स्थान देखाउने गुगल म्याप अन्तरक्रियात्मक नक्सा' 
  },
  'aria.backToTop': { en: 'Back to top', np: 'माथि जानुहोस्' },
  
  // --- About Page ---
  'about.hero.title': { en: 'A Passion for Vision, A Love for Life', np: 'दृष्टिप्रतिको जुनून, जीवनप्रतिको प्रेम' },
  'about.hero.subtitle': { 
    en: "I believe that every eye I treat carries a story, and every vision I restore opens a window to a world of beauty I deeply cherish. While we often measure success in microns and diopters, our greatest impact may lie in understanding the lives behind the eyes we treat. Whether I am trekking through the rugged trails of our mountains or standing at the operating table, my purpose remains the same—to serve with a heart that understands. Beyond being your surgeon, I am a fellow traveler on this journey of life, committed to spreading warmth and ensuring that no one is denied the breathtaking glory of our world. You are not just a patient to me; you are a person whose dreams deserve to be seen clearly.", 
    np: "म विश्वास गर्छु कि मैले उपचार गर्ने हरेक आँखामा एउटा कथा हुन्छ, र मैले पुनर्स्थापना गर्ने हरेक दृष्टिले म आफैले माया गर्ने सुन्दर संसारको एउटा झ्याल खोल्छ। हामी प्रायः सफलतालाई माइक्रोन र डायोप्टरमा मापन गर्छौं, तर हाम्रो सबैभन्दा ठूलो प्रभाव हामीले उपचार गर्ने आँखा पछाडिका जीवनहरू बुझ्नुमा हुन सक्छ। चाहे म हाम्रा पहाडका कठिन बाटाहरूमा पदयात्रा गरिरहेको हुँ वा शल्यक्रियाको टेबुलमा उभिएको हुँ, मेरो उद्देश्य सधैं एउटै रहन्छ—एउटा बुझ्ने हृदयले सेवा गर्ने। तपाईको शल्यचिकित्सक हुनुको साथै, म जीवनको यस यात्रामा एक सहयात्री पनि हुँ, जो न्यानोपन फैलाउन र कसैलाई पनि हाम्रो संसारको लुभावनी महिमा हेर्नबाट वञ्चित नगरियोस् भन्ने कुरामा प्रतिबद्ध छ। तपाई मेरो लागि केवल एक बिरामी मात्र हुनुहुन्न; तपाई एक यस्तो व्यक्ति हुनुहुन्छ जसका सपनाहरू स्पष्ट रूपमा देखिन योग्य छन्।" 
  },
  'about.mission.title': { en: 'My Heart\'s Work', np: 'मेरो हृदयको काम' },
  'about.mission.text': { 
    en: 'I believe that sight is a fundamental human right. My work in the clinic is only one part of my commitment to the community. Whether it is through complex surgery or humanitarian outreach, my goal is to restore not just vision, but the quality of life and independence that comes with it.', 
    np: 'म विश्वास गर्छु कि दृष्टि एक मौलिक मानव अधिकार हो। क्लिनिकमा मेरो काम समुदायप्रतिको मेरो प्रतिबद्धताको एक हिस्सा मात्र हो। चाहे त्यो जटिल शल्यक्रिया होस् वा मानवीय सेवा, मेरो लक्ष्य केवल दृष्टि मात्र होइन, तर यससँगै आउने जीवनको गुणस्तर र स्वतन्त्रता पुनर्स्थापना गर्नु हो।' 
  },
  'about.humanitarian.title': { en: 'Social Services', np: 'सामाजिक सेवा' },
  'about.humanitarian.subtitle': { 
    en: 'My commitment to humanity extends far beyond the hospital desk, reaching into the heart of communities in need.', 
    np: 'मेरो मानवीय प्रतिबद्धता अस्पतालको डेस्कभन्दा धेरै टाढा, खाँचोमा परेका समुदायहरूको हृदयसम्म पुग्छ।' 
  },
  'about.humanitarian.vff': { en: 'I am deeply involved in VFF, working to provide funding for life-changing eye surgeries for those in Nepal who need it most but can least afford it.', np: 'म भिजुअल फ्रीडम फाउन्डेसन (VFF) मा गहिरो रूपमा संलग्न छु, नेपालका अति विपन्न व्यक्तिहरूका लागि जीवन परिवर्तन गर्ने आँखा शल्यक्रियाका लागि आर्थिक सहयोग जुटाउन काम गर्दैछु।' },
  'about.humanitarian.nos': { en: 'Treasurer of Nepal Ophthalmic Society (NOS), advancing eye care standards nationwide.', np: 'नेपाल अप्थाल्मिक सोसाइटी (NOS) को कोषाध्यक्ष, देशभर आँखा उपचारको मापदण्डलाई अगाडि बढाउँदै।' },
  'about.humanitarian.lions': { en: 'VP of Vision Circle, Lions Club of Kathmandu, leading community vision screenings.', np: 'भिजन सर्कल, लायन्स क्लब अफ काठमाडौंको उपाध्यक्ष, सामुदायिक आँखा परीक्षणको नेतृत्व गर्दै।' },
  'about.giving.title': { en: 'Spreading Smiles', np: 'मुस्कान फैलाउँदै' },
  'about.giving.intro': { 
    en: 'I believe in the holy act of giving, for our smallest acts might be the greatest support to someone in their darkest hour. Things that we no longer value or want might be the biggest asset to someone else. Let us all strive to bring a little more warmth to the hearts of those around us.', 
    np: 'म दानको पवित्र कार्यमा विश्वास गर्छु, किनकि हाम्रा साना कार्यहरू कसैको लागि सबैभन्दा ठूलो सहयोग हुन सक्छन्। हामीले अब मूल्य नदिएका वा नचाहेका कुराहरू अरू कसैको लागि सबैभन्दा ठूलो सम्पत्ति हुन सक्छन्। आउनुहोस्, हामी सबै मिलेर हाम्रा वरपरका मानिसहरूको हृदयमा अलि बढी न्यानोपन ल्याउने प्रयास गरौं।' 
  },
  'about.giving.item1': { 
    en: 'Donated hair to a child under chemotherapy who refused school because she thought she looked ugly without her hair', 
    np: 'केमोथेरापी गराइरहेकी एक बालिकालाई कपाल दान गरें, जसले आफ्नो कपाल नभएको कारण आफूलाई नराम्रो ठानेर स्कूल जान अस्वीकार गरेकी थिइन्' 
  },
  'about.giving.item2': { 
    en: 'Donated blood 9 times to those whose lives were in danger', 
    np: 'ज्यान जोखिममा रहेकाहरूका लागि ९ पटक रक्तदान गरें' 
  },
  'about.giving.item3': { 
    en: 'Actively involved in rescue missions during the Great Earthquake in Nepal', 
    np: 'नेपालको विनाशकारी भूकम्पको समयमा उद्धार कार्यमा सक्रिय रूपमा संलग्न' 
  },
  'about.giving.item4': { 
    en: 'Provided free health checkups for 2 weeks to needy patients in Rasuwa whose hospital was destroyed by the earthquake', 
    np: 'भूकम्पले अस्पताल ध्वस्त भएको रसुवाका गरिब बिरामीहरूलाई २ हप्तासम्म निःशुल्क स्वास्थ्य परीक्षण सेवा प्रदान गरें' 
  },
  'about.giving.item5': { 
    en: 'Involved in numerous surgical eye camps in the most remote parts of Nepal—reaching those who cannot visit hospitals', 
    np: 'नेपालका दुर्गम भागहरूमा असंख्य शल्यक्रियात्मक आँखा शिविरहरूमा संलग्न—अस्पतालसम्म आउन नसक्नेहरूसम्म पुग्दै' 
  },
  'about.research.title': { en: 'Belief in Research', np: 'अनुसन्धानमा विश्वास' },
  'about.research.raab': { en: 'I believe only rigorous research can truly uplift healthcare. From the International RAAB survey to national journals, I strive to advance vision science for everyone.', np: 'म विश्वास गर्छु कि केवल गहिरो अनुसन्धानले मात्र स्वास्थ्य सेवालाई साच्चै माथि उठाउन सक्छ। अन्तर्राष्ट्रिय RAAB सर्वेक्षणदेखि राष्ट्रिय जर्नलहरूसम्म, म सबैका लागि दृष्टि विज्ञानलाई अगाडि बढाउन प्रयासरत छु।' },
  'about.research.pubs': { en: 'Published multiple research articles in prestigious international medical journals.', np: 'प्रतिष्ठित अन्तर्राष्ट्रिय मेडिकल जर्नलहरूमा धेरै अनुसन्धान लेखहरू प्रकाशित।' },
  'about.research.ismsics': { en: 'Committee member of international research organization (ISMSICS - international society of manual small incision cataract surgery - Nepal Chapter)', np: 'अन्तर्राष्ट्रिय अनुसन्धान संस्था (ISMSICS - म्यानुअल स्मल इन्सिजन क्याटाराक्ट सर्जरीको अन्तर्राष्ट्रिय समाज - नेपाल च्याप्टर) को समिति सदस्य' },
  'about.research.presentations': { en: 'Presented articles in multiple national and international stages like World Ophthalmology Congress (WOC) Vancouver, Asia Pacific Academy of Ophthalmology (APAO), Taiwan Society Cataract and Refractive Surgery Society (TSCRS), SAARC Ophthalmology Conference, Nepal Ophthalmic Society Conference', np: 'वर्ल्ड अप्थाल्मोलोजी कंग्रेस (WOC) भ्यानकुभर, एशिया प्यासिफिक एकेडेमी अफ अप्थाल्मोलोजी (APAO), ताइवान सोसाइटी क्याटाराक्ट एण्ड रिफ्र्याक्टिभ सर्जरी सोसाइटी (TSCRS), सार्क अप्थाल्मोलोजी कन्फरेन्स, नेपाल अप्थाल्मिक सोसाइटी कन्फरेन्स जस्ता धेरै राष्ट्रिय र अन्तर्राष्ट्रिय मञ्चहरूमा लेखहरू प्रस्तुत' },
  'about.travel.title': { en: 'Nature, Adventure & Photography', np: 'प्रकृति, साहसिक यात्रा र फोटोग्राफी' },
  'about.travel.subtitle': { en: 'Capturing the world through a clear lens, one peak at a time.', np: 'स्पष्ट लेन्स मार्फत संसारलाई कैद गर्दै, एक पटकमा एक शिखर।' },
  'about.travel.desc': { 
    en: 'I am a travel enthusiast and photographer at heart. There is an incredible beauty in what our eyes can see — the intricate patterns of a leaf, the vastness of the horizon, and the raw power of the mountains. It breaks my heart to know that refractive errors cause so many people to miss this breathtaking beauty of nature. From the rugged base of Mt. Everest to the serene, turquoise waters of Shey Phoksundo Lake, the spiritual calm of Gosaikunda, and the golden sunrises over the Annapurna range, I deeply appreciate every detail. This is exactly why I am so passionate about what I do; I want no one to miss the chance to see the world in all its glory.', 
    np: 'म हृदयदेखि नै यात्रा प्रेमी र फोटोग्राफर हुँ। हाम्रा आँखाहरूले देख्न सक्ने कुराहरूमा एक अविश्वसनीय सुन्दरता छ — पातको जटिल बुट्टा, क्षितिजको विशालता, र पहाडहरूको काँचो शक्ति। दृष्टि दोषका कारण धेरै मानिसहरूले प्रकृतिको यो लुभावनी सुन्दरता गुमाउनु परिरहेको थाहा पाउँदा मेरो मन रुन्छ। सगरमाथाको आधार शिविरदेखि शे-फोक्सुन्डो तालको शान्त र नीलो पानीसम्म, गोसाइँकुण्डको आध्यात्मिक शान्ति, र अन्नपूर्ण हिमशृङ्खलामा देखिने सुनौलो सूर्योदयसम्म, म हरेक विवरणको गहिरो प्रशंसा गर्छु। यही कारणले गर्दा म आफ्नो कामप्रति यति उत्साहित छु; म चाहन्छु कि कसैले पनि संसारलाई यसको पूर्ण महिमामा हेर्ने मौका नगुमाओस्।' 
  },
  'about.travel.cta': { en: 'Let\'s plan a hike?', np: 'एउटा पदयात्राको योजना बनाउने हो कि?' },
  'about.travel.cat.trekking': { en: 'Nepal', np: 'नेपाल' },
  'about.travel.cat.nature': { en: 'Nature', np: 'प्रकृति' },
  'about.travel.cat.adventure': { en: 'Adventure', np: 'साहसिक' },
  'about.travel.cat.cities': { en: 'Cities', np: 'शहरहरू' },
  'about.travel.cat.stories': { en: 'Stories', np: 'कथाहरू' },
  'about.personal.touch': { en: 'The Power of Giving', np: 'दानको शक्ति' },
  'about.personal.desc': { en: 'When you step into my clinic, you are not just a patient; you are a person with a story. I look forward to hearing yours.', np: 'जब तपाईं मेरो क्लिनिकमा आउनुहुन्छ, तपाईं केवल एक बिरामी मात्र हुनुहुन्न; तपाईं एक कथा भएको व्यक्ति हुनुहुन्छ। म तपाईंको कथा सुन्न उत्सुक छु।' },

  'reviews.title': { en: 'Patient Experiences & Reviews', np: 'बिरामीका अनुभव र समीक्षाहरू' },
  'reviews.source': { en: 'What people who underwent vision correction with us share', np: 'हामीसँग दृष्टि सुधार गराएका व्यक्तिहरूले साझा गरेका अनुभवहरू' },

  // --- Professions Section ---
  'professions.title': { en: 'Is Laser Eye Surgery Right for Your Profession?', np: 'के लेजर आँखा शल्यक्रिया तपाईंको पेशाको लागि सही छ?' },
  'professions.subtitle': { 
    en: 'Vision correction options for occupations and lifestyles that demand excellent unaided vision—such as military service, aviation, driving, and physically active work.', 
    np: 'सैन्य सेवा, उड्डयन, ड्राइभिङ, र शारीरिक रूपमा सक्रिय काम जस्ता उत्कृष्ट दृष्टि आवश्यक पर्ने पेशा र जीवनशैलीका लागि दृष्टि सुधारका विकल्पहरू।' 
  },
  'professions.military.title': { en: 'Military & Police', np: 'सेना र प्रहरी' },
  'professions.military.desc': { en: 'British Army, Nepal Army, Singaporean Police', np: 'ब्रिटिश आर्मी, नेपाल आर्मी, सिंगापुर प्रहरी' },
  'professions.military.criteria': { 
    en: 'Requires 6/6 vision without glasses for elite units like British Gurkhas and Singaporean Police. SMILE Pro or PRK are often preferred as they are flapless, eliminating the risk of flap displacement during rigorous training or combat.', 
    np: 'ब्रिटिश गोर्खा र सिंगापुर प्रहरी जस्ता कुलीन इकाइहरूका लागि चश्मा बिना ६/६ दृष्टि आवश्यक हुन्छ। SMILE Pro वा PRK लाई प्राथमिकता दिइन्छ किनभने यी फ्ल्याप-रहित हुन्छन्, जसले कडा तालिम वा लडाईको समयमा फ्ल्याप सर्ने जोखिम हटाउँछ।' 
  },
  'professions.military.alt': { 
    en: 'British Gurkha Army personnel in combat uniform - Vision correction for military and police in Nepal', 
    np: 'लडाईको पोशाकमा ब्रिटिश गोर्खा सेना - सेना र प्रहरीका लागि दृष्टि सुधार' 
  },
  'professions.aviation.title': { en: 'Aviation', np: 'हवाई क्षेत्र' },
  'professions.aviation.desc': { en: 'Pilots & Airhostess', np: 'पाइलट र एयरहोस्टेस' },
  'professions.aviation.criteria': { 
    en: 'Strict visual standards set by CAAN and international aviation authorities. Permanent correction ensures clear vision at all altitudes for pilots and cabin crew, removing the hassle of backup glasses.', 
    np: 'CAAN र अन्तर्राष्ट्रिय हवाई अधिकारीहरूद्वारा निर्धारित कडा दृष्टि मापदण्डहरू। स्थायी सुधारले पाइलट र क्याबिन क्रुहरूका लागि सबै उचाइमा स्पष्ट दृष्टि सुनिश्चित गर्दछ र ब्याकअप चश्माको झन्झट हटाउँछ।' 
  },
  'professions.aviation.alt': { 
    en: 'Pilot and airhostess standing in front of an aircraft - Laser eye surgery for aviation professionals', 
    np: 'विमानको अगाडि उभिएका पाइलट र एयरहोस्टेस - हवाई पेशेवरहरूका लागि लेजर शल्यक्रिया' 
  },
  'professions.medical.title': { en: 'Medical Professionals', np: 'चिकित्सा पेशेवरहरू' },
  'professions.medical.desc': { en: 'Surgeons & Nurses', np: 'शल्यचिकित्सक र नर्सहरू' },
  'professions.medical.criteria': { 
    en: 'Precision is key in the OR. Glasses can fog up behind masks or slip during long procedures. Laser surgery provides uninterrupted, sharp vision for surgeons and nursing staff.', 
    np: 'शल्यक्रिया कक्षमा शुद्धता मुख्य हुन्छ। मास्क पछाडि चश्मा धमिलो हुन सक्छ वा लामो प्रक्रियाको क्रममा चिप्लन सक्छ। लेजर शल्यक्रियाले शल्यचिकित्सक र नर्सिङ कर्मचारीहरूका लागि निरन्तर, तीखो दृष्टि प्रदान गर्दछ।' 
  },
  'professions.medical.alt': { 
    en: 'Surgeon and nurse in an operating theater - Precision vision for medical professionals', 
    np: 'शल्यक्रिया कक्षमा शल्यचिकित्सक र नर्स - चिकित्सा पेशेवरहरूका लागि सटीक दृष्टि' 
  },
  'professions.sports.title': { en: 'Athletes & Sports', np: 'खेलाडी र खेलकुद' },
  'professions.sports.desc': { en: 'Professional Athletes & Swimmers', np: 'व्यावसायिक खेलाडी र पौडीबाजहरू' },
  'professions.sports.criteria': { 
    en: 'Contact lenses can irritate during swimming or get dislodged in contact sports. SMILE Pro offers the fastest return to active training for professional athletes.', 
    np: 'पौडी खेल्दा कन्ट्याक लेन्सले जलन पैदा गर्न सक्छ वा खेलकुदको समयमा निस्कन सक्छ। SMILE Pro ले व्यावसायिक खेलाडीहरूका लागि सक्रिय तालिममा छिटो फर्कन मद्दत गर्दछ।' 
  },
  'professions.sports.alt': { 
    en: 'Professional athlete running on a racing track - SMILE Pro for sports and active lifestyles', 
    np: 'दौडको ट्र्याकमा दौडिरहेकी महिला खेलाडी - खेलकुद र सक्रिय जीवनशैलीका लागि स्माईल प्रो' 
  },
  'professions.adventure.title': { en: 'Adventure & Outdoors', np: 'साहसिक र बाहिरी गतिविधि' },
  'professions.adventure.desc': { en: 'Trekkers & Mountaineers', np: 'ट्रेकर्स र पर्वतारोहीहरू' },
  'professions.adventure.criteria': { 
    en: 'High altitudes and extreme cold make glasses and lenses difficult to manage for trekkers. Clear vision is a safety essential in the mountains.', 
    np: 'उच्च उचाइ र अत्यधिक चिसोले ट्रेकर्सहरूका लागि चश्मा र लेन्सहरू व्यवस्थापन गर्न गाह्रो बनाउँछ। पहाडहरूमा स्पष्ट दृष्टि सुरक्षाको लागि आवश्यक छ।' 
  },
  'professions.adventure.alt': { 
    en: 'Rock climber on a mountain - Vision correction for trekkers and mountaineers in Nepal', 
    np: 'चट्टान चढ्दै गरेको मानिस - नेपालका पदयात्री र पर्वतारोहीहरूका लागि दृष्टि सुधार' 
  },
  'professions.eligibilityNote': { en: 'Eligibility Criteria', np: 'योग्यता मापदण्ड' },
  'professions.close': { en: 'Close', np: 'बन्द गर्नुहोस्' },

  // --- Credentials ---
  'cred.nmc': { en: 'NMC Specialist Board Certified', np: 'नेपाल मेडिकल काउन्सिल विशेषज्ञ दर्ता' },
  'cred.fellowship': { en: 'Fellow: Tilganga & London Vision Clinic', np: 'फेलोसिप: तिलगंगा र लण्डन भिजन क्लिनिक' },
  'cred.volume': { en: '6000+ Successful Eye Surgeries', np: '६०००+ सफल आँखा शल्यक्रिया' },
  'cred.laser': { en: '1500+ Advanced Laser Procedures', np: '१५००+ आधुनिक लेजर शल्यक्रिया' },
  'cred.tech': { en: 'Visumax 800: Latest Laser Tech', np: 'भिजुम्याक्स ८००: अत्याधुनिक लेजर प्रविधि' },
  'cred.teaching': { en: '10+ Years Medical Teaching', np: '१०+ वर्ष मेडिकल शिक्षण अनुभव' },
  'cred.leadership': { en: 'Founding President: YO!Nepal', np: 'संस्थापक अध्यक्ष: यो! नेपाल' },
  'cred.society': { en: 'Treasurer: Nepal Ophthalmic Society', np: 'कोषाध्यक्ष: नेपाल अप्थाल्मिक सोसाइटी' },
  'cred.research': { en: 'Published: Int\'l Medical Journals', np: 'अन्तर्राष्ट्रिय मेडिकल जर्नलमा प्रकाशित' },
  'cred.lions': { en: 'VP: Vision Circle, Lions Club of Kathmandu', np: 'उपाध्यक्ष: भिजन सर्कल, लायन्स क्लब अफ काठमाडौं' },

  // --- FAQ Section ---
  'faq.title': { en: 'Laser Eye Surgery: Common Questions Answered', np: 'लेजर आँखा शल्यक्रिया: सामान्य प्रश्नहरूको जवाफ' },
  'faq.subtitle': { en: 'Clear answers to the questions patients ask most', np: 'बिरामीहरूले धेरै सोध्ने प्रश्नहरूको स्पष्ट जवाफ' },
  'faq.seeMore': {
    en: 'See More FAQs',
    np: 'थप प्रश्नहरू हेर्नुहोस्',
  },
  'faq.seeMoreResources': {
    en: 'See More at Resources & FAQs',
    np: 'स्रोत र प्रश्नहरूमा थप हेर्नुहोस्',
  },
  
  'faq.q1.question': { en: 'Am I a candidate for laser eye surgery?', np: 'के म लेजर आँखा शल्यक्रियाका लागि योग्य छु?' },
  'faq.q1.answer': { 
    en: 'Most individuals aged 18-45 with a stable prescription for at least 6 months are candidates for laser eye surgery. Suitability depends on corneal thickness, eye health, and absence of conditions like Keratoconus. Dr. Kaushal Pokhrel uses advanced MS-39 and Pentacam diagnostics to ensure your safety. Use our Eligibility Checker for a quick, personalized assessment.', 
    np: '१८-४५ वर्षका र कम्तिमा ६ महिनादेखि स्थिर प्रिस्क्रिप्शन भएका अधिकांश व्यक्तिहरू लेजर आँखा शल्यक्रियाका लागि योग्य हुन्छन्। योग्यता कोर्नियाको मोटाइ, आँखाको स्वास्थ्य, र केराटोकोनस जस्ता समस्याहरूको अभावमा निर्भर गर्दछ। डा. कौशल पोखरेलले तपाईंको सुरक्षा सुनिश्चित गर्न उन्नत MS-39 र Pentacam निदान प्रयोग गर्नुहुन्छ।' 
  },
  
  'faq.q2.question': { en: 'Is the procedure painful?', np: 'के यो प्रक्रिया पीडादायी छ?' },
  'faq.q2.answer': { 
    en: 'Laser eye surgery is virtually painless. We apply specialized numbing eye drops before the procedure to ensure complete comfort. While you may feel a slight pressure sensation during the 10-second laser application (with VisuMax 800), there is no sharp pain. Most patients describe the experience as quick, comfortable, and life-changing.', 
    np: 'लेजर आँखा शल्यक्रिया लगभग पीडारहित छ। हामी पूर्ण आराम सुनिश्चित गर्न शल्यक्रिया अघि विशेष लठ्याउने थोपा (numbing eye drops) प्रयोग गर्छौं। १० सेकेन्डको लेजर प्रयोग (VisuMax 800 को साथ) को समयमा तपाईंले हल्का दबाब महसुस गर्न सक्नुहुन्छ, तर कुनै तीव्र दुखाइ हुँदैन।' 
  },
  
  'faq.q3.question': { en: 'How long does the recovery take?', np: 'निको हुन कति समय लाग्छ?' },
  'faq.q3.answer': { 
    en: 'Visual recovery after SMILE Pro or Femto-LASIK is remarkably fast, with most patients achieving 20/20 vision within 24 hours. You can typically return to work and normal activities the next day. While minor dryness or halos may occur initially, vision stabilizes completely over a few weeks under Dr. Pokhrel\'s expert post-operative care.', 
    np: 'SMILE Pro वा Femto-LASIK पछि दृष्टि सुधार धेरै छिटो हुन्छ, अधिकांश बिरामीहरूले २४ घण्टा भित्र २०/२० दृष्टि प्राप्त गर्छन्। तपाईं सामान्यतया भोलिपल्टै काम र सामान्य गतिविधिहरूमा फर्कन सक्नुहुन्छ। डा. पोखरेलको विशेषज्ञ हेरचाहमा केही हप्तामा दृष्टि पूर्ण रूपमा स्थिर हुन्छ।' 
  },
  
  'faq.q4.question': { en: 'Are the results permanent?', np: 'के नतिजाहरू स्थायी हुन्छन्?' },
  'faq.q4.answer': { 
    en: 'Yes, laser eye surgery permanently reshapes the cornea to correct your vision. While it doesn\'t prevent age-related changes like presbyopia (reading vision loss later in life), the correction for your current prescription is permanent.', 
    np: 'हो, लेजर आँखा शल्यक्रियाले तपाईंको दृष्टि सुधार गर्न कोर्नियालाई स्थायी रूपमा पुन: आकार दिन्छ। यसले प्रेसबायोपिया (उमेरसँगै आउने नजिकको दृष्टि दोष) जस्ता परिवर्तनहरूलाई रोक्दैन, तर तपाईंको हालको नम्बरको सुधार स्थायी हुन्छ।' 
  },
  
  'faq.q5.question': { en: 'What is the difference between SMILE Pro and LASIK?', np: 'SMILE Pro र LASIK बीच के भिन्नता छ?' },
  'faq.q5.answer': { 
    en: 'SMILE Pro is a flapless, minimally invasive procedure using the VisuMax 800 laser, ideal for active lifestyles and dry eye patients. LASIK involves creating a corneal flap. SMILE Pro preserves more corneal nerve fibers and structural integrity, offering superior stability and a faster return to contact sports compared to traditional LASIK.', 
    np: 'SMILE Pro एक फ्ल्याप नबनाइने, न्यूनतम चिरफारको प्रक्रिया हो जसमा VisuMax 800 लेजर प्रयोग गरिन्छ, जुन सक्रिय जीवनशैली र सुख्खा आँखा भएका बिरामीहरूका लागि उपयुक्त हुन्छ। LASIK मा कोर्नियामा फ्ल्याप बनाइन्छ। SMILE Pro ले कोर्नियाको शक्ति र स्थिरतालाई राम्रोसँग जोगाउँछ।' 
  },

  // --- Resources Page (Blog & FAQs) ---
  'resources.title': { en: 'Resources & FAQs', np: 'स्रोत र प्रश्नहरू' },
  'resources.blog.title': { en: 'Articles & Insights', np: 'लेख र जानकारी' },
  'resources.faq.title': { en: 'Common Questions', np: 'सामान्य प्रश्नहरू' },
  'resources.topics': { en: 'Topics', np: 'विषयहरू' },

  'blog.1.title': { en: 'Understanding Myopia & Hypermetropia', np: 'मायोपिया र हाइपरमेट्रोपिया बुझ्दै' },
  'blog.1.content': { 
    en: 'Myopia (nearsightedness) and Hypermetropia (farsightedness) are common refractive errors. Myopia occurs when the eyeball is too long, causing light to focus in front of the retina. Hypermetropia happens when the eyeball is too short. Laser surgery corrects these by reshaping the cornea.',
    np: 'मायोपिया (नजिकको दृष्टिदोष) र हाइपरमेट्रोपिया (टाढाको दृष्टिदोष) सामान्य दृष्टि समस्याहरू हुन्। जब आँखाको नानी धेरै लामो हुन्छ, प्रकाश रेटिनाको अगाडि केन्द्रित हुन्छ, जसलाई मायोपिया भनिन्छ। हाइपरमेट्रोपियामा आँखाको नानी छोटो हुन्छ। लेजर शल्यक्रियाले कोर्नियालाई पुन: आकार दिएर यी समस्याहरू सुधार गर्दछ।'
  },

  'blog.2.title': { en: 'The Evolution of Laser Eye Surgery', np: 'लेजर आँखा शल्यक्रियाको विकास' },
  'blog.2.content': { 
    en: 'From the early days of PRK to the advanced SMILE Pro technology, laser eye surgery has come a long way. Today, procedures are faster, safer, and more precise than ever before, offering rapid recovery and exceptional visual outcomes.',
    np: 'PRK को प्रारम्भिक दिनदेखि उन्नत SMILE Pro प्रविधिसम्म, लेजर आँखा शल्यक्रियाले लामो यात्रा तय गरेको छ। आज, प्रक्रियाहरू पहिलेभन्दा छिटो, सुरक्षित र अधिक सटीक छन्, जसले द्रुत रिकभरी र असाधारण दृश्य परिणामहरू प्रदान गर्दछ।'
  },

  'blog.3.title': { en: 'Post-Operative Care: What to Expect', np: 'शल्यक्रिया पछिको हेरचाह: के अपेक्षा गर्ने' },
  'blog.3.content': { 
    en: 'Following your surgery, you will receive specific eye drops and instructions. It is crucial to avoid rubbing your eyes and to protect them from dust and water for the first few days. Most patients return to normal activities within 24-48 hours.',
    np: 'तपाईंको शल्यक्रिया पछि, तपाईंले विशेष आँखाको थोपा र निर्देशनहरू प्राप्त गर्नुहुनेछ। आँखा मिच्नु हुँदैन र पहिलो केही दिन धुलो र पानीबाट जोगाउनु महत्त्वपूर्ण छ। अधिकांश बिरामीहरू २४-४८ घण्टा भित्र सामान्य गतिविधिहरूमा फर्कन्छन्।'
  },

  'surgery.targetProfessions.title': { en: 'Who is this surgery for?', np: 'यो शल्यक्रिया कसका लागि हो?' },
  'surgery.targetProfessions.subtitle': { 
    en: 'Ideal vision correction for demanding lifestyles and professions.',
    np: 'चुनौतीपूर्ण जीवनशैली र पेशाहरूका लागि इष्टतम दृष्टि सुधार।'
  },

  'blog.4.title': { en: 'Why Choose SMILE Pro?', np: 'किन SMILE Pro रोज्ने?' },
  'blog.4.content': { 
    en: 'SMILE Pro is the latest advancement in flapless laser vision correction. With a tiny incision and no flap, it preserves corneal strength and significantly reduces the risk of dry eyes, making it perfect for active individuals.',
    np: 'SMILE Pro फ्ल्याप-रहित लेजर दृष्टि सुधारमा पछिल्लो उपलब्धि हो। सानो चीरा र कुनै फ्ल्याप नहुने भएकोले, यसले कोर्नियाको शक्ति जोगाउँछ र सुख्खा आँखाको जोखिमलाई उल्लेखनीय रूपमा कम गर्छ।'
  },

  'faq.safe.q': { en: 'Is laser eye surgery safe?', np: 'के लेजर आँखा शल्यक्रिया सुरक्षित छ?' },
  'faq.safe.a': { 
    en: 'Yes, laser eye surgery is one of the most commonly performed and safest elective procedures in the world. Advanced technology like the VisuMax 800 further enhances safety and precision.',
    np: 'हो, लेजर आँखा शल्यक्रिया विश्वमा सबैभन्दा धेरै गरिने र सुरक्षित प्रक्रियाहरू मध्ये एक हो। VisuMax 800 जस्ता उन्नत प्रविधिले सुरक्षा र सटीकतालाई अझ बढाउँछ।'
  },

  'faq.age.q': { en: 'What is the minimum age for surgery?', np: 'शल्यक्रियाका लागि न्यूनतम उमेर कति हो?' },
  'faq.age.a': { 
    en: 'The minimum age is generally 18 years, provided your vision has been stable for at least 6 months.',
    np: 'न्यूनतम उमेर सामान्यतया १८ वर्ष हो, यदि तपाईंको दृष्टि कम्तिमा ६ महिनासम्म स्थिर छ भने।'
  },

  'faq.cost.q': { en: 'How much does the surgery cost?', np: 'शल्यक्रियाको लागत कति हुन्छ?' },
  'faq.cost.a': { 
    en: 'Costs vary depending on the procedure. SMILE Pro is Rs. 92,000, Femto-LASIK is Rs. 90,000, and PRK is Rs. 70,000 for both eyes. Advanced Cataract surgery starts from Rs. 18,000 per eye.',
    np: 'प्रक्रिया अनुसार लागत फरक हुन्छ। दुबै आँखाको लागि SMILE Pro को ९२,०००, Femto-LASIK को ९०,०००, र PRK को ७०,००० पर्छ। उन्नत मोतियाबिन्दु शल्यक्रिया प्रति आँखा १८,००० बाट सुरु हुन्छ।'
  },

  'faq.fly.q': { en: 'Can I fly after surgery?', np: 'शल्यक्रिया पछि म जहाजमा यात्रा गर्न सक्छु?' },
  'faq.fly.a': { 
    en: 'Yes, most patients can fly within 24-48 hours after surgery. However, it is important to keep your eyes hydrated with lubricating drops during the flight.',
    np: 'हो, अधिकांश बिरामीहरू शल्यक्रियाको २४-४८ घण्टा पछि जहाजमा यात्रा गर्न सक्छन्। यद्यपि, उडानको समयमा लुब्रिकेटिङ ड्रप्सको साथ आँखालाई ओसिलो राख्नु महत्त्वपूर्ण छ।'
  },

  'faq.reading.q': { en: 'Will I need reading glasses later?', np: 'के मलाई पछि पढ्ने चश्मा चाहिन्छ?' },
  'faq.reading.a': { 
    en: 'Laser surgery corrects your current distance vision. As you age, you may still develop presbyopia (age-related reading vision loss), which might require reading glasses or a procedure like Presbyond.',
    np: 'लेजर शल्यक्रियाले तपाईंको हालको टाढाको दृष्टि सुधार गर्दछ। उमेर बढ्दै जाँदा, तपाईंलाई प्रेसबायोपिया (उमेरसँगै आउने नजिकको दृष्टि दोष) हुन सक्छ, जसका लागि पढ्ने चश्मा वा Presbyond जस्तो प्रक्रिया आवश्यक हुन सक्छ।'
  },
  'faq.smile_safety.q': { en: 'Is SMILE Pro safer than LASIK?', np: 'के SMILE Pro, LASIK भन्दा सुरक्षित छ?' },
  'faq.smile_safety.a': { 
    en: 'Both procedures have high safety profiles. SMILE Pro is a flapless procedure, which may be preferred for patients concerned about flap-related issues or those with active lifestyles. LASIK is a well-established method with a long track record of safety and precision. The choice often depends on individual eye characteristics and clinical suitability.',
    np: 'दुबै प्रक्रियाहरूको उच्च सुरक्षा प्रोफाइलहरू छन्। SMILE Pro एक फ्ल्याप-रहित प्रक्रिया हो, जुन फ्ल्याप-सम्बन्धित समस्याहरूको बारेमा चिन्तित बिरामीहरू वा सक्रिय जीवनशैली भएकाहरूका लागि उपयुक्त हुन सक्छ। LASIK सुरक्षा र सटीकताको लामो इतिहास भएको एक स्थापित विधि हो। छनोट प्रायः व्यक्तिगत आँखाको विशेषताहरू र क्लिनिकल उपयुक्ततामा भर पर्छ।'
  },
  'faq.lasik_unsuitable.q': { en: 'Who is not suitable for LASIK?', np: 'LASIK को लागि को उपयुक्त छैन?' },
  'faq.lasik_unsuitable.a': { 
    en: 'LASIK may not be the most suitable option for patients with very thin or irregular corneas, severe dry eye syndrome, or certain underlying medical conditions. In such cases, alternative procedures like SMILE Pro, PRK, or ICL are often considered to ensure the best possible outcome and safety.',
    np: 'धेरै पातलो वा अनियमित कोर्निया, गम्भीर सुख्खा आँखा सिन्ड्रोम, वा केही अन्तर्निहित चिकित्सा अवस्थाहरू भएका बिरामीहरूका लागि LASIK सबैभन्दा उपयुक्त विकल्प नहुन सक्छ। यस्तो अवस्थामा, उत्तम सम्भावित परिणाम र सुरक्षा सुनिश्चित गर्न SMILE Pro, PRK, वा ICL जस्ता वैकल्पिक प्रक्रियाहरू प्रायः विचार गरिन्छ।'
  },
  'faq.smile_replace_lasik.q': { en: 'Can SMILE Pro replace LASIK?', np: 'के SMILE Pro ले LASIK लाई प्रतिस्थापन गर्न सक्छ?' },
  'faq.smile_replace_lasik.a': { 
    en: 'SMILE Pro is a modern alternative to LASIK, but it does not replace it entirely. While SMILE Pro is excellent for correcting myopia and astigmatism, LASIK remains a versatile option that can also address hyperopia (farsightedness). Both procedures continue to be valuable tools in refractive surgery, chosen based on the patient\'s specific vision needs.',
    np: 'SMILE Pro, LASIK को एक आधुनिक विकल्प हो, तर यसले यसलाई पूर्ण रूपमा प्रतिस्थापन गर्दैन। जबकि SMILE Pro अदूरदृष्टि (myopia) र एस्टिग्माटिज्म सुधार गर्नका लागि उत्कृष्ट छ, LASIK एक बहुमुखी विकल्पको रूपमा रहन्छ जसले दूरदृष्टि (hyperopia) लाई पनि सम्बोधन गर्न सक्छ। दुबै प्रक्रियाहरू रिफ्र्याक्टिभ शल्यक्रियामा मूल्यवान उपकरणहरू हुन्, जुन बिरामीको विशिष्ट दृष्टि आवश्यकताहरूको आधारमा छनोट गरिन्छ।'
  },
  'faq.recovery_speed.q': { en: 'Is recovery faster with LASIK or SMILE Pro?', np: 'के LASIK वा SMILE Pro मा निको हुने प्रक्रिया छिटो हुन्छ?' },
  'faq.recovery_speed.a': { 
    en: 'Both procedures typically offer rapid visual recovery, with many patients returning to normal activities within 24 to 48 hours. SMILE Pro may offer a slightly faster return to contact sports or swimming due to its flapless nature, while LASIK patients often notice an almost immediate improvement in clarity.',
    np: 'दुबै प्रक्रियाहरूले सामान्यतया छिटो दृष्टि सुधार प्रदान गर्दछ, धेरै बिरामीहरू २४ देखि ४८ घण्टा भित्र सामान्य गतिविधिहरूमा फर्कन्छन्। SMILE Pro ले यसको फ्ल्याप-रहित प्रकृतिको कारण खेलकुद वा पौडी खेल्नका लागि अलि छिटो फर्कने सुविधा दिन सक्छ, जबकि LASIK बिरामीहरूले प्रायः स्पष्टतामा तुरुन्तै सुधार महसुस गर्छन्।'
  },
  'faq.why_still_lasik.q': { en: 'Why some patients still choose LASIK?', np: 'किन केही बिरामीहरू अझै पनि LASIK रोज्छन्?' },
  'faq.why_still_lasik.a': { 
    en: 'LASIK remains a popular choice because of its extensive clinical history, versatility in treating various refractive errors (including farsightedness), and the high level of predictability in visual outcomes. It is often preferred for patients whose specific eye measurements or vision requirements are better addressed by the excimer laser technology used in LASIK.',
    np: 'LASIK यसको व्यापक क्लिनिकल इतिहास, विभिन्न दृष्टि दोषहरू (दूरदृष्टि सहित) उपचार गर्ने बहुमुखी प्रतिभा, र दृष्टि परिणामहरूमा उच्च स्तरको भविष्यवाणीका कारण लोकप्रिय छनोटको रूपमा रहन्छ। यो प्रायः ती बिरामीहरूका लागि उपयुक्त हुन्छ जसको विशिष्ट आँखाको मापन वा दृष्टि आवश्यकताहरू LASIK मा प्रयोग गरिने एक्साइमर लेजर प्रविधिद्वारा राम्रोसँग सम्बोधन गरिन्छ।'
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = sessionStorage.getItem('language');
    return (saved === 'en' || saved === 'np') ? saved : 'en';
  });

  useEffect(() => {
    sessionStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};