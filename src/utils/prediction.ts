import { SteelParameters, PredictionResult, Recommendations } from '../types/steel';

export function predictStrength(params: SteelParameters): number {
  const {
    carbon,
    manganese,
    silicon,
    sulfur,
    phosphorus,
    chromium,
    nickel,
    molybdenum,
    copper,
    nitrogen,
    temperature,
    coolingRate,
    grainSize,
  } = params;

  const baseStrength = 250;

  const carbonEffect = carbon * 800;
  const manganeseEffect = manganese * 150;
  const siliconEffect = silicon * 100;
  const chromiumEffect = chromium * 120;
  const nickelEffect = nickel * 80;
  const molybdenumEffect = molybdenum * 200;
  const copperEffect = copper * 60;
  const nitrogenEffect = nitrogen * 300;

  const negativeEffects = (sulfur * 50) + (phosphorus * 40);

  const processingEffect = (temperature / 10) + (coolingRate * 30) - (grainSize * 20);

  const strength = baseStrength +
    carbonEffect +
    manganeseEffect +
    siliconEffect +
    chromiumEffect +
    nickelEffect +
    molybdenumEffect +
    copperEffect +
    nitrogenEffect -
    negativeEffects +
    processingEffect;

  return Math.max(200, Math.min(1200, strength));
}

export function classifySteel(strength: number): PredictionResult['category'] {
  if (strength > 600) return 'High Strength Steel';
  if (strength >= 400) return 'Medium Strength Steel';
  return 'Low Strength Steel';
}

export function getRecommendations(category: PredictionResult['category']): Recommendations {
  const recommendations: Record<PredictionResult['category'], Recommendations> = {
    'High Strength Steel': {
      applications: [
        'Aerospace components and aircraft structures',
        'Automotive safety parts and chassis',
        'Heavy machinery and industrial equipment',
        'Military and defense applications',
        'High-rise building structures',
      ],
      usage: [
        'Use in applications requiring exceptional load-bearing capacity',
        'Ideal for components subjected to high stress and fatigue',
        'Suitable for weight-sensitive applications where strength-to-weight ratio is critical',
        'Apply in environments with dynamic loading conditions',
      ],
      advantages: [
        'Superior tensile strength and durability',
        'Excellent fatigue resistance',
        'High strength-to-weight ratio',
        'Enhanced safety margins in critical applications',
        'Reduced material usage due to high strength',
      ],
      disadvantages: [
        'Higher material and processing costs',
        'More complex manufacturing requirements',
        'May require specialized welding techniques',
        'Reduced ductility compared to lower strength steels',
        'Potentially more brittle at low temperatures',
      ],
      safetyPrecautions: [
        'Use certified welding procedures and qualified welders',
        'Monitor for stress corrosion cracking in corrosive environments',
        'Perform regular non-destructive testing (NDT)',
        'Follow strict heat treatment protocols',
        'Ensure proper storage to prevent hydrogen embrittlement',
      ],
    },
    'Medium Strength Steel': {
      applications: [
        'General construction and building frames',
        'Automotive body panels and structural parts',
        'Pipeline and pressure vessel manufacturing',
        'Agricultural and mining equipment',
        'Railway tracks and transportation infrastructure',
      ],
      usage: [
        'Suitable for moderate load-bearing structures',
        'Use in general fabrication and welding applications',
        'Ideal for components requiring balance of strength and formability',
        'Apply in standard engineering applications',
      ],
      advantages: [
        'Good balance between strength and ductility',
        'Easier to fabricate and weld',
        'Cost-effective for most applications',
        'Wide availability and standardization',
        'Good formability for various manufacturing processes',
      ],
      disadvantages: [
        'May not be suitable for extremely high-stress applications',
        'Lower strength-to-weight ratio than high-strength alternatives',
        'Requires corrosion protection in harsh environments',
        'Thickness may need to increase for higher loads',
      ],
      safetyPrecautions: [
        'Apply appropriate corrosion protection coatings',
        'Follow standard welding practices',
        'Conduct periodic structural inspections',
        'Ensure proper load calculations in design phase',
        'Use certified materials from reputable suppliers',
      ],
    },
    'Low Strength Steel': {
      applications: [
        'Decorative architectural elements',
        'Non-structural building components',
        'Wire products and mesh',
        'General fabrication and DIY projects',
        'Light-duty furniture and fixtures',
      ],
      usage: [
        'Use in low-stress, non-critical applications',
        'Suitable for decorative and aesthetic purposes',
        'Ideal for applications prioritizing formability over strength',
        'Apply where weight is not a primary concern',
      ],
      advantages: [
        'Excellent formability and workability',
        'Easy to cut, bend, and shape',
        'Lower cost compared to higher strength grades',
        'Good weldability with minimal preparation',
        'Suitable for cold forming operations',
      ],
      disadvantages: [
        'Limited load-bearing capacity',
        'Not suitable for structural applications',
        'May require larger cross-sections for adequate strength',
        'Lower durability under cyclic loading',
        'More susceptible to deformation under stress',
      ],
      safetyPrecautions: [
        'Never use in structural or load-bearing applications',
        'Apply protective coatings to prevent corrosion',
        'Clearly label material grade to prevent misuse',
        'Design with adequate safety factors',
        'Regular inspection for signs of deformation or damage',
      ],
    },
  };

  return recommendations[category];
}

export function analyzeSteelParameters(params: SteelParameters): PredictionResult {
  const strength = predictStrength(params);
  const category = classifySteel(strength);
  const recommendations = getRecommendations(category);

  return {
    strength,
    category,
    recommendations,
  };
}
