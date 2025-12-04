import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Factory, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Tailored for Every <span className="text-secondary">Facility Type</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you manage a skyscraper or a factory floor, Spotworks adapts to your unique operational needs.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 group">
            See all Industries <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <Tabs defaultValue="corporate" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 bg-slate-100/50 dark:bg-slate-800/50 rounded-xl mb-12">
            <TabsTrigger 
              value="corporate" 
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm py-4 rounded-lg gap-2 text-base"
            >
              <Building className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Corporate Offices</span>
              <span className="sm:hidden">Offices</span>
            </TabsTrigger>
            <TabsTrigger 
              value="residential" 
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm py-4 rounded-lg gap-2 text-base"
            >
              <Home className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Residential Apartments</span>
              <span className="sm:hidden">Residential</span>
            </TabsTrigger>
            <TabsTrigger 
              value="industrial" 
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm py-4 rounded-lg gap-2 text-base"
            >
              <Factory className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">Industrial Facilities</span>
              <span className="sm:hidden">Industrial</span>
            </TabsTrigger>
          </TabsList>

          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 md:p-12">
            <TabsContent value="corporate" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Smart Workplaces for Modern Teams</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">Optimize meeting room utilization with real-time booking sensors.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">Automate HVAC and lighting based on actual floor occupancy.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">Streamline visitor management and access control.</p>
                    </li>
                  </ul>
                  <Button className="mt-4">Explore Corporate Solutions</Button>
                </div>
                <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-blue-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden border border-white/50 shadow-lg">
                  {/* Abstract representation of office */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <Building className="w-32 h-32 opacity-20" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-4 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Energy Savings</span>
                      <span className="text-green-600 text-sm font-bold">-18%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-[82%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="residential" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Elevated Living Experiences</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <p className="text-muted-foreground">Digital community notices and resident communication apps.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <p className="text-muted-foreground">Efficient handling of maintenance requests and ticket tracking.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                      </div>
                      <p className="text-muted-foreground">Smart parcel locker integrations and amenity booking.</p>
                    </li>
                  </ul>
                  <Button className="mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground">Explore Residential Solutions</Button>
                </div>
                <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-teal-100 to-emerald-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden border border-white/50 shadow-lg">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <Home className="w-32 h-32 opacity-20" />
                  </div>
                   <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-4 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Resident Satisfaction</span>
                      <span className="text-teal-600 text-sm font-bold">4.8/5.0</span>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <div key={i} className="h-2 w-full bg-teal-500 rounded-full opacity-100 last:opacity-40"></div>)}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="industrial" className="mt-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Maximized Uptime & Safety</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                      </div>
                      <p className="text-muted-foreground">Predictive maintenance alerts for critical machinery.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                      </div>
                      <p className="text-muted-foreground">Digital safety checklists and compliance auditing.</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-0.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                      </div>
                      <p className="text-muted-foreground">Asset tracking across large warehouses and campuses.</p>
                    </li>
                  </ul>
                  <Button className="mt-4 bg-orange-600 hover:bg-orange-700">Explore Industrial Solutions</Button>
                </div>
                <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden border border-white/50 shadow-lg">
                   <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    <Factory className="w-32 h-32 opacity-20" />
                  </div>
                   <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-4 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Downtime Reduced</span>
                      <span className="text-orange-600 text-sm font-bold">85%</span>
                    </div>
                     <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-orange-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
