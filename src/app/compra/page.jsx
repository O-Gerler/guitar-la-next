'use client'

import CardCompraGuitarra from "@/components/CardCompraGuitarra"
import Titulo from "@/components/Titulo"
import { useEffect, useState } from "react"

const Compra = () => {

  const [datos, setDatos] = useState([])
  const [precio, setPrecio] = useState(0)

  function limpiarCarrito() {
    localStorage.setItem('compra', '{}')
    setDatos([])
  }

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem('compra') ?? '{}')

    if (Object.keys(json).length == 0) return

    const compra = []

    for (const [key, value] of Object.entries(json)){
      compra.push(value)
    }
    
    setDatos(compra)
  }, [])

  useEffect(() => {
    setPrecio(datos.reduce((acc, value) => acc + (value.precio * value.cantidad), 0))
  }, [datos])

  return (
    <section className="my-10">
      <Titulo>Compra</Titulo>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 mt-5">
        <div className="col-span-2 p-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-black align-middle">Articulos</h2>
            <button className="text-xl font-bold bg-black text-white px-6 py-1 rounded-sm hover:bg-orange-500 transition-colors" onClick={limpiarCarrito}>Limpiar</button>  
          </div>
          <div className="mt-5">
            {datos.length > 0 
              ? datos.map(dato => (
                  <CardCompraGuitarra key={dato.id} guitarra={dato} setDatos={setDatos} datos={datos}/>
                )) 
              : <p className="mt-10">No has añadido ningun articulo</p>
            }  
          </div>
          
        </div>
        <aside className="bg-teal-50 p-10 space-y-10">
          <h3 className="text-xl font-bold">Resumen de el Pedido</h3>
          <p>Total a pagar: {precio} €</p>
        </aside>
      </div>
    </section>
  )
}

export default Compra