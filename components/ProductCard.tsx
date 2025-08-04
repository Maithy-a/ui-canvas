
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

const ProductCard = ({ name, price, imageUrl, tags, deliveryEnd }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-4xl border p-2 shadow-md w-[300px] overflow-hidden">
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={300}
                    height={200}
                    className="object-cover rounded-3xl hover:brightness-50 transition-all 0.6s ease-in-out cursor-pointer"
                />

                <span className="absolute top-2 right-2 bg-white text-black rounded-xl cursor-pointer px-3 py-1 text-sm font-semibold">
                    ${price}
                </span>

                <div className="absolute w-full bottom-0 text-sm text-center bg-teal-800 p-2 text-white rounded-b-3xl">
                    Free Delivery until {new Date(deliveryEnd).toLocaleDateString()}
                </div>
            </div>
            <div className="p-2">
                <div className="flex justify-between items-center space-y-2 mt-2">
                    <h3 className="text-lg font-heading font-semibold">{name}</h3>
                    <Button variant="link" className="text-sm cursor-pointer hover:text-teal-700 transition-colors 0.4s ease-in-out">
                        Order now
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;