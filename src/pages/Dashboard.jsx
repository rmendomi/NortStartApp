import React from 'react'

export default function Dashboard({ user }) {
  return (
    <div className="mx-auto max-w-6xl p-6 space-y-6">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-r from-brand.light to-white border border-slate-200 shadow-card p-6">
        <h1 className="text-xl font-semibold text-slate-900">¡Hola, <span className="text-brand">{user?.email}</span>!</h1>
        <p className="text-slate-600 mt-1">Empieza revisando el <b>Roadmap</b> o el avance de <b>KRs</b>. Esta es una demo con datos dummy.</p>
        <div className="mt-4 flex gap-3">
          <a href="/roadmap" className="px-4 py-2 rounded-md bg-brand text-white hover:bg-brand/90 text-sm">Ver Roadmap</a>
          <a href="/krs" className="px-4 py-2 rounded-md border border-slate-300 hover:bg-white text-sm">Ver KRs</a>
        </div>
      </div>

      {/* Tarjetas métricas dummy */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label:"Épicas activas", value:"5", sub:"+2 vs. mes anterior" },
          { label:"Hitos este mes", value:"3", sub:"1 bloqueado" },
          { label:"% avance KRs", value:"62%", sub:"meta 75%" },
        ].map((m,i)=>(
          <div key={i} className="rounded-xl bg-white border border-slate-200 shadow-card p-4">
            <div className="text-sm text-slate-600">{m.label}</div>
            <div className="mt-1 text-2xl font-semibold">{m.value}</div>
            <div className="text-xs text-slate-500 mt-1">{m.sub}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
