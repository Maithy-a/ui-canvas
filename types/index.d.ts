type ProductCardProps = {
    name: string;
    price: number;
    imageUrl: string;
    tags: string[];
    deliveryEnd: Date;
};

type UserCardProps = {
    firstName: string;
    lastName: string;
    verified: boolean;
    bio: string;
    rating: number;
    earned: number;
    rate: number;
    imageUrl: string;
}

type ProjectCardProps = {
    projectLink: string;
    name: string;
    description: string;
    techStack: string[];
    imageUrl:string;
}