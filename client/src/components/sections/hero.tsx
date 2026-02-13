import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useDemoDialog } from "@/contexts/demo-dialog-context";
import dashboardImage from "@assets/Dashboard.png";
import bgImage from "@assets/generated_images/modern_luxury_residential_apartment_complex_in_bangalore_with_lush_greenery_and_skyline.png";

export function Hero() {
  const { openDialog } = useDemoDialog();
  
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden">
      
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Bangalore Residential Complex" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8 max-w-2xl pt-20 lg:pt-0">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-xl">
              Transform your facility with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">AI powered</span> Building management system
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl drop-shadow-md">
              Spotworks digitizes workflows, streamlines operations, and drives intelligent decision-making for modern building management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 border-0 shadow-lg shadow-blue-900/20 transition-all">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base h-14 px-8 rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm" onClick={openDialog}>
                View Demo
              </Button>
            </div>
          </div>

          {/* Right: Embedded Dashboard Widget */}
          <div className="relative lg:h-[600px] flex items-center justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[1400px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Glass Header */}
              <div className="px-6 py-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm font-medium text-white/80">Facility Overview Dashboard</span>
                </div>
                <div className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs font-bold uppercase tracking-wider">
                  Real-time
                </div>
              </div>

              {/* Combined Dashboard View */}
              <div className="p-4 bg-slate-950/50">
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={dashboardImage} 
                    alt="Facility Overview Dashboard" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

