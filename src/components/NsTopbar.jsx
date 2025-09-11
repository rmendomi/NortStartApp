import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient.js";

const tabs = [
  { to: "/resumen", label: "Resumen" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/okr", label: "OKR" },
  { to: "/metricas", label: "Métricas" },
];

export default function NsTopbar({ user }) {
  const { pathname } = useLocation();
  const nav = useNavigate();

  async function onLogout() {
    await supabase.auth.signOut();
    nav("/login", { replace: true });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/resumen" className="font-semibold text-slate-900">NorthStarApp</Link>
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map(t => (
              <Link
                key={t.to}
                to={t.to}
                className={`px-3 py-1.5 rounded-md text-sm ${
                  pathname.startsWith(t.to)
                    ? "bg-brand text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/config" className="text-sm text-slate-700 hover:underline">Config</Link>
          <span className="hidden sm:block text-sm text-slate-600">
            {user?.email ?? "Invitado"}
          </span>
          <button
            type="button"
            className="px-3 py-1.5 rounded-md border text-sm hover:bg-slate-50"
            onClick={onLogout}
          >
            Salir
          </button>
        </div>
      </div>
    </header>
  );
}
