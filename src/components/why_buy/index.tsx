import Title from "../title";
import WhyBuyCard from "./card";
import {Package} from "lucide-react";

export default function WhyBuy(){
    return(
        <div className="w-full space-y-12">
            {/*Titulo da seção */}
            <Title title="Por que comprar conosco?"/>
            <div className="flex flex-wrap gap-14 md:gap-20 justify-center">
                {/*Cards*/}
                <WhyBuyCard icon={Package} title="Embalagem com proteção reforçada"/>
            </div>
        </div>
    )
}