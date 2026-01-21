import { useState } from "react";
import { BsChat } from "react-icons/bs";
<<<<<<< HEAD

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
=======
import Drawer from "../UI/Drawer";
import Avatar from "../UI/Avatar";

export default function CommentPost({ countComment }: { countComment: number }) {
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
            <Avatar /><div>
                <h6>Rahul Day</h6>
                <p>Show Beautiful</p>
            </div>
        </div>

    }

    return (
        <div>Not Comment Yet</div>
    )
}
>>>>>>> 4369a08ea67294b9f89ca1c3c2fa19bba1444833
