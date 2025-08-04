import ProductCard from "@/components/ProductCard";
import UserCard from "@/components/UserCard";
import ProjectCard from "@/components/ProjectCard";
import { Products, Projects, Users } from "@/constants"

const page = () => {
  return (

    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {Products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            tags={item.tags}
            deliveryEnd={item.deliveryEnd}
          />
        ))}

        {Users.map((user) => (
          <UserCard
            key={user.id}
            firstName={user.firstName}
            lastName={user.lastName}
            verified={user.verified}
            bio={user.bio}
            rating={user.rating}
            earned={user.earned}
            rate={user.rate}
            imageUrl={user.imageUrl}
          />
        ))}

        {Projects.map((project) => (
          <ProjectCard
            key={project.id}
            projectLink={project.projectLink}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
          />
        ))
        }

      </main>

    </div>

  )
}

export default page;
