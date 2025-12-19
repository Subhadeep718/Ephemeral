import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import { FaSearch } from "react-icons/fa";

export default function Nav() {
  const list = [
    { name: "Home", link: "/", icon: AiFillHome },
    { name: "Search", link: "/search", icon: FaSearch },
    { name: "chat", link: "/chat", icon: IoChatbubbles },
    { name: "Me", link: "/me", icon: FaUser },
  ];

  return (
    <div className="">
      <h3>EPHEMERAL</h3>
      <hr />
      <ul>
        {list.map((e, i) => {
          return (
            <Link to={e.link} key={i}>
              <li>
                <e.icon />
                {e.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
