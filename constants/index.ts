export const Products = [
    {
        id: 1,
        name: "Ice Matcha",
        price: 12.00,
        imageUrl: "/images/matcha.jpg",
        tags: ["Matcha", "Ice Cubes", "Honey", "Milk"],
        deliveryEnd: new Date(),
    },
    // {
    //     id: 2,
    //     name: "Ice Matcha",
    //     price: 12.00,
    //     imageUrl: "/images/matcha.jpg",
    //     tags: ["Matcha", "Ice Cubes", "Honey", "Milk"],
    //     deliveryEnd: new Date(),
    // },
    // {
    //     id: 3,
    //     name: "Ice Matcha",
    //     price: 12.00,
    //     imageUrl: "/images/matcha.jpg",
    //     tags: ["Matcha", "Ice Cubes", "Honey", "Milk"],
    //     deliveryEnd: new Date(),
    // },
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
    },
    //  {
    //     id: 2,
    //     firstName: "Moses",
    //     lastName: "David",
    //     verified: false,
    //     bio: "I'm a Software engineer who focuses on delivering quality and aesthetic software designs and products.",
    //     rating: 5.0,
    //     earned: 4000,
    //     imageUrl: "/images/moses.jpg",
    //     rate: 150,
    // },
    // {
    //     id: 3,
    //     firstName: "Moses",
    //     lastName: "David",
    //     verified: false,
    //     bio: "I'm a Software engineer who focuses on delivering quality and aesthetic software designs and products.",
    //     rating: 5.0,
    //     earned: 4000,
    //     imageUrl: "/images/moses.jpg",
    //     rate: 150,
    // }
]

export const Projects = [
    {
        id: 1,
        projectLink: "https://banking-jet.vercel.app/",
        name: "Chain funds",
        description: "System that allows users to securely connect multiple bank accounts, track real-time transactions, and send funds using a seamless and secure interface.",
        techStack: ["Next.js", "Typescript", "Appwrite", "Tailwind css"],
        imageUrl: "/images/projects/chain-fund.png",
    },
    //  {
    //     id: 2,
    //     projectLink: "https://maithya.vercel.app",
    //     name: "Portfolio website",
    //     description: "A clean and fully responsive personal portfolio website, built entirely with HTML and CSS as part of the July 2025 Hackathon challenge  showcasing design precision and code simplicity without relying on JavaScript.",
    //     techStack: ["Next.js", "Typescript", "Appwrite", "Tailwind css"],
    //     imageUrl: "/images/projects/portfolio.png",
    // },
    //   {
    //     id: 3,
    //     projectLink: "https://screen-recording-sharing-app.vercel.app",
    //     name: "Snap Cast",
    //     description: "Screen recording and sharing app, that makes screen recording easy from walkthrough's to full presentations, smooth and sharable in seconds",
    //     techStack: ["Next.js", "Typescript", "Appwrite", "Tailwind css"],
    //     imageUrl: "/images/projects/snapCast.png",
    // },
]

export const Hotels = [
    {
        id:1,
        imageUrl:"/images/skyline.jpeg",
        name:"Dubai Skyline Suite",
        description:"Romantic views of the Burj Khalifa with flor-to-ceiling windows and a private balcony",
        price:1050,
        stars:4.9,
        tags:["Couples Stay","City Lights"]
    }
]