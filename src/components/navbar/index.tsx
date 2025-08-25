'use client'

import {ShoppingCart, CircleUserRound} from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links1 = [
    {href: '/', label: 'Home'},
    {href: '/produtos', label: 'Produtos'},
    {href: '/contato', label: 'Contato'},
    {href: '/gerenciamento', label: 'Gerenciamento'}   
]

const links2 = [
    {href: '/login', label: '', icone: CircleUserRound},
    {href: '/carrinho', label: '', icone: ShoppingCart}
]

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => setIsNavOpen(!isNavOpen)
    return(
        <header className="bg-darker-midnight-blue stcky top-0 z-20 mx-auto w-full py-4 px-6 md:p-0 mb-8">
            <div className="flex items-center justify-between w-full md:w-11/12 mx-auto">
            {/*Logo*/}
            <Link href="/" className="flex gap-4 items-center">
                <Image
                src={'/logo/logo2.png'}
                alt="Logo do site"
                width={940}
                height={940}
                className="h-30 w-30 rounded-xl"
                />
                <span className="text-white hidden md:block text-[20px] font-semibold">Covil das Cartas</span>
            </Link>

            <nav className="flex items-center justify-between w-full md:w-11/12 mx-auto">
                {/*Links do meio */}
                <div className="flex-1 hidden justify-center gap-8 md:flex">
                    {links1.map((link, index) =>
                    <Link href={link.href} key={index}>
                    <span className="text-3x1 text-white hover:bg-white/20 p-2 rounded-x1">{link.label}</span>
                    </Link>
                    )}
                </div>

                {/*Links da direita*/}
                <div className="hidden md:flex gap-6 items-center">
                    {links2.map((link, index) =>{
                        const Icon = link.icone;
                        return(
                        <Link className="flex items-center gap-1" href={link.href} key={index}>
                            {Icon && <Icon size={24} className="text-white"/>}
                            {link.label && <span className="text-white">{link.label}</span>}
                        </Link>
                        );
                    })}
                </div>
            </nav>
            </div>

        </header>
    )
}