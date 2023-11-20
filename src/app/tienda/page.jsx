import Titulo from "@/components/Titulo"
import CardGuitarra from '@/components/CardGuitarra'

export const metadata = {
  title: 'Tienda',
  description: 'Aplicacion de tienda de guitarras creada con NextJS',
}

async function getGuitarras() {
  try {
    const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)

    if (!res.ok) {
      console.log('Respuesta invalida') 
      return null
    }
    
    const data = await res.json()
    return data.data
  } 
  catch(e) {
    console.log('No se pudo hacer el fecth: ' + e)
    return null
  }
}

const Tienda = async () => {

  const guitarras = await getGuitarras()

  return (
    <section className="my-10">
      <Titulo>Tienda</Titulo>
      {guitarras == null 
      ? (
        <h2 className="text-center text-2xl my-4 font-bold">Ups!!! Parece que a ocurrido un error</h2>
      )
      : (
        <main className="container gap-10 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {guitarras.map(guitarra => (
            <CardGuitarra 
              key={guitarra.id} 
              guitarra={guitarra} 
            />
          ))}
        </main>
      )}
    </section>
  )
}

export default Tienda