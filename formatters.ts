// Utility functions for formatting values

// Format currency values
export const formatCurrency = (value: number, currency: 'USD' | 'INR' = 'INR'): string => {
  return new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

// Format percentage values
export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  }).format(value / 100);
};

// Format date values based on timeframe
export const formatDate = (date: Date, timeframe: string): string => {
  if (timeframe === 'daily') {
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
  } else if (timeframe === 'weekly') {
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
  } else if (timeframe === 'monthly') {
    return date.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
  } else {
    return date.toLocaleDateString('en-IN', { year: 'numeric' });
  }
};