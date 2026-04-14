/**
 * CoursesSection — Course cards with category filters
 * Mission Control: provider badges, priority indicators, study time
 * Dark mode compatible
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { courses } from "@/lib/data";
import { BookOpen, Clock, Gauge, DollarSign, Brain, Server, Smartphone, Accessibility, Code, Shield } from "lucide-react";

const categoryConfig = {
  ai: { icon: Brain, label: "AI", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-900/30" },
  "system-design": { icon: Server, label: "System Design", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/30" },
  mobile: { icon: Smartphone, label: "Mobile", color: "text-teal dark:text-teal-light", bg: "bg-teal/10" },
  accessibility: { icon: Accessibility, label: "Accessibility", color: "text-amber dark:text-amber-light", bg: "bg-amber/10" },
  fullstack: { icon: Code, label: "Full-Stack", color: "text-slate-600 dark:text-slate-300", bg: "bg-slate-100 dark:bg-slate-700" },
};

const priorityStyles = {
  high: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-400", label: "High" },
  medium: { bg: "bg-slate-100 dark:bg-slate-700", text: "text-slate-600 dark:text-slate-300", label: "Medium" },
  recommended: { bg: "bg-teal/10", text: "text-teal dark:text-teal-light", label: "Recommended" },
};

const effortStyles = {
  low: { label: "Low", color: "text-emerald dark:text-emerald-light" },
  medium: { label: "Medium", color: "text-amber dark:text-amber-light" },
  high: { label: "High", color: "text-red-500 dark:text-red-400" },
};

type CatFilter = "all" | "ai" | "system-design" | "mobile" | "accessibility" | "fullstack";

export function CoursesSection() {
  const [filter, setFilter] = useState<CatFilter>("all");

  const filtered = filter === "all" ? courses : courses.filter((c) => c.category === filter);

  const tabs: { key: CatFilter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "ai", label: "AI" },
    { key: "system-design", label: "System Design" },
    { key: "mobile", label: "Mobile" },
    { key: "accessibility", label: "Accessibility" },
    { key: "fullstack", label: "Full-Stack" },
  ];

  return (
    <section id="courses" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <div className="max-w-xl mb-8">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Learning</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Courses & Training</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Targeted courses to fill specific skill gaps. Completing well-known programs with certificates from recognized providers strengthens your profile.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`font-mono text-xs tracking-wider px-3 py-1.5 rounded-lg border transition-all ${
                filter === tab.key
                  ? "bg-teal/10 border-teal/30 text-teal dark:text-teal-light"
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((course, i) => {
            const cat = categoryConfig[course.category];
            const CatIcon = cat.icon;
            const priority = priorityStyles[course.priority];
            const effort = effortStyles[course.effort];

            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5 hover:shadow-sm transition-shadow group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full ${cat.bg}`}>
                    <CatIcon size={11} className={cat.color} />
                    <span className={`font-mono text-[10px] uppercase tracking-wider ${cat.color}`}>{cat.label}</span>
                  </div>
                  <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${priority.bg} ${priority.text}`}>
                    {priority.label}
                  </span>
                </div>

                <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1 leading-snug">{course.title}</h3>
                <p className="font-mono text-[11px] text-teal dark:text-teal-light mb-3">{course.provider}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{course.description}</p>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1.5">
                    <DollarSign size={12} className="text-slate-400 dark:text-slate-500" />
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-300">{course.cost}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Gauge size={12} className="text-slate-400 dark:text-slate-500" />
                    <span className={`font-mono text-[11px] font-medium ${effort.color}`}>{effort.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <Clock size={12} className="text-slate-400 dark:text-slate-500" />
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400">{course.studyHours}</span>
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
