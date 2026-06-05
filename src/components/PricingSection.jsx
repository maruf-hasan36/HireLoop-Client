"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import { Crown, BarChart3, Zap, Plus, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    icon: Crown,
    featured: false,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 17,
    icon: BarChart3,
    featured: true,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Premium",
    monthlyPrice: 99,
    icon: Zap,
    featured: false,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");
  const [mounted, setMounted] = useState(false);

  // Next.js Hydration Error বন্ধ করার জন্য
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isYearly = billing === "yearly";

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.12),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
            Pricing
            <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Toggle Button */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center rounded-full border border-white/10 bg-zinc-900 p-1">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  billing === "monthly"
                    ? "bg-white text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBilling("yearly")}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  billing === "yearly"
                    ? "bg-white text-black shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Yearly
                <span className="rounded-full bg-fuchsia-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                  -25%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3 items-start">
          {plans.map((plan) => {
            const Icon = plan.icon;

            // Yearly সিলেক্ট করলে ২৫% ডিসকাউন্ট হিসাব হবে
            const price = isYearly
              ? Math.floor(plan.monthlyPrice * 0.75)
              : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`group rounded-[28px] border p-7 transition-all duration-300 ${
                  plan.featured
                    ? "border-white/10 bg-zinc-900 shadow-[0_0_80px_rgba(255,255,255,0.05)] lg:scale-105"
                    : "border-white/10 bg-black hover:border-white/20"
                }`}
              >
                {/* Top Section */}
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-zinc-900">
                      <Icon className="h-4 w-4 text-violet-300" />
                    </div>
                    <h3 className="text-2xl font-medium text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <div className="flex items-baseline justify-end">
                      <span className="text-5xl font-bold text-white tracking-tight">
                        ${price}
                      </span>
                      <span className="ml-1 text-sm text-zinc-500 whitespace-nowrap">
                        /mo
                      </span>
                    </div>
                    {isYearly && plan.monthlyPrice > 0 && (
                      <div className="text-[11px] text-zinc-500 mt-1">
                        Billed ${Math.floor(plan.monthlyPrice * 12 * 0.75)}/yr
                      </div>
                    )}
                  </div>
                </div>

                <p className="mb-6 text-sm font-medium text-white">
                  Start building your insights hub:
                </p>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-zinc-400"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-white/10 bg-zinc-900">
                        <Plus size={12} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* HeroUI CTA Button */}
                <div className="mt-12">
                  <Button
                    radius="lg"
                    size="lg"
                    className={`h-14 w-full flex justify-between items-center text-base font-medium transition-all duration-200 ${
                      plan.featured
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-zinc-900 text-white hover:bg-zinc-800 border border-white/10"
                    }`}
                  >
                    <span>Choose This Plan</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
