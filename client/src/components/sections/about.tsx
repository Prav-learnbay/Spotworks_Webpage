import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 dark:bg-slate-900/50 -skew-x-12 transform translate-x-1/4 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
              About Spotworks
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              Pioneering the Future of <span className="text-gradient">Intelligent Facilities</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Spotworks, we believe that buildings should be as smart as the people who inhabit them. We're on a mission to digitize the built world, transforming static structures into dynamic, data-driven environments.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded by a team of facility management experts and AI engineers, Spotworks bridges the gap between traditional operations and cutting-edge technology, empowering facility managers to do more with less.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <span className="font-medium">Data-Driven Decisions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium">Seamless Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <span className="font-medium">End-to-End Automation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-1 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <span className="font-medium">Scalable Architecture</span>
              </div>
            </div>

            <Button size="lg" className="rounded-full px-8">
              Meet Our Team
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-12">
                <div className="bg-slate-100 dark:bg-slate-800 h-48 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <h3 className="text-4xl font-bold text-primary">500+</h3>
                  <p className="text-muted-foreground font-medium">Buildings Managed</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 h-64 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <h3 className="text-4xl font-bold text-secondary">24/7</h3>
                  <p className="text-muted-foreground font-medium">AI Monitoring</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 dark:bg-white h-64 rounded-2xl p-6 flex flex-col justify-between text-white dark:text-slate-900 hover:shadow-xl transition-shadow">
                  <h3 className="text-4xl font-bold">15%</h3>
                  <p className="opacity-80 font-medium">Average Cost Savings</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 h-48 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <h3 className="text-4xl font-bold text-orange-500">1M+</h3>
                  <p className="text-muted-foreground font-medium">Workflows Automated</p>
                </div>
              </div>
            </div>
            {/* Decorative circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-primary/5 to-transparent opacity-50 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
