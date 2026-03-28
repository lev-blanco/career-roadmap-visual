/**
 * SideNav — Fixed left navigation rail
 * Mission Control: minimal icon-based nav with teal active state
 */

import { useState, useEffect } from "react";
import {
  Rocket,
  Layers,
  Clock,
  Brain,
  Award,
  FolderOpen,
  Target,
  Linkedin,
  PenTool,
  CheckSquare,
  Cpu,
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const sections = [
  { id: "hero", icon: Rocket, label: "Overview" },
  { id: "pillars", icon: Layers, label: "Pillars" },
  { id: "timeline", icon: Clock, label: "Timeline" },
  { id: "skills", icon: Brain, label: "Skills" },
  { id: "certifications", icon: Award, label: "Certifications" },
  { id: "portfolio", icon: FolderOpen, label: "Portfolio" },
  { id: "strategy", icon: Target, label: "Strategy" },
  { id: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { id: "content", icon: PenTool, label: "Content" },
  { id: "actions", icon: CheckSquare, label: "Actions" },
  { id: "tech", icon: Cpu, label: "Tech Stack" },
];

export function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(top.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
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
    <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-16 flex-col items-center justify-center gap-1 z-50 bg-white/80 backdrop-blur-sm border-r border-slate-200">
      {sections.map(({ id, icon: Icon, label }) => (
        <Tooltip key={id} delayDuration={0}>
          <TooltipTrigger asChild>
            <button
              onClick={() => scrollTo(id)}
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200
                ${active === id
                  ? "bg-teal/10 text-teal"
                  : "text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                }
              `}
            >
              <Icon size={18} strokeWidth={active === id ? 2.5 : 1.5} />
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-mono text-xs">
            {label}
          </TooltipContent>
        </Tooltip>
      ))}
    </nav>
  );
}
