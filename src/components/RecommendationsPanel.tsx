import { CheckCircle, AlertTriangle, Shield, Wrench, Lightbulb } from 'lucide-react';
import { Recommendations } from '../types/steel';

interface RecommendationsPanelProps {
  recommendations: Recommendations;
}

export default function RecommendationsPanel({ recommendations }: RecommendationsPanelProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Wrench className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Suitable Applications</h3>
        </div>
        <ul className="space-y-2">
          {recommendations.applications.map((app, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{app}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-6 h-6 text-yellow-600" />
          <h3 className="text-xl font-bold text-gray-800">How to Use</h3>
        </div>
        <ul className="space-y-2">
          {recommendations.usage.map((use, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 ml-1.5"></div>
              </div>
              <span className="text-gray-700">{use}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border border-green-200">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-6 h-6 text-green-700" />
            <h3 className="text-xl font-bold text-green-800">Advantages</h3>
          </div>
          <ul className="space-y-2">
            {recommendations.advantages.map((adv, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-700 flex-shrink-0 font-bold">+</span>
                <span className="text-green-800">{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-6 h-6 text-orange-700" />
            <h3 className="text-xl font-bold text-orange-800">Disadvantages</h3>
          </div>
          <ul className="space-y-2">
            {recommendations.disadvantages.map((dis, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-orange-700 flex-shrink-0 font-bold">-</span>
                <span className="text-orange-800">{dis}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl shadow-lg p-6 border border-red-200">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-red-700" />
          <h3 className="text-xl font-bold text-red-800">Safety Precautions</h3>
        </div>
        <ul className="space-y-2">
          {recommendations.safetyPrecautions.map((safety, index) => (
            <li key={index} className="flex items-start gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="text-red-800">{safety}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
