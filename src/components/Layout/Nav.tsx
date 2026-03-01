import { AiFillHome } from "react-icons/ai";
import { FaUser, FaSearch } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

import { Link, useMatch } from "@tanstack/react-router";
import { useState } from "react";

import "../../index.css";
import Modal from "../UI/Modal";
import PostForm from "../UI/PostForm";

type NavItemProps = {
  to: "/" | "/search" | "/addPost" | "/chat" | "/me";
  name: string;
  icon: React.ElementType;
  isModal?: boolean;
  onModalOpen?: () => void;
  isModalOpen?: boolean;
};

export default function Nav() {
  const [isAddPostOpen, setIsAddPostOpen] = useState(false);

  const list = [
    { name: "Home", link: "/", icon: AiFillHome, isModal: false },
    { name: "Search", link: "/search", icon: FaSearch, isModal: false },
    {
      name: "Add Post",
      link: "/addPost",
      icon: BiSolidMessageSquareAdd,
      isModal: true,
    },
    { name: "Chat", link: "/chat", icon: IoChatbubbles, isModal: false },
    { name: "Me", link: "/me", icon: FaUser, isModal: false },
  ] as const;

  return (
    <>
      <div className="grid grid-rows-[65px_1px_1fr] min-h-screen">
        <div className="flex items-center justify-center">
          <h3 className="quintessential-regular text-2xl tracking-widest text-white">
            EPHEMERAL
          </h3>
        </div>

        <hr className="border-gray-800" />

        <ul className="flex flex-col gap-1 p-4">
          {list.map((e) => (
            <NavItem
              key={e.link}
              to={e.link}
              name={e.name}
              icon={e.icon}
              isModal={e.isModal}
              isModalOpen={e.isModal ? isAddPostOpen : undefined}
              onModalOpen={() => setIsAddPostOpen(true)}
            />
          ))}
        </ul>
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

function NavItem({ to, name, icon: Icon, isModal, onModalOpen }: NavItemProps) {
  const match = useMatch({
    from: to,
    shouldThrow: false,
  });

  const isActive = Boolean(match);

  const content = (
    <li
      className={`dm-serif-text-regular flex items-center gap-4 px-4 py-3
        rounded-lg transition-all duration-300
        hover:bg-white/5 hover:translate-x-1
        ${
          isActive ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
        }`}
    >
      <Icon
        className={`text-xl transition-colors
          ${isActive ? "text-amber-200" : "group-hover:text-amber-200"}`}
      />

      <span
        className={`text-lg capitalize tracking-wide italic
          ${isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}
      >
        {name}
      </span>
    </li>
  );

  if (isModal) {
    return (
      <button type="button" onClick={onModalOpen} className="group text-left">
        {content}
      </button>
    );
  }

  return (
    <Link to={to} className="group">
      {content}
    </Link>
  );
}
