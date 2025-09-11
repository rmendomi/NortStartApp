import React, { useMemo, useState } from "react";
import Page from "./_Page.jsx";
import TimelineGrid from "../components/TimelineGrid.jsx";
import TreeRow from "../components/TreeRow.jsx";
import { useRoadmap } from "../hooks/useRoadmap.js";

export default function Roadmap() {
  const { initiatives, range } = useRoadmap();
  const [expanded, setExpanded] = useState({});
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const paged = useMemo(() => {
    const start = (page - 1) * pageSize;
    return initiatives.slice(start, start + pageSize);
  }, [initiatives, page]);

  const rowsForTimeline = useMemo(() => {
    const rows = [];
    paged.forEach(init => {
      rows.push({ id: init.id, label: init.key, start: init.start, end: init.end, status: init.status });
      if (expanded[init.id]) {
        init.epics.forEach(ep => {
          rows.push({ id: ep.id, label: ep.key, start: ep.start, end: ep.end, status: ep.status });
          if (expanded[ep.id]) {
            ep.tasks.forEach(tsk => rows.push({ id: tsk.id, label: tsk.key, start: tsk.start, end: tsk.end, status: tsk.status }));
          }
        });
      }
    });
    return rows;
  }, [paged, expanded]);

  const toggle = (id) => setExpanded(s => ({ ...s, [id]: !s[id] }));

  return (
    <Page title="Roadmap transversal">
      <div className="grid lg:grid-cols-[360px,1fr] gap-4">
        <div className="rounded-xl border border-slate-200">
          <div className="h-10 px-2 flex items-center text-sm font-medium text-slate-600 border-b">Actividad</div>
          <div>
            {paged.map(init => (
              <React.Fragment key={init.id}>
                <TreeRow
                  depth={0}
                  expanded={!!expanded[init.id]}
                  onToggle={() => toggle(init.id)}
                  title={`${init.key} ${init.title}`}
                  meta={<span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-slate-100">{init.project}</span>}
                  right={init.owner}
                />
                {expanded[init.id] && init.epics.map(ep => (
                  <React.Fragment key={ep.id}>
                    <TreeRow
                      depth={1}
                      expanded={!!expanded[ep.id]}
                      onToggle={() => toggle(ep.id)}
                      title={`${ep.key} ${ep.title}`}
                      right={ep.owner}
                    />
                    {expanded[ep.id] && ep.tasks.map(t => (
                      <TreeRow key={t.id} depth={2} expanded={false} onToggle={() => {}} title={`${t.key} ${t.title}`} right={t.owner} />
                    ))}
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="border-t p-2 flex items-center justify-between">
            <div className="text-xs text-slate-500">Página {page} de {Math.ceil(initiatives.length / pageSize)}</div>
            <div className="flex gap-1">
              <button className="px-2 py-1 text-sm border rounded" onClick={() => setPage(p => Math.max(1, p - 1))}>Anterior</button>
              <button className="px-2 py-1 text-sm border rounded" onClick={() => setPage(p => Math.min(Math.ceil(initiatives.length / pageSize), p + 1))}>Siguiente</button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <TimelineGrid range={range} items={rowsForTimeline} />
        </div>
      </div>
    </Page>
  );
}
