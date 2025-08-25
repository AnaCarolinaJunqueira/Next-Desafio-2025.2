'use client'

import {ShoppingCart, CircleUserRound} from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
    {href: '/', label: 'Home'},
    {href: '/produtos', label: 'Produtos'},
    {href: '/contato', label: 'Contato'},
    {href: '/gerenciamento', label: 'Gerenciamento de Produtos'},
    {href: '/login', label: 'Login', icone: CircleUserRound},
    {href: '/carrinho', label: '', icone: ShoppingCart}
    
]

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => setIsNavOpen(!isNavOpen)
    return(
        <header className="bg-darker-midnight-blue stcky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
            <Link href="/" className="flex gap-4 items-center">
                <Image
                src={'/logo/logo2.png'}
                alt="Logo do site"
                width={904}
                height={904}
                className="h-30 w-30 rounded-xl"
                />
            </Link>
            </div>

        </header>
    )
}