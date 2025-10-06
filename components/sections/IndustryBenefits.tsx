"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Deflect repetitive tickets with AI answers and better articles",
  "Cut resolution time with suggested replies and citations",
  "Keep content fresh with the AI improvement loop",
  "No more attachments—author in the built-in editor",
  "Search that works: hybrid BM25 + vector embeddings",
  "Clear ownership, revisions and effective dates",
];

export function IndustryBenefits() {
  return (
    <section
      id="benefits"
      className="py-32 px-4 sm:px-8 bg-gradient-to-b from-muted/20 to-transparent"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-8 font-bold text-center">
            Outcomes for Support & Success Teams
          </h2>

          <p className="text-xl text-center mb-16 text-foreground/80">
            Wavebase focuses on what matters: fewer tickets, faster SLAs, and
            happier customers.
          </p>

          <motion.div
            className="grid md:grid-cols-2 gap-x-12 gap-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 rounded-full p-1 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-lg text-foreground/90">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-20 mx-auto max-w-xl">
            <div className="glass-card p-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                Ready to reduce ticket volume?
              </h3>
              <p className="text-foreground/70 mb-6">
                Book a 15-minute walkthrough of Wavebase.
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Book a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
