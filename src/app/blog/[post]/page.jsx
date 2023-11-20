import VolverLink from '@/components/VolverLink'
import Image from 'next/image'

async function getPost(url) {
  const res = await fetch(`${process.env.API_URl}/posts?filters[url]=${url}&populate=imagen`)
  const data = await res.json()

  return data.data
}

const PaginaPost = async ({params}) => {

  const posts = await getPost(params.post)
  const {titulo, contenido,fecha,imagen} = posts[0].attributes
  const imagenUrl = imagen.data.attributes.formats.medium.url

  return (
    <section className='my-10 px-10 md:px-2'>
      <VolverLink href={'/blog'} />
      <div className="container mx-auto space-y-5">
        <Image className='w-full h-96 object-cover bg-center' src={imagenUrl} alt={`imagen ${titulo}`} width={1000} height={400} />
        <div className='space-y-5'>
          <h1 className='text-6xl font-bold'>{titulo}</h1>
          <p className='text-xl text-orange-500 font-black'>{fecha}</p>
          <p className='text-xl'>{contenido}</p>
        </div>
      </div>
    </section>
  )
}

export default PaginaPost