"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react"; // HeroUI v3
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative md:px-6">
      <div className="mx-auto">
        <nav className="flex h-[74px] items-center justify-between rounded-[22px] border border-white/5 px-5 md:px-8 backdrop-blur-md shadow-2xl">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-[28px] font-extrabold leading-none tracking-[-1px]">
              <span className="text-[#1493FF]">hire</span>
              <span className="text-[#FF7A00]">loop</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-12">
              <Link
                href="/jobs"
                className="text-[14px] font-medium text-white/70 hover:text-white transition"
              >
                Browse Jobs
              </Link>
              <Link
                href="/company"
                className="text-[14px] font-medium text-white/70 hover:text-white transition"
              >
                Company
              </Link>
              <Link
                href="/pricing"
                className="text-[14px] font-medium text-white/70 hover:text-white transition"
              >
                Pricing
              </Link>
            </div>

            <div className="mx-6 h-6 w-px bg-white/10" />

            <Link
              href="/auth/signIn"
              className="mr-6 text-[14px] font-medium text-[#7D73FF] hover:text-[#6558FF] transition"
            >
              Sign In
            </Link>

            <Link
              href={"/auth/signUp"}
              className="h-[46px] min-w-[125px] rounded-xl bg-[#6558FF] text-center flex items-center justify-center px-6 text-[14px] font-semibold text-white hover:bg-[#5246E5] transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white focus:outline-none"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[400px] mt-3" : "max-h-0"}`}
        >
          <div className="rounded-[22px] border border-white/5 bg-zinc-950/90 p-5 backdrop-blur-xl">
            <div className="flex flex-col gap-5">
              <Link href="/jobs" className="text-white/80">
                Browse Jobs
              </Link>
              <Link href="/company" className="text-white/80">
                Company
              </Link>
              <Link href="/pricing" className="text-white/80">
                Pricing
              </Link>
              <div className="h-px bg-white/10" />
              <Link href="/auth/signIn" className="text-[#7D73FF]">
                Sign In
              </Link>
              <Link
                href="/auth/signUp"
                className="w-full h-[48px] flex items-center justify-center bg-[#6558FF] text-white font-semibold rounded-xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
