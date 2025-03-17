
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-soft",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-soft" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="font-medium text-xl tracking-tight">Chartopia Poland</span>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a 
              href="#data" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Data Sources
            </a>
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </a>
          </motion.nav>
          
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <button className="bg-primary text-white px-5 py-2 rounded-xl hover:bg-primary/90 transition-colors">
              Start Exploring
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
