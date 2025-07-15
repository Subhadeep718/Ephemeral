import { Outlet } from "@remix-run/react";
import "../styles/components/loginlayout.scss"

export default function Layout() {
  return (
    <div className="main">
      {/* <h1>Auth</h1> */}
      <Outlet />
    </div>
  );
}