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
              href="#how-it-works"
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

        {/* Demo with sidebar */}
        <div
          className="mt-12"
          onMouseEnter={() => setAutoRotate(false)}
          onMouseLeave={() => setAutoRotate(true)}
        >
          <div className="grid lg:grid-cols-[260px,1fr] gap-6 items-stretch">
            <aside className="bg-muted/30 rounded-xl border border-white/10 p-4">
              <div className="text-xs uppercase tracking-widest text-foreground/50 mb-3">
                Explore
              </div>
              <div className="flex lg:flex-col gap-2">
                {demoTabs.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(i)}
                    className={`text-left rounded-lg border px-3 py-2 transition-colors w-full ${
                      active === i
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : "bg-background/40 border-white/10 hover:bg-muted/50"
                    }`}
                  >
                    <div className="text-sm font-semibold">{t.title}</div>
                    <div className="text-xs text-foreground/60">
                      {t.caption}
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            <div className="relative bg-background rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/10 w-full min-h-[420px] sm:min-h-[520px] lg:min-h-[600px]">
              {(() => {
                const ActiveDemo = demoTabs[active].Component;
                return (
                  <div className="absolute inset-0 p-2 sm:p-3 md:p-4 text-[13px] md:text-sm">
                    <ActiveDemo />
                  </div>
                );
              })()}
              <div className="absolute left-0 right-0 bottom-0 bg-background/80 backdrop-blur-sm p-3 text-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{demoTabs[active].title}</p>
                    <p className="text-foreground/75">
                      {demoTabs[active].caption}
                    </p>
                  </div>
                  <div className="text-xs text-foreground/60">
                    Auto demo {autoRotate ? "on" : "off"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
