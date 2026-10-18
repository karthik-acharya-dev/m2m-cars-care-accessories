"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen";

export function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen finishLoading={() => setLoading(false)} />}
      </AnimatePresence>
      {children}
    </>
  );
}
