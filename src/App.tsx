import { useState } from 'react';
import { Factory } from 'lucide-react';
import InputForm from './components/InputForm';
import StrengthGauge from './components/StrengthGauge';
import ParametersChart from './components/ParametersChart';
import RecommendationsPanel from './components/RecommendationsPanel';
import { SteelParameters, PredictionResult } from './types/steel';
import { analyzeSteelParameters } from './utils/prediction';

function App() {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [parameters, setParameters] = useState<SteelParameters | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (params: SteelParameters) => {
    const analysis = analyzeSteelParameters(params);
    setParameters(params);
    setResult(analysis);
    setShowResults(true);
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setResult(null);
    setParameters(null);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
              <Factory className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              Steel Intelligence System
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Advanced steel property prediction and classification system. Input your steel composition and processing parameters to receive detailed analysis and recommendations.
          </p>
        </header>

        <div className="space-y-8">
          <InputForm onSubmit={handleSubmit} onReset={handleReset} />

          {showResults && result && parameters && (
            <div id="results" className="space-y-8 animate-slide-up">
              <div className="grid lg:grid-cols-2 gap-8">
                <StrengthGauge result={result} />

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <ParametersChart parameters={parameters} />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
                    Recommendations & Guidelines
                  </span>
                </h2>
                <RecommendationsPanel recommendations={result.recommendations} />
              </div>
            </div>
          )}
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm pb-8">
          <p>Steel Intelligence System - Advanced Material Analysis & Classification</p>
          <p className="mt-2">Powered by predictive modeling and materials science</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
