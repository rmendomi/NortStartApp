import React from "react";

export default function RoadmapItem({ item }) {
  const styles = {
    plan: "bg-slate-100 text-slate-700 border-slate-200",
    progress: "bg-emerald-100 text-emerald-700 border-emerald-200",
    blocked: "bg-red-100 text-red-700 border-red-200",
    done: "bg-violet-100 text-violet-700 border-violet-200",
  };

  return (
    <button
      type="button"
      aria-label={`Abrir ${item.title}`}
      className={`px-3 py-2 rounded-md border text-sm font-medium shadow-sm hover:opacity-90 transition ${styles[item.status]}`}
      onClick={() => alert(`Abrir detalle de ${item.key} — ${item.title}`)}
    >
      <span className="font-semibold">{item.key}</span>
      <span className="mx-1">·</span>
      <span>{item.title}</span>
    </button>
  );
}
