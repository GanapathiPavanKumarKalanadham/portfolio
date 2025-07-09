import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <AnimatePresence mode="wait">
          {!showPortfolio ? (
            <LandingPage key="landing" onComplete={() => setShowPortfolio(true)} />
          ) : (
            <Portfolio key="portfolio" />
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;