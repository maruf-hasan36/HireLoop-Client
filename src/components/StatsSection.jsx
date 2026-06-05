import React from "react";
import { Card } from "@heroui/react";
import {
  Briefcase,
  Building2,
  Users,
  Star,
  Search,
  MapPin,
} from "lucide-react";

const stats = [
  {
    label: "Active Jobs",
    value: "50K",
    icon: <Briefcase className="w-5 h-5 text-zinc-400" />,
  },
  {
    label: "Companies",
    value: "12K",
    icon: <Building2 className="w-5 h-5 text-zinc-400" />,
  },
  {
    label: "Job Seekers",
    value: "2M",
    icon: <Users className="w-5 h-5 text-zinc-400" />,
  },
  {
    label: "Satisfaction Rate",
    value: "97%",
    icon: <Star className="w-5 h-5 text-zinc-400" />,
  },
];

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
];

export default function StatsSection() {
  return (
    <div className="relative w-full min-h-screen text-white font-sans overflow-hidden selection:bg-blue-600/30 bg-black flex flex-col justify-between">
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/assets/images/globe.png')",
          backgroundSize: "contain",
        }}
      />
      {/* ================= CONTENT CONTAINER ================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-5 pb-5 flex flex-col items-center w-full flex-grow justify-center">
        {/* Top Active Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm text-xs font-medium tracking-wide text-zinc-400 mb-2 shadow-inner">
          <span className="text-base">💼</span>
          <span className="text-white font-semibold">50,000+</span> NEW JOBS
          THIS MONTH
        </div>

        {/* Hero Headers */}
        <h1 className="text-3xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-center leading-tight">
          Find Your Dream Job Today
        </h1>
        <p className="text-zinc-400 text-center max-w-2xl text-base sm:text-lg mb-8 leading-relaxed">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* ================= SEARCH BAR ================= */}
        <div className="w-full max-w-3xl bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-2.5 backdrop-blur-xl flex flex-col md:flex-row items-center gap-2 mb-6 shadow-2xl">
          <div className="w-full flex items-center px-3 gap-2 border-b md:border-b-0 md:border-r border-zinc-800 pb-2 md:pb-0">
            <Search className="w-5 h-5 text-zinc-500 shrink-0" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent border-none text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-0 py-2"
            />
          </div>
          <div className="w-full flex items-center px-3 gap-2">
            <MapPin className="w-5 h-5 text-zinc-500 shrink-0" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent border-none text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-0 py-2"
            />
          </div>
          <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-xl transition-all duration-200 shadow-lg flex items-center justify-center shrink-0">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Trending Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs sm:text-sm">
          <span className="text-zinc-500 mr-1">Trending Position</span>
          {trendingPositions.map((pos) => (
            <button
              key={pos}
              className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-300 hover:border-zinc-700 hover:text-white transition-all text-xs"
            >
              {pos}
            </button>
          ))}
        </div>

        {/* ================= STATS SECTION ================= */}
        <div className="text-center ">
          <h2 className="text-2xl sm:text-3xl mb-10 font-semibold tracking-tight mb- max-w-xl mx-auto leading-snug text-zinc-300">
            Assisting over{" "}
            <span className="text-white font-bold">15,000 job seekers</span>{" "}
            <br />
            find their dream positions.
          </h2>

          {/* Grid Layout for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {stats.map((stat, idx) => (
              <Card
                key={idx}
                className="bg-zinc-950/40 border border-zinc-900/80 backdrop-blur-xl p-6 rounded-2xl text-left transition-all duration-300 hover:border-zinc-800"
              >
                {/* HeroUI v3 Header Pattern */}
                <Card.Header className="p-0 mb-8 flex justify-start">
                  <div className="p-1 text-zinc-400">{stat.icon}</div>
                </Card.Header>

                {/* HeroUI v3 Content Pattern */}
                <Card.Content className="p-0">
                  <div className="text-4xl font-bold tracking-tight mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-zinc-500 text-xs font-medium tracking-wide">
                    {stat.label}
                  </div>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
