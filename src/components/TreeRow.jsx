import React from "react";

export default function TreeRow({ depth=0, expanded, onToggle, title, meta, right, selected=false }) {
  return (
    <div className={`flex items-center justify-between h-9 px-2 ${selected ? "bg-brand/light" : depth%2 ? "bg-white" : "bg-slate-50"}`}>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggle}
          aria-label={expanded ? "Contraer" : "Expandir"}
          className="h-6 w-6 grid place-content-center text-slate-500 hover:bg-slate-100 rounded"
        >
          <span className="inline-block rotate-0">{expanded ? "▾" : "▸"}</span>
        </button>
        <div className="ml-[calc(12px*var(--d))]" style={{["--d"]: depth}} />
        <div className="text-sm text-slate-800">{title}</div>
        {meta && <div className="text-xs text-slate-500">{meta}</div>}
      </div>
      <div className="text-xs text-slate-500">{right}</div>
    </div>
  );
}
