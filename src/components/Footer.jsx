import links from '@/utils/links'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' bg-zinc-900 py-[5rem] text-white flex justify-center items-center flex-col md:flex-row md:justify-between gap-10 px-10 text-lg'>
      <nav className= 'font-bold uppercase flex gap-5 flex-col md:flex-row items-center'>
        {links.map(link => (
          <Link className='' key={link.id} href={link.href}>{link.nombre}</Link>
        ))}
      </nav>
      <p className='font-bold text-center'>Todos los derechos reservados {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer