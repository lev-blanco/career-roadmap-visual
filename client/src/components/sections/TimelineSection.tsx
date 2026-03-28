/**
 * TimelineSection — 12-month execution timeline with phase cards
 * Mission Control: horizontal phase bar + vertical detail cards
 * Dark mode compatible
 */

import { motion } from "framer-motion";
import { timelinePhases } from "@/lib/data";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const statusColors = {
  completed: { bg: "bg-emerald/10", border: "border-emerald/30", text: "text-emerald", dot: "bg-emerald" },
  active: { bg: "bg-teal/10", border: "border-teal/30", text: "text-teal", dot: "bg-teal" },
  upcoming: { bg: "bg-slate-100 dark:bg-slate-800", border: "border-slate-200 dark:border-slate-700", text: "text-slate-400 dark:text-slate-500", dot: "bg-slate-300 dark:bg-slate-600" },
};

const TIMELINE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445691242/JUYdVWgdePHz6RuVd8Htog/timeline-accent-3tr488uozaMCG8HsmKK7Ps.webp";

export function TimelineSection() {
  return (
    <section id="timeline" className="py-20 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] bg-center bg-no-repeat bg-contain pointer-events-none"
        style={{ backgroundImage: `url(${TIMELINE_BG})` }}
      />

      <div className="container relative z-10">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Execution</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">12-Month Timeline</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Three phases from foundation to authority. Total investment: ~$2,500–$3,500 USD.
          </p>
        </div>

        {/* Phase progress bar */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2">
          {timelinePhases.map((phase, i) => {
            const colors = statusColors[phase.status];
            return (
              <div key={phase.id} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${colors.border} ${colors.bg}`}>
                  <div className={`w-2 h-2 rounded-full ${colors.dot} ${phase.status === "active" ? "animate-pulse" : ""}`} />
                  <span className={`font-mono text-xs font-medium ${colors.text} whitespace-nowrap`}>
                    {phase.months}
                  </span>
                </div>
                {i < timelinePhases.length - 1 && (
                  <ArrowRight size={14} className="text-slate-300 dark:text-slate-600 mx-1 shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        {/* Phase detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timelinePhases.map((phase, i) => {
            const colors = statusColors[phase.status];
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-xl border ${colors.border} bg-white dark:bg-slate-800 p-6 relative overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${colors.dot}`} />

                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-mono text-xs font-semibold ${colors.text}`}>{phase.months}</span>
                  {phase.status === "active" && (
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-teal/10 text-teal px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4">{phase.title}</h3>

                <ul className="space-y-2.5">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      {phase.status === "completed" ? (
                        <CheckCircle2 size={15} className="text-emerald mt-0.5 shrink-0" />
                      ) : (
                        <Circle size={15} className={`${colors.text} mt-0.5 shrink-0`} />
                      )}
                      <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
