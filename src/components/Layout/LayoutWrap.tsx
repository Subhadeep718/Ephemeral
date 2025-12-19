import { Outlet } from "@tanstack/react-router";
import Nav from "./Nav";

export default function LayoutWrap() {
  return (
    <div className="grid  grid-cols-[150px_1fr]">
      <Nav />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
