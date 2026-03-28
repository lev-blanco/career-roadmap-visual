/**
 * CertificationsSection — Certification cards with status badges
 * Mission Control: stamp-style badges, status indicators
 */

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Lock, Loader2, CheckCircle2, DollarSign, Clock, TrendingUp } from "lucide-react";

const statusConfig = {
  locked: { icon: Lock, label: "Locked", color: "text-slate-400", bg: "bg-slate-100", border: "border-slate-200" },
  "in-progress": { icon: Loader2, label: "In Progress", color: "text-teal", bg: "bg-teal/10", border: "border-teal/30" },
  earned: { icon: CheckCircle2, label: "Earned", color: "text-emerald", bg: "bg-emerald/10", border: "border-emerald/30" },
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Credentials</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Certifications</h2>
          <p className="text-slate-500 leading-relaxed">
            Priority certifications that survive ATS filters and Boolean recruiter searches. Brazil EDE pricing advantage: ~$340 total for CPWA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const status = statusConfig[cert.status];
            const StatusIcon = status.icon;

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-white rounded-xl border ${status.border} p-5 relative overflow-hidden group hover:shadow-sm transition-shadow`}
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
                </div>

                <h3 className="font-semibold text-sm text-slate-900 mb-4 leading-snug">{cert.name}</h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DollarSign size={13} className="text-slate-400" />
                    <span className="font-mono text-xs text-slate-500">{cert.cost}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-slate-400" />
                    <span className="font-mono text-xs text-slate-500">{cert.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={13} className="text-slate-400" />
                    <span className="text-xs text-slate-500">{cert.roi}</span>
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
