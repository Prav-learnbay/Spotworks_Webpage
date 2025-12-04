import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import dashboard1 from "@assets/Dashboard_1_1764862219140.png";
import dashboard2 from "@assets/Dashboard_2_1764862219143.png";
import bgImage from "@assets/generated_images/modern_luxury_residential_apartment_complex_in_bangalore_with_lush_greenery_and_skyline.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background">
      
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              #1 Building Management System in India
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
              Transform your facility with <span className="text-gradient">AI Powered</span> Building Management System
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Spotworks digitizes workflows, streamlines operations, and drives intelligent decision-making for modern building management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base h-12 px-8 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 rounded-full border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900">
                View Demo
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Cut Operational Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Proactive Maintenance</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Data Composition */}
          <div className="lg:w-1/2 relative">
             {/* Base Image: Bangalore Apartment */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-800 bg-slate-900/5 dark:bg-white/5 backdrop-blur-sm group aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img 
                src={bgImage} 
                alt="Modern Residential Complex in Bangalore" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Darkener for better contrast if needed */}
              <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
            </div>

            {/* Dashboard 1 Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 w-[70%] z-20 rounded-xl overflow-hidden shadow-2xl border border-white/40 bg-white/90 backdrop-blur-md dark:bg-slate-900/90 dark:border-slate-700"
            >
              <img 
                src={dashboard1} 
                alt="Spotworks Dashboard Data" 
                className="w-full h-auto"
              />
            </motion.div>

            {/* Dashboard 2 Overlay */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -top-10 -right-6 w-[45%] z-30 rounded-xl overflow-hidden shadow-xl border border-white/40 bg-white/90 backdrop-blur-md dark:bg-slate-900/90 dark:border-slate-700"
            >
              <img 
                src={dashboard2} 
                alt="Spotworks Analytics Data" 
                className="w-full h-auto"
              />
            </motion.div>
            
            {/* Floating Pill Decoration */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute bottom-10 -right-10 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 max-w-[200px] z-40"
            >
              <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Efficiency</p>
                <p className="text-sm font-bold text-foreground">+24% Saved</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
