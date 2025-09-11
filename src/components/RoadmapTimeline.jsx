import React from "react";
import RoadmapItem from "./RoadmapItem.jsx";

export default function RoadmapTimeline({ data = [] }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-[900px]">
        {/* Header con meses */}
        <div className="grid grid-cols-4 text-sm font-medium text-slate-600 border-b border-slate-200">
          <div className="p-2">Septiembre 2025</div>
          <div className="p-2">Octubre 2025</div>
          <div className="p-2">Noviembre 2025</div>
          <div className="p-2">Diciembre 2025</div>
        </div>

        {/* Items por épica */}
        <div className="divide-y divide-slate-100">
          {data.map((epic) => (
            <div key={epic.id} className="py-3">
              <div className="font-semibold text-slate-800 mb-2">{epic.title}</div>
              <div className="flex flex-wrap gap-2">
                {epic.tasks.map((task) => (
                  <RoadmapItem key={task.id} item={task} />
                ))}
              </div>
            </div>
          ))}
          {data.length === 0 && (
            <div className="p-6 text-sm text-slate-500">Sin datos de roadmap.</div>
          )}
        </div>
      </div>
    </div>
  );
}
