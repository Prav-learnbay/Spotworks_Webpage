import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import dashboard1 from "@assets/Dashboard_1_1764862596336.png";
import dashboard2 from "@assets/Dashboard_2_1764862596340.png";
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

          {/* Right Side Visuals */}
          <div className="lg:w-1/2 relative flex justify-center items-center">
            
            {/* Background Context Image - Faded & Blurred */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-40 blur-sm border border-slate-200 dark:border-slate-800">
               <img 
                src={bgImage} 
                alt="Bangalore Context" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Unified Dashboard Window */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 w-[95%] max-h-[600px] overflow-y-auto rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex flex-col no-scrollbar"
            >
              {/* Window Header */}
              <div className="sticky top-0 z-30 flex items-center gap-2 px-4 py-3 bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="ml-4 px-3 py-1 rounded-md bg-white/50 dark:bg-black/20 text-xs font-medium text-muted-foreground flex-1 text-center">
                  spotworks-dashboard.app
                </div>
              </div>

              {/* Stitched Content */}
              <div className="flex flex-col">
                <img 
                  src={dashboard1} 
                  alt="Spotworks Operations Dashboard" 
                  className="w-full h-auto object-cover border-b border-slate-100 dark:border-slate-800"
                />
                <img 
                  src={dashboard2} 
                  alt="Spotworks Utilities Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>

            </motion.div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-4 bottom-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-30"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">System Status</p>
                  <p className="font-bold text-foreground">All Systems Optimal</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
