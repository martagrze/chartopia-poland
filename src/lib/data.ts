
// Sample data interface for real estate prices vs. salaries
export interface RealEstateVsSalaryData {
  year: number;
  quarter: number;
  region: string;
  averagePricePerSqm: number;
  averageSalary: number;
}

// Sample data interface for economic indicators
export interface EconomicIndicator {
  year: number;
  quarter: number;
  gdpGrowth: number;
  unemployment: number;
  inflation: number;
}

// Sample dataset for real estate prices vs. salaries
export const realEstateVsSalaryData: RealEstateVsSalaryData[] = [
  { year: 2018, quarter: 1, region: "Mazowieckie", averagePricePerSqm: 8500, averageSalary: 5800 },
  { year: 2018, quarter: 2, region: "Mazowieckie", averagePricePerSqm: 8700, averageSalary: 5900 },
  { year: 2018, quarter: 3, region: "Mazowieckie", averagePricePerSqm: 8900, averageSalary: 6000 },
  { year: 2018, quarter: 4, region: "Mazowieckie", averagePricePerSqm: 9100, averageSalary: 6200 },
  { year: 2019, quarter: 1, region: "Mazowieckie", averagePricePerSqm: 9300, averageSalary: 6300 },
  { year: 2019, quarter: 2, region: "Mazowieckie", averagePricePerSqm: 9500, averageSalary: 6400 },
  { year: 2019, quarter: 3, region: "Mazowieckie", averagePricePerSqm: 9800, averageSalary: 6500 },
  { year: 2019, quarter: 4, region: "Mazowieckie", averagePricePerSqm: 10000, averageSalary: 6700 },
  { year: 2020, quarter: 1, region: "Mazowieckie", averagePricePerSqm: 10200, averageSalary: 6800 },
  { year: 2020, quarter: 2, region: "Mazowieckie", averagePricePerSqm: 10300, averageSalary: 6700 },
  { year: 2020, quarter: 3, region: "Mazowieckie", averagePricePerSqm: 10500, averageSalary: 6900 },
  { year: 2020, quarter: 4, region: "Mazowieckie", averagePricePerSqm: 10800, averageSalary: 7100 },
  { year: 2021, quarter: 1, region: "Mazowieckie", averagePricePerSqm: 11000, averageSalary: 7200 },
  { year: 2021, quarter: 2, region: "Mazowieckie", averagePricePerSqm: 11300, averageSalary: 7400 },
  { year: 2021, quarter: 3, region: "Mazowieckie", averagePricePerSqm: 11700, averageSalary: 7500 },
  { year: 2021, quarter: 4, region: "Mazowieckie", averagePricePerSqm: 12000, averageSalary: 7700 },
  { year: 2022, quarter: 1, region: "Mazowieckie", averagePricePerSqm: 12500, averageSalary: 7900 },
  { year: 2022, quarter: 2, region: "Mazowieckie", averagePricePerSqm: 13000, averageSalary: 8100 },
  { year: 2022, quarter: 3, region: "Mazowieckie", averagePricePerSqm: 13500, averageSalary: 8300 },
  { year: 2022, quarter: 4, region: "Mazowieckie", averagePricePerSqm: 14000, averageSalary: 8500 },
  { year: 2023, quarter: 1, region: "Mazowieckie", averagePricePerSqm: 14500, averageSalary: 8700 },
  { year: 2023, quarter: 2, region: "Mazowieckie", averagePricePerSqm: 15000, averageSalary: 8900 },
  
  { year: 2018, quarter: 1, region: "Małopolskie", averagePricePerSqm: 7200, averageSalary: 5300 },
  { year: 2018, quarter: 2, region: "Małopolskie", averagePricePerSqm: 7400, averageSalary: 5400 },
  { year: 2018, quarter: 3, region: "Małopolskie", averagePricePerSqm: 7600, averageSalary: 5500 },
  { year: 2018, quarter: 4, region: "Małopolskie", averagePricePerSqm: 7800, averageSalary: 5600 },
  { year: 2019, quarter: 1, region: "Małopolskie", averagePricePerSqm: 8000, averageSalary: 5700 },
  { year: 2019, quarter: 2, region: "Małopolskie", averagePricePerSqm: 8200, averageSalary: 5800 },
  { year: 2019, quarter: 3, region: "Małopolskie", averagePricePerSqm: 8400, averageSalary: 5900 },
  { year: 2019, quarter: 4, region: "Małopolskie", averagePricePerSqm: 8600, averageSalary: 6000 },
  { year: 2020, quarter: 1, region: "Małopolskie", averagePricePerSqm: 8700, averageSalary: 6100 },
  { year: 2020, quarter: 2, region: "Małopolskie", averagePricePerSqm: 8800, averageSalary: 6000 },
  { year: 2020, quarter: 3, region: "Małopolskie", averagePricePerSqm: 9000, averageSalary: 6200 },
  { year: 2020, quarter: 4, region: "Małopolskie", averagePricePerSqm: 9200, averageSalary: 6300 },
  { year: 2021, quarter: 1, region: "Małopolskie", averagePricePerSqm: 9400, averageSalary: 6400 },
  { year: 2021, quarter: 2, region: "Małopolskie", averagePricePerSqm: 9700, averageSalary: 6500 },
  { year: 2021, quarter: 3, region: "Małopolskie", averagePricePerSqm: 10000, averageSalary: 6600 },
  { year: 2021, quarter: 4, region: "Małopolskie", averagePricePerSqm: 10300, averageSalary: 6700 },
  { year: 2022, quarter: 1, region: "Małopolskie", averagePricePerSqm: 10700, averageSalary: 6900 },
  { year: 2022, quarter: 2, region: "Małopolskie", averagePricePerSqm: 11100, averageSalary: 7100 },
  { year: 2022, quarter: 3, region: "Małopolskie", averagePricePerSqm: 11500, averageSalary: 7300 },
  { year: 2022, quarter: 4, region: "Małopolskie", averagePricePerSqm: 12000, averageSalary: 7500 },
  { year: 2023, quarter: 1, region: "Małopolskie", averagePricePerSqm: 12500, averageSalary: 7700 },
  { year: 2023, quarter: 2, region: "Małopolskie", averagePricePerSqm: 13000, averageSalary: 7900 },
];

