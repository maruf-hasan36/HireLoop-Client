"use client";

import {
  Search,
  BarChart3,
  Building2,
  Bookmark,
  Sparkles,
  FileText,
  Hexagon,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: BarChart3,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage applications & favorites on your dashboard.",
  },
  {
    icon: Sparkles,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: Hexagon,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_50%)]" />

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.25em] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Features Job
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="group flex items-start gap-4">
                {/* Icon Box */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/50 shadow-[0_0_20px_rgba(168,85,247,0.08)] transition-all duration-300 group-hover:border-violet-500/40">
                  <Icon className="h-7 w-7 text-violet-300" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-7 text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
