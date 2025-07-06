// Utility function to generate predicted data based on historical data

export const generatePredictions = (
  historicalData: { date: string; price: number }[],
  timeframe: string
): { date: string; price: number }[] => {
  if (historicalData.length === 0) return [];
  
  // Generate future dates
  const futureDates: string[] = [];
  const lastDate = new Date();
  const count = timeframe === 'daily' ? 14 : timeframe === 'weekly' ? 8 : timeframe === 'monthly' ? 6 : 5;
  
  for (let i = 1; i <= count; i++) {
    const date = new Date(lastDate);
    
    if (timeframe === 'daily') {
      date.setDate(lastDate.getDate() + i);
      futureDates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    } else if (timeframe === 'weekly') {
      date.setDate(lastDate.getDate() + (i * 7));
      futureDates.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
    } else if (timeframe === 'monthly') {
      date.setMonth(lastDate.getMonth() + i);
      futureDates.push(date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
    } else if (timeframe === 'yearly') {
      date.setFullYear(lastDate.getFullYear() + i);
      futureDates.push(date.toLocaleDateString('en-US', { year: 'numeric' }));
    }
  }
  
  // Calculate predictions based on historical trend
  // This is a simplified model - in a real app, this would use more sophisticated algorithms
  const prices = historicalData.map(item => item.price);
  const lastPrice = prices[prices.length - 1];
  
  // Calculate average change over the last few periods
  const periods = Math.min(10, prices.length - 1);
  let totalChange = 0;
  
  for (let i = prices.length - periods; i < prices.length; i++) {
    totalChange += prices[i] - prices[i - 1];
  }
  
  const avgChange = totalChange / periods;
  
  // Add some randomness and trend to predictions
  let currentPrice = lastPrice;
  
  // Different trend factors based on timeframe
  const trendFactor = timeframe === 'daily' ? 1.2 : 
                      timeframe === 'weekly' ? 1.8 : 
                      timeframe === 'monthly' ? 2.2 : 3.5;
  
  // Volatility increases with longer timeframes
  const volatility = timeframe === 'daily' ? 5 : 
                     timeframe === 'weekly' ? 15 : 
                     timeframe === 'monthly' ? 30 : 80;
  
  return futureDates.map((date, index) => {
    // Prediction formula: current price + average change + trend + randomness
    const trend = avgChange * trendFactor;
    const randomness = (Math.random() - 0.3) * volatility; // Slight positive bias
    
    currentPrice = currentPrice + trend + randomness;
    
    // Ensure the first prediction aligns with our static "predicted price" for today
    if (index === 0) {
      currentPrice = timeframe === 'daily' ? 1961.37 : 
                    timeframe === 'weekly' ? 1952.10 : 
                    timeframe === 'monthly' ? 1935.61 : 2084.30;
    }
    
    return {
      date,
      price: parseFloat(currentPrice.toFixed(2))
    };
  });
};