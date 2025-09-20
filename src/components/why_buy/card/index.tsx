import { LucideIcon } from "lucide-react";

type ReleasesCardProps = {
    title: string;
    icon: LucideIcon;
}

export default function WhyBuyCard({title, icon: Icon}: ReleasesCardProps){
    return(
        <div className="flex flex-col items-center justify-center gap-4 w-65 p-3">
            {/*Icone */}
            <div className="relative cursor-default">
                <Icon className="w-25 h-25 text-light-black"/>
            </div>
            {/*Texto*/}
            <h2 className="text-xl text-center text-light-black cursor-default">{title}</h2>
        </div>
    )
}