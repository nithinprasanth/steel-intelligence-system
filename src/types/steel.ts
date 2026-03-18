export interface SteelParameters {
  carbon: number;
  manganese: number;
  silicon: number;
  sulfur: number;
  phosphorus: number;
  chromium: number;
  nickel: number;
  molybdenum: number;
  copper: number;
  nitrogen: number;
  temperature: number;
  coolingRate: number;
  grainSize: number;
}

export interface PredictionResult {
  strength: number;
  category: 'Low Strength Steel' | 'Medium Strength Steel' | 'High Strength Steel';
  recommendations: Recommendations;
}

export interface Recommendations {
  applications: string[];
  usage: string[];
  advantages: string[];
  disadvantages: string[];
  safetyPrecautions: string[];
}
