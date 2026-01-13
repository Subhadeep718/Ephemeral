import { Outlet } from "@tanstack/react-router";
import Nav from "./Nav";

export default function LayoutWrap() {
  return (
    <div className="grid  grid-cols-[200px_1fr] h-dvh bg-black/80 ">
      <Nav />
      <div className="h-full w-full max-w-[630px] m-auto">
        <Outlet />
      </div>
    </div>
  );
}
