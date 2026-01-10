import { Outlet } from "@tanstack/react-router";
import Nav from "./Nav";

export default function LayoutWrap() {
  return (
    <div className="grid  grid-cols-[150px_1fr] h-dvh bg-black/80 ">
      <Nav />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}
