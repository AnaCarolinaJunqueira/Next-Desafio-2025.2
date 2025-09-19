import Title from "../title";
import WhyBuyCard from "./card";
import {Package, BadgeCheck, ShieldCheck, Truck} from "lucide-react";

export default function WhyBuy(){
    return(
        <div className="w-full space-y-12">
            {/*Titulo da seção */}
            <Title title="Por que comprar conosco?"/>
            <div className="flex flex-wrap gap-14 md:gap-20 justify-center pb-20">
                {/*Cards*/}
                <WhyBuyCard icon={Package} title="Embalagem com proteção reforçada"/>
                <WhyBuyCard icon={BadgeCheck} title="Cartas 100% originais"/>
                <WhyBuyCard icon={ShieldCheck} title="Pagamento Seguro"/>
                <WhyBuyCard icon={Truck} title="Envio rápido e rastreável"/>
            </div>
        </div>
    )
}