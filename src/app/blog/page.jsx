import CardPost from "@/components/CardPost"
import Titulo from "@/components/Titulo"

export const metadata = {
  title: 'Blog',
  description: 'Aplicacion de tienda de guitarras creada con NextJS',
}

async function getPosts() {
  const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const data = await res.json()

  return data.data
}

const Blog = async () => {

  const posts = await getPosts()

  return (
    <section className="my-10 space-y-10">
      <Titulo>Posts</Titulo>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-10">
        {posts.map(post => (
          <CardPost key={post.id} post={post}/>
        ))}
      </div>
    </section>
  )
}

export default Blog