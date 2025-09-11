// src/pages/Config.jsx
import React from "react";
import Page from "./_Page";
import { Link } from "react-router-dom";

export default function Config() {
  return (
    <Page title="Configuraciones">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          to="/config/jira"
          className="block rounded-xl border border-slate-200 bg-white p-4 shadow-card hover:shadow-md transition"
          aria-label="Ir a configuración de Jira"
        >
          <div className="text-sm text-slate-600">Integración</div>
          <div className="mt-1 text-lg font-semibold">Jira</div>
          <p className="mt-2 text-sm text-slate-600">
            Conecta tu sitio y carga proyectos, tipos, estados, workflows y campos.
          </p>
        </Link>

        <div className="rounded-xl border border-dashed border-slate-200 bg-white p-4">
          <div className="text-sm text-slate-600">Integración</div>
          <div className="mt-1 text-lg font-semibold">Próximamente…</div>
          <p className="mt-2 text-sm text-slate-500">Más conectores pronto.</p>
        </div>
      </div>
    </Page>
  );
}
