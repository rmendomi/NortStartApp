import React from "react";

// convierte fecha a 0..1 dentro del rango
function norm(date, [start, end]) {
  const t = new Date(date).getTime();
  const a = start.getTime();
  const b = end.getTime();
  return Math.min(1, Math.max(0, (t - a) / (b - a)));
}

export default function TimelineBar({ start, end, range, label, status="progress", avatar }) {
  const left = `${norm(start, range) * 100}%`;
  const right = `${(1 - norm(end, range)) * 100}%`;
  const colors = {
    plan: "bg-slate-300",
    progress: "bg-slate-700",
    blocked: "bg-red-500",
    done: "bg-violet-600",
  };
  return (
    <div className="absolute inset-x-0 top-0">
      <div className="relative h-9" style={{ left, right, position: "absolute" }}>
        <div className={`absolute inset-y-2 rounded-full ${colors[status]} shadow-card`} />
        <div className="absolute inset-y-2 right-0 translate-x-2 grid place-content-center text-[10px] text-white bg-slate-900/80 rounded-md px-2 py-0.5">
          {label}
        </div>
        {avatar && (
          <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-white shadow ring-1 ring-slate-200 overflow-hidden">
            <img src={avatar} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
