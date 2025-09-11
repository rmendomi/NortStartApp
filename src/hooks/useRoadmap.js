import { useMemo } from "react";
import { ROADMAP } from "../data/roadmapDummy.js";

export function useRoadmap() {
  const initiatives = useMemo(() => ROADMAP, []);
  // rango: 4 meses (mes actual - mes+3)
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 3, 1);
  return { initiatives, range: [start, end] };
}
