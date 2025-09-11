// src/App.jsx  (añade la ruta /config/jira y mantiene TODO lo que ya funciona)
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NsTopbar from "./components/NsTopbar.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { useAuth } from "./hooks/useAuth.js";

import Resumen from "./pages/Resumen.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import OKR from "./pages/OKR.jsx";
import Metricas from "./pages/Metricas.jsx";
import Config from "./pages/Config.jsx";
import Login from "./pages/Login.jsx";
import JiraSettings from "./pages/JiraSettings.jsx"; // ⬅️ nuevo

function RootRedirect() {
  const { isAuthed } = useAuth();
  return <Navigate to={isAuthed ? "/resumen" : "/login"} replace />;
}

function Shell({ children }) {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const hideTopbar = pathname.startsWith("/login");
  return (
    <>
      {!hideTopbar && <NsTopbar user={user} />}
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/resumen"  element={<PrivateRoute><Resumen /></PrivateRoute>} />
          <Route path="/roadmap"  element={<PrivateRoute><Roadmap /></PrivateRoute>} />
          <Route path="/okr"      element={<PrivateRoute><OKR /></PrivateRoute>} />
          <Route path="/metricas" element={<PrivateRoute><Metricas /></PrivateRoute>} />
          <Route path="/config"   element={<PrivateRoute><Config /></PrivateRoute>} />
          <Route path="/config/jira" element={<PrivateRoute><JiraSettings /></PrivateRoute>} /> {/* ⬅️ NUEVA */}
          <Route path="/" element={<RootRedirect />} />
          <Route path="*" element={<RootRedirect />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  );
}
