"use client";

import React from "react";

export function ContentDemo() {
  const [title, setTitle] = React.useState(
    "Streamer Deployment and Management"
  );
  const [body, setBody] = React.useState(
    "Procedures for deploying and managing seismic streamer arrays during marine surveys.\n\n## Tools\n- DLP platform\n\n## Steps\n1. Define content detectors\n2. Apply policies to email and cloud channels"
  );
  const [tags, setTags] = React.useState<string[]>([
    "streamer",
    "deployment",
    "operations",
  ]);
  const [published, setPublished] = React.useState(false);

  function addTag(tag: string) {
    setTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]));
  }

  function autoFill() {
    // Simulate AI auto-fill of tags and summary
    addTag("positioning");
    addTag("marine");
  }

  return (
    <div className="absolute inset-0 grid grid-cols-2 w-full h-full">
      {/* Editor */}
      <div className="border-r border-border/50 bg-muted/10 p-4 overflow-auto min-w-[260px]">
        <div className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
          Inbuilt Editor
        </div>
        <input
          className="w-full bg-muted/40 border border-border/50 rounded px-3 py-2.5 text-sm mb-3 h-11 text-foreground"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {t}
            </span>
          ))}
          <button
            className="text-[11px] px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
            onClick={autoFill}
          >
            Auto-fill tags
          </button>
        </div>
        <textarea
          className="w-full h-60 bg-muted/40 border border-border/50 rounded px-3 py-2 text-sm text-foreground"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="mt-3 flex gap-2">
          <button
            className="rounded bg-primary text-primary-foreground px-3 py-2 text-sm"
            onClick={() => setPublished(true)}
          >
            Publish to KB
          </button>
          {published ? (
            <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30 font-medium">
              Published
            </span>
          ) : null}
        </div>
      </div>

      {/* Preview */}
      <div className="p-4 overflow-auto">
        <div className="text-xs uppercase tracking-widest text-foreground/50 mb-2">
          Preview
        </div>
        <div className="rounded border border-border/50 p-4">
          <h3 className="font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-foreground whitespace-pre-wrap">{body}</p>
        </div>
      </div>
    </div>
  );
}
