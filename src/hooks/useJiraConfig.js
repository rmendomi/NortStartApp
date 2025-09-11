// src/hooks/useJiraConfig.js
import { useCallback, useEffect, useMemo, useState } from "react";
import { MODE } from "../services/jiraService";
import { loadSettings, saveSettings } from "../services/jiraSettingsService";
import { JIRA_DUMMY } from "../data/jiraDummy";

/**
 * Hook de configuración Jira (sin red).
 * "Probar conexión" carga snapshot DEMO y muestra resultado 'modo demo'.
 */
export function useJiraConfig() {
  const [settings, setSettings] = useState(() => loadSettings());
  const [resources, setResources] = useState({
    projects: [], issueTypes: [], statuses: [], workflows: [], fields: [],
  });
  const [result, setResult] = useState(null);
  const [testing, setTesting] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (settings?.lastSnapshot) setResources(settings.lastSnapshot);
    if (settings?.lastResult) setResult(settings.lastResult);
  }, []);

  const onTest = useCallback(async ({ site, email, apiToken }) => {
    setTesting(true);
    try {
      // En modo sin red: simulamos "OK (demo)" con JIRA_DUMMY
      const snapshot = JIRA_DUMMY;
      const counts = {
        projects: snapshot.projects.length,
        issueTypes: snapshot.issueTypes.length,
        statuses: snapshot.statuses.length,
        workflows: snapshot.workflows.length,
        fields: snapshot.fields.length,
      };
      const res = {
        ok: true,
        demo: true,
        mode: MODE,
        at: new Date().toISOString(),
        site, email,
        counts,
        me: { displayName: "Demo User", accountId: "demo" },
        note: "Modo demo sin llamadas a Jira desde el navegador.",
      };
      setResources(snapshot);
      setResult(res);
      setSettings((s) => ({ ...(s || {}), site, email, apiToken, lastSnapshot: snapshot, lastResult: res }));
    } finally {
      setTesting(false);
    }
  }, []);

  const onSave = useCallback(async ({ site, email, apiToken }) => {
    setSaving(true);
    try {
      const next = { site, email, apiToken, lastSnapshot: resources, lastResult: result, savedAt: new Date().toISOString() };
      saveSettings(next);
      setSettings(next);
      alert("✅ Configuración guardada localmente.");
    } catch (e) {
      console.error(e);
      alert("❌ No se pudo guardar la configuración.");
    } finally {
      setSaving(false);
    }
  }, [resources, result]);

  const hasAuth = useMemo(() => !!(settings?.site && settings?.email && settings?.apiToken), [settings]);

  return { settings, resources, result, testing, saving, hasAuth, onTest, onSave };
}
