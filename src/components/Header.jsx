'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from '@/utils/links'

const Header = () => {

  const pathname = usePathname()

  return (
    <header id="header">
      <div className="container flex flex-col md:flex-row gap-12 items-center md:justify-between m-auto">
        <Link href={'/'}>
          <Image
            src="/img/logo.svg"
            alt="logo de la empresa"
            width={300}
            height={40}
          />
        </Link>
        
        <nav className="text-white flex items-center flex-col md:flex-row text-center text-lg font-bold uppercase">
          {links.map(link => (
            <Link 
              key={link.id} 
              href={link.href}
              className={`p-4 hover:bg-orange-500 transition ${pathname == link.href && 'bg-orange-500'}` }
            >{link.nombre}</Link>
          ))}
          <Link href='/compra' className="mx-4"><Image className="mx-auto my-2" src='/img/carrito.png' alt="imagen de carrito" width={40} height={40}/></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
