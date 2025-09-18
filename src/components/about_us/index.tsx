import Title  from "../title"
import AboutUsCard from "./card"

export default function AboutUs(){
    return(
        <div className="w-full space-y-12 ">
            <div>
                <Title title="Sobre Nós"/>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-20 justify-center space-y-12">
                <AboutUsCard title="Missão" description="Oferecer cartas originais e bem cuidadas, garantindo a melhor experiência para colecionadores e duelistas em todo o Brasil."/>
                <AboutUsCard title="Visão" description="Ser referência em qualidade e segurança na venda de cartas TCG em português, inglês e japonês."/>
                <AboutUsCard title="Valores"
                    description="Compromisso com o cliente
                    Transparência e confiança
                    Excelência no envio e no cuidado"/>
            </div>
        </div>
    )
} 