import Titulo from '@/components/Titulo'
import Link from 'next/link'

export const metadata = {
  title: '404 - Página no encontrada',
  description: 'Aplicacion de tienda de guitarras creada con NextJS',
}

const Pagina404 = () => {
  return (
    <section className='my-10'>
      <Titulo>Error 404</Titulo>
      <h2 className='text-2xl mt-4 font-bold text-center'>Ooooops!! Parece que la página que buscas no existe</h2>
      <div className='flex justify-center my-20'>
        <Link href='/' className='px-10 py-4 bg-black rounded-sm font-bold text-2xl text-white hover:bg-orange-500 transition-colors' >Volver</Link>
      </div>
    </section>
  )
}

export default Pagina404