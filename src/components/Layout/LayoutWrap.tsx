import { Outlet } from "@tanstack/react-router";
import Nav from "./Nav";
import FastLoader from "../Loader/FastLoader";

export default function LayoutWrap() {
  return (
    <>
      <FastLoader />
      <div className="grid  grid-cols-[200px_1fr] h-full bg-black/80 ">
        <Nav />
        <div className="h-full w-full max-w-[630px] m-auto overflow-auto hide-scrollbar">
          <Outlet />
        </div>
      </div>
    </>
  );
}
