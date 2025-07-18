import { Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <>
      <h1>App Bar</h1>
      <Outlet />
    </>
  );
}
