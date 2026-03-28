/**
 * EducationPricingSection — Combined pricing table for certifications & courses
 * Mission Control: sortable table, categorized, priority/effort/study time columns
 * Dark mode compatible
 */

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { getEducationItems, type EducationItem } from "@/lib/data";
import { ArrowUpDown, GraduationCap, Award, ChevronUp, ChevronDown } from "lucide-react";

type SortKey = "priceNum" | "priority" | "effort" | "studyHours" | "name";
type SortDir = "asc" | "desc";

const priorityOrder = { critical: 0, high: 1, medium: 2, recommended: 3 };
const effortOrder = { high: 0, medium: 1, low: 2 };

const priorityStyles: Record<string, { bg: string; text: string }> = {
  critical: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-400" },
  high: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-400" },
  medium: { bg: "bg-slate-100 dark:bg-slate-700", text: "text-slate-600 dark:text-slate-300" },
  recommended: { bg: "bg-teal/10", text: "text-teal dark:text-teal-light" },
};

const effortStyles: Record<string, { text: string }> = {
  low: { text: "text-emerald dark:text-emerald-light" },
  medium: { text: "text-amber dark:text-amber-light" },
  high: { text: "text-red-500 dark:text-red-400" },
};

export function EducationPricingSection() {
  const [sortKey, setSortKey] = useState<SortKey>("priceNum");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [typeFilter, setTypeFilter] = useState<"all" | "certification" | "course">("all");

  const items = useMemo(() => getEducationItems(), []);

  const filtered = useMemo(() => {
    return typeFilter === "all" ? items : items.filter((i) => i.type === typeFilter);
  }, [items, typeFilter]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "priceNum":
          cmp = a.priceNum - b.priceNum;
          break;
        case "priority":
          cmp = priorityOrder[a.priority] - priorityOrder[b.priority];
          break;
        case "effort":
          cmp = effortOrder[a.effort] - effortOrder[b.effort];
          break;
        case "studyHours":
          cmp = parseInt(a.studyHours) - parseInt(b.studyHours);
          break;
        case "name":
          cmp = a.name.localeCompare(b.name);
          break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);

  const totalCost = useMemo(() => sorted.reduce((sum, i) => sum + i.priceNum, 0), [sorted]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ArrowUpDown size={12} className="text-slate-300 dark:text-slate-600" />;
    return sortDir === "asc" ? (
      <ChevronUp size={12} className="text-teal" />
    ) : (
      <ChevronDown size={12} className="text-teal" />
    );
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-950">
      <div className="container">
        <div className="max-w-xl mb-8">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Investment</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            Education & Certification Pricing
          </h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Complete breakdown of all certifications and courses with approximate costs, study time, and effort level. Click column headers to sort.
          </p>
        </div>

        {/* Filter + Total */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex gap-2">
            {(["all", "certification", "course"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`font-mono text-xs tracking-wider px-4 py-2 rounded-lg border transition-all flex items-center gap-1.5 ${
                  typeFilter === t
                    ? "bg-teal/10 border-teal/30 text-teal dark:text-teal-light"
                    : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                {t === "certification" && <Award size={12} />}
                {t === "course" && <GraduationCap size={12} />}
                {t === "all" ? "All" : t === "certification" ? "Certifications" : "Courses"}
              </button>
            ))}
          </div>
          <div className="font-mono text-sm text-slate-600 dark:text-slate-300">
            Total: <span className="text-teal font-bold">${totalCost.toLocaleString()}</span>
            <span className="text-slate-400 dark:text-slate-500 ml-1">({sorted.length} items)</span>
          </div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700"
        >
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th className="px-4 py-3">
                  <button onClick={() => handleSort("name")} className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                    Name <SortIcon col="name" />
                  </button>
                </th>
                <th className="px-4 py-3 hidden md:table-cell">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">Type</span>
                </th>
                <th className="px-4 py-3">
                  <button onClick={() => handleSort("priceNum")} className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                    Price <SortIcon col="priceNum" />
                  </button>
                </th>
                <th className="px-4 py-3">
                  <button onClick={() => handleSort("priority")} className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                    Priority <SortIcon col="priority" />
                  </button>
                </th>
                <th className="px-4 py-3 hidden lg:table-cell">
                  <button onClick={() => handleSort("effort")} className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                    Effort <SortIcon col="effort" />
                  </button>
                </th>
                <th className="px-4 py-3 hidden sm:table-cell">
                  <button onClick={() => handleSort("studyHours")} className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                    Study Time <SortIcon col="studyHours" />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((item, i) => {
                const pStyle = priorityStyles[item.priority];
                const eStyle = effortStyles[item.effort];
                return (
                  <tr
                    key={item.name + i}
                    className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-4 py-3.5">
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">{item.name}</span>
                      </div>
                      <span className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 block">{item.provider}</span>
                    </td>
                    <td className="px-4 py-3.5 hidden md:table-cell">
                      <span className={`inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        item.type === "certification"
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                      }`}>
                        {item.type === "certification" ? <Award size={10} /> : <GraduationCap size={10} />}
                        {item.type === "certification" ? "Cert" : "Course"}
                      </span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="font-mono text-sm font-semibold text-slate-700 dark:text-slate-200">{item.cost}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-medium ${pStyle.bg} ${pStyle.text}`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 hidden lg:table-cell">
                      <span className={`font-mono text-xs font-medium capitalize ${eStyle.text}`}>{item.effort}</span>
                    </td>
                    <td className="px-4 py-3.5 hidden sm:table-cell">
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{item.studyHours}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
