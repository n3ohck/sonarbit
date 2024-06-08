import Link from 'next/link'
import LogoTipo from '@/public/images/logotipo.png'
import Image from "next/image";
export default function Logo() {
  return (
      <Link href="/" className="block" aria-label="Cruip">
        <Image src={LogoTipo} width={87} alt="SonarBit: Conciertos en Vivo y Musica Sin Limites"
               title="SonarBit: Conciertos en Vivo y Musica Sin Limites" className="rounded-full mt-3 shadow-xl logo" />
      </Link>
  )
}
