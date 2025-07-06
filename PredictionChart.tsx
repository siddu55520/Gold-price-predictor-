import React, { useState } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGoldData } from '../context/GoldDataContext';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

const PredictionChart: React.FC = () => {
  const { historicalData, predictedData, selectedTimeframe } = useGoldData();
  const [showPredicted, setShowPredicted] = useState(true);
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1A2C42',
        bodyColor: '#1A2C42',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        boxPadding: 4,
        usePointStyle: true,
        callbacks: {
          label: function(context: any) {
            return `$${context.raw.toFixed(2)}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 10,
          },
          maxRotation: 0,
          color: '#666',
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            family: "'Inter', sans-serif",
            size: 10,
          },
          color: '#666',
          callback: function(value: any) {
            return '$' + value;
          }
        }
      },
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.8,
        to: 0.4,
        loop: false
      }
    }
  };

  const data = {
    labels: historicalData.map(d => d.date),
    datasets: [
      {
        label: 'Actual Price',
        data: historicalData.map(d => d.price),
        borderColor: '#1A2C42',
        backgroundColor: 'rgba(26, 44, 66, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 4,
        tension: 0.4,
        fill: false,
      },
      ...(showPredicted ? [{
        label: 'Predicted Price',
        data: predictedData.map(d => d.price),
        borderColor: '#D4AF37',
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        pointHoverRadius: 4,
        tension: 0.4,
        fill: false,
      }] : []),
    ],
  };

  return (
    <div className="card">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-xl font-semibold mb-2 md:mb-0">Gold Price Trends & Predictions</h2>
        
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 text-gold-500 rounded border-gray-300 focus:ring-gold-500"
              checked={showPredicted}
              onChange={() => setShowPredicted(!showPredicted)}
            />
            <span className="text-sm text-navy-600">Show Predictions</span>
          </label>
        </div>
      </div>
      
      <div className="h-80">
        <Line options={options} data={data} />
      </div>
      
      <div className="mt-6 text-sm text-navy-400">
        <p>
          {showPredicted 
            ? "Chart displays both historical prices and our AI-driven price predictions. Toggle the checkbox to show/hide predictions." 
            : "Chart displays historical prices only. Toggle the checkbox to show predictions."}
        </p>
      </div>
    </div>
  );
};

export default PredictionChart;