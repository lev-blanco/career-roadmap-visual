/**
 * HeroSection — Mission Control hero with dark aerospace background
 * Light text on dark background image
 */

import { motion } from "framer-motion";
import { overview } from "@/lib/data";
import { MapPin, DollarSign, Briefcase } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445691242/JUYdVWgdePHz6RuVd8Htog/hero-bg-mYAyssgfxAmYKRRE7xD3A5.webp";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[480px] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/60" />

      <div className="relative z-10 container py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-teal-light mb-4">
            Career Strategy & Roadmap
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            {overview.title}
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            A strategic roadmap targeting remote US-market roles, built on five reinforcing pillars — from certifications to niche positioning.
          </p>

          {/* Key metrics */}
          <div className="flex flex-wrap gap-6">
            <MetricBadge
              icon={<DollarSign size={16} />}
              label="Target"
              value={overview.target}
            />
            <MetricBadge
              icon={<MapPin size={16} />}
              label="Location"
              value={overview.location}
            />
            <MetricBadge
              icon={<Briefcase size={16} />}
              label="Investment"
              value={overview.investment}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MetricBadge({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3">
      <div className="text-teal">{icon}</div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
