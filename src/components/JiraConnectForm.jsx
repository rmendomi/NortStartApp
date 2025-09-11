// src/components/JiraConnectForm.jsx
import React from "react";
import { useEffect, useState } from "react";

/**
 * Form de conexión a Jira.
 * - Muestra botones "Probar conexión" y "Guardar".
 * - Si el usuario presiona "Guardar" sin probar, primero prueba y luego guarda.
 */
export default function JiraConnectForm({
  defaultValues = { site: "", email: "", apiToken: "" },
  onTest,           // (ctx) => Promise<void>
  onSave,           // (ctx) => Promise<void>
  loadingTest = false,
  loadingSave = false,
}) {
  const [site, setSite] = useState(defaultValues.site || "");
  const [email, setEmail] = useState(defaultValues.email || "");
  const [apiToken, setApiToken] = useState(defaultValues.apiToken || "");
  const [showToken, setShowToken] = useState(false);

  useEffect(() => {
    setSite(defaultValues.site || "");
    setEmail(defaultValues.email || "");
    setApiToken(defaultValues.apiToken || "");
  }, [defaultValues]);

  async function handleTest(e) {
    e?.preventDefault?.();
    await onTest?.({ site, email, apiToken });
  }

  async function handleSave(e) {
    e?.preventDefault?.();
    // Si nunca se probó en esta sesión, forzamos test antes de guardar
    if (typeof onTest === "function") {
      await handleTest();
    }
    await onSave?.({ site, email, apiToken });
  }

  return (
    <form className="mt-3 space-y-3" onSubmit={handleSave}>
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium">Dominio (site)</label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            placeholder="tu-org.atlassian.net"
            value={site}
            onChange={(e) => setSite(e.target.value.trim())}
            required
            aria-label="Jira site"
          />
          <p className="mt-1 text-xs text-slate-500">Solo host. Ej: miempresa.atlassian.net</p>
        </div>
        <div>
          <label className="block text-sm font-medium">Correo Atlassian</label>
          <input
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
            type="email"
            placeholder="usuario@dominio.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Correo Atlassian"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">API Token</label>
          <div className="mt-1 flex rounded-md border border-slate-300 focus-within:ring-1 focus-within:ring-brand">
            <input
              className="flex-1 rounded-l-md px-3 py-2 text-sm outline-none"
              type={showToken ? "text" : "password"}
              value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
              required
              aria-label="API Token"
            />
            <button
              type="button"
              className="px-3 text-sm text-slate-600 hover:bg-slate-50"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowToken((s) => !s)}
              aria-label="Mostrar u ocultar token"
            >
              {showToken ? "Ocultar" : "Ver"}
            </button>
          </div>
          <p className="mt-1 text-xs text-slate-500">Crear token en id.atlassian.com → Security.</p>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <button
          type="button"
          onClick={handleTest}
          className="inline-flex items-center rounded-md bg-brand px-3 py-2 text-sm font-medium text-white hover:bg-brand/90 disabled:opacity-50"
          disabled={loadingTest || loadingSave}
          aria-label="Probar conexión"
        >
          {loadingTest ? "Probando…" : "Probar conexión"}
        </button>
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50 disabled:opacity-50"
          disabled={loadingSave || loadingTest}
          aria-label="Guardar configuración"
        >
          {loadingSave ? "Guardando…" : "Guardar"}
        </button>
      </div>
    </form>
  );
}
