import { Outlet } from "@tanstack/react-router";
import Nav from "./Nav";

export default function LayoutWrap() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
