// src/services/jiraSettingsService.js
// Persistencia simple (localStorage). Opcional: migra a Supabase tabla 'jira_settings'.
const KEY = "jira_settings_v1";

export function loadSettings() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : { site: "", email: "", apiToken: "" };
  } catch {
    return { site: "", email: "", apiToken: "" };
  }
}

export function saveSettings(settings) {
  const copy = { ...settings };
  // No encriptamos (solo demo). Para producción, guarda tokens del lado servidor.
  localStorage.setItem(KEY, JSON.stringify(copy));
}
