// src/components/JiraResourceList.jsx
import React from "react"; // ⬅️ agrega esto
import { useState, useMemo } from "react";

function get(obj, path) {
  if (!obj || !path) return undefined;
  return path.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), obj);
}

export default function JiraResourceList({ title, items = [], itemKey = "id", primary = "name", secondary }) {
  const [open, setOpen] = useState(true);
  const count = items?.length || 0;
  const preview = useMemo(() => items?.slice(0, 8) || [], [items]);

  return (
    <div className="rounded-lg border border-slate-200">
      <button className="flex w-full items-center justify-between px-3 py-2" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-slate-600">{count}</div>
      </button>
      {open && (
        <div className="border-t border-slate-200 p-3">
          {preview.length === 0 ? (
            <div className="text-sm text-slate-500">— sin datos —</div>
          ) : (
            <ul className="space-y-1">
              {preview.map((it, idx) => (
                <li key={get(it, itemKey) ?? `k-${idx}`} className="text-sm">
                  <span className="font-medium">{get(it, primary) ?? "—"}</span>
                  {secondary && <span className="ml-2 text-slate-600">{get(it, secondary) ?? ""}</span>}
                </li>
              ))}
            </ul>
          )}
          {count > preview.length && <div className="mt-2 text-xs text-slate-500">… y {count - preview.length} más</div>}
        </div>
      )}
    </div>
  );
}
