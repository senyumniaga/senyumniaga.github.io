import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DemoBot } from './components/DemoBot';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { Home } from './pages/Home';
import { FeaturesPage } from './pages/FeaturesPage';

const AppContent: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-dark-bg text-dark-text overflow-x-hidden font-sans selection:bg-neon-amber selection:text-black relative flex flex-col">
        
        {/* Global Elements */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating Demo Bot */}
        <DemoBot />
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;