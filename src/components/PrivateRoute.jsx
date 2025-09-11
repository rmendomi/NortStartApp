import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

/**
 * Protege rutas. Evita bucles de navegación:
 * - Si no hay sesión -> Navigate a /login (con from)
 * - Si hay sesión -> renderiza children
 */
export default function PrivateRoute({ children }) {
  const { session } = useAuth(); // null si no logueado; objeto si logueado
  const location = useLocation();

  // Si el hook aún no resolvió, no navegamos (puedes poner un spinner si quieres)
  if (session === undefined) return null;

  if (!session) {
    // IMPORTANTE: /login es ruta pública; no envuelve PrivateRoute
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
