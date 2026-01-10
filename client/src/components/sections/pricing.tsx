import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useDemoDialog } from "@/contexts/demo-dialog-context";

const pricingPlans = [
  {
    name: "Attendance",
    description: "Smart attendance tracking solution",
    features: [
      "Geofencing-based check-in/check-out",
      "Biometric integration support",
      "Real-time attendance monitoring",
      "Attendance reports & analytics",
      "Mobile app for staff",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Soft Services",
    description: "Comprehensive soft services management",
    features: [
      "QR code-based checklists",
      "Task assignment & tracking",
      "Housekeeping management",
      "Gardening & pest control",
      "Hygiene compliance tracking",
      "Proof of presence verification",
    ],
    popular: false,
  },
  {
    name: "Asset Management",
    description: "Complete asset lifecycle management",
    features: [
      "Asset registry & tracking",
      "PPM scheduling",
      "Maintenance history",
      "Asset location tracking",
      "Work order management",
      "Asset health monitoring",
    ],
    popular: false,
  },
  {
    name: "Complete Package",
    description: "All-in-one facility management solution",
    features: [
      "All Attendance features",
      "All Soft Services features",
      "All Asset Management features",
      "Power & Water monitoring",
      "Decision making dashboard",
      "AI-powered automation",
      "Priority support",
      "Custom integrations",
    ],
    popular: true,
  },
];

export function Pricing() {
  const { openDialog } = useDemoDialog();
  
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/5 rounded-full mb-4">
            <span className="text-sm font-medium text-primary px-4 py-1">Pricing Plans</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Choose the Right <span className="text-primary">Plan</span> for Your Facility
          </h2>
          <p className="text-muted-foreground text-lg">
            Flexible pricing options designed to scale with your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl transition-all duration-300 border ${
                plan.popular
                  ? "border-primary border-2 scale-105"
                  : "border-slate-100 dark:border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "variant-outline"
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={openDialog}
              >
                Get quote
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

