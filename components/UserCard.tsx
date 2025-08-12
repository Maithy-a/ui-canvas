import { BookmarkIcon, Mail, Verified } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconStarFilled } from "@tabler/icons-react";
import { UserCardProps } from "@/types";

const UserCard = ({
  firstName,
  lastName,
  verified,
  bio,
  rate,
  earned,
  rating,
  imageUrl,
}: UserCardProps) => {
  return (
    <div className="bg-white p-2 border border-gray-200 shadow-md rounded-3xl w-[300px]">

      <div className="relative">
        <Image
          src={imageUrl}
          alt={`${firstName} ${lastName}`}
          width={300}
          height={200}
          className="object-cover w-full h-62 rounded-xl hover:brightness-90 transition duration-300 cursor-pointer"
        />
        <div className="absolute top-2 right-2 p-1.5 rounded-full cursor-pointer bg-black/40 backdrop-blur-md hover:bg-black/60 transition">
          <BookmarkIcon className="w-4 h-4 text-white" />
        </div>
      </div>

      <div className="space-y-2 p-3">
        <div className="flex items-center gap-2">
          <h3 className="text-md font-semibold truncate">
            {firstName} {lastName}
          </h3>
          {verified && (
            <Verified className="w-4 h-4 text-blue-600 shrink-0" title="Verified user" />
          )}
        </div>
        <p className="text-xs text-gray-600 line-clamp-2">{bio}</p>
      </div>

      <div className="px-2 my-3 flex justify-around items-center h-10">
        <div className="flex flex-col items-center text-xs">
          <IconStarFilled className="w-3 h-3 text-yellow-400" />
          <span>{rating}</span>
          <span className="text-gray-500">Rating</span>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex flex-col items-center text-xs">
          <span>${earned.toLocaleString()}</span>
          <span className="text-gray-500">Earned</span>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="flex flex-col items-center text-xs">
          <span>${rate}/hr</span>
          <span className="text-gray-500">Rate</span>
        </div>
      </div>

      <div className="px-3 pb-2">
        <Button
          variant="default"
          className="w-full bg-black text-white rounded-full flex items-center justify-center gap-2 hover:bg-gray-800 cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          Get in touch
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
