"use client";

import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";

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
        const opacity = Math.max(0, 1 - scrollY / 450);
        const translateY = -scrollY * 0.28;

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
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-85"
        >
          <source
            src="https://avishkarhyperloop.com/videos/VfxVideo.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ================= OVERLAYS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-green-900/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.65)_100%)]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-screen flex items-start pt-28 sm:pt-32 px-6 sm:px-10 lg:px-24">
        <div
          className="flex flex-col items-start space-y-6 sm:space-y-8 max-w-4xl"
          style={heroStyle}
        >
          {/* Eyebrow */}
          <span className="text-green-400 font-tech uppercase tracking-[0.5em] text-[clamp(0.8rem,2.8vw,1rem)] opacity-90">
            Welcome to the Future
          </span>

          {/* Divider */}
          <div className="w-32 h-[2px] bg-gradient-to-r from-green-500 to-green-300 shadow-[0_0_18px_rgba(34,197,94,0.9)]" />

          {/* ================= MAIN HEADLINE ================= */}
          <h1 className="
            font-tech font-extrabold text-white tracking-tight leading-[0.78]
            text-[clamp(2.9rem,15vw,9.1rem)]
            drop-shadow-[0_20px_60px_rgba(0,0,0,0.85)]
          ">
            HYPERLOOP
            <br />
            <span className="font-light block">
              FOR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 to-green-600">
                INDIA
              </span>
            </span>
          </h1>

          {/* ================= DESCRIPTION ================= */}
          <p className="
            max-w-2xl text-gray-300 font-light
            text-[clamp(1.05rem,4.5vw,1.25rem)]
            leading-relaxed
          ">
            Pioneering the fifth mode of transport. Avishkar Hyperloop is
            engineering a sustainable, ultra-high-speed future for global
            connectivity.
          </p>

          {/* ================= CTA ================= */}
          <div className="pt-10">
            <button className="
              group relative
              px-10 py-5
              border border-green-500
              bg-green-500/10
              text-white font-tech font-bold
              text-[clamp(0.95rem,4vw,1.1rem)]
              tracking-[0.25em]
              overflow-hidden
              transition-all duration-300
              hover:bg-green-500 hover:text-black
              hover:shadow-[0_0_36px_rgba(34,197,94,0.55)]
            ">
              <span className="relative z-10 flex items-center gap-3">
                DISCOVER OUR POD
                <ChevronRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
