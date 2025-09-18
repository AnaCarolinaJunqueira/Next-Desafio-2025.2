import Title from "../title";
import ReleasesCard from "./card";


export default function Releases(){
    return(
        <div className="w-full space-y-12">
            {/*Titulo da seção */}
            <div>
                <Title title="Lançamentos Recentes"/>
            </div>
            <div className="flex flex-wrap gap-14 md:gap-20 justify-center">
                {/*Cards*/}
                <ReleasesCard src="/home_page/releases/mega_evolution.png" title="Pokémon TCG: Mega Evolution" description="Explore a nova era das megaevoluções!"/>
                <ReleasesCard src="/home_page/releases/mega_evolution.png" title="Pokémon TCG: Mega Evolution" description="Explore a nova era das megaevoluções!"/>
                <ReleasesCard src="/home_page/releases/mega_evolution.png" title="Pokémon TCG: Mega Evolution" description="Explore a nova era das megaevoluções!"/>
            </div>
        </div>
    ) 
} 