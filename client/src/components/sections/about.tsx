
export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 dark:bg-slate-900/50 -skew-x-12 transform translate-x-1/4 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
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
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-blue-500 text-white hover:shadow-lg transition-shadow min-h-[120px]">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg font-medium text-center">Buildings managed</div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-green-500 text-white hover:shadow-lg transition-shadow min-h-[120px]">
                <div className="text-4xl font-bold mb-2">20%</div>
                <div className="text-lg font-medium text-center">Cost savings</div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-purple-500 text-white hover:shadow-lg transition-shadow min-h-[120px]">
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-lg font-medium text-center">KPIs tracked</div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-orange-500 text-white hover:shadow-lg transition-shadow min-h-[120px]">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-lg font-medium text-center">AI agentic Alerts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
