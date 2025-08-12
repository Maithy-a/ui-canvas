import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconLink } from '@tabler/icons-react';
import { ProjectCardProps } from "@/types";

const ProjectCard = ({
    projectLink,
    name,
    description,
    techStack,
    imageUrl
}: ProjectCardProps) => {
    return (
        <div className='project-card' >
            <div className="relative">
                <Image src={imageUrl} alt={name} width={300} height={200}
                    className=" object-cover w-full h-62 hover:brightness-60 transition-brightness duration-600 ease-in-out cursor-pointer"
                />
                <div className="absolute right-3 top-3">
                    <Link href={projectLink} target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="default"
                            className="bg-blue-600 hover:bg-blue-500 text-white text-xs  flex items-center gap-2"
                        >
                            Project Link
                            <IconLink className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className=" p-3 mx-2 space-y-4">

                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-black text-xs" >
                    {description}
                </p>


                <div className="flex gap-2 flex-wrap">
                    {techStack.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="cursor-pointer" >{tech}</Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard