import React from 'react';
import Header from './components/Header';
import GoldPriceDisplay from './components/GoldPriceDisplay';
import PredictionChart from './components/PredictionChart';
import MarketInsights from './components/MarketInsights';
import PredictionAccuracy from './components/PredictionAccuracy';
import Footer from './components/Footer';
import { GoldDataProvider } from './context/GoldDataContext';

function App() {
  return (
    <GoldDataProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <GoldPriceDisplay />
            <PredictionAccuracy />
          </div>
          <div className="mb-8">
            <PredictionChart />
          </div>
          <div className="mb-8">
            <MarketInsights />
          </div>
        </main>
        <Footer />
      </div>
    </GoldDataProvider>
  );
}

export default App;