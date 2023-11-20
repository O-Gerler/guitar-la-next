import Image from 'next/image'
import Link from 'next/link'

const CardPost = ({post}) => {

  const {titulo, contenido, fecha, url, imagen} = post.attributes
  const imagenUrl = imagen.data.attributes.formats.medium.url

  return (
    <div className='flex flex-col justify-between gap-5 p-6'>
      <Image className='w-full' src={imagenUrl} alt={`imagen ${titulo}`} width={400} height={400}/>
      <div className='flex flex-col gap-2'>
        <h2 className='text-3xl font-bold uppercase'>{titulo}</h2>
        <p className='text-orange-500 font-black'>{fecha}</p>
        <p className='text-justify line-clamp-6'>{contenido}</p>
        <Link className='py-2 rounded-sm bg-black text-white font-bold text-center text-xl hover:bg-orange-500 transition-colors' href={`/blog/${url}`}>Ver Mas</Link>
      </div>
    </div>
  )
}

export default CardPost