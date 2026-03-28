/**
 * MobileNav — Floating bottom navigation for mobile screens
 * Mission Control: compact icon bar with active state
 * Dark mode compatible
 */

import { useState, useEffect } from "react";
import {
  Rocket,
  Clock,
  Brain,
  Award,
  Target,
  CheckSquare,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const quickNav = [
  { id: "hero", icon: Rocket, label: "Top" },
  { id: "timeline", icon: Clock, label: "Timeline" },
  { id: "skills", icon: Brain, label: "Skills" },
  { id: "certifications", icon: Award, label: "Certs" },
  { id: "strategy", icon: Target, label: "Strategy" },
  { id: "actions", icon: CheckSquare, label: "Actions" },
];

export function MobileNav() {
  const [active, setActive] = useState("hero");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(top.target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    quickNav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="lg:hidden fixed bottom-4 left-4 right-4 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg px-2 py-2">
      <div className="flex items-center justify-around">
        {quickNav.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all ${
              active === id
                ? "bg-teal/10 text-teal"
                : "text-slate-400 dark:text-slate-500"
            }`}
          >
            <Icon size={16} strokeWidth={active === id ? 2.5 : 1.5} />
            <span className="font-mono text-[9px] tracking-wider">{label}</span>
          </button>
        ))}
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all text-slate-400 dark:text-slate-500"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          <span className="font-mono text-[9px] tracking-wider">Theme</span>
        </button>
      </div>
    </nav>
  );
}
