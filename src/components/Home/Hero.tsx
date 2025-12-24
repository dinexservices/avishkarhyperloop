"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
// Video moved to public folder
const videovfx = "/videos/VfxVideo.mp4";

export default function Hero() {
  const [heroStyle, setHeroStyle] = useState({
    opacity: 1,
    transform: "translateY(0px)",
  });

  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Fade out slightly faster to keep the transition smooth
        const opacity = Math.max(0, 1 - scrollY / 500);
        const translateY = -scrollY * 0.2;

        setHeroStyle({
          opacity,
          transform: `translateY(${translateY}px)`,
        });

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source
            src={videovfx}
            type="video/mp4"
          />
        </video>
      </div>

      {/* ================= OVERLAYS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Darker Vignette for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-10 lg:px-24">
        <div
          className="flex flex-col items-center text-center space-y-6 sm:space-y-10"
          style={heroStyle}
        >
          {/* Eyebrow */}
          <div className="flex flex-col items-center space-y-4">
            <span className="text-green-400 font-tech uppercase tracking-[0.4em] text-[clamp(0.7rem,2vw,0.9rem)] opacity-90">
              Welcome to the Future
            </span>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
          </div>

          {/* ================= MAIN HEADLINE ================= */}
          <h1 className="
            font-tech font-extrabold text-white tracking-tight leading-[0.78]
            text-[clamp(2.9rem,15vw,9.1rem)]
            drop-shadow-[0_20px_60px_rgba(0,0,0,0.85)]
          ">
            HYPERLOOP
            <br />
            <span className="font-light block mt-2">
              FOR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-green-500">
                INDIA
              </span>
            </span>
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <p className="
            max-w-2xl text-gray-300 font-light
            text-[clamp(1rem,3vw,1.15rem)]
            leading-relaxed mx-auto
            px-4
          ">
            Pioneering the fifth mode of transport. Avishkar Hyperloop is
            engineering a sustainable, ultra-high-speed future for global
            connectivity.
          </p>

          {/* ================= CTA ================= */}
          <div className="pt-6 sm:pt-10">
            <button className="
              group relative
              px-8 py-4 sm:px-12 sm:py-5
              border border-green-500/50
              bg-green-500/5
              text-white font-tech font-bold
              text-[clamp(0.85rem,2.5vw,1rem)]
              tracking-[0.2em]
              transition-all duration-500
              hover:bg-green-500 hover:text-black
              hover:shadow-[0_0_50px_rgba(34,197,94,0.4)]
              rounded-sm
            ">
              <span className="relative z-10 flex items-center gap-3">
                DISCOVER OUR POD
                <ChevronRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-green-500 to-transparent" />
      </div>
    </section>
  );
}