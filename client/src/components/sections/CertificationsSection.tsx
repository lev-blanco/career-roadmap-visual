/**
 * CertificationsSection — Certification cards with status badges, provider tabs
 * Mission Control: stamp-style badges, status indicators, study time info
 * Dark mode compatible
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Lock, Loader2, CheckCircle2, DollarSign, Clock, TrendingUp, ShieldCheck, BookOpen, Gauge, Server, Cloud, Shield } from "lucide-react";

const statusConfig = {
  locked: { icon: Lock, label: "Locked", color: "text-slate-400 dark:text-slate-500", bg: "bg-slate-100 dark:bg-slate-800", border: "border-slate-200 dark:border-slate-700" },
  "in-progress": { icon: Loader2, label: "In Progress", color: "text-teal dark:text-teal-light", bg: "bg-teal/10", border: "border-teal/30" },
  earned: { icon: CheckCircle2, label: "Earned", color: "text-emerald dark:text-emerald-light", bg: "bg-emerald/10", border: "border-emerald/30" },
  mandatory: { icon: ShieldCheck, label: "Mandatory", color: "text-amber dark:text-amber-light", bg: "bg-amber/10", border: "border-amber/30" },
  isc2: { icon: Shield, color: "text-red-600", bg: "bg-red-50", border: "border-red-200" },
  google: { icon: Cloud, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  ibm: { icon: Server, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200" },
};

const effortStyles = {
  low: { label: "Low", color: "text-emerald dark:text-emerald-light" },
  medium: { label: "Medium", color: "text-amber dark:text-amber-light" },
  high: { label: "High", color: "text-red-500 dark:text-red-400" },
};

type ProviderFilter = "all" | "iaap" | "aws" | "gcp";

export function CertificationsSection() {
  const [filter, setFilter] = useState<ProviderFilter>("all");

  const filtered = filter === "all" ? certifications : certifications.filter((c) => c.provider === filter);

  const tabs: { key: ProviderFilter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "iaap", label: "IAAP (WCAG)" },
    { key: "aws", label: "AWS" },
    { key: "gcp", label: "GCP" },
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <div className="max-w-xl mb-8">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Credentials</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Certifications</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Priority certifications that survive ATS filters and Boolean recruiter searches. WCAG certifications are mandatory for your accessibility niche.
          </p>
        </div>

        {/* Provider filter tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`font-mono text-xs tracking-wider px-4 py-2 rounded-lg border transition-all ${
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
          {filtered.map((cert, i) => {
            const status = statusConfig[cert.status];
            const StatusIcon = status.icon;
            const effort = effortStyles[cert.effort];

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-white dark:bg-slate-800 rounded-xl border ${status.border} p-5 relative overflow-hidden group hover:shadow-sm transition-shadow`}
              >
                {/* Status badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${status.bg}`}>
                    <StatusIcon
                      size={12}
                      className={`${status.color} ${cert.status === "in-progress" ? "animate-spin" : ""}`}
                    />
                    <span className={`font-mono text-[10px] uppercase tracking-wider font-medium ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    {cert.provider.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 mb-4 leading-snug">{cert.name}</h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DollarSign size={13} className="text-slate-400 dark:text-slate-500" />
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{cert.cost}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-slate-400 dark:text-slate-500" />
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{cert.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={13} className="text-slate-400 dark:text-slate-500" />
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{cert.studyHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge size={13} className="text-slate-400 dark:text-slate-500" />
                    <span className={`font-mono text-xs font-medium ${effort.color}`}>Effort: {effort.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={13} className="text-slate-400 dark:text-slate-500" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">{cert.roi}</span>
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
