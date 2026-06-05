"use client";

import {
  MapPin,
  Laptop,
  DollarSign,
  ArrowRight,
  Briefcase,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 3,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 4,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 5,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    id: 6,
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
];

function JobCard({ job }) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#1a1a1a] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#222222]">
      {/* Title */}
      <h3 className="text-xl font-bold text-white">{job.title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white/50">{job.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        <span className="flex items-center gap-1.5 text-xs text-white/60">
          <MapPin size={13} className="text-purple-400" />
          {job.location}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-white/60">
          <Laptop size={13} className="text-blue-400" />
          {job.type}
        </span>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-white/60">
        <DollarSign size={13} className="text-emerald-400" />
        {job.salary}
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/10" />

      {/* Apply Button */}
      <button className="flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition-all duration-200 hover:gap-3 hover:text-white">
        Apply Now
        <ArrowRight size={14} />
      </button>
    </div>
  );
}

const CardSection = () => {
  return (
    <div>
      <section className="min-h-screen w-full bg-black px-6 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-14 flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400">
              <span className="h-1 w-1 rounded-full bg-purple-400" />
              Smart Job Discovery
              <span className="h-1 w-1 rounded-full bg-purple-400" />
            </div>
            <h2 className="max-w-lg text-4xl font-bold leading-tight text-white md:text-5xl">
              The roles you&apos;d never find by searching
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Footer Button */}
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/40 hover:bg-white/5 hover:text-white">
              <Briefcase size={14} />
              View all job open
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardSection;
