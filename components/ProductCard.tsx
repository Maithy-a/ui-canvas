import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { IconArrowUpRight } from "@tabler/icons-react";
import { ProductCardProps } from "@/types";

const ProductCard = ({
    name,
    price,
    imageUrl,
    tags,
    deliveryEnd,
}: ProductCardProps) => {
    return (
        <div className="bg-white rounded-4xl border border-gray-200 shadow-md w-[300px] overflow-hidden">

            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={300}
                    height={200}
                    className="object-cover rounded-3xl w-full h-[280px] hover:brightness-90 transition duration-300 ease-in-out cursor-pointer"
                />

                <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-black rounded-xl px-3 py-1 text-sm font-semibold shadow-sm">
                    ${price}
                </span>

                <div className="absolute w-full bottom-0 text-sm text-center bg-teal-800/85 p-2 text-white rounded-b-3xl">
                    Free Delivery until{" "}
                    {new Date(deliveryEnd).toLocaleDateString(undefined, {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                </div>
            </div>

            <div className="p-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold truncate">{name}</h3>
                    <Button
                        variant="link"
                        className="text-sm flex items-center gap-1 hover:text-teal-700 transition-colors duration-300"
                    >
                        Order now
                        <IconArrowUpRight className="w-4 h-4" />
                    </Button>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="cursor-pointer bg-teal-100 hover:bg-teal-300 rounded-full px-4 py-1 text-xs"
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
