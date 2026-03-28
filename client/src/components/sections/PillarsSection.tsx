/**
 * PillarsSection — Five reinforcing pillars displayed as cards
 * Mission Control: clean cards with teal accent borders
 * Dark mode compatible
 */

import { motion } from "framer-motion";
import { overview } from "@/lib/data";
import { Shield, Brain, Linkedin, FolderOpen, Crosshair } from "lucide-react";

const pillarIcons = [Shield, Brain, Linkedin, FolderOpen, Crosshair];

export function PillarsSection() {
  return (
    <section id="pillars" className="py-20 bg-white dark:bg-slate-950">
      <div className="container">
        <div className="max-w-xl">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Foundation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Five Reinforcing Pillars</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">The strategy is built on five interconnected pillars, each amplifying the others.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {overview.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 hover:border-teal/30 hover:bg-teal/[0.02] dark:hover:bg-teal/[0.05] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-md bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/15 transition-colors">
                  <Icon size={18} className="text-teal" />
                </div>
                <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-1">{pillar.label}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal/40 to-transparent rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
