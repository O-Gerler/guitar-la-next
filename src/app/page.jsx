import Blog from "./blog/page";
import Tienda from "./tienda/page";

async function getCurso() {
  const res = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  const data = await res.json();

  return data.data.attributes;
}

export default async function Home() {
  const curso = await getCurso();
  const { titulo, contenido, imagen } = curso;
  const imagenUrl = imagen.data.attributes.formats.medium.url;
  console.log(imagenUrl);

  return (
    <>
      <Tienda />
      <section
        className={`w-full py-40 lg:py-56 bg-cover bg-no-repeat bg-gradient-to-tr from-slate-800 to-slate-500`}
        style={{ backgroundImage: `linear-gradient(to right, rgb(0 0 0 / .8), rgb(0 0 0 / .6)), url('${imagenUrl}')` }}
      >
        <div className="container mx-auto text-white text-xl font-bold flex items-end flex-col gap-10 px-10 md:px-2">
          <h2 className="text-5xl text-orange-500 w-full lg:w-1/2">{titulo}</h2>
          <p className="w-full lg:w-1/2">{contenido}</p>  
        </div>
      </section>
      <Blog />
    </>
  );
}
