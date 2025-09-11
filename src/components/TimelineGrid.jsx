import React, { useMemo } from "react";
import TimelineBar from "./TimelineBar";

/** Utilidad: genera meses entre start y end (Date). */
function monthsBetween(start, end) {
  const out = [];
  const d = new Date(start.getFullYear(), start.getMonth(), 1);
  while (d <= end) {
    out.push(new Date(d));
    d.setMonth(d.getMonth() + 1);
  }
  return out;
}

export default function TimelineGrid({ range, items }) {
  const [start, end] = range;
  const months = useMemo(() => monthsBetween(start, end), [start, end]);

  return (
    <div className="relative">
      {/* header */}
      <div className="grid" style={{gridTemplateColumns: `200px repeat(${months.length}, minmax(180px,1fr))`}}>
        <div className="h-10 px-2 text-sm font-medium text-slate-600 flex items-center">Actividad</div>
        {months.map((m, i) => (
          <div key={i} className="h-10 border-l border-slate-200 text-sm font-medium text-slate-600 flex items-center justify-center">
            {m.toLocaleString("es-ES", { month: "long" })} {m.getFullYear()}
          </div>
        ))}
      </div>

      {/* body rows */}
      <div className="grid" style={{gridTemplateColumns: `200px repeat(${months.length}, minmax(180px,1fr))`}}>
        {/* left gutter (lista jerárquica ya se pinta afuera) */}
        <div />
        {months.map((_, i) => (
          <div key={i} className={`h-9 border-t border-l border-slate-100 ${i%2 ? "bg-white" : "bg-slate-50"}`} />
        ))}
        {/* bars */}
        {items.map(row => (
          <React.Fragment key={row.id}>
            <div className="h-9" />
            {months.map((_, i) => (
              <div key={i} className={`relative h-9 border-t border-l border-slate-100 ${i%2 ? "bg-white" : "bg-slate-50"}`} />
            ))}
            <div className="col-span-full relative h-0">
              <TimelineBar start={row.start} end={row.end} range={[start,end]} label={row.label} status={row.status} avatar={row.avatar}/>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
