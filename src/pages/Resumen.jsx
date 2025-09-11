import React from "react";
import Page from "./_Page.jsx";
import { Link } from "react-router-dom";

export default function Resumen() {
  return (
    <Page title="Resumen">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Roadmap transversal" to="/roadmap" desc="Iniciativas y épicas entre proyectos." />
        <Card title="OKR" to="/okr" desc="Objetivos de Empresa y Equipo." />
        <Card title="Métricas" to="/metricas" desc="Indicadores ejecutivos clave." />
      </div>
    </Page>
  );
}

function Card({ title, desc, to }) {
  return (
    <Link to={to} className="rounded-xl border border-slate-200 bg-white p-4 shadow-card hover:shadow-md transition block">
      <div className="text-sm text-slate-600">{desc}</div>
      <div className="mt-1 text-lg font-semibold">{title}</div>
    </Link>
  );
}
