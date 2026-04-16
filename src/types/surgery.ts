export interface TimelineStage {
  time: string;
  description: string;
}

export interface Technology {
  name: string;
  description: string;
  icon: string; // lucide icon name
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SurgeryData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  videoCaption?: string;
  benefits: {
    title: string;
    description: string;
  };
  idealCandidate: {
    title: string;
    description: string;
  };
  advantage: {
    title: string;
    description: string;
  };
  technology: Technology[];
  timeline: TimelineStage[];
  timelineNote?: string;
  comparison: {
    title: string;
    description: string;
    table?: {
      headers: string[];
      rows: {
        label: string;
        values: string[];
      }[];
    };
  };
  investment: {
    title: string;
    description: string;
  };
  cost?: {
    title: string;
    eligibilityScan?: number;
    surgeryCost: number;
    isPerEye?: boolean;
    isStartingAt?: boolean;
    notStarted?: boolean;
  };
  faqs?: FAQItem[];
  clinicalDetails?: {
    title: string;
    description: string;
  }[];
  targetProfessions?: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
