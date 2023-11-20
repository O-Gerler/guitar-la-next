'use client'

import { useEffect, useState } from "react";

const FormularioGuitarra = ({guitarra, numeros}) => {

  const [cantidad, setCantidad] = useState(0)
  const [datos, setDatos] = useState()
  const {nombre, precio, imagen} = guitarra[0].attributes

  useEffect(() => {
    setDatos(JSON.parse(localStorage.getItem('compra') ?? '{}'))
  }, [])

  function handleSubmit(e){
    e.preventDefault()

    if (cantidad < 1) return

    const guitarraSelecciona = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    }

    if (Object.keys(datos).includes(nombre)) {
      datos[nombre].cantidad = parseInt(datos[nombre].cantidad) + parseInt(cantidad)
    }else {
      datos[nombre] = guitarraSelecciona
      setDatos(datos)
    }

    localStorage.setItem('compra', JSON.stringify(datos))
  }
  
  function handleChange(e){
    setCantidad(e.target.value)
  }

  
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="w-full md:w-72 text-xl font-bold flex flex-col gap-2 items-center mt-[40px]"
    >
      <label className="py-1 text-justify w-full" htmlFor="cantidad">
        Seleccione cantidad:{" "}
      </label>
      <select
        onChange={handleChange}
        className="w-full border-2 border-black rounded-md"
        name=""
        id="cantidad"
      >
        {numeros.map((n) => (
          <option key={n} value={n}>
            {n == 0 ? "Seleccione" : n}
          </option>
        ))}
      </select>
      <input
        className="w-full px-4 py-1 bg-black text-white hover:bg-orange-500 transition-colors rounded-sm cursor-pointer"
        type="submit"
        value={"Agregar"}
        name=""
        id=""
      />
    </form>
  );
};

export default FormularioGuitarra;
