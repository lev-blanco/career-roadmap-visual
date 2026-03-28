/**
 * TechStackSection — Technology categories in a compact grid
 * Mission Control: monospace tech pills grouped by category
 */

import { motion } from "framer-motion";
import { techCategories } from "@/lib/data";
import { Cpu } from "lucide-react";

export function TechStackSection() {
  return (
    <section id="tech" className="py-20 bg-slate-50">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Ecosystem</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Technologies & Tools</h2>
          <p className="text-slate-500 leading-relaxed">
            The complete technology ecosystem supporting this career strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white border border-slate-200 rounded-xl p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Cpu size={14} className="text-teal" />
                <h3 className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-150 hover:border-teal/30 hover:bg-teal/[0.03] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="font-mono text-xs text-slate-400">
            Total Investment: ~$1,500–$2,000 USD — recoverable within the first month of compensation increase.
          </p>
        </div>
      </div>
    </section>
  );
}
