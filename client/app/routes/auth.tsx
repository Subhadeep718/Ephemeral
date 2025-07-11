import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <div>
      <h1>Auth</h1>
      <Outlet />
    </div>
  );
}