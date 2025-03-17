
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ComposedChart,
} from 'recharts';
import { fetchRealEstateVsSalaryData, RealEstateVsSalaryData, calculateCorrelation } from '@/lib/data';
import { 
  chartColors, 
  generatePriceToSalaryRatioData, 
  generateScatterData, 
  formatCurrency,
  getChartContainerClasses,
  interpretCorrelation,
  getCorrelationColor
} from '@/lib/chartUtils';

interface ChartViewProps {
  region: string;
  fromYear: number;
  toYear: number;
}

export function ChartView({ region, fromYear, toYear }: ChartViewProps) {
  const [data, setData] = useState<RealEstateVsSalaryData[]>([]);
  const [loading, setLoading] = useState(true);
  const [correlation, setCorrelation] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const newData = await fetchRealEstateVsSalaryData(region, fromYear, toYear);
        setData(newData);
        setCorrelation(calculateCorrelation(newData));
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [region, fromYear, toYear]);

  const priceToSalaryRatioData = generatePriceToSalaryRatioData(data);
  const scatterData = generateScatterData(data);

  const correlationText = interpretCorrelation(correlation);
  const correlationColor = getCorrelationColor(correlation);

  const chartContainerClasses = getChartContainerClasses(loading);
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${chartContainerClasses} col-span-1 h-64 md:h-80`}
        >
          <h3 className="text-lg font-medium mb-3">Correlation Analysis</h3>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-5xl font-light mb-2" style={{ color: correlationColor }}>
              {correlation.toFixed(2)}
            </div>
            <div className="text-xl font-medium mb-1" style={{ color: correlationColor }}>
              {correlationText}
            </div>
            <p className="text-muted-foreground text-center max-w-xs">
              {correlation > 0 
                ? "Positive correlation between salaries and real estate prices."
                : "Negative correlation between salaries and real estate prices."}
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${chartContainerClasses} col-span-2 h-64 md:h-80`}
        >
          <h3 className="text-lg font-medium mb-3">Real Estate Price vs. Salary</h3>
          <ResponsiveContainer width="100%" height="90%">
            <ScatterChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.gridLines} />
              <XAxis 
                type="number" 
                dataKey="x" 
                name="Salary" 
                unit=" PLN"
                label={{ value: 'Average Salary (PLN)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                name="Price" 
                unit=" PLN/m²"
                label={{ value: 'Price per m² (PLN)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value: any) => formatCurrency(value)} 
                contentStyle={{ backgroundColor: chartColors.tooltipBackground, borderRadius: '8px' }}
              />
              <Scatter
                name={`${region} (${fromYear}-${toYear})`}
                data={scatterData}
                fill={chartColors.primary}
                stroke="#fff"
                strokeWidth={1}
                className="chart-animate-in"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`${chartContainerClasses} h-80`}
        >
          <h3 className="text-lg font-medium mb-3">Price and Salary Trends</h3>
          <ResponsiveContainer width="100%" height="90%">
            <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.gridLines} />
              <XAxis 
                dataKey="year" 
                tickFormatter={(year, index) => {
                  const item = data[index];
                  return item ? `${item.year} Q${item.quarter}` : year;
                }}
              />
              <YAxis 
                yAxisId="left" 
                orientation="left" 
                label={{ value: 'Price per m² (PLN)', angle: -90, position: 'insideLeft' }}
              />
              <YAxis 
                yAxisId="right" 
                orientation="right" 
                label={{ value: 'Average Salary (PLN)', angle: 90, position: 'insideRight' }}
              />
              <Tooltip 
                formatter={(value: any) => formatCurrency(value)} 
                contentStyle={{ backgroundColor: chartColors.tooltipBackground, borderRadius: '8px' }}
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="averagePricePerSqm" 
                name="Price per m²"
                stroke={chartColors.primary} 
                dot={{ stroke: chartColors.primary, strokeWidth: 2, r: 4, fill: '#fff' }}
                strokeWidth={2}
                activeDot={{ r: 6 }}
                className="chart-animate-in"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="averageSalary" 
                name="Average Salary"
                stroke={chartColors.secondary} 
                dot={{ stroke: chartColors.secondary, strokeWidth: 2, r: 4, fill: '#fff' }}
                strokeWidth={2}
                activeDot={{ r: 6 }}
                className="chart-animate-in"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`${chartContainerClasses} h-80`}
        >
          <h3 className="text-lg font-medium mb-3">Price-to-Salary Ratio Over Time</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={priceToSalaryRatioData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartColors.gridLines} />
              <XAxis dataKey="name" />
              <YAxis 
                label={{ value: 'Price-to-Salary Ratio (m²/month)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value: any) => value.toFixed(2)} 
                contentStyle={{ backgroundColor: chartColors.tooltipBackground, borderRadius: '8px' }}
              />
              <Bar 
                dataKey="ratio" 
                name="Price-to-Salary Ratio" 
                fill={chartColors.quaternary}
                radius={[4, 4, 0, 0]}
                className="chart-animate-in"
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}

export default ChartView;
