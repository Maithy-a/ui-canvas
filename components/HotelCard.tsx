import { BookmarkIcon } from "lucide-react"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { IconStar } from "@tabler/icons-react"
import { Button } from "./ui/button"

const HotelCard = ({
    name,
    description,
    price,
    stars,
    tags,
    imageUrl
}: HotelCardProps) => {
    return (
        <div className="rounded-3xl w-[300px]  overflow-hidden" >
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover"
                />
                <span title="Save to wishlist" className="rounded-full absolute right-2 top-2 cursor-pointer glass-effect p-2 text-white " >
                    <BookmarkIcon className="size-4" />
                </span>
            </div>
            <div className="p-3 space-y-3 bg-yellow-950">
                <div className="flex justify-between items-center mb-3" >
                    <h3 className="text-white font-semibold" >{name}</h3>
                    <Badge variant="secondary" className="text-xs rounded-full" >
                        ${price.toLocaleString()}
                    </Badge>
                </div>
                <p className="text-xs text-gray-500 line-clamp-3" >{description}</p>
                <div className="flex gap-2">
                    <Badge variant="secondary" className="rounded-full flex items-center gap-1 text-xs" >
                        <IconStar className="w-3 h-3" />{stars}
                    </Badge>
                    {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="rounded-full text-xs" >
                            {tag}
                        </Badge>
                    ))}
                </div>
                <Button className="bg-white hover:bg-gray-200 text-black w-full rounded-full cursor-pointer">
                    Book now
                </Button>
            </div>
        </div>
    )
}

export default HotelCard