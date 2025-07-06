import React from 'react';
import { Calendar } from 'lucide-react';
import { useGoldData } from '../context/GoldDataContext';

const TimeframeSelector: React.FC = () => {
  const { selectedTimeframe, setSelectedTimeframe } = useGoldData();
  
  const timeframes = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'yearly', label: 'Yearly' },
  ];
  
  return (
    <div className="flex items-center space-x-1 bg-cream-200 rounded-lg p-1">
      <Calendar className="h-4 w-4 text-navy-500 ml-2 mr-1" />
      {timeframes.map((timeframe) => (
        <button
          key={timeframe.id}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all ${
            selectedTimeframe === timeframe.id
              ? 'bg-white text-navy-600 shadow-sm'
              : 'text-navy-500 hover:text-navy-700'
          }`}
          onClick={() => setSelectedTimeframe(timeframe.id)}
        >
          {timeframe.label}
        </button>
      ))}
    </div>
  );
};

export default TimeframeSelector;