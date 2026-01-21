import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { Link } from "@tanstack/react-router";
import { FaSearch } from "react-icons/fa";
import "../../index.css";
import { useMatch } from "@tanstack/react-router";

type NavItemProps = {
    to: "/" | "/search" | "/chat" | "/me";
    name: string;
    icon: React.ElementType;
  };


/**
 * Renders a bottom-aligned mobile navigation bar with Home, Search, Chat, and Me items.
 *
 * @returns A JSX element containing an inline list of navigation items for mobile layout
 */
export default function MobileNav(){
    const list = [
        { name: "Home", link: "/", icon: AiFillHome },
        { name: "Search", link: "/search", icon: FaSearch },
        { name: "chat", link: "/chat", icon: IoChatbubbles },
        { name: "Me", link: "/me", icon: FaUser },
      ] as const;
    return(
        <ul className="flex flex-row gap-1 justify-around item-center  w-full">
        {list.map((e) => (
          <NavItem key={e.link} to={e.link} name={e.name} icon={e.icon} />
        ))}
      </ul>
    )


}


/**
   * Render a navigation item with an icon and label that links to the specified route and reflects the active route state.
   *
   * @param to - The route path this item links to.
   * @param name - The label text displayed beneath the icon.
   * @param icon - The React component used to render the item's icon.
   * @returns A JSX element representing the linked navigation item (`li` wrapped in a `Link`) with active/inactive styling.
   */
  function NavItem({ to, name, icon: Icon }: NavItemProps) {
    const match = useMatch({
      from: to,
      shouldThrow: false,
    });
  
    const isActive = Boolean(match);
  
    return (
      <Link to={to} className="group">
        <li
        className={`flex flex-col items-center justify-center`}
        //   className={`dm-serif-text-regular flex-col justify-center  px-4 py-3 flex items-center gap-4 
        //     rounded-lg transition-all duration-300
        //     hover:bg-white/5 hover:translate-x-1
        //     ${
        //       isActive
        //         ? "bg-white/10 text-white border-amber-500"
        //         : "text-gray-400 hover:text-white"
        //     }`}
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