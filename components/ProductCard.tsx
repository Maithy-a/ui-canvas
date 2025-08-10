
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import { IconShoppingCartBolt } from "@tabler/icons-react";

const ProductCard = ({
    name,
    price,
    imageUrl,
    tags,
    deliveryEnd }: ProductCardProps) => {

    return (
        <div className="bg-white rounded-4xl border p-2 shadow-md w-[300px] overflow-hidden">
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={300}
                    height={200}
                    className="object-cover rounded-3xl w-full h-[280px] hover:brightness-50 transition-brightness duration-400 ease-in-out cursor-pointer"
                />

                <span className="absolute top-2 right-2 bg-white text-black rounded-xl cursor-pointer px-3 py-1 text-sm font-semibold">
                    ${price}
                </span>

                <div className="absolute w-full bottom-0 text-sm text-center bg-teal-800/85 p-2 text-white rounded-b-3xl">
                    Free Delivery until {new Date(deliveryEnd).toLocaleDateString()}
                </div>
            </div>
            <div className="p-2">
                <div className="flex justify-between items-center space-y-2 mt-2">
                    <h3 className="text-lg font-heading font-semibold">{name}</h3>
                    <Button variant="link" className="text-sm cursor-pointer hover:text-teal-700 transition-colors 0.4s ease-in-out">
                        Order now
                        <IconShoppingCartBolt className="ml-2" />
                    </Button>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="cursor-pointer bg-teal-100 hover:bg-teal-300 rounded-full px-4" >{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;