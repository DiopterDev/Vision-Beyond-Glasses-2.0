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
import SEO from './components/SEO';
import BackToTop from './components/BackToTop';

// Lazy load components for better performance
const TargetProfessions = lazy(() => import('./components/TargetProfessions'));
const SurgeriesGrid = lazy(() => import('./components/SurgeriesGrid'));
const CostOverview = lazy(() => import('./components/CostOverview'));
const ReviewMarquee = lazy(() => import('./components/ReviewMarquee'));
const EligibilityChecker = lazy(() => import('./components/EligibilityChecker'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
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
      <SurgeriesGrid />
      <CostOverview />
      <TargetProfessions />
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
