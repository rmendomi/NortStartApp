import React from "react";
import Page from "./_Page.jsx";
import { useOKR } from "../hooks/useOKR.js";

export default function OKR() {
  const { companyOKR, teamOKR } = useOKR();
  return (
    <Page title="OKR · Empresa y Equipo">
      <section className="space-y-6">
        <Block title="Empresa" data={companyOKR} />
        <Block title="Equipo" data={teamOKR} />
      </section>
    </Page>
  );
}

function Block({ title, data }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="text-sm font-medium text-slate-600 mb-3">{title}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map(k => (
          <div key={k.id} className="border rounded-lg p-3">
            <div className="text-sm text-slate-700">{k.objective}</div>
            <div className="mt-1 font-semibold">{k.keyResult}</div>
            <div className="mt-2 text-sm text-slate-600">
              Meta: {k.target}{k.unit} · Actual: {k.current}{k.unit}
            </div>
            <div className="mt-2 h-2 bg-slate-100 rounded">
              <div className="h-2 rounded bg-brand" style={{ width: `${Math.min(100, (k.current/k.target)*100)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
