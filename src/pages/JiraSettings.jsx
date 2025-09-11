// src/pages/JiraSettings.jsx
import React, { useState } from "react";
import Page from "./_Page";
import JiraConnectForm from "../components/JiraConnectForm";
import JiraResourceList from "../components/JiraResourceList";
import { useJiraConfig } from "../hooks/useJiraConfig";
import { MODE } from "../services/jiraService";

function Banner() {
  return (
    <div className="mb-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
      <div className="font-medium">Modo sin red (CORS deshabilitado)</div>
      <p className="mt-1">
        No llamamos a Jira desde el navegador para evitar CORS. <br />
        Usa <span className="font-semibold">datos demo</span> para mapear recursos.
        Cuando montes un backend, cambia <code>VITE_JIRA_MODE=server</code> y apunta el servicio a tu API.
      </p>
    </div>
  );
}

export default function JiraSettings() {
  const [tab, setTab] = useState("conn");
  const { settings, resources, testing, saving, onTest, onSave } = useJiraConfig();

  return (
    <Page
      title="Configuración · Jira"
      actions={
        <div className="inline-flex rounded-lg border border-slate-200 overflow-hidden">
          <button className={`px-3 py-1.5 text-sm ${tab==="conn"?"bg-slate-100":""}`} onClick={()=>setTab("conn")}>Conexión</button>
          <button className={`px-3 py-1.5 text-sm ${tab==="res"?"bg-slate-100":""}`} onClick={()=>setTab("res")}>Recursos</button>
        </div>
      }
    >
      <Banner />

      {tab === "conn" ? (
        <div className="rounded-xl border border-slate-200 p-4">
          <h2 className="text-base font-semibold">Jira Cloud</h2>
          <p className="mt-1 text-sm text-slate-600">
            Correo + API token. Actualmente en <span className="font-medium">modo {MODE}</span> (sin red).
            Pulsa <em>Probar conexión</em> para cargar datos demo y validar el flujo.
          </p>

          <JiraConnectForm
            defaultValues={settings}
            onTest={onTest}
            onSave={onSave}
            loadingTest={testing}
            loadingSave={saving}
          />

          <div className="mt-4 rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-900">
            <div className="font-medium">Estado</div>
            <p className="mt-1">
              Usando <strong>snapshot DEMO</strong> (sin llamadas a Jira). Los datos se guardan localmente.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-slate-200 p-4">
          <h2 className="text-base font-semibold">Recursos detectados (demo)</h2>
          <p className="mt-1 text-sm text-slate-600">Estos catálogos alimentan Roadmap/OKR.</p>
          <div className="mt-3 space-y-3">
            <JiraResourceList title="Proyectos" items={resources.projects} itemKey="id" primary="name" secondary="key" />
            <JiraResourceList title="Tipos de Issue" items={resources.issueTypes} itemKey="id" primary="name" />
            <JiraResourceList title="Estados" items={resources.statuses} itemKey="id" primary="name" secondary="statusCategory.name" />
            <JiraResourceList title="Workflows" items={resources.workflows} itemKey="name" primary="name" />
            <JiraResourceList title="Campos" items={resources.fields} itemKey="id" primary="name" secondary="id" />
          </div>
        </div>
      )}
    </Page>
  );
}
