"use client";

import React from "react";

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function ScreenshotsGallery() {
  const [ticketsPerMonth, setTicketsPerMonth] = React.useState(1200);
  const [helpdeskAgents, setHelpdeskAgents] = React.useState(12);
  const [avgCostPerHour, setAvgCostPerHour] = React.useState(45);
  const [avgMinutesPerTicket, setAvgMinutesPerTicket] = React.useState(18);

  const hoursPerTicket = avgMinutesPerTicket / 60;

  // Assumptions: 30% reduction in tickets; 70% faster handling of remaining work
  const deflectedTickets = Math.round(ticketsPerMonth * 0.3);
  const handledTickets = ticketsPerMonth - deflectedTickets;
  const originalHours = ticketsPerMonth * hoursPerTicket;
  const newHours = handledTickets * (hoursPerTicket * (1 - 0.7));
  const hoursSaved = originalHours - newHours;

  const monthlySavings = hoursSaved * avgCostPerHour;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-32 px-4 sm:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl mb-6 text-center font-bold">
          ROI Estimator
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-10">
          Estimate yearly savings from fewer tickets and faster resolutions with
          Wavebase.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="rounded-2xl border border-white/10 p-6 bg-background/60">
            <div className="mb-6">
              <label className="text-sm text-foreground/70">
                Tickets per month
              </label>
              <input
                type="range"
                min={100}
                max={5000}
                value={ticketsPerMonth}
                onChange={(e) => setTicketsPerMonth(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-lg font-semibold">
                {ticketsPerMonth.toLocaleString()}
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-foreground/70">
                  Helpdesk agents
                </label>
                <input
                  type="range"
                  min={1}
                  max={200}
                  value={helpdeskAgents}
                  onChange={(e) => setHelpdeskAgents(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-lg font-semibold">{helpdeskAgents}</div>
              </div>
              <div>
                <label className="text-sm text-foreground/70">
                  Avg cost per hour ($)
                </label>
                <input
                  type="range"
                  min={20}
                  max={150}
                  value={avgCostPerHour}
                  onChange={(e) => setAvgCostPerHour(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-lg font-semibold">${avgCostPerHour}</div>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-foreground/70">
                Avg minutes per ticket
              </label>
              <input
                type="range"
                min={5}
                max={60}
                value={avgMinutesPerTicket}
                onChange={(e) =>
                  setAvgMinutesPerTicket(parseInt(e.target.value))
                }
                className="w-full"
              />
              <div className="text-lg font-semibold">
                {avgMinutesPerTicket} minutes
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="rounded-2xl border border-white/10 p-6 bg-background/60">
            <h3 className="text-2xl font-semibold mb-4">Your Yearly Savings</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 p-4 bg-muted/30">
                <div className="text-xs uppercase tracking-widest text-foreground/60 mb-2">
                  Tickets Deflected
                </div>
                <div className="text-2xl font-bold">
                  {deflectedTickets.toLocaleString()}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-muted/30">
                <div className="text-xs uppercase tracking-widest text-foreground/60 mb-2">
                  Hours Saved
                </div>
                <div className="text-2xl font-bold">
                  {Math.round(hoursSaved).toLocaleString()} hrs
                </div>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-muted/30">
                <div className="text-xs uppercase tracking-widest text-foreground/60 mb-2">
                  Estimated Savings
                </div>
                <div className="text-2xl font-bold text-emerald-400">
                  {formatCurrency(yearlySavings)}
                </div>
              </div>
            </div>
            <p className="text-foreground/60 mt-4 text-sm">
              Assumptions: 30% fewer tickets via self-serve; remaining tickets
              and content edits are 70% faster with Wavebase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
