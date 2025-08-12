import UserCard from "@/components/UserCard";
import ProductCard from "@/components/ProductCard";
import ProjectCard from "@/components/ProjectCard";
import ProfileCard from "@/components/ProfileCard";
import { getProjects } from "@/actions/getProjects";
import { getProducts } from "@/actions/getProducts";
import { getUsers } from "@/actions/getUsers";
import { getProfiles } from "@/actions/getProfiles";


const page = async () => {

  const [projects, products, users, profiles] = await Promise.all([
    getProjects(),
    getProducts(),
    getUsers(),
    getProfiles()
  ]);


  return (

    < div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20" >

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="card-group">

          {profiles.map((profile) => (
            <ProfileCard
              key={profile._id?.toString()}
              name={profile.name}
              imageUrl={profile.imageUrl}
              verified={profile.verified}
              wins={profile.wins}
              description={profile.description}
              podiums={profile.podiums}
            />
          ))}

          {projects.map((project) => (
            <ProjectCard
              key={project._id?.toString()}
              projectLink={project.projectLink}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              imageUrl={project.imageUrl}
            />
          ))
          }

          {products.map((product) => (
            <ProductCard
              key={product._id?.toString()}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              tags={product.tags}
              deliveryEnd={product.deliveryEnd}
            />
          ))}

          {users.map((user) => (
            <UserCard
              key={user._id.toString()}
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

        </div>
      </main>

    </ div>

  )
}

export default page;
