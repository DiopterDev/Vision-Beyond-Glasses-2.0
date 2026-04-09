import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CredentialsMarquee from './components/CredentialsMarquee';
import ReviewMarquee from './components/ReviewMarquee';
import SurgeriesGrid from './components/SurgeriesGrid';
import EligibilityChecker from './components/EligibilityChecker';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import SEO from './components/SEO';
import BackToTop from './components/BackToTop';
import TargetProfessions from './components/TargetProfessions';
import CostOverview from './components/CostOverview';

// Lazy load surgery page
const SurgeryPage = lazy(() => import('./pages/SurgeryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));

const ScrollToTop: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (isLoading) return;

    if (!hash) {
      // Small timeout to ensure content is rendered after loading screen
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 100);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small timeout to ensure content is rendered
        setTimeout(() => {
          const yOffset = -80; // Adjusted offset for navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 150);
      }
    }
  }, [pathname, hash, isLoading]);
  
  return null;
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CredentialsMarquee />
      <TargetProfessions />
      <SurgeriesGrid />
      <CostOverview />
      <ReviewMarquee />
      <EligibilityChecker />
      <FAQ />
    </>
  );
};

const AppContent: React.FC = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="flex flex-col min-h-screen">
        <SEO />
        <Navbar />
        <main className="flex-grow pb-32 lg:pb-0">
          <ScrollToTop isLoading={false} />
          <Suspense fallback={<div className="h-screen bg-background" />}>
            <Routes>
              <Route path="/" element={<><HomePage /><Contact /></>} />
              <Route path="/surgery/:slug" element={<><SurgeryPage /><Contact /></>} />
              <Route path="/about" element={<><AboutPage /><Contact /></>} />
              <Route path="/resources" element={<><ResourcesPage /></>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <CurrencyProvider>
            <Router>
              <AppContent />
            </Router>
          </CurrencyProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
