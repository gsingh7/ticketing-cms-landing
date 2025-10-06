"use client";

import React from "react";

type Citation = {
  id: string;
  label: string;
};

export function AskKBDemo() {
  const demoQuestions = React.useMemo(
    () => [
      "what is the acceptance criteria for sftp keys in partner deployment",
      "how to rotate s3 keys and invalidate old access",
      "where is the runbook for ransomware readiness validation",
    ],
    []
  );
  const [q, setQ] = React.useState("");
  const [answer, setAnswer] = React.useState<string>("");
  const [cites, setCites] = React.useState<Citation[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [autoIndex, setAutoIndex] = React.useState(0);
  const [isTyping, setIsTyping] = React.useState(false);

  function ask() {
    setLoading(true);
    setAnswer("");
    setCites([]);

    // Simulate streaming
    const chunks = [
      "The acceptance criteria for SFTP keys in partner deployment are:",
      "\n1. New key must be in effect.",
      "\n2. Old key must be invalidated post-cutover.",
      "\n\nThese ensure secure completion of the key rotation process.",
    ];
    let i = 0;
    const id = setInterval(() => {
      setAnswer((prev) => prev + chunks[i]);
      i += 1;
      if (i >= chunks.length) {
        clearInterval(id);
        setLoading(false);
        setCites([
          { id: "KB#77:342", label: "KB doc #77 • section 342" },
          { id: "SRC#119:510", label: "Source document #119 • section 510" },
        ]);
      }
    }, 400);
  }

  // Auto type the question, then trigger ask
  React.useEffect(() => {
    if (loading || isTyping) return;
    setIsTyping(true);
    const text = demoQuestions[autoIndex % demoQuestions.length];
    setQ("");
    let i = 0;
    const typeId = setInterval(() => {
      i += 1;
      setQ(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(typeId);
        setIsTyping(false);
        setTimeout(() => ask(), 400);
      }
    }, 35);
    return () => clearInterval(typeId);
  }, [autoIndex, loading, isTyping, demoQuestions]);

  // After an answer finishes, schedule next demo
  React.useEffect(() => {
    if (!loading && answer) {
      const id = setTimeout(() => {
        setAnswer("");
        setCites([]);
        setAutoIndex((i) => i + 1);
      }, 2800);
      return () => clearTimeout(id);
    }
  }, [loading, answer]);

  return (
    <div className="absolute inset-0 grid grid-rows-[auto_1fr_auto] w-full h-full">
      <div className="p-3 border-b border-border/50 text-xs uppercase tracking-widest text-foreground/50">
        Ask the Knowledge Base
      </div>
      <div className="p-4 overflow-auto">
        <div className="rounded-md border border-border/50 p-4 min-h-40 whitespace-pre-wrap text-sm text-foreground">
          {answer ||
            "Ask a question to see an AI-grounded answer with citations."}
        </div>
        {cites.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {cites.map((c) => (
              <span
                key={c.id}
                className="text-[11px] px-2 py-1 rounded-full bg-muted/60 border border-border/50 text-foreground font-medium"
              >
                {c.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      <div className="p-3 border-t border-border/50 flex gap-2">
        <input
          className="flex-1 bg-muted/40 border border-border/50 rounded px-3 py-2 text-sm text-foreground"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button
          className="rounded bg-emerald-500 text-emerald-950 px-4 py-2 text-sm hover:bg-emerald-400 font-medium"
          onClick={ask}
          disabled={loading}
        >
          {loading ? "Asking..." : "Ask"}
        </button>
      </div>
    </div>
  );
}
