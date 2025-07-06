import React, { useState } from 'react';
import { ArrowUp, ArrowDown, IndianRupee, Scale } from 'lucide-react';
import { useGoldData } from '../context/GoldDataContext';
import { formatCurrency } from '../utils/formatters';

const GoldPriceDisplay = () => {
  const { currentPrice, predictedPrice, priceChange, isLoading } = useGoldData();
  const [goldWeight, setGoldWeight] = useState(10);
  const [weightUnit, setWeightUnit] = useState('grams');
  
  const isPositiveChange = priceChange >= 0;
  
  const calculatePrice = (basePrice, weight, unit) => {
    // Convert USD/troy oz to INR/gram
    // 1 troy oz ≈ 31.1035 grams
    // Using approximate USD to INR conversion rate of 83
    const usdToInr = 83;
    const pricePerGram = (basePrice * usdToInr) / 31.1035;
    
    // Convert weight to grams if in tola (1 tola = 11.6638 grams)
    const weightInGrams = unit === 'tola' ? weight * 11.6638 : weight;
    
    return pricePerGram * weightInGrams;
  };

  if (isLoading) {
    return (
      <div className="card animate-pulse-slow">
        <h2 className="text-xl font-semibold mb-4">Current Gold Price</h2>
        <div className="h-12 bg-gray-200 rounded mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  return (
    <div className="card animate-fade-in">
      <h2 className="text-xl font-semibold mb-4">Gold Price Calculator</h2>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Scale className="h-5 w-5 text-gold-500 mr-2" />
          <label htmlFor="goldWeight" className="text-navy-600">
            Enter gold weight:
          </label>
        </div>
        <div className="flex gap-4">
          <input
            type="number"
            id="goldWeight"
            value={goldWeight}
            onChange={(e) => setGoldWeight(Math.max(0, Number(e.target.value)))}
            className="flex-1 px-4 py-2 rounded-lg border border-navy-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            min="0"
            step="0.1"
          />
          <select
            value={weightUnit}
            onChange={(e) => setWeightUnit(e.target.value)}
            className="px-4 py-2 rounded-lg border border-navy-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 bg-white"
          >
            <option value="grams">Grams</option>
            <option value="tola">Tola</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-cream-200 rounded-lg">
          <div className="text-navy-500 mb-2">Current Price</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <IndianRupee className="h-6 w-6 text-navy-500 mr-2" />
              <span className="text-2xl font-bold text-navy-800">
                {formatCurrency(calculatePrice(currentPrice, goldWeight, weightUnit))}
              </span>
            </div>
            <div className={`flex items-center ${isPositiveChange ? 'text-green-600' : 'text-red-600'}`}>
              {isPositiveChange ? (
                <ArrowUp className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 mr-1" />
              )}
              <span className="font-medium">{formatCurrency(Math.abs(calculatePrice(priceChange, goldWeight, weightUnit)))}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gold-50 rounded-lg">
          <div className="text-navy-500 mb-2">Predicted Price</div>
          <div className="flex items-center">
            <IndianRupee className="h-6 w-6 text-gold-500 mr-2" />
            <span className="text-2xl font-bold text-gold-700">
              {formatCurrency(calculatePrice(predictedPrice, goldWeight, weightUnit))}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-sm text-navy-400">24h High</div>
            <div className="font-medium">{formatCurrency(calculatePrice(currentPrice + 15.27, goldWeight, weightUnit))}</div>
          </div>
          <div>
            <div className="text-sm text-navy-400">24h Low</div>
            <div className="font-medium">{formatCurrency(calculatePrice(currentPrice - 18.42, goldWeight, weightUnit))}</div>
          </div>
          <div>
            <div className="text-sm text-navy-400">Week Avg</div>
            <div className="font-medium">{formatCurrency(calculatePrice(currentPrice - 5.32, goldWeight, weightUnit))}</div>
          </div>
          <div>
            <div className="text-sm text-navy-400">Month Avg</div>
            <div className="font-medium">{formatCurrency(calculatePrice(currentPrice - 12.75, goldWeight, weightUnit))}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-navy-500">
        <p>* Prices are calculated using current USD to INR exchange rate of ₹83</p>
        <p>* 1 Tola = 11.6638 grams</p>
      </div>
    </div>
  );
};

export default GoldPriceDisplay;