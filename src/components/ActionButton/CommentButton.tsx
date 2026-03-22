import { useState } from "react";
import { BsChat } from "react-icons/bs";
// import Avatar from "../UI/Avatar";
import GsapDrawer from "../UI/Drawer";

export default function CommentPost({
  countComment,
}: {
  countComment: number;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsDrawerOpen(true)}
        className="flex flex-row gap-2 items-start "
      >
        <BsChat
          style={{ fontSize: "24px", fontWeight: "bold", color: "#c8c8c8" }}
        />
        <p className="text-[1.2rem] font-bold text-white/80 ">{countComment}</p>
      </div>
      <GsapDrawer
        title="Menu"
        action="bottom"
        open={isDrawerOpen}
        closeOpen={() => setIsDrawerOpen(false)}
      >
        <div>hi</div>
        <h3>
          hello Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et est
          maiores expedita aperiam fugit tempora repellendus provident
          perspiciatis sit dolores doloremque sint, iusto, corrupti
          exercitationem, explicabo blanditiis aliquam corporis distinctio.
        </h3>
      </GsapDrawer>
    </>
  );
}

// function Comment({ data }: { data?: string[] }) {
//   if (data) {
//     <div>
//       <Avatar />
//       <div>
//         <h6>Rahul Day</h6>
//         <p>Show Beautiful</p>
//       </div>
//     </div>;
//   }

//   return <div>Not Comment Yet</div>;
// }
