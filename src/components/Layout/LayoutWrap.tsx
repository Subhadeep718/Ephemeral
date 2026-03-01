import { Outlet } from "@tanstack/react-router";
import Nav from "./Nav";
import FastLoader from "../Loader/FastLoader";
import MobileNav from "./MobileNav";
import { PlusIcon } from "../UI/iconLibrary/plus";
import { useState } from "react";
import Modal from "../UI/Modal";
import PostForm from "../UI/PostForm";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </>
  );
}

/**
 * Render the mobile-optimized app layout with a header, a scrollable content area for nested routes, and a fixed bottom navigation.
 *
 * @returns A JSX element containing a top header labeled "EPHEMERAL", a full-height scrollable container that renders nested routes via `Outlet`, and a fixed bottom `MobileNav` bar.
 */
function MobileView() {
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);

  return (
    <>
      <div className="grid md:hidden grid-rows-[55px_1fr] h-full bg-black/80">
        <div className="flex justify-between items-center px-2.5 ">
          <h3 className="quintessential-regular text-2xl tracking-widest text-white">
            EPHEMERAL
          </h3>
          <button
            className="text-white cursor-pointer"
            onClick={() => setIsAddPostOpen(true)}
          >
            <PlusIcon size={25} />
          </button>
        </div>
        <div
          className={`h-full w-full hide-scrollbar pt-2.5 pb-[4.8rem] ${
            isAddPostOpen ? "overflow-hidden" : "overflow-auto"
          }`}
        >
          <Outlet />
        </div>
        <div className="fixed bottom-0 left-0  w-full p-3 bg-[#60606096] backdrop-blur-[10px] rounded-t-[15px]">
          <MobileNav />
        </div>
      </div>

      <Modal
        open={isAddPostOpen}
        ModalTitle="Create New Post"
        onClose={() => setIsAddPostOpen(false)}
      >
        <PostForm />
      </Modal>
    </>
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
    <div className="hidden md:grid grid-cols-[200px_1fr] h-full bg-black/80 ">
      <Nav />
      <div className="h-full w-full max-w-[630px] m-auto overflow-auto hide-scrollbar">
        <Outlet />
      </div>
    </div>
  );
}
