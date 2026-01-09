import Avatar from "./Avatar";
import "../../index.css";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Post() {
  return (
    <div className=" grid grid-rows-[40px_1fr_auto] gap-2">
      <PostTitle userName="Subhadeep" songTitle="lorem is" />
      <div>
        <img
          // src="https://www.k12digest.com/wp-content/uploads/2024/03/1-3-550x330.jpg"
          className="w-full object-cover aspect-3/2"
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
          <p className="text-sm font-bold text-stone-700 ">{userName}</p>
          {songTitle && (
            <p className="text-xs text-stone-500 font-semibold ">{songTitle}</p>
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
      <div></div>

      <MdOutlineBookmarkAdd />
      <MdBookmarkAdded />
    </div>
  );
}

function LikePost({ countLike }: { countLike: number }) {
  return (
    <div>
      <div>
        <FavoriteIcon />
        <FavoriteBorderIcon />
      </div>
      {countLike}
    </div>
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
