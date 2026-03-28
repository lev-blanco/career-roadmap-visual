/**
 * StrategySection — Career strategy cards
 * Mission Control: four strategy pillars in a grid
 */

import { motion } from "framer-motion";
import { careerStrategies } from "@/lib/data";
import { Target, Building, Search, Wrench } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  target: Target,
  building: Building,
  search: Search,
  wrench: Wrench,
};

export function StrategySection() {
  return (
    <section id="strategy" className="py-20 bg-slate-50">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Approach</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Career Strategy</h2>
          <p className="text-slate-500 leading-relaxed">
            Positioning as one of the rarest skill combinations globally: React Native performance + WCAG + AI integration.
          </p>
        </div>

        {/* Positioning statement */}
        <div className="bg-white border border-teal/20 rounded-xl p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-teal" />
          <p className="font-mono text-xs tracking-wider uppercase text-teal mb-2 pl-4">Positioning Statement</p>
          <blockquote className="text-lg text-slate-700 italic leading-relaxed pl-4">
            "I help mobile teams achieve 60fps performance and seamless cross-platform experiences through React Native performance optimization and modern architecture patterns."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {careerStrategies.map((strategy, i) => {
            const Icon = iconMap[strategy.icon] || Target;
            return (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Icon size={18} className="text-teal" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{strategy.title}</h3>
                </div>
                <ul className="space-y-2">
                  {strategy.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal/40 mt-2 shrink-0" />
                      <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
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
