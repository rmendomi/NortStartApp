import React from "react";

export default function Page({ title, actions, children }) {
  return (
    <div className="mx-auto max-w-6xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex gap-2">{actions}</div>
      </div>
      <div className="rounded-2xl bg-white border border-slate-200 shadow-card p-4">
        {children}
      </div>
    </div>
  );
}
