"use client";

import React from "react";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="py-32 px-4 sm:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <FAQ />
      </div>
    </section>
  );
}

type QA = { q: string; a: React.ReactNode };

function FAQ() {
  const items: QA[] = [
    {
      q: "How quickly can we get started?",
      a: (
        <div className="space-y-3">
          <p>
            Most companies can experience with our product with a subset of
            their data and view immediate results. We can then estimate the
            migration based on the amount of data and how it is currently stored
            in your organisation.
          </p>
          <p className="text-foreground/80">
            <span className="font-medium">What this means for you:</span> You
            see value almost immediately, with early wins that build momentum
            for broader transformation.
          </p>
        </div>
      ),
    },
    {
      q: "How secure is the data?",
      a: (
        <div className="space-y-3">
          <p>
            We follow enterprise-grade security protocols and are compliant with
            leading privacy and confidentiality standards. You can consult our
            security page for more information.
          </p>
          <p className="text-foreground/80">
            <span className="font-medium">What this means for you:</span> Your
            client data is protected at the highest level, which is critical for
            maintaining trust.
          </p>
        </div>
      ),
    },
    {
      q: "Can we run a pilot before committing company‑wide?",
      a: (
        <div className="space-y-3">
          <p>
            Absolutely. Many companies begin with a limited pilot in one team or
            office.
          </p>
          <p className="text-foreground/80">
            <span className="font-medium">What this means for you:</span> You
            can validate ROI in a low‑risk environment before scaling across the
            company.
          </p>
        </div>
      ),
    },
    {
      q: "What is the technology behind your search?",
      a: (
        <p>
          Wavebase uses hybrid retrieval: combining BM25/FTS with vector
          similarity search. This blend gives strong keyword recall and semantic
          relevance across titles, summaries, body content and structured steps.
        </p>
      ),
    },
    {
      q: "Why is your RAG model better?",
      a: (
        <p>
          We combine structure‑aware chunking (sections, steps, tables) with
          hybrid fusion and document‑focused expansion when results cluster on a
          single source. Answers are grounded with citations that include
          section/step and effective date. A reranker (Phase 2) further improves
          precision while keeping costs low.
        </p>
      ),
    },
    {
      q: "How do you estimate ROI?",
      a: (
        <p>
          Our estimator models two drivers: ticket deflection from better search
          and articles (default 30%), and time saved on remaining work (default
          70% faster to answer tickets and edit content). You can tune inputs
          like tickets/month, people, minutes/ticket and hourly cost to project
          yearly savings.
        </p>
      ),
    },
  ];

  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden bg-background/60">
      {items.map((item, idx) => (
        <li key={idx} className="p-0">
          <button
            className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 hover:bg-muted/30"
            aria-expanded={open === idx}
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <span className="font-semibold text-lg leading-snug">{item.q}</span>
            <span
              className={`mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs ${
                open === idx
                  ? "bg-emerald-500/20 border-emerald-400 text-emerald-300"
                  : "bg-background border-white/10 text-foreground/60"
              }`}
            >
              {open === idx ? "–" : "+"}
            </span>
          </button>
          <motion.div
            initial={false}
            animate={{
              height: open === idx ? "auto" : 0,
              opacity: open === idx ? 1 : 0,
            }}
            transition={{ duration: 0.25 }}
            className="px-5 sm:px-6 overflow-hidden"
          >
            <div className="pb-6 text-foreground/80 leading-relaxed text-[15px]">
              {item.a}
            </div>
          </motion.div>
        </li>
      ))}
    </ul>
  );
}
