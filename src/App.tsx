import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProgressBar from './components/ProgressBar';
import HomePage from './pages/HomePage';
import HostingPage from './pages/HostingPage';
import PlatformAdminPage from './pages/PlatformAdminPage';
import VirtusEcosystemPage from './pages/VirtusEcosystemPage';
import DevelopmentPage from './pages/DevelopmentPage';
import ContactPage from './pages/ContactPage';
import VirtusToolboxPage from './pages/VirtusToolboxPage';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 transition-colors duration-500 scroll-smooth">
        <ProgressBar />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hosting" element={<HostingPage />} />
            <Route path="/platform-admin" element={<PlatformAdminPage />} />
            <Route path="/virtus-ecosystem" element={<VirtusEcosystemPage />} />
            <Route path="/development" element={<DevelopmentPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/virtus-toolbox" element={<VirtusToolboxPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;