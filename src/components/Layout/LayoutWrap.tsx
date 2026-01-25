import { Outlet } from "@tanstack/react-router";
import Nav from "./Nav";
import FastLoader from "../Loader/FastLoader";
import MobileNav from "./MobileNav";

/**
 * Application layout wrapper that mounts global loaders and the mobile view.
 *
 * @returns The top-level JSX element composing the global FastLoader and the MobileView layout.
 */
export default function LayoutWrap() {
  return (
    <>
      <FastLoader />
      <DefaultView />
      <MobileView />
    </>
  );
}

/**
 * Render the mobile-optimized app layout with a header, a scrollable content area for nested routes, and a fixed bottom navigation.
 *
 * @returns A JSX element containing a top header labeled "EPHEMERAL", a full-height scrollable container that renders nested routes via `Outlet`, and a fixed bottom `MobileNav` bar.
 */
function MobileView() {
  return (
    <div className="grid grid-rows-[30px_1fr] h-full bg-black/80">
      <h3 className="quintessential-regular text-2xl tracking-widest text-white">
        EPHEMERAL
      </h3>
      <div className="h-full w-full overflow-auto hide-scrollbar pb-[4.8rem]">
        <Outlet />
      </div>
      <div className="fixed bottom-0 left-0  w-full p-3 bg-[#60606096] backdrop-blur-[10px] rounded-t-[15px]">
        <MobileNav />
      </div>
    </div>
  );
}

/**
 * Renders a two-column desktop layout with a fixed 200px navigation column and a centered, scrollable content area.
 *
 * The left column displays the Nav component; the right column centers content to a max width of 630px, provides vertical scrolling, and renders nested route content via Outlet.
 *
 * @returns A JSX element containing the two-column layout with Nav and an Outlet-backed content region.
 */
function DefaultView() {
  return (
    <div className="grid  grid-cols-[200px_1fr] h-full bg-black/80 ">
      <Nav />
      <div className="h-full w-full max-w-[630px] m-auto overflow-auto hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}
