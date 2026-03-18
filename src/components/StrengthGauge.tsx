import { PredictionResult } from '../types/steel';

interface StrengthGaugeProps {
  result: PredictionResult;
}

export default function StrengthGauge({ result }: StrengthGaugeProps) {
  const { strength, category } = result;

  const percentage = Math.min(100, (strength / 1200) * 100);

  const getColorClass = () => {
    if (category === 'High Strength Steel') return 'from-green-500 to-emerald-600';
    if (category === 'Medium Strength Steel') return 'from-blue-500 to-cyan-600';
    return 'from-orange-500 to-amber-600';
  };

  const getCategoryColor = () => {
    if (category === 'High Strength Steel') return 'text-green-600';
    if (category === 'Medium Strength Steel') return 'text-blue-600';
    return 'text-orange-600';
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-6">
        Predicted Tensile Strength
      </h3>

      <div className="mb-8">
        <div className="flex justify-between items-baseline mb-3">
          <span className="text-5xl font-bold text-gray-900">{strength.toFixed(0)}</span>
          <span className="text-2xl font-semibold text-blue-600">MPa</span>
        </div>

        <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden shadow-md">
          <div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getColorClass()} transition-all duration-1000 ease-out rounded-full shadow-lg`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600 mt-2 font-semibold">
          <span>0</span>
          <span>400</span>
          <span>600</span>
          <span>1200+ MPa</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 border border-gray-200">
          <span className="text-gray-700 font-semibold">Steel Classification:</span>
          <span className={`text-xl font-bold ${getCategoryColor()} px-4 py-1.5 rounded-lg bg-opacity-10 ${getCategoryColor().replace('text-', 'bg-')}`}>
            {category}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-6 text-center text-sm">
          <div className={`p-3 rounded-lg font-semibold transition-all ${strength < 400 ? 'bg-orange-100 border-2 border-orange-500 text-orange-700 shadow-lg' : 'bg-gray-100 border border-gray-300 text-gray-600'}`}>
            <div className="font-bold">Low</div>
            <div className="text-xs">&lt; 400</div>
          </div>
          <div className={`p-3 rounded-lg font-semibold transition-all ${strength >= 400 && strength <= 600 ? 'bg-blue-100 border-2 border-blue-500 text-blue-700 shadow-lg' : 'bg-gray-100 border border-gray-300 text-gray-600'}`}>
            <div className="font-bold">Medium</div>
            <div className="text-xs">400-600</div>
          </div>
          <div className={`p-3 rounded-lg font-semibold transition-all ${strength > 600 ? 'bg-green-100 border-2 border-green-500 text-green-700 shadow-lg' : 'bg-gray-100 border border-gray-300 text-gray-600'}`}>
            <div className="font-bold">High</div>
            <div className="text-xs">&gt; 600</div>
          </div>
        </div>
      </div>
    </div>
  );
}
