
import { useState } from 'react';
import { motion } from 'framer-motion';
import { polishRegions } from '@/lib/data';
import { cn } from '@/lib/utils';

interface DataSelectorProps {
  onFilterChange: (region: string, fromYear: number, toYear: number) => void;
}

export function DataSelector({ onFilterChange }: DataSelectorProps) {
  const [region, setRegion] = useState("Mazowieckie");
  const [fromYear, setFromYear] = useState(2018);
  const [toYear, setToYear] = useState(2023);
  
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
  };
  
  const handleFromYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFromYear = parseInt(e.target.value);
    setFromYear(newFromYear);
    if (newFromYear > toYear) {
      setToYear(newFromYear);
    }
  };
  
  const handleToYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newToYear = parseInt(e.target.value);
    setToYear(newToYear);
    if (newToYear < fromYear) {
      setFromYear(newToYear);
    }
  };
  
  const handleApplyFilters = () => {
    onFilterChange(region, fromYear, toYear);
  };
  
  const yearOptions = [];
  for (let year = 2018; year <= 2023; year++) {
    yearOptions.push(year);
  }
  
  const selectClasses = "py-2 px-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-soft border border-gray-100"
    >
      <h2 className="text-xl font-medium mb-4">Data Explorer</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label htmlFor="region" className="block text-sm font-medium text-gray-700">
            Region
          </label>
          <select
            id="region"
            value={region}
            onChange={handleRegionChange}
            className={selectClasses}
          >
            {polishRegions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="fromYear" className="block text-sm font-medium text-gray-700">
            From Year
          </label>
          <select
            id="fromYear"
            value={fromYear}
            onChange={handleFromYearChange}
            className={selectClasses}
          >
            {yearOptions.map((year) => (
              <option key={`from-${year}`} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="toYear" className="block text-sm font-medium text-gray-700">
            To Year
          </label>
          <select
            id="toYear"
            value={toYear}
            onChange={handleToYearChange}
            className={selectClasses}
          >
            {yearOptions.map((year) => (
              <option key={`to-${year}`} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleApplyFilters}
          className={cn(
            "bg-primary text-white py-2 px-5 rounded-lg",
            "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50",
            "transition-all shadow-sm"
          )}
        >
          Apply Filters
        </motion.button>
      </div>
    </motion.div>
  );
}

export default DataSelector;
