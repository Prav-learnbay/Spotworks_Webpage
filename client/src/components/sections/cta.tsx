import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useDemoDialog } from "@/contexts/demo-dialog-context";

export function CTA() {
  const { openDialog } = useDemoDialog();
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary dark:bg-blue-950 z-0">
        {/* Abstract Pattern */}
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto">
          Ready to Transform Your Facility Management?
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join the future of intelligent building operations. Cut costs, improve efficiency, and stay proactive with Spotworks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-primary bg-white hover:bg-blue-50 h-14 px-8 text-base rounded-full font-semibold shadow-lg" onClick={openDialog}>
            Schedule a Demo
          </Button>
          <Button size="lg" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base rounded-full font-semibold">
            Contact Sales <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
