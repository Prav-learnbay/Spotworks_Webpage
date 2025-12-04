import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import dashboard1 from "@assets/Dashboard_1_1764862219140.png";
import dashboard2 from "@assets/Dashboard_2_1764862219143.png";
import bgImage from "@assets/generated_images/modern_luxury_residential_apartment_complex_in_bangalore_with_lush_greenery_and_skyline.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Bangalore Residential Complex" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-blue-300 text-sm font-medium border border-primary/30 mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            #1 Building Management System in India
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-6 drop-shadow-lg">
            Transform your facility with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">AI Powered</span> Building Management System
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 drop-shadow-md">
            Streamline operations, cut costs, and drive intelligent decision-making with the most advanced platform for residential and commercial facilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base h-14 px-8 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all bg-primary hover:bg-primary/90 border-0">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
              Request Demo
            </Button>
          </div>
        </div>

        {/* Dashboard Composition */}
        <div className="relative max-w-6xl mx-auto mt-8 perspective-1000">
          {/* Main Dashboard Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl"
          >
            <img 
              src={dashboard1} 
              alt="Spotworks Main Dashboard" 
              className="w-full h-auto shadow-2xl"
            />
            
            {/* Reflection/Sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
          </motion.div>

          {/* Secondary Dashboard Image (Floating/Overlapping) */}
          <motion.div 
            initial={{ opacity: 0, x: 40, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute -right-4 -bottom-12 md:-right-12 md:-bottom-20 w-2/3 md:w-1/2 z-30 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 bg-slate-900/80 backdrop-blur-xl hidden md:block"
          >
             <img 
              src={dashboard2} 
              alt="Spotworks Analytics Dashboard" 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
