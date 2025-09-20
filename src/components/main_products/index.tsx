import Title from "../title"
import MainProductsCard from "./card"

export default function MainProducts(){
    return(
        <div className="w-full space-y-12 text-center">
            {/*Titulo da seção*/}
            <div>
                <Title title="Principais Produtos"/>
            </div>
            {/*Cards*/}
            <div className="grid grid-cols-1 md:grid-cols-2  bp-840:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-20 justify-items-center">
            <MainProductsCard/>
            <MainProductsCard/>
            <MainProductsCard/>
            <MainProductsCard/>
            <MainProductsCard/>
            <MainProductsCard/>
            {/*Botão de 'Ver Mais'*/}
            </div>
                <button className="px-13 py-3 text-2xl bg-blue-magenta hover:bg-darker-blue-magenta rounded-lg font-semibold shadow-lg btn-zoom text-white">Ver Mais</button>
            <div>

            </div>
        </div>
    )
}