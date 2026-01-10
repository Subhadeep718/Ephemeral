import Avatar from "./Avatar";
import "../../index.css";
import { useState } from "react";
// import { gsap } from "gsap";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BsChat } from "react-icons/bs";
import Drawer from "./drawer";

export default function Post() {
  return (
    <div className=" grid grid-rows-[40px_auto_auto] gap-2">
      <PostTitle userName="Subhadeep" songTitle="lorem is" />
      <div className="w-full h-full overflow-hidden">
        <img
          src="https://static0.srcdn.com/wordpress/wp-content/uploads/2025/05/one-piece-luffy-angry.jpg"
          alt="post"
          className="w-full h-full object-cover "
        />
      </div>
      <PostFooter />
    </div>
  );
}

interface PostTitleProps {
  userName: string;
  songTitle?: string;
  imgLink?: string;
}

function PostTitle({ userName, songTitle, imgLink }: PostTitleProps) {
  return (
    <div className="grid px-2.5 items-center grid-cols-[1fr_auto]">
      <div className="flex items-center gap-1.5">
        <Avatar size="sm" imgLink={imgLink} text={userName} />
        <div>
          <p className="text-sm font-bold text-white/80 ">{userName}</p>
          {songTitle && (
            <p className="text-xs text-white/70 font-semibold ">{songTitle}</p>
          )}
        </div>
      </div>
      <div>
        <HiOutlineDotsHorizontal />
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
    <div>
      <div>
        <LikePost countLike={5} />
        <CommentPost />
      </div>

      <MdOutlineBookmarkAdd />
      <MdBookmarkAdded />
    </div>
  );
}

function LikePost({ countLike }: { countLike: number }) {
  const [liked, setLiked] = useState(false);
  const [likedCound, setLikedCound] = useState(countLike);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikedCound(likedCound + 1);
    } else {
      setLiked(false);
      setLikedCound(likedCound - 1);
    }
  };

  return (
    <div onClick={handleLike} className="flex flex-row gap-1 items-center">
      <div>
        {liked ? (
          <FavoriteIcon fontSize="large" sx={{ color: "red" }} />
        ) : (
          <FavoriteBorderIcon fontSize="large" sx={{ color: "#c8c8c8" }} />
        )}
      </div>
      <p className="text-[1.3rem] font-bold text-white/80 ">{likedCound}</p>
    </div>
  );
}

function CommentPost() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={() => setOpen(true)}>
        <BsChat />
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} position="bottom">
        <div>hi</div>
      </Drawer>
    </>
  );
}

//  loop
//  <div className="relative w-full overflow-hidden mt-1">
//           <div className="marquee">
//             <p className="text-xs font-medium whitespace-nowrap">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Repellendus dolorem quae corrupti, eos, odio velit nostrum nisi
//               adipisci cum.
//             </p>

//             {/* duplicate for seamless loop */}
//             <p className="text-xs font-medium whitespace-nowrap ml-8">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Repellendus dolorem quae corrupti, eos, odio velit nostrum nisi
//               adipisci cum.
//             </p>
//           </div>
