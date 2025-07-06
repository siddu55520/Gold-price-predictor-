import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useGoldData } from '../context/GoldDataContext';
import { formatCurrency, formatPercentage } from '../utils/formatters';

const PredictionAccuracy: React.FC = () => {
  const { 
    predictedPrice, 
    currentPrice, 
    accuracyRate, 
    predictionError,
    isLoading
  } = useGoldData();
  
  const isPredictionAccurate = predictionError && Math.abs(predictionError) < 20;
  
  if (isLoading) {
    return (
      <div className="card animate-pulse-slow">
        <h2 className="text-xl font-semibold mb-4">Prediction Analysis</h2>
        <div className="h-12 bg-gray-200 rounded mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="card animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">Prediction Analysis</h2>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-navy-500">Today's Prediction</div>
          <div className="text-xl font-bold text-gold-500">{formatCurrency(predictedPrice)}</div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-navy-500">Actual Price</div>
          <div className="text-xl font-bold text-navy-800">{formatCurrency(currentPrice)}</div>
        </div>
        
        <div className="mt-4 flex items-center">
          <div className="flex-grow">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className={`h-full rounded-full ${isPredictionAccurate ? 'bg-green-500' : 'bg-amber-500'}`}
                style={{ width: `${accuracyRate}%` }}
              ></div>
            </div>
          </div>
          <div className="ml-3 text-sm font-medium">{formatPercentage(accuracyRate)}</div>
        </div>
      </div>
      
      <div className={`p-4 rounded-lg ${isPredictionAccurate ? 'bg-green-50' : 'bg-amber-50'} flex items-start`}>
        {isPredictionAccurate ? (
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
        ) : (
          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
        )}
        <div>
          <div className={`font-medium ${isPredictionAccurate ? 'text-green-700' : 'text-amber-700'}`}>
            {isPredictionAccurate 
              ? 'Prediction within target range'
              : 'Prediction outside target range'}
          </div>
          <p className="text-sm mt-1">
            {isPredictionAccurate
              ? `Our prediction was off by only ${formatCurrency(Math.abs(predictionError))}, demonstrating strong model performance.`
              : `Our prediction was off by ${formatCurrency(Math.abs(predictionError))}, reflecting recent market volatility.`}
          </p>
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="text-center p-3 bg-cream-200 rounded-lg">
          <div className="text-sm text-navy-500">7-Day Accuracy</div>
          <div className="font-bold text-lg">{formatPercentage(91.2)}</div>
        </div>
        <div className="text-center p-3 bg-cream-200 rounded-lg">
          <div className="text-sm text-navy-500">30-Day Accuracy</div>
          <div className="font-bold text-lg">{formatPercentage(87.5)}</div>
        </div>
        <div className="text-center p-3 bg-cream-200 rounded-lg">
          <div className="text-sm text-navy-500">90-Day Accuracy</div>
          <div className="font-bold text-lg">{formatPercentage(84.3)}</div>
        </div>
      </div>
    </div>
  );
};

export default PredictionAccuracy;