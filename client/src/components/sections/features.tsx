import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aiIcon from "@assets/generated_images/icon_for_ai_and_automation_features.png";
import qrIcon from "@assets/generated_images/icon_for_qr_code_checklists.png";
import assetIcon from "@assets/generated_images/AssetManagement.png";
import attendanceImage from "@assets/generated_images/attendance_checking_system.png";
import dailyAlertsImage from "@assets/generated_images/DailyAlerts.png";
import kpiTrackerImage from "@assets/generated_images/KPI_tracker.png";
import { QrCode, BrainCircuit, Boxes, CalendarClock, Users, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Attendance",
    description: "Capture staff attendance seamlessly with geofencing and biometric integration options for accurate time tracking.",
    icon: Users,
    image: attendanceImage,
    color: "bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    span: "md:col-span-1"
  },
  {
    title: "QR Code Checklists",
    description: "Streamline soft services with location-based QR scanning ensuring proof of presence and task completion.",
    icon: QrCode,
    image: qrIcon,
    color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    span: "md:col-span-1"
  },
  {
    title: "Asset Management",
    description: "Track resource lifecycle, location, and maintenance history in one centralized digital twin registry.",
    icon: Boxes,
    image: assetIcon,
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    span: "md:col-span-1"
  },
  {
    title: "Daily alerts",
    description: "Daily alerts provides insights to onsite and backend team on operational gaps at every facility.",
    icon: CalendarClock,
    image: dailyAlertsImage,
    color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
    span: "md:col-span-1"
  },
  {
    title: "KPI tracker",
    description: "KPIs are the real metrics that showcase the standard of service-level quality maintained at every facility.",
    icon: BarChart3,
    image: kpiTrackerImage,
    color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400",
    span: "md:col-span-1"
  },
  {
    title: "AI Agent interaction",
    description: "AI agent whatsapp interface with stakeholders - clients, Facility team and vendors to enhance collaboration and share realtime information.",
    icon: BrainCircuit,
    image: aiIcon,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    span: "md:col-span-1"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/5 rounded-full mb-4">
            <span className="text-sm font-medium text-primary px-4 py-1">Power Features</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Everything You Need to <span className="text-primary">Operate Seamlessly</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Spotworks consolidates fragmented facility management tools into one cohesive, intelligent platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={feature.span}
            >
              <Card className="h-full border-none shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-xl transition-all duration-300 group overflow-hidden bg-white dark:bg-slate-800 relative">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  {feature.image && (
                    <div className="mt-6 rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                </CardContent>
                {/* Decorative gradient blob */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
