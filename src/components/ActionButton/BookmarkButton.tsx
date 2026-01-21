import { useState } from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";

export default function BookmarkAdded() {
  const [isMark, setIsMark] = useState(false);
  if (isMark) {
    return <MdOutlineBookmarkAdd onClick={() => setIsMark(false)} />;
  }
  return <MdBookmarkAdded onClick={() => setIsMark(true)} />;
}
