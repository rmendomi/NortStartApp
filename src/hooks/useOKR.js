import { useMemo, useState } from "react";
import { OKR_COMPANY, OKR_TEAM } from "../data/okrDummy.js";

export function useOKR() {
  const [company, setCompany] = useState(OKR_COMPANY);
  const [team, setTeam] = useState(OKR_TEAM);

  const addKR = (form) => {
    const item = {
      id: crypto.randomUUID(),
      objective: form.objective,
      keyResult: form.keyResult,
      unit: form.unit,
      target: Number(form.target || 100),
      current: 0,
    };
    if (form.level === "empresa") setCompany((s) => [item, ...s]);
    else setTeam((s) => [item, ...s]);
  };

  return useMemo(() => ({
    companyOKR: company,
    teamOKR: team,
    addKR
  }), [company, team]);
}
