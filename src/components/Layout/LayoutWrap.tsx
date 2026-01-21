import { Outlet } from "@tanstack/react-router";
import Nav from "./Nav";
import FastLoader from "../Loader/FastLoader";
import MobileNav from "./MobileNav";

export default function LayoutWrap() {
  return (
    <>
      <FastLoader />
    {/* <DefaultViwe/> */}
    <MobileView/>
    </>
  );
}

function MobileView() {
  return (
    <div className="grid grid-rows-[30px_1fr] h-full bg-black/80">
      <h3 className="quintessential-regular text-2xl tracking-widest text-white">
        EPHEMERAL
      </h3>
      <div className="h-full w-full overflow-auto hide-scrollbar pb-[4.8rem]">
      <Outlet />
      </div>
      <div className="fixed bottom-0 left-0  w-full p-3 bg-[#60606096] backdrop-blur-[10px] rounded-t-[15px]"><MobileNav/></div>
    </div>
  );
}


function DefaultViwe(){
  return(
    <div className="grid  grid-cols-[200px_1fr] h-full bg-black/80 ">
    <Nav />
    <div className="h-full w-full max-w-[630px] m-auto overflow-auto hide-scrollbar">
      <Outlet />
    </div>
  </div>
  )
}