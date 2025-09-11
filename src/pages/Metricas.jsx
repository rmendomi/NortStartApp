import React from "react";
import Page from "./_Page.jsx";
import { useMetrics } from "../hooks/useMetrics.js";

export default function Metricas() {
  const { kpis } = useMetrics();
  return (
    <Page title="Métricas Ejecutivas (sin librerías)">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {kpis.map(k => (
          <div key={k.id} className="rounded-xl border border-slate-200 p-4">
            <div className="text-sm text-slate-600">{k.label}</div>
            <div className="text-2xl font-semibold">{k.value}</div>
            <div className="mt-3 flex items-end gap-1 h-16">
              {k.spark.map((v,i)=>(
                <div key={i} className="flex-1 rounded-t bg-slate-800" style={{ height: `${(v/Math.max(...k.spark))*100}%` }} />
              ))}
            </div>
            <div className="mt-2 text-xs text-slate-500">{k.helper}</div>
          </div>
        ))}
      </div>
    </Page>
  );
}
