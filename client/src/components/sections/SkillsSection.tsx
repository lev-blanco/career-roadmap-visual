/**
 * SkillsSection — Skill categories with expandable cards
 * Mission Control: priority badges, monospace labels
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { Brain, Smartphone, Layers, Accessibility, Code, Settings, ChevronDown, Sparkles, Eye } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  brain: Brain,
  smartphone: Smartphone,
  layers: Layers,
  accessibility: Accessibility,
  code: Code,
  settings: Settings,
  sparkles: Sparkles,
  eye: Eye,
};

const priorityStyles = {
  critical: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", label: "Critical" },
  high: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", label: "High" },
  medium: { bg: "bg-slate-100", text: "text-slate-500", border: "border-slate-200", label: "Medium" },
};

const SKILLS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445691242/JUYdVWgdePHz6RuVd8Htog/skills-radar-bg-jL8pmncHAvHBpVNVoTkQZr.webp";

export function SkillsSection() {
  const [expanded, setExpanded] = useState<string | null>(skillCategories[0].title);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] bg-center bg-no-repeat bg-cover pointer-events-none"
        style={{ backgroundImage: `url(${SKILLS_BG})` }}
      />

      <div className="container relative z-10">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Competencies</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Skills to Develop</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Eight skill domains ordered by priority. Focus on critical areas first for maximum career impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code;
            const priority = priorityStyles[cat.priority];
            const isOpen = expanded === cat.title;

            return (
              <motion.div
                key={cat.title}
                layout
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : cat.title)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-teal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-sm truncate">{cat.title}</h3>
                      <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${priority.bg} ${priority.text} ${priority.border}`}>
                        {priority.label}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-slate-400 dark:text-slate-500">{cat.skills.length} skills</p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <div className="border-t border-slate-100 dark:border-slate-700 pt-4 space-y-2">
                          {cat.skills.map((skill, j) => (
                            <div
                              key={j}
                              className="flex items-start gap-2.5 py-1.5"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-teal/40 mt-1.5 shrink-0" />
                              <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
