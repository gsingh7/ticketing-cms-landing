"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FilePlus, UploadCloud, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    title: "Upload & Draft",
    description:
      "Drop in DOCX/PDFs or paste content. Wavebase drafts title, summary, body and tags.",
    icon: UploadCloud,
  },
  {
    title: "Publish to KB",
    description:
      "Click publish to index with hybrid search and embeddings. Ready for instant answers.",
    icon: FilePlus,
  },
  {
    title: "AI Improvement Loop",
    description:
      "Wavebase analyzes tickets and suggests edits so articles answer recurring questions.",
    icon: Sparkles,
  },
  {
    title: "Faster Resolution",
    description:
      "Agents get suggested replies with citations; customers self-serve more—fewer tickets, faster SLAs.",
    icon: Rocket,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-16 text-center font-bold">
          From upload to answers—automatically
        </h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  // Place step 2 in the right column
  const isRightColumn = index === 1;

  return (
    <motion.div
      ref={targetRef}
      style={{ opacity, scale }}
      className={`relative flex items-start ${
        isRightColumn ? "md:col-start-2" : ""
      } ${index === 2 ? "md:col-span-2 max-w-md mx-auto" : ""}`}
    >
      {/* Icon Circle */}
      <div className="mr-4 flex-shrink-0">
        <motion.div
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
          style={{ scale }}
        >
          <step.icon className="w-5 h-5 text-background" />
        </motion.div>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-bold text-xl mb-2">
          <span className="text-primary mr-2">Step {index + 1}</span> –{" "}
          {step.title}
        </h3>
        <p className="text-foreground/70">{step.description}</p>
      </div>
    </motion.div>
  );
}
