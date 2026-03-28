/**
 * ActionItemsSection — To-do items with urgency markers and interactive checkboxes
 * Mission Control: status-driven checklist with period grouping
 * Dark mode compatible
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { actionGroups as initialGroups } from "@/lib/data";
import { CheckSquare, Square, AlertTriangle, Clock } from "lucide-react";

export function ActionItemsSection() {
  const [groups, setGroups] = useState(initialGroups);

  const toggleItem = (groupIdx: number, itemIdx: number) => {
    setGroups((prev) =>
      prev.map((group, gi) =>
        gi === groupIdx
          ? {
              ...group,
              items: group.items.map((item, ii) =>
                ii === itemIdx ? { ...item, done: !item.done } : item
              ),
            }
          : group
      )
    );
  };

  const totalItems = groups.reduce((sum, g) => sum + g.items.length, 0);
  const doneItems = groups.reduce(
    (sum, g) => sum + g.items.filter((i) => i.done).length,
    0
  );
  const progress = totalItems > 0 ? (doneItems / totalItems) * 100 : 0;

  return (
    <section id="actions" className="py-20 bg-white dark:bg-slate-950">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Execution</p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Action Items</h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Track your progress across all phases. Click items to mark them as complete.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-mono text-2xl font-bold text-teal">{doneItems}/{totalItems}</p>
              <p className="font-mono text-xs text-slate-400 dark:text-slate-500">completed</p>
            </div>
            <div className="w-32 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-teal rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{group.title}</h3>
                  <p className="font-mono text-xs text-slate-400 dark:text-slate-500">{group.period}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-slate-400 dark:text-slate-500" />
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                    {group.items.filter((i) => i.done).length}/{group.items.length}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                {group.items.map((item, ii) => (
                  <button
                    key={ii}
                    onClick={() => toggleItem(gi, ii)}
                    className={`w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition-colors ${
                      item.done
                        ? "bg-emerald/10"
                        : "hover:bg-slate-50 dark:hover:bg-slate-700"
                    }`}
                  >
                    {item.done ? (
                      <CheckSquare size={16} className="text-emerald mt-0.5 shrink-0" />
                    ) : (
                      <Square size={16} className="text-slate-300 dark:text-slate-600 mt-0.5 shrink-0" />
                    )}
                    <span
                      className={`text-sm leading-relaxed ${
                        item.done
                          ? "text-slate-400 dark:text-slate-500 line-through"
                          : "text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {item.text}
                    </span>
                    {item.urgent && !item.done && (
                      <AlertTriangle size={13} className="text-amber shrink-0 mt-0.5" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
