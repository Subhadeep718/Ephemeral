import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { BiSolidMessageSquareAdd } from "react-icons/bi";

import { Link } from "@tanstack/react-router";
import { FaSearch } from "react-icons/fa";
import "../../index.css";
import { useMatch } from "@tanstack/react-router";

type NavItemProps = {
  to: "/" | "/search" | "/addPost" | "/chat" | "/me";
  name: string;
  icon: React.ElementType;
};

export default function Nav() {
  const list = [
    { name: "Home", link: "/", icon: AiFillHome },
    { name: "Search", link: "/search", icon: FaSearch },
    { name: "ADD Post", link: "/addPost", icon: BiSolidMessageSquareAdd },
    { name: "chat", link: "/chat", icon: IoChatbubbles },
    { name: "Me", link: "/me", icon: FaUser },
  ] as const;

  return (
    <div className="grid grid-rows-[65px_1px_1fr]  min-h-screen">
      <div className="flex items-center justify-center">
        <h3 className="quintessential-regular text-2xl tracking-widest text-white">
          EPHEMERAL
        </h3>
      </div>

      <hr className="border-gray-800" />

      <ul className="flex flex-col gap-1 p-4">
        {list.map((e) => (
          <NavItem key={e.link} to={e.link} name={e.name} icon={e.icon} />
        ))}
      </ul>
    </div>
  );
}

function NavItem({ to, name, icon: Icon }: NavItemProps) {
  const match = useMatch({
    from: to,
    shouldThrow: false,
  });

  const isActive = Boolean(match);

  return (
    <Link to={to} className="group">
      <li
        className={`dm-serif-text-regular flex items-center gap-4 px-4 py-3
          rounded-lg transition-all duration-300
          hover:bg-white/5 hover:translate-x-1
          ${
            isActive
              ? "bg-white/10 text-white border-amber-500"
              : "text-gray-400 hover:text-white"
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
    </Link>
  );
}
