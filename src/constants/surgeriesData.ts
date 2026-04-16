import { SurgeryData, FAQItem } from '../types/surgery';

export const technologyFaqs: Record<'en' | 'np', FAQItem[]> = {
  en: [
    {
      question: 'What is the VisuMax 800?',
      answer: 'It is the latest femtosecond laser from ZEISS, allowing for a 10-second laser application for maximum patient comfort and precision.'
    },
    {
      question: 'What is the MEL 90?',
      answer: 'It is a high-speed excimer laser used for precise corneal reshaping, offering excellent visual outcomes and faster treatment times.'
    },
    {
      question: 'What is the MS-39?',
      answer: 'The MS-39 is the most advanced anterior segment OCT that provides high-resolution cross-sectional images and detailed mapping of the cornea and epithelial thickness.'
    },
    {
      question: 'What is the Pentacam?',
      answer: 'The Pentacam is the gold standard for corneal topography and tomography, providing a 3D model of the anterior eye segment for precise surgical planning.'
    },
    {
      question: 'What is the ATLAS system?',
      answer: 'The ATLAS system is a sophisticated corneal topography system that provides detailed maps of the eye\'s surface, helping to identify subtle irregularities.'
    },
    {
      question: 'Why is pupillometry important?',
      answer: 'Our automated pupillometer measures your pupil size in various lighting conditions to ensure the laser treatment is perfectly centered and optimized for your night vision.'
    },
    {
      question: 'Why do I need dry eye screening?',
      answer: 'We perform comprehensive dry eye evaluations before surgery to ensure your tear film is healthy, which is crucial for optimal healing and visual comfort.'
    },
    {
      question: 'What makes your Operating Room special?',
      answer: 'Our OR is a sterile, climate-controlled environment with advanced air filtration systems, designed to ensure the highest levels of safety and infection control.'
    },
    {
      question: 'What is an LVC Nomogram?',
      answer: 'It is a customized treatment planning software that uses your unique eye data to personalize the laser settings for the most accurate visual results.'
    }
  ],
  np: [
    {
      question: 'VisuMax 800 के हो?',
      answer: 'यो ZEISS बाट पछिल्लो फेम्टोसेकेन्ड लेजर हो, जसले बिरामीको अधिकतम आराम र सटीकताको लागि १० सेकेन्डको लेजर प्रयोग गर्न अनुमति दिन्छ।'
    },
    {
      question: 'MEL 90 के हो?',
      answer: 'यो एक उच्च-गति एक्साइमर लेजर हो जुन सटीक कोर्नियल रिसेपिङको लागि प्रयोग गरिन्छ, जसले उत्कृष्ट दृश्य परिणामहरू र छिटो उपचार समय प्रदान गर्दछ।'
    },
    {
      question: 'MS-39 के हो?',
      answer: 'MS-39 सबैभन्दा उन्नत एन्टेरियर सेगमेन्ट OCT हो जसले कोर्निया र एपिथेलियल मोटाईको उच्च-रिजोल्युसन क्रस-सेक्शनल छविहरू र विस्तृत म्यापिङ प्रदान गर्दछ।'
    },
    {
      question: 'Pentacam के हो?',
      answer: 'Pentacam कोर्नियल टोपोग्राफी र टोमोग्राफीको लागि स्वर्ण मानक हो, जसले सटीक शल्यक्रिया योजनाको लागि आँखाको अगाडिको खण्डको 3D मोडेल प्रदान गर्दछ।'
    },
    {
      question: 'ATLAS प्रणाली के हो?',
      answer: 'ATLAS प्रणाली एक परिष्कृत कोर्नियल टोपोग्राफी प्रणाली हो जसले आँखाको सतहको विस्तृत नक्सा प्रदान गर्दछ, जसले सूक्ष्म अनियमितताहरू पहिचान गर्न मद्दत गर्दछ।'
    },
    {
      question: 'प्युपिलोमेट्री किन महत्त्वपूर्ण छ?',
      answer: 'हाम्रो स्वचालित प्युपिलोमिटरले विभिन्न प्रकाश अवस्थाहरूमा तपाईंको नानीको आकार मापन गर्दछ ताकि लेजर उपचार पूर्ण रूपमा केन्द्रित र तपाईंको रात्रिकालीन दृष्टिको लागि अनुकूलित होस्।'
    },
    {
      question: 'मलाई सुख्खा आँखा स्क्रिनिङ किन चाहिन्छ?',
      answer: 'हामी शल्यक्रिया अघि व्यापक सुख्खा आँखा मूल्याङ्कन गर्छौं ताकि तपाईंको आँसुको तह स्वस्थ छ भन्ने सुनिश्चित गर्न सकियोस्, जुन इष्टतम निको हुने र दृश्य आरामको लागि महत्त्वपूर्ण छ।'
    },
    {
      question: 'तपाईंको अपरेटिङ रूममा के विशेष छ?',
      answer: 'हाम्रो OR उच्च स्तरको सुरक्षा र संक्रमण नियन्त्रण सुनिश्चित गर्न डिजाइन गरिएको उन्नत हावा फिल्टरेशन प्रणालीको साथ एक बाँझ, जलवायु-नियन्त्रित वातावरण हो।'
    },
    {
      question: 'LVC Nomogram के हो?',
      answer: 'यो एक अनुकूलित उपचार योजना सफ्टवेयर हो जसले सबैभन्दा सटीक दृश्य परिणामहरूको लागि लेजर सेटिङहरू निजीकृत गर्न तपाईंको अद्वितीय आँखा डेटा प्रयोग गर्दछ।'
    }
  ]
};

