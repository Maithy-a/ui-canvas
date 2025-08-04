import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconLink } from '@tabler/icons-react';

const ProjectCard = ({ projectLink, name, description, techStack, imageUrl }: ProjectCardProps) => {
    return (
        <div className='project-card' >
            <div className="relative">
                <Image src={imageUrl} alt={name} width={300} height={200}
                    className=" object-cover w-full h-full hover:"
                />
                <div className="absolute right-2 top-2">
                    <Link href={projectLink} target="_blank" rel="noopener noreferrer">
                        <Button
                            variant="ghost"
                            className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-3 flex items-center gap-1 cursor-pointer"
                        >
                            Project Link <IconLink className="w-3 h-3"/>
                        </Button>
                    </Link>
                </div>

            </div>
            <div className=" p-3 mx-2">
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold"> {name}</h3>
                    <p className="text-gray-600 text-xs mb-4" >
                        {description}
                    </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                    {techStack.map((techStack, index: any) => (
                        <Badge key={index} variant="secondary"  >{techStack}</Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard