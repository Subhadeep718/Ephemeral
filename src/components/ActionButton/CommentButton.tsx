import { useState } from "react";
import { BsChat } from "react-icons/bs";
import Drawer from "../UI/Drawer";
import Avatar from "../UI/Avatar";

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
        <h6>Comment</h6>
        <Comment />
      </Drawer>
    </>
  );
}

function Comment({ data }: { data?: any[] }) {
  if (data) {
    <div>
      <Avatar />
      <div>
        <h6>Rahul Day</h6>
        <p>Show Beautiful</p>
      </div>
    </div>;
  }

  return <div>Not Comment Yet</div>;
}