export const surgeriesData: Record<string, { en: SurgeryData; np: SurgeryData }> = {
  'smile-pro': {
    en: {
      id: 'smile-pro',
      slug: 'smile-pro',
      title: 'SMILE Pro Laser Eye Surgery',
      subtitle: 'An advanced, minimally invasive alternative to LASIK for selected patients.',
      videoUrl: 'https://www.youtube.com/embed/1oJFShANMTc',
      videoCaption: 'Watch how SMILE Pro provides a seamless, flapless vision correction experience.',
      benefits: {
        title: 'Benefits and Important Considerations',
        description: 'Flapless, minimally invasive procedure with a tiny 2-4mm incision. Faster recovery and less risk of dry eyes compared to traditional methods.'
      },
      idealCandidate: {
        title: 'Who Is This Surgery For?',
        description: 'Often considered by patients with active lifestyles or occupational needs where flap-based surgery may not be preferred.'
      },
      advantage: {
        title: 'How the Procedure Works (Clinically Explained)',
        description: 'SMILE Pro involves creating and removing a small lenticule within the cornea using a femtosecond laser, without creating a large flap.'
      },
      technology: [
        {
          name: 'VisuMax 800',
          description: 'The latest femtosecond laser from ZEISS, allowing for a 10-second laser application for maximum patient comfort.',
          icon: 'Zap'
        }
      ],
      timeline: [
        { time: '2 Hours', description: 'Initial rest period to allow the eye to settle.' },
        { time: '24 Hours', description: 'Most patients can return to driving and work.' },
        { time: '1 Week', description: 'Basic outdoor activities, indoor sports and gym can be started.' },
        { time: '1 Month', description: 'Functional visual recovery achieved. Safe to resume swimming.' },
        { time: '3 Months', description: 'Full visual stability and complete wound healing.' }
      ],
      timelineNote: 'Recovery varies from person to person and depends on individual healing response.',
      comparison: {
        title: 'How it differs',
        description: 'Unlike LASIK, SMILE Pro is flapless, meaning no risk of flap complications and significantly less impact on corneal nerves.',
        table: {
          headers: ['Feature', 'SMILE Pro', 'LASIK', 'PRK'],
          rows: [
            {
              label: 'Procedure',
              values: ['Minimally invasive, flapless (2-4mm incision)', 'Laser-created flap (20mm incision)', 'Surface treatment, no flap or incision']
            },
            {
              label: 'Recovery',
              values: ['Fastest (return to work in 24h)', 'Fast (return to work in 24-48h)', 'Moderate (3-5 days for initial healing)']
            },
            {
              label: 'Ideal Candidates',
              values: ['Active lifestyles, athletes, dry eye concerns', 'Wide range of prescriptions', 'Thin corneas, high-impact sports']
            }
          ]
        }
      },
      investment: {
        title: 'Value & Investment',
        description: 'A lifetime of clear vision is an investment in your quality of life. Contact us for a personalized consultation and pricing.'
      },
      clinicalDetails: [
        {
          title: 'Centration Control (VISUMAX 800)',
          description: 'Advanced eye-tracking and centration control ensure the laser is perfectly aligned with your visual axis, even with minor eye movements.'
        },
        {
          title: 'ORA Compensation',
          description: 'Ocular Residual Astigmatism (ORA) compensation optimizes the treatment profile for superior visual quality beyond standard prescriptions.'
        },
        {
          title: 'Lenticule Optimization',
          description: 'Precise lenticule thickness and edge design minimize corneal nerve disruption, significantly reducing post-operative dry eye symptoms.'
        }
      ],
      targetProfessions: ['Military', 'Police', 'Pilots', 'Surgeons', 'Athletes', 'Trekkers'],
      cost: {
        title: 'Cost of SMILE Pro Surgery',
        eligibilityScan: 3500,
        surgeryCost: 92000,
      },
      faqs: [
        {
          question: 'Is SMILE Pro better than LASIK?',
          answer: 'No single procedure is best for everyone. SMILE Pro is an advanced alternative that is flapless and minimally invasive, making it excellent for patients with active lifestyles or dry eye concerns. The best choice depends on your individual eye anatomy and visual needs.'
        },
        {
          question: 'Who should not have this procedure?',
          answer: 'SMILE Pro may not be suitable for patients with very thin corneas, certain corneal irregularities, or those with specific types of farsightedness. A detailed clinical evaluation is necessary to determine suitability.'
        },
        {
          question: 'How is this different from LASIK?',
          answer: 'Unlike LASIK, which creates a 20mm circular flap, SMILE Pro uses a laser to create a small lenticule inside the cornea which is removed through a tiny 2-4mm incision. This preserves more corneal stability and reduces the risk of dry eyes.'
        },
        {
          question: 'How does the surgeon decide?',
          answer: 'The decision is based on a comprehensive eye exam, including corneal mapping (topography), corneal thickness measurement (pachymetry), and an assessment of your lifestyle and visual requirements.'
        }
      ],
      seo: {
        title: 'SMILE PRO Kathmandu | Flapless Laser Eye Surgery Nepal',
        description: 'Get SMILE PRO laser eye surgery in Kathmandu with Dr. Kaushal Pokhrel. The future of flapless vision correction.',
        keywords: ['SMILE PRO Kathmandu', 'Laser Eye Surgery Nepal', 'Flapless Vision Correction']
      }
    },
    np: {
      id: 'smile-pro',
      slug: 'smile-pro',
      title: 'SMILE Pro लेजर आँखाको शल्यक्रिया',
      subtitle: 'चयन गरिएका बिरामीहरूका लागि LASIK को एक उन्नत, न्यूनतम आक्रामक विकल्प।',
      videoUrl: 'https://www.youtube.com/embed/1oJFShANMTc',
      videoCaption: 'SMILE Pro ले कसरी सहज र फ्ल्यापलेस दृष्टि सुधारको अनुभव प्रदान गर्दछ हेर्नुहोस्।',
      benefits: {
        title: 'फाइदाहरू र महत्त्वपूर्ण विचारहरू',
        description: 'सानो २-४ मिमी चीराको साथ फ्ल्यापलेस, न्यूनतम आक्रामक प्रक्रिया। परम्परागत विधिहरूको तुलनामा छिटो रिकभरी र सुख्खा आँखाको कम जोखिम।'
      },
      idealCandidate: {
        title: 'यो शल्यक्रिया कसका लागि हो?',
        description: 'अक्सर सक्रिय जीवनशैली वा पेशागत आवश्यकताहरू भएका बिरामीहरूद्वारा विचार गरिन्छ जहाँ फ्ल्याप-आधारित शल्यक्रियालाई प्राथमिकता दिइँदैन।'
      },
      advantage: {
        title: 'प्रक्रियाले कसरी काम गर्छ (क्लिनिकल व्याख्या)',
        description: 'SMILE Pro मा ठूलो फ्ल्याप नबनाई फेम्टोसेकेन्ड लेजर प्रयोग गरेर कोर्निया भित्र सानो लेन्टिकल बनाएर निकालिन्छ।'
      },
      technology: [
        {
          name: 'VisuMax 800',
          description: 'ZEISS बाट पछिल्लो फेम्टोसेकेन्ड लेजर, जसले बिरामीको अधिकतम आरामको लागि १० सेकेन्डको लेजर प्रयोग गर्न अनुमति दिन्छ।',
          icon: 'Zap'
        }
      ],
      timeline: [
        { time: '२ घण्टा', description: 'आँखालाई स्थिर हुन दिन प्रारम्भिक आराम अवधि।' },
        { time: '२४ घण्टा', description: 'अधिकांश बिरामीहरू ड्राइभिङ र काममा फर्कन सक्छन्।' },
        { time: '१ हप्ता', description: 'आधारभूत बाहिरी गतिविधिहरू, भित्री खेलकुद र जिम सुरु गर्न सकिन्छ।' },
        { time: '१ महिना', description: 'कार्यात्मक दृश्य रिकभरी प्राप्त। पौडी खेल्न सुरक्षित।' },
        { time: '३ महिना', description: 'पूर्ण दृश्य स्थिरता र पूर्ण घाउ निको हुने समय।' }
      ],
      timelineNote: 'निको हुने प्रक्रिया व्यक्ति अनुसार फरक हुन सक्छ र व्यक्तिगत निको हुने प्रतिक्रियामा भर पर्छ।',
      comparison: {
        title: 'यो कसरी फरक छ',
        description: 'LASIK को विपरीत, SMILE Pro फ्ल्यापलेस छ, जसको अर्थ फ्ल्याप जटिलताहरूको कुनै जोखिम हुँदैन र कोर्नियल नसाहरूमा उल्लेखनीय रूपमा कम प्रभाव पर्छ।',
        table: {
          headers: ['विशेषता', 'SMILE Pro', 'LASIK', 'PRK'],
          rows: [
            {
              label: 'प्रक्रिया',
              values: ['न्यूनतम आक्रामक, फ्ल्यापलेस (२-४ मिमी चीरा)', 'लेजर-निर्मित फ्ल्याप (२० मिमी चीरा)', 'सतह उपचार, कुनै फ्ल्याप वा चीरा छैन']
            },
            {
              label: 'रिकभरी',
              values: ['सबैभन्दा छिटो (२४ घण्टामा काममा फर्कन सकिने)', 'छिटो (२४-४८ घण्टामा काममा फर्कन सकिने)', 'मध्यम (प्रारम्भिक निको हुन ३-५ दिन)']
            },
            {
              label: 'आदर्श उम्मेद्वार',
              values: ['सक्रिय जीवनशैली, एथलीटहरू, सुख्खा आँखाको समस्या', 'प्रिस्क्रिप्शनको विस्तृत दायरा', 'पातलो कोर्निया, उच्च-प्रभाव खेलकुद']
            }
          ]
        }
      },
      investment: {
        title: 'मूल्य र लगानी',
        description: 'स्पष्ट दृष्टिको जीवनभरको अनुभव तपाईंको जीवनको गुणस्तरमा एक लगानी हो। व्यक्तिगत परामर्श र मूल्य निर्धारणको लागि हामीलाई सम्पर्क गर्नुहोस्।'
      },
      targetProfessions: ['सेना', 'प्रहरी', 'पाइलट', 'सर्जन', 'एथलीट', 'ट्रेकर'],
      cost: {
        title: 'SMILE Pro शल्यक्रियाको लागत',
        eligibilityScan: 3500,
        surgeryCost: 92000,
      },
      faqs: [
        {
          question: 'के SMILE Pro LASIK भन्दा राम्रो छ?',
          answer: 'कुनै पनि एकल प्रक्रिया सबैका लागि उत्तम हुँदैन। SMILE Pro एक उन्नत विकल्प हो जुन फ्ल्यापलेस र न्यूनतम आक्रामक छ, जसले यसलाई सक्रिय जीवनशैली वा सुख्खा आँखाको समस्या भएका बिरामीहरूका लागि उत्कृष्ट बनाउँछ। उत्तम छनौट तपाईंको व्यक्तिगत आँखाको संरचना र दृश्य आवश्यकताहरूमा भर पर्छ।'
        },
        {
          question: 'यो प्रक्रिया कसले गराउनु हुँदैन?',
          answer: 'धेरै पातलो कोर्निया, निश्चित कोर्नियल अनियमितता भएका बिरामीहरूका लागि SMILE Pro उपयुक्त नहुन सक्छ। उपयुक्तता निर्धारण गर्न विस्तृत क्लिनिकल मूल्याङ्कन आवश्यक छ।'
        },
        {
          question: 'यो LASIK भन्दा कसरी फरक छ?',
          answer: '२० मिमी गोलाकार फ्ल्याप बनाउने LASIK को विपरीत, SMILE Pro ले कोर्निया भित्र सानो लेन्टिकल बनाउन लेजरको प्रयोग गर्दछ जुन सानो २-४ मिमी चीरा मार्फत निकालिन्छ। यसले कोर्नियल स्थिरता बढी सुरक्षित राख्छ र सुख्खा आँखाको जोखिम कम गर्छ।'
        },
        {
          question: 'सर्जनले कसरी निर्णय गर्नुहुन्छ?',
          answer: 'निर्णय कोर्नियल म्यापिङ (टोपोग्राफी), कोर्नियल मोटाई मापन (प्याकिमेट्री), र तपाईंको जीवनशैली र दृश्य आवश्यकताहरूको मूल्याङ्कन सहित व्यापक आँखा परीक्षणमा आधारित हुन्छ।'
        }
      ],
      seo: {
        title: 'SMILE PRO काठमाडौं | फ्ल्यापलेस लेजर आँखाको शल्यक्रिया नेपाल',
        description: 'डा. कौशल पोखरेलसँग काठमाडौंमा SMILE PRO लेजर आँखाको शल्यक्रिया गराउनुहोस्। फ्ल्यापलेस दृष्टि सुधारको भविष्य।',
        keywords: ['SMILE PRO काठमाडौं', 'लेजर आँखाको शल्यक्रिया नेपाल', 'फ्ल्यापलेस दृष्टि सुधार']
      }
    }
  },
  'femto-lasik': {
    en: {
      id: 'femto-lasik',
      slug: 'femto-lasik',
      title: 'Femto-LASIK Laser Eye Surgery',
      subtitle: 'The most widely known laser eye surgery for vision correction, now completely blade-free.',
      videoUrl: 'https://www.youtube.com/embed/t80CNT5KK90',
      videoCaption: 'Learn about the precision and safety of the blade-free Femto-LASIK procedure.',
      benefits: {
        title: 'Benefits and Important Considerations',
        description: 'Blade-free flap creation, highly predictable results, and rapid visual recovery within hours.'
      },
      idealCandidate: {
        title: 'Who Is This Surgery For?',
        description: 'Suitable for many patients with stable vision and adequate corneal thickness who seek a fast return to daily activities.'
      },
      advantage: {
        title: 'How the Procedure Works (Clinically Explained)',
        description: 'Femto-LASIK involves creating a thin corneal flap using a femtosecond laser, followed by reshaping the underlying tissue with an excimer laser.'
      },
      technology: [
        {
          name: 'MEL 90 + VisuMax 800',
          description: 'The synergy of two world-class lasers for precise flap creation and corneal reshaping.',
          icon: 'Zap'
        }
      ],
      timeline: [
        { time: '4 Hours', description: 'Rest with eyes closed to promote initial healing.' },
        { time: '24 Hours', description: 'Significant visual improvement; return to most activities.' },
        { time: '1 Week', description: 'Basic outdoor activities, indoor sports and gym can be started.' },
        { time: '1 Month', description: 'Functional visual recovery achieved. Safe to resume swimming.' },
        { time: '3 Months', description: 'Full visual stability and complete wound healing.' }
      ],
      timelineNote: 'Recovery varies from person to person and depends on individual healing response.',
      comparison: {
        title: 'How it differs',
        description: 'Femto-LASIK uses a laser to create the corneal flap, offering higher safety compared to traditional microkeratome (blade) LASIK.',
        table: {
          headers: ['Feature', 'Femto-LASIK', 'Traditional LASIK', 'PRK'],
          rows: [
            {
              label: 'Procedure',
              values: ['Laser-created flap (blade-free)', 'Microkeratome-created flap (blade)', 'Surface treatment, no flap']
            },
            {
              label: 'Recovery',
              values: ['Fast (24-48 hours)', 'Fast (24-48 hours)', 'Moderate (3-5 days)']
            },
            {
              label: 'Ideal Candidates',
              values: ['Wide range of prescriptions', 'Standard prescriptions', 'Thin corneas']
            }
          ]
        }
      },
      investment: {
        title: 'Value & Investment',
        description: 'Freedom from glasses and contacts is a life-changing decision. We offer transparent pricing and flexible options.'
      },
      clinicalDetails: [
        {
          title: 'Iris Registration',
          description: 'Automated iris recognition compensates for cyclotorsion (eye rotation when lying down), ensuring astigmatism is corrected at the exact intended axis.'
        },
        {
          title: 'Wavefront-Guided Ablation',
          description: 'Customized treatment based on your unique "optical fingerprint" to reduce higher-order aberrations like halos and glare.'
        },
        {
          title: 'Flap Thickness Control',
          description: 'Femtosecond laser creates a uniform, predictable flap thickness, preserving more structural integrity than traditional microkeratomes.'
        }
      ],
      targetProfessions: ['Pilots', 'Surgeons', 'Presbyopic People', 'Office Professionals', 'Medical Professionals'],
      cost: {
        title: 'Cost of Femto-LASIK Surgery',
        eligibilityScan: 3500,
        surgeryCost: 90000,
      },
      faqs: [
        {
          question: 'Is Femto-LASIK better than other procedures?',
          answer: 'No single procedure is best for everyone. Femto-LASIK is the gold standard for many due to its rapid recovery and high predictability, but alternatives like SMILE Pro or PRK may be better depending on your corneal thickness and lifestyle.'
        },
        {
          question: 'Who should not have this procedure?',
          answer: 'Patients with very thin corneas, severe dry eye, or certain corneal diseases may not be suitable for LASIK. A detailed evaluation is required.'
        },
        {
          question: 'How is this different from SMILE Pro?',
          answer: 'LASIK creates a circular flap to access the inner cornea, while SMILE Pro is flapless and uses a small incision. LASIK can treat a wider range of farsightedness compared to current SMILE technology.'
        },
        {
          question: 'How does the surgeon decide?',
          answer: 'The surgeon evaluates your corneal thickness, curvature, prescription stability, and lifestyle needs to recommend the safest and most effective option.'
        },
        {
          question: 'Is Femto-LASIK completely blade-free?',
          answer: 'Yes, Femto-LASIK uses a femtosecond laser to create the corneal flap, eliminating the need for a mechanical blade (microkeratome) and enhancing safety.'
        }
      ],
      seo: {
        title: 'Femto-LASIK Kathmandu | Blade-free LASIK Nepal',
        description: 'Advanced Femto-LASIK surgery in Kathmandu by Dr. Kaushal Pokhrel. Safe, precise, and blade-free vision correction.',
        keywords: ['Femto-LASIK Kathmandu', 'LASIK Kathmandu', 'Blade-free LASIK Nepal', 'LASIK Nepal', 'Laser Eye Surgery']
      }
    },
    np: {
      id: 'femto-lasik',
      slug: 'femto-lasik',
      title: 'Femto-LASIK लेजर आँखाको शल्यक्रिया',
      subtitle: 'दृष्टि सुधारको लागि सबैभन्दा व्यापक रूपमा चिनिएको लेजर आँखाको शल्यक्रिया, अब पूर्ण रूपमा ब्लेड-रहित।',
      videoUrl: 'https://www.youtube.com/embed/t80CNT5KK90',
      videoCaption: 'ब्लेड-रहित Femto-LASIK प्रक्रियाको सटीकता र सुरक्षाको बारेमा जान्नुहोस्।',
      benefits: {
        title: 'फाइदाहरू र महत्त्वपूर्ण विचारहरू',
        description: 'ब्लेड-रहित फ्ल्याप निर्माण, अत्यधिक अनुमानित परिणामहरू, र केही घण्टा भित्र द्रुत दृश्य रिकभरी।'
      },
      idealCandidate: {
        title: 'यो शल्यक्रिया कसका लागि हो?',
        description: 'स्थिर दृष्टि र पर्याप्त कोर्नियल मोटाई भएका धेरै बिरामीहरूका लागि उपयुक्त जो दैनिक गतिविधिहरूमा छिटो फर्कन चाहन्छन्।'
      },
      advantage: {
        title: 'प्रक्रियाले कसरी काम गर्छ (क्लिनिकल व्याख्या)',
        description: 'Femto-LASIK मा फेम्टोसेकेन्ड लेजर प्रयोग गरेर पातलो कोर्नियल फ्ल्याप बनाइन्छ, त्यसपछि एक्साइमर लेजरले भित्री तन्तुलाई पुन: आकार दिइन्छ।'
      },
      technology: [
        {
          name: 'MEL 90 + VisuMax 800',
          description: 'सटीक फ्ल्याप निर्माण र कोर्नियल रिसेपिङका लागि दुई विश्व-स्तरीय लेजरहरूको समन्वय।',
          icon: 'Zap'
        }
      ],
      timeline: [
        { time: '४ घण्टा', description: 'प्रारम्भिक निको हुन मद्दत गर्न आँखा चिम्लेर आराम गर्नुहोस्।' },
        { time: '२४ घण्टा', description: 'महत्त्वपूर्ण दृश्य सुधार; अधिकांश गतिविधिहरूमा फर्कनुहोस्।' },
        { time: '१ हप्ता', description: 'आधारभूत बाहिरी गतिविधिहरू, भित्री खेलकुद र जिम सुरु गर्न सकिन्छ।' },
        { time: '१ महिना', description: 'कार्यात्मक दृश्य रिकभरी प्राप्त। पौडी खेल्न सुरक्षित।' },
        { time: '३ महिना', description: 'पूर्ण दृश्य स्थिरता र पूर्ण घाउ निको हुने समय।' }
      ],
      timelineNote: 'निको हुने प्रक्रिया व्यक्ति अनुसार फरक हुन सक्छ र व्यक्तिगत निको हुने प्रतिक्रियामा भर पर्छ।',
      comparison: {
        title: 'यो कसरी फरक छ',
        description: 'Femto-LASIK ले कोर्नियल फ्ल्याप बनाउन लेजरको प्रयोग गर्दछ, जसले परम्परागत माइक्रोकेराटोम (ब्लेड) LASIK को तुलनामा उच्च सुरक्षा प्रदान गर्दछ।',
        table: {
          headers: ['विशेषता', 'Femto-LASIK', 'परम्परागत LASIK', 'PRK'],
          rows: [
            {
              label: 'प्रक्रिया',
              values: ['लेजर-निर्मित फ्ल्याप (ब्लेड-रहित)', 'माइक्रोकेराटोम-निर्मित फ्ल्याप (ब्लेड)', 'सतह उपचार, कुनै फ्ल्याप छैन']
            },
            {
              label: 'रिकभरी',
              values: ['छिटो (२४-४८ घण्टा)', 'छिटो (२४-४८ घण्टा)', 'मध्यम (३-५ दिन)']
            },
            {
              label: 'आदर्श उम्मेद्वार',
              values: ['प्रिस्क्रिप्शनको विस्तृत दायरा', 'मानक प्रिस्क्रिप्शन', 'पातलो कोर्निया']
            }
          ]
        }
      },
      investment: {
        title: 'मूल्य र लगानी',
        description: 'चश्मा र कन्ट्याक्ट लेन्सबाट मुक्ति जीवन परिवर्तन गर्ने निर्णय हो। हामी पारदर्शी मूल्य निर्धारण र लचिलो विकल्पहरू प्रदान गर्दछौं।'
      },
      targetProfessions: ['पाइलट', 'सर्जन', 'प्रेसबायोपिक व्यक्तिहरू', 'कार्यालय पेशेवर', 'चिकित्सा पेशेवर'],
      cost: {
        title: 'Femto-LASIK शल्यक्रियाको लागत',
        eligibilityScan: 3500,
        surgeryCost: 90000,
      },
      faqs: [
        {
          question: 'के Femto-LASIK अन्य प्रक्रियाहरू भन्दा राम्रो छ?',
          answer: 'कुनै पनि एकल प्रक्रिया सबैका लागि उत्तम हुँदैन। Femto-LASIK यसको द्रुत रिकभरी र उच्च अनुमानितताका कारण धेरैका लागि स्वर्ण मानक हो, तर तपाईंको कोर्नियल मोटाई र जीवनशैलीको आधारमा SMILE Pro वा PRK जस्ता विकल्पहरू राम्रो हुन सक्छन्।'
        },
        {
          question: 'यो प्रक्रिया कसले गराउनु हुँदैन?',
          answer: 'धेरै पातलो कोर्निया, गम्भीर सुख्खा आँखा, वा निश्चित कोर्नियल रोग भएका बिरामीहरू LASIK का लागि उपयुक्त नहुन सक्छन्। विस्तृत मूल्याङ्कन आवश्यक छ।'
        },
        {
          question: 'यो SMILE Pro भन्दा कसरी फरक छ?',
          answer: 'LASIK ले भित्री कोर्नियामा पुग्न गोलाकार फ्ल्याप बनाउँछ, जबकि SMILE Pro फ्ल्यापलेस हुन्छ र सानो चीरा प्रयोग गर्दछ। LASIK ले वर्तमान SMILE प्रविधिको तुलनामा दूरदृष्टिको फराकिलो दायरा उपचार गर्न सक्छ।'
        },
        {
          question: 'सर्जनले कसरी निर्णय गर्नुहुन्छ?',
          answer: 'सर्जनले तपाईंको कोर्नियल मोटाई, वक्रता, प्रिस्क्रिप्शन स्थिरता, र जीवनशैली आवश्यकताहरूको मूल्याङ्कन गरी तपाईंको लागि सबैभन्दा सुरक्षित र प्रभावकारी विकल्प सिफारिस गर्नुहुन्छ।'
        },
        {
          question: 'के Femto-LASIK पूर्ण रूपमा ब्लेड-रहित छ?',
          answer: 'हो, Femto-LASIK ले कोर्नियल फ्ल्याप बनाउन फेम्टोसेकेन्ड लेजरको प्रयोग गर्दछ, जसले मेकानिकल ब्लेडको आवश्यकतालाई हटाउँछ र सुरक्षा बढाउँछ।'
        }
      ],
      seo: {
        title: 'Femto-LASIK काठमाडौं | ब्लेड-रहित LASIK नेपाल',
        description: 'डा. कौशल पोखरेलद्वारा काठमाडौंमा उन्नत फेम्टो-लासिक शल्यक्रिया। सुरक्षित, सटीक र ब्लेड-रहित दृष्टि सुधार।',
        keywords: ['Femto-LASIK काठमाडौं', 'LASIK काठमाडौं', 'ब्लेड-रहित LASIK नेपाल', 'LASIK नेपाल', 'लेजर आँखाको शल्यक्रिया']
      }
    }
  },
  'prk': {
    en: {
      id: 'prk',
      slug: 'prk',
      title: 'PRK Laser Eye Surgery',
      subtitle: 'A surface-based laser procedure suitable when LASIK or SMILE is not advised.',
      videoUrl: 'https://www.youtube.com/embed/1Pjh4ja1lH0',
      videoCaption: 'Discover how PRK offers a safe alternative for surface-based vision correction.',
      benefits: {
        title: 'Benefits and Important Considerations',
        description: 'No corneal flap created, preserving maximum corneal structural integrity. Ideal for high-impact activities.'
      },
      idealCandidate: {
        title: 'Who Is This Surgery For?',
        description: 'Patients with thin corneas, dry eye concerns, or those in professions like the military or contact sports where a flap is not recommended.'
      },
      advantage: {
        title: 'How the Procedure Works (Clinically Explained)',
        description: 'PRK involves removing the outer layer of the cornea (epithelium) and using an excimer laser to reshape the underlying tissue directly on the surface.'
      },
      technology: [
        {
          name: 'MEL 90',
          description: 'High-speed excimer laser for precise surface reshaping and excellent visual outcomes.',
          icon: 'Zap'
        }
      ],
      timeline: [
        { time: '1-3 Days', description: 'Epithelial healing period; rest in dim light recommended.' },
        { time: '1 Week', description: 'Vision begins to clear. Basic outdoor activities, indoor sports and gym can be started.' },
        { time: '1 Month', description: 'Functional visual recovery achieved. Safe to resume swimming.' },
        { time: '3 Months', description: 'Full visual stability and complete wound healing.' }
      ],
      timelineNote: 'Recovery varies from person to person and depends on individual healing response.',
      comparison: {
        title: 'How it differs',
        description: 'Unlike LASIK, PRK does not involve a flap. The laser is applied directly to the surface after removing the outer layer (epithelium).',
        table: {
          headers: ['Feature', 'PRK', 'LASIK', 'SMILE Pro'],
          rows: [
            {
              label: 'Procedure',
              values: ['Surface ablation, no flap', 'Corneal flap creation', 'Small incision, flapless']
            },
            {
              label: 'Recovery',
              values: ['Moderate (3-5 days initial)', 'Fast (24-48 hours)', 'Fastest (24h)']
            },
            {
              label: 'Ideal Candidates',
              values: ['Thin corneas, high-impact sports', 'General vision correction', 'Active lifestyles']
            }
          ]
        }
      },
      investment: {
        title: 'Value & Investment',
        description: 'Safety and long-term stability are the hallmarks of PRK. We provide comprehensive pre and post-operative care.'
      },
      targetProfessions: ['Military', 'Police', 'Pilots', 'Surgeons', 'Athletes', 'Trekkers'],
      cost: {
        title: 'Cost of PRK Surgery',
        eligibilityScan: 3500,
        surgeryCost: 70000,
      },
      faqs: [
        {
          question: 'Is PRK better than LASIK?',
          answer: 'No single procedure is best for everyone. PRK is often preferred for patients with thin corneas or those in high-impact professions (like military or boxing) because it avoids the creation of a corneal flap, preserving more structural integrity.'
        },
        {
          question: 'Who should not have this procedure?',
          answer: 'PRK may not be suitable for patients with certain autoimmune diseases, uncontrolled diabetes, or very high refractive errors that exceed safe surface treatment limits.'
        },
        {
          question: 'How is this different from LASIK?',
          answer: 'LASIK creates a flap to treat the inner cornea, while PRK treats the surface directly after removing the epithelium. PRK has a longer initial recovery period but avoids all flap-related risks.'
        },
        {
          question: 'How does the surgeon decide?',
          answer: 'The surgeon considers your corneal thickness, lifestyle (especially risk of eye trauma), and the health of your eye surface to determine if PRK is the safest option for you.'
        }
      ],
      seo: {
        title: 'PRK Surgery Kathmandu | Surface Laser Eye Surgery Nepal',
        description: 'PRK laser eye surgery in Kathmandu with Dr. Kaushal Pokhrel. Best option for thin corneas and active lifestyles.',
        keywords: ['PRK Surgery Kathmandu', 'Surface Laser Nepal', 'No Flap Eye Surgery']
      }
    },
    np: {
      id: 'prk',
      slug: 'prk',
      title: 'PRK लेजर आँखाको शल्यक्रिया',
      subtitle: 'LASIK वा SMILE सिफारिस नगरिएको अवस्थामा उपयुक्त सतह-आधारित लेजर प्रक्रिया।',
      videoUrl: 'https://www.youtube.com/embed/1Pjh4ja1lH0',
      videoCaption: 'PRK ले कसरी सतह-आधारित दृष्टि सुधारको लागि सुरक्षित विकल्प प्रदान गर्दछ पत्ता लगाउनुहोस्।',
      benefits: {
        title: 'फाइदाहरू र महत्त्वपूर्ण विचारहरू',
        description: 'कुनै कोर्नियल फ्ल्याप बनाइँदैन, जसले अधिकतम कोर्नियल संरचनात्मक अखण्डता कायम राख्छ। उच्च-प्रभाव गतिविधिहरूको लागि आदर्श।'
      },
      idealCandidate: {
        title: 'यो शल्यक्रिया कसका लागि हो?',
        description: 'पातलो कोर्निया, सुख्खा आँखाको समस्या भएका बिरामीहरू, वा सेना वा सम्पर्क खेलकुद जस्ता पेशामा संलग्न व्यक्तिहरू जहाँ फ्ल्याप सिफारिस गरिँदैन।'
      },
      advantage: {
        title: 'प्रक्रियाले कसरी काम गर्छ (क्लिनिकल व्याख्या)',
        description: 'PRK मा कोर्नियाको बाहिरी तह (एपिथेलियम) हटाएर एक्साइमर लेजरले भित्री तन्तुलाई सिधै सतहमा पुन: आकार दिइन्छ।'
      },
      technology: [
        {
          name: 'MEL 90',
          description: 'सटीक सतह रिसेपिङ र उत्कृष्ट दृश्य परिणामहरूको लागि उच्च-गति एक्साइमर लेजर।',
          icon: 'Zap'
        }
      ],
      timeline: [
        { time: '१-३ दिन', description: 'एपिथेलियल निको हुने अवधि; मधुरो प्रकाशमा आराम गर्न सिफारिस गरिन्छ।' },
        { time: '१ हप्ता', description: 'दृष्टि स्पष्ट हुन थाल्छ। आधारभूत बाहिरी गतिविधिहरू, भित्री खेलकुद र जिम सुरु गर्न सकिन्छ।' },
        { time: '१ महिना', description: 'कार्यात्मक दृश्य रिकभरी प्राप्त। पौडी खेल्न सुरक्षित।' },
        { time: '३ महिना', description: 'पूर्ण दृश्य स्थिरता र पूर्ण घाउ निको हुने समय।' }
      ],
      timelineNote: 'निको हुने प्रक्रिया व्यक्ति अनुसार फरक हुन सक्छ र व्यक्तिगत निको हुने प्रतिक्रियामा भर पर्छ।',
      comparison: {
        title: 'यो कसरी फरक छ',
        description: 'LASIK को विपरीत, PRK मा फ्ल्याप समावेश हुँदैन। बाहिरी तह (एपिथेलियम) हटाएपछि लेजर सिधै सतहमा प्रयोग गरिन्छ।',
        table: {
          headers: ['विशेषता', 'PRK', 'LASIK', 'SMILE Pro'],
          rows: [
            {
              label: 'प्रक्रिया',
              values: ['सतह एब्लेसन, कुनै फ्ल्याप छैन', 'कोर्नियल फ्ल्याप निर्माण', 'सानो चीरा, फ्ल्यापलेस']
            },
            {
              label: 'रिकभरी',
              values: ['मध्यम (प्रारम्भिक ३-५ दिन)', 'छिटो (२४-४८ घण्टा)', 'सबैभन्दा छिटो (२४ घण्टा)']
            },
            {
              label: 'आदर्श उम्मेद्वार',
              values: ['पातलो कोर्निया, उच्च-प्रभाव खेलकुद', 'सामान्य दृष्टि सुधार', 'सक्रिय जीवनशैली']
            }
          ]
        }
      },
      investment: {
        title: 'मूल्य र लगानी',
        description: 'सुरक्षा र दीर्घकालीन स्थिरता PRK का विशेषताहरू हुन्। हामी व्यापक पूर्व र शल्यक्रिया पछिको हेरचाह प्रदान गर्दछौं।'
      },
      targetProfessions: ['सेना', 'प्रहरी', 'पाइलट', 'सर्जन', 'एथलीट', 'ट्रेकर'],
      cost: {
        title: 'PRK शल्यक्रियाको लागत',
        eligibilityScan: 3500,
        surgeryCost: 70000,
      },
      faqs: [
        {
          question: 'के PRK LASIK भन्दा राम्रो छ?',
          answer: 'कुनै पनि एकल प्रक्रिया सबैका लागि उत्तम हुँदैन। PRK अक्सर पातलो कोर्निया भएका बिरामीहरू वा उच्च-प्रभाव पेशाहरू (जस्तै सेना वा बक्सिङ) मा संलग्न व्यक्तिहरूको लागि सिफारिस गरिन्छ किनभने यसले कोर्नियल फ्ल्याप बनाउनबाट बचाउँछ र संरचनात्मक अखण्डता बढी सुरक्षित राख्छ।'
        },
        {
          question: 'यो प्रक्रिया कसले गराउनु हुँदैन?',
          answer: 'PRK निश्चित अटोइम्यून रोगहरू, अनियन्त्रित मधुमेह, वा धेरै उच्च रिफ्र्याक्टिभ त्रुटिहरू भएका बिरामीहरूका लागि उपयुक्त नहुन सक्छ जुन सुरक्षित सतह उपचार सीमा भन्दा बढी हुन्छ।'
        },
        {
          question: 'यो LASIK भन्दा कसरी फरक छ?',
          answer: 'LASIK ले भित्री कोर्नियाको उपचार गर्न फ्ल्याप बनाउँछ, जबकि PRK ले एपिथेलियम हटाएपछि सिधै सतहको उपचार गर्छ। PRK को प्रारम्भिक रिकभरी अवधि लामो हुन्छ तर यसले फ्ल्याप सम्बन्धी सबै जोखिमहरू हटाउँछ।'
        },
        {
          question: 'सर्जनले कसरी निर्णय गर्नुहुन्छ?',
          answer: 'सर्जनले तपाईंको कोर्नियल मोटाई, जीवनशैली (विशेष गरी आँखामा चोट लाग्ने जोखिम), र तपाईंको आँखाको सतहको स्वास्थ्यलाई ध्यानमा राखेर PRK तपाईंको लागि सुरक्षित विकल्प हो कि होइन भनेर निर्धारण गर्नुहुन्छ।'
        }
      ],
      seo: {
        title: 'PRK शल्यक्रिया काठमाडौं | सतह लेजर आँखाको शल्यक्रिया नेपाल',
        description: 'डा. कौशल पोखरेलसँग काठमाडौंमा PRK लेजर आँखाको शल्यक्रिया। पातलो कोर्निया र सक्रिय जीवनशैलीको लागि उत्तम विकल्प।',
        keywords: ['PRK शल्यक्रिया काठमाडौं', 'सतह लेजर नेपाल', 'नो फ्ल्याप आँखाको शल्यक्रिया']
      }
    }
  },
  'presbyond': {
    en: {
      id: 'presbyond',
      slug: 'presbyond',
      title: 'Presbyond Laser Blended Vision',
      subtitle: 'Laser vision correction designed to reduce dependence on reading glasses.',
      videoUrl: 'https://www.youtube.com/embed/FMQSRh0o3po',
      videoCaption: 'See how Presbyond restores natural reading vision for those over 40.',
      benefits: {
        title: 'Benefits and Important Considerations',
        description: 'Reduces or eliminates the need for reading glasses. Provides a continuous range of vision from near to far.'
      },
      idealCandidate: {
        title: 'Who Is This Surgery For?',
        description: 'Individuals aged 40-65 experiencing presbyopia who want to restore their natural range of vision and reduce dependence on reading glasses.'
      },
      advantage: {
        title: 'How the Procedure Works (Clinically Explained)',
        description: 'Presbyond uses a sophisticated laser profile to create a "blended zone", allowing one eye to see primarily far and the other primarily near, with both eyes working together for intermediate vision.'
      },
      targetProfessions: ['Senior Pilots', 'Surgeons', 'Photographers', 'Active Retirees'],
      technology: [
        {
          name: 'MEL 90',
          description: 'Advanced laser technology optimized for Laser Blended Vision profiles.',
          icon: 'Zap'
        }
      ],
      timeline: [
        { time: '24 Hours', description: 'Initial visual improvement; most can read without glasses.' },
        { time: '1 Week', description: 'Brain begins to adapt to the blended vision. Basic outdoor activities, indoor sports and gym can be started.' },
        { time: '1 Month', description: 'Functional visual recovery achieved. Safe to resume swimming.' },
        { time: '3-6 Months', description: 'Full visual stability, neuro-adaptation and complete healing.' }
      ],
      timelineNote: 'Recovery varies from person to person and depends on individual healing response.',
      comparison: {
        title: 'How it differs',
        description: 'Unlike standard monovision, Presbyond creates a blended zone that allows for better intermediate vision and depth perception.',
        table: {
          headers: ['Feature', 'Presbyond', 'Standard Monovision', 'Reading Glasses'],
          rows: [
            {
              label: 'Procedure',
              values: ['Laser Blended Vision', 'One eye for near, one for far', 'External optical aid']
            },
            {
              label: 'Recovery',
              values: ['Fast (24-48 hours)', 'Moderate (brain adaptation)', 'Immediate']
            },
            {
              label: 'Ideal Candidates',
              values: ['Aged 40-65, presbyopia', 'Aged 40+, presbyopia', 'Anyone with presbyopia']
            }
          ]
        }
      },
      investment: {
        title: 'Value & Investment',
        description: 'Investing in your independence from reading glasses is an investment in your daily convenience and joy.'
      },
      cost: {
        title: 'Cost of Presbyond Surgery',
        surgeryCost: 0,
        notStarted: true,
      },
      faqs: [
        {
          question: 'Is Presbyond better than LASIK?',
          answer: 'Presbyond is actually a specialized form of LASIK (or PRK) designed specifically for presbyopia. While standard LASIK corrects distance vision, Presbyond corrects both distance and near vision by creating a blended focal zone.'
        },
        {
          question: 'Who should not have this procedure?',
          answer: 'Patients with significant cataracts, certain retinal conditions, or those who cannot adapt to monovision-like setups may not be ideal candidates.'
        },
        {
          question: 'How is this different from LASIK?',
          answer: 'Standard LASIK aims for perfect distance vision in both eyes. Presbyond offsets the focus slightly in each eye to provide a depth of field that covers near, intermediate, and far distances.'
        },
        {
          question: 'How does the surgeon decide?',
          answer: 'Suitability is determined through a "tolerance test" where we simulate the blended vision with lenses, alongside a full clinical eye exam.'
        }
      ],
      seo: {
        title: 'Presbyond Kathmandu | Reading Glasses Removal Nepal',
        description: 'Presbyond Laser Blended Vision in Kathmandu by Dr. Kaushal Pokhrel. Say goodbye to reading glasses after 40.',
        keywords: ['Presbyond Kathmandu', 'Reading Glasses Removal', 'Laser Blended Vision']
      }
    },
    np: {
      id: 'presbyond',
      slug: 'presbyond',
      title: 'Presbyond लेजर ब्लेन्डेड भिजन',
      subtitle: 'पढ्ने चश्मामाथिको निर्भरता कम गर्न डिजाइन गरिएको लेजर दृष्टि सुधार।',
      videoUrl: 'https://www.youtube.com/embed/FMQSRh0o3po',
      videoCaption: 'Presbyond ले ४० वर्षभन्दा माथिका व्यक्तिहरूको लागि कसरी प्राकृतिक पढ्ने दृष्टि पुनर्स्थापित गर्दछ हेर्नुहोस्।',
      benefits: {
        title: 'फाइदाहरू र महत्त्वपूर्ण विचारहरू',
        description: 'पढ्ने चश्माको आवश्यकतालाई कम गर्छ वा हटाउँछ। नजिकदेखि टाढासम्म दृष्टिको निरन्तर दायरा प्रदान गर्दछ।'
      },
      idealCandidate: {
        title: 'यो शल्यक्रिया कसका लागि हो?',
        description: '४०-६५ वर्षका प्रेसबायोपिया अनुभव गरिरहेका व्यक्तिहरू जो आफ्नो दृष्टिको प्राकृतिक दायरा पुनर्स्थापित गर्न र पढ्ने चश्मामाथिको निर्भरता कम गर्न चाहन्छन्।'
      },
      advantage: {
        title: 'प्रक्रियाले कसरी काम गर्छ (क्लिनिकल व्याख्या)',
        description: 'Presbyond ले एक परिष्कृत लेजर प्रोफाइल प्रयोग गरेर "ब्लेन्डेड जोन" सिर्जना गर्दछ, जसले एउटा आँखालाई मुख्य रूपमा टाढा र अर्कोलाई मुख्य रूपमा नजिक देख्न अनुमति दिन्छ, दुबै आँखाले मध्यवर्ती दृष्टिको लागि मिलेर काम गर्दछ।'
      },
      targetProfessions: ['वरिष्ठ पाइलट', 'सर्जन', 'फोटोग्राफर', 'सक्रिय सेवानिवृत्त'],
      technology: [
        {
          name: 'MEL 90',
          description: 'लेजर ब्लेन्डेड भिजन प्रोफाइलहरूको लागि अनुकूलित उन्नत लेजर प्रविधि।',
          icon: 'Zap'
        }
      ],
      timeline: [
        { time: '२४ घण्टा', description: 'प्रारम्भिक दृश्य सुधार; अधिकांशले चश्मा बिना पढ्न सक्छन्।' },
        { time: '१ हप्ता', description: 'मस्तिष्कले ब्लेन्डेड भिजनमा अनुकूलन गर्न थाल्छ। आधारभूत बाहिरी गतिविधिहरू, भित्री खेलकुद र जिम सुरु गर्न सकिन्छ।' },
        { time: '१ महिना', description: 'कार्यात्मक दृश्य रिकभरी प्राप्त। पौडी खेल्न सुरक्षित।' },
        { time: '३-६ महिना', description: 'पूर्ण दृश्य स्थिरता, न्यूरो-अनुकूलन र पूर्ण निको हुने समय।' }
      ],
      timelineNote: 'निको हुने प्रक्रिया व्यक्ति अनुसार फरक हुन सक्छ र व्यक्तिगत निको हुने प्रतिक्रियामा भर पर्छ।',
      comparison: {
        title: 'यो कसरी फरक छ',
        description: 'मानक मोनोभिजनको विपरीत, Presbyond ले एक ब्लेन्डेड जोन सिर्जना गर्दछ जसले राम्रो मध्यवर्ती दृष्टि र गहिराइ धारणाको लागि अनुमति दिन्छ।',
        table: {
          headers: ['विशेषता', 'Presbyond', 'मानक मोनोभिजन', 'पढ्ने चश्मा'],
          rows: [
            {
              label: 'प्रक्रिया',
              values: ['लेजर ब्लेन्डेड भिजन', 'एउटा आँखा नजिकको लागि, एउटा टाढाको लागि', 'बाहिरी अप्टिकल सहायता']
            },
            {
              label: 'रिकभरी',
              values: ['छिटो (२४-४८ घण्टा)', 'मध्यम (मस्तिष्क अनुकूलन)', 'तुरुन्तै']
            },
            {
              label: 'आदर्श उम्मेद्वार',
              values: ['४०-६५ वर्ष, प्रेसबायोपिया', '४०+ वर्ष, प्रेसबायोपिया', 'प्रेसबायोपिया भएका जो कोही']
            }
          ]
        }
      },
      investment: {
        title: 'मूल्य र लगानी',
        description: 'पढ्ने चश्माबाट आफ्नो स्वतन्त्रतामा लगानी गर्नु तपाईंको दैनिक सुविधा र आनन्दमा लगानी हो।'
      },
      cost: {
        title: 'Presbyond शल्यक्रियाको लागत',
        surgeryCost: 0,
        notStarted: true,
      },
      faqs: [
        {
          question: 'के Presbyond LASIK भन्दा राम्रो छ?',
          answer: 'Presbyond वास्तवमा प्रेसबायोपियाका लागि डिजाइन गरिएको LASIK (वा PRK) को एक विशेष रूप हो। मानक LASIK ले टाढाको दृष्टि सुधार गर्छ भने, Presbyond ले ब्लेन्डेड फोकल जोन सिर्जना गरेर टाढा र नजिक दुबैको दृष्टि सुधार गर्छ।'
        },
        {
          question: 'यो प्रक्रिया कसले गराउनु हुँदैन?',
          answer: 'मोतियाबिन्दु भएका बिरामीहरू, निश्चित रेटिनल अवस्थाहरू भएका, वा मोनोभिजन जस्तो सेटअपमा अनुकूलन गर्न नसक्नेहरूका लागि यो उपयुक्त नहुन सक्छ।'
        },
        {
          question: 'यो LASIK भन्दा कसरी फरक छ?',
          answer: 'मानक LASIK ले दुबै आँखामा पूर्ण टाढाको दृष्टिको लक्ष्य राख्छ। Presbyond ले प्रत्येक आँखामा फोकसलाई थोरै परिवर्तन गर्छ ताकि नजिक, मध्यवर्ती र टाढाको दूरी कभर गर्ने दृष्टिको गहिराइ प्रदान गर्न सकियोस्।'
        },
        {
          question: 'सर्जनले कसरी निर्णय गर्नुहुन्छ?',
          answer: 'उपयुक्तता "टोलरेन्स टेस्ट" मार्फत निर्धारण गरिन्छ जहाँ हामी लेन्सको साथ ब्लेन्डेड भिजनको सिमुलेशन गर्छौं, साथै पूर्ण क्लिनिकल आँखा परीक्षण गरिन्छ।'
        }
      ],
      seo: {
        title: 'Presbyond काठमाडौं | पढ्ने चश्मा हटाउने नेपाल',
        description: 'डा. कौशल पोखरेलद्वारा काठमाडौंमा Presbyond लेजर ब्लेन्डेड भिजन। ४० वर्षपछि पढ्ने चश्मालाई बिदाइ गर्नुहोस्।',
        keywords: ['Presbyond काठमाडौं', 'पढ्ने चश्मा हटाउने', 'लेजर ब्लेन्डेड भिजन']
      }
    }
  },
  'icl-ipcl': {
    en: {
      id: 'icl-ipcl',
      slug: 'icl-ipcl',
      title: 'ICL / IPCL Phakic Lens Implantation',
      subtitle: 'A lens-based vision correction option when laser surgery is not suitable.',
      videoUrl: 'https://www.youtube.com/embed/A35Rxqk83VA',
      videoCaption: 'Explore the benefits of reversible ICL/IPCL lens implantation.',
      benefits: {
        title: 'Benefits and Important Considerations',
        description: 'Reversible procedure, preserves natural accommodation, and provides high-definition vision even for extreme prescriptions.'
      },
      idealCandidate: {
        title: 'Who Is This Surgery For?',
        description: 'An option for patients with high refractive error (high myopia) or thin corneas who are not suited for laser eye surgery.'
      },
      advantage: {
        title: 'How the Procedure Works (Clinically Explained)',
        description: 'ICL/IPCL involves placing a biocompatible lens inside the eye, behind the iris and in front of the natural lens, to correct vision without removing corneal tissue.'
      },
      technology: [
        {
          name: 'ICL / IPCL Lenses',
          description: 'Biocompatible Collamer lenses designed to work in harmony with your eye\'s natural chemistry.',
          icon: 'Eye'
        }
      ],
      timeline: [
        { time: '2 Hours', description: 'Post-operative observation to ensure proper lens placement.' },
        { time: '24 Hours', description: 'Clear vision achieved; return to work and light activities.' },
        { time: '1 Week', description: 'Safe to resume gym and more active lifestyle.' },
        { time: '1 Month', description: 'Complete freedom and visual stability.' }
      ],
      timelineNote: 'Recovery varies from person to person and depends on individual healing response.',
      comparison: {
        title: 'How it differs',
        description: 'Unlike laser surgery which reshapes the cornea, ICL/IPCL adds a lens inside the eye, making it a reversible option.',
        table: {
          headers: ['Feature', 'ICL / IPCL', 'LASIK', 'PRK'],
          rows: [
            {
              label: 'Procedure',
              values: ['Implantable lens (reversible)', 'Corneal reshaping (permanent)', 'Surface reshaping (permanent)']
            },
            {
              label: 'Recovery',
              values: ['Fast (24 hours)', 'Fast (24-48 hours)', 'Moderate (3-5 days)']
            },
            {
              label: 'Ideal Candidates',
              values: ['High myopia, thin corneas', 'Moderate myopia', 'Thin corneas']
            }
          ]
        }
      },
      investment: {
        title: 'Value & Investment',
        description: 'Premium lens technology offers a lifetime of high-definition vision. Contact us for detailed investment information.'
      },
      clinicalDetails: [
        {
          title: 'Vault Management',
          description: 'Precise measurement of the "vault" (space between ICL and natural lens) ensures long-term safety and prevents cataract formation.'
        },
        {
          title: 'OVD Removal Protocol',
          description: 'Meticulous removal of Ophthalmic Viscosurgical Devices (OVD) post-implantation prevents temporary pressure spikes and ensures immediate clarity.'
        },
        {
          title: 'OCT-Based Sizing',
          description: 'Utilizing high-resolution Anterior Segment OCT for precise measurement of the posterior chamber, ensuring a perfect fit for the ICL.'
        }
      ],
      targetProfessions: ['High Prescription Patients', 'Pilots', 'Surgeons', 'Trekkers'],
      cost: {
        title: 'Cost of ICL / IPCL Surgery',
        surgeryCost: 120000,
        isPerEye: true,
        isStartingAt: true,
      },
      faqs: [
        {
          question: 'Is ICL better than LASIK?',
          answer: 'No single procedure is best for everyone. ICL is often preferred for very high prescriptions or thin corneas where LASIK is unsafe. It provides exceptional visual quality and is reversible, unlike laser procedures.'
        },
        {
          question: 'Who should not have this procedure?',
          answer: 'Patients with shallow anterior chambers, certain types of glaucoma, or unhealthy corneal endothelium may not be candidates for ICL.'
        },
        {
          question: 'How is this different from LASIK?',
          answer: 'LASIK reshapes your cornea with a laser. ICL adds a corrective lens inside your eye, leaving the cornea untouched. This makes ICL reversible if necessary.'
        },
        {
          question: 'How does the surgeon decide?',
          answer: 'The surgeon measures the internal dimensions of your eye (ACD and White-to-White) and evaluates your corneal health to ensure there is enough space for the lens.'
        }
      ],
      seo: {
        title: 'ICL Surgery Kathmandu | Implantable Collamer Lens Nepal',
        description: 'ICL and IPCL lens surgery in Kathmandu with Dr. Kaushal Pokhrel. Best for high prescriptions and thin corneas.',
        keywords: ['ICL Surgery Kathmandu', 'Implantable Lens Nepal', 'IPCL Surgery']
      }
    },
    np: {
      id: 'icl-ipcl',
      slug: 'icl-ipcl',
      title: 'ICL / IPCL फ्याकिक लेन्स प्रत्यारोपण',
      subtitle: 'लेजर शल्यक्रिया उपयुक्त नभएको अवस्थामा लेन्स-आधारित दृष्टि सुधार विकल्प।',
      videoUrl: 'https://www.youtube.com/embed/A35Rxqk83VA',
      videoCaption: 'उल्ट्याउन सकिने ICL/IPCL लेन्स प्रत्यारोपणका फाइदाहरू अन्वेषण गर्नुहोस्।',
      benefits: {
        title: 'फाइदाहरू र महत्त्वपूर्ण विचारहरू',
        description: 'उल्ट्याउन सकिने प्रक्रिया, प्राकृतिक आवास सुरक्षित गर्दछ, र अत्यधिक प्रिस्क्रिप्शनका लागि पनि उच्च-परिभाषा दृष्टि प्रदान गर्दछ।'
      },
      idealCandidate: {
        title: 'यो शल्यक्रिया कसका लागि हो?',
        description: 'उच्च रिफ्र्याक्टिभ त्रुटि (उच्च मायोपिया) वा पातलो कोर्निया भएका बिरामीहरूका लागि एक विकल्प जो लेजर आँखाको शल्यक्रियाका लागि उपयुक्त छैनन्।'
      },
      advantage: {
        title: 'प्रक्रियाले कसरी काम गर्छ (क्लिनिकल व्याख्या)',
        description: 'ICL/IPCL मा कोर्नियल तन्तु नहटाई दृष्टि सुधार गर्न आइरिसको पछाडि र प्राकृतिक लेन्सको अगाडि आँखा भित्र बायोकम्प्याटिबल लेन्स राखिन्छ।'
      },
      technology: [
        {
          name: 'ICL / IPCL लेन्सहरू',
          description: 'तपाईंको आँखाको प्राकृतिक रसायनसँग सामंजस्यपूर्ण रूपमा काम गर्न डिजाइन गरिएको बायोकम्प्याटिबल कोलामर लेन्सहरू।',
          icon: 'Eye'
        }
      ],
      timeline: [
        { time: '२ घण्टा', description: 'उचित लेन्स प्लेसमेन्ट सुनिश्चित गर्न शल्यक्रिया पछिको अवलोकन।' },
        { time: '२४ घण्टा', description: 'स्पष्ट दृष्टि प्राप्त; काम र हल्का गतिविधिहरूमा फर्कनुहोस्।' },
        { time: '१ हप्ता', description: 'जिम र अधिक सक्रिय जीवनशैली पुनः सुरु गर्न सुरक्षित।' },
        { time: '१ महिना', description: 'पूर्ण स्वतन्त्रता र दृश्य स्थिरता।' }
      ],
      timelineNote: 'निको हुने प्रक्रिया व्यक्ति अनुसार फरक हुन सक्छ र व्यक्तिगत निको हुने प्रतिक्रियामा भर पर्छ।',
      comparison: {
        title: 'यो कसरी फरक छ',
        description: 'कोर्नियालाई पुन: आकार दिने लेजर शल्यक्रियाको विपरीत, ICL/IPCL ले आँखा भित्र लेन्स थप्छ, जसले यसलाई उल्ट्याउन सकिने विकल्प बनाउँछ।',
        table: {
          headers: ['विशेषता', 'ICL / IPCL', 'LASIK', 'PRK'],
          rows: [
            {
              label: 'प्रक्रिया',
              values: ['इम्प्लान्टेबल लेन्स (उल्ट्याउन सकिने)', 'कोर्नियल रिसेपिङ (स्थायी)', 'सतह रिसेपिङ (स्थायी)']
            },
            {
              label: 'रिकभरी',
              values: ['छिटो (२४ घण्टा)', 'छिटो (२४-४८ घण्टा)', 'मध्यम (३-५ दिन)']
            },
            {
              label: 'आदर्श उम्मेद्वार',
              values: ['उच्च मायोपिया, पातलो कोर्निया', 'मध्यम मायोपिया', 'पातलो कोर्निया']
            }
          ]
        }
      },
      investment: {
        title: 'मूल्य र लगानी',
        description: 'प्रिमियम लेन्स प्रविधिले उच्च-परिभाषा दृष्टिको जीवनभरको अनुभव प्रदान गर्दछ। विस्तृत लगानी जानकारीको लागि हामीलाई सम्पर्क गर्नुहोस्।'
      },
      clinicalDetails: [
        {
          title: 'भोल्ट व्यवस्थापन (Vault Management)',
          description: 'ICL र प्राकृतिक लेन्स बीचको खाली ठाउँ (vault) को सटीक मापनले दीर्घकालीन सुरक्षा सुनिश्चित गर्दछ र मोतियाबिन्दु हुनबाट बचाउँछ।'
        },
        {
          title: 'OVD हटाउने प्रोटोकल',
          description: 'प्रत्यारोपण पछि Ophthalmic Viscosurgical Devices (OVD) लाई सावधानीपूर्वक हटाउनाले अस्थायी दबाब बढ्नबाट रोक्छ र तुरुन्तै स्पष्टता सुनिश्चित गर्दछ।'
        },
        {
          title: 'OCT-आधारित साइजिंग',
          description: 'ICL को लागि उपयुक्त फिट सुनिश्चित गर्न पोस्टरियर चेम्बरको सटीक मापनको लागि उच्च-रिजोल्युसन एन्टेरियर सेगमेन्ट OCT को प्रयोग।'
        }
      ],
      targetProfessions: ['उच्च प्रिस्क्रिप्शन बिरामीहरू', 'पाइलट', 'सर्जन', 'ट्रेकर'],
      cost: {
        title: 'ICL / IPCL शल्यक्रियाको लागत',
        surgeryCost: 120000,
        isPerEye: true,
        isStartingAt: true,
      },
      faqs: [
        {
          question: 'के ICL LASIK भन्दा राम्रो छ?',
          answer: 'कुनै पनि एकल प्रक्रिया सबैका लागि उत्तम हुँदैन। ICL अक्सर धेरै उच्च प्रिस्क्रिप्शन वा पातलो कोर्नियाका लागि प्राथमिकता दिइन्छ जहाँ LASIK असुरक्षित हुन्छ। यसले असाधारण दृश्य गुणस्तर प्रदान गर्दछ र लेजर प्रक्रियाहरू जस्तो नभई यो उल्ट्याउन सकिन्छ।'
        },
        {
          question: 'यो प्रक्रिया कसले गराउनु हुँदैन?',
          answer: 'उथलो एन्टेरियर चेम्बर, निश्चित प्रकारका ग्लुकोमा, वा अस्वस्थ कोर्नियल एन्डोथेलियम भएका बिरामीहरू ICL का लागि उम्मेद्वार नहुन सक्छन्।'
        },
        {
          question: 'यो LASIK भन्दा कसरी फरक छ?',
          answer: 'LASIK ले लेजरको सहायताले तपाईंको कोर्नियालाई पुन: आकार दिन्छ। ICL ले तपाईंको कोर्नियालाई नछोई आँखा भित्र सुधारात्मक लेन्स थप्छ। यसले आवश्यक परेमा ICL लाई उल्ट्याउन सकिने बनाउँछ।'
        },
        {
          question: 'सर्जनले कसरी निर्णय गर्नुहुन्छ?',
          answer: 'सर्जनले तपाईंको आँखाको आन्तरिक आयामहरू (ACD र White-to-White) मापन गर्नुहुन्छ र लेन्सको लागि पर्याप्त ठाउँ छ भन्ने सुनिश्चित गर्न तपाईंको कोर्नियल स्वास्थ्यको मूल्याङ्कन गर्नुहुन्छ।'
        }
      ],
      seo: {
        title: 'ICL शल्यक्रिया काठमाडौं | इम्प्लान्टेबल कोलामर लेन्स नेपाल',
        description: 'डा. कौशल पोखरेलसँग काठमाडौंमा ICL र IPCL लेन्स शल्यक्रिया। उच्च प्रिस्क्रिप्शन र पातलो कोर्नियाको लागि उत्तम।',
        keywords: ['ICL शल्यक्रिया काठमाडौं', 'इम्प्लान्टेबल लेन्स नेपाल', 'IPCL शल्यक्रिया']
      }
    }
  },
  'cle-cataract': {
    en: {
      id: 'cle-cataract',
      slug: 'cle-cataract',
      title: 'Advanced Cataract Surgery / CLE',
      subtitle: 'Permanent lens replacement to restore clarity and eliminate the need for cataract surgery in the future.',
      videoUrl: 'https://www.youtube.com/embed/YXOWjOhLrQg',
      videoCaption: 'Understand how CLE and Cataract surgery provide lifetime visual clarity.',
      benefits: {
        title: 'Key Benefits',
        description: 'Permanent solution, eliminates cataracts, and premium IOL options can provide freedom from glasses for all distances.'
      },
      idealCandidate: {
        title: 'Ideal Candidate',
        description: 'Patients with cataracts or those over 50 seeking a permanent alternative to reading glasses and distance correction.'
      },
      advantage: {
        title: 'Why choose us?',
        description: 'Meticulous selection of premium IOLs (Trifocal/EDOF) to match your specific visual needs and lifestyle.'
      },
      technology: [
        {
          name: 'Premium IOLs',
          description: 'Advanced intraocular lenses including Trifocal and EDOF options for a full range of vision.',
          icon: 'Eye'
        }
      ],
      timeline: [
        { time: '24 Hours', description: 'Significant improvement in clarity and color perception.' },
        { time: '1 Week', description: 'Most activities can be resumed; eyes begin to stabilize.' },
        { time: '1 Month', description: 'Final visual outcome achieved; new lenses fully settled.' },
        { time: 'Lifetime', description: 'Enjoy permanent clarity without the risk of future cataracts.' }
      ],
      comparison: {
        title: 'How it differs',
        description: 'CLE is essentially cataract surgery performed before a cataract develops, providing permanent vision correction.',
        table: {
          headers: ['Feature', 'CLE / Cataract', 'Laser Eye Surgery', 'Reading Glasses'],
          rows: [
            {
              label: 'Procedure',
              values: ['Lens replacement (permanent)', 'Corneal reshaping', 'External aid']
            },
            {
              label: 'Recovery',
              values: ['Fast (24-48 hours)', 'Fast (24-48 hours)', 'Immediate']
            },
            {
              label: 'Ideal Candidates',
              values: ['Cataracts, aged 50+', 'Aged 20-45', 'Aged 40+']
            }
          ]
        }
      },
      investment: {
        title: 'Value & Investment',
        description: 'A lifetime of clear vision is an invaluable asset. We offer the latest in lens technology and surgical precision.'
      },
      clinicalDetails: [
        {
          title: 'Micro-Incision Surgery',
          description: 'Using sub-2mm incisions for faster healing, less astigmatism, and minimal post-operative discomfort.'
        },
        {
          title: 'Premium IOL Selection',
          description: 'Customized selection of Trifocal or EDOF lenses to provide a full range of vision, reducing or eliminating the need for glasses.'
        }
      ],
      targetProfessions: ['Senior Professionals', 'Active Seniors', 'Trekkers'],
      cost: {
        title: 'Latest Official Cost',
        surgeryCost: 18000,
        isStartingAt: true,
        isPerEye: true,
      },
      faqs: [
        {
          question: 'Is cataract surgery a permanent solution?',
          answer: 'Yes, once the natural cloudy lens is replaced with an artificial intraocular lens (IOL), it is permanent and cannot develop another cataract.'
        },
        {
          question: 'What are premium IOLs (Trifocal/EDOF)?',
          answer: 'Premium IOLs are advanced lenses that can provide a full range of vision (near, intermediate, and far), often eliminating the need for glasses after surgery.'
        }
      ],
      seo: {
        title: 'Cataract Surgery Kathmandu | Premium IOL Nepal',
        description: 'Advanced cataract and CLE surgery in Kathmandu by Dr. Kaushal Pokhrel. Premium Trifocal and EDOF IOL options.',
        keywords: ['Cataract Surgery Kathmandu', 'Premium IOL Nepal', 'CLE Surgery']
      }
    },
    np: {
      id: 'cle-cataract',
      slug: 'cle-cataract',
      title: 'उन्नत मोतियाबिन्दु शल्यक्रिया / CLE',
      subtitle: 'स्पष्टता पुनर्स्थापित गर्न र भविष्यमा मोतियाबिन्दु शल्यक्रियाको आवश्यकतालाई हटाउन स्थायी लेन्स प्रतिस्थापन।',
      videoUrl: 'https://www.youtube.com/embed/YXOWjOhLrQg',
      videoCaption: 'CLE र मोतियाबिन्दु शल्यक्रियाले कसरी जीवनभर दृश्य स्पष्टता प्रदान गर्दछ बुझ्नुहोस्।',
      benefits: {
        title: 'मुख्य फाइदाहरू',
        description: 'स्थायी समाधान, मोतियाबिन्दु हटाउँछ, र प्रिमियम IOL विकल्पहरूले सबै दूरीका लागि चश्माबाट स्वतन्त्रता प्रदान गर्न सक्छन्।'
      },
      idealCandidate: {
        title: 'आदर्श उम्मेद्वार',
        description: 'मोतियाबिन्दु भएका बिरामीहरू वा ५० वर्षभन्दा माथिका व्यक्तिहरू जो पढ्ने चश्मा र दूरी सुधारको स्थायी विकल्प खोजिरहेका छन्।'
      },
      advantage: {
        title: 'हामीलाई किन रोज्ने?',
        description: 'तपाईंको विशेष दृश्य आवश्यकता र जीवनशैलीसँग मेल खाने प्रिमियम IOL हरू (Trifocal/EDOF) को सावधानीपूर्वक चयन।'
      },
      technology: [
        {
          name: 'प्रिमियम IOL हरू',
          description: 'दृष्टिको पूर्ण दायराका लागि Trifocal र EDOF विकल्पहरू सहित उन्नत इन्ट्राओकुलर लेन्सहरू।',
          icon: 'Eye'
        }
      ],
      timeline: [
        { time: '२४ घण्टा', description: 'स्पष्टता र रंग धारणामा महत्त्वपूर्ण सुधार।' },
        { time: '१ हप्ता', description: 'अधिकांश गतिविधिहरू पुनः सुरु गर्न सकिन्छ; आँखा स्थिर हुन थाल्छ।' },
        { time: '१ महिना', description: 'अन्तिम दृश्य परिणाम प्राप्त; नयाँ लेन्सहरू पूर्ण रूपमा सेट हुन्छन्।' },
        { time: 'जीवनभर', description: 'भविष्यमा मोतियाबिन्दुको जोखिम बिना स्थायी स्पष्टताको आनन्द लिनुहोस्।' }
      ],
      comparison: {
        title: 'यो कसरी फरक छ',
        description: 'CLE मूलतः मोतियाबिन्दु विकसित हुनु अघि गरिने मोतियाबिन्दु शल्यक्रिया हो, जसले स्थायी दृष्टि सुधार प्रदान गर्दछ।',
        table: {
          headers: ['विशेषता', 'CLE / मोतियाबिन्दु', 'लेजर आँखाको शल्यक्रिया', 'पढ्ने चश्मा'],
          rows: [
            {
              label: 'प्रक्रिया',
              values: ['लेन्स प्रतिस्थापन (स्थायी)', 'कोर्नियल रिसेपिङ', 'बाहिरी सहायता']
            },
            {
              label: 'रिकभरी',
              values: ['छिटो (२४-४८ घण्टा)', 'छिटो (२४-४८ घण्टा)', 'तुरुन्तै']
            },
            {
              label: 'आदर्श उम्मेद्वार',
              values: ['मोतियाबिन्दु, ५०+ वर्ष', '२०-४५ वर्ष', '४०+ वर्ष']
            }
          ]
        }
      },
      investment: {
        title: 'मूल्य र लगानी',
        description: 'स्पष्ट दृष्टिको जीवनभरको अनुभव एक अमूल्य सम्पत्ति हो। हामी लेन्स प्रविधि र शल्यक्रिया सटीकतामा पछिल्लो सेवा प्रदान गर्दछौं।'
      },
      clinicalDetails: [
        {
          title: 'माइक्रो-इन्सिजन शल्यक्रिया',
          description: 'छिटो निको हुन, कम एस्टिग्माटिज्म, र शल्यक्रिया पछि न्यूनतम असुविधाको लागि २ मिमी भन्दा कम चीराको प्रयोग।'
        },
        {
          title: 'प्रिमियम IOL चयन',
          description: 'दृष्टिको पूर्ण दायरा प्रदान गर्न Trifocal वा EDOF लेन्सहरूको अनुकूलित चयन, जसले चश्माको आवश्यकतालाई कम वा हटाउँछ।'
        }
      ],
      targetProfessions: ['वरिष्ठ पेशेवर', 'सक्रिय वृद्धहरू', 'ट्रेकर'],
      cost: {
        title: 'पछिल्लो आधिकारिक लागत',
        surgeryCost: 18000,
        isStartingAt: true,
        isPerEye: true,
      },
      faqs: [
        {
          question: 'के मोतियाबिन्दु शल्यक्रिया स्थायी समाधान हो?',
          answer: 'हो, एक पटक प्राकृतिक धमिलो लेन्सलाई कृत्रिम इन्ट्राओकुलर लेन्स (IOL) ले प्रतिस्थापन गरेपछि, यो स्थायी हुन्छ र अर्को मोतियाबिन्दु विकसित हुन सक्दैन।'
        },
        {
          question: 'प्रिमियम IOL हरू (Trifocal/EDOF) के हुन्?',
          answer: 'प्रिमियम IOL हरू उन्नत लेन्सहरू हुन् जसले दृष्टिको पूर्ण दायरा (नजिक, मध्यवर्ती, र टाढा) प्रदान गर्न सक्छन्, जसले अक्सर शल्यक्रिया पछि चश्माको आवश्यकतालाई हटाउँछ।'
        }
      ],
      seo: {
        title: 'मोतियाबिन्दु शल्यक्रिया काठमाडौं | प्रिमियम IOL नेपाल',
        description: 'डा. कौशल पोखरेलद्वारा काठमाडौंमा उन्नत मोतियाबिन्दु र CLE शल्यक्रिया। प्रिमियम Trifocal र EDOF IOL विकल्पहरू।',
        keywords: ['मोतियाबिन्दु शल्यक्रिया काठमाडौं', 'प्रिमियम IOL नेपाल', 'CLE शल्यक्रिया']
      }
    }
  }
};
