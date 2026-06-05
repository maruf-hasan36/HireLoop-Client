"use client";

import { Button } from "@heroui/react";

const Bg = () => {
  return (
    <div>
      <section className="relative w-full bg-black py-32 overflow-hidden flex items-center justify-center">
        {/* Background Grid Image */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[100%] bg-bottom bg-no-repeat bg-contain pointer-events-none opacity-90"
          style={{
            backgroundImage: "url('/assets/images/cta-bg.png')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-[1.15] mb-6">
            Your next role is <br className="sm:hidden" /> already looking for
            you
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-normal tracking-wide">
            Build a profile in three minutes. The matches start arriving
            tomorrow morning.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              radius="md"
              size="lg"
              className="w-full sm:w-auto h-12 px-6 bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-all duration-200"
            >
              Create a free account
            </Button>

            <Button
              radius="md"
              size="lg"
              variant="bordered"
              className="w-full sm:w-auto h-12 px-6 border-white/10 bg-zinc-950/40 text-zinc-300 font-medium text-sm hover:bg-zinc-900 hover:text-white transition-all duration-200"
            >
              View pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bg;
