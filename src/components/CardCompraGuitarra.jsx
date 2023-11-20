/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const CardCompraGuitarra = ({guitarra, setDatos, datos}) => {

  const [cantidadGuitarra, setCantidadGuitarra] = useState(0)
  const {cantidad, imagen, nombre, precio, id} = guitarra

  useEffect(() => {
    setCantidadGuitarra(cantidad)
  }, []) 

  useEffect(() => {
    const json = JSON.parse(localStorage.getItem('compra') ?? '{}')

    if(!Object.keys(json).includes(nombre)) return
    
    json[nombre].cantidad = parseInt(cantidadGuitarra)
    localStorage.setItem('compra', JSON.stringify(json))
    
    const compra = []

    for (const [key, value] of Object.entries(json)){
      compra.push(value)
    }
    
    setDatos(compra)
  }, [cantidadGuitarra])


  function cambiarCantidad(valor) {
    if (valor == -1 && cantidadGuitarra == 1) {
      borrarDelLocalStorage()
      return
    }

    setCantidadGuitarra(parseInt(cantidadGuitarra) + parseInt(valor))
  }

  function borrarDelLocalStorage() {
    const compra = datos.filter(guitar => guitar.id != id)
    const json = JSON.parse(localStorage.getItem('compra') ?? '{}')
    delete json[nombre]
    localStorage.setItem('compra', JSON.stringify(json))
    setDatos(compra)
  }

  return (
    <div className='flex justify-between items-center text-xl font-bold'>
      <Image src={imagen} alt={`imagen de guitarra ${nombre}`} width={50} height={100}/>
      <h2>{nombre}</h2>
      <div className='flex items-center gap-3'>
        <div className='px-5 py-2 bg-blue-500 select-none' onClick={() => cambiarCantidad(-1)}> - </div>
        {cantidadGuitarra}
        <div className='px-5 py-2 bg-red-500 select-none' onClick={() => cambiarCantidad(1)}> + </div>
      </div>
      <p>{precio * cantidadGuitarra} €</p>
      <button className="text-xl font-bold bg-black text-white px-6 py-1 rounded-sm hover:bg-orange-500 transition-colors" onClick={borrarDelLocalStorage}>Eliminar</button>
    </div>
  )
}

export default CardCompraGuitarra