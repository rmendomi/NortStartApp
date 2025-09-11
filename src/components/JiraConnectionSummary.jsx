// src/components/JiraConnectionSummary.jsx
import React from "react";

/** Panel con el resultado de la última prueba de conexión */
export default function JiraConnectionSummary({ result }) {
  if (!result) return null;

  const ok = result.ok;
  const cls = ok
    ? "border-emerald-300 bg-emerald-50"
    : "border-rose-300 bg-rose-50";

  return (
    <div className={`mt-4 rounded-lg border p-4 ${cls}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">
            {ok ? "Conexión exitosa con Jira" : "Conexión fallida"}
          </div>
          <div className="mt-1 text-xs text-slate-600">
            {new Date(result.at).toLocaleString()}
          </div>
          <div className="mt-2 text-sm">
            <span className="font-medium">Site:</span> {result.site || "—"} &middot;{" "}
            <span className="font-medium">Correo:</span> {result.email || "—"}
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-2 py-1 text-xs ${ok ? "bg-emerald-200 text-emerald-800" : "bg-rose-200 text-rose-800"}`}>
          {ok ? "OK" : "ERROR"}
        </span>
      </div>

      {ok ? (
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-5 gap-2 text-sm">
          {[
            ["Proyectos", result.counts?.projects ?? 0],
            ["Tipos", result.counts?.issueTypes ?? 0],
            ["Estados", result.counts?.statuses ?? 0],
            ["Workflows", result.counts?.workflows ?? 0],
            ["Campos", result.counts?.fields ?? 0],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border px-3 py-2 text-center bg-white/60">
              <div className="text-lg font-semibold">{value}</div>
              <div className="text-xs text-slate-600">{label}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-3 rounded-md border bg-white/60 p-3 text-sm text-rose-700">
          {result.error || "No se pudo validar las credenciales."}
        </div>
      )}
    </div>
  );
}
