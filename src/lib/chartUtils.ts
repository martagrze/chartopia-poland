
import { RealEstateVsSalaryData, EconomicIndicator } from './data';

// Color palette for charts
export const chartColors = {
  primary: '#3b82f6',
  secondary: '#f59e0b',
  tertiary: '#10b981',
  quaternary: '#8b5cf6',
  gray: '#9ca3af',
  background: 'rgba(255, 255, 255, 0.8)',
  gridLines: 'rgba(226, 232, 240, 0.6)',
  tooltipBackground: 'rgba(255, 255, 255, 0.95)',
};

// Generate data for the price-to-salary ratio chart
export const generatePriceToSalaryRatioData = (data: RealEstateVsSalaryData[]) => {
  return data.map(item => ({
    name: `${item.year} Q${item.quarter}`,
    ratio: Number((item.averagePricePerSqm / item.averageSalary).toFixed(2)),
    year: item.year,
    quarter: item.quarter,
  })).sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.quarter - b.quarter;
  });
};

// Generate data for the scatter plot (price vs. salary)
export const generateScatterData = (data: RealEstateVsSalaryData[]) => {
  return data.map(item => ({
    x: item.averageSalary,
    y: item.averagePricePerSqm,
    name: `${item.year} Q${item.quarter}`,
    year: item.year,
    quarter: item.quarter,
  }));
};

// Generate combined data for multi-line chart
export const generateCombinedChartData = (
  realEstateData: RealEstateVsSalaryData[],
  economicData: EconomicIndicator[]
) => {
  // Create a map of economic data by year and quarter
  const economicDataMap = new Map<string, EconomicIndicator>();
  economicData.forEach(item => {
    const key = `${item.year}-${item.quarter}`;
    economicDataMap.set(key, item);
  });

  // Combine real estate data with matching economic data
  return realEstateData
    .map(item => {
      const key = `${item.year}-${item.quarter}`;
      const economicItem = economicDataMap.get(key);
      
      if (!economicItem) return null;
      
      return {
        name: `${item.year} Q${item.quarter}`,
        pricePerSqm: item.averagePricePerSqm,
        salary: item.averageSalary,
        gdpGrowth: economicItem.gdpGrowth,
        inflation: economicItem.inflation,
        unemployment: economicItem.unemployment,
        year: item.year,
        quarter: item.quarter,
      };
    })
    .filter(item => item !== null) as {
      name: string;
      pricePerSqm: number;
      salary: number;
      gdpGrowth: number;
      inflation: number;
      unemployment: number;
      year: number;
      quarter: number;
    }[];
};

// Format currency for tooltips and labels
export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Format percentage for tooltips and labels
export const formatPercentage = (value: number) => {
  return new Intl.NumberFormat('pl-PL', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value / 100);
};

// Get CSS classes for the chart container
export const getChartContainerClasses = (isLoading: boolean) => {
  return `
    bg-white/80 backdrop-blur-md rounded-xl shadow-soft p-4 border border-gray-100
    ${isLoading ? 'opacity-50' : 'opacity-100'}
    transition-all duration-300 ease-soft
    hover:shadow-elevation
  `;
};

// Interpret correlation coefficient
export const interpretCorrelation = (correlation: number) => {
  const abs = Math.abs(correlation);
  
  if (abs >= 0.9) {
    return 'Very strong';
  } else if (abs >= 0.7) {
    return 'Strong';
  } else if (abs >= 0.5) {
    return 'Moderate';
  } else if (abs >= 0.3) {
    return 'Weak';
  } else {
    return 'Very weak';
  }
};

// Get color for correlation indicator
export const getCorrelationColor = (correlation: number) => {
  const abs = Math.abs(correlation);
  
  if (abs >= 0.7) {
    return chartColors.primary;
  } else if (abs >= 0.5) {
    return chartColors.secondary;
  } else if (abs >= 0.3) {
    return chartColors.tertiary;
  } else {
    return chartColors.gray;
  }
};
