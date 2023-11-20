import Image from 'next/image'
import Link from 'next/link'

const CardGuitarra = ({ guitarra }) => {
  const { nombre, descripcion, precio, url, imagen } = guitarra.attributes
  const imagenUrl = imagen.data.attributes.formats.medium.url
  return (
    <div className='flex justify-center items-center gap-5 px-10 md:px-2 flex-col sm:flex-row'>
      <Image className='object-cover h-full w-full sm:w-1/3' src={imagenUrl} alt='imagen guitarra' width={300} height={100}/>
      <div className='flex flex-col gap-4'>
        <h2 className='text-5xl font-bold'>{nombre}</h2>
        <p className='text-lg line-clamp-6 '>{descripcion}</p>
        <h3 className='text-5xl text-orange-500 font-bold'>{precio}€</h3>
        <Link className='bg-black py-3 px-4 text-center uppercase rounded-sm text-white font-bold text-xl hover:bg-orange-500 transition-colors' href={`/tienda/${url}`}>Ver Mas</Link>
      </div>
    </div>
  )
}

export default CardGuitarra