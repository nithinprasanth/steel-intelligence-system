import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { SteelParameters } from '../types/steel';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ParametersChartProps {
  parameters: SteelParameters;
}

export default function ParametersChart({ parameters }: ParametersChartProps) {
  const labels = [
    'Carbon',
    'Manganese',
    'Silicon',
    'Sulfur',
    'Phosphorus',
    'Chromium',
    'Nickel',
    'Molybdenum',
    'Copper',
    'Nitrogen',
    'Temperature (°C/10)',
    'Cooling Rate',
    'Grain Size',
  ];

  const values = [
    parameters.carbon,
    parameters.manganese,
    parameters.silicon,
    parameters.sulfur,
    parameters.phosphorus,
    parameters.chromium,
    parameters.nickel,
    parameters.molybdenum,
    parameters.copper,
    parameters.nitrogen,
    parameters.temperature / 10,
    parameters.coolingRate,
    parameters.grainSize,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Parameter Values',
        data: values,
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Steel Composition & Processing Parameters',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return (
    <div className="h-80 w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
