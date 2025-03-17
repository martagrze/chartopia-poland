
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DataSelector from '@/components/DataSelector';
import ChartView from '@/components/ChartView';
import { polishRegions } from '@/lib/data';

const Index = () => {
  const [activeRegion, setActiveRegion] = useState("Mazowieckie");
  const [fromYear, setFromYear] = useState(2018);
  const [toYear, setToYear] = useState(2023);

  const handleFilterChange = (region: string, from: number, to: number) => {
    setActiveRegion(region);
    setFromYear(from);
    setToYear(to);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-block"
              >
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  Polish Statistical Data Visualization
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-6xl font-light tracking-tight"
              >
                Beautiful insights from <span className="text-primary font-medium">Polish data</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-muted-foreground text-lg md:text-xl max-w-lg"
              >
                Explore the relationship between real estate prices and salaries across Poland with elegant, interactive visualizations.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="pt-4"
              >
                <a 
                  href="#data-explorer"
                  className="bg-primary text-white px-6 py-3 rounded-xl shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Start Exploring
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 md:mt-0"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="w-80 h-80"
                >
                  <img src="/src/assets/poland-map.svg" alt="Poland Map" className="w-full h-full" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-0 right-0 -mb-6 -mr-6"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 120,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="w-32 h-32 rounded-full bg-primary/5 backdrop-blur-md flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 backdrop-blur-md flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary font-medium">
                        Data
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light mb-4">
              Visualizing Polish <span className="text-primary font-medium">Economic Data</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform transforms complex statistical data into elegant, insightful visualizations to help you understand economic trends in Poland.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-soft p-6 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Real-time Analysis</h3>
              <p className="text-muted-foreground">
                Explore the latest data from stat.gov.pl and other public sources with real-time analysis and correlation studies.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-soft p-6 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.869a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Custom Visualization</h3>
              <p className="text-muted-foreground">
                Create beautiful, customized charts and graphs that reveal relationships between different economic factors.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-soft p-6 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Regional Insights</h3>
              <p className="text-muted-foreground">
                Compare data across different Polish regions to discover regional variations and economic patterns.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Data Explorer Section */}
      <section id="data-explorer" className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary font-medium">Data Explorer</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visualize the relationship between real estate prices and average salaries across different regions of Poland.
            </p>
          </motion.div>
          
          <DataSelector onFilterChange={handleFilterChange} />
          
          <div className="mt-12">
            <ChartView 
              region={activeRegion} 
              fromYear={fromYear} 
              toYear={toYear} 
            />
          </div>
        </div>
      </section>
      
      {/* Data Sources Section */}
      <section id="data" className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light mb-4">
              <span className="text-primary font-medium">Data Sources</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our visualizations are based on high-quality data from reliable public sources in Poland.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-soft p-6 border border-gray-100"
            >
              <h3 className="text-xl font-medium mb-4">Statistical Office of Poland (GUS)</h3>
              <p className="text-muted-foreground mb-4">
                The main source of official statistical data in Poland, providing comprehensive economic and social indicators.
              </p>
              <a 
                href="https://stat.gov.pl/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit stat.gov.pl
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-soft p-6 border border-gray-100"
            >
              <h3 className="text-xl font-medium mb-4">National Bank of Poland (NBP)</h3>
              <p className="text-muted-foreground mb-4">
                The central bank of Poland provides valuable data on the housing market, interest rates, and other financial indicators.
              </p>
              <a 
                href="https://www.nbp.pl/home.aspx?f=/en/statystyka/statystyka.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Visit nbp.pl
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light mb-4">
              About <span className="text-primary font-medium">Chartopia Poland</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated to making Polish statistical data accessible and visually appealing for everyone.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-md rounded-xl shadow-soft p-8 border border-gray-100 max-w-3xl mx-auto"
          >
            <p className="text-muted-foreground mb-4">
              Chartopia Poland was created to bridge the gap between complex statistical data and meaningful insights. Our mission is to transform raw numbers into beautiful visualizations that tell the story of Poland's economic landscape.
            </p>
            <p className="text-muted-foreground mb-4">
              We believe that data should be accessible to everyone, not just statisticians and economists. By creating intuitive, interactive charts, we help users understand the relationships between different economic factors in Poland.
            </p>
            <p className="text-muted-foreground">
              Our current focus is on the relationship between real estate prices and average salaries, but we plan to expand our visualizations to cover other important economic indicators in the future.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
