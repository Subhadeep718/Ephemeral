import { useEffect } from "react";
import { XIcon } from "./iconLibrary/x";

interface ModalProps {
  onClose: () => void;
  ModalTitle: string;
  isBackDrop?: boolean;
  children: React.ReactNode;
  open: boolean;
}

export default function Modal({
  onClose,
  ModalTitle,
  isBackDrop,
  children,
  open,
}: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  function handleBackdrop() {
    if (isBackDrop) {
      onClose();
    }
  }

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-xs select-none ${open ? "flex" : "hidden"}`}
      onClick={handleBackdrop}
    >
      <div
        className="max-w-[900px] min-w-[300px] w-full h-full rounded-xl bg-zinc-900 p-6 shadow-xl "
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between items-center px-2.5 mb-4 border-b-2 border-white/15 pb-3">
          <h2 className="text-xl font-semibold text-white ">{ModalTitle}</h2>
          <div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="text-white cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              <XIcon size={25} />
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
