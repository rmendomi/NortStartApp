import React from "react";

export default function RoleGate({ role, allow = ["admin","user"], children, fallback=null }) {
  if (!allow.includes(role)) return fallback;
  return children;
}
