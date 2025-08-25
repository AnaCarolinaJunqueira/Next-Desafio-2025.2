'use client'

import {ShoppingCart, CircleUserRound, AlignJustify, Icon} from "lucide-react"
import { Span } from "next/dist/trace";
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

            <nav className="flex items-center justify-between w-full md:w-11/12 mx-auto">
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
                {/*Links do meio */}
                <div className="flex-1 hidden justify-center gap-8 md:flex">
                    {links1.map((link, index) =>
                    <Link href={link.href} key={index}>
                    <span className="text-lg text-white hover:bg-white/20 p-2 rounded-x1">{link.label}</span>
                    </Link>
                    )}
                </div>

                {/*Links da direita*/}
                <div className="hidden md:flex justify-center gap-6 items-center w-[282px] h-[120px]">
                    {links2.map((link, index) =>{
                        const Icon = link.icone;
                        return(
                        <Link className="flex items-center gap-1" href={link.href} key={index}>
                            {Icon && <Icon size={30} className="text-white"/>}
                            {link.label && <span className="text-white">{link.label}</span>}
                        </Link>
                        );
                    })}
                </div>
                {/*menu hamburger */}
                <button className="md:hidden text-white" onClick={toggleNav}>
                    <AlignJustify size={40}/>
                </button>
            </nav>

            {/*Menu Hamburger Aberto */}
            {isNavOpen && (
                <div className="md:hidden flex flex-col items-center justify-center mt-4 gap-4">
                    {links1.map((link, index) => (
                        <Link href={link.href} key={index} className="flex justify-center w-full text-center text-white px-4 py-2 rounded-x1 hover:bg-gray-700">
                        <span className="text-lg">
                            {link.label}
                        </span>
                        </Link>
                    ))}
                    <div className="flex gap-4 mt-2 justify-center">
                        {links2.map((link, index) =>{
                            const Icon = link.icone;
                            return(
                                <Link href={link.href} key={index} className="flex items-center gap-1 text-white px-4 py-2 rounded-x1 hover:bg-gray-700">
                                    {Icon && <Icon size={35}/>}
                                    {link.label && <span>{link.label}</span>}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </header>
    )
}