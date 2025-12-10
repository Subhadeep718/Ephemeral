import { AiFillHome } from "react-icons/ai";

export default function Nav() {
  // const list =[{name:"Home",
  //     link:"/home",
  //     icon: AiFillHome
  // }]

  return (
    <div>
      <h3>EPHEMERAL</h3>
      <hr />
      <ul>
        <li>
          <AiFillHome />
          Home
        </li>
      </ul>
    </div>
  );
}
