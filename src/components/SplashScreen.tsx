"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  finishLoading: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth, relaxed progress timer (35ms * 100 ≈ 3.5s total duration)
    // Matches the steady, elegant cruising speed of the Fortuner SUV
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            finishLoading();
          }, 350);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100vh", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070708] text-white select-none px-4 overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-racing-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-racing-400/5 blur-[130px] pointer-events-none" />

      {/* Wind Tunnel Speed Lines in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.1 }}
          className="absolute top-[28%] w-48 h-[1px] bg-gradient-to-r from-transparent via-racing-400 to-transparent"
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.6 }}
          className="absolute top-[65%] w-72 h-[1px] bg-gradient-to-r from-transparent via-racing-500 to-transparent"
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ duration: 2.0, repeat: Infinity, ease: "linear", delay: 1.0 }}
          className="absolute top-[78%] w-44 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
        />
      </div>

      {/* ===================================================================== */}
      {/* PROPORTIONAL, COMPACT M2M FORTUNER SUV (NO BACK LIGHT, CLEAN CRUISE) */}
      {/* ===================================================================== */}
      <motion.div
        initial={{ x: "-45vw" }}
        animate={{ x: "115vw" }}
        transition={{
          duration: 4.2, // Smooth, steady cruising speed across the floor
          ease: [0.25, 0.1, 0.25, 1.0],
          delay: 0.1,
        }}
        className="absolute bottom-[13%] sm:bottom-[15%] pointer-events-none z-20 flex items-center"
      >
        {/* Compact, scaled-down container (reduced size) */}
        <div className="relative w-[190px] sm:w-[240px] md:w-[280px]">
          {/* Front Headlight Light Cone Beam projecting forward onto the road */}
          <div
            className="absolute -right-36 sm:-right-48 top-[34%] w-40 sm:w-52 h-20 sm:h-24 pointer-events-none opacity-65"
            style={{
              background:
                "radial-gradient(ellipse at left top, rgba(255,210,100,0.6) 0%, rgba(255,85,0,0.2) 40%, transparent 75%)",
              clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 65%)",
            }}
          />

          {/* Subtle Ground Underglow beneath the tires */}
          <div className="absolute -bottom-1.5 inset-x-4 h-4 bg-racing-500/30 blur-sm rounded-full pointer-events-none" />

          {/* The White M2M Fortuner-Style SUV Image (NO BACK LIGHT) */}
          <img
            src="/images/cars/m2m-fortuner-suv.png"
            alt="M2M Branded Fortuner SUV"
            className="w-full h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)] brightness-105"
          />
        </div>
      </motion.div>

      {/* Dark Studio Asphalt Floor Ground Line */}
      <div className="absolute bottom-[14%] inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-racing-500/30 to-transparent pointer-events-none" />

      {/* Main Centered Branding & Progress */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-2xl w-full px-4 -mt-10 sm:-mt-14">
        {/* Animated Brand Logo in Precision Architectural Frame */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative p-2.5 border border-racing-500/50 mb-7 shadow-[0_0_35px_rgba(255,85,0,0.25)] bg-black/90 rounded-sm"
        >
          <img
            src="/images/logo/logo.png"
            alt="M2M Car Care Studio Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain block"
          />
        </motion.div>

        {/* English Brand Title (Single line, strictly no wrapping) */}
        <div className="overflow-hidden mb-3 w-full flex justify-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl font-heading font-extrabold tracking-[0.1em] sm:tracking-[0.16em] uppercase text-white whitespace-nowrap"
          >
            M2M Car Care & Accessories
          </motion.h1>
        </div>

        {/* Sub-tagline */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.75 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-stone-400 font-mono flex items-center justify-center gap-2"
          >
            <span>Automotive Detailing & Styling Studio</span>
            <span className="text-racing-500">•</span>
            <span>Bengaluru</span>
          </motion.p>
        </div>

        {/* Brand Racing Orange Progress Bar */}
        <div className="w-48 sm:w-60 h-[2px] bg-white/10 overflow-hidden relative rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-racing-700 via-racing-500 to-amber-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          className="text-xs tracking-widest text-stone-400 mt-3 font-mono"
        >
          {progress}%
        </motion.span>
      </div>

      {/* Bottom Subtitle / Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 text-center z-20 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-mono">
          Premium Automotive Care • Sarjapur Road, Bengaluru
        </span>
      </motion.div>
    </motion.div>
  );
};
