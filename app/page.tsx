import UserCard from "@/components/UserCard";
import ProductCard from "@/components/ProductCard";
import ProjectCard from "@/components/ProjectCard";
import HotelCard from "@/components/HotelCard";
import { Products, Projects, Users, Hotels } from "@/constants"

const page = () => {
  return (

    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="card-group">

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

          {Hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              name={hotel.name}
              imageUrl={hotel.imageUrl}
              price={hotel.price}
              description={hotel.description}
              stars={hotel.stars}
              tags={hotel.tags}
            />
          ))
          }
        </div>
      </main>

    </div>

  )
}

export default page;
