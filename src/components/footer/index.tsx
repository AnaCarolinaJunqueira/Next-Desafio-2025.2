import Image from "next/image";
import Link from "next/link";

import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer(){
    return(
        <footer className="bg-darker-blue sticky top-0 z-20 mx-auto w-full flex flex-col items-center justify-between gap-y-4 md:flex-row md:items-center">
            {/*Logo*/}
            <Link href="/" className="flex gap-4 items-center cursor-default">
                <Image
                src={'/logo/logo2.png'}
                alt="Logo do site"
                width={940}
                height={940}
                className="h-30 w-30 rounded-x1"
                />
            </Link>
            {/*Nome e Copyright*/}
            <div className="text-sm md:text-x1 cursor-default flex-col justify-center items-center">
                <p className="text-white font-extralight">@ 2025 Covil das Cartas. Todos os direitos reservados.</p>
                <div className="flex justify-center gap-2">
                    <p className="text-white font-extralight underline">Termos de Uso</p>
                    <p className="text-white font-extralight">|</p>
                    <p className="text-white font-extralight underline">Política de Privacidade</p>
                </div>
            </div>
            {/*Redes Sociais*/}
            <div className="justify-center flex gap-2 pb-8 md:pr-10">
                <Link href="/" className="cursor-pointer"><FaInstagram size={35} color="white"/></Link>
                <Link href="/" className="cursor-pointer"><FaFacebook size={35} color="white"/></Link>
                <Link href="/" className="cursor-pointer"><FaLinkedin size={35} color="white"/></Link>
                <Link href="/" className="cursor-pointer"><BsFillTelephoneFill size={35} color="white"/></Link>
            </div>
        </footer>
    )
}