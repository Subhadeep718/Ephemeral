import { useState } from "react";
import { BsChat } from "react-icons/bs";

import Avatar from "../UI/Avatar";
import Drawer from "../UI/drawer";

export default function CommentPost({
  countComment,
}: {
  countComment: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex flex-row gap-2 items-start "
      >
        <BsChat
          style={{ fontSize: "24px", fontWeight: "bold", color: "#c8c8c8" }}
        />
        <p className="text-[1.2rem] font-bold text-white/80 ">{countComment}</p>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} position="bottom">
        <Comment />
      </Drawer>
    </>
  );
}

function Comment({ comment }: { comment?: [] }) {
  if (comment) {
    return (
      <div>
        <Avatar />
        <h6>subhadeep</h6>
        <p>hi</p>
      </div>
    );
  }
  return <div> no Comments Yet</div>;
}
