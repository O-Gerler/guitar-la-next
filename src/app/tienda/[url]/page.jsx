import VolverLink from '@/components/VolverLink'
import Image from 'next/image'
import {numeros} from '@/utils/links'
import FormularioGuitarra from '@/components/FormularioGuitarra'

async function getGuitarra(url) {
  const res = await fetch(`${process.env.API_URl}/guitarras?filters[url]=${url}&populate=imagen`)
  const data = await res.json()

  return data.data
}

const PaginaGuitarra = async ({params}) => {

  const guitarra = await getGuitarra(params.url)

  const {nombre, descripcion, precio, imagen} = guitarra[0].attributes
  const imagenUrl = imagen?.data.attributes.formats.medium.url

  return (
    <section className='my-10 px-5'>
      <VolverLink href={'/tienda'} />
      <div className='mx-auto flex gap-10 flex-col md:flex-row justify-center items-center container'>
        <Image src={imagenUrl} width={300} height={300} alt={`guitarra ${nombre}`}/>
          <div className='space-y-5'>
          <h1 className='text-6xl font-bold'>{nombre}</h1>
          <p className='text-xl'>{descripcion}</p>
          <p className='text-4xl text-orange-500 font-bold'>${precio}€</p>
          <FormularioGuitarra guitarra={guitarra} numeros={numeros}/>
        </div>
      </div>
    </section>
  )
}

export default PaginaGuitarra