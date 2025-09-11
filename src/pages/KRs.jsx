import React from 'react'
import { D_KRSUMMARY } from '../data/dummy'

export default function KRs(){
  const rows = (D_KRSUMMARY||[]).map(r => ({...r, pct: r.total ? (r.done/r.total) : 0 }))
  const barColor = (p)=> p>=0.85 ? 'bg-emerald-600' : p>=0.5 ? 'bg-amber-500' : 'bg-slate-400'

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h2 className="text-xl font-semibold mb-3">KRs (dummy)</h2>
      <div className="rounded-2xl bg-white shadow-card border border-slate-200 p-0 overflow-x-auto">
        <table className="min-w-[960px] w-full text-sm">
          <thead className="bg-slate-900 text-slate-100">
            <tr>
              <th className="py-3 px-3 text-left rounded-tl-2xl">KR</th>
              <th className="py-3 px-3 text-left">Target</th>
              <th className="py-3 px-3 text-left">Issues</th>
              <th className="py-3 px-3 text-left">Done</th>
              <th className="py-3 px-3 text-left">Puntos</th>
              <th className="py-3 px-3 text-left rounded-tr-2xl">Avance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r,i)=>{
              const pct = Math.round((r.pct||0)*100)
              return (
                <tr key={i} className="border-b last:border-0 hover:bg-slate-50/60">
                  <td className="py-3 px-3"><b>{r.kr.name}</b> <span className="text-slate-500">({r.kr.id})</span></td>
                  <td className="px-3">{r.kr.target ?? '—'}</td>
                  <td className="px-3">{r.total}</td>
                  <td className="px-3">{r.done}</td>
                  <td className="px-3">{r.pointsDone}/{r.pointsTotal}</td>
                  <td className="px-3 w-72">
                    <div className="w-full h-3 bg-slate-200 rounded">
                      <div className={`h-3 rounded ${barColor(r.pct)}`} style={{width:`${pct}%`}} />
                    </div>
                    <div className="text-[11px] mt-1 text-slate-500">{pct}%</div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
