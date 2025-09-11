import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar({ authed, onLogout }) {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
        <Link to="/" className="font-semibold tracking-tight text-slate-900">
          NorthStarApp <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-brand.light text-brand">Untitled UI</span>
        </Link>

        {authed && (
          <ul className="flex gap-4 text-sm">
            <li>
              <NavLink
                to="/roadmap"
                className={({isActive}) =>
                  `px-2 py-1 rounded-md ${isActive ? "bg-brand.light text-brand" : "text-slate-600 hover:text-slate-900"}`
                }>
                Roadmap
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/krs"
                className={({isActive}) =>
                  `px-2 py-1 rounded-md ${isActive ? "bg-brand.light text-brand" : "text-slate-600 hover:text-slate-900"}`
                }>
                KRs
              </NavLink>
            </li>
          </ul>
        )}

        <div className="ml-auto">
          {authed ? (
            <button
              onClick={onLogout}               {/* 👈 usar la prop */}
              className="text-sm px-3 py-1.5 rounded-md border border-slate-300 hover:bg-slate-50">
              Salir
            </button>
          ) : (
            <NavLink
              to="/login"
              className="text-sm px-3 py-1.5 rounded-md bg-brand text-white hover:bg-brand/90">
              Entrar
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}
