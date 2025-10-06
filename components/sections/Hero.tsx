"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TicketsDemo } from "@/components/demos/TicketsDemo";
import { ContentDemo } from "@/components/demos/ContentDemo";
import { AskKBDemo } from "@/components/demos/AskKBDemo";
import { GradientBackground } from "@/components/ui/gradient-background";

type DemoTab = {
  id: string;
  title: string;
  caption: string;
  Component: React.ComponentType;
};

const demoTabs: DemoTab[] = [
  {
    id: "tickets",
    title: "Tickets",
    caption: "Prioritize, assign and resolve faster with AI-suggested answers.",
    Component: TicketsDemo,
  },
  {
    id: "content",
    title: "Content",
    caption:
      "Write, edit and publish in the inbuilt editor—no attachments required.",
    Component: ContentDemo,
  },
  {
    id: "ask",
    title: "Ask KB",
    caption:
      "Hybrid search + AI answers with citations to the right step or section.",
    Component: AskKBDemo,
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  useEffect(() => {
    if (!autoRotate) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % demoTabs.length);
    }, 5000);
    return () => clearInterval(id);
  }, [autoRotate]);

  return (
    <section className="relative min-h-screen py-32 px-4 sm:px-8 flex flex-col justify-center overflow-hidden">
      {/* Animated gradient background */}
      <GradientBackground intensity="medium" animate={true} className="!z-0" />

      <div className="container mx-auto relative z-10">
        {/* Intro copy */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-foreground"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Resolve tickets faster with an AI Knowledge Base.
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground/80"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Wavebase unifies ticketing, search, and content so customers find
            answers instantly—and your helpdesk closes more tickets with less
            effort.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://toplevelview.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide font-semibold bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8"
            >
              Book a demo
            </a>
            <a
              href="https://toplevelview.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide font-semibold hover:bg-accent/10 text-accent h-14 px-8"
            >
              See how it works
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Demo with macOS window style */}
        <div
          className="mt-12 max-w-6xl mx-auto"
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          {/* macOS Window Frame */}
          <div className="rounded-xl shadow-2xl overflow-hidden border border-border/50 bg-card">
            {/* Window Title Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 text-center text-xs text-muted-foreground font-medium">
                Wavebase Demo
              </div>
              <div className="w-[52px]"></div> {/* Spacer for centering */}
            </div>

            {/* Demo Content Area */}
            <div className="relative bg-background min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
              {(() => {
                const ActiveDemo = demoTabs[active].Component;
                return (
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-6 text-[13px] md:text-sm">
                    <ActiveDemo />
                  </div>
                );
              })()}
            </div>

            {/* Bottom Tab Bar */}
            <div className="bg-muted/30 border-t border-border/50 px-4 py-3">
              <div className="flex items-center justify-center gap-2">
                {demoTabs.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(i)}
                    className={`group relative rounded-lg px-4 py-2.5 transition-all duration-200 ${
                      active === i
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-background/60 hover:bg-background text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    <div className="text-sm font-semibold">{t.title}</div>
                    {active === i && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-lg -z-10"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="text-center mt-2 text-xs text-muted-foreground">
                {demoTabs[active].caption} • Auto rotate:{" "}
                {autoRotate ? "on" : "off"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
