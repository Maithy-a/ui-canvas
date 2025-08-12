import { IconPlus } from "@tabler/icons-react"
import Image from "next/image"
import { Button } from "./ui/button"
import { ProfileCardProps } from "@/types"
import { Trophy, VerifiedIcon, Medal } from "lucide-react"

const ProfileCard = ({
    name,
    imageUrl,
    verified,
    wins,
    description,
    podiums
}: ProfileCardProps) => {
    return (
        <div className="rounded-4xl bg-white w-[300px] p-1 shadow-xl border border-gray-200">
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={300}
                    height={200}
                    className="object-cover w-full h-64 rounded-[28px]"
                />
            </div>

            <div className="space-y-3 p-3">
                <div className="flex gap-2 items-center">
                    <h3 className="text-lg font-semibold truncate">{name}</h3>
                    {verified && (
                        <VerifiedIcon className="w-4 h-4 text-lime-600" />
                    )}
                </div>

                <p className="text-xs text-gray-600 line-clamp-2">
                    {description}
                </p>
            </div>

            <div className="px-4 mt-2 mb-3 flex gap-2 text-xs justify-between items-center">
                <div className="flex items-center gap-2 text-gray-700">
                    <Medal className="w-4 h-4" />
                    <span>{podiums}</span>
                    <Trophy className="w-4 h-4" />
                    <span>{wins}</span>
                </div>

                <Button
                    variant="secondary"
                    className="rounded-full border border-gray-300 px-5 py-1 flex items-center gap-1 hover:border-lime-600 hover:text-lime-600 transition-colors duration-300"
                >
                    Follow
                    <IconPlus className="w-3 h-3" />
                </Button>
            </div>
        </div>
    )
}

export default ProfileCard
