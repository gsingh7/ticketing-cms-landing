"use client";

import React from "react";

type Ticket = {
  id: number;
  title: string;
  priority: "LOW" | "MEDIUM" | "HIGH";
  status: "OPEN" | "IN PROGRESS" | "RESOLVED";
  assignee: string;
};

const initialTickets: Ticket[] = [
  {
    id: 101,
    title: "Cloud Account Baseline Hardening - New AWS Account",
    priority: "MEDIUM",
    status: "OPEN",
    assignee: "Hilma Heidenreich (Safety Officer)",
  },
  {
    id: 102,
    title: "S3 Buckets - Block Public Access",
    priority: "HIGH",
    status: "OPEN",
    assignee: "Janet Dickens (Geophysicist)",
  },
  {
    id: 103,
    title: "Ransomware Readiness Validation",
    priority: "HIGH",
    status: "IN PROGRESS",
    assignee: "Catharine Kulas (Marine Surveyor)",
  },
];

export function TicketsDemo() {
  const [tickets, setTickets] = React.useState<Ticket[]>(initialTickets);
  const [selectedId, setSelectedId] = React.useState<number | null>(101);

  const selected = tickets.find((t) => t.id === selectedId) ?? tickets[0];

  function cycleStatus(id: number) {
    setTickets((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const order: Ticket["status"][] = ["OPEN", "IN PROGRESS", "RESOLVED"];
        const next = order[(order.indexOf(t.status) + 1) % order.length];
        return { ...t, status: next };
      })
    );
  }

  return (
    <div className="absolute inset-0 grid grid-cols-2 w-full h-full">
      {/* List */}
      <div className="border-r border-white/10 bg-background/50 overflow-auto min-w-[220px]">
        <div className="p-3 text-xs uppercase tracking-widest text-foreground/50">
          Tickets
        </div>
        {tickets.map((t) => (
          <button
            key={t.id}
            className={`w-full text-left px-4 py-3 hover:bg-muted/60 transition-colors ${
              selectedId === t.id ? "bg-muted/60" : ""
            }`}
            onClick={() => setSelectedId(t.id)}
          >
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  t.status === "OPEN"
                    ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                    : t.status === "IN PROGRESS"
                    ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
                    : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                }`}
              >
                {t.status}
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  t.priority === "HIGH"
                    ? "border-red-400/40 bg-red-500/20 text-red-300"
                    : t.priority === "MEDIUM"
                    ? "border-yellow-400/40 bg-yellow-500/20 text-yellow-300"
                    : "border-foreground/20 text-foreground/60"
                }`}
              >
                {t.priority}
              </span>
            </div>
            <div className="mt-2 text-sm font-medium leading-snug text-foreground">
              {t.title}
            </div>
            <div className="text-xs text-foreground/70">
              Assignee: {t.assignee}
            </div>
          </button>
        ))}
      </div>

      {/* Details */}
      <div className="bg-background overflow-auto">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="text-sm text-foreground/80">Ticket</div>
            <div className="font-semibold text-foreground">
              {selected.title}
            </div>
          </div>
          <button
            className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm"
            onClick={() => cycleStatus(selected.id)}
          >
            Advance Status
          </button>
        </div>
        <div className="p-4 grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Info label="Status" value={selected.status} />
            <Info label="Priority" value={selected.priority} />
          </div>
          <Info label="Assignee" value={selected.assignee} />
          <div className="rounded-md border border-white/10 p-3">
            <div className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
              Suggested Reply
            </div>
            <p className="text-sm text-foreground">
              {`Wavebase suggests: "Enable S3 Block Public Access at account level and verify bucket policies. See KB: Security > S3 Hardening (Rev 3)."`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="rounded-md border border-white/10 p-3">
      <div className="text-xs uppercase tracking-widest text-foreground/50">
        {label}
      </div>
      <div className="text-sm font-medium text-foreground mt-1">{value}</div>
    </div>
  );
}
