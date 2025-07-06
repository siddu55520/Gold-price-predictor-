// In a real application, this would make API calls to a backend service
// For this demo, we'll generate mock data

// Function to generate dates based on timeframe
const generateDates = (timeframe: string, count: number): string[] => {
  const dates: string[] = [];
  const today = new Date();
  
  for (let i = count - 1; i >= 0; i--) {
    const date = new Date(today);
    
    if (timeframe === 'daily') {
      date.setDate(today.getDate() - i);
      dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    } else if (timeframe === 'weekly') {
      date.setDate(today.getDate() - (i * 7));
      dates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    } else if (timeframe === 'monthly') {
      date.setMonth(today.getMonth() - i);
      dates.push(date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
    } else if (timeframe === 'yearly') {
      date.setFullYear(today.getFullYear() - i);
      dates.push(date.toLocaleDateString('en-US', { year: 'numeric' }));
    }
  }
  
  return dates;
};

// Generate historical data based on timeframe
export const fetchHistoricalGoldData = (timeframe: string): { date: string; price: number }[] => {
  const count = timeframe === 'daily' ? 30 : timeframe === 'weekly' ? 26 : timeframe === 'monthly' ? 24 : 10;
  const dates = generateDates(timeframe, count);
  
  // Base price and volatility settings for different timeframes
  const basePrice = 1850;
  const volatility = timeframe === 'daily' ? 20 : timeframe === 'weekly' ? 40 : timeframe === 'monthly' ? 80 : 200;
  
  // Generate price data with some randomness but with an overall trend
  let currentPrice = basePrice;
  const trendFactor = 0.8; // Positive trend
  
  return dates.map((date, index) => {
    // Add some randomness and a slight upward trend
    const randomChange = (Math.random() - 0.4) * volatility; // Slightly more positive than negative
    const trendChange = index * trendFactor;
    
    currentPrice = basePrice + trendChange + randomChange;
    
    // Ensure we end close to our "current" price for the most recent data point
    if (index === dates.length - 1) {
      currentPrice = timeframe === 'daily' ? 1945.82 : 
                    timeframe === 'weekly' ? 1932.45 : 
                    timeframe === 'monthly' ? 1908.32 : 1945.82;
    }
    
    return {
      date,
      price: parseFloat(currentPrice.toFixed(2))
    };
  });
};

// Mock function to fetch current gold price data
export const fetchGoldData = async (): Promise<{ price: number; change: number }> => {
  // In a real app, this would make an API call
  // return fetch('/api/gold-price').then(res => res.json());
  
  // For demo purposes, return mock data
  return Promise.resolve({
    price: 1945.82,
    change: 8.53
  });
};