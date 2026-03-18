import { useState } from 'react';
import { SteelParameters } from '../types/steel';
import { Beaker, Thermometer, Gauge, RotateCcw } from 'lucide-react';

interface InputFormProps {
  onSubmit: (params: SteelParameters) => void;
  onReset: () => void;
}

const defaultValues: SteelParameters = {
  carbon: 0.2,
  manganese: 0.5,
  silicon: 0.3,
  sulfur: 0.02,
  phosphorus: 0.02,
  chromium: 0.1,
  nickel: 0.1,
  molybdenum: 0.05,
  copper: 0.1,
  nitrogen: 0.01,
  temperature: 850,
  coolingRate: 5,
  grainSize: 5,
};

export default function InputForm({ onSubmit, onReset }: InputFormProps) {
  const [parameters, setParameters] = useState<SteelParameters>(defaultValues);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      onSubmit(parameters);
      setIsAnimating(false);
    }, 500);
  };

  const handleReset = () => {
    setParameters(defaultValues);
    onReset();
  };

  const handleChange = (field: keyof SteelParameters, value: string) => {
    setParameters((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  const inputClass =
    'w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-gray-900 font-medium';

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-8 flex items-center gap-3">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-lg">
          <Beaker className="w-6 h-6 text-white" />
        </div>
        Steel Composition & Processing Analysis
      </h2>

      <div className="space-y-8">
        <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-md">
          <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-blue-600" />
            Chemical Composition (%)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Carbon (C)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="2"
                value={parameters.carbon}
                onChange={(e) => handleChange('carbon', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Manganese (Mn)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="2"
                value={parameters.manganese}
                onChange={(e) => handleChange('manganese', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Silicon (Si)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="2"
                value={parameters.silicon}
                onChange={(e) => handleChange('silicon', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sulfur (S)
              </label>
              <input
                type="number"
                step="0.001"
                min="0"
                max="0.5"
                value={parameters.sulfur}
                onChange={(e) => handleChange('sulfur', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phosphorus (P)
              </label>
              <input
                type="number"
                step="0.001"
                min="0"
                max="0.5"
                value={parameters.phosphorus}
                onChange={(e) => handleChange('phosphorus', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Chromium (Cr)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="2"
                value={parameters.chromium}
                onChange={(e) => handleChange('chromium', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nickel (Ni)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="2"
                value={parameters.nickel}
                onChange={(e) => handleChange('nickel', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Molybdenum (Mo)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                value={parameters.molybdenum}
                onChange={(e) => handleChange('molybdenum', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Copper (Cu)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                value={parameters.copper}
                onChange={(e) => handleChange('copper', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nitrogen (N)
              </label>
              <input
                type="number"
                step="0.001"
                min="0"
                max="0.5"
                value={parameters.nitrogen}
                onChange={(e) => handleChange('nitrogen', e.target.value)}
                className={inputClass}
                required
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-red-100 shadow-md">
          <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-red-600" />
            Processing Parameters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Temperature (°C)
              </label>
              <input
                type="number"
                step="10"
                min="500"
                max="1200"
                value={parameters.temperature}
                onChange={(e) => handleChange('temperature', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cooling Rate (°C/s)
              </label>
              <input
                type="number"
                step="0.1"
                min="0.1"
                max="100"
                value={parameters.coolingRate}
                onChange={(e) => handleChange('coolingRate', e.target.value)}
                className={inputClass}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Grain Size (ASTM)
              </label>
              <input
                type="number"
                step="0.5"
                min="1"
                max="12"
                value={parameters.grainSize}
                onChange={(e) => handleChange('grainSize', e.target.value)}
                className={inputClass}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isAnimating}
            className="flex-1 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-bold py-3.5 px-6 rounded-xl hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Gauge className="w-5 h-5" />
            {isAnimating ? 'Analyzing Steel...' : 'Analyze Steel Properties'}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <RotateCcw className="w-5 h-5" />
            Reset Form
          </button>
        </div>
      </div>
    </form>
  );
}
