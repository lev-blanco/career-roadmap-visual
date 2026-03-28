/**
 * ContentSection — Content creation strategy with platforms, topics, blog strategy, conferences
 * Mission Control: clean cards with conference deadlines
 * Dark mode compatible
 */

import { motion } from "framer-motion";
import { contentStrategy } from "@/lib/data";
import { PenTool, Globe, BookOpen, Mic, AlertTriangle, Calendar, Share2 } from "lucide-react";

const platformIcons = [Globe, BookOpen, PenTool, BookOpen];

export function ContentSection() {
  return (
    <section id="content" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-teal mb-2">Authority</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">Content Creation Strategy</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Build authority through a multi-platform content flywheel. LinkedIn drives traffic to Substack; Substack builds deep authority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Platforms */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Globe size={16} className="text-teal" />
              Platform Stack
            </h3>
            <div className="space-y-3">
              {contentStrategy.platforms.map((platform, i) => {
                const Icon = platformIcons[i];
                return (
                  <div key={platform.name} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                    <Icon size={14} className="text-teal mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{platform.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{platform.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Blog Post Strategy */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Share2 size={16} className="text-teal" />
              Deep Technical Blog Posts
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {contentStrategy.blogPostStrategy.description}
            </p>
            <div className="space-y-2 mb-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">Cross-post to:</p>
              <div className="flex flex-wrap gap-2">
                {contentStrategy.blogPostStrategy.crossPostTo.map((platform) => (
                  <span key={platform} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-teal/10 text-teal border border-teal/20">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-amber/5 border border-amber/20 rounded-lg p-3">
              <p className="text-xs text-amber dark:text-amber-light font-medium">
                {contentStrategy.blogPostStrategy.linkedinUse}
              </p>
            </div>
          </div>

          {/* High-Value Topics */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <BookOpen size={16} className="text-teal" />
              High-Value Topics
            </h3>
            <div className="space-y-2">
              {contentStrategy.highValueTopics.map((topic, i) => (
                <div key={i} className="flex items-start gap-2.5 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal/40 mt-2 shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conferences */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Mic size={16} className="text-teal" />
              Conference Speaking
            </h3>
            <div className="space-y-3">
              {contentStrategy.conferences.map((conf) => (
                <div key={conf.name} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{conf.name}</p>
                    {conf.deadline !== "TBD" && (
                      <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-amber dark:text-amber-light bg-amber/10 px-2 py-0.5 rounded-full border border-amber/20">
                        <AlertTriangle size={10} />
                        {conf.deadline}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={11} className="text-slate-400 dark:text-slate-500" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">{conf.location}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-4 leading-relaxed">
              Topics on Re.Pack, Module Federation, and Hermes optimization are underrepresented — high acceptance probability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
