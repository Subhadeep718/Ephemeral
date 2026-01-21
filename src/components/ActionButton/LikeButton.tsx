import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function LikePost({ countLike }: { countLike: number }) {
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
    <div onClick={handleLike} className="flex flex-row gap-1 items-start">
      <div>
        {liked ? (
          <FavoriteIcon sx={{ fontSize: "30px", color: "red" }} />
        ) : (
          <FavoriteBorderIcon sx={{ fontSize: "30px", color: "#c8c8c8" }} />
        )}
      </div>
      <p className="text-[1.2rem] font-bold text-white/80 ">{likedCound}</p>
    </div>
  );
}
