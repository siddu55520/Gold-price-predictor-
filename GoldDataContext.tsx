import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchGoldData, fetchHistoricalGoldData } from '../services/goldDataService';
import { generatePredictions } from '../utils/predictionUtils';

interface GoldDataContextType {
  currentPrice: number;
  predictedPrice: number;
  priceChange: number;
  accuracyRate: number;
  predictionError: number;
  historicalData: { date: string; price: number }[];
  predictedData: { date: string; price: number }[];
  isLoading: boolean;
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
}

const GoldDataContext = createContext<GoldDataContextType | undefined>(undefined);

export const useGoldData = () => {
  const context = useContext(GoldDataContext);
  if (!context) {
    throw new Error('useGoldData must be used within a GoldDataProvider');
  }
  return context;
};

interface GoldDataProviderProps {
  children: ReactNode;
}

export const GoldDataProvider: React.FC<GoldDataProviderProps> = ({ children }) => {
  const [currentPrice, setCurrentPrice] = useState(1945.82);
  const [predictedPrice, setPredictedPrice] = useState(1961.37);
  const [priceChange, setPriceChange] = useState(8.53);
  const [accuracyRate, setAccuracyRate] = useState(92.5);
  const [predictionError, setPredictionError] = useState(-15.55);
  const [historicalData, setHistoricalData] = useState<{ date: string; price: number }[]>([]);
  const [predictedData, setPredictedData] = useState<{ date: string; price: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // In a real app, we would fetch from API
        // const data = await fetchGoldData();
        // setCurrentPrice(data.price);
        // setPriceChange(data.change);
        
        // For demo, we'll simulate loading delay and use mock data
        setTimeout(() => {
          // Get historical data based on timeframe
          const historicalData = fetchHistoricalGoldData(selectedTimeframe);
          setHistoricalData(historicalData);
          
          // Generate predictions based on historical data
          const predictions = generatePredictions(historicalData, selectedTimeframe);
          setPredictedData(predictions);
          
          // Update other values based on timeframe
          if (selectedTimeframe === 'daily') {
            setCurrentPrice(1945.82);
            setPredictedPrice(1961.37);
            setPriceChange(8.53);
            setAccuracyRate(92.5);
            setPredictionError(-15.55);
          } else if (selectedTimeframe === 'weekly') {
            setCurrentPrice(1932.45);
            setPredictedPrice(1952.10);
            setPriceChange(-12.77);
            setAccuracyRate(88.7);
            setPredictionError(-19.65);
          } else if (selectedTimeframe === 'monthly') {
            setCurrentPrice(1908.32);
            setPredictedPrice(1935.61);
            setPriceChange(25.49);
            setAccuracyRate(85.3);
            setPredictionError(-27.29);
          } else if (selectedTimeframe === 'yearly') {
            setCurrentPrice(1945.82);
            setPredictedPrice(2084.30);
            setPriceChange(178.64);
            setAccuracyRate(80.2);
            setPredictionError(-138.48);
          }
          
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching gold data:', error);
        setIsLoading(false);
      }
    };
    
    loadData();
  }, [selectedTimeframe]);

  return (
    <GoldDataContext.Provider
      value={{
        currentPrice,
        predictedPrice,
        priceChange,
        accuracyRate,
        predictionError,
        historicalData,
        predictedData,
        isLoading,
        selectedTimeframe,
        setSelectedTimeframe,
      }}
    >
      {children}
    </GoldDataContext.Provider>
  );
};