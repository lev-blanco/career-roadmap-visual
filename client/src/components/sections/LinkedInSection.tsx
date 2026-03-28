/**
 * LinkedInSection — LinkedIn strategy with headline preview and rules
 * Mission Control: clean info cards with monospace accents
 */

import { motion } from "framer-motion";
import { linkedinStrategy } from "@/lib/data";
import { Linkedin, AlertCircle, MessageSquare, Clock, Eye } from "lucide-react";

export function LinkedInSection() {
  return (
    <section id="linkedin" className="py-20 bg-white">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Visibility</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">LinkedIn Strategy</h2>
          <p className="text-slate-500 leading-relaxed">
            Profile engineering for algorithmic discovery. Only the first 40–50 characters show in search snippets — front-load keywords.
          </p>
        </div>

        {/* Headline preview */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
          <p className="font-mono text-xs tracking-wider uppercase text-slate-400 mb-3">Optimized Headline</p>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                <Linkedin size={18} className="text-teal" />
              </div>
              <div>
                <p className="font-semibold text-sm text-slate-900">Your Name</p>
                <p className="text-xs text-slate-500 leading-relaxed max-w-lg">{linkedinStrategy.headline}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Framework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <MessageSquare size={16} className="text-teal" />
              About Section — "Pain-First" Framework
            </h3>
            <div className="space-y-3">
              {linkedinStrategy.aboutFramework.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold text-teal">{i + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.step}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Key Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white border border-slate-200 rounded-xl p-5"
          >
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle size={16} className="text-amber" />
              Algorithm & Engagement Rules
            </h3>
            <div className="space-y-3 mb-6">
              {linkedinStrategy.keyRules.map((rule, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber/60 mt-2 shrink-0" />
                  <span className="text-sm text-slate-600 leading-relaxed">{rule}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-slate-400" />
                <span className="font-mono text-xs text-slate-500">Posting Cadence</span>
              </div>
              <p className="text-sm font-medium text-slate-700">{linkedinStrategy.postingCadence}</p>
            </div>
          </motion.div>
        </div>

        {/* Top Skills */}
        <div className="mt-6 flex items-center gap-3">
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">Pin Top 3:</span>
          {linkedinStrategy.topSkills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-xs px-3 py-1.5 rounded-full bg-teal/10 text-teal border border-teal/20 font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
