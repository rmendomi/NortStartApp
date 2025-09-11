import { useMemo } from "react";
import { METRICS } from "../data/metricsDummy.js";

export function useMetrics() {
  // KPIs pensados para gerentes: Ingresos, CAC, Retención, Lead time, Cycle time, Bugs por sprint, NPS proxy
  const kpis = useMemo(() => METRICS, []);
  return { kpis };
}
