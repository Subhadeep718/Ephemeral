import Avatar from "./Avatar";
import "../../index.css";

import { HiDotsVertical } from "react-icons/hi";

import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";

import LikePost from "../ActionButton/LikeButton";
import CommentPost from "../ActionButton/CommentButton";
import { useState } from "react";

export default function Post({ className = "" }: { className?: string }) {
  return (
    <div
      className={`${className} grid grid-rows-[40px_auto_auto] gap-2 mb-3.5`}
    >
      <PostTitle name="Subhadeep" userName="@Subhadeep7" />
      <div className="w-full h-full overflow-hidden">
        <img
          src="https://static0.srcdn.com/wordpress/wp-content/uploads/2025/05/one-piece-luffy-angry.jpg"
          alt="post"
          className="w-full h-full object-cover "
        />
      </div>
      <PostFooter />
      <hr className="text-white/30" />
      <PostDescription />
    </div>
  );
}

interface PostTitleProps {
  name: string;
  userName?: string;
  imgLink?: string;
}

function PostTitle({
  name: userName,
  userName: songTitle,
  imgLink,
}: PostTitleProps) {
  return (
    <div className="grid px-2.5 items-center grid-cols-[1fr_auto]">
      <div className="flex items-center gap-2">
        <Avatar size="sm" imgLink={imgLink} text={userName} />
        <div>
          <p className="text-sm font-bold text-white/80 ">{userName}</p>
          {songTitle && (
            <p className="text-xs text-white/70 font-semibold ">{songTitle}</p>
          )}
        </div>
      </div>
      <div>
        <HiDotsVertical className="text-[1.2rem] font-bold text-white/80" />
      </div>
    </div>
  );
}

function PostFooter() {
  return (
    <div>
      <PostFooterAction />
    </div>
  );
}

function PostFooterAction() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-2.5">
        <LikePost countLike={5} />
        <CommentPost countComment={3} />
      </div>
      <BookmarkAdded />
    </div>
  );
}

function BookmarkAdded() {
  const [isMark, setIsMark] = useState(false);
  if (isMark) {
    return (
      <MdBookmarkAdded
        className="text-[1.5rem] font-bold text-white/80"
        onClick={() => setIsMark(false)}
      />
    );
  }
  return (
    <MdOutlineBookmarkAdd
      className="text-[1.5rem] font-bold text-white/80"
      onClick={() => setIsMark(true)}
    />
  );
}

function PostDescription() {
  const [show, setShow] = useState(false);

  return (
    <div
      onClick={() => setShow(!show)}
      className="grid grid-cols-[1fr_auto] gap-1"
    >
      <p
        className={`text-xs text-white/80 ${
          show ? "line-clamp-none" : "line-clamp-1"
        }`}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        laboriosam dicta vero eos optio eaque quas fuga, ducimus deleniti,
        dolor, porro numquam? Consequuntur repudiandae aliquid nesciunt officia
        repellat quasi maxime.
      </p>

      {!show && (
        <button className="text-xs text-white/80 whitespace-nowrap">
          More
        </button>
      )}
    </div>
  );
}
