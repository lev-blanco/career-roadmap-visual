/**
 * PortfolioSection — Portfolio projects with impact badges
 * Mission Control: impact-ranked cards with tag pills
 * Dark mode compatible
 */

import { motion } from "framer-motion";
import { portfolioProjects } from "@/lib/data";
import { Star } from "lucide-react";

const impactStyles = {
  highest: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/30", label: "Highest Impact" },
  high: { bg: "bg-amber/10", text: "text-amber dark:text-amber-light", border: "border-amber/30", label: "High Impact" },
  medium: { bg: "bg-slate-100 dark:bg-slate-700", text: "text-slate-500 dark:text-slate-400", border: "border-slate-200 dark:border-slate-600", label: "Medium Impact" },
};

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-950">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Artifacts</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Portfolio Projects</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Projects that demonstrate how you think, not just what you built. Framed as narrative case studies with measurable impact.
          </p>
        </div>

        <div className="space-y-4">
          {portfolioProjects.map((project, i) => {
            const impact = impactStyles[project.impact];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col md:flex-row md:items-start gap-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 shrink-0">
                  {i === 0 ? (
                    <Star size={18} className="text-teal fill-teal/20" />
                  ) : (
                    <span className="font-mono text-sm font-bold text-slate-400 dark:text-slate-500">#{i + 1}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                    <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${impact.bg} ${impact.text} ${impact.border}`}>
                      {impact.label}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
