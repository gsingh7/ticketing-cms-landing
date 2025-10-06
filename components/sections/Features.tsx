"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, WandSparkles, Tag, Bot } from "lucide-react";

const features = [
  {
    title: "AI Knowledge Base",
    description:
      "Hybrid search + AI citations deliver precise answers from your policies and runbooks.",
    icon: Bot,
  },
  {
    title: "Inbuilt Editor",
    description:
      "Update content directly in Wavebase—no more attachments or version chaos.",
    icon: FileText,
  },
  {
    title: "Auto Tags & Summaries",
    description:
      "New content is auto-tagged and summarized so search just works across your KB.",
    icon: Tag,
  },
  {
    title: "AI Revision Loop",
    description:
      "Wavebase learns from tickets and suggests edits to reduce repeats and deflect cases.",
    icon: WandSparkles,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Features() {
  return (
    <section id="features" className="py-32 px-4 sm:px-8 bg-muted/20">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <h2 className="text-3xl md:text-4xl mb-16 text-center font-bold">
          Why teams choose Wavebase
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 flex flex-col"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
