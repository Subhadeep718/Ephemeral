import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import { FaSearch } from "react-icons/fa";
import "../../index.css"

export default function Nav() {
  const list = [
    { name: "Home", link: "/", icon: AiFillHome },
    { name: "Search", link: "/search", icon: FaSearch },
    { name: "chat", link: "/chat", icon: IoChatbubbles },
    { name: "Me", link: "/me", icon: FaUser },
  ];

  return (
    <div className="grid grid-rows-[65px_1px_1fr]  min-h-screen">
    {/*bg-[#121212] */}
    <div className="flex items-center justify-center">
      <h3 className="quintessential-regular text-2xl tracking-[0.1em] text-white">
        EPHEMERAL
      </h3>
    </div>
  

    <hr className="border-gray-800" />
  

    <ul className="flex flex-col gap-1 p-4">
      {list.map((e, i) => (
        <Link to={e.link} key={i} className="group">
          <li className="dm-serif-text-regular flex items-center gap-4 px-4 py-3 
                         text-gray-400 rounded-lg transition-all duration-300
                         hover:bg-white/5 hover:text-white hover:translate-x-1">
            <e.icon className="text-xl transition-colors group-hover:text-amber-200" />
            <span className="text-lg capitalize tracking-wide italic  opacity-80 group-hover:opacity-100">
              {e.name}
            </span>
          </li>
        </Link>
      ))}
    </ul>
  </div>
  );
}
