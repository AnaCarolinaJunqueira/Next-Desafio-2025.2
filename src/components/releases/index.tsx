import Title from "../title";
import ReleasesCard from "./card";


export default function Releases(){
    return(
        <div className="w-full space-y-12">
            <div>
                <Title title="Lançamentos Recentes"/>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-20 justify-center">
                <ReleasesCard src="/home_page/releases/mega_evolution.png" title="Pokémon TCG: Mega Evolution" description="Explore a nova era das megaevoluções!"/>
            </div>
        </div>
    ) 
} 