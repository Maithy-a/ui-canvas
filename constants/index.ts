export const Products = [
    {
        id: 1,
        name: "Ice Matcha",
        price: 12.00,
        imageUrl: "/images/matcha.jpg",
        tags: ["Matcha", "Ice Cubes", "Honey", "Milk"],
        deliveryEnd: new Date(),
    },
]

export const Users = [
    {
        id: 1,
        firstName: "Bonface",
        lastName: "Maithya",
        verified: true,
        bio: "I'm a Software engineer who focuses on delivering quality and aesthetic software designs and products.",
        rating: 4.8,
        earned: 200,
        imageUrl: "/images/bm.jpg",
        rate: 50,
    }, {
        id: 2,
        firstName: "Moses",
        lastName: "David",
        verified: false,
        bio: "I'm a Software engineer who focuses on delivering quality and aesthetic software designs and products.",
        rating: 5.0,
        earned: 4000,
        imageUrl: "/images/moses.jpg",
        rate: 150,
    }
]

export const Projects = [
    {
        id: 1,
        projectLink: "https://banking-jet.vercel.app/",
        name: "Chain funds",
        description: "System that allows users to securely connect multiple bank accounts, track real-time transactions, and send funds using a seamless and secure interface.",
        techStack: ["Next.js", "Typescript", "Appwrite", "tailwind css"],
        imageUrl: "/images/projects/chain-fund.png",
    }
]