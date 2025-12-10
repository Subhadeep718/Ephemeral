import { FaUser } from "react-icons/fa6";

interface AvatarProps {
  imgLink?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
}

const sizeMap = {
  sm: "h-[35px] w-[35px] text-[15px]",
  md: "h-[45px] w-[45px] text-[20px]",
  lg: "h-[60px] w-[60px] text-[25px]",
};

const iconSizeMap = {
  sm: 15,
  md: 20,
  lg: 25,
};

export default function Avatar({
  imgLink,
  alt = "avatar",
  size = "md",
  text,
}: AvatarProps) {
  return (
    <div className="relative inline-block">
      {imgLink ? (
        <img
          src={imgLink}
          alt={alt}
          className={`rounded-full object-cover ${sizeMap[size]}`}
        />
      ) : (
        <div
          className={`rounded-full bg-blue-100 text-blue-400 font-bold
          flex items-center justify-center ${sizeMap[size]}`}
        >
          {text ? text : <FaUser size={iconSizeMap[size]} />}
        </div>
      )}
    </div>
  );
}
