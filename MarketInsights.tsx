import React from 'react';
import { TrendingUp, TrendingDown, BarChart2, DollarSign } from 'lucide-react';

const MarketInsights: React.FC = () => {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-6">Market Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Current Factors Affecting Gold Prices</h3>
          
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div className="ml-3">
                <h4 className="text-base font-medium">Inflation Concerns</h4>
                <p className="text-sm text-navy-600">
                  Rising inflation metrics are contributing to increased gold demand as a hedge against currency devaluation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <TrendingDown className="h-5 w-5 text-red-500" />
              </div>
              <div className="ml-3">
                <h4 className="text-base font-medium">Federal Reserve Policy</h4>
                <p className="text-sm text-navy-600">
                  Recent Fed statements indicate potential rate adjustments which typically impact gold prices inversely.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <BarChart2 className="h-5 w-5 text-blue-500" />
              </div>
              <div className="ml-3">
                <h4 className="text-base font-medium">Market Volatility</h4>
                <p className="text-sm text-navy-600">
                  Increased global economic uncertainty is driving investors toward safe-haven assets like gold.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <DollarSign className="h-5 w-5 text-purple-500" />
              </div>
              <div className="ml-3">
                <h4 className="text-base font-medium">Dollar Strength</h4>
                <p className="text-sm text-navy-600">
                  The US dollar's recent performance has created pressure on gold prices due to their inverse relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Prediction Methodology</h3>
          <p className="text-sm text-navy-600 mb-4">
            Our gold price predictions utilize a combination of advanced algorithms and market analysis:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-sm text-navy-600">
            <li>Time series analysis of historical price patterns</li>
            <li>Correlation with key economic indicators</li>
            <li>Sentiment analysis from financial news</li>
            <li>Market trend evaluation from trading volumes</li>
            <li>Machine learning models trained on decades of gold market data</li>
          </ul>
          
          <div className="mt-6 p-4 bg-cream-300 rounded-lg">
            <h4 className="text-base font-medium mb-2">Analyst Consensus</h4>
            <p className="text-sm text-navy-600">
              The majority of analysts currently project a <span className="font-medium text-green-600">bullish outlook</span> for gold in the coming weeks, with potential resistance at the $2,150 level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;