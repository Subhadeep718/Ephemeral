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

function MobileView() {
  return (
    <div className="grid grid-rows-[50px_1fr_60px] h-full bg-black/80">
      <h3 className="quintessential-regular text-2xl tracking-widest text-white">
        EPHEMERAL
      </h3>
      <Outlet />
      <div></div>
    </div>
  );
}
