// src/services/jiraService.js
/**
 * Jira Service (modo sin red)
 * -------------------------------------------------
 * Se deshabilitan las llamadas a Jira desde el navegador para evitar CORS.
 * Usa datos demo y entrega helpers de "no disponible".
 *
 * Cuando montes un backend/servidor, cambia MODE a "server"
 * y apunta aquí a tu API backend (no al dominio de Jira).
 */

export const MODE = import.meta.env.VITE_JIRA_MODE ?? "demo"; // "demo" | "server"

function notAvailable() {
  throw new Error("Llamadas directas a Jira deshabilitadas en frontend. Monta un backend y usa MODE=server.");
}

export async function validateCredentials(_ctx) {
  if (MODE !== "server") return notAvailable();
}

export async function getProjects(_ctx) {
  if (MODE !== "server") return notAvailable();
}
export async function getIssueTypes(_ctx) {
  if (MODE !== "server") return notAvailable();
}
export async function getStatuses(_ctx) {
  if (MODE !== "server") return notAvailable();
}
export async function getWorkflows(_ctx) {
  if (MODE !== "server") return notAvailable();
}
export async function getFields(_ctx) {
  if (MODE !== "server") return notAvailable();
}

export async function jiraGetAll(ctx) {
  if (MODE !== "server") return notAvailable();
  // Nota: cuando tengas backend propio, llama aquí a tu endpoint:
  // const res = await fetch(`${import.meta.env.VITE_API_URL}/jira/snapshot`, { method:"POST", body: JSON.stringify(ctx) });
  // return await res.json();
}