// Sample economic indicators data
export const economicIndicatorsData: EconomicIndicator[] = [
  { year: 2018, quarter: 1, gdpGrowth: 5.3, unemployment: 6.8, inflation: 1.4 },
  { year: 2018, quarter: 2, gdpGrowth: 5.1, unemployment: 6.2, inflation: 1.7 },
  { year: 2018, quarter: 3, gdpGrowth: 5.2, unemployment: 5.8, inflation: 1.9 },
  { year: 2018, quarter: 4, gdpGrowth: 4.9, unemployment: 5.9, inflation: 1.6 },
  { year: 2019, quarter: 1, gdpGrowth: 4.7, unemployment: 5.9, inflation: 1.2 },
  { year: 2019, quarter: 2, gdpGrowth: 4.5, unemployment: 5.3, inflation: 2.4 },
  { year: 2019, quarter: 3, gdpGrowth: 4.6, unemployment: 5.1, inflation: 2.9 },
  { year: 2019, quarter: 4, gdpGrowth: 4.0, unemployment: 5.2, inflation: 3.4 },
  { year: 2020, quarter: 1, gdpGrowth: 2.0, unemployment: 5.4, inflation: 4.5 },
  { year: 2020, quarter: 2, gdpGrowth: -8.3, unemployment: 6.1, inflation: 3.3 },
  { year: 2020, quarter: 3, gdpGrowth: -1.6, unemployment: 6.1, inflation: 3.0 },
  { year: 2020, quarter: 4, gdpGrowth: -2.5, unemployment: 6.2, inflation: 2.4 },
  { year: 2021, quarter: 1, gdpGrowth: -0.5, unemployment: 6.4, inflation: 2.7 },
  { year: 2021, quarter: 2, gdpGrowth: 11.1, unemployment: 5.9, inflation: 4.5 },
  { year: 2021, quarter: 3, gdpGrowth: 5.6, unemployment: 5.6, inflation: 5.5 },
  { year: 2021, quarter: 4, gdpGrowth: 7.6, unemployment: 5.4, inflation: 7.7 },
  { year: 2022, quarter: 1, gdpGrowth: 8.5, unemployment: 5.4, inflation: 9.7 },
  { year: 2022, quarter: 2, gdpGrowth: 5.8, unemployment: 4.9, inflation: 13.9 },
  { year: 2022, quarter: 3, gdpGrowth: 3.6, unemployment: 5.1, inflation: 16.2 },
  { year: 2022, quarter: 4, gdpGrowth: 2.3, unemployment: 5.2, inflation: 17.5 },
  { year: 2023, quarter: 1, gdpGrowth: 0.9, unemployment: 5.5, inflation: 15.6 },
  { year: 2023, quarter: 2, gdpGrowth: 0.7, unemployment: 5.3, inflation: 11.5 },
];

// List of available regions in Poland
export const polishRegions = [
  "Mazowieckie",
  "Małopolskie",
  "Śląskie",
  "Łódzkie",
  "Dolnośląskie",
  "Wielkopolskie",
  "Pomorskie",
  "Zachodniopomorskie",
  "Lubelskie",
  "Podkarpackie",
  "Kujawsko-Pomorskie",
  "Warmińsko-Mazurskie",
  "Podlaskie",
  "Świętokrzyskie",
  "Lubuskie",
  "Opolskie"
];

// Function to fetch real estate vs. salary data based on filters
export const fetchRealEstateVsSalaryData = async (region: string = "Mazowieckie", fromYear: number = 2018, toYear: number = 2023) => {
  // Simulate API call with a delay
  return new Promise<RealEstateVsSalaryData[]>((resolve) => {
    setTimeout(() => {
      const filteredData = realEstateVsSalaryData.filter(
        (item) => item.region === region && item.year >= fromYear && item.year <= toYear
      );
      resolve(filteredData);
    }, 500);
  });
};

// Function to fetch economic indicators data based on filters
export const fetchEconomicIndicatorsData = async (fromYear: number = 2018, toYear: number = 2023) => {
  // Simulate API call with a delay
  return new Promise<EconomicIndicator[]>((resolve) => {
    setTimeout(() => {
      const filteredData = economicIndicatorsData.filter(
        (item) => item.year >= fromYear && item.year <= toYear
      );
      resolve(filteredData);
    }, 500);
  });
};

// Function to calculate the correlation between real estate prices and salaries
export const calculateCorrelation = (data: RealEstateVsSalaryData[]) => {
  // Simple implementation of Pearson correlation coefficient
  const n = data.length;
  
  // If there's not enough data, return 0
  if (n <= 1) return 0;
  
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;
  
  for (const item of data) {
    const x = item.averageSalary;
    const y = item.averagePricePerSqm;
    
    sumX += x;
    sumY += y;
    sumXY += x * y;
    sumX2 += x * x;
    sumY2 += y * y;
  }
  
  const numerator = n * sumXY - sumX * sumY;
  const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
  
  return denominator === 0 ? 0 : numerator / denominator;
};

// Function to format X/Y axis labels nicely
export const formatNumber = (value: number) => {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`;
  }
  return value.toString();
};

// Function to format quarters
export const formatQuarter = (year: number, quarter: number) => {
  return `${year} Q${quarter}`;
};
