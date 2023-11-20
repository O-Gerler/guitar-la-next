import Titulo from '@/components/Titulo'
import Image from 'next/image'

export const metadata = {
  title: 'Nosotros',
  description: 'Aplicacion de tienda de guitarras creada con NextJS',
}

const Nosotros = () => {
  return (
    <section className="w-full my-10">
      <Titulo>Nosotros</Titulo>
      <div className="p-4 container mx-auto mt-5 text-lg font-bold flex gap-10 flex-col xl:flex-row items-center">
        <Image className='w-full xl:w-[500px] object-cover' src='/img/nosotros.jpg' alt='Imagen de ruta nosotros' width={1000} height={800}/>
        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus ultricies, risus vestibulum mattis viverra, dui risus ornare erat, ac ornare massa dolor non ex. Curabitur tempus neque in metus scelerisque, in imperdiet sem facilisis. Pellentesque ipsum justo, malesuada non mattis id, volutpat ac libero. Aenean at urna tempor, lacinia neque id, fermentum nisl. Sed a turpis tincidunt, molestie felis quis, maximus justo. Vestibulum non diam non est egestas condimentum a ut dui. Donec faucibus turpis ipsum. Donec sed magna in ex malesuada varius. Nam ac sagittis erat. Proin sit amet sodales ligula. Praesent dictum auctor viverra.
        <br /><br />
        Fusce vitae scelerisque elit, vitae consectetur nulla. Cras ut nibh nec nisi blandit elementum in vel nisi. Pellentesque ultrices justo id elit scelerisque, a tincidunt odio aliquet. </p>
      </div>
    </section>
  )
}

export default Nosotros