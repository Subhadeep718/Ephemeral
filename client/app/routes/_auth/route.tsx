import { Outlet } from "@remix-run/react";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <h1>Auth Pages</h1>
      <Outlet /> 
    </div>
  );
}