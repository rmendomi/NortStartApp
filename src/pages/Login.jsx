import React, { useState, memo, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import { useAuth } from "../hooks/useAuth";

const Field = memo(function Field({
  label, type="text", value, onChange, name, autoComplete, autoFocus=false, rightIcon
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        placeholder=" "
        spellCheck={false}
        className="peer w-full rounded-lg border border-slate-300 bg-white px-3 pt-4 pb-2 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
      <label className="pointer-events-none absolute left-3 top-2 text-xs text-slate-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
        {label}
      </label>
      {rightIcon}
    </div>
  );
});

function Login() {
  const nav = useNavigate();
  const { state } = useLocation(); // { from }
  const { session } = useAuth();

  // si ya está logueado, redirige (evita “no hace nada”)
  useEffect(() => {
    if (session) nav(state?.from || "/resumen", { replace: true });
  }, [session, state?.from, nav]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const notify = useCallback((kind, msg) => setAlert({ kind, msg }), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);
    if (!email || !password) return notify("danger", "Completa email y contraseña");
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      // onAuth ya no es necesario; PrivateRoute + useAuth harán el resto
      nav(state?.from || "/resumen", { replace: true });
    } catch (err) {
      notify("danger", err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setAlert(null);
    if (!email || !password) return notify("danger", "Completa email y contraseña");
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) return notify("danger", error.message);
    notify("success", "Cuenta creada. Revisa tu correo para confirmar.");
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* IZQUIERDA */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-brand text-white grid place-items-center text-lg font-bold">✦</div>
              <span className="text-lg font-semibold text-slate-900">NorthStarApp</span>
            </div>
            <h1 className="mt-6 text-2xl font-semibold text-slate-900">Acceso</h1>
            <p className="text-sm text-slate-600">Ingresa con tu correo para continuar.</p>
          </div>

          {alert && (
            <div className={`mb-4 rounded-lg border px-3 py-2 text-sm ${
              alert.kind === "danger"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}>
              {alert.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <Field label="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} name="email" autoComplete="email" autoFocus />
            <Field
              label="Contraseña"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="current-password"
              autoComplete="current-password"
              rightIcon={
                <button
                  type="button"
                  onMouseDown={(e)=>{ e.preventDefault(); setShowPass(v=>!v); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  aria-label="Mostrar/Ocultar contraseña"
                >
                  {showPass ? "🙈" : "👁️"}
                </button>
              }
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-brand py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand/90 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Ingresando…" : "Iniciar sesión"}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3 text-xs text-slate-500">
            <div className="h-px flex-1 bg-slate-200" />
            o continúa con
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["G", "f", ""].map((s) => (
              <button key={s} type="button" disabled className="rounded-lg border border-slate-300 bg-white py-2 text-sm text-slate-700 disabled:opacity-60">
                {s}
              </button>
            ))}
          </div>

          <div className="mt-5">
            <button type="button" onClick={handleSignup} className="w-full rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-medium hover:bg-slate-50">
              Crear cuenta
            </button>
          </div>
        </div>
      </div>

      {/* DERECHA */}
      <div className="hidden md:block relative" style={{
        backgroundImage:
          "radial-gradient(1200px 700px at 70% 40%, rgba(79,70,229,.25), transparent), radial-gradient(800px 500px at 30% 70%, rgba(99,102,241,.25), transparent)",
      }}>
        <div className="absolute inset-0 bg-[url('/login-art.jpg')] bg-cover bg-center opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/40 text-[7rem] md:text-[10rem] font-black select-none">✦</span>
        </div>
      </div>
    </div>
  );
}

export default memo(Login);
