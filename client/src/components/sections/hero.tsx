import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import dashboard1 from "@assets/Dashboard_1_1764862596336.png";
import dashboard2 from "@assets/Dashboard_2_1764862596340.png";
import bgImage from "@assets/generated_images/modern_luxury_residential_apartment_complex_in_bangalore_with_lush_greenery_and_skyline.png";

export function Hero() {
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
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live System Status: Optimal
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-xl">
              Transform your facility with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">AI Powered</span> System
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl drop-shadow-md">
              Spotworks digitizes workflows, streamlines operations, and drives intelligent decision-making for modern building management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base h-14 px-8 rounded-full bg-blue-600 hover:bg-blue-500 border-0 shadow-lg shadow-blue-900/20 transition-all">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-base h-14 px-8 rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                View Demo
              </Button>
            </div>
          </div>

          {/* Right: Embedded Dashboard Widget */}
          <div className="relative lg:h-[600px] flex items-end justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[650px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
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

              {/* Composite Dashboard View */}
              <div className="p-2 grid grid-cols-2 gap-2 bg-slate-950/50">
                {/* Top Left: Power Stats (Cropped from Dashboard 1) */}
                <div className="col-span-1 bg-white rounded-lg overflow-hidden h-[200px] relative group">
                  <div className="absolute inset-0 bg-transparent z-10 hover:bg-black/5 transition-colors"></div>
                   {/* CSS Crop to show Power Chart */}
                  <img 
                    src={dashboard1} 
                    alt="Power Management" 
                    className="absolute w-[180%] max-w-none top-[-10%] left-[-70%]"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 text-white text-[10px] rounded backdrop-blur-sm z-20">Power Consumption</div>
                </div>

                {/* Top Right: Water Level (Cropped from Dashboard 2) */}
                <div className="col-span-1 bg-white rounded-lg overflow-hidden h-[200px] relative">
                   {/* CSS Crop to show Water Chart */}
                  <img 
                    src={dashboard2} 
                    alt="Water Management" 
                    className="absolute w-[180%] max-w-none top-[-15%] left-[-5%]"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 text-white text-[10px] rounded backdrop-blur-sm z-20">Water Levels</div>
                </div>

                {/* Bottom: Combined Stats Row */}
                <div className="col-span-2 bg-white rounded-lg overflow-hidden h-[140px] relative flex">
                  <div className="w-1/2 relative overflow-hidden border-r border-slate-100">
                     {/* CSS Crop to show Services */}
                    <img 
                      src={dashboard1} 
                      alt="Service Status" 
                      className="absolute w-[160%] max-w-none top-[-30%] left-[-5%]"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 text-white text-[10px] rounded backdrop-blur-sm z-20">Service Efficiency</div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                     {/* CSS Crop to show Asset Summary */}
                    <img 
                      src={dashboard2} 
                      alt="Asset Summary" 
                      className="absolute w-[180%] max-w-none top-[-12%] left-[-35%]"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 text-white text-[10px] rounded backdrop-blur-sm z-20">Asset Health</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

