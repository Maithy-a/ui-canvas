import { BookmarkIcon, Mail, Verified } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconStarFilled } from "@tabler/icons-react";

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
    <div className="bg-white p-2 border shadow-md rounded-3xl w-[300]">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={firstName}
          width={300}
          height={200}
          className="object-cover rounded-xl max-h-56"
        />
        <div className="absolute top-2 right-2 p-2 rounded-full cursor-pointer glass-effect">
          <BookmarkIcon className="w-3 h-3 text-white" />
        </div>
      </div>

      <div className="space-y-2 p-3">
        <div className="flex items-center gap-2">
          <h3 className="text-md font-semibold">
            {firstName} {lastName}
          </h3>
          <span title="Verified user">
            {verified && <Verified className="w-4 h-4 text-blue-600" />}
          </span>
        </div>
        <p className="text-xs text-gray-600">{bio}</p>
      </div>

      <div className="px-2 mb-3 flex justify-around items-center h-8">
        <div className="items-center justify-center flex flex-col text-xs">
          <IconStarFilled className="size-3 text-yellow-400 fil" /> {rating}
          <div>Rating</div>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="items-center justify-center flex flex-col text-xs">
          $ {earned}
          <div>Earned</div>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="items-center justify-center flex flex-col text-xs">
          $ {rate}/hr
          <div>Rate</div>
        </div>
      </div>

      <Button variant="default" className="w-full rounded-full">
        <Mail />
        Get in touch
      </Button>
    </div>
  );
};

export default UserCard;
