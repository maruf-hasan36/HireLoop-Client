"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";

const footerSections = [
  {
    title: "Product",
    links: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  },
  {
    title: "Navigations",
    links: ["Help center", "Career library", "Contact"],
  },
  {
    title: "Resources",
    links: ["Brand Guideline", "Newsroom"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 md:gap-14 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Replace with Image if you have logo */}
              <Link href="/">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  <span className="text-[#0B86FF]">hire</span>
                  <span className="text-[#C46A00]">loop</span>
                </h2>
              </Link>

              <p className="mt-6 max-w-sm text-base md:text-lg leading-8 text-white/30">
                The AI-native career platform. Built for people who take their
                work seriously.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-10 md:mt-16 flex items-center gap-3 md:gap-4">
              <Button
                isIconOnly
                radius="md"
                className="h-12 w-12 md:h-14 md:w-14 bg-[#0F0F10] text-white hover:bg-[#1A1A1C]"
              >
                <LogoFacebook width={22} height={22} />
              </Button>

              <Button
                isIconOnly
                radius="md"
                className="h-12 w-12 md:h-14 md:w-14 bg-[#5446F5] text-white hover:bg-[#6356ff]"
              >
                <span className="text-lg md:text-xl font-bold">P</span>
              </Button>

              <Button
                isIconOnly
                radius="md"
                className="h-12 w-12 md:h-14 md:w-14 bg-[#0F0F10] text-white hover:bg-[#1A1A1C]"
              >
                <LogoLinkedin width={22} height={22} />
              </Button>
            </div>
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 md:mb-8 text-lg md:text-xl font-semibold text-[#5446F5]">
                {section.title}
              </h3>

              <ul className="space-y-3 md:space-y-5">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-base md:text-lg text-white/30 transition duration-300 hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Area */}
        <div className="mt-16 md:mt-20 lg:mt-24 border-t border-white/5 pt-6 md:pt-8">
          <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:justify-end lg:text-right lg:gap-8">
            <p className="text-sm md:text-base text-white/30">
              Copyright 2026 — Hierloop. All rights reserved.
            </p>

            <p className="text-sm md:text-base text-white/30">
              Terms & Policy - Privacy Guideline
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
