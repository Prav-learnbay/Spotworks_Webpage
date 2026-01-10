import problemImage from "@assets/generated_images/FMS_problem.png";
import solutionImage from "@assets/generated_images/Spotworks_solution.png";

const problems = [
  {
    title: "Chronic Equipment Downtime",
    impact: "Unplanned breakdowns causing production halts and revenue loss.",
    solution: "Predictive schedules, live alerts, and automated escalations reduce unplanned downtime.",
  },
  {
    title: "Inefficient Resource Allocation",
    impact: "Overstaffing or understaffing due to lack of real-time resource utilization data.",
    solution: "Live utilization dashboards and workload balancing ensure the right crew on every job.",
  },
  {
    title: "Escalating Operational Costs",
    impact: "Wasted energy, materials, and labor due to lack of process optimization.",
    solution: "Monitor consumption, standardize workflows, and trigger actions to cut waste.",
  },
  {
    title: "Compliance & Audit Failures",
    impact: "Risk of fines and shutdowns from missed regulatory requirements.",
    solution: "Compliance calendars, audit trails, and evidence capture keep teams inspection-ready.",
  },
  {
    title: "Poor Vendor Management",
    impact: "Delays and cost overruns from untracked vendor performance.",
    solution: "Vendor scorecards, SLA tracking, and on-time alerts keep partners accountable.",
  },
  {
    title: "Lack of Real-Time Visibility",
    impact: "No dashboard to monitor facility health, leading to blind spots.",
    solution: "A unified command center with live status, alarms, and trends removes blind spots.",
  },
  {
    title: "Ineffective Asset Tracking",
    impact: "Lost or underutilized assets draining capital.",
    solution: "QR/asset registry with location history and utilization reports prevents loss and idle time.",
  },
  {
    title: "Slow Incident Response",
    impact: "Delayed action on facility issues, increasing risk and liability.",
    solution: "Structured intake, routing, and automated escalations accelerate fixes.",
  },
  {
    title: "Leadership Bottlenecks",
    impact: "Senior managers stuck in daily firefighting, unable to focus on growth.",
    solution: "Automated reporting and delegated workflows free leaders for strategy.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-primary/5 rounded-full mb-4">
            <span className="text-sm font-medium text-primary px-4 py-1">
              Why SpotWorks Matters
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
            High Value Problems solved by <span className="text-primary">Spotworks</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The biggest operational pains we eliminate across facilities and estates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-lg overflow-hidden flex flex-col">
            <img
              src={problemImage}
              alt="Facilities grappling with operational challenges"
              className="w-full h-64 md:h-72 lg:h-80 object-cover"
              loading="lazy"
            />
            <div className="px-6 py-5 space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-200 bg-slate-900 rounded-full inline-block px-3 py-1">
                Problem
              </p>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                Fragmented maintenance, blind spots, and firefighting drain time, money, and focus.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-lg overflow-hidden flex flex-col">
            <img
              src={solutionImage}
              alt="SpotWorks unified dashboard providing real-time facility visibility"
              className="w-full h-64 md:h-72 lg:h-80 object-cover"
              loading="lazy"
            />
            <div className="px-6 py-5 space-y-2">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary bg-primary/10 rounded-full inline-block px-3 py-1">
                Solution
              </p>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
                SpotWorks unifies monitoring, automation, and workflows so teams prevent issues and act fast.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg shadow-slate-200/60 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {problems.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-900/60 p-5 h-full flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 rounded-full px-3 py-1">
                    Problem {idx + 1}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Impact + Solution
                  </span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <div className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <div>
                    <span className="font-semibold text-foreground">Impact:</span>{" "}
                    {item.impact}
                  </div>
                  <div className="rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 px-3 py-2">
                    <span className="font-semibold text-primary">SpotWorks:</span>{" "}
                    {item.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

